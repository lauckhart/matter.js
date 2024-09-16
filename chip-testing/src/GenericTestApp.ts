#!/usr/bin/env node
/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClassExtends, Environment } from "@matter.js/main";
import { StorageBackendAsyncJsonFile } from "./storage/StorageBackendAsyncJsonFile.js";
import { StorageBackendSyncJsonFile } from "./storage/StorageBackendSyncJsonFile.js";

export interface TestInstance {
    setup: () => Promise<void>;
    start: () => Promise<void>;
    stop: () => Promise<void>;
}

export namespace log {
    export function directive(...args: unknown[]) {
        console.log(...args);
    }

    export function error(...args: unknown[]) {
        console.log(args);
    }
}

export async function startTestApp(
    appName: string,
    testInstanceClass: ClassExtends<TestInstance>,
    storageType: typeof StorageBackendSyncJsonFile | typeof StorageBackendAsyncJsonFile = StorageBackendSyncJsonFile,
) {
    const vars = Environment.default.vars;

    const storageName = `/tmp/chip_${vars.string("KVS") ?? "kvs"}`;

    const storage = new storageType(storageName);
    if (vars.boolean("factoryreset")) {
        await storage.clear();
    }

    const testInstance = new testInstanceClass(storage, {
        appName,
        discriminator: vars.number("discriminator"),
        passcode: vars.string("passcode"),
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
