/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { BaseClusterComponent, ClusterComponent, ExtensibleCluster, validateFeatureSelection, extendCluster, ClusterForBaseCluster } from "../../cluster/ClusterFactory.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { OptionalAttribute, Attribute, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.15.5.1
 */
export const enum PHYRate {
    Rate10M = 0,
    Rate100M = 1,
    Rate1G = 2,
    Rate25G = 3,
    Rate5G = 4,
    Rate10G = 5,
    Rate40G = 6,
    Rate100G = 7,
    Rate200G = 8,
    Rate400G = 9
}

/**
 * These are optional features supported by EthernetNetworkDiagnosticsCluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.15.4
 */
export enum EthernetNetworkDiagnosticsFeature {
    /**
     * PacketCounts
     *
     * Node makes available the counts for the number of received and transmitted packets on the ethernet interface.
     */
    PacketCounts = "PacketCounts",

    /**
     * ErrorCounts
     *
     * Node makes available the counts for the number of errors that have occurred during the reception and
     * transmission of packets on the ethernet interface.
     */
    ErrorCounts = "ErrorCounts"
}

/**
 * These elements and properties are present in all EthernetNetworkDiagnostics clusters.
 */
export const EthernetNetworkDiagnosticsBase = BaseClusterComponent({
    id: 0x37,
    name: "EthernetNetworkDiagnostics",
    revision: 1,

    features: {
        /**
         * PacketCounts
         *
         * Node makes available the counts for the number of received and transmitted packets on the ethernet interface.
         */
        packetCounts: BitFlag(0),

        /**
         * ErrorCounts
         *
         * Node makes available the counts for the number of errors that have occurred during the reception and
         * transmission of packets on the ethernet interface.
         */
        errorCounts: BitFlag(1)
    },

    attributes: {
        /**
         * The PHYRate attribute shall indicate the current nominal, usable speed at the top of the physical layer of
         * the Node. A value of null shall indicate that the interface is not currently configured or operational.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.1
         */
        phyRate: OptionalAttribute(0, TlvNullable(TlvEnum<PHYRate>()), { default: null }),

        /**
         * The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex operating mode. A
         * value of null shall indicate that the interface is not currently configured or operational.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.2
         */
        fullDuplex: OptionalAttribute(1, TlvNullable(TlvBoolean), { default: null }),

        /**
         * The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present on the
         * ethernet network interface. A value of null shall indicate that the interface is not currently configured or
         * operational.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.8
         */
        carrierDetect: OptionalAttribute(7, TlvNullable(TlvBoolean), { omitChanges: true, default: null }),

        /**
         * @see {@link MatterCoreSpecificationV1_1} § 11.15.6
         */
        timeSinceReset: OptionalAttribute(8, TlvUInt64, { omitChanges: true, default: 0 })
    }
});

/**
 * A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.
 */
export const PacketCountsComponent = ClusterComponent({
    attributes: {
        /**
         * The PacketRxCount attribute shall indicate the number of packets that have been received on the ethernet
         * network interface. The PacketRxCount attribute shall be reset to 0 upon a reboot of the Node.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.3
         */
        packetRxCount: Attribute(2, TlvUInt64, { default: 0 }),

        /**
         * The PacketTxCount attribute shall indicate the number of packets that have been successfully transferred on
         * the ethernet network interface. The PacketTxCount attribute shall be reset to 0 upon a reboot of the Node.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.4
         */
        packetTxCount: Attribute(3, TlvUInt64, { omitChanges: true, default: 0 })
    }
});

/**
 * A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.
 */
export const ErrorCountsComponent = ClusterComponent({
    attributes: {
        /**
         * The TxErrCount attribute shall indicate the number of failed packet transmissions that have occurred on the
         * ethernet network interface. The TxErrCount attribute shall be reset to 0 upon a reboot of the Node.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.5
         */
        txErrCount: Attribute(4, TlvUInt64, { omitChanges: true, default: 0 }),

        /**
         * The CollisionCount attribute shall indicate the number of collisions that have occurred while attempting to
         * transmit a packet on the ethernet network interface. The CollisionCount attribute shall be reset to 0 upon a
         * reboot of the Node.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.6
         */
        collisionCount: Attribute(5, TlvUInt64, { omitChanges: true, default: 0 }),

        /**
         * The OverrunCount attribute shall indicate the number of packets dropped either at ingress or egress, due to
         * lack of buffer memory to retain all packets on the ethernet network interface. The OverrunCount attribute
         * shall be reset to 0 upon a reboot of the Node.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.7
         */
        overrunCount: Attribute(6, TlvUInt64, { omitChanges: true, default: 0 })
    }
});

/**
 * A EthernetNetworkDiagnosticsCluster supports these elements if it supports features PacketCounts or ErrorCounts.
 */
export const PacketCountsOrErrorCountsComponent = ClusterComponent({
    commands: {
        /**
         * Reception of this command shall reset the following attributes to 0:
         *
         *   • PacketRxCount
         *
         *   • PacketTxCount
         *
         *   • TxErrCount
         *
         *   • CollisionCount
         *
         *   • OverrunCount
         *
         * This command has no associated data.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.15.7.1
         */
        resetCounts: Command(0, TlvNoArguments, 0, TlvNoResponse)
    }
});

/**
 * Ethernet Network Diagnostics
 *
 * The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that MAY be
 * used by a Node to assist a user or Administrator in diagnosing potential problems. The Ethernet Network Diagnostics
 * Cluster attempts to centralize all metrics that are relevant to a potential Ethernet connection to a Node.
 *
 * EthernetNetworkDiagnosticsCluster supports optional features that you can enable with the
 * EthernetNetworkDiagnosticsCluster.with factory method.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.15
 */
export const EthernetNetworkDiagnosticsCluster = ExtensibleCluster({
    ...EthernetNetworkDiagnosticsBase,

    /**
     * Use this factory method to create an EthernetNetworkDiagnostics cluster with support for optional features.
     * Include each {@link EthernetNetworkDiagnosticsFeature} you wish to support.
     *
     * @param features the optional features to support
     * @returns an EthernetNetworkDiagnostics cluster with specified features enabled
     * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
     */
    factory: <T extends `${EthernetNetworkDiagnosticsFeature}`[]>(...features: [...T]) => {
        validateFeatureSelection(features, EthernetNetworkDiagnosticsFeature);
        const cluster = Cluster({
            ...EthernetNetworkDiagnosticsBase,
            supportedFeatures: BitFlags(EthernetNetworkDiagnosticsBase.features, ...features)
        });
        extendCluster(cluster, ErrorCountsComponent, { errorCounts: true });
        extendCluster(cluster, PacketCountsOrErrorCountsComponent, { packetCounts: true }, { errorCounts: true });
        return cluster as unknown as EthernetNetworkDiagnosticsExtension<BitFlags<typeof EthernetNetworkDiagnosticsBase.features, T>>;
    }
});

export type EthernetNetworkDiagnosticsExtension<SF extends TypeFromPartialBitSchema<typeof EthernetNetworkDiagnosticsBase.features>> =
    ClusterForBaseCluster<typeof EthernetNetworkDiagnosticsBase, SF>
    & { supportedFeatures: SF }
    & (SF extends { packetCounts: true } ? typeof PacketCountsComponent : {})
    & (SF extends { errorCounts: true } ? typeof ErrorCountsComponent : {})
    & (SF extends { packetCounts: true } | { errorCounts: true } ? typeof PacketCountsOrErrorCountsComponent : {});

/**
 * This cluster supports all EthernetNetworkDiagnostics features. It may support illegal feature combinations.
 *
 * If you use this cluster you must manually specify which features are active and ensure the set of active features is
 * legal per the Matter specification.
 */
export const EthernetNetworkDiagnosticsComplete = Cluster({
    ...EthernetNetworkDiagnosticsCluster,
    attributes: { ...PacketCountsComponent.attributes, ...ErrorCountsComponent.attributes },
    commands: { ...PacketCountsOrErrorCountsComponent.commands }
});
