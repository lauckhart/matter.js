/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LifecycleBehavior } from "../../../../src/behavior/definitions/lifecycle/LifecycleBehavior.js";
import { PartsBehavior } from "../../../../src/behavior/definitions/parts/PartsBehavior.js";
import { Part } from "../../../../src/endpoint/Part.js";
import { MockEndpoint, MockPart } from "../../behavior-mocks.js";

function createParent() {
    return new MockPart({
        id: 1,
        type: MockEndpoint.with(PartsBehavior)
    })
}

function createParentAndChild() {
    return new MockPart({
        id: 2,
        type: MockEndpoint.with(PartsBehavior),
        owner: undefined
    })
}

function createChild() {
    return new MockPart({
        id: 3,
        type: MockEndpoint,
        owner: undefined
    })
}

describe("PartsBehavior", () => {
    it("adopts parts", () => {
        const parent = createParent();
        const child = createChild();

        const parts = parent.getAgent().get(PartsBehavior);
        parts.add(child);

        expect(parts.size).equals(1);
        expect(parts.state.children.size).equals(1);

        expect(child.owner).equals(parent);
    })

    it("disowns destroyed parts", () => {
        const parent = createParent();
        const child = createChild();

        const parts = parent.getAgent().get(PartsBehavior);
        parts.add(child);

        expect(parts.size).equals(1);

        child.destroy();

        expect(parts.size).equals(0);
        expect(parts.state.children.size).equals(0);
    })

    it("bubbles adds", () => {
        const parent = createParent();
        const child = createParentAndChild();
        const grandchild = createChild();

        parent.getAgent().get(PartsBehavior).add(child);

        let bubbled: Part | undefined;
        parent.getAgent().get(LifecycleBehavior).events.structure$change(
            part => bubbled = part
        )

        child.getAgent().get(PartsBehavior).add(grandchild);

        expect(bubbled).equals(child);
    })

    it("bubbles delete", () => {
        const parent = createParent();
        const child = createParentAndChild();
        const grandchild = createChild();

        parent.getAgent().get(PartsBehavior).add(child);
        child.getAgent().get(PartsBehavior).add(grandchild);

        let bubbled: Part | undefined;
        parent.getAgent().get(LifecycleBehavior).events.structure$change(
            part => bubbled = part
        )

        grandchild.destroy();

        expect(bubbled).equals(child);
    })
})
