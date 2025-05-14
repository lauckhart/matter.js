/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DefinitionError } from "#common/DefinitionError.js";
import { type Specification } from "#common/Specification.js";
import { CrossReference } from "./CrossReference.js";

/**
 * Model information that is currently not required for operational purposes.
 */
export class Resources {
    errors?: DefinitionError[];
    asOf?: Specification.Revision;
    until?: Specification.Revision;
    matchTo?: {
        id?: string | number;
        name?: string;
    };
    classification?: string;
    pics?: string;
    description?: string;
    xref?: Specification.CrossReference;
    details?: string;

    constructor(resources?: Resources) {
        if (!resources) {
            return;
        }

        this.description = resources.description;
        this.details = resources.details;
        this.xref = resources.xref ? CrossReference.get(resources.xref) : undefined;
        this.errors = resources.errors;
        this.asOf = resources.asOf;
        this.until = resources.until;
        this.matchTo = resources.matchTo;
        this.classification = resources.classification;
        this.pics = resources.pics;
    }
}
