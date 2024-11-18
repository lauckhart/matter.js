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

export class ContainerError extends Error {
    constructor(
        message: string,
        readonly code: number,
        readonly textCode: string,
    ) {
        super(message);
    }
}

export class NonZeroExitError extends Error {
    constructor(
        readonly code: number,
        message?: string,
    ) {
        if (message) {
            message = `: ${message}`;
        } else {
            message = "";
        }
        super(`Process exited with error code ${code}${message}`);
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
        const info = await this.containerStatus(options.name);
        if (info) {
            const ct = await adaptContainer(this, this.#intf.getContainer(info.id));
            if (info.state !== "running") {
                await ct.start();
            }
            return ct;
        }

        const ct = await this.create(options);
        await ct.start();
        return ct;
    }

    async containerStatus(name: string) {
        const containers = await adaptErrors(
            this.#intf.listContainers({
                filters: { name: [name] },
            }),
        );
        const info = containers[0];
        if (info) {
            return {
                name,
                id: info.Id,
                state: info.State,
            };
        }
    }

    async create(options: Docker.ContainerOptions): Promise<Container> {
        const ct = await adaptErrors(this.#intf.createContainer(configureContainer(options)));
        return adaptContainer(this, ct);
    }

    async start(options: Docker.ContainerOptions): Promise<Container> {
        const ct = await this.create(options);
        await adaptErrors(ct.start());
        return ct;
    }

    async pull(nameAndTag: string) {
        const progress = await adaptErrors(this.#intf.pull(nameAndTag));
        await new Promise<void>((resolve, reject) => {
            this.#intf.modem.followProgress(progress, error => {
                if (error) {
                    reject(translateError(error));
                }
                resolve();
            });
        });
    }

    async buildImage(name: string, path: string) {
        const files = await readdir(path);

        const stream = await adaptErrors(
            this.#intf.buildImage(
                {
                    context: path,
                    src: files,
                },
                {
                    t: name,
                },
            ),
        );

        await new Promise<void>((resolve, reject) => {
            this.#intf.modem.followProgress(stream, (error, result) => {
                if (error) {
                    reject(translateError(error));
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

    if (attachStdin !== false) {
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
        let closed = false;
        let readError: undefined | Error;
        let signalReadReady: () => void;
        let readReady: Promise<void>;
        resetBuffer();

        stream.on("close", () => {
            closed = true;
            signalReadReady();
        });

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
                try {
                    for await (const chunk of this) {
                        chunks.push(chunk);
                        length += chunk.length;
                    }
                } catch (e) {
                    // With non-zero exit errors the message is probably in the data we were collecting, so include that
                    // in the error message
                    if (e instanceof NonZeroExitError) {
                        let message = textOf(join());
                        if (message.length > 256) {
                            message = message.slice(0, 256) + "…";
                        }
                        e = new NonZeroExitError(e.code, message);
                    }

                    throw e;
                }

                return join();

                function join() {
                    const output = new Uint8Array(length);
                    let pos = 0;
                    for (const chunk of chunks) {
                        output.set(chunk, pos);
                        pos += chunk.length;
                    }
                    return output;
                }
            },

            [Symbol.asyncIterator]: function (): AsyncIterator<Chunk, any, any> {
                return {
                    async next() {
                        while (!closed || buffer.length) {
                            await readReady;

                            let result;
                            if (buffer.length) {
                                result = {
                                    done: false,
                                    value: buffer.shift()!,
                                };

                                if (!buffer.length && !closed) {
                                    resetBuffer();
                                }

                                return result;
                            }

                            if (!closed) {
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

async function adaptContainer(docker: Docker, ct: Dockerode.Container): Promise<Container> {
    return {
        docker,

        async start() {
            await adaptErrors(ct.start());
        },

        async kill() {
            await adaptErrors(ct.kill());
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
                    e => reject(translateError(e)),
                );
            });

            return terminal(
                this.docker,
                await adaptErrors(ct.attach({ stream: true, stdin, stdout: true, stderr: true })),
                exited,
            ) as ReturnType<T>;
        },

        async exec<T extends Terminal.Factory<unknown>>(terminal: T, command: string | string[], stdin = false) {
            if (!Array.isArray(command)) {
                command = [command];
            }

            const exec = await adaptErrors(
                ct.exec({
                    Cmd: command,
                    AttachStdin: stdin,
                    AttachStdout: true,
                    AttachStderr: true,
                }),
            );

            const stream = await adaptErrors(exec.start({ hijack: true, stdin }));

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

function adaptErrors<T>(source: Promise<T>): Promise<T> {
    return source.catch(e => {
        throw translateError(e);
    });
}

function translateError(error: unknown): Error {
    if (!(error instanceof Error)) {
        return new Error(`${error}`);
    }
    const parsed = error.message.match(/^\(HTTP code (\d+)\) ([^-]+) - (.*)$/);
    if (parsed === null) {
        return error;
    }
    const [, status, textCode, message] = parsed;
    let text = message.trim();
    if (text === "") {
        text = textCode;
    }
    return new ContainerError(`${text} (${status})`, Number.parseInt(status), textCode.replace(" ", "-"));
}
