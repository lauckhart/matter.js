/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DatatypeModel, type ClusterModel, type ValueModel } from "../../model/index.js";

/**
 * We model state using Matter semantics.  For schema we therefore allow any
 * Matter model that defines a datatype.
 * 
 * Most schema is a ValueModel which explicitly models data.
 * 
 * If the schema is a ClusterModel, it models a struct with attributes as
 * properties.
 */
export type Schema = ClusterModel | ValueModel;

export namespace Schema {
    /**
     * This is a simple struct schema implementation that allows arbitrary
     * access to a fixed list of properties with no validation.
     */
    export function Simple(fields: string[]) {
        const schema = new DatatypeModel({ name: "state" });

        for (const field of fields) {
            schema.add(new DatatypeModel({ name: field }));
        }

        return schema;
    }
}
