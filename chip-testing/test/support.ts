/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment, InternalError, RuntimeService, StorageBackendMemory } from "@matter/main";
import { Chip, ContainerCommandPipe } from "@matter/testing";
import { AllClustersTestInstance } from "../src/AllClustersTestInstance.js";
import { BridgeTestInstance } from "../src/BridgeTestInstance.js";
import { TestInstance, TestInstanceConstructor } from "../src/GenericTestApp.js";

export function App(implementation: TestInstanceConstructor): Chip.Subject {
    let app: undefined | TestInstance;

    return {
        async setup() {
            const storage = new StorageBackendMemory();

            app = new implementation({
                storage,
                commandPipeFactory: app => new ContainerCommandPipe(Chip.container, app.appName),
                discriminator: 1234,
                passcode: 20202021,
            });

            await app.setup();
        },

        async start() {
            if (app === undefined) {
                throw new InternalError("App start before setup");
            }
            await app.start();
        },

        async stop() {
            if (app === undefined) {
                throw new InternalError("App stop before setup");
            }
            await app.stop();

            // Terminate and/or wait for any long-running services such as MdnsService
            const runtime = Environment.default.maybeGet(RuntimeService);
            if (runtime) {
                await runtime.close();
                Environment.default.delete(RuntimeService, runtime);
            }
        },
    };
}

export const AllClustersApp = App(AllClustersTestInstance);
export const BridgeApp = App(BridgeTestInstance);
