/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../src/behavior/Behavior.js";
import { BehaviorBacking } from "../../src/behavior/BehaviorBacking.js";
import { State } from "../../src/behavior/state/State.js";
import { Agent } from "../../src/endpoint/Agent.js";
import { EventEmitter, Observable } from "../../src/util/Observable.js";
import { MockPart } from "./behavior-mocks.js";

class TestBehavior extends Behavior {
    static override id = "test";
    declare readonly events: TestBehavior.Events;
    declare readonly state: TestBehavior.EndpointScope & TestBehavior.FabricScope;

    constructor(agent: Agent, backing: BehaviorBacking) {
        super(agent, backing);
    }
}

namespace TestBehavior {
    export class EndpointScope extends State {
        endpointValue = 1;
    }

    export class FabricScope extends State {
        fabricValue = 2;
    }

    export class Events extends EventEmitter {
        endpointValue$change = Observable();
    }
}

describe("Behavior", () => {
    type IsObject<T> = T extends undefined ? false : T extends object ? true : false;

    it("instantiates with correct properties", () => {
        const behavior = MockPart.createBehavior(TestBehavior);
        expect(behavior.agent.get(TestBehavior)).equals(behavior);
        expect(behavior.state.endpointValue).equals(1);
        expect(behavior.state.fabricValue).equals(2);
        expect(behavior.events.endpointValue$change).is.a("function");
    });

    it("unifies state", () => {
        const behavior = MockPart.createBehavior(TestBehavior);
        const state = behavior.state;

        ({}) as IsObject<typeof state> satisfies true;

        expect(state.endpointValue).equals(1);
        expect(state.fabricValue).equals(2);
    });

    it("set creates new type with proper defaults", () => {
        const NewBehavior = TestBehavior.set({ endpointValue: 3, fabricValue: 4 });
        const behavior = MockPart.createBehavior(NewBehavior);
        const state = behavior.state;

        ({}) as IsObject<typeof state> satisfies true;

        expect(state.endpointValue).equals(3);
        expect(state.fabricValue).equals(4);
    });
});
