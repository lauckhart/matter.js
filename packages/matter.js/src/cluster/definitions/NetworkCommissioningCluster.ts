/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { FixedAttribute, AccessLevel, Attribute, WritableAttribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvUInt8, TlvEnum, TlvInt32, TlvBitmap, TlvUInt16, TlvInt8, TlvUInt64 } from "../../tlv/TlvNumber.js";
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
 * WiFiSecurityBitmap encodes the supported Wi-Fi security types present in the
 * Security field of the WiFiInterfaceScanResultStruct.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.1
 */
export const WiFiSecurityBitmapBits = {
    /**
     * Supports unencrypted Wi-Fi
     */
    Unencrypted: BitFlag(0),

    /**
     * Supports Wi-Fi using WEP security
     */
    Wep: BitFlag(1),

    /**
     * Supports Wi-Fi using WPA-Personal security
     */
    WpaPersonal: BitFlag(2),

    /**
     * Supports Wi-Fi using WPA2-Personal security
     */
    Wpa2Personal: BitFlag(3),

    /**
     * Supports Wi-Fi using WPA3-Personal security
     */
    Wpa3Personal: BitFlag(4)
};

export const WiFiSecurityBitmap = TlvBitmap(TlvUInt8, WiFiSecurityBitmapBits);
export const enum WiFiBand {
    "2G4" = 0,
    "3G65" = 1,
    "5G" = 2,
    "6G" = 3,
    "60G" = 4
};

/**
 * WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.5
 */
export const WiFiInterfaceScanResultStruct = TlvObject({
    Security: TlvOptionalField(0, WiFiSecurityBitmap),
    Ssid: TlvOptionalField(1, TlvByteString.bound({ maxLength: 32 })),
    Bssid: TlvOptionalField(2, TlvByteString.bound({ minLength: 6, maxLength: 6 })),
    Channel: TlvOptionalField(3, TlvUInt16),

    /**
     * This field, if present, MAY be used to differentiate overlapping channel
     * number values across different Wi-Fi frequency bands.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.5.1
     */
    WiFiBand: TlvOptionalField(4, TlvEnum<WiFiBand>()),

    /**
     * This field, if present, SHALL denote the signal strength in dBm of the
     * associated scan result.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.5.2
     */
    Rssi: TlvOptionalField(5, TlvInt8)
});

/**
 * ThreadInterfaceScanResultStruct represents a single Thread network scan
 * result.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.6
 */
export const ThreadInterfaceScanResultStruct = TlvObject({
    PanId: TlvOptionalField(0, TlvUInt16),
    ExtendedPanId: TlvOptionalField(1, TlvUInt64),
    NetworkName: TlvOptionalField(2, TlvString.bound({ minLength: 1, maxLength: 16 })),
    Channel: TlvOptionalField(3, TlvUInt16),
    Version: TlvOptionalField(4, TlvUInt8),

    /**
     * ExtendedAddress stands for an IEEE 802.15.4 Extended Address.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.6.1
     */
    ExtendedAddress: TlvOptionalField(5, TlvByteString),

    Rssi: TlvOptionalField(6, TlvInt8),
    Lqi: TlvOptionalField(7, TlvUInt8)
});

/**
 * This command SHALL contain the status of the last ScanNetworks command, and
 * the associated scan results if the operation was successful.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2
 */
export const ScanNetworksResponseRequest = TlvObject({
    /**
     * The NetworkingStatus field SHALL indicate the status of the last scan
     * operation, taking one of these values:
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2.1
     */
    NetworkingStatus: TlvField(0, TlvEnum<NetworkCommissioningStatusEnum>()),

    /**
     * This field, if present and non-empty, MAY contain error information
     * which MAY be communicated to the user in case the NetworkingStatus was
     * not Success. Its purpose is to help developers in troubleshooting errors
     * and MAY go into logs or crash reports.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2.2
     */
    DebugText: TlvOptionalField(1, TlvString.bound({ maxLength: 512 })),

    /**
     * If NetworkingStatus was Success, this field SHALL contain the Wi-Fi
     * network scan results. The list MAY be empty if none were found in range
     * on the bands supported by the interface, or if directed scanning had
     * been used and the desired SSID was not found in range.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2.3
     */
    WiFiScanResults: TlvOptionalField(2, TlvArray(WiFiInterfaceScanResultStruct)),

    /**
     * If NetworkingStatus was Success, this field SHALL contain the Thread
     * network scan results. The list MAY be empty if none were found in range
     * on the bands supported by the interface.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2.4
     */
    ThreadScanResults: TlvOptionalField(3, TlvArray(ThreadInterfaceScanResultStruct))
});

/**
 * This command SHALL scan on the Cluster instance’s associated network
 * interface for either of:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.1
 */
export const ScanNetworksRequest = TlvObject({
    /**
     * This field, if present, SHALL contain the SSID for a directed scan of
     * that particular Wi-Fi SSID. Otherwise, if the field is absent, or it is
     * null, this SHALL indicate scanning of all BSSID in range. This field
     * SHALL be ignored for ScanNetworks invocations on non-Wi-Fi server
     * instances.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.1.1
     */
    Ssid: TlvOptionalField(0, TlvNullable(TlvByteString.bound({ minLength: 1, maxLength: 32 }))),

    /**
     * The Breadcrumb field, if present, SHALL be used to atomically set the
     * Breadcrumb attribute in the General Commissioning cluster on success of
     * the associated command. If the command fails, the Breadcrumb attribute
     * in the General Commissioning cluster SHALL be left unchanged.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.1.2
     */
    Breadcrumb: TlvOptionalField(1, TlvUInt64)
});

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
 * This command SHALL remove the network configuration from the Cluster if
 * there was already a network configuration with the same NetworkID. The
 * relative order of the entries in the Networks attribute list SHALL remain
 * unchanged, except for the removal of the requested network configuration.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.7
 */
export const RemoveNetworkRequest = TlvObject({
    NetworkId: TlvField(0, TlvByteString.bound({ minLength: 1, maxLength: 32 })),
    Breadcrumb: TlvOptionalField(1, TlvUInt64)
});

/**
 * The data for this command is as follows:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.10
 */
export const ConnectNetworkResponseRequest = TlvObject({
    NetworkingStatus: TlvField(0, TlvEnum<NetworkCommissioningStatusEnum>()),
    DebugText: TlvOptionalField(1, TlvString),

    /**
     * • ErrorValue interpretation for Wi-Fi association errors:
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.10.1
     */
    ErrorValue: TlvField(2, TlvNullable(TlvInt32))
});

/**
 * This command SHALL attempt to connect to a network whose configuration was
 * previously added by either the AddOrUpdateWiFiNetwork or
 * AddOrUpdateThreadNetwork commands. Network is identified by its NetworkID.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.9
 */
export const ConnectNetworkRequest = TlvObject({
    NetworkId: TlvField(0, TlvByteString.bound({ minLength: 1, maxLength: 32 })),
    Breadcrumb: TlvOptionalField(1, TlvUInt64)
});

/**
 * This command SHALL set the specific order of the network configuration
 * selected by its NetworkID in the Networks attribute list to match the
 * position given by NetworkIndex.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.11
 */
export const ReorderNetworkRequest = TlvObject({
    NetworkId: TlvField(0, TlvByteString.bound({ minLength: 1, maxLength: 32 })),
    NetworkIndex: TlvField(1, TlvUInt8),
    Breadcrumb: TlvOptionalField(2, TlvUInt64)
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

    const WiFiNetworkInterfaceOrThreadNetworkInterface = {
        attributes: {
            /**
             * This attribute SHALL indicate the maximum duration taken, in
             * seconds, by the network interface on this cluster server
             * instance to provide scan results.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.3
             */
            scanMaxTimeSeconds: FixedAttribute(2, TlvUInt8, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the maximum duration taken, in
             * seconds, by the network interface on this cluster server
             * instance to report a successful or failed network connection
             * indication. This maximum time SHALL account for all operations
             * needed until a successful network connection is deemed to have
             * occurred, including, for example, obtaining IP addresses, or the
             * execution of necessary internal retries.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.4
             */
            connectMaxTimeSeconds: FixedAttribute(3, TlvUInt8, { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * This command SHALL scan on the Cluster instance’s associated
             * network interface for either of:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.1
             */
            scanNetworks: Command(0, ScanNetworksRequest, 1, ScanNetworksResponseRequest),

            /**
             * This command SHALL contain the status of the last ScanNetworks
             * command, and the associated scan results if the operation was
             * successful.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2
             */
            scanNetworksResponse: Command(1, ScanNetworksResponseRequest, 1, TlvNoResponse),

            /**
             * This command SHALL remove the network configuration from the
             * Cluster if there was already a network configuration with the
             * same NetworkID. The relative order of the entries in the
             * Networks attribute list SHALL remain unchanged, except for the
             * removal of the requested network configuration.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.7
             */
            removeNetwork: Command(4, RemoveNetworkRequest, 5, NetworkConfigResponseRequest),

            /**
             * This response command relates status information for some
             * commands which require it as their response command. See each
             * individual cluster server command for the situations that may
             * cause a NetworkingStatus different than Success.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.8
             */
            networkConfigResponse: Command(5, NetworkConfigResponseRequest, 5, TlvNoResponse),

            /**
             * This command SHALL attempt to connect to a network whose
             * configuration was previously added by either the
             * AddOrUpdateWiFiNetwork or AddOrUpdateThreadNetwork commands.
             * Network is identified by its NetworkID.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.9
             */
            connectNetwork: Command(6, ConnectNetworkRequest, 7, ConnectNetworkResponseRequest),

            /**
             * The data for this command is as follows:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.10
             */
            connectNetworkResponse: Command(7, ConnectNetworkResponseRequest, 7, TlvNoResponse),

            /**
             * This command SHALL set the specific order of the network
             * configuration selected by its NetworkID in the Networks
             * attribute list to match the position given by NetworkIndex.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.11
             */
            reorderNetwork: Command(8, ReorderNetworkRequest, 5, NetworkConfigResponseRequest)
        }
    };

    const WiFiNetworkInterface = {
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

    const ThreadNetworkInterface = {
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
            WiFiNetworkInterfaceOrThreadNetworkInterface,
            WiFiNetworkInterface,
            ThreadNetworkInterface
        ]
    });
};