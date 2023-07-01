/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Constraint } from "../../../src/model/aspects/Constraint.js";

const TEST_CONSTRAINTS: [ text: string, ast: Constraint.Ast ][] = [
    [ "desc", { desc: true } ],
    [ "4", { min: 4, max: 4 } ],
    [ "min 4", { min: 4 } ],
    [ "max 4", { max: 4 } ],
    [ "4 to 44", { min: 4, max: 44 } ],
    [ "4[44]", { min: 4, max: 4, entry: { min: 44, max: 44 } } ],
    [ "4, 44", { parts: [ { min: 4, max: 4 }, { min: 44, max: 44 } ]}],
    [ "4[44, 444], 5[max 55, min 555]", {
        parts: [
            { min: 4, max: 4, entry: {
                parts: [
                    { min: 44, max: 44 },
                    { min: 444, max: 444 }
                ]
            }},
            { min: 5, max: 5, entry: {
                parts: [
                    { max: 55 },
                    { min: 555 }
                ]
            }}
        ]
    }], 
];

describe("Constraint", () => {
    TEST_CONSTRAINTS.forEach(([ text, ast ]) => {
        it("parses", () => {
            expect(new Constraint(text)).toEqual(new Constraint({ ...ast, definition: text }));
        })

        it("serializes", () => {
            expect(new Constraint(ast).toString()).toEqual(text);
        })
    })
})
