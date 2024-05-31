/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import Docker from "dockerode";
import { readdir } from "fs/promises";

let defaultDocker: Docker | undefined;

function dockerFor(options: { docker?: Docker }) {
    if (options.docker) {
        return options.docker;
    }
    if (defaultDocker === undefined) {
        defaultDocker = new Docker();
    }
    return defaultDocker;
}

/**
 * Docker image.
 */
export class Image {
    #options;
    #built;

    constructor(options: Image.Options) {
        this.#options = options;
        this.#built = false;
    }

    get name() {
        return this.#options.name;
    }

    async build() {
        if (this.#built || !this.#options.path) {
            return;
        }

        const options = this.#options.dockerOptions ?? {};
        if (options.t === undefined) {
            options.t = this.name;
        }

        const files = (await readdir(this.#options.path)).filter(n => n !== "Dockerfile");

        const docker = dockerFor(this.#options);
        const stream = await docker.buildImage(
            {
                context: this.#options.path,
                src: files,
            },
            options,
        );

        await new Promise((resolve, reject) => {
            docker.modem.followProgress(stream, (error, result) => (error ? reject(error) : resolve(result)));
        });

        this.#built = true;
    }
}

export namespace Image {
    export interface Options {
        docker?: Docker;
        name: string;

        /**
         * If buildable, the path to a directory with Dockerfile and other files required for build.
         */
        path?: string;

        /**
         * Docker build options.
         */
        dockerOptions?: Docker.ImageBuildOptions;
    }
}

/**
 * Docker container.
 */
export class Container {
    #options;
    #ct?: Docker.Container;

    constructor(options: Container.Options) {
        this.#options = options;
    }

    async start() {
        if (this.#ct !== undefined) {
            return this.#ct;
        }

        const docker = dockerFor(this.#options);

        const ps = await docker.listContainers({ filters: { name: [this.#options.name] } });
        if (ps.length) {
            const ct = docker.getContainer(this.#options.name);
            if (this.#options.clean) {
                await ct.remove();
            } else if (ps[0].State !== "running") {
                await ct.start();
                return (this.#ct = ct);
            }
        }

        const options = this.#options.createOptions ?? {};
        if (options.name === undefined) {
            options.name = this.#options.name;
        }

        const ct = await docker.createContainer(options);
        await ct.start();

        return (this.#ct = ct);
    }

    exec(command: string, ...args: string[]): Promise<void>;
    exec(command: Docker.ExecCreateOptions): Promise<void>;

    async exec(command: string | Docker.ExecCreateOptions, ...args: string[]) {
        if (typeof command === "string") {
            command = { Cmd: [command, ...args], AttachStdout: true, AttachStderr: true };
        }
        const ct = await this.start();
        const exec = await ct.exec(command);
    }
}

export namespace Container {
    export interface Options {
        docker?: Docker;
        name: string;
        image: Image;

        /**
         * If true the container is recreated if it already exists.
         */
        clean?: boolean;

        /**
         * Docker options used for creation.
         */
        createOptions?: Docker.ContainerCreateOptions;
    }
}
