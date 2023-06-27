/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";

export const LabelStruct = TlvObject({
    Label: TlvField(0, TlvString),
    Value: TlvField(1, TlvString)
});

export namespace FixedLabelCluster {
    /**
     * Fixed Label
     *
     * The Fixed Label Cluster provides a feature for the device to tag an
     * endpoint with zero or more read only labels.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `FixedLabel.with()` and a list of
     * supported features.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.8
     */
    export const Complete = Cluster({
        id: 0x40,
        name: "FixedLabel",
        revision: 1,

        attributes: {
            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.8.4
             */
            labelList: Attribute(0, TlvArray(LabelStruct), { persistent: true, readAcl: AccessLevel.View })
        }
    });
};