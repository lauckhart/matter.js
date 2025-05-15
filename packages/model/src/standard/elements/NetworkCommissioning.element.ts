/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const NetworkCommissioning = Cluster(
    { id: 0x31, name: "NetworkCommissioning" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "WI", conformance: "O.a", constraint: "0", description: "WiFiNetworkInterface" }),
        Field({ name: "TH", conformance: "O.a", constraint: "1", description: "ThreadNetworkInterface" }),
        Field({ name: "ET", conformance: "O.a", constraint: "2", description: "EthernetNetworkInterface" })
    ),

    Attribute({ id: 0x0, name: "MaxNetworks", type: "uint8", access: "R A", conformance: "M", constraint: "min 1", quality: "F" }),

    Attribute(
        {
            id: 0x1, name: "Networks", type: "list",
            access: "R A", conformance: "M", constraint: "max maxNetworks", default: []
        },
        Field({ name: "entry", type: "NetworkInfoStruct" })
    ),

    Attribute({
        id: 0x2, name: "ScanMaxTimeSeconds", type: "uint8",
        access: "R V", conformance: "WI | TH", constraint: "desc", quality: "F"
    }),
    Attribute({
        id: 0x3, name: "ConnectMaxTimeSeconds", type: "uint8",
        access: "R V", conformance: "WI | TH", constraint: "desc", quality: "F"
    }),
    Attribute({ id: 0x4, name: "InterfaceEnabled", type: "bool", access: "RW VA", conformance: "M", default: true, quality: "N" }),
    Attribute({
        id: 0x5, name: "LastNetworkingStatus", type: "NetworkCommissioningStatusEnum",
        access: "R A", conformance: "M", default: null, quality: "X"
    }),
    Attribute({
        id: 0x6, name: "LastNetworkId", type: "octstr",
        access: "R A", conformance: "M", constraint: "1 to 32", default: null, quality: "X"
    }),
    Attribute({
        id: 0x7, name: "LastConnectErrorValue", type: "int32",
        access: "R A", conformance: "M", default: null, quality: "X"
    }),

    Attribute(
        {
            id: 0x8, name: "SupportedWiFiBands", type: "list",
            access: "R V", conformance: "WI", constraint: "min 1", quality: "F"
        },
        Field({ name: "entry", type: "WiFiBandEnum" })
    ),

    Attribute({
        id: 0x9, name: "SupportedThreadFeatures", type: "ThreadCapabilitiesBitmap",
        access: "R V", conformance: "TH", quality: "F"
    }),
    Attribute({ id: 0xa, name: "ThreadVersion", type: "uint16", access: "R V", conformance: "TH", quality: "F" }),

    Command(
        {
            id: 0x0, name: "ScanNetworks",
            access: "A", conformance: "WI | TH", direction: "request", response: "ScanNetworksResponse"
        },
        Field({
            id: 0x0, name: "Ssid", type: "octstr",
            conformance: "[WI]", constraint: "1 to 32", default: null, quality: "X"
        }),
        Field({ id: 0x1, name: "Breadcrumb", type: "uint64", conformance: "O" })
    ),

    Command(
        { id: 0x1, name: "ScanNetworksResponse", conformance: "WI | TH", direction: "response" },
        Field({
            id: 0x0, name: "NetworkingStatus", type: "NetworkCommissioningStatusEnum",
            conformance: "M", constraint: "desc"
        }),
        Field({ id: 0x1, name: "DebugText", type: "string", conformance: "O", constraint: "max 512" }),
        Field(
            { id: 0x2, name: "WiFiScanResults", type: "list", conformance: "WI", constraint: "desc" },
            Field({ name: "entry", type: "WiFiInterfaceScanResultStruct" })
        ),
        Field(
            { id: 0x3, name: "ThreadScanResults", type: "list", conformance: "TH", constraint: "desc" },
            Field({ name: "entry", type: "ThreadInterfaceScanResultStruct" })
        )
    ),

    Command(
        {
            id: 0x2, name: "AddOrUpdateWiFiNetwork",
            access: "A", conformance: "WI", direction: "request", response: "NetworkConfigResponse"
        },
        Field({ id: 0x0, name: "Ssid", type: "octstr", conformance: "M", constraint: "max 32" }),
        Field({ id: 0x1, name: "Credentials", type: "octstr", conformance: "M", constraint: "max 64" }),
        Field({ id: 0x2, name: "Breadcrumb", type: "uint64", conformance: "O" })
    ),

    Command(
        {
            id: 0x3, name: "AddOrUpdateThreadNetwork",
            access: "A", conformance: "TH", direction: "request", response: "NetworkConfigResponse"
        },
        Field({ id: 0x0, name: "OperationalDataset", type: "octstr", conformance: "M", constraint: "max 254" }),
        Field({ id: 0x1, name: "Breadcrumb", type: "uint64", conformance: "O" })
    ),

    Command(
        {
            id: 0x4, name: "RemoveNetwork",
            access: "A", conformance: "WI | TH", direction: "request", response: "NetworkConfigResponse"
        },
        Field({ id: 0x0, name: "NetworkId", type: "octstr", conformance: "M", constraint: "1 to 32" }),
        Field({ id: 0x1, name: "Breadcrumb", type: "uint64", conformance: "O" })
    ),

    Command(
        { id: 0x5, name: "NetworkConfigResponse", conformance: "WI | TH", direction: "response" },
        Field({
            id: 0x0, name: "NetworkingStatus", type: "NetworkCommissioningStatusEnum",
            conformance: "M", constraint: "desc"
        }),
        Field({ id: 0x1, name: "DebugText", type: "string", conformance: "O", constraint: "max 512" }),
        Field({ id: 0x2, name: "NetworkIndex", type: "uint8", conformance: "O", constraint: "max maxNetworks - 1" })
    ),

    Command(
        {
            id: 0x6, name: "ConnectNetwork",
            access: "A", conformance: "WI | TH", direction: "request", response: "ConnectNetworkResponse"
        },
        Field({ id: 0x0, name: "NetworkId", type: "octstr", conformance: "M", constraint: "1 to 32" }),
        Field({ id: 0x1, name: "Breadcrumb", type: "uint64", conformance: "O" })
    ),

    Command(
        { id: 0x7, name: "ConnectNetworkResponse", conformance: "WI | TH", direction: "response" },
        Field({ id: 0x0, name: "NetworkingStatus", type: "NetworkCommissioningStatusEnum", conformance: "M" }),
        Field({ id: 0x1, name: "DebugText", type: "string", conformance: "O" }),
        Field({ id: 0x2, name: "ErrorValue", type: "int32", conformance: "M", quality: "X" })
    ),

    Command(
        {
            id: 0x8, name: "ReorderNetwork",
            access: "A", conformance: "WI | TH", direction: "request", response: "NetworkConfigResponse"
        },
        Field({ id: 0x0, name: "NetworkId", type: "octstr", conformance: "M", constraint: "1 to 32" }),
        Field({ id: 0x1, name: "NetworkIndex", type: "uint8", conformance: "M", constraint: "desc" }),
        Field({ id: 0x2, name: "Breadcrumb", type: "uint64", conformance: "O" })
    ),

    Datatype(
        { name: "WiFiSecurityBitmap", type: "map8" },
        Field({ name: "Unencrypted", constraint: "0" }),
        Field({ name: "Wep", constraint: "1" }),
        Field({ name: "WpaPersonal", constraint: "2" }),
        Field({ name: "Wpa2Personal", constraint: "3" }),
        Field({ name: "Wpa3Personal", constraint: "4" })
    ),

    Datatype(
        { name: "ThreadCapabilitiesBitmap", type: "map16" },
        Field({ name: "IsBorderRouterCapable", constraint: "0" }),
        Field({ name: "IsRouterCapable", constraint: "1" }),
        Field({ name: "IsSleepyEndDeviceCapable", constraint: "2" }),
        Field({ name: "IsFullThreadDevice", constraint: "3" }),
        Field({ name: "IsSynchronizedSleepyEndDeviceCapable", constraint: "4" })
    ),

    Datatype(
        { name: "WiFiBandEnum", type: "enum8" },
        Field({ id: 0x0, name: "2G4", conformance: "O.b+" }),
        Field({ id: 0x1, name: "3G65", conformance: "O.b+" }),
        Field({ id: 0x2, name: "5G", conformance: "O.b+" }),
        Field({ id: 0x3, name: "6G", conformance: "O.b+" }),
        Field({ id: 0x4, name: "60G", conformance: "O.b+" }),
        Field({ id: 0x5, name: "1G", conformance: "O.b+" })
    ),

    Datatype(
        { name: "NetworkCommissioningStatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Success", conformance: "M" }),
        Field({ id: 0x1, name: "OutOfRange", conformance: "M" }),
        Field({ id: 0x2, name: "BoundsExceeded", conformance: "M" }),
        Field({ id: 0x3, name: "NetworkIdNotFound", conformance: "M" }),
        Field({ id: 0x4, name: "DuplicateNetworkId", conformance: "M" }),
        Field({ id: 0x5, name: "NetworkNotFound", conformance: "M" }),
        Field({ id: 0x6, name: "RegulatoryError", conformance: "M" }),
        Field({ id: 0x7, name: "AuthFailure", conformance: "M" }),
        Field({ id: 0x8, name: "UnsupportedSecurity", conformance: "M" }),
        Field({ id: 0x9, name: "OtherConnectionFailure", conformance: "M" }),
        Field({ id: 0xa, name: "Ipv6Failed", conformance: "M" }),
        Field({ id: 0xb, name: "IpBindFailed", conformance: "M" }),
        Field({ id: 0xc, name: "UnknownError", conformance: "M" })
    ),

    Datatype(
        { name: "NetworkInfoStruct", type: "struct" },
        Field({ id: 0x0, name: "NetworkId", type: "octstr", conformance: "M", constraint: "1 to 32" }),
        Field({ id: 0x1, name: "Connected", type: "bool", conformance: "M" })
    ),

    Datatype(
        { name: "WiFiInterfaceScanResultStruct", type: "struct" },
        Field({ id: 0x0, name: "Security", type: "WiFiSecurityBitmap", conformance: "WI" }),
        Field({ id: 0x1, name: "Ssid", type: "octstr", conformance: "WI", constraint: "max 32" }),
        Field({ id: 0x2, name: "Bssid", type: "octstr", conformance: "WI", constraint: "6" }),
        Field({ id: 0x3, name: "Channel", type: "uint16", conformance: "WI" }),
        Field({ id: 0x4, name: "WiFiBand", type: "WiFiBandEnum", conformance: "[WI]" }),
        Field({ id: 0x5, name: "Rssi", type: "int8", conformance: "[WI]" })
    ),

    Datatype(
        { name: "ThreadInterfaceScanResultStruct", type: "struct" },
        Field({ id: 0x0, name: "PanId", type: "uint16", conformance: "TH", constraint: "max 65534" }),
        Field({ id: 0x1, name: "ExtendedPanId", type: "uint64", conformance: "TH" }),
        Field({ id: 0x2, name: "NetworkName", type: "string", conformance: "TH", constraint: "1 to 16" }),
        Field({ id: 0x3, name: "Channel", type: "uint16", conformance: "TH" }),
        Field({ id: 0x4, name: "Version", type: "uint8", conformance: "TH" }),
        Field({ id: 0x5, name: "ExtendedAddress", type: "hwadr", conformance: "TH" }),
        Field({ id: 0x6, name: "Rssi", type: "int8", conformance: "TH" }),
        Field({ id: 0x7, name: "Lqi", type: "uint8", conformance: "TH" })
    )
);

MatterDefinition.children.push(NetworkCommissioning);
