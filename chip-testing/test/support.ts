/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment, RuntimeService, StorageBackendMemory } from "@matter/main";
import { Chip, Subject } from "@matter/testing";
import { AllClustersTestInstance } from "../src/AllClustersTestInstance.js";
import { BridgeTestInstance } from "../src/BridgeTestInstance.js";
import { TestInstanceConstructor } from "../src/GenericTestApp.js";
import { NodeTestInstance } from "../src/NodeTestInstance.js";

Chip.onClose(async () => {
    // Terminate and/or wait for any long-running services such as MdnsService
    await Environment.default.maybeGet(RuntimeService)?.close();
});

export function App(implementation: TestInstanceConstructor<NodeTestInstance>): (domain: string) => Subject {
    return (domain: string) => {
        return new implementation({
            domain,
            storage: new StorageBackendMemory(),
            async commandPipeFactory(_subject, name) {
                await Chip.openPipe(name);
            },
            discriminator: 1234,
            passcode: 20202021,
        });
    };
}

export const AllClustersApp = App(AllClustersTestInstance);
export const BridgeApp = App(BridgeTestInstance);
