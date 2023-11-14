/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../src/behavior/Behavior.js";
import { ServerBehaviorBacking } from "../../src/behavior/server/ServerBehaviorBacking.js";
import { DescriptorServer } from "../../src/behavior/server/definitions/DescriptorServer.js";
import { Part } from "../../src/endpoint/Part.js";
import { SupportedBehaviors } from "../../src/endpoint/part/SupportedBehaviors.js";
import { EndpointType } from "../../src/endpoint/type/EndpointType.js";
import { Fabric } from "../../src/fabric/Fabric.js";

export function createBehavior<T extends Behavior.Type>(type: T) {
    const behaviors = SupportedBehaviors(
        DescriptorServer.set({ deviceTypeList: [ { revision: 1, deviceType: 1 } ] }),
        type
    );

    const endpointType = EndpointType({
        name: "MyEndpoint",
        deviceType: 1,
        behaviors
    });

    const part = new Part({
        type: endpointType,
    });
    part.owner = {
        initializeBehavior(part, behavior) {
            return new ServerBehaviorBacking(part, behavior);
        }
    }

    const context = {
        fabric: { fabricIndex: 1 } as Fabric
    }

    return part.getAgent(context).get(type);
}
