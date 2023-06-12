/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Conformance } from "../../../src/model/aspects/Conformance.js";

const TEST_DEFINITIONS = [
    "M",
    "O",
    "P",
    "D",
    "X",
    "WBL",
    "AX | WBL",
    "AX, WBL",
    "[WIRED]",
    "!AB",
    "AB.a",
    "AB.a+",
    "AB.a2",
    "AB.a2+",
    "AB == 2"
]

const TEST_DEFINITIONS2 = {
    "(AX | WBL)": "AX | WBL"
}

function testOne(definition: string, expected = definition) {
    describe(definition, () => {
        it("parses", () => {
            expect(() => new Conformance(definition)).not.toThrow();
        })

        it("serializes", () => {
            const conformance = new Conformance(definition);
            expect(`${conformance}`).toBe(expected);
        })
    })
}

describe("Conformance", () => {
    TEST_DEFINITIONS.forEach(d => testOne(d));
    Object.entries(TEST_DEFINITIONS2).forEach(([ d, e ]) => testOne(d, e));

    describe("Matter!Zigbee", () => {
        it("fails gracefully", () => {
            const conformance = new Conformance("Matter!Zigbee");
            expect(conformance.errors?.length).toBe(10);
            expect(conformance.toString()).toBe("M, !Z");
        })
    })
})
