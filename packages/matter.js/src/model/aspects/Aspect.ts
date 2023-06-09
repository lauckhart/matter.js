/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { serialize } from "../../util/index.js";

/**
 * An "aspect" is metadata about a Matter element that affects implementation
 * behavior.  Aspects are mostly "qualities" in the Matter specification except
 * for "constraint" which is not formally described as a quality.
 */
export class Aspect<D> {
    definition: D;
    errors?: string[];

    get valid() {
        return !this.errors;
    }

    constructor(definition: D) {
        this.definition = definition;
    }

    error(error: string) {
        if (!this.errors) {
            this.errors = [];
        }
        this.errors.push(`${this.constructor.name.toLowerCase} ${serialize(this.definition)}: ${error}`);
    }
}
