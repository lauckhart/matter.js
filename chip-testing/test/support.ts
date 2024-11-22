/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment, InternalError, RuntimeService, StorageBackendMemory } from "@matter/main";
import { BackchannelCommand, Chip, Subject } from "@matter/testing";
import { AllClustersTestInstance } from "../src/AllClustersTestInstance.js";
import { BridgeTestInstance } from "../src/BridgeTestInstance.js";
import { TestInstance, TestInstanceConstructor } from "../src/GenericTestApp.js";

Chip.onClose(async () => {
    // Terminate and/or wait for any long-running services such as MdnsService
    const runtime = Environment.default.maybeGet(RuntimeService);
    if (runtime) {
        await runtime.close();
        Environment.default.delete(RuntimeService, runtime);
    }
});

export function App(implementation: TestInstanceConstructor): () => Subject {
    let subject: undefined | TestInstance;

    return () => ({
        async initialize() {
            const storage = new StorageBackendMemory();

            subject = new implementation({
                storage,
                commandPipeFactory: async (_subject, name) => {
                    await Chip.openPipe(name);
                },
                discriminator: 1234,
                passcode: 20202021,
            });

            await subject.setup();
        },

        async start() {
            if (subject === undefined) {
                throw new InternalError("App start before setup");
            }
            await subject.start();
        },

        async stop() {
            await subject?.stop();
        },

        async close() {
            await subject?.close();
        },

        backchannel(command: BackchannelCommand) {
            if (subject === undefined) {
                throw new Error(`Backchannel ${command.name} invoked without active subject`);
            }

            return subject.backchannel(command);
        },
    });
}

export const AllClustersApp = App(AllClustersTestInstance);
export const BridgeApp = App(BridgeTestInstance);
