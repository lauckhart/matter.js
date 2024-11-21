/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment, InternalError, RuntimeService, StorageBackendMemory } from "@matter/main";
import { Chip, ContainerCommandPipe } from "@matter/testing";
import { BackchannelCommand } from "../../packages/testing/src/chip/backchannel-command.js";
import { AllClustersTestInstance } from "../src/AllClustersTestInstance.js";
import { BridgeTestInstance } from "../src/BridgeTestInstance.js";
import { TestInstance, TestInstanceConstructor } from "../src/GenericTestApp.js";

export function App(implementation: TestInstanceConstructor): Chip.Subject {
    let subject: undefined | TestInstance;

    return {
        async setup() {
            const storage = new StorageBackendMemory();

            subject = new implementation({
                storage,
                commandPipeFactory: async (app, name) => {
                    const commandPipe = new ContainerCommandPipe(Chip.container, app, name);
                    await commandPipe.activate();
                    return commandPipe;
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
            if (subject === undefined) {
                throw new InternalError("App stop before setup");
            }
            await subject.stop();

            // Terminate and/or wait for any long-running services such as MdnsService
            const runtime = Environment.default.maybeGet(RuntimeService);
            if (runtime) {
                await runtime.close();
                Environment.default.delete(RuntimeService, runtime);
            }
        },

        backchannel(command: BackchannelCommand) {
            if (subject === undefined) {
                throw new Error(`Backchannel ${command.name} invoked without active subject`);
            }

            return subject.backchannel(command);
        },
    };
}

export const AllClustersApp = App(AllClustersTestInstance);
export const BridgeApp = App(BridgeTestInstance);
