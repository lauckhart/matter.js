/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/MatterError.js";
import { AnyElement, BaseElement } from "../index.js";

/**
 * A "model" is a class that implements runtime functionality associated with
 * the corresponding element type.
 */
export abstract class Model implements BaseElement {
    abstract type: AnyElement["type"];
    id?: number;
    name!: string;
    description?: string;
    details?: string;
    children: Model[];

    xref?: {
        document: BaseElement.Specification,
        version: string,
        section: string
    };

    constructor(definition: BaseElement) {
        // Copy all definition properties.  Types will be wrong for some of
        // them but constructors correct this.  Properties for which type is
        // correct are suffixed with "!" to indicate no further initialization
        // is necessary
        for (const [k, v] of definition as any) {
            if (v !== undefined) {
                (this as any)[k] = v;
            }
        }

        if (definition.children) {
            this.children = (definition.children as any).map((c: any) => {
                if (c instanceof Model) {
                    return c;
                }
                if (typeof c != "object") {
                    throw new MatterError(`Model children must be objects, not ${typeof c}`);
                }
                const t = c["type"];
                const constructor = Model.constructors[t];
                if (!constructor) {
                    throw new MatterError(`Model child type "${t}" is unsupported`);
                }
                return new constructor(c);
            })
        } else {
            this.children = [];
        }
    }

    protected static constructors = {} as { [ type: string ]: new(definition: any) => Model };
}
