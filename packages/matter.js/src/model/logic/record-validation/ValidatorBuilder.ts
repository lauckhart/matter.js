/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Conformance, Constraint, DataModel, Quality } from "../../index.js";
import { Validator } from "./Validator.js";
import { addConformance } from "./conformance.js";
import { addConstraint } from "./constraint.js";
import { addQuality } from "./quality.js";
import { addType } from "./type.js";

export class ValidatorBuilder extends Array<string> {
    hasChoices = false;

    constructor(fields: DataModel[]) {
        super(
            "this.result = {}",
            "let v"
        );

        for (const child of fields) {
            if (!(child instanceof DataModel)) {
                continue;
            }

            const aspects = child.validationAspects;
            if (!aspects.length) {
                continue;
            }
    
            this.push(`v = record[JSON.stringify(${child.name})]`);
            this.push("if (v != undefined) {");
            for (const aspect of aspects) {
                if (aspect instanceof Constraint) {
                    addConstraint(this, child, aspect);
                } else if (aspect instanceof Conformance) {
                    addConformance(this, child, aspect);
                } else if (aspect instanceof Quality) {
                    addQuality(this, child, aspect);
                }
                addType(this, child);
            }

            this.push("}");
        }
        
        if (this.hasChoices) {
            this.unshift("delete this.choices");
            this.push("this.checkChoices()");
        }
        this.push("return this.result");
    }

    addTest(test: string, code: string, source: DataModel, message: string) {
        this.push(`if (!${test}) { this.error(${JSON.stringify(code)}, ${JSON.stringify(source.path)}, ${JSON.stringify(message)}) }`);
    }

    compile() {
        return new Function(
            "record",
            this.join("\n")
        ) as Validator["validate"];
    }
}
