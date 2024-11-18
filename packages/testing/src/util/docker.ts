/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readdir } from "fs/promises";

import DockerModem from "docker-modem";
import Dockerode from "dockerode";
import { ReadStream } from "fs";
import { Writable } from "stream";
import { finished } from "stream/promises";
import { promisify } from "util";
import { asyncLinesOf, textOf } from "./text.js";

export class NonZeroExitError extends Error {
    constructor(readonly code: number) {
        super(`Process exited with error code ${code}`);
    }
}

/**
 * A high-level docker control API specialized for our purposes.
 */
export class Docker {
    #intf = new Dockerode();

    get modem() {
        return this.#intf.modem as DockerModem;
    }

    async open(options: Docker.ContainerOptions & { name: string }) {
        const container = await this.get(options.name);
        if (container === undefined) {
            return this.create(options);
        }
    }

    async get(name: string) {
        return this.#intf.getContainer(name);
    }

    async create(options: Docker.ContainerOptions): Promise<Container> {
        const ct = await this.#intf.createContainer(configureContainer(options));

        return {
            docker: this,

            async start() {
                await ct.start();
            },

            async kill() {
                await ct.kill();
            },

            async attach<T extends Terminal.Factory<unknown>>(terminal: T, stdin = false) {
                const exited = new Promise<void>((resolve, reject) => {
                    ct.wait().then(code => {
                        if (code) {
                            reject(new NonZeroExitError(code));
                        } else {
                            resolve();
                        }
                    }, reject);
                });

                return terminal(
                    this.docker,
                    await ct.attach({ stream: true, stdin, stdout: true, stderr: true }),
                    exited,
                ) as ReturnType<T>;
            },

            async exec<T extends Terminal.Factory<unknown>>(terminal: T, command: string | string[], stdin = false) {
                if (!Array.isArray(command)) {
                    command = [command];
                }

                const exec = await ct.exec({
                    Cmd: command,
                    AttachStdin: stdin,
                    AttachStdout: true,
                    AttachStderr: true,
                });

                const stream = await exec.start({ hijack: true, stdin });

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

                return terminal(this.docker, stream, exited) as ReturnType<T>;
            },

            async readFile(path: string) {
                const terminal = await this.exec(Terminal.Line, ["cat", path]);
                return await terminal.consume();
            },

            async resolveGlob(glob: string) {
                const terminal = await this.exec(Terminal.Line, ["bash", "-c", `ls ${glob}`]);
                const output = await terminal.consume();
                return output.split("\n").filter(line => line !== "");
            },
        } satisfies Container;
    }

    async start(options: Docker.ContainerOptions): Promise<Container> {
        const ct = await this.create(options);
        await ct.start();
        return ct;
    }

    async pull(nameAndTag: string) {
        const progress = await this.#intf.pull(nameAndTag);
        await new Promise<void>((resolve, reject) => {
            this.#intf.modem.followProgress(progress, error => {
                if (error) {
                    reject(error);
                }
                resolve();
            });
        });
    }

    async buildImage(name: string, path: string) {
        const files = await readdir(path);

        const stream = await this.#intf.buildImage(
            {
                context: path,
                src: files,
            },
            {
                t: name,
            },
        );

        await new Promise<void>((resolve, reject) => {
            this.#intf.modem.followProgress(stream, (error, result) => {
                if (error) {
                    reject(error);
                }

                const finalMessage = result[result.length - 1];
                const errorMessage = finalMessage?.error ?? finalMessage?.errorDetail?.message;
                if (errorMessage) {
                    reject(new Error(errorMessage));
                }

                resolve();
            });
        });
    }
}

export interface Container {
    docker: Docker;
    start(): Promise<void>;
    kill(): Promise<void>;
    attach<T extends Terminal.Factory<unknown>>(terminal: T): Promise<ReturnType<T>>;
    exec<T extends Terminal.Factory<unknown>>(terminal: T, command: string | string[]): Promise<ReturnType<T>>;
    readFile(path: string): Promise<string>;
    resolveGlob(glob: string): Promise<string[]>;
}

namespace Docker {
    export interface ContainerOptions {
        image: string;
        name?: string;
        replace?: boolean;
        autoRemove?: boolean;
        entrypoint?: string | string[];
        command?: string | string[];
        env?: Record<string, string>;
        privileged?: boolean;
        binds?: Record<string, string>;
        network?: "host";
        input?: ReadStream;
        attachStdin?: boolean;
    }
}

function configureContainer(options: Docker.ContainerOptions) {
    const createOptions = {
        Image: options.image,
        HostConfig: {
            AutoRemove: options?.autoRemove !== false,
        },
        AttachStdout: true,
        AttachStderr: true,
    } as Dockerode.ContainerCreateOptions;

    const { name, entrypoint, env, binds, network, command, attachStdin } = options ?? {};

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
        createOptions.HostConfig!.Binds = Object.entries(binds).map(([k, v]) => `${k}:${v}`);
    }

    if (network) {
        createOptions.HostConfig!.NetworkMode = network;
    }

    if (command) {
        createOptions.Cmd = Array.isArray(command) ? command : [command];
    }

    if (attachStdin) {
        createOptions.AttachStdin = true;
    }

    return createOptions;
}

export interface Terminal<OutputT> extends AsyncIterable<OutputT> {
    write(content: unknown): Promise<void>;
    close(): Promise<void>;
    consume(): Promise<OutputT>;
}

export namespace Terminal {
    export interface Factory<OutputT> {
        (docker: Docker, stream: NodeJS.ReadWriteStream, exited: Promise<void>): Terminal<OutputT>;
    }

    export interface Chunk extends Uint8Array {
        source?: "stdout" | "stderr";
    }

    export function Raw(docker: Docker, stream: NodeJS.ReadWriteStream, exited: Promise<void>): Terminal<Chunk> {
        const buffer = Array<Chunk>();
        let readError: undefined | Error;
        let signalReadReady: () => void;
        let readReady: Promise<void>;
        resetBuffer();

        const stdout = createOutputStream("stdout");
        const stderr = createOutputStream("stderr");

        docker.modem.demuxStream(stream, stdout, stderr);
        const write = promisify(stream.write).bind(stream) as (content: Uint8Array | string) => Promise<void>;

        // Exited promise should never be unhandled; it's only relevant if the streams close without error
        exited.catch(() => {});

        return {
            write(content: Uint8Array | string): Promise<void> {
                return write(content);
            },

            async close() {
                await promisify(stream.end).bind(stream)();
            },

            async consume(): Promise<Uint8Array> {
                const chunks = Array<Uint8Array>();
                let length = 0;
                for await (const chunk of this) {
                    chunks.push(chunk);
                    length += chunk.length;
                }
                const output = new Uint8Array(length);
                let pos = 0;
                for (const chunk of chunks) {
                    output.set(chunk, pos);
                    pos += chunk.length;
                }
                return output;
            },

            [Symbol.asyncIterator]: function (): AsyncIterator<Chunk, any, any> {
                return {
                    async next() {
                        while (!stderr.closed && !stdout.closed) {
                            await readReady;

                            let result;
                            if (buffer.length) {
                                result = {
                                    done: false,
                                    value: buffer.shift()!,
                                };

                                if (!buffer.length && !stderr.closed && !stdout.closed) {
                                    resetBuffer();
                                }

                                return result;
                            }

                            if (!stdout.closed && !stderr.closed) {
                                resetBuffer();
                            }
                        }

                        if (readError) {
                            throw readError;
                        }

                        await exited;

                        return {
                            done: true,
                            value: undefined,
                        };
                    },
                };
            },
        };

        function resetBuffer() {
            readReady = new Promise(resolve => {
                signalReadReady = resolve;
            });
        }

        function createOutputStream(source: "stdout" | "stderr") {
            const result = new Writable();

            result._write = chunk => {
                if (!(chunk instanceof Uint8Array)) {
                    throw new Error("Input chunk is not a byte array");
                }
                (chunk as Chunk).source = source;
                buffer.push(chunk as Chunk);
                signalReadReady();
            };

            result._final = () => {
                signalReadReady();
            };

            return result;
        }
    }

    export function Line(docker: Docker, stream: NodeJS.ReadWriteStream, exited: Promise<void>): Terminal<string> {
        const raw = Raw(docker, stream, exited);

        return {
            write(content: string | Uint8Array) {
                return raw.write(content);
            },

            close() {
                return raw.close();
            },

            consume() {
                return raw.consume().then(textOf);
            },

            [Symbol.asyncIterator]() {
                return asyncLinesOf(raw);
            },
        };
    }
}
