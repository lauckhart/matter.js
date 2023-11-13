/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InvocationContext } from "../../../src/behavior/InvocationContext.js";
import { State } from "../../../src/behavior/state/State.js";

describe("State", () => {
    it("satisfies Type", () => {
        State satisfies State.Type;
    })

    it("extends once", () => {
        const MyState = State.with({ foo: "bar" });
        const state = new MyState();
        expect(state.foo).equal("bar");
    })

    it("extends twice", () => {
        const MyState = State.with({ foo: "bar" }).with({ biz: "baz" });
        const state = new MyState();
        expect(state.foo).equals("bar");
        expect(state.biz).equals("baz")
    })

    it("extends manually then with", () => {
        class ManualState extends State {
            foo = "bar";
        }
        const MyState = ManualState.with({ biz: "baz" });
        const state = new MyState();
        expect(state.foo).equals("bar");
        expect(state.biz).equals("baz");
    })

    it("has a working getter", () => {
        const state = new class extends State {
            foo = "bar";
        }

        expect(state.foo).equal("bar");
    })

    it("has a working setter", () => {
        const state = new class extends State {
            foo = "bar";
        };

        (state as unknown as State.Internal)[State.SET]("foo", "biz", {} as InvocationContext);
        
        expect(state.foo).equals("biz");
    })
});
