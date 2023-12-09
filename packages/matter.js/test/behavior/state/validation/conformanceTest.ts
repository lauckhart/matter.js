/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ConformanceError } from "../../../../src/behavior/errors.js";
import { Tests, Fields, Features, testValidation } from "./validation-test-utils.js";

const AllTests = Tests({
    conformance: Tests({
        base: Tests({
            mandatory: Tests(Fields({ conformance: "M" }), {
                accepts: {
                    record: { test: 1234 },
                },

                requires: {
                    error: { type: ConformanceError },
                },
            }),

            optional: Tests(Fields({ conformance: "O" }), {
                accepts: {
                    record: { test: 1234 },
                },

                "allows omission": {},
            }),
        }),

        feature: Tests(Features({ F: "Foo" }), {
            mandatory: Tests(Fields({ conformance: "F" }), {
                "allows if enabled": {
                    supports: ["foo"],
                    record: { test: 1234 },
                },

                "requires if enabled": {
                    supports: ["foo"],
                    error: { type: ConformanceError },
                },

                "disallows if disabled": {
                    record: { test: 1234 },
                    error: { type: ConformanceError },
                },

                "allows omission if disabled": {},
            }),

            optional: Tests(Fields({ conformance: "[F]" }), {
                "allows if enabled": {
                    supports: ["foo"],
                    record: { test: 1234 },
                },

                "allows omission if enabled": {
                    supports: ["foo"],
                },

                "disallows if disabled": {
                    record: { test: 1234 },
                    error: { type: ConformanceError },
                },

                "allows omission if disabled": {},
            }),

            "negated mandatory": Tests(Fields({ conformance: "!F" }), {
                "allows if disabled": {
                    record: { test: 1234 },
                },

                "requires if disabled": {
                    error: { type: ConformanceError },
                },

                "disallows if enabled": {
                    supports: ["foo"],
                    record: { test: 1234 },
                    error: { type: ConformanceError },
                },

                "allows omission if enabled": {
                    supports: ["foo"],
                },
            }),

            "negated optional": Tests(Fields({ conformance: "[!F]" }), {
                "allows if disabled": {
                    record: { test: 1234 },
                },

                "allows omission if disabled": {},

                "disallows if enabled": {
                    supports: ["foo"],
                    record: { test: 1234 },
                    error: { type: ConformanceError },
                },

                "allows omission if enabled": {
                    supports: ["foo"],
                },
            }),
        }),

        "binary logical feature": Tests(Features({ F: "Foo", B: "Bar" }), {
            disjunction: Tests({
                mandatory: Tests(Fields({ conformance: "F | B" }), {
                    "allows if enabled (LHS)": {
                        supports: ["foo"],
                        record: { test: 1234 },
                    },

                    "allows if enabled (RHS)": {
                        supports: ["bar"],
                        record: { test: 1234 },
                    },

                    "disallows if disabled": {
                        record: { test: 1234 },
                        error: { type: ConformanceError },
                    },

                    "allows omission if disabled": {},
                }),

                optional: Tests(Fields({ conformance: "[F | B]" }), {
                    "allows if enabled (LHS)": {
                        supports: ["foo"],
                        record: { test: 1234 },
                    },

                    "allows if enabled (RHS)": {
                        supports: ["bar"],
                        record: { test: 1234 },
                    },

                    "allows omission if enabled (LHS)": {
                        supports: ["foo"],
                    },

                    "allows omission if enabled (RHS)": {
                        supports: ["bar"],
                    },

                    "disallows if disabled": {
                        record: { test: 1234 },
                        error: { type: ConformanceError },
                    },

                    "allows omission if disabled": {},
                }),
            }),

            conjunction: Tests({
                mandatory: Tests(Fields({ conformance: "F & B" }), {
                    "allows if enabled": {
                        supports: ["foo", "bar"],
                        record: { test: 1234 },
                    },

                    "requires if enabled": {
                        supports: ["foo", "bar"],
                        error: { type: ConformanceError },
                    },

                    "disallows if disabled": {
                        record: { test: 1234 },
                        error: { type: ConformanceError },
                    },

                    "disallows if disabled (LHS enabled)": {
                        supports: ["foo"],
                        record: { test: 1234 },
                        error: { type: ConformanceError },
                    },

                    "disallows if disabled (RHS enabled)": {
                        supports: ["bar"],
                        record: { test: 1234 },
                        error: { type: ConformanceError },
                    },

                    "allows omission if disabled": {},

                    "allows omission if disabled (LHS enabled)": {
                        supports: ["foo"],
                    },

                    "allows omission if disabled (RHS enabled)": {
                        supports: ["bar"],
                    },
                }),

                optional: Tests(Fields({ conformance: "[F & B]" }), {
                    "allows if enabled": {
                        supports: ["foo", "bar"],
                        record: { test: 1234 },
                    },

                    "allows omission if enabled": {
                        supports: ["foo", "bar"],
                    },

                    "disallows if disabled": {
                        record: { test: 1234 },
                        error: { type: ConformanceError },
                    },

                    "disallows if disabled (LHS enabled)": {
                        supports: ["foo"],
                        record: { test: 1234 },
                        error: { type: ConformanceError },
                    },

                    "disallows if disabled (RHS enabled)": {
                        supports: ["bar"],
                        record: { test: 1234 },
                        error: { type: ConformanceError },
                    },

                    "allows omission if disabled": {},

                    "allows omission if disabled (LHS enabled)": {
                        supports: ["foo"],
                    },

                    "allows omission if disabled (RHS enabled)": {
                        supports: ["bar"],
                    },
                }),
            }),
        }),

        "trinary logical feature": Tests(Features({ A: "Aye", B: "Bee", C: "See" }), {
            conjunction: Tests(Fields({ conformance: "A & B & C" }), {
                "allows if enabled": {
                    supports: ["aye", "bee", "see"],
                    record: { test: 1234 },
                },

                "requires if enabled": {
                    supports: ["aye", "bee", "see"],
                    error: { type: ConformanceError },
                },

                "disallows if disabled (RHS & LHS enabled)": {
                    supports: ["aye", "see"],
                    record: { test: 1234 },
                    error: { type: ConformanceError },
                },

                "allows omission if disabled (RHS & LHS enabled)": {
                    supports: ["aye", "see"],
                },
            }),

            "disjunction within conjunction": Tests(Fields({ conformance: "A & (B | C)" }), {
                "allows if enabled (disjunction RHS)": {
                    supports: ["aye", "bee"],
                    record: { test: 1234 },
                },

                "allows if enabled (disjunction LHS)": {
                    supports: ["aye", "see"],
                    record: { test: 1234 },
                },

                "requires if enabled (disjunction RHS)": {
                    supports: ["aye", "bee"],
                    error: { type: ConformanceError },
                },

                "requires if enabled (disjunction LHS)": {
                    supports: ["aye", "see"],
                    error: { type: ConformanceError },
                },

                "disallows if disabled (conjunction LHS)": {
                    supports: ["see"],
                    record: { test: 1234 },
                    error: { type: ConformanceError },
                },

                "allows omission if disabled (conjunction LHS)": {
                    supports: ["see"],
                },
            }),

            "conjunction within disjunction": Tests(Fields({ conformance: "A | (B & C)" }), {
                "allows if enabled (conjunction LHS)": {
                    supports: ["aye"],
                    record: { test: 1234 },
                },

                "allows if enabled (conjunction RHS)": {
                    supports: ["bee", "see"],
                    record: { test: 1234 },
                },

                "disallows if disabled (conjunction LHS enabled)": {
                    supports: ["bee"],
                    record: { test: 1234 },
                    error: { type: ConformanceError },
                },
            }),
        }),

        choice: Tests({
            "exactly one": Tests(Fields({ name: "Test1", conformance: "O.a" }, { name: "Test2", conformance: "O.a" }), {
                "allows one field": {
                    record: { test1: 1234 },
                },

                "requires one field": {
                    error: {
                        type: ConformanceError,
                        message: "Choice minimum of 1 not met",
                    },
                },

                "disallows multiple fields": {
                    record: { test1: 1234, test2: 1234 },
                    error: {
                        type: ConformanceError,
                        message: "Choice maximum of 1 exceeded",
                    },
                },
            }),

            "exactly two": Tests(
                Fields(
                    { name: "Test1", conformance: "O.a2" },
                    { name: "Test2", conformance: "O.a2" },
                    { name: "Test3", conformance: "O.a2" },
                ),
                {
                    "allows two fields": {
                        record: { test1: 1234, test3: 4321 },
                    },

                    "disallows no fields": {
                        error: {
                            type: ConformanceError,
                            message: "Choice minimum of 2 not met",
                        },
                    },

                    "disallows one field": {
                        record: { test1: 1 },
                        error: {
                            type: ConformanceError,
                            message: "Choice minimum of 2 not met",
                        },
                    },

                    "disallows three fields": {
                        record: { test1: 1, test2: 2, test3: 3 },
                        error: {
                            type: ConformanceError,
                            message: "Choice maximum of 2 exceeded",
                        },
                    },
                },
            ),

            "one or more": Tests(
                Fields({ name: "Test1", conformance: "O.a+" }, { name: "Test2", conformance: "O.a+" }),
                {
                    "allows one field": {
                        record: { test1: 1234 },
                    },

                    "requires one field": {
                        error: {
                            message: "Choice minimum of 1 not met",
                            type: ConformanceError,
                        },
                    },

                    "allows multiple fields": {
                        record: { test1: 1234, test2: 1234 },
                    },
                },
            ),
        }),
    }),
});

testValidation("Conformance validation", AllTests);
