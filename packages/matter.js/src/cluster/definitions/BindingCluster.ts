/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WritableAttribute } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt64, TlvUInt16, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.6.5.1
 */
export const TargetStruct = TlvObject({
    /**
     * This field is the remote target node ID. If the Endpoint field is
     * present, this field SHALL be present.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.6.5.1.1
     */
    Node: TlvOptionalField(1, TlvUInt64),

    /**
     * This field is the target group ID that represents remote endpoints. If
     * the Endpoint field is present, this field SHALL NOT be present.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.6.5.1.2
     */
    Group: TlvOptionalField(2, TlvUInt16),

    /**
     * This field is the cluster ID (client & server) on the local and target
     * endpoint(s). If this field is present, the client cluster SHALL also
     * exist on this endpoint (with this Binding cluster). If this field is
     * present, the target SHALL be this cluster on the target endpoint(s).
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.6.5.1.4
     */
    Cluster: TlvOptionalField(4, TlvUInt32)
});

export namespace BindingCluster {
    export const id = 30;
    export const name = "Binding";
    export const revision = 1;

    const Base = {
        attributes: {
            /**
             * Each entry SHALL represent a binding. Here are some examples:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.6.6.1
             */
            binding: WritableAttribute(0, TlvArray(TargetStruct), { persistent: true })
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        elements: [ Base ]
    });
};