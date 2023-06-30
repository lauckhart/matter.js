/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { Attribute, AccessLevel, OptionalAttribute, OptionalEvent, EventPriority, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvByteString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvEnum, TlvUInt16, TlvInt8, TlvUInt64, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.14.5.1
 */
export const enum SecurityTypeEnum {
    Unspecified = 0,
    None = 1,
    Wep = 2,
    Wpa = 3,
    Wpa2 = 4,
    Wpa3 = 5
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.14.5.2
 */
export const enum WiFiVersionEnum {
    A = 0,
    B = 1,
    G = 2,
    N = 3,
    Ac = 4,
    Ax = 5
};

/**
 * The Disconnection Event SHALL indicate that a Node’s Wi-Fi connection has
 * been disconnected as a result of de-authenticated or dis-association and
 * indicates the reason.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.1
 */
export const DisconnectionEvent = TlvObject({
    /**
     * This field SHALL contain the Reason Code field value for the
     * Disassociation or Deauthentication event that caused the disconnection
     * and the value SHALL align with Table 9-49 "Reason codes" of IEEE
     * 802.11-2020.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.1.1
     */
    ReasonCode: TlvField(0, TlvUInt16)
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.14.5.3
 */
export const enum AssociationFailureCauseEnum {
    Unknown = 0,
    AssociationFailed = 1,
    AuthenticationFailed = 2,
    SsidNotFound = 3
};

/**
 * The AssociationFailure event SHALL indicate that a Node has attempted to
 * connect, or reconnect, to a Wi-Fi access point, but is unable to
 * successfully associate or authenticate, after exhausting all internal
 * retries of its supplicant.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.2
 */
export const AssociationFailureEvent = TlvObject({
    /**
     * The Status field SHALL be set to a value from the
     * AssociationFailureCauseEnum.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.2.1
     */
    AssociationFailureCause: TlvField(0, TlvEnum<AssociationFailureCauseEnum>()),

    /**
     * The Status field SHALL be set to the Status Code value that was present
     * in the last frame related to association where Status Code was not equal
     * to zero and which caused the failure of a last trial attempt, if this
     * last failure was due to one of the following Management frames:
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.2.2
     */
    Status: TlvField(1, TlvUInt16)
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.14.5.4
 */
export const enum ConnectionStatusEnum {
    Connected = 0,
    NotConnected = 1
};

/**
 * The ConnectionStatus Event SHALL indicate that a Node’s connection status to
 * a Wi-Fi network has changed. Connected, in this context, SHALL mean that a
 * Node acting as a Wi-Fi station is successfully associated to a Wi-Fi Access
 * Point.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.3
 */
export const ConnectionStatusEvent = TlvObject({ ConnectionStatus: TlvField(0, TlvEnum<ConnectionStatusEnum>()) });

export namespace WiFiNetworkDiagnosticsCluster {
    export const id = 54;
    export const name = "WiFiNetworkDiagnostics";
    export const revision = 1;

    export const featureMap = {
        /**
         * PacketCounts
         *
         * Node makes available the counts for the number of received and
         * transmitted packets on the Wi-Fi interface.
         */
        PKTCNT: BitFlag(0),

        /**
         * ErrorCounts
         *
         * Node makes available the counts for the number of errors that have
         * occurred during the reception and transmission of packets on the
         * Wi-Fi interface.
         */
        ERRCNT: BitFlag(1)
    };

    const Base = {
        attributes: {
            /**
             * The BSSID attribute SHALL indicate the BSSID for which the Wi-Fi
             * network the Node is currently connected.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.1
             */
            bssid: Attribute(0, TlvNullable(TlvByteString.bound({ minLength: 6, maxLength: 6 })), { default: null, readAcl: AccessLevel.View }),

            /**
             * The SecurityType attribute SHALL indicate the current type of
             * Wi-Fi security used.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.2
             */
            securityType: Attribute(1, TlvNullable(TlvEnum<SecurityTypeEnum>()), { default: null, readAcl: AccessLevel.View }),

            /**
             * The WiFiVersion attribute SHALL indicate the current 802.11
             * standard version in use by the Node, per the table below.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.3
             */
            wiFiVersion: Attribute(2, TlvNullable(TlvEnum<WiFiVersionEnum>()), { default: null, readAcl: AccessLevel.View }),

            /**
             * The ChannelNumber attribute SHALL indicate the channel that
             * Wi-Fi communication is currently operating on.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.4
             */
            channelNumber: Attribute(3, TlvNullable(TlvUInt16), { readAcl: AccessLevel.View }),

            /**
             * The RSSI attribute SHALL indicate the current RSSI of the Node’s
             * Wi-Fi radio in dBm.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.5
             */
            rssi: Attribute(4, TlvNullable(TlvInt8), { omitChanges: true, default: null, readAcl: AccessLevel.View }),

            /**
             * The CurrentMaxRate attribute SHALL indicate the current maximum
             * PHY rate of transfer of data in bits-per-second.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.12
             */
            currentMaxRate: OptionalAttribute(11, TlvNullable(TlvUInt64), { omitChanges: true, readAcl: AccessLevel.View })
        },

        events: {
            /**
             * The Disconnection Event SHALL indicate that a Node’s Wi-Fi
             * connection has been disconnected as a result of de-authenticated
             * or dis-association and indicates the reason.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.1
             */
            disconnection: OptionalEvent(0, EventPriority.Info, DisconnectionEvent),

            /**
             * The AssociationFailure event SHALL indicate that a Node has
             * attempted to connect, or reconnect, to a Wi-Fi access point, but
             * is unable to successfully associate or authenticate, after
             * exhausting all internal retries of its supplicant.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.2
             */
            associationFailure: OptionalEvent(1, EventPriority.Info, AssociationFailureEvent),

            /**
             * The ConnectionStatus Event SHALL indicate that a Node’s
             * connection status to a Wi-Fi network has changed. Connected, in
             * this context, SHALL mean that a Node acting as a Wi-Fi station
             * is successfully associated to a Wi-Fi Access Point.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.8.3
             */
            connectionStatus: OptionalEvent(2, EventPriority.Info, ConnectionStatusEvent)
        }
    };

    const ErrorCounts = {
        attributes: {
            /**
             * The BeaconLostCount attribute SHALL indicate the count of the
             * number of missed beacons the Node has detected. If the Node does
             * not have an ability to count beacons expected and not received,
             * this value MAY remain set to zero.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.6
             */
            beaconLostCount: Attribute(5, TlvNullable(TlvUInt32), { omitChanges: true, readAcl: AccessLevel.View }),

            /**
             * The OverrunCount attribute SHALL indicate the number of packets
             * dropped either at ingress or egress, due to lack of buffer
             * memory to retain all packets on the network interface. The
             * OverrunCount attribute SHALL be reset to 0 upon a reboot of the
             * Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.13
             */
            overrunCount: Attribute(12, TlvNullable(TlvUInt64), { omitChanges: true, readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * Reception of this command SHALL reset the following attributes
             * to 0:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.7.1
             */
            resetCounts: Command(0, TlvNoArguments, 0, TlvNoResponse)
        }
    };

    const PacketCounts = {
        attributes: {
            /**
             * The BeaconRxCount attribute SHALL indicate the count of the
             * number of received beacons. The total number of expected beacons
             * that could have been received during the interval since
             * association SHOULD match the sum of BeaconRxCount and
             * BeaconLostCount. If the Node does not have an ability to report
             * count of beacons received, this value MAY remain set to zero.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.7
             */
            beaconRxCount: Attribute(6, TlvNullable(TlvUInt32), { omitChanges: true, readAcl: AccessLevel.View }),

            /**
             * The PacketMulticastRxCount attribute SHALL indicate the number
             * of multicast packets received by
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.8
             */
            packetMulticastRxCount: Attribute(7, TlvNullable(TlvUInt32), { omitChanges: true, readAcl: AccessLevel.View }),

            /**
             * The PacketMulticastTxCount attribute SHALL indicate the number
             * of multicast packets transmitted by the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.9
             */
            packetMulticastTxCount: Attribute(8, TlvNullable(TlvUInt32), { omitChanges: true, readAcl: AccessLevel.View }),

            /**
             * The PacketUnicastRxCount attribute SHALL indicate the number of
             * unicast packets received by the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.10
             */
            packetUnicastRxCount: Attribute(9, TlvNullable(TlvUInt32), { omitChanges: true, readAcl: AccessLevel.View }),

            /**
             * The PacketUnicastTxCount attribute SHALL indicate the number of
             * unicast packets transmitted by the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.14.6.11
             */
            packetUnicastTxCount: Attribute(10, TlvNullable(TlvUInt32), { omitChanges: true, readAcl: AccessLevel.View })
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: {
            PKTCNT: true,
            ERRCNT: true
        },
        elements: [
            Base,
            ErrorCounts,
            PacketCounts
        ]
    });
};