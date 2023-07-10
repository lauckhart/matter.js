/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, WritableFabricScopedAttribute, AccessLevel, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt64, TlvUInt16, TlvUInt32 } from "../../tlv/TlvNumber.js";

/**
 * Binding
 *
 * The Binding Cluster is meant to replace the support from the Zigbee Device Object (ZDO) for supporting the binding
 * table.
 *
 * Use this factory function to create a Binding cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.6
 */
export function BindingCluster() {
    const cluster = Cluster({ ...BindingCluster.Metadata, ...BindingCluster.BaseComponent });
    return cluster as unknown as BindingCluster.Type;
}

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.6.5.1
 */
export const TlvTargetStruct = TlvObject({
    /**
     * This field is the remote target node ID. If the Endpoint field is present, this field shall be present.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.6.5.1.1
     */
    node: TlvOptionalField(1, TlvUInt64),

    /**
     * This field is the target group ID that represents remote endpoints. If the Endpoint field is present, this field
     * shall NOT be present.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.6.5.1.2
     */
    group: TlvOptionalField(2, TlvUInt16),

    /**
     * This field is the remote endpoint that the local endpoint is bound to. If the Group field is present, this field
     * shall NOT be present.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.6.5.1.3
     */
    endpoint: TlvOptionalField(3, TlvUInt16),

    /**
     * This field is the cluster ID (client & server) on the local and target endpoint(s). If this field is present,
     * the client cluster shall also exist on this endpoint (with this Binding cluster). If this field is present, the
     * target shall be this cluster on the target endpoint(s).
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.6.5.1.4
     */
    cluster: TlvOptionalField(4, TlvUInt32)
});

export namespace BindingCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * Binding cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.6
     */
    export const Metadata = ClusterMetadata({ id: 0x1e, name: "Binding", revision: 1, features: {} });

    /**
     * A BindingCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * Each entry shall represent a binding.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.6.6.1
             */
            binding: WritableFabricScopedAttribute(
                0,
                TlvArray(TlvTargetStruct),
                { persistent: true, default: [], writeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * This cluster supports all Binding features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
}
