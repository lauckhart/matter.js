/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, WritableAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";

export const LabelStruct = TlvObject({
    Label: TlvField(0, TlvString),
    Value: TlvField(1, TlvString)
});

export namespace UserLabelCluster {
    /**
     * User Label
     *
     * The User Label Cluster provides a feature to tag an endpoint with zero
     * or more labels.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `UserLabel.with()` and a list of
     * supported features.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.9
     */
    export const Complete = Cluster({
        id: 0x41,
        name: "UserLabel",
        revision: 1,

        attributes: {
            /**
             * An implementation SHALL support at least 4 list entries per node
             * for all User Label cluster instances on the node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.9.4.1
             */
            labelList: WritableAttribute(0, TlvArray(LabelStruct), { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage })
        }
    });
};