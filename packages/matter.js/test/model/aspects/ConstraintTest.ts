/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Constraint } from "../../../src/model/aspects/Constraint.js";

const TEST_CONSTRAINTS: [text: string, ast: Constraint.Ast, expectedText?: string][] = [
    ["0", { type: "const", value: 0 }],
    ["desc", { type: "desc" }],
    ["4", { type: "const", value: 4 }],
    ["min 4", { type: "min", value: 4 }],
    ["max 4", { type: "max", value: 4 }],
    ["4 to 44", { type: "to", min: 4, max: 44 }],
    ["0x4 to 0x44", { type: "to", min: 4, max: 68 }, "4 to 68"],
    ["0xff to 0xffff", { type: "to", min: 255, max: 65535 }, "255 to 65535"],
    ["4[44]", { type: "array", length: { type: "const", value: 4 }, entry: { type: "const", value: 44 } }],
    [
        "4, 44",
        {
            type: "or",
            parts: [
                { type: "const", value: 4 },
                { type: "const", value: 44 },
            ],
        },
    ],
    [
        "4[44, 444], 5[max 55, min 555]",
        {
            type: "or",
            parts: [
                {
                    type: "array",
                    length: { type: "const", value: "4" },
                    entry: {
                        type: "or",
                        parts: [
                            { type: "const", value: 44 },
                            { type: "const", value: 444 },
                        ],
                    },
                },

                {
                    type: "array",
                    length: { type: "const", value: "5" },
                    entry: {
                        type: "or",
                        parts: [
                            { type: "const", value: 55 },
                            { type: "const", value: 555 },
                        ],
                    },
                },
            ],
        },
    ],
];

describe("Constraint", () => {
    TEST_CONSTRAINTS.forEach(([text, ast, expectedText]) => {
        describe(text, () => {
            it("parses", () => {
                expect(new Constraint(text)).deep.equal(new Constraint({ ast, definition: text }));
            });

            it("serializes", () => {
                expect(new Constraint(ast).toString()).deep.equal(expectedText ?? text);
            });
        });
    });
});
