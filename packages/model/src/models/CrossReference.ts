/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Specification } from "#common/Specification.js";

const inspect = Symbol.for("nodejs.util.inspect.custom");

export class CrossReference implements Specification.CrossReference {
    document: Specification;
    section: string;
    private static instances = {} as { [key: string]: CrossReference };

    private constructor({ document, section }: Specification.CrossReference) {
        this.document = document as Specification;
        this.section = section;
    }

    toString() {
        return `${this.document}§${this.section}`;
    }

    static get(xref: Specification.CrossReference) {
        const key = `${xref.document}:${xref.section}`;
        const canonical = this.instances[key];
        if (canonical) {
            return canonical;
        }
        return (this.instances[key] = new CrossReference(xref));
    }

    [inspect](_depth: any, options: any, inspect: any) {
        return inspect(this.toString(), options);
    }
}
