/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MockEndpoint, MockParentEndpoint, MockPart } from "../../behavior-mocks.js";
import { OnOffServer } from "../../../../src/behavior/definitions/on-off/OnOffServer.js";

function createFamily() {
    const parent = new MockPart(
        MockParentEndpoint,
        { id: 1 },
    ).agent;

    const child = new MockPart(
        MockEndpoint,
        { id: 2, owner: undefined },
    ).agent;

    parent.parts.add(child);

    return { parent, child };
}

describe("DescriptorServer", () => {
    it("adds device type automatically if necessary", () => {
        const device = new MockPart(MockEndpoint).agent;
        expect(device.descriptor.state.deviceTypeList).deep.equals([
            {
                deviceType: 1,
                revision: 1,
            }
        ])
    })

    it("does not add device type automatically if unnecessary", () => {
        const Device2Endpoint = MockEndpoint.set({
            descriptor: { deviceTypeList: { deviceType: 2, revision: 2 } }
        });
        const device = new MockPart(Device2Endpoint).agent;
        expect(device.descriptor.state.deviceTypeList).deep.equals([
            {
                deviceType: 2,
                revision: 2,
            }
        ]);
    })

    it("adds servers automatically", () => {
        const device = new MockPart(MockEndpoint).agent;

        device.require(OnOffServer);

        expect(device.descriptor.state.serverList).deep.equals([
            29,
            6,
        ]);
    })

    it("adds parts automatically", () => {
        const { parent } = createFamily();

        const partsList = parent.descriptor.state.partsList;
        expect(partsList).deep.equals([ 2 ]);
    })

    it("remove parts automatically", () => {
        const { parent, child } = createFamily();

        const partsState = parent.descriptor.state;
        expect(partsState.partsList).deep.equals([ 2 ]);

        child.part.destroy();
        expect(partsState.partsList).deep.equals([]);
    })
})
