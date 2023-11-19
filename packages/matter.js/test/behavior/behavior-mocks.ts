/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MutableEndpoint } from "../../src/endpoint/type/MutableEndpoint.js";
import type { Fabric } from "../../src/fabric/Fabric.js";
import { PartOwner } from "../../src/endpoint/part/PartOwner.js";
import { InvocationContext } from "../../src/behavior/InvocationContext.js";
import { Part } from "../../src/endpoint/Part.js";
import { Behavior } from "../../src/behavior/Behavior.js";
import { ServerBehaviorBacking } from "../../src/behavior/server/ServerBehaviorBacking.js";
import { DescriptorServer } from "../../src/behavior/definitions/descriptor/DescriptorServer.js";
import { PartsBehavior } from "../../src/behavior/definitions/parts/PartsBehavior.js";
import { EndpointType } from "../../src/endpoint/type/EndpointType.js";
import { LifecycleBehavior } from "../../src/behavior/definitions/lifecycle/LifecycleBehavior.js";

class MockFabricImplementation {
    fabricIndex;

    constructor(id = 1) {
        this.fabricIndex = id;
    }

    addRemoveCallback() {}
}

export const MockFabric = MockFabricImplementation as unknown as new (id?: number) => Fabric;

export class MockOwner implements PartOwner {
    initializeBehavior(part: Part, behavior: Behavior.Type) {
        return new ServerBehaviorBacking(part, behavior);
    }
}

export const MockEndpoint = MutableEndpoint({
    name: "MyEndpoint",
    deviceType: 1,
    deviceRevision: 1,
}).with(LifecycleBehavior, DescriptorServer);

export const MockParentEndpoint = MockEndpoint.with(PartsBehavior);

export class MockContext implements InvocationContext {
    declare fabric?: Fabric;

    constructor(options?: InvocationContext) {
        Object.assign(this, options);

        if (!this.fabric) {
            this.fabric = new MockFabric;
        }
    }
}

export class MockPart<T extends EndpointType> extends Part<T> {
    constructor(type: T, options?: MockPart.Options) {
        super(type, options);

        if (options && "owner" in options) {
            if (options.owner !== undefined) {
                this.owner = options.owner;
            }
        } else {
            this.owner = new MockOwner;
        }
    }

    get mockAgent() {
        return this.getAgent(new MockContext);
    }

    static createBehavior<T extends Behavior.Type>(type: T) {
        const part = new MockPart(MockEndpoint.with(type));
        return part.mockAgent.get(type) as InstanceType<T>;
    }
}

export namespace MockPart {
    export interface Options extends Part.Options {
        owner?: PartOwner;
    }
}
