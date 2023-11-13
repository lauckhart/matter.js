/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InvocationContext } from "../../../src/behavior/InvocationContext.js";
import { State } from "../../../src/behavior/state/State.js";
import { ManagedState } from "../../../src/behavior/state/ManagedState.js";
import { Observable } from "../../../src/util/Observable.js";
import { Behavior } from "../../../src/behavior/Behavior.js";
import { StateManager } from "../../../src/behavior/state/StateManager.js";

class MyState extends State {
    foo = "bar"
}

class Manager implements StateManager {
    values = {} as Record<string, any>;

    setStateValue(name: string, value: any, _context: InvocationContext) {
        if (value === "bad") {
            throw new Error("Bad value");
        }
        this.values[name] = value;
    }
}

const Managed = ManagedState(MyState);

describe("ManagedState", () => {
    it("satisfies Type", () => {
        ({}) as ManagedState.Type<typeof MyState> satisfies State.Type;
        Managed satisfies State.Type;
        Managed satisfies ManagedState.Type<typeof MyState>;
    })

    it("is a pure function", () => {
        expect(ManagedState(MyState)).equals(Managed);
    })

    it("delegates get", () => {
        const state = new Managed(new MyState, new Manager);

        expect(state.foo).equals("bar");
    })

    it("delegates set", () => {
        const state = new MyState;
        const managed = new Managed(new MyState, new Manager);

        managed.foo = "BAR";
        expect(state.foo).equals("BAR");
    })

    it("has a working getter", () => {
        const state = new Managed(new MyState, new Manager);

        expect(state.foo).equals("bar");
    })

    it("has a working setter", () => {
        const state = new MyState;
        const managed = new Managed(new MyState, new Manager) as unknown as State.Internal;

        managed[State.SET]("foo", "BAR");
        expect(state.foo).equals("BAR");
    })

    it("triggers events", () => {
        const behavior = {
            events: {
                foo$change: Observable()
            }
        };

        let args;
        behavior.events.foo$change((...a: any[]) => args = a)

        const context = {
            behavior: behavior as unknown as Behavior
        };

        const state = new Managed(new MyState, new Manager);

        state.foo = "BAR";

        expect(args).equals(["BAR", "bar", context]);
    })

    it("invokes manager set", () => {
        const manager = new Manager();
        const state = new Managed(new MyState, new Manager);

        state.foo = "BAR";

        expect(manager.values.foo).equals("BAR");
    })

    it("handles rejection well", () => {
        const state = new Managed(new MyState, new Manager);
        expect(() => state.foo = "bad").throws("Bad value");
        expect(state.foo).equals("bar");
    })
})
