/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";

/**
 * This is a string tuple with strings that are user defined.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.7.4.1
 */
export const LabelStruct = TlvObject({
    /**
     * The Label or Value semantic is not defined here. Label examples: "room",
     * "zone", "group", "direction".
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.7.4.1.1
     */
    Label: TlvField(0, TlvString.bound({ maxLength: 16 })),

    /**
     * The Label or Value semantic is not defined here. The Value is a
     * discriminator for a Label that may have multiple instances. Label:Value
     * examples: "room":"bedroom 2", "orientation":"North", "floor":"2",
     * "direction":"up"
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.7.4.1.2
     */
    Value: TlvField(1, TlvString.bound({ maxLength: 16 }))
});

export namespace LabelCluster {
    /**
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `Label.with()` and a list of supported
     * features.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.7
     */
    export const Complete = Cluster({
        name: "Label",
        revision: 1,

        attributes: {
            /**
             * This is a list of string tuples. Each entry is a LabelStruct.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.7.5.1
             */
            labelList: Attribute(0, TlvArray(LabelStruct))
        }
    });
};