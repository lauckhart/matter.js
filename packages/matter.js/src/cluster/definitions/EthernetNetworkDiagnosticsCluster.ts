/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { GlobalAttributes, OptionalAttribute, AccessLevel, Attribute, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * Ethernet Network Diagnostics
 *
 * The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that MAY be
 * used by a Node to assist a user or Administrative Node in diagnosing potential problems.
 *
 * Use this factory function to create an EthernetNetworkDiagnostics cluster supporting a specific set of features.
 * Include each {@link EthernetNetworkDiagnosticsCluster.Feature} you wish to support.
 *
 * @param features a list of {@link EthernetNetworkDiagnosticsCluster.Feature} to support
 * @returns an EthernetNetworkDiagnostics cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.15
 */
export function EthernetNetworkDiagnosticsCluster<T extends EthernetNetworkDiagnosticsCluster.Feature[]>(...features: [...T]) {
    const cluster = Cluster({
        ...EthernetNetworkDiagnosticsCluster.Metadata,
        supportedFeatures: BitFlags(EthernetNetworkDiagnosticsCluster.Metadata.features, ...features),
        ...EthernetNetworkDiagnosticsCluster.BaseComponent
    });
    extendCluster(cluster, EthernetNetworkDiagnosticsCluster.PacketCountsComponent, { packetCounts: true });
    extendCluster(cluster, EthernetNetworkDiagnosticsCluster.ErrorCountsComponent, { errorCounts: true });

    extendCluster(
        cluster,
        EthernetNetworkDiagnosticsCluster.PacketCountsOrErrorCountsComponent,
        { packetCounts: true },
        { errorCounts: true }
    );

    return cluster as unknown as EthernetNetworkDiagnosticsCluster.Type<BitFlags<typeof EthernetNetworkDiagnosticsCluster.Metadata.features, T>>;
}

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.15.5.1
 */
export const enum PHYRateEnum {
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

export namespace EthernetNetworkDiagnosticsCluster {
    /**
     * These are optional features supported by EthernetNetworkDiagnosticsCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.15.4
     */
    export enum Feature {
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

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> =
        typeof Metadata
        & { attributes: GlobalAttributes<typeof Metadata.features> }
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { packetCounts: true } ? typeof PacketCountsComponent : {})
        & (T extends { errorCounts: true } ? typeof ErrorCountsComponent : {})
        & (T extends { packetCounts: true } | { errorCounts: true } ? typeof PacketCountsOrErrorCountsComponent : {});

    /**
     * EthernetNetworkDiagnostics cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.15
     */
    export const Metadata = ClusterMetadata({
        id: 0x37,
        name: "EthernetNetworkDiagnostics",
        revision: 1,

        features: {
            /**
             * PacketCounts
             *
             * Node makes available the counts for the number of received and transmitted packets on the ethernet
             * interface.
             */
            packetCounts: BitFlag(0),

            /**
             * ErrorCounts
             *
             * Node makes available the counts for the number of errors that have occurred during the reception and
             * transmission of packets on the ethernet interface.
             */
            errorCounts: BitFlag(1)
        }
    });

    /**
     * A EthernetNetworkDiagnosticsCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * The PHYRate attribute SHALL indicate the current nominal, usable speed at the top of the physical layer
             * of the Node. A value of null SHALL indicate that the interface is not currently configured or
             * operational.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.1
             */
            phyRate: OptionalAttribute(0, TlvNullable(TlvEnum<PHYRateEnum>()), { default: null, readAcl: AccessLevel.View }),

            /**
             * The FullDuplex attribute SHALL indicate if the Node is currently utilizing the full-duplex operating
             * mode. A value of null SHALL indicate that the interface is not currently configured or operational.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.2
             */
            fullDuplex: OptionalAttribute(1, TlvNullable(TlvBoolean), { default: null, readAcl: AccessLevel.View }),

            /**
             * The CarrierDetect attribute SHALL indicate the value of the Carrier Detect control signal present on the
             * ethernet network interface. A value of null SHALL indicate that the interface is not currently
             * configured or operational.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.8
             */
            carrierDetect: OptionalAttribute(
                7,
                TlvNullable(TlvBoolean),
                { omitChanges: true, default: null, readAcl: AccessLevel.View }
            ),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6
             */
            timeSinceReset: OptionalAttribute(8, TlvUInt64, { omitChanges: true, default: 0, readAcl: AccessLevel.View })
        }
    });

    /**
     * A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.
     */
    export const PacketCountsComponent = ClusterComponent({
        attributes: {
            /**
             * The PacketRxCount attribute SHALL indicate the number of packets that have been received on the ethernet
             * network interface. The PacketRxCount attribute SHALL be reset to 0 upon a reboot of the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.3
             */
            packetRxCount: Attribute(2, TlvUInt64, { default: 0, readAcl: AccessLevel.View }),

            /**
             * The PacketTxCount attribute SHALL indicate the number of packets that have been successfully transferred
             * on the ethernet network interface. The PacketTxCount attribute SHALL be reset to 0 upon a reboot of the
             * Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.4
             */
            packetTxCount: Attribute(3, TlvUInt64, { omitChanges: true, default: 0, readAcl: AccessLevel.View })
        }
    });

    /**
     * A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.
     */
    export const ErrorCountsComponent = ClusterComponent({
        attributes: {
            /**
             * The TxErrCount attribute SHALL indicate the number of failed packet transmissions that have occurred on
             * the ethernet network interface. The TxErrCount attribute SHALL be reset to 0 upon a reboot of the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.5
             */
            txErrCount: Attribute(4, TlvUInt64, { omitChanges: true, default: 0, readAcl: AccessLevel.View }),

            /**
             * The CollisionCount attribute SHALL indicate the number of collisions that have occurred while attempting
             * to transmit a packet on the ethernet network interface. The CollisionCount attribute SHALL be reset to 0
             * upon a reboot of the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.6
             */
            collisionCount: Attribute(5, TlvUInt64, { omitChanges: true, default: 0, readAcl: AccessLevel.View }),

            /**
             * The OverrunCount attribute SHALL indicate the number of packets dropped either at ingress or egress, due
             * to lack of buffer memory to retain all packets on the ethernet network interface. The OverrunCount
             * attribute SHALL be reset to 0 upon a reboot of the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.7
             */
            overrunCount: Attribute(6, TlvUInt64, { omitChanges: true, default: 0, readAcl: AccessLevel.View })
        }
    });

    /**
     * A EthernetNetworkDiagnosticsCluster supports these elements if it supports features PacketCounts or ErrorCounts.
     */
    export const PacketCountsOrErrorCountsComponent = ClusterComponent({
        commands: {
            /**
             * Reception of this command SHALL reset the following attributes to 0:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.7.1
             */
            resetCounts: Command(0, TlvNoArguments, 0, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all EthernetNetworkDiagnostics features.  It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes, ...PacketCountsComponent.attributes, ...ErrorCountsComponent.attributes },
        commands: { ...PacketCountsOrErrorCountsComponent.commands }
    });
}
