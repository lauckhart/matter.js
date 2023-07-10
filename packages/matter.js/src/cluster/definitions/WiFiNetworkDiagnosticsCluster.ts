/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { GlobalAttributes, Attribute, OptionalAttribute, OptionalEvent, EventPriority, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { TlvByteString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvEnum, TlvUInt16, TlvInt8, TlvUInt64, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * WiFi Network Diagnostics
 *
 * The Wi-Fi Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that MAY be used
 * by a Node to assist a user or Administrative Node in diagnosing potential problems.
 *
 * Use this factory function to create a WiFiNetworkDiagnostics cluster supporting a specific set of features. Include
 * each {@link WiFiNetworkDiagnosticsCluster.Feature} you wish to support.
 *
 * @param features a list of {@link WiFiNetworkDiagnosticsCluster.Feature} to support
 * @returns a WiFiNetworkDiagnostics cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.14
 */
export function WiFiNetworkDiagnosticsCluster<T extends WiFiNetworkDiagnosticsCluster.Feature[]>(...features: [...T]) {
    const cluster = Cluster({
        ...WiFiNetworkDiagnosticsCluster.Metadata,
        supportedFeatures: BitFlags(WiFiNetworkDiagnosticsCluster.Metadata.features, ...features),
        ...WiFiNetworkDiagnosticsCluster.BaseComponent
    });
    extendCluster(cluster, WiFiNetworkDiagnosticsCluster.ErrorCountsComponent, { errorCounts: true });
    extendCluster(cluster, WiFiNetworkDiagnosticsCluster.PacketCountsComponent, { packetCounts: true });
    return cluster as unknown as WiFiNetworkDiagnosticsCluster.Type<BitFlags<typeof WiFiNetworkDiagnosticsCluster.Metadata.features, T>>;
}

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.14.5.1
 */
export const enum SecurityType {
    Unspecified = 0,
    None = 1,
    Wep = 2,
    Wpa = 3,
    Wpa2 = 4,
    Wpa3 = 5
}

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.14.5.2
 */
export const enum WiFiVersion {
    A = 0,
    B = 1,
    G = 2,
    N = 3,
    Ac = 4,
    Ax = 5
}

/**
 * Body of the WiFiNetworkDiagnostics disconnection event
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.1
 */
export const TlvDisconnectionEvent = TlvObject({
    /**
     * This field shall contain the Reason Code field value for the Disassociation or Deauthentication event that
     * caused the disconnection and the value shall align with Table 9-49 "Reason codes" of IEEE 802.11-2020.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.1.1
     */
    reasonCode: TlvField(0, TlvUInt16)
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.14.5.3
 */
export const enum AssociationFailureCause {
    Unknown = 0,
    AssociationFailed = 1,
    AuthenticationFailed = 2,
    SsidNotFound = 3
}

/**
 * Body of the WiFiNetworkDiagnostics associationFailure event
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.2
 */
export const TlvAssociationFailureEvent = TlvObject({
    /**
     * The Status field shall be set to a value from the AssociationFailureCauseEnum.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.2.1
     */
    associationFailureCause: TlvField(0, TlvEnum<AssociationFailureCause>()),

    /**
     * The Status field shall be set to the Status Code value that was present in the last frame related to association
     * where Status Code was not equal to zero and which caused the failure of a last trial attempt, if this last
     * failure was due to one of the following Management frames:
     *
     *   • Association Response (Type 0, Subtype 1)
     *
     *   • Reassociation Response (Type 0, Subtype 3)
     *
     *   • Authentication (Type 0, Subtype 11)
     *
     * Table 9-50 "Status codes" of IEEE 802.11-2020 contains a description of all values possible.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.2.2
     */
    status: TlvField(1, TlvUInt16)
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.14.5.4
 */
export const enum ConnectionStatus {
    Connected = 0,
    NotConnected = 1
}

/**
 * Body of the WiFiNetworkDiagnostics connectionStatus event
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.3
 */
export const TlvConnectionStatusEvent = TlvObject({ connectionStatus: TlvField(0, TlvEnum<ConnectionStatus>()) });

export namespace WiFiNetworkDiagnosticsCluster {
    /**
     * These are optional features supported by WiFiNetworkDiagnosticsCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.14.4
     */
    export enum Feature {
        /**
         * PacketCounts
         *
         * Node makes available the counts for the number of received and transmitted packets on the Wi-Fi interface.
         */
        PacketCounts = "PacketCounts",

        /**
         * ErrorCounts
         *
         * Node makes available the counts for the number of errors that have occurred during the reception and
         * transmission of packets on the Wi-Fi interface.
         */
        ErrorCounts = "ErrorCounts"
    }

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> =
        typeof Metadata
        & { attributes: GlobalAttributes<typeof Metadata.features> }
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { errorCounts: true } ? typeof ErrorCountsComponent : {})
        & (T extends { packetCounts: true } ? typeof PacketCountsComponent : {});

    /**
     * WiFiNetworkDiagnostics cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.14
     */
    export const Metadata = ClusterMetadata({
        id: 0x36,
        name: "WiFiNetworkDiagnostics",
        revision: 1,

        features: {
            /**
             * PacketCounts
             *
             * Node makes available the counts for the number of received and transmitted packets on the Wi-Fi
             * interface.
             */
            packetCounts: BitFlag(0),

            /**
             * ErrorCounts
             *
             * Node makes available the counts for the number of errors that have occurred during the reception and
             * transmission of packets on the Wi-Fi interface.
             */
            errorCounts: BitFlag(1)
        }
    });

    /**
     * A WiFiNetworkDiagnosticsCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * The BSSID attribute shall indicate the BSSID for which the Wi-Fi network the Node is currently connected.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.1
             */
            bssid: Attribute(0, TlvNullable(TlvByteString.bound({ minLength: 6, maxLength: 6 })), { default: null }),

            /**
             * The SecurityType attribute shall indicate the current type of Wi-Fi security used.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.2
             */
            securityType: Attribute(1, TlvNullable(TlvEnum<SecurityType>()), { default: null }),

            /**
             * The WiFiVersion attribute shall indicate the current 802.11 standard version in use by the Node, per the
             * table below.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.3
             */
            wiFiVersion: Attribute(2, TlvNullable(TlvEnum<WiFiVersion>()), { default: null }),

            /**
             * The ChannelNumber attribute shall indicate the channel that Wi-Fi communication is currently operating
             * on.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.4
             */
            channelNumber: Attribute(3, TlvNullable(TlvUInt16), { default: 0 }),

            /**
             * The RSSI attribute shall indicate the current RSSI of the Node’s Wi-Fi radio in dBm.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.5
             */
            rssi: Attribute(4, TlvNullable(TlvInt8.bound({ min: -120 })), { omitChanges: true, default: null }),

            /**
             * The CurrentMaxRate attribute shall indicate the current maximum PHY rate of transfer of data in
             * bits-per-second.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.12
             */
            currentMaxRate: OptionalAttribute(11, TlvNullable(TlvUInt64), { omitChanges: true, default: 0 })
        },

        events: {
            /**
             * The Disconnection Event shall indicate that a Node’s Wi-Fi connection has been disconnected as a result
             * of de-authenticated or dis-association and indicates the reason.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.1
             */
            disconnection: OptionalEvent(0, EventPriority.Info, TlvDisconnectionEvent),

            /**
             * The AssociationFailure event shall indicate that a Node has attempted to connect, or reconnect, to a
             * Wi-Fi access point, but is unable to successfully associate or authenticate, after exhausting all
             * internal retries of its supplicant.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.2
             */
            associationFailure: OptionalEvent(1, EventPriority.Info, TlvAssociationFailureEvent),

            /**
             * The ConnectionStatus Event shall indicate that a Node’s connection status to a Wi-Fi network has
             * changed. Connected, in this context, shall mean that a Node acting as a Wi-Fi station is successfully
             * associated to a Wi-Fi Access Point.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.3
             */
            connectionStatus: OptionalEvent(2, EventPriority.Info, TlvConnectionStatusEvent)
        }
    });

    /**
     * A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.
     */
    export const ErrorCountsComponent = ClusterComponent({
        attributes: {
            /**
             * The BeaconLostCount attribute shall indicate the count of the number of missed beacons the Node has
             * detected. If the Node does not have an ability to count beacons expected and not received, this value
             * MAY remain set to zero.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.6
             */
            beaconLostCount: Attribute(5, TlvNullable(TlvUInt32), { omitChanges: true, default: 0 }),

            /**
             * The OverrunCount attribute shall indicate the number of packets dropped either at ingress or egress, due
             * to lack of buffer memory to retain all packets on the network interface. The OverrunCount attribute
             * shall be reset to 0 upon a reboot of the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.13
             */
            overrunCount: Attribute(12, TlvNullable(TlvUInt64), { omitChanges: true, default: 0 })
        },

        commands: {
            /**
             * Reception of this command shall reset the following attributes to 0:
             *
             *   • BeaconLostCount
             *
             *   • BeaconRxCount
             *
             *   • PacketMulticastRxCount
             *
             *   • PacketMulticastTxCount
             *
             *   • PacketUnicastRxCount
             *
             *   • PacketUnicastTxCount
             *
             * This command has no associated data.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.7.1
             */
            resetCounts: Command(0, TlvNoArguments, 0, TlvNoResponse)
        }
    });

    /**
     * A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.
     */
    export const PacketCountsComponent = ClusterComponent({
        attributes: {
            /**
             * The BeaconRxCount attribute shall indicate the count of the number of received beacons. The total number
             * of expected beacons that could have been received during the interval since association SHOULD match the
             * sum of BeaconRxCount and BeaconLostCount. If the Node does not have an ability to report count of
             * beacons received, this value MAY remain set to zero.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.7
             */
            beaconRxCount: Attribute(6, TlvNullable(TlvUInt32), { omitChanges: true, default: 0 }),

            /**
             * The PacketMulticastRxCount attribute shall indicate the number of multicast packets received by
             *
             * the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.8
             */
            packetMulticastRxCount: Attribute(7, TlvNullable(TlvUInt32), { omitChanges: true, default: 0 }),

            /**
             * The PacketMulticastTxCount attribute shall indicate the number of multicast packets transmitted by the
             * Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.9
             */
            packetMulticastTxCount: Attribute(8, TlvNullable(TlvUInt32), { omitChanges: true, default: 0 }),

            /**
             * The PacketUnicastRxCount attribute shall indicate the number of unicast packets received by the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.10
             */
            packetUnicastRxCount: Attribute(9, TlvNullable(TlvUInt32), { omitChanges: true, default: 0 }),

            /**
             * The PacketUnicastTxCount attribute shall indicate the number of unicast packets transmitted by the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.11
             */
            packetUnicastTxCount: Attribute(10, TlvNullable(TlvUInt32), { omitChanges: true, default: 0 })
        }
    });

    /**
     * This cluster supports all WiFiNetworkDiagnostics features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes, ...ErrorCountsComponent.attributes, ...PacketCountsComponent.attributes },
        events: { ...BaseComponent.events },
        commands: { ...ErrorCountsComponent.commands }
    });
}
