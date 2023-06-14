/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FeatureSet } from "../../definitions/FeatureSet.js";
import { DataModel } from "../../index.js";
import { ValidationResult, Validator } from "./Validator.js";
import { ValidatorBuilder } from "./ValidatorBuilder.js";

type ChoiceState = {
    count: number,
    num: number,
    orMore?: boolean
}

/**
 * This is an internal class that implements validation.
 * 
 * Actual validation occurs in a the generated "validate" method except for
 * portions exposed as utility methods on this class.
 */
export class ValidatorImplementation implements Validator {
    validate: (record: { [name: string]: any }) => ValidationResult;

    choices?: { [name: string]: ChoiceState };
    result?: ValidationResult;

    constructor(public fields: DataModel[], public features: FeatureSet) {
        const builder = new ValidatorBuilder(fields);
        this.validate = builder.compile();
    }

    // Compiled validator invokes to test group values
    testGroup(...args: any[]) {
        for (const a of args) {
            if (a === true) {
                return true;
            }
            if (a === false) {
                return false;
            }
        }
        return false;
    }

    // Compiled validator invokes to record active choice.  A counter is kept
    // using a key of the form ".a" in values.  After conformance is tested on
    // each field, choices must be reexamined to ensure choices are correct
    testChoice(name: string, value: boolean, num: number, orMore: boolean) {
        if (!this.choices) {
            this.choices = {};
        }
        const choice = this.choices[name];
        if (!choice) {
            this.choices[name] = {
                count: 0,
                num: num,
                orMore: orMore
            }
        }
        if (value) {
            choice.count++;
        }
        return value;
    }

    // Compiled validator invokes to check choices
    checkChoices() {
        for (const name in this.choices) {
            const choice = this.choices[name];
            if (choice.count < choice.num) {
                this.error("CHOICE_THRESHOLD_NOT_MET", name, `Choice minimum of ${choice.num} not met`);
            } else if (choice.count > choice.num && !choice.orMore) {
                this.error("CHOICE_THRESHOLD_EXCEEDED", name, `Choice maximum of ${choice.num} exceeded`);
            }
        }
    }

    // Compiled validator calls to add a validation error
    error(code: string, source: string, message: string) {
        if (!this.result!.errors) {
            this.result!.errors = [];
        }
        this.result!.errors.push({ code, source, message });
    }
}
