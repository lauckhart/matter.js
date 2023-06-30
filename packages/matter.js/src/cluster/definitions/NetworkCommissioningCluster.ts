/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { FixedAttribute, AccessLevel, Attribute, WritableAttribute, Command } from "../../cluster/Cluster.js";
import { TlvUInt8, TlvEnum, TlvInt32, TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvByteString, TlvString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * NetworkInfoStruct struct describes an existing network configuration, as
 * provided in the Networks attribute.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.4
 */
export const NetworkInfoStruct = TlvObject({
    /**
     * Every network is uniquely identified (for purposes of commissioning) by
     * a NetworkID mapping to the following technology-specific properties:
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.4.1
     */
    NetworkId: TlvField(0, TlvByteString.bound({ minLength: 1, maxLength: 32 })),

    /**
     * This field SHALL indicate the connected status of the associated
     * network, where "connected" means currently linked to the network
     * technology (e.g. Associated for a Wi-Fi network, media connected for an
     * Ethernet network).
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.4.2
     */
    Connected: TlvField(1, TlvBoolean)
});

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.3
 */
export const enum NetworkCommissioningStatusEnum {
    Success = 0,
    OutOfRange = 1,
    BoundsExceeded = 2,
    NetworkIdNotFound = 3,
    DuplicateNetworkId = 4,
    NetworkNotFound = 5,
    RegulatoryError = 6,
    AuthFailure = 7,
    UnsupportedSecurity = 8,
    OtherConnectionFailure = 9,
    Ipv6Failed = 10,
    IpBindFailed = 11,
    UnknownError = 12
};

/**
 * This response command relates status information for some commands which
 * require it as their response command. See each individual cluster server
 * command for the situations that may cause a NetworkingStatus different than
 * Success.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.8
 */
export const NetworkConfigResponseRequest = TlvObject({
    NetworkingStatus: TlvField(0, TlvEnum<NetworkCommissioningStatusEnum>()),
    DebugText: TlvOptionalField(1, TlvString.bound({ maxLength: 512 })),

    /**
     * When the NetworkingStatus is Success, this field SHALL be present. It
     * SHALL contain the 0-based index of the entry in the Networks attribute
     * that was last added, updated or removed successfully by the associated
     * request command.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.8.1
     */
    NetworkIndex: TlvOptionalField(2, TlvUInt8)
});

/**
 * This command SHALL be used to add or modify Wi-Fi network configurations.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.3
 */
export const AddOrUpdateWiFiNetworkRequest = TlvObject({
    Ssid: TlvField(0, TlvByteString.bound({ maxLength: 32 })),

    /**
     * Credentials is the passphrase or PSK for the network (if any is needed).
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.3.1
     */
    Credentials: TlvField(1, TlvByteString.bound({ maxLength: 64 })),

    Breadcrumb: TlvOptionalField(2, TlvUInt64)
});

/**
 * This command SHALL be used to add or modify Thread network configurations.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.4
 */
export const AddOrUpdateThreadNetworkRequest = TlvObject({
    /**
     * The OperationalDataset field SHALL contain the Thread Network
     * Parameters, including channel, PAN ID, and Extended PAN ID.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.4.1
     */
    OperationalDataset: TlvField(0, TlvByteString.bound({ maxLength: 254 })),

    Breadcrumb: TlvOptionalField(1, TlvUInt64)
});

export namespace NetworkCommissioningCluster {
    export const id = 49;
    export const name = "NetworkCommissioning";
    export const revision = 1;

    export const featureMap = {
        /**
         * WiFiNetworkInterface
         *
         * Wi-Fi related features
         */
        WI: BitFlag(0),

        /**
         * ThreadNetworkInterface
         *
         * Thread related features
         */
        TH: BitFlag(1),

        /**
         * EthernetNetworkInterface
         *
         * Ethernet related features
         */
        ET: BitFlag(2)
    };

    const Base = {
        attributes: {
            /**
             * This SHALL indicate the maximum number of network configuration
             * entries that can be added, based on available device resources.
             * The length of the Networks attribute list SHALL be less than or
             * equal to this value.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.1
             */
            maxNetworks: FixedAttribute(0, TlvUInt8, { readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }),

            /**
             * This attribute SHALL indicate the network configurations that
             * are usable on the network interface represented by this cluster
             * server instance.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.2
             */
            networks: Attribute(1, TlvArray(NetworkInfoStruct), { readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }),

            /**
             * This attribute SHALL indicate whether the associated network
             * interface is enabled or not. By default all network interfaces
             * SHOULD be enabled during initial commissioning (InterfaceEnabled
             * set to true).
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.5
             */
            interfaceEnabled: WritableAttribute(4, TlvBoolean, { persistent: true, default: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Administer }),

            /**
             * This attribute SHALL indicate the status of the last attempt
             * either scan or connect to an operational network, using this
             * interface, whether by invocation of the ConnectNetwork command
             * or by autonomous connection after loss of connectivity or during
             * initial establishment. If no such attempt was made, or no
             * network configurations exist in the Networks attribute, then
             * this attribute SHALL be set to null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.6
             */
            lastNetworkingStatus: Attribute(5, TlvNullable(TlvEnum<NetworkCommissioningStatusEnum>()), { default: null, readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }),

            /**
             * This attribute SHALL indicate the NetworkID used in the last
             * attempt to connect to an operational network, using this
             * interface, whether by invocation of the ConnectNetwork command
             * or by autonomous connection after loss of connectivity or during
             * initial establishment. If no such attempt was made, or no
             * network configurations exist in the Networks attribute, then
             * this attribute SHALL be set to null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.7
             */
            lastNetworkId: Attribute(6, TlvNullable(TlvByteString.bound({ minLength: 1, maxLength: 32 })), { default: null, readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }),

            /**
             * This attribute SHALL indicate the ErrorValue used in the last
             * failed attempt to connect to an operational network, using this
             * interface, whether by invocation of the ConnectNetwork command
             * or by autonomous connection after loss of connectivity or during
             * initial establishment. If no such attempt was made, or no
             * network configurations exist in the Networks attribute, then
             * this attribute SHALL be set to null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.8
             */
            lastConnectErrorValue: Attribute(7, TlvNullable(TlvInt32), { default: null, readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer })
        }
    };

    const WI = {
        commands: {
            /**
             * This command SHALL be used to add or modify Wi-Fi network
             * configurations.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.3
             */
            addOrUpdateWiFiNetwork: Command(2, AddOrUpdateWiFiNetworkRequest, 5, NetworkConfigResponseRequest)
        }
    };

    const TH = {
        commands: {
            /**
             * This command SHALL be used to add or modify Thread network
             * configurations.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.4
             */
            addOrUpdateThreadNetwork: Command(3, AddOrUpdateThreadNetworkRequest, 5, NetworkConfigResponseRequest)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: {
            WI: true,
            TH: true,
            ET: true
        },
        elements: [
            Base,
            WI,
            TH
        ]
    });
};