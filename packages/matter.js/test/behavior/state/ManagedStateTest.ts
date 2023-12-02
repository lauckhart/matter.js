/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../../src/behavior/Behavior.js";
import { ManagedState } from "../../../src/behavior/state/ManagedState.js";
import { State } from "../../../src/behavior/state/State.js";
import { Observable } from "../../../src/util/Observable.js";

class MyState extends State {
    foo = "bar";
}

const Managed = ManagedState(MyState);

describe("ManagedState", () => {
    it("satisfies Type", () => {
        ({}) as ManagedState.Type<typeof MyState> satisfies State.Type;
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
        const state = new (ManagedState(
            class extends State {
                foo: string | undefined = undefined;

                static override fields = {
                    foo: {
                        validate(value: string): void {
                            if (value !== undefined) {
                                throw new Error("Bad value");
                            }
                        },
                    },
                };
            },
        ))();
        expect(() => (state.foo = "bad")).throws("Bad value");
        expect(state.foo).undefined;
    });
});
