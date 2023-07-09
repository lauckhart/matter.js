/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { extendCluster, preventCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { GlobalAttributes, FixedAttribute, AccessLevel, Attribute, WritableAttribute, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { TlvUInt8, TlvEnum, TlvInt32, TlvUInt64, TlvBitmap, TlvUInt16, TlvInt8 } from "../../tlv/TlvNumber.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvByteString, TlvString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * Network Commissioning
 *
 * Functionality to configure, enable, disable network credentials and access on a Matter device.
 *
 * Use this factory function to create a NetworkCommissioning cluster supporting a specific set of features.  Include
 * each {@link NetworkCommissioningCluster.Feature} you wish to support.
 *
 * @param features a list of {@link NetworkCommissioningCluster.Feature} to support
 * @returns a NetworkCommissioning cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8
 */
export function NetworkCommissioningCluster<T extends NetworkCommissioningCluster.Feature[]>(...features: [...T]) {
    const cluster = Cluster({
        ...NetworkCommissioningCluster.Metadata,
        supportedFeatures: BitFlags(NetworkCommissioningCluster.Metadata.features, ...features),
        ...NetworkCommissioningCluster.BaseComponent
    });

    extendCluster(
        cluster,
        NetworkCommissioningCluster.WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent,
        { wiFiNetworkInterface: true },
        { threadNetworkInterface: true }
    );

    extendCluster(cluster, NetworkCommissioningCluster.WiFiNetworkInterfaceComponent, { wiFiNetworkInterface: true });
    extendCluster(cluster, NetworkCommissioningCluster.ThreadNetworkInterfaceComponent, { threadNetworkInterface: true });

    preventCluster(
        cluster,
        { wiFiNetworkInterface: true, threadNetworkInterface: false, ethernetNetworkInterface: false },
        { wiFiNetworkInterface: false, threadNetworkInterface: true, ethernetNetworkInterface: false },
        { wiFiNetworkInterface: false, threadNetworkInterface: false, ethernetNetworkInterface: true }
    );

    return cluster as unknown as NetworkCommissioningCluster.Type<BitFlags<typeof NetworkCommissioningCluster.Metadata.features, T>>;
}

/**
 * NetworkInfoStruct struct describes an existing network configuration, as provided in the Networks attribute.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.4
 */
export const TlvNetworkInfoStruct = TlvObject({
    /**
     * Every network is uniquely identified (for purposes of commissioning) by a NetworkID mapping to the following
     * technology-specific properties:
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.4.1
     */
    networkId: TlvField(0, TlvByteString.bound({ minLength: 1, maxLength: 32 })),

    /**
     * This field SHALL indicate the connected status of the associated network, where "connected" means currently
     * linked to the network technology (e.g. Associated for a Wi-Fi network, media connected for an Ethernet network).
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.4.2
     */
    connected: TlvField(1, TlvBoolean)
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
}

/**
 * This command SHALL scan on the Cluster instance’s associated network interface for either of:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.1
 */
export const TlvScanNetworksRequest = TlvObject({
    /**
     * This field, if present, SHALL contain the SSID for a directed scan of that particular Wi-Fi SSID. Otherwise, if
     * the field is absent, or it is null, this SHALL indicate scanning of all BSSID in range. This field SHALL be
     * ignored for ScanNetworks invocations on non-Wi-Fi server instances.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.1.1
     */
    ssid: TlvOptionalField(0, TlvNullable(TlvByteString.bound({ minLength: 1, maxLength: 32 }))),

    /**
     * The Breadcrumb field, if present, SHALL be used to atomically set the Breadcrumb attribute in the General
     * Commissioning cluster on success of the associated command. If the command fails, the Breadcrumb attribute in
     * the General Commissioning cluster SHALL be left unchanged.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.1.2
     */
    breadcrumb: TlvOptionalField(1, TlvUInt64)
});

/**
 * WiFiSecurityBitmap encodes the supported Wi-Fi security types present in the Security field of the
 * WiFiInterfaceScanResultStruct.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.1
 */
export const TlvWiFiSecurityBitmapBits = {
    /**
     * Supports unencrypted Wi-Fi
     */
    unencrypted: BitFlag(0),

    /**
     * Supports Wi-Fi using WEP security
     */
    wep: BitFlag(1),

    /**
     * Supports Wi-Fi using WPA-Personal security
     */
    wpaPersonal: BitFlag(2),

    /**
     * Supports Wi-Fi using WPA2-Personal security
     */
    wpa2Personal: BitFlag(3),

    /**
     * Supports Wi-Fi using WPA3-Personal security
     */
    wpa3Personal: BitFlag(4)
};

export const TlvWiFiSecurityBitmap = TlvBitmap(TlvUInt8, TlvWiFiSecurityBitmapBits);
export const enum WiFiBand {
    "2G4" = 0,
    "3G65" = 1,
    "5G" = 2,
    "6G" = 3,
    "60G" = 4
}

/**
 * WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.5
 */
export const TlvWiFiInterfaceScanResultStruct = TlvObject({
    security: TlvOptionalField(0, TlvWiFiSecurityBitmap),
    ssid: TlvOptionalField(1, TlvByteString.bound({ maxLength: 32 })),
    bssid: TlvOptionalField(2, TlvByteString.bound({ minLength: 6, maxLength: 6 })),
    channel: TlvOptionalField(3, TlvUInt16),

    /**
     * This field, if present, MAY be used to differentiate overlapping channel number values across different Wi-Fi
     * frequency bands.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.5.1
     */
    wiFiBand: TlvOptionalField(4, TlvEnum<WiFiBand>()),

    /**
     * This field, if present, SHALL denote the signal strength in dBm of the associated scan result.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.5.2
     */
    rssi: TlvOptionalField(5, TlvInt8)
});

/**
 * ThreadInterfaceScanResultStruct represents a single Thread network scan result.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.6
 */
export const TlvThreadInterfaceScanResultStruct = TlvObject({
    panId: TlvOptionalField(0, TlvUInt16.bound({ max: 65534 })),
    extendedPanId: TlvOptionalField(1, TlvUInt64),
    networkName: TlvOptionalField(2, TlvString.bound({ minLength: 1, maxLength: 16 })),
    channel: TlvOptionalField(3, TlvUInt16),
    version: TlvOptionalField(4, TlvUInt8),

    /**
     * ExtendedAddress stands for an IEEE 802.15.4 Extended Address.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.6.1
     */
    extendedAddress: TlvOptionalField(5, TlvByteString),

    rssi: TlvOptionalField(6, TlvInt8),
    lqi: TlvOptionalField(7, TlvUInt8)
});

/**
 * This command SHALL contain the status of the last ScanNetworks command, and the associated scan results if the
 * operation was successful.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2
 */
export const TlvScanNetworksResponseRequest = TlvObject({
    /**
     * The NetworkingStatus field SHALL indicate the status of the last scan operation, taking one of these values:
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2.1
     */
    networkingStatus: TlvField(0, TlvEnum<NetworkCommissioningStatusEnum>()),

    /**
     * This field, if present and non-empty, MAY contain error information which MAY be communicated to the user in
     * case the NetworkingStatus was not Success. Its purpose is to help developers in troubleshooting errors and MAY
     * go into logs or crash reports.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2.2
     */
    debugText: TlvOptionalField(1, TlvString.bound({ maxLength: 512 })),

    /**
     * If NetworkingStatus was Success, this field SHALL contain the Wi-Fi network scan results. The list MAY be empty
     * if none were found in range on the bands supported by the interface, or if directed scanning had been used and
     * the desired SSID was not found in range.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2.3
     */
    wiFiScanResults: TlvOptionalField(2, TlvArray(TlvWiFiInterfaceScanResultStruct)),

    /**
     * If NetworkingStatus was Success, this field SHALL contain the Thread network scan results. The list MAY be empty
     * if none were found in range on the bands supported by the interface.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2.4
     */
    threadScanResults: TlvOptionalField(3, TlvArray(TlvThreadInterfaceScanResultStruct))
});

/**
 * This command SHALL remove the network configuration from the Cluster if there was already a network configuration
 * with the same NetworkID. The relative order of the entries in the Networks attribute list SHALL remain unchanged,
 * except for the removal of the requested network configuration.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.7
 */
export const TlvRemoveNetworkRequest = TlvObject({
    networkId: TlvField(0, TlvByteString.bound({ minLength: 1, maxLength: 32 })),
    breadcrumb: TlvOptionalField(1, TlvUInt64)
});

/**
 * This response command relates status information for some commands which require it as their response command. See
 * each individual cluster server command for the situations that may cause a NetworkingStatus different than Success.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.8
 */
export const TlvNetworkConfigResponseRequest = TlvObject({
    networkingStatus: TlvField(0, TlvEnum<NetworkCommissioningStatusEnum>()),
    debugText: TlvOptionalField(1, TlvString.bound({ maxLength: 512 })),

    /**
     * When the NetworkingStatus is Success, this field SHALL be present. It SHALL contain the 0-based index of the
     * entry in the Networks attribute that was last added, updated or removed successfully by the associated request
     * command.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.8.1
     */
    networkIndex: TlvOptionalField(2, TlvUInt8)
});

/**
 * This command SHALL attempt to connect to a network whose configuration was previously added by either the
 * AddOrUpdateWiFiNetwork or AddOrUpdateThreadNetwork commands. Network is identified by its NetworkID.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.9
 */
export const TlvConnectNetworkRequest = TlvObject({
    networkId: TlvField(0, TlvByteString.bound({ minLength: 1, maxLength: 32 })),
    breadcrumb: TlvOptionalField(1, TlvUInt64)
});

/**
 * The data for this command is as follows:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.10
 */
export const TlvConnectNetworkResponseRequest = TlvObject({
    networkingStatus: TlvField(0, TlvEnum<NetworkCommissioningStatusEnum>()),
    debugText: TlvOptionalField(1, TlvString),

    /**
     * • ErrorValue interpretation for Wi-Fi association errors:
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.10.1
     */
    errorValue: TlvField(2, TlvNullable(TlvInt32))
});

/**
 * This command SHALL set the specific order of the network configuration selected by its NetworkID in the Networks
 * attribute list to match the position given by NetworkIndex.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.11
 */
export const TlvReorderNetworkRequest = TlvObject({
    networkId: TlvField(0, TlvByteString.bound({ minLength: 1, maxLength: 32 })),
    networkIndex: TlvField(1, TlvUInt8),
    breadcrumb: TlvOptionalField(2, TlvUInt64)
});

/**
 * This command SHALL be used to add or modify Wi-Fi network configurations.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.3
 */
export const TlvAddOrUpdateWiFiNetworkRequest = TlvObject({
    ssid: TlvField(0, TlvByteString.bound({ maxLength: 32 })),

    /**
     * Credentials is the passphrase or PSK for the network (if any is needed).
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.3.1
     */
    credentials: TlvField(1, TlvByteString.bound({ maxLength: 64 })),

    breadcrumb: TlvOptionalField(2, TlvUInt64)
});

/**
 * This command SHALL be used to add or modify Thread network configurations.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.4
 */
export const TlvAddOrUpdateThreadNetworkRequest = TlvObject({
    /**
     * The OperationalDataset field SHALL contain the Thread Network Parameters, including channel, PAN ID, and
     * Extended PAN ID.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.4.1
     */
    operationalDataset: TlvField(0, TlvByteString.bound({ maxLength: 254 })),

    breadcrumb: TlvOptionalField(1, TlvUInt64)
});

export namespace NetworkCommissioningCluster {
    /**
     * These are optional features supported by NetworkCommissioningCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.4
     */
    export enum Feature {
        /**
         * WiFiNetworkInterface
         *
         * Wi-Fi related features
         */
        WiFiNetworkInterface = "WiFiNetworkInterface",

        /**
         * ThreadNetworkInterface
         *
         * Thread related features
         */
        ThreadNetworkInterface = "ThreadNetworkInterface",

        /**
         * EthernetNetworkInterface
         *
         * Ethernet related features
         */
        EthernetNetworkInterface = "EthernetNetworkInterface"
    }

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> =
        typeof Metadata
        & { attributes: GlobalAttributes<typeof Metadata.features> }
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { wiFiNetworkInterface: true } | { threadNetworkInterface: true } ? typeof WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent : {})
        & (T extends { wiFiNetworkInterface: true } ? typeof WiFiNetworkInterfaceComponent : {})
        & (T extends { threadNetworkInterface: true } ? typeof ThreadNetworkInterfaceComponent : {})
        & (T extends { wiFiNetworkInterface: true, threadNetworkInterface: false, ethernetNetworkInterface: false } ? never : {})
        & (T extends { wiFiNetworkInterface: false, threadNetworkInterface: true, ethernetNetworkInterface: false } ? never : {})
        & (T extends { wiFiNetworkInterface: false, threadNetworkInterface: false, ethernetNetworkInterface: true } ? never : {});

    /**
     * NetworkCommissioning cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8
     */
    export const Metadata = ClusterMetadata({
        id: 0x31,
        name: "NetworkCommissioning",
        revision: 1,

        features: {
            /**
             * WiFiNetworkInterface
             *
             * Wi-Fi related features
             */
            wiFiNetworkInterface: BitFlag(0),

            /**
             * ThreadNetworkInterface
             *
             * Thread related features
             */
            threadNetworkInterface: BitFlag(1),

            /**
             * EthernetNetworkInterface
             *
             * Ethernet related features
             */
            ethernetNetworkInterface: BitFlag(2)
        }
    });

    /**
     * A NetworkCommissioningCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This SHALL indicate the maximum number of network configuration entries that can be added, based on
             * available device resources. The length of the Networks attribute list SHALL be less than or equal to
             * this value.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.1
             */
            maxNetworks: FixedAttribute(
                0,
                TlvUInt8.bound({ min: 1 }),
                { readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * This attribute SHALL indicate the network configurations that are usable on the network interface
             * represented by this cluster server instance.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.2
             */
            networks: Attribute(
                1,
                TlvArray(TlvNetworkInfoStruct),
                { default: [], readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * This attribute SHALL indicate whether the associated network interface is enabled or not. By default all
             * network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set to true).
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.5
             */
            interfaceEnabled: WritableAttribute(
                4,
                TlvBoolean,
                { persistent: true, default: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Administer }
            ),

            /**
             * This attribute SHALL indicate the status of the last attempt either scan or connect to an operational
             * network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
             * connection after loss of connectivity or during initial establishment. If no such attempt was made, or
             * no network configurations exist in the Networks attribute, then this attribute SHALL be set to null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.6
             */
            lastNetworkingStatus: Attribute(
                5,
                TlvNullable(TlvEnum<NetworkCommissioningStatusEnum>()),
                { default: null, readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * This attribute SHALL indicate the NetworkID used in the last attempt to connect to an operational
             * network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
             * connection after loss of connectivity or during initial establishment. If no such attempt was made, or
             * no network configurations exist in the Networks attribute, then this attribute SHALL be set to null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.7
             */
            lastNetworkId: Attribute(
                6,
                TlvNullable(TlvByteString.bound({ minLength: 1, maxLength: 32 })),
                { default: null, readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * This attribute SHALL indicate the ErrorValue used in the last failed attempt to connect to an
             * operational network, using this interface, whether by invocation of the ConnectNetwork command or by
             * autonomous connection after loss of connectivity or during initial establishment. If no such attempt was
             * made, or no network configurations exist in the Networks attribute, then this attribute SHALL be set to
             * null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.8
             */
            lastConnectErrorValue: Attribute(
                7,
                TlvNullable(TlvInt32),
                { default: null, readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            )
        }
    });

    /**
     * A NetworkCommissioningCluster supports these elements if it supports features WiFiNetworkInterface or
     * ThreadNetworkInterface.
     */
    export const WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute SHALL indicate the maximum duration taken, in seconds, by the network interface on this
             * cluster server instance to provide scan results.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.3
             */
            scanMaxTimeSeconds: FixedAttribute(2, TlvUInt8, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the maximum duration taken, in seconds, by the network interface on this
             * cluster server instance to report a successful or failed network connection indication. This maximum
             * time SHALL account for all operations needed until a successful network connection is deemed to have
             * occurred, including, for example, obtaining IP addresses, or the execution of necessary internal retries.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.4
             */
            connectMaxTimeSeconds: FixedAttribute(3, TlvUInt8, { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * This command SHALL scan on the Cluster instance’s associated network interface for either of:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.1
             */
            scanNetworks: Command(0, TlvScanNetworksRequest, 1, TlvScanNetworksResponseRequest),

            /**
             * This command SHALL contain the status of the last ScanNetworks command, and the associated scan results
             * if the operation was successful.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2
             */
            scanNetworksResponse: Command(1, TlvScanNetworksResponseRequest, 1, TlvNoResponse),

            /**
             * This command SHALL remove the network configuration from the Cluster if there was already a network
             * configuration with the same NetworkID. The relative order of the entries in the Networks attribute list
             * SHALL remain unchanged, except for the removal of the requested network configuration.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.7
             */
            removeNetwork: Command(4, TlvRemoveNetworkRequest, 5, TlvNetworkConfigResponseRequest),

            /**
             * This response command relates status information for some commands which require it as their response
             * command. See each individual cluster server command for the situations that may cause a NetworkingStatus
             * different than Success.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.8
             */
            networkConfigResponse: Command(5, TlvNetworkConfigResponseRequest, 5, TlvNoResponse),

            /**
             * This command SHALL attempt to connect to a network whose configuration was previously added by either
             * the AddOrUpdateWiFiNetwork or AddOrUpdateThreadNetwork commands. Network is identified by its NetworkID.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.9
             */
            connectNetwork: Command(6, TlvConnectNetworkRequest, 7, TlvConnectNetworkResponseRequest),

            /**
             * The data for this command is as follows:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.10
             */
            connectNetworkResponse: Command(7, TlvConnectNetworkResponseRequest, 7, TlvNoResponse),

            /**
             * This command SHALL set the specific order of the network configuration selected by its NetworkID in the
             * Networks attribute list to match the position given by NetworkIndex.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.11
             */
            reorderNetwork: Command(8, TlvReorderNetworkRequest, 5, TlvNetworkConfigResponseRequest)
        }
    });

    /**
     * A NetworkCommissioningCluster supports these elements if it supports feature WiFiNetworkInterface.
     */
    export const WiFiNetworkInterfaceComponent = ClusterComponent({
        commands: {
            /**
             * This command SHALL be used to add or modify Wi-Fi network configurations.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.3
             */
            addOrUpdateWiFiNetwork: Command(2, TlvAddOrUpdateWiFiNetworkRequest, 5, TlvNetworkConfigResponseRequest)
        }
    });

    /**
     * A NetworkCommissioningCluster supports these elements if it supports feature ThreadNetworkInterface.
     */
    export const ThreadNetworkInterfaceComponent = ClusterComponent({
        commands: {
            /**
             * This command SHALL be used to add or modify Thread network configurations.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.4
             */
            addOrUpdateThreadNetwork: Command(3, TlvAddOrUpdateThreadNetworkRequest, 5, TlvNetworkConfigResponseRequest)
        }
    });

    /**
     * This cluster supports all NetworkCommissioning features.  It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes, ...WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent.attributes },
        commands: {
            ...WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent.commands,
            ...WiFiNetworkInterfaceComponent.commands,
            ...ThreadNetworkInterfaceComponent.commands
        }
    });
}
