/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../../src/behavior/Behavior.js";
import { ManagedState } from "../../../src/behavior/state/ManagedState.js";
import { State } from "../../../src/behavior/state/State.js";
import { EventEmitter, Observable } from "../../../src/util/Observable.js";

class MyState extends State {
    foo = "bar";
}

export function managed(state = MyState, events = EventEmitter) {
    return new ManagedState({ State: state, Events: EventEmitter })
}

describe("ManagedState", () => {
    it("satisfies Type", () => {
        ({}) as ManagedState.Type<typeof MyState> satisfies InstanceType<State.Type>;
        Managed satisfies State.Type;
        Managed satisfies ManagedState.Type<typeof MyState>;
    });

    it("is a pure function", () => {
        expect(ManagedState(MyState)).equals(Managed);
    });

    it("gets defaults", () => {
        const state = new Managed(new MyState());

        expect(state.foo).equals("bar");
    });

    it("sets and gets", () => {
        const managed = new Managed(new MyState());

        managed.foo = "BAR";
        expect(managed.foo).equals("BAR");
    });

    it("triggers events", async () => {
        const behavior = {
            events: {
                foo$change: Observable(),
            },
        };

        const result = new Promise(resolve => behavior.events.foo$change.on((...args: any[]) => resolve(args)));

        const context = {
            behavior: behavior as unknown as Behavior,
        };

        const state = new Managed(new MyState());

        state.foo = "BAR";

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        expect(result).eventually.deep.equal(["BAR", "bar", context]);
    });

    it("handles rejection well", () => {
        const state = new ManagedState({
            State: class extends State {
                get foo() {
                    return "foo";
                };

                set foo(value): string | undefined {
                    throw new Error(`Bad value "${value}"`);
                };
            },

            Events: EventEmitter,
        });
        expect(() => (state.foo = "bar")).throws(`Bad values "bar"`);
        expect(state.foo).equals("foo");
    });
});
