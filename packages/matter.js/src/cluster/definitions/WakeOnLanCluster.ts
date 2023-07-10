/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, OptionalFixedAttribute, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvByteString } from "../../tlv/TlvString.js";

/**
 * Wake on LAN
 *
 * This cluster provides an interface for managing low power mode on a device that supports the Wake On LAN protocol.
 *
 * Use this factory function to create a WakeOnLan cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.10
 */
export function WakeOnLanCluster() {
    const cluster = Cluster({ ...WakeOnLanCluster.Metadata, ...WakeOnLanCluster.BaseComponent });
    return cluster as unknown as WakeOnLanCluster.Type;
}

export namespace WakeOnLanCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * WakeOnLan cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.10
     */
    export const Metadata = ClusterMetadata({ id: 0x503, name: "WakeOnLan", revision: 1, features: {} });

    /**
     * A WakeOnLanCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This shall indicate the current MAC address of the device. Only 48-bit MAC Addresses shall be used for
             * this attribute as required by the Wake on LAN protocol.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.10.2.1
             */
            macAddress: OptionalFixedAttribute(0, TlvByteString),

            /**
             * This shall indicate the current link-local address of the device. Only 128-bit IPv6 link-local addresses
             * shall be used for this attribute.
             *
             * NOTE
             *
             * Some companies may consider MAC Address to be protected data subject to PII handling considerations and
             * will therefore choose not to include it or read it. The MAC Address can often be determined using ARP in
             * IPv4 or NDP in IPv6.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.10.2.2
             */
            linkLocalAddress: OptionalFixedAttribute(1, TlvByteString)
        }
    });

    /**
     * This cluster supports all WakeOnLan features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
}
