/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../../src/log/Logger.js";
import { AttributeElement, AttributeModel, DefinitionError, FeatureSet, RecordValidator } from "../../../src/model/index.js";
import { Properties } from "../../../src/util/Type.js";

Logger.format = "ansi";

export type ValidateOptions = {
    fields: Partial<AttributeElement>[] | Partial<AttributeElement>,
    features?: FeatureSet,
    record?: Properties,
    errors?: DefinitionError[]
};

function validate({ fields, features, record }: ValidateOptions) {
    if (!Array.isArray(fields)) {
        fields = [ fields ];
    }
    const attributes = fields.map(f => new AttributeModel({ id: 1, name: "Test", type: "number", ...f }));

    const validator = RecordValidator(attributes, features || new FeatureSet());
    return validator.validate(record || {});
}

function expectValid(options: ValidateOptions) {
    expect(validate(options).valid).toBe(true);
}

function expectInvalid(options: ValidateOptions) {
    const result = validate(options);
    expect(result.valid).toBe(false);
    expect(result.errors).toEqual(options.errors);
}

describe("RecordValidator", () => {
    describe("conformance", () => {
        it("accepts optional field", () => {
            expectValid({
                fields: { conformance: "O" },
                record: { test: 1234 }
            });
        });

        it("accepts missing optional field", () => {
            expectValid({
                fields: { conformance: "O" }
            })
        });

        it("accepts mandatory field", () => {
            expectValid({
                fields: { conformance: "M" },
                record: { test: 1234 }
            })
        });

        it("rejects missing mandatory field", () => {
            expectInvalid({
                fields: { conformance: "M" }
            })
        });
    })
})
