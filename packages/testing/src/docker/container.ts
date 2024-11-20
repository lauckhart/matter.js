/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import Dockerode from "dockerode";
import { ReadStream } from "fs";
import { finished } from "stream/promises";
import type { Docker } from "./docker.js";
import { DockerError, NonZeroExitError } from "./errors.js";
import { Terminal } from "./terminal.js";

/**
 * Container interface with various convenience methods.
 */
export interface Container {
    docker: Docker;
    start(): Promise<void>;
    kill(): Promise<void>;
    remove(): Promise<void>;
    attach<T extends Terminal.Factory<unknown>>(terminal: T): Promise<ReturnType<T>>;
    exec(command: string | string[]): Promise<void>;
    exec<T extends Terminal.Factory<unknown>>(
        command: string | string[],
        terminal: T,
        stdin?: boolean,
    ): Promise<ReturnType<T>>;
    readFile(path: string): Promise<string>;
    writeFile(path: string, contents: {}): Promise<void>;
    resolveGlob(glob: string): Promise<string[]>;
}

/**
 * Create a new container.
 */
export function Container(docker: Docker, ptions: Container.Configuration): Promise<Container>;

/**
 * Wrap a {@link Dockerode.Container}.
 */
export function Container(docker: Docker, container: Dockerode.Container): Container;

export function Container(
    docker: Docker,
    input: Dockerode.Container | Container.Configuration,
): Container | Promise<Container> {
    if (input instanceof Dockerode.Container) {
        return adaptContainer(docker, input);
    }

    return createContainer(docker, input);
}

export namespace Container {
    export interface Configuration {
        image: string;
        tag?: string;
        platform?: string;
        name?: string;
        replace?: boolean;
        autoRemove?: boolean;
        entrypoint?: string | string[];
        command?: string | string[];
        env?: Record<string, string>;
        privileged?: boolean;
        binds?: Record<string, string>;
        network?: string;
        input?: ReadStream;
        openStdin?: boolean;
        cwd?: string;
    }
}

async function createContainer(docker: Docker, config: Container.Configuration) {
    const dockerodeConfig = configureContainer(config);
    const ct = await DockerError.adapt(docker.intf.createContainer(dockerodeConfig));
    return adaptContainer(docker, ct);
}

function configureContainer(options: Container.Configuration) {
    const createOptions: Dockerode.ContainerCreateOptions & { HostConfig: Dockerode.HostConfig } = {
        Image: options.image,
        HostConfig: {
            AutoRemove: options?.autoRemove !== false,

            // Ugh.  With a proper networking config we can perhaps avoid this.  Probably makes sense to run a utility
            // container with avahi
            SecurityOpt: ["apparmor:unconfined"],
        },
        AttachStdout: true,
        AttachStderr: true,
    } as Dockerode.ContainerCreateOptions & { HostConfig: Dockerode.HostConfig };

    const { name, entrypoint, env, binds, command, openStdin, network, cwd, platform } = options ?? {};

    if (network === "host") {
        createOptions.HostConfig.NetworkMode = "host";
    } else if (network !== undefined) {
        createOptions.NetworkingConfig = {
            EndpointsConfig: {
                eth0: {
                    NetworkID: network,
                },
            },
        };
    }

    if (cwd !== undefined) {
        createOptions.WorkingDir = cwd;
    }

    if (name !== undefined) {
        createOptions.name = name;
    }

    if (entrypoint !== undefined) {
        createOptions.Entrypoint = entrypoint;
    }

    if (env) {
        createOptions.Env = Object.entries(env).map(([k, v]) => `${k}=${v}`);
    }

    if (binds) {
        createOptions.HostConfig.Binds = Object.entries(binds).map(([k, v]) => `${k}:${v}`);
    }

    if (command) {
        createOptions.Cmd = Array.isArray(command) ? command : [command];
    }

    if (openStdin !== false) {
        createOptions.OpenStdin = true;
        createOptions.AttachStdin = true;
        createOptions.StdinOnce = true;
    }

    if (platform) {
        createOptions.platform = platform;
    }

    return createOptions;
}

function adaptContainer(docker: Docker, ct: Dockerode.Container): Container {
    return {
        docker,

        async start() {
            await DockerError.adapt(ct.start());
        },

        async kill() {
            await DockerError.adapt(ct.kill());
        },

        async remove() {
            await DockerError.adapt(ct.remove());
        },

        async attach<T extends Terminal.Factory<unknown>>(terminal: T, stdin = false) {
            const exited = new Promise<void>((resolve, reject) => {
                ct.wait().then(
                    code => {
                        if (code) {
                            reject(new NonZeroExitError(code));
                        } else {
                            resolve();
                        }
                    },
                    e => reject(DockerError.translate(e)),
                );
            });

            return terminal(
                this.docker,
                await DockerError.adapt(ct.attach({ stream: true, stdin, stdout: true, stderr: true })),
                exited,
            ) as ReturnType<T>;
        },

        async exec<T extends Terminal.Factory<unknown>>(command: string | string[], terminal?: T, stdin = false) {
            if (!Array.isArray(command)) {
                command = [command];
            }

            const exec = await DockerError.adapt(
                ct.exec({
                    Cmd: command,
                    AttachStdin: stdin,
                    AttachStdout: true,
                    AttachStderr: true,
                }),
            );

            const stream = await DockerError.adapt(exec.start({ hijack: true, stdin }));

            const exited = new Promise<void>((resolve, reject) => {
                finished(stream).then(() => {
                    exec.inspect().then(info => {
                        if (info.ExitCode) {
                            reject(new NonZeroExitError(info.ExitCode));
                        } else {
                            resolve();
                        }
                    }, reject);
                }, reject);
            });

            // No-terminal overload
            if (terminal === undefined) {
                const term = Terminal.Raw(docker, stream, exited);

                // We don't need the results but consuming will report any text in error message if the exit is non-zero
                await term.consume();

                return;
            }

            // Terminal overload
            return terminal(this.docker, stream, exited) as ReturnType<T>;
        },

        async readFile(path: string) {
            const terminal = await this.exec(["cat", path], Terminal.Line);
            return await terminal.consume();
        },

        async writeFile(path: string, contents: unknown) {
            const terminal = await this.exec(["bash", "-c", `cat - > ${JSON.stringify(path)}`], Terminal.Raw);

            await terminal.write(contents);
            await terminal.close();
        },

        async resolveGlob(glob: string) {
            const terminal = await this.exec(["bash", "-c", `ls ${glob}`], Terminal.Line);
            const output = await terminal.consume();
            return output.split("\n").filter(line => line !== "");
        },
    } satisfies Container;
}
