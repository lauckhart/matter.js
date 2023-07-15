/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { BaseClusterComponent, ClusterComponent, ExtensibleCluster, validateFeatureSelection, extendCluster, preventCluster, ClusterForBaseCluster } from "../../cluster/ClusterFactory.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { FixedAttribute, AccessLevel, Attribute, WritableAttribute, Command, Cluster } from "../../cluster/Cluster.js";
import { TlvUInt8, TlvEnum, TlvInt32, TlvUInt64, TlvBitmap, TlvUInt16, TlvInt8 } from "../../tlv/TlvNumber.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvByteString, TlvString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

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
     *   • SSID for Wi-Fi
     *
     *   • Extended PAN ID for Thread
     *
     *   • Network interface instance name at operating system (or equivalent unique name) for Ethernet.
     *
     * The semantics of the NetworkID field therefore varies between network types accordingly. It contains SSID for
     * Wi-Fi networks, Extended PAN ID (XPAN ID) for Thread networks and netif name for Ethernet networks.
     *
     * NOTE
     *
     * SSID in Wi-Fi is a collection of 1-32 bytes, the text encoding of which is not specified. Implementations must
     * be careful to support reporting byte strings without requiring a particular encoding for transfer. Only the
     * commissioner should try to potentially decode the bytes. The most common encoding is UTF-8, however this is just
     * a convention. Some configurations may use Latin-1 or other character sets. A commissioner may decode using
     * UTF-8, replacing encoding errors with "?" at the application level while retaining the underlying representation.
     *
     * XPAN ID is a big-endian 64-bit unsigned number, represented on the first 8 octets of the octet string.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.4.1
     */
    networkId: TlvField(0, TlvByteString.bound({ minLength: 1, maxLength: 32 })),

    /**
     * This field shall indicate the connected status of the associated network, where "connected" means currently
     * linked to the network technology (e.g. Associated for a Wi-Fi network, media connected for an Ethernet network).
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.4.2
     */
    connected: TlvField(1, TlvBoolean)
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.3
 */
export const enum NetworkCommissioningStatus {
    /**
     * OK, no error
     */
    Success = 0,

    /**
     * Value Outside Range
     */
    OutOfRange = 1,

    /**
     * A collection would exceed its size limit
     */
    BoundsExceeded = 2,

    /**
     * The NetworkID is not among the collection of added networks
     */
    NetworkIdNotFound = 3,

    /**
     * The NetworkID is already among the collection of added networks
     */
    DuplicateNetworkId = 4,

    /**
     * Cannot find AP: SSID Not found
     */
    NetworkNotFound = 5,

    /**
     * Cannot find AP: Mismatch on band/channels/regulatory domain / 2.4GHz vs 5GHz
     */
    RegulatoryError = 6,

    /**
     * Cannot associate due to authentication failure
     */
    AuthFailure = 7,

    /**
     * Cannot associate due to unsupported security mode
     */
    UnsupportedSecurity = 8,

    /**
     * Other association failure
     */
    OtherConnectionFailure = 9,

    /**
     * Failure to generate an IPv6 address
     */
    Ipv6Failed = 10,

    /**
     * Failure to bind Wi-Fi <-> IP interfaces
     */
    IpBindFailed = 11,

    /**
     * Unknown error
     */
    UnknownError = 12
}

/**
 * Input to the NetworkCommissioning scanNetworks command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.1
 */
export const TlvScanNetworksRequest = TlvObject({
    /**
     * This field, if present, shall contain the SSID for a directed scan of that particular Wi-Fi SSID. Otherwise, if
     * the field is absent, or it is null, this shall indicate scanning of all BSSID in range. This field shall be
     * ignored for ScanNetworks invocations on non-Wi-Fi server instances.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.1.1
     */
    ssid: TlvOptionalField(0, TlvNullable(TlvByteString.bound({ minLength: 1, maxLength: 32 }))),

    /**
     * The Breadcrumb field, if present, shall be used to atomically set the Breadcrumb attribute in the General
     * Commissioning cluster on success of the associated command. If the command fails, the Breadcrumb attribute in
     * the General Commissioning cluster shall be left unchanged.
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
export const WiFiSecurityBitmap = {
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
    security: TlvOptionalField(0, TlvBitmap(TlvUInt8, WiFiSecurityBitmap)),
    ssid: TlvOptionalField(1, TlvByteString.bound({ maxLength: 32 })),
    bssid: TlvOptionalField(2, TlvByteString.bound({ length: 6 })),
    channel: TlvOptionalField(3, TlvUInt16),

    /**
     * This field, if present, may be used to differentiate overlapping channel number values across different Wi-Fi
     * frequency bands.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.5.5.1
     */
    wiFiBand: TlvOptionalField(4, TlvEnum<WiFiBand>()),

    /**
     * This field, if present, shall denote the signal strength in dBm of the associated scan result.
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
    extendedAddress: TlvOptionalField(5, TlvByteString.bound({ minLength: 6, maxLength: 8 })),

    rssi: TlvOptionalField(6, TlvInt8),
    lqi: TlvOptionalField(7, TlvUInt8)
});

/**
 * This command shall contain the status of the last ScanNetworks command, and the associated scan results if the
 * operation was successful.
 *
 * Results are valid only if NetworkingStatus is Success.
 *
 * Before generating a ScanNetworksResponse, the server shall set the LastNetworkingStatus attribute value to the
 * NetworkingStatus matching the response.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2
 */
export const TlvScanNetworksResponse = TlvObject({
    /**
     * The NetworkingStatus field shall indicate the status of the last scan operation, taking one of these values:
     *
     *   • Success: Scanning succeeded.
     *
     *   • NetworkNotFound: No instance of an explicitly-provided network identifier was found during the scan. This
     *     error cannot occur if no network identifier was provided, such as when scanning for all available networks.
     *
     *   • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc).
     *
     *   • RegulatoryError: Could not scan on any bands due to lack of regulatory configuration.
     *
     *   • UnknownError: An internal error occurred during scanning.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2.1
     */
    networkingStatus: TlvField(0, TlvEnum<NetworkCommissioningStatus>()),

    /**
     * This field, if present and non-empty, may contain error information which may be communicated to the user in
     * case the NetworkingStatus was not Success. Its purpose is to help developers in troubleshooting errors and may
     * go into logs or crash reports.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2.2
     */
    debugText: TlvOptionalField(1, TlvString.bound({ maxLength: 512 })),

    /**
     * If NetworkingStatus was Success, this field shall contain the Wi-Fi network scan results. The list may be empty
     * if none were found in range on the bands supported by the interface, or if directed scanning had been used and
     * the desired SSID was not found in range.
     *
     * The maximum number of results present in the result list supported may depend on memory and may contain a subset
     * of possibilities, to avoid memory exhaustion on the cluster server and avoid crossing the maximum command
     * response size supported (see Section 4.4.4, “Message Size Requirements”).
     *
     * The order in which results are reported is implementation-specific. Results SHOULD be reported in decreasing
     * RSSI order, even if RSSI is not reported in the response, to maximize the likelihood that most likely to be
     * reachable elements are included within the size limits of the response.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2.3
     */
    wiFiScanResults: TlvOptionalField(2, TlvArray(TlvWiFiInterfaceScanResultStruct)),

    /**
     * If NetworkingStatus was Success, this field shall contain the Thread network scan results. The list may be empty
     * if none were found in range on the bands supported by the interface.
     *
     * The maximum number of results present in the result list supported may depend on memory and may contain a subset
     * of possibilities, to avoid memory exhaustion on the cluster server and avoid crossing the maximum command
     * response size supported (see Section 4.4.4, “Message Size Requirements”).
     *
     * The order in which results are reported is implementation-specific. Results SHOULD be reported in decreasing LQI
     * order, to maximize the likelihood that most likely to be reachable elements are included within the size limits
     * of the response.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.2.4
     */
    threadScanResults: TlvOptionalField(3, TlvArray(TlvThreadInterfaceScanResultStruct))
});

/**
 * Input to the NetworkCommissioning removeNetwork command
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
 * Before generating a NetworkConfigResponse, the server shall set the LastNetworkingStatus attribute value to the
 * NetworkingStatus matching the response.
 *
 * Before generating a NetworkConfigResponse, the server shall set the LastNetworkID attribute value to the NetworkID
 * that was used in the command for which an invocation caused the response to be generated.
 *
 * The NetworkingStatus field shall indicate the status of the last operation attempting to modify the Networks
 * attribute configuration, taking one of these values:
 *
 *   • Success: Operation succeeded.
 *
 *   • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc).
 *
 *   • BoundsExceeded: Adding this network configuration would exceed the limit defined by Section 11.8.6.1,
 *     “MaxNetworks Attribute”.
 *
 *   • NetworkIdNotFound: The network identifier was expected to be found, but was not found among the added network
 *     configurations in Networks attribute.
 *
 *   • UnknownError: An internal error occurred during the operation.
 *
 * See Section 11.8.7.2.2, “DebugText Field” for usage.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.8
 */
export const TlvNetworkConfigResponse = TlvObject({
    networkingStatus: TlvField(0, TlvEnum<NetworkCommissioningStatus>()),
    debugText: TlvOptionalField(1, TlvString.bound({ maxLength: 512 })),

    /**
     * When the NetworkingStatus is Success, this field shall be present. It shall contain the 0-based index of the
     * entry in the Networks attribute that was last added, updated or removed successfully by the associated request
     * command.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.8.1
     */
    networkIndex: TlvOptionalField(2, TlvUInt8)
});

/**
 * Input to the NetworkCommissioning connectNetwork command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.9
 */
export const TlvConnectNetworkRequest = TlvObject({
    networkId: TlvField(0, TlvByteString.bound({ minLength: 1, maxLength: 32 })),
    breadcrumb: TlvOptionalField(1, TlvUInt64)
});

/**
 * Before generating a ConnectNetworkResponse, the server shall:
 *
 *   • Set the LastNetworkingStatus attribute value to the NetworkingStatus matching the response.
 *
 *   • Set the LastNetworkID attribute value to the NetworkID that was used in the ConnectNetwork command which caused
 *     the response to be generated.
 *
 *   • Set the LastConnectErrorValue attribute value to the ErrorValue matching the response, including setting it to
 *     null if the ErrorValue is not applicable.
 *
 * The NetworkingStatus field shall indicate the status of the last connection attempt, taking one of these values:
 *
 *   • Success: Connection succeeded.
 *
 *   • NetworkNotFound: No instance of an explicitly-provided network identifier was found during the attempt to join
 *     the network.
 *
 *   • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc).
 *
 *   • NetworkIdNotFound: The network identifier was not found among the added network configurations in Networks
 *     attribute.
 *
 *   • RegulatoryError: Could not connect to a network due to lack of regulatory configuration.
 *
 *   • UnknownError: An internal error occurred during the operation.
 *
 *   • Association errors (see also description of errors in Section 11.8.5.3, “NetworkCommissioningStatusEnum”):
 *     AuthFailure, UnsupportedSecurity, OtherConnectionFailure, IPV6Failed, IPBindFailed
 *
 * See Section 11.8.7.2.2, “DebugText Field” for usage.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.10
 */
export const TlvConnectNetworkResponse = TlvObject({
    networkingStatus: TlvField(0, TlvEnum<NetworkCommissioningStatus>()),
    debugText: TlvOptionalField(1, TlvString),

    /**
     *   • ErrorValue interpretation for Wi-Fi association errors:
     *
     *     ◦ On any association failure during enabling of a network, the ErrorValue field shall be set to the Status
     *       Code value that was present in the last frame related to association where Status Code was not equal to
     *       zero and which caused the failure of a final retry attempt, if this final failure was due to one of the
     *       following Management frames:
     *
     *       ▪ Association Response (Type 0, Subtype 1)
     *
     *       ▪ Reassociation Response (Type 0, Subtype 3)
     *
     *       ▪ Authentication (Type 0, Subtype 11)
     *
     *     ◦ Table 9-50 "Status Codes" in IEEE 802.11-2020 contains a description of all values possible, which can
     *       unambiguously be used to determine the cause, such as an invalid security type, unsupported rate, etc.
     *
     *   • Otherwise, the ErrorValue field shall contain an implementation-dependent value which may be used by a
     *     reader of the structure to record, report or diagnose the failure.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.10.1
     */
    errorValue: TlvField(2, TlvNullable(TlvInt32))
});

/**
 * Input to the NetworkCommissioning reorderNetwork command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.11
 */
export const TlvReorderNetworkRequest = TlvObject({
    networkId: TlvField(0, TlvByteString.bound({ minLength: 1, maxLength: 32 })),
    networkIndex: TlvField(1, TlvUInt8),
    breadcrumb: TlvOptionalField(2, TlvUInt64)
});

/**
 * Input to the NetworkCommissioning addOrUpdateWiFiNetwork command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.3
 */
export const TlvAddOrUpdateWiFiNetworkRequest = TlvObject({
    ssid: TlvField(0, TlvByteString.bound({ maxLength: 32 })),

    /**
     * Credentials is the passphrase or PSK for the network (if any is needed).
     *
     * Security type, cipher and credential format (passphrase or PSK) shall be contextually auto- selected during
     * execution of the ConnectNetwork Command and during subsequent operational state network connections, based on
     * the most secure Wi-Fi security type available within beacons and probe responses for the set of all discovered
     * BSSIDs for the configured SSID. The type of PSK or passphrase used shall be inferred based on the length and
     * contents of the Credentials field provided, matching the security type chosen.
     *
     * Valid Credentials length are:
     *
     *   • 0 bytes: Unsecured (open) connection
     *
     *   • 5 bytes: WEP-64 passphrase
     *
     *   • 10 hexadecimal ASCII characters: WEP-64 40-bit hex raw PSK
     *
     *   • 13 bytes: WEP-128 passphrase
     *
     *   • 26 hexadecimal ASCII characters: WEP-128 104-bit hex raw PSK
     *
     *   • 8..63 bytes: WPA/WPA2/WPA3 passphrase
     *
     *   • 64 bytes: WPA/WPA2/WPA3 raw hex PSK
     *
     * These lengths shall be contextually interpreted based on the security type of the BSSID where connection will
     * occur.
     *
     * When the length of Credentials and available set of BSSID admits more than one option, such as the presence of
     * both WPA2 and WPA security type within the result set, WPA2 shall be considered more secure.
     *
     * Note that it may occur that a station cannot connect to a particular access point with higher security and
     * selects a lower security connectivity type if the link quality is deemed to be too low to achieve successful
     * operation, or if all retry attempts fail.
     *
     * See Section 11.8.7.1.2, “Breadcrumb Field” for usage.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.3.1
     */
    credentials: TlvField(1, TlvByteString.bound({ maxLength: 64 })),

    breadcrumb: TlvOptionalField(2, TlvUInt64)
});

/**
 * Input to the NetworkCommissioning addOrUpdateThreadNetwork command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.4
 */
export const TlvAddOrUpdateThreadNetworkRequest = TlvObject({
    /**
     * The OperationalDataset field shall contain the Thread Network Parameters, including channel, PAN ID, and
     * Extended PAN ID.
     *
     * The encoding for the OperationalDataset field is defined in the Thread specification. The client shall pass the
     * OperationalDataset as an opaque octet string.
     *
     * See Section 11.8.7.1.2, “Breadcrumb Field” for usage.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.4.1
     */
    operationalDataset: TlvField(0, TlvByteString.bound({ maxLength: 254 })),

    breadcrumb: TlvOptionalField(1, TlvUInt64)
});

/**
 * These are optional features supported by NetworkCommissioningCluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8.4
 */
export enum NetworkCommissioningFeature {
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

/**
 * These elements and properties are present in all NetworkCommissioning clusters.
 */
export const NetworkCommissioningBase = BaseClusterComponent({
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
    },

    attributes: {
        /**
         * This shall indicate the maximum number of network configuration entries that can be added, based on
         * available device resources. The length of the Networks attribute list shall be less than or equal to this
         * value.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.1
         */
        maxNetworks: FixedAttribute(
            0x0,
            TlvUInt8.bound({ min: 1 }),
            { readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
        ),

        /**
         * This attribute shall indicate the network configurations that are usable on the network interface
         * represented by this cluster server instance.
         *
         * The order of configurations in the list reflects precedence. That is, any time the Node attempts to connect
         * to the network it shall attempt to do so using the configurations in Networks Attribute in the order as they
         * appear in the list.
         *
         * The order of list items shall only be modified by the AddOrUpdateThreadNetwork, AddOrUpdateWiFiNetwork and
         * ReorderNetwork commands. In other words, the list shall be stable over
         *
         * time, unless mutated externally.
         *
         * Ethernet networks shall be automatically populated by the cluster server. Ethernet Network Commissioning
         * Cluster instances shall always have exactly one Section 11.8.5.4, “NetworkInfoStruct” instance in their
         * Networks attribute. There shall be no way to add, update or remove Ethernet network configurations to those
         * Cluster instances.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.2
         */
        networks: Attribute(
            0x1,
            TlvArray(TlvNetworkInfoStruct),
            { default: [], readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
        ),

        /**
         * This attribute shall indicate whether the associated network interface is enabled or not. By default all
         * network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set to true).
         *
         * It is undefined what happens if InterfaceEnabled is written to false on the same interface as that which is
         * used to write the value. In that case, it is possible that the Administrator would have to await expiry of
         * the fail-safe, and associated recovery of network configuration to prior safe values, before being able to
         * communicate with the node again (see Section 11.9.6.2, “ArmFailSafe Command”).
         *
         * It may be possible to disable Ethernet interfaces but it is implementation-defined. If not supported, a
         * write to this attribute with a value of false shall fail with a status of INVALID_ACTION. When disabled, an
         * Ethernet interface would longer employ media detection. That is, a simple unplug and replug of the cable
         * shall NOT re-enable the interface.
         *
         * On Ethernet-only Nodes, there shall always be at least one of the Network Commissioning server cluster
         * instances with InterfaceEnabled set to true.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.5
         */
        interfaceEnabled: WritableAttribute(
            0x4,
            TlvBoolean,
            { persistent: true, default: true, writeAcl: AccessLevel.Administer }
        ),

        /**
         * This attribute shall indicate the status of the last attempt either scan or connect to an operational
         * network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
         * connection after loss of connectivity or during initial establishment. If no such attempt was made, or no
         * network configurations exist in the Networks attribute, then this attribute shall be set to null.
         *
         * This attribute is present to assist with error recovery during Network commissioning and to assist in
         * non-concurrent networking commissioning flows.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.6
         */
        lastNetworkingStatus: Attribute(
            0x5,
            TlvNullable(TlvEnum<NetworkCommissioningStatus>()),
            { default: null, readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
        ),

        /**
         * This attribute shall indicate the NetworkID used in the last attempt to connect to an operational network,
         * using this interface, whether by invocation of the ConnectNetwork command or by autonomous connection after
         * loss of connectivity or during initial establishment. If no such attempt was made, or no network
         * configurations exist in the Networks attribute, then this attribute shall be set to null.
         *
         * If a network configuration is removed from the Networks attribute using the RemoveNetwork command after a
         * connection attempt, this field may indicate a NetworkID that is no longer configured on the Node.
         *
         * This attribute is present to assist with error recovery during Network commissioning and to assist in
         * non-concurrent networking commissioning flows.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.7
         */
        lastNetworkId: Attribute(
            0x6,
            TlvNullable(TlvByteString.bound({ minLength: 1, maxLength: 32 })),
            { default: null, readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
        ),

        /**
         * This attribute shall indicate the ErrorValue used in the last failed attempt to connect to an operational
         * network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
         * connection after loss of connectivity or during initial establishment. If no such attempt was made, or no
         * network configurations exist in the Networks attribute, then this attribute shall be set to null.
         *
         * If the last connection succeeded, as indicated by a value of Success in the LastNetworkingStatus attribute,
         * then this field shall be set to null.
         *
         * This attribute is present to assist with error recovery during Network commissioning and to assist in
         * non-concurrent networking commissioning flows.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.8
         */
        lastConnectErrorValue: Attribute(
            0x7,
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
         * This attribute shall indicate the maximum duration taken, in seconds, by the network interface on this
         * cluster server instance to provide scan results.
         *
         * See Section 11.8.7.1, “ScanNetworks Command” for usage.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.3
         */
        scanMaxTimeSeconds: FixedAttribute(0x2, TlvUInt8),

        /**
         * This attribute shall indicate the maximum duration taken, in seconds, by the network interface on this
         * cluster server instance to report a successful or failed network connection indication. This maximum time
         * shall account for all operations needed until a successful network connection is deemed to have occurred,
         * including, for example, obtaining IP addresses, or the execution of necessary internal retries.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.8.6.4
         */
        connectMaxTimeSeconds: FixedAttribute(0x3, TlvUInt8)
    },

    commands: {
        /**
         * This command shall scan on the Cluster instance’s associated network interface for either of:
         *
         *   • All available networks (non-directed scanning)
         *
         *   • Specific networks (directed scanning)
         *
         * Scanning for available networks detects all networks of the type corresponding to the cluster server
         * instance’s associated network interface that are possible to join, such as all visible Wi-Fi access points
         * for Wi-Fi cluster server instances, all Thread PANs for Thread cluster server instances, within bounds of
         * the maximum response size.
         *
         * Scanning for a specific network (i.e. directed scanning) takes place if a network identifier (e.g. Wi-Fi
         * SSID) is provided in the command arguments. Directed scanning shall restrict the result set to the specified
         * network only.
         *
         * The client shall NOT expect the server to be done scanning and have responded with ScanNetworksResponse
         * before ScanMaxTimeSeconds seconds have elapsed. Enough transport time affordances for retries SHOULD be
         * expected before a client determines the operation to have timed-out.
         *
         * This command shall fail with a status code of BUSY if the server determines that it will fail to reliably
         * send a response due to changes of networking interface configuration at runtime for the interface over which
         * the command was invoked, or if it is currently unable to proceed with such an operation.
         *
         * Clients shall be resilient to a server that either does not support or cannot proceed with the ScanNetworks
         * command.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.1
         */
        scanNetworks: Command(0x0, TlvScanNetworksRequest, 1, TlvScanNetworksResponse),

        /**
         * This command shall remove the network configuration from the Cluster if there was already a network
         * configuration with the same NetworkID. The relative order of the entries in the Networks attribute list
         * shall remain unchanged, except for the removal of the requested network configuration.
         *
         * If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
         * Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
         *
         * If the Networks attribute does not contain a matching entry, the command shall immediately respond with
         * NetworkConfigResponse having NetworkingStatus status field set to NetworkIdNotFound.
         *
         * On success, the NetworkConfigResponse command shall have its NetworkIndex field set to the 0- based index of
         * the entry in the Networks attribute that was just removed, and a NetworkingStatus status field set to
         * Success.
         *
         * This field shall contain the NetworkID for the entry to remove: the SSID for Wi-Fi and XPAN ID
         *
         * for Thread.
         *
         * See Section 11.8.7.1.2, “Breadcrumb Field” for usage.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.7
         */
        removeNetwork: Command(0x4, TlvRemoveNetworkRequest, 5, TlvNetworkConfigResponse),

        /**
         * This command shall attempt to connect to a network whose configuration was previously added by either the
         * AddOrUpdateWiFiNetwork or AddOrUpdateThreadNetwork commands. Network is identified by its NetworkID.
         *
         * This command shall fail with a BUSY status code returned to the initiator if the server is currently unable
         * to proceed with such an operation, such as if it is currently attempting to connect in the background, or is
         * already proceeding with a prior ConnectNetwork.
         *
         * If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
         * Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
         *
         * Success or failure of this command shall be communicated by the ConnectNetworkResponse command, unless some
         * data model validations caused a FAILURE status to be sent prior to finishing execution of the command. The
         * ConnectNetworkResponse shall indicate the value Success in the NetworkingStatus field on successful
         * connection. On failure to connect, the ConnectNetworkResponse shall contain an appropriate NetworkingStatus,
         * DebugText and ErrorValue indicating the reason for failure.
         *
         * The amount of time needed to determine successful or failing connectivity on the cluster server’s associated
         * interface is provided by the ConnectMaxTimeSeconds attribute. Clients shall NOT consider the connection to
         * have timed-out until at least that duration has taken place. For non-concurrent commissioning situations,
         * the client SHOULD allow additional margin of time to account for its delay in executing operational
         * discovery of the Node once it is connected to the new network.
         *
         * On successful connection, the entry associated with the given Network configuration in the Networks
         * attribute shall indicate its Connected field set to true, and all other entries, if any exist, shall
         * indicate their Connected field set to false.
         *
         * On failure to connect, the entry associated with the given Network configuration in the Networks attribute
         * shall indicate its Connected field set to false.
         *
         * The precedence order of any entry subject to ConnectNetwork shall NOT change within the Networks attribute.
         *
         * Even after successfully connecting to a network, the configuration shall revert to the prior state
         *
         * of configuration if the CommissioningComplete command (see Section 11.9.6.6, “CommissioningComplete
         * Command”) is not successfully invoked before expiry of the Fail-Safe timer.
         *
         * When non-concurrent commissioning is being used by a Commissioner or Administrator, it is possible that the
         * only method to determine success of the operation is operational discovery of the Node on the new
         * operational network. Therefore, before invoking the ConnectNetwork command, the client SHOULD re-invoke the
         * Arm Fail-Safe command with a duration that meets the following:
         *
         *   1. Sufficient time to meet the minimum required time (see Section 11.8.6.4, “ConnectMaxTimeSeconds
         *      Attribute”) that may be taken by the server to connect to the desired network.
         *
         *   2. Sufficient time to account for possible message-layer retries when a response is requested.
         *
         *   3. Sufficient time to allow operational discovery on the new network by a Commissioner or Administrator.
         *
         *   4. Sufficient time to establish a CASE session after operational discovery
         *
         *   5. Not so long that, in error situations, the delay to reverting back to being discoverable for
         *      commissioning with a previous configuration would cause significant user-perceived delay.
         *
         * Note as well that the CommissioningTimeout duration provided in a prior OpenCommissioningWindow or
         * OpenBasicCommissioningWindow command may impact the total time available to proceed with error recovery
         * after a connection failure.
         *
         * The LastNetworkingStatus, LastNetworkID and LastConnectErrorValue attributes may assist the client in
         * determining the reason for a failure after reconnecting over a Commissioning channel, especially in
         * non-concurrent commissioning situations.
         *
         * This field shall contain the NetworkID for the entry used to configure the connection: the SSID for Wi-Fi
         * and XPAN ID for Thread.
         *
         * See Section 11.8.7.1.2, “Breadcrumb Field” for usage.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.9
         */
        connectNetwork: Command(0x6, TlvConnectNetworkRequest, 7, TlvConnectNetworkResponse),

        /**
         * This command shall set the specific order of the network configuration selected by its NetworkID in the
         * Networks attribute list to match the position given by NetworkIndex.
         *
         * This field shall contain the NetworkID for the entry to reorder: the SSID for Wi-Fi and XPAN ID for Thread.
         *
         * This field shall contain the 0-based index of the new desired position of the entry in the Networks
         * attribute.
         *
         * See Section 11.8.7.1.2, “Breadcrumb Field” for usage.
         *
         * Effect when received
         *
         * If the Networks attribute does not contain a matching entry, the command shall immediately respond with
         * NetworkConfigResponse having NetworkingStatus status field set to NetworkIdNotFound.
         *
         * If the NetworkIndex field has a value larger or equal to the current number of entries in the Networks
         * attribute, the command shall immediately respond with NetworkConfigResponse having NetworkingStatus status
         * field set to OutOfRange.
         *
         * On success, the NetworkConfigResponse command shall have its NetworkIndex field set to the 0- based index of
         * the entry in the Networks attribute that was just updated, matching the incoming NetworkIndex, and a
         * NetworkingStatus status field set to Success.
         *
         * The entry selected shall be inserted at the new position in the list. All other entries, if any exist, shall
         * be moved to allow the insertion, in a way that they all retain their existing relative order between each
         * other, with the exception of the newly re-ordered entry.
         *
         * Re-ordering to the same NetworkIndex as the current location shall be considered as a success and yield no
         * visible changes of the Networks attribute.
         *
         * Examples of re-ordering
         *
         * To better illustrate the re-ordering operation, consider this initial state, exemplary of a Wi-Fi
         *
         * device:
         *
         * On receiving ReorderNetwork with:
         *
         *   • NetworkId = Home-Guest
         *
         *   • NetworkIndex = 0
         *
         * The outcome, after applying to the initial state would be:
         *
         * In the above outcome, FancyCat and BlueDolphin moved "down" and Home-Guest became the highest priority
         * network in the list.
         *
         * On receiving ReorderNetwork with:
         *
         *   • NetworkId = FancyCat
         *
         *   • NetworkIndex = 3
         *
         * The outcome, after applying to the initial state would be:
         *
         * In the above outcome, BlueDolphin, Home-Guest and WillowTree moved "up" and FancyCat became the lowest
         * priority network in the list.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.11
         */
        reorderNetwork: Command(0x8, TlvReorderNetworkRequest, 5, TlvNetworkConfigResponse)
    }
});

/**
 * A NetworkCommissioningCluster supports these elements if it supports feature WiFiNetworkInterface.
 */
export const WiFiNetworkInterfaceComponent = ClusterComponent({
    commands: {
        /**
         * This command shall be used to add or modify Wi-Fi network configurations.
         *
         * If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
         * Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
         *
         * The Credentials associated with the network are not readable after execution of this command, as they do not
         * appear in the Networks attribute list, for security reasons.
         *
         * See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” for
         * behavior of addition/update.
         *
         * This field shall contain the SSID to which to attempt connection. Specific BSSID selection is not supported
         * by this cluster.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.3
         */
        addOrUpdateWiFiNetwork: Command(0x2, TlvAddOrUpdateWiFiNetworkRequest, 5, TlvNetworkConfigResponse)
    }
});

/**
 * A NetworkCommissioningCluster supports these elements if it supports feature ThreadNetworkInterface.
 */
export const ThreadNetworkInterfaceComponent = ClusterComponent({
    commands: {
        /**
         * This command shall be used to add or modify Thread network configurations.
         *
         * If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
         * Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
         *
         * See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” for
         * behavior of addition/update.
         *
         * The XPAN ID in the OperationalDataset serves as the NetworkID for the network configuration to be added or
         * updated.
         *
         * If the Networks attribute list does not contain an entry with the same NetworkID as the one provided in the
         * OperationalDataset, the operation shall be considered an addition, otherwise, it shall be considered an
         * update.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.8.7.4
         */
        addOrUpdateThreadNetwork: Command(0x3, TlvAddOrUpdateThreadNetworkRequest, 5, TlvNetworkConfigResponse)
    }
});

/**
 * Network Commissioning
 *
 * Network commissioning is part of the overall Node commissioning. The main goal of Network Commissioning Cluster is
 * to associate a Node with or manage a Node’s one or more network interfaces. These network interfaces can include the
 * following types.
 *
 *   • Wi-Fi (IEEE 802.11-2020)
 *
 *   • Ethernet (802.3)
 *
 *   • Thread (802.15.4)
 *
 * An instance of the Network Commissioning Cluster only applies to a single network interface instance present. An
 * interface, in this context, is a unique entity that can have an IPv6 address assigned to it and ingress and egress
 * IP packets.
 *
 * NetworkCommissioningCluster supports optional features that you can enable with the
 * NetworkCommissioningCluster.with() factory method.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.8
 */
export const NetworkCommissioningCluster = ExtensibleCluster({
    ...NetworkCommissioningBase,

    /**
     * Use this factory method to create a NetworkCommissioning cluster with support for optional features. Include
     * each {@link NetworkCommissioningFeature} you wish to support.
     *
     * @param features the optional features to support
     * @returns a NetworkCommissioning cluster with specified features enabled
     * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
     */
    factory: <T extends `${NetworkCommissioningFeature}`[]>(...features: [...T]) => {
        validateFeatureSelection(features, NetworkCommissioningFeature);
        const cluster = Cluster({
            ...NetworkCommissioningBase,
            supportedFeatures: BitFlags(NetworkCommissioningBase.features, ...features)
        });
        extendCluster(cluster, WiFiNetworkInterfaceComponent, { wiFiNetworkInterface: true });
        extendCluster(cluster, ThreadNetworkInterfaceComponent, { threadNetworkInterface: true });

        preventCluster(
            cluster,
            { wiFiNetworkInterface: true, threadNetworkInterface: true },
            { wiFiNetworkInterface: true, ethernetNetworkInterface: true },
            { threadNetworkInterface: true, wiFiNetworkInterface: true },
            { threadNetworkInterface: true, ethernetNetworkInterface: true },
            { ethernetNetworkInterface: true, wiFiNetworkInterface: true },
            { ethernetNetworkInterface: true, threadNetworkInterface: true },
            { wiFiNetworkInterface: false, threadNetworkInterface: false, ethernetNetworkInterface: false }
        );

        return cluster as unknown as NetworkCommissioningExtension<BitFlags<typeof NetworkCommissioningBase.features, T>>;
    }
});

export type NetworkCommissioningExtension<SF extends TypeFromPartialBitSchema<typeof NetworkCommissioningBase.features>> =
    ClusterForBaseCluster<typeof NetworkCommissioningBase, SF>
    & { supportedFeatures: SF }
    & (SF extends { wiFiNetworkInterface: true } | { threadNetworkInterface: true } ? typeof WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent : {})
    & (SF extends { wiFiNetworkInterface: true } ? typeof WiFiNetworkInterfaceComponent : {})
    & (SF extends { threadNetworkInterface: true } ? typeof ThreadNetworkInterfaceComponent : {})
    & (SF extends { wiFiNetworkInterface: true, threadNetworkInterface: true } ? never : {})
    & (SF extends { wiFiNetworkInterface: true, ethernetNetworkInterface: true } ? never : {})
    & (SF extends { threadNetworkInterface: true, wiFiNetworkInterface: true } ? never : {})
    & (SF extends { threadNetworkInterface: true, ethernetNetworkInterface: true } ? never : {})
    & (SF extends { ethernetNetworkInterface: true, wiFiNetworkInterface: true } ? never : {})
    & (SF extends { ethernetNetworkInterface: true, threadNetworkInterface: true } ? never : {})
    & (SF extends { wiFiNetworkInterface: false, threadNetworkInterface: false, ethernetNetworkInterface: false } ? never : {});

/**
 * This cluster supports all NetworkCommissioning features. It may support illegal feature combinations.
 *
 * If you use this cluster you must manually specify which features are active and ensure the set of active features is
 * legal per the Matter specification.
 */
export const NetworkCommissioningComplete = Cluster({
    ...NetworkCommissioningCluster,
    attributes: { ...WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent.attributes },
    commands: {
        ...WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent.commands,
        ...WiFiNetworkInterfaceComponent.commands,
        ...ThreadNetworkInterfaceComponent.commands
    }
});
