#!/usr/bin/env node
/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { decamelize, Environment, Storage } from "@matter/main";
import { ValidationError } from "@matter/main/types";
import { CommandPipe } from "@matter/testing";
import { NamedPipeCommandHandler } from "./NamedPipeCommandHandler.js";
import { StorageBackendAsyncJsonFile } from "./storage/StorageBackendAsyncJsonFile.js";
import { StorageBackendSyncJsonFile } from "./storage/StorageBackendSyncJsonFile.js";

// TODO - the get*Parameter calls are deprecated along with matter-node.js so copied here temporarily.  Replace with
// yargs ?
const commandArguments = process.argv.slice(2);

export function getParameter(name: string) {
    let markerIndex = commandArguments.indexOf(`-${name}`);
    if (markerIndex === -1) markerIndex = commandArguments.indexOf(`--${name}`);
    if (markerIndex === -1 || markerIndex + 1 === commandArguments.length) return undefined;
    return commandArguments[markerIndex + 1];
}

export function hasParameter(name: string) {
    let markerIncluded = commandArguments.includes(`-${name}`);
    if (!markerIncluded) markerIncluded = commandArguments.includes(`--${name}`);
    return markerIncluded;
}

export function getIntParameter(name: string) {
    const value = getParameter(name);
    if (value === undefined) return undefined;
    const intValue = parseInt(value, 10);
    if (isNaN(intValue)) throw new ValidationError(`Invalid value for parameter ${name}: ${value} is not a number`);
    return intValue;
}

export abstract class TestInstance {
    #commandPipe?: CommandPipe;

    get baseAppName() {
        return this.constructor.name.replace(/TestInstance(?:Legacy)?/, "");
    }

    get appName() {
        if (this.constructor.name.endsWith("Legacy")) {
            return `${this.baseAppName}-Legacy`;
        }
        return this.baseAppName;
    }

    get commandPipeName() {
        return decamelize(this.baseAppName, "_");
    }

    constructor(protected config: TestInstanceConfig) {}

    get commandPipe() {
        if (this.#commandPipe === undefined) {
            if (this.config.commandPipeFactory === undefined) {
                throw new Error(`Cannot instantiate ${this.appName} without command pipe facotry`);
            }
            this.#commandPipe = this.config.commandPipeFactory(this);
        }

        return this.#commandPipe;
    }

    abstract setup(): Promise<void>;
    abstract start(): Promise<void>;

    async stop(): Promise<void> {
        await this.#commandPipe?.deactivate();
    }
}

export namespace log {
    export function directive(...args: unknown[]) {
        console.log(...args);
    }

    export function error(...args: unknown[]) {
        console.log(args);
    }
}

export interface TestInstanceConfig {
    storage: Storage;
    commandPipeFactory: (app: TestInstance) => CommandPipe;
    discriminator?: number;
    passcode?: number;
}

export interface TestInstanceConstructor {
    new (config: TestInstanceConfig): TestInstance;
}

export async function startTestApp(
    testInstanceClass: TestInstanceConstructor,
    storageType: typeof StorageBackendSyncJsonFile | typeof StorageBackendAsyncJsonFile = StorageBackendSyncJsonFile,
) {
    const storageName = `/tmp/chip_${getParameter("KVS") ?? "kvs"}`;

    const storage = new storageType(storageName);
    if (hasParameter("factoryreset")) {
        await storage.clear();
    }

    const testInstance = new testInstanceClass({
        storage,
        commandPipeFactory: (app: TestInstance) => new NamedPipeCommandHandler(app.commandPipeName),
        discriminator: getIntParameter("discriminator"),
        passcode: getIntParameter("passcode"),
    });

    await testInstance.setup();
    await testInstance.start();

    console.log(`======> Waiting for tests`);

    function exitHandler(signal: string) {
        console.log(`======> Closing test instance because of ${signal} ...`);
        testInstance
            .stop()
            .then(() => {
                const runtime = Environment.default.runtime;
                runtime.cancel();
                runtime.inactive
                    .then(() => {
                        storage
                            ?.close()
                            .then(() => {
                                console.log(`======> Test instance successfully closed.`);
                                process.exit(0);
                            })
                            .catch(error => {
                                console.log(error.stack);
                                process.exit(1);
                            });
                    })
                    .catch(error => {
                        console.log(error.stack);
                        process.exit(1);
                    });
            })
            .catch(error => {
                console.log(error.stack);
                process.exit(1);
            });
    }

    process.on("SIGTERM", () => exitHandler("SIGTERM"));
    process.on("SIGINT", () => exitHandler("SIGINT"));

    process.on("exit", code => console.log(`======> Exit Test instance with code ${code}`));
}
