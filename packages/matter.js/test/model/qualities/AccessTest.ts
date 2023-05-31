/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access } from "../../../src/model/index.js";

const FLAG_PERMUTATIONS = [
    "R[W]",
    "T"
]

function addPermutations(values: string[], prefix = "") {
    if (prefix) {
        FLAG_PERMUTATIONS.push(prefix);
    }
    for (let i = 0; i < values.length; i++) {
        addPermutations(values.slice(i + 1), `${prefix}${values[i]}`);
    }
}

addPermutations([ "R", "W" ]);
addPermutations([ "V", "O", "M", "A" ]);
addPermutations([ "F", "S" ])

describe("Access", () => {
    FLAG_PERMUTATIONS.forEach((text) => {
        let name = text;
        let length = text.length;

        if (name == "R[W]") {
            name = "RWo",
            length = 2;
        }

        const definition = ((Access as any)[name]);

        function checkAccess(access: Access) {
            expect(access.size).toBe(definition.length);
            definition.forEach((f: Access.Flag) => {
                expect(access.has(f)).toBe(true)
            });
            expect(`${access}`).toBe(text);
        }        

        describe(text, () => {
            it("has constant", () => {
                expect(definition).toBeDefined();
                expect(definition).toBeInstanceOf(Array);
                expect(definition.length).toBe(length);
            })

            it("loads from structured definition", () => {
                checkAccess(new Access(definition))
            })

            it("loads from text definition", () => {
                checkAccess(new Access(text))
            })
        })
    })

    describe("all flags", () => {
        it("initializes from structured definition", () => {
            const access = new Access([ Access.RW, Access.FS, Access.VOMA, Access.T ]);
            expect(`${access}`).toBe("RW FS VOMA T");
        })

        it("initializes from text definition", () => {
            const access = new Access("RW FS VOMA T");
            expect(`${access}`).toBe("RW FS VOMA T");
        })
    })

    describe("illegal flag", () => {
        it("throws", () => {
            expect(() => new Access("Z")).toThrow('Unknown access flag "Z"');
        });
    })
})
