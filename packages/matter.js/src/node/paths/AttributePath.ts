/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeId } from "../../datatype/AttributeId.js";
import { EntryIndex } from "../../datatype/EntryIndex.js";
import { FieldId } from "../../datatype/FieldId.js";
import { BasePath } from "./BasePath.js";

export namespace AttributePath {
    /**
     * Attribute name or ID.
     */
    export type Address = AttributeId | string;

    /**
     * Field name or ID.
     */
    export type FieldAddress = FieldId | string;

    /**
     * Addresses a collection (struct or list) within an attribute.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 8.9.2.2
     */
    export type Nested = ({ field: FieldAddress } | { entry: EntryIndex })[];

    /**
     * Addresses attribute data for read operations.  Note that if you
     * specify the attribute you must also specify the cluster except for
     * global attributes.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 8.9.2.1 & 8.9.2.3
     */
    export type Read = BasePath.Read & {
        attribute?: Address;
        subpath?: Nested;
    };

    /**
     * Addresses attribute data for write operations.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 8.9.2.1 & 8.9.2.4
     */
    export type Write = BasePath.Write & {
        attribute: Address;
        subpath?: Nested;
    };

    /**
     * Addresses a specific attribute.
     */
    export type Concrete = BasePath.Concrete & {
        attribute: Address;
        subpath?: Nested;
    };
}
