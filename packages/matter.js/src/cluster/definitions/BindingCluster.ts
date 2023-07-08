/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { WritableFabricScopedAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt64, TlvUInt16, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.6.5.1
 */
export const TlvTargetStruct = TlvObject({
    /**
     * This field is the remote target node ID. If the Endpoint field is present, this field SHALL be present.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.6.5.1.1
     */
    node: TlvOptionalField(1, TlvUInt64),

    /**
     * This field is the target group ID that represents remote endpoints. If the Endpoint field is present, this field
     * SHALL NOT be present.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.6.5.1.2
     */
    group: TlvOptionalField(2, TlvUInt16),

    /**
     * This field is the remote endpoint that the local endpoint is bound to. If the Group field is present, this field
     * SHALL NOT be present.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.6.5.1.3
     */
    endpoint: TlvOptionalField(3, TlvUInt16),

    /**
     * This field is the cluster ID (client & server) on the local and target endpoint(s). If this field is present,
     * the client cluster SHALL also exist on this endpoint (with this Binding cluster). If this field is present, the
     * target SHALL be this cluster on the target endpoint(s).
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.6.5.1.4
     */
    cluster: TlvOptionalField(4, TlvUInt32)
});

/**
 * Standard Binding cluster properties.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.6
 */
export const BindingMetadata = ClusterMetadata({ id: 0x1e, name: "Binding", revision: 1 });

/**
 * A BindingCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * Each entry SHALL represent a binding. Here are some examples:
         *
         * @see {@link MatterCoreSpecificationV1_1} § 9.6.6.1
         */
        binding: WritableFabricScopedAttribute(
            0,
            TlvArray(TlvTargetStruct),
            { persistent: true, default: [], readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        )
    }
});

export type BindingCluster<T extends TypeFromPartialBitSchema<typeof BindingMetadata.features>> = 
    typeof BindingMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function BindingCluster<T extends (keyof typeof BindingMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...BindingMetadata,
        supportedFeatures: BitFlags(BindingMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as BindingCluster<BitFlags<typeof BindingMetadata.features, T>>;
};