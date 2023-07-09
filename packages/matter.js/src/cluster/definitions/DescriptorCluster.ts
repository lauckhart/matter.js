/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, FixedAttribute, AccessLevel, Attribute, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvUInt32, TlvUInt16 } from "../../tlv/TlvNumber.js";

/**
 * Descriptor
 *
 * The Descriptor Cluster is meant to replace the support from the Zigbee Device Object (ZDO) for describing a node,
 * its endpoints and clusters.
 *
 * This function creates a Descriptor cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.5
 */
export function DescriptorCluster() {
    const cluster = Cluster({ ...DescriptorCluster.Metadata, ...DescriptorCluster.BaseComponent });
    return cluster as unknown as DescriptorCluster.Type;
};

/**
 * The device type and revision define endpoint conformance to a release of a device type definition. See the Data
 * Model specification for more information.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.5.4.1
 */
export const TlvDeviceTypeStruct = TlvObject({
    /**
     * This SHALL indicate the device type definition. The endpoint SHALL conform to the device type definition and
     * cluster specifications required by the device type.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.5.4.1.1
     */
    deviceType: TlvField(0, TlvUInt32),

    /**
     * This is the implemented revision of the device type definition. The endpoint SHALL conform to this revision of
     * the device type.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.5.4.1.2
     */
    revision: TlvField(1, TlvUInt16.bound({ min: 1 }))
});

export namespace DescriptorCluster {
    export type Type = 
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * Descriptor cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.5
     */
    export const Metadata = ClusterMetadata({ id: 0x1d, name: "Descriptor", revision: 1, features: {} });

    /**
     * A DescriptorCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This is a list of device types and corresponding revisions declaring endpoint conformance (see
             * DeviceTypeStruct). At least one device type entry SHALL be present.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.1
             */
            deviceTypeList: FixedAttribute(0, TlvArray(TlvDeviceTypeStruct), { default: [], readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL list each cluster ID for the server clusters present on the endpoint instance.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.2
             */
            serverList: FixedAttribute(1, TlvArray(TlvUInt32), { default: [], readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL list each cluster ID for the client clusters present on the endpoint instance.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.3
             */
            clientList: FixedAttribute(2, TlvArray(TlvUInt32), { default: [], readAcl: AccessLevel.View }),

            /**
             * This attribute indicates composition of the device type instance. Device type instance composition SHALL
             * include the endpoints in this list. See Endpoint Composition for more information which endpoints to
             * include in this list.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.4
             */
            partsList: Attribute(3, TlvArray(TlvUInt16), { default: [], readAcl: AccessLevel.View })
        }
    });

    /**
     * This cluster supports all Descriptor features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
};
