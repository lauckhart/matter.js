/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WritableAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

export const LabelStruct = TlvObject({
    Label: TlvField(0, TlvString),
    Value: TlvField(1, TlvString)
});

export namespace UserLabelCluster {
    export const id = 65;
    export const name = "UserLabel";
    export const revision = 1;

    const Base = {
        attributes: {
            /**
             * An implementation SHALL support at least 4 list entries per node
             * for all User Label cluster instances on the node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.9.4.1
             */
            labelList: WritableAttribute(0, TlvArray(LabelStruct), { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage })
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        elements: [ Base ]
    });
};