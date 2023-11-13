/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InvocationContext } from "../../../src/behavior/InvocationContext.js";
import { State } from "../../../src/behavior/state/State.js";
import { UnifiedState } from "../../../src/behavior/state/UnifiedState.js";

class EndpointScope extends State {
    foo = "bar";
}

class FabricScope extends State {
    biz = "baz";
}

const Unified = UnifiedState(EndpointScope, FabricScope);

describe("UnifiedState", () => {
    it("is a pure function", () => {
        expect(UnifiedState(EndpointScope, FabricScope)).equals(Unified);
    })

    it("propagates reads", () => {
        const endpoint = new EndpointScope;
        const fabric = new FabricScope;

        const unified = new Unified(endpoint, fabric, {} as InvocationContext);

        expect(unified.foo).equals("bar");
        expect(unified.biz).equals("baz");
    })

    it("propagates writes", () => {
        const endpoint = new EndpointScope;
        const fabric = new FabricScope;

        const unified = new Unified(endpoint, fabric, {} as InvocationContext);
        unified.foo = "BAR";
        unified.biz = "BAZ";

        expect(endpoint.foo).equals("BAR");
        expect(fabric.biz).equals("BAZ");
    })
})
