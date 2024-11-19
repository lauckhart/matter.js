/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError, Storage, StorageBackendMemory } from "@matter/main";
import { AllClustersTestInstance } from "../src/AllClustersTestInstance.js";
import { BridgeTestInstance } from "../src/BridgeTestInstance.js";
import { TestInstance } from "../src/GenericTestApp.js";

export type AppImplementation = new (
    storage: Storage,
    options: {
        appName: string;
        discriminator?: number;
        passcode?: number;
    },
) => TestInstance;

export function App(implementation: AppImplementation): TestInstance {
    let app: undefined | TestInstance;

    return {
        async setup() {
            const storage = new StorageBackendMemory();

            app = new implementation(storage, {
                appName: "TestApp",
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
        },
    };
}

export const AllClustersApp = App(AllClustersTestInstance);
export const BridgeApp = App(BridgeTestInstance);
