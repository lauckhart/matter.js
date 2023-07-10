/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, FixedAttribute, Attribute, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvDeviceTypeId } from "../../datatype/DeviceTypeId.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvClusterId } from "../../datatype/ClusterId.js";
import { TlvEndpointNumber } from "../../datatype/EndpointNumber.js";

/**
 * Descriptor
 *
 * The Descriptor Cluster is meant to replace the support from the Zigbee Device Object (ZDO) for describing a node,
 * its endpoints and clusters.
 *
 * Use this factory function to create a Descriptor cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.5
 */
export function DescriptorCluster() {
    const cluster = Cluster({ ...DescriptorCluster.Metadata, ...DescriptorCluster.BaseComponent });
    return cluster as unknown as DescriptorCluster.Type;
}

/**
 * The device type and revision define endpoint conformance to a release of a device type definition. See the Data
 * Model specification for more information.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.5.4.1
 */
export const TlvDeviceTypeStruct = TlvObject({
    /**
     * This shall indicate the device type definition. The endpoint shall conform to the device type definition and
     * cluster specifications required by the device type.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.5.4.1.1
     */
    deviceType: TlvField(0, TlvDeviceTypeId),

    /**
     * This is the implemented revision of the device type definition. The endpoint shall conform to this revision of
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
             * DeviceTypeStruct). At least one device type entry shall be present.
             *
             * An endpoint shall conform to all device types listed in the DeviceTypeList. A cluster instance that is
             * in common for more than one device type in the DeviceTypeList shall be supported as a shared cluster
             * instance on the endpoint.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.1
             */
            deviceTypeList: FixedAttribute(0, TlvArray(TlvDeviceTypeStruct), { default: [] }),

            /**
             * This attribute shall list each cluster ID for the server clusters present on the endpoint instance.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.2
             */
            serverList: FixedAttribute(1, TlvArray(TlvClusterId), { default: [] }),

            /**
             * This attribute shall list each cluster ID for the client clusters present on the endpoint instance.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.3
             */
            clientList: FixedAttribute(2, TlvArray(TlvClusterId), { default: [] }),

            /**
             * This attribute indicates composition of the device type instance. Device type instance composition shall
             * include the endpoints in this list. See Endpoint Composition for more information which endpoints to
             * include in this list.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.4
             */
            partsList: Attribute(3, TlvArray(TlvEndpointNumber), { default: [] })
        }
    });

    /**
     * This cluster supports all Descriptor features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
}
