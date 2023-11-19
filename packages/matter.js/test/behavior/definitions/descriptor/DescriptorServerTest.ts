/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MockEndpoint, MockPart } from "../../behavior-mocks.js";
import { DescriptorBehavior } from "../../../../src/behavior/definitions/descriptor/DescriptorBehavior.js";
import { OnOffServer } from "../../../../src/behavior/definitions/on-off/OnOffServer.js";
import { PartsBehavior } from "../../../../src/behavior/definitions/parts/PartsBehavior.js";

function createFamily() {
    const parent = new MockPart({
        id: 1,
        behavior: PartsBehavior
    });

    const child = new MockPart({
        id: 2,
        type: MockEndpoint,
        owner: undefined
    });

    const parts = parent.getAgent().get(PartsBehavior);
    parts.add(child);

    return { parent, child };
}

describe("DescriptorServer", () => {
    it("adds device type automatically if necessary", () => {
        const device = new MockPart;
        const descriptor = device.mockAgent.get(DescriptorBehavior);
        expect(descriptor.state.deviceTypeList).deep.equals([
            {
                deviceType: 1,
                revision: 1,
            }
        ])
    })

    it("adds servers automatically", () => {
        const device = new MockPart;
        const descriptor = device.mockAgent.get(DescriptorBehavior);

        device.behaviors.require(OnOffServer);

        expect(descriptor.state.serverList).deep.equals([
            29,
            6,
        ]);
    })

    it("adds parts automatically", () => {
        const { parent } = createFamily();

        const partsList = parent.mockAgent.get(DescriptorBehavior).state.partsList;

        expect(partsList).deep.equals([ 2 ]);
    })

    it("remove parts automatically", () => {
        const { parent, child } = createFamily();

        const partsState = parent.mockAgent.get(DescriptorBehavior).state;

        expect(partsState.partsList).deep.equals([ 2 ]);

        child.destroy();

        expect(partsState.partsList).deep.equals([]);
    })
})
