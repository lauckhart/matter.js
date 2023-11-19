/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MockPart } from "../../behavior-mocks.js";
import { DescriptorBehavior } from "../../../../src/behavior/definitions/descriptor/Behavior.js";

describe("descriptor/DescriptorServer", () => {
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
        // TODO
    })

    it("adds parts automatically", () => {
        // TODO
    })

    it("remove parts automatically", () => {
        // TODO
    })
})
