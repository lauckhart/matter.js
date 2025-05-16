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
    { name: "NetworkCommissioning", id: 0x31 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "WI", constraint: "0", conformance: "O.a", longName: "WiFiNetworkInterface" }),
        Field({ name: "TH", constraint: "1", conformance: "O.a", longName: "ThreadNetworkInterface" }),
        Field({ name: "ET", constraint: "2", conformance: "O.a", longName: "EthernetNetworkInterface" })
    ),

    Attribute({ name: "MaxNetworks", id: 0x0, type: "uint8", constraint: "min 1", conformance: "M", access: "R A", quality: "F" }),

    Attribute(
        {
            name: "Networks", id: 0x1, type: "list",
            default: [], constraint: "max maxNetworks", conformance: "M", access: "R A"
        },
        Field({ name: "entry", type: "NetworkInfoStruct" })
    ),

    Attribute({
        name: "ScanMaxTimeSeconds", id: 0x2, type: "uint8",
        constraint: "desc", conformance: "WI | TH", access: "R V", quality: "F"
    }),
    Attribute({
        name: "ConnectMaxTimeSeconds", id: 0x3, type: "uint8",
        constraint: "desc", conformance: "WI | TH", access: "R V", quality: "F"
    }),
    Attribute({ name: "InterfaceEnabled", id: 0x4, type: "bool", default: true, conformance: "M", access: "RW VA", quality: "N" }),
    Attribute({
        name: "LastNetworkingStatus", id: 0x5, type: "NetworkCommissioningStatusEnum",
        default: null, conformance: "M", access: "R A", quality: "X"
    }),
    Attribute({
        name: "LastNetworkId", id: 0x6, type: "octstr",
        default: null, constraint: "1 to 32", conformance: "M", access: "R A", quality: "X"
    }),
    Attribute({
        name: "LastConnectErrorValue", id: 0x7, type: "int32",
        default: null, conformance: "M", access: "R A", quality: "X"
    }),

    Attribute(
        {
            name: "SupportedWiFiBands", id: 0x8, type: "list",
            constraint: "min 1", conformance: "WI", access: "R V", quality: "F"
        },
        Field({ name: "entry", type: "WiFiBandEnum" })
    ),

    Attribute({
        name: "SupportedThreadFeatures", id: 0x9, type: "ThreadCapabilitiesBitmap",
        conformance: "TH", access: "R V", quality: "F"
    }),
    Attribute({ name: "ThreadVersion", id: 0xa, type: "uint16", conformance: "TH", access: "R V", quality: "F" }),

    Command(
        {
            name: "ScanNetworks", id: 0x0,
            conformance: "WI | TH", access: "A", direction: "request", response: "ScanNetworksResponse"
        },
        Field({
            name: "Ssid", id: 0x0, type: "octstr",
            default: null, constraint: "1 to 32", conformance: "[WI]", quality: "X"
        }),
        Field({ name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O" })
    ),

    Command(
        { name: "ScanNetworksResponse", id: 0x1, conformance: "WI | TH", direction: "response" },
        Field({
            name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum",
            constraint: "desc", conformance: "M"
        }),
        Field({ name: "DebugText", id: 0x1, type: "string", constraint: "max 512", conformance: "O" }),
        Field(
            { name: "WiFiScanResults", id: 0x2, type: "list", constraint: "desc", conformance: "WI" },
            Field({ name: "entry", type: "WiFiInterfaceScanResultStruct" })
        ),
        Field(
            { name: "ThreadScanResults", id: 0x3, type: "list", constraint: "desc", conformance: "TH" },
            Field({ name: "entry", type: "ThreadInterfaceScanResultStruct" })
        )
    ),

    Command(
        {
            name: "AddOrUpdateWiFiNetwork", id: 0x2,
            conformance: "WI", access: "A", direction: "request", response: "NetworkConfigResponse"
        },
        Field({ name: "Ssid", id: 0x0, type: "octstr", constraint: "max 32", conformance: "M" }),
        Field({ name: "Credentials", id: 0x1, type: "octstr", constraint: "max 64", conformance: "M" }),
        Field({ name: "Breadcrumb", id: 0x2, type: "uint64", conformance: "O" })
    ),

    Command(
        {
            name: "AddOrUpdateThreadNetwork", id: 0x3,
            conformance: "TH", access: "A", direction: "request", response: "NetworkConfigResponse"
        },
        Field({ name: "OperationalDataset", id: 0x0, type: "octstr", constraint: "max 254", conformance: "M" }),
        Field({ name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O" })
    ),

    Command(
        {
            name: "RemoveNetwork", id: 0x4,
            conformance: "WI | TH", access: "A", direction: "request", response: "NetworkConfigResponse"
        },
        Field({ name: "NetworkId", id: 0x0, type: "octstr", constraint: "1 to 32", conformance: "M" }),
        Field({ name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O" })
    ),

    Command(
        { name: "NetworkConfigResponse", id: 0x5, conformance: "WI | TH", direction: "response" },
        Field({
            name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum",
            constraint: "desc", conformance: "M"
        }),
        Field({ name: "DebugText", id: 0x1, type: "string", constraint: "max 512", conformance: "O" }),
        Field({ name: "NetworkIndex", id: 0x2, type: "uint8", constraint: "max maxNetworks - 1", conformance: "O" })
    ),

    Command(
        {
            name: "ConnectNetwork", id: 0x6,
            conformance: "WI | TH", access: "A", direction: "request", response: "ConnectNetworkResponse"
        },
        Field({ name: "NetworkId", id: 0x0, type: "octstr", constraint: "1 to 32", conformance: "M" }),
        Field({ name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O" })
    ),

    Command(
        { name: "ConnectNetworkResponse", id: 0x7, conformance: "WI | TH", direction: "response" },
        Field({ name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum", conformance: "M" }),
        Field({ name: "DebugText", id: 0x1, type: "string", conformance: "O" }),
        Field({ name: "ErrorValue", id: 0x2, type: "int32", conformance: "M", quality: "X" })
    ),

    Command(
        {
            name: "ReorderNetwork", id: 0x8,
            conformance: "WI | TH", access: "A", direction: "request", response: "NetworkConfigResponse"
        },
        Field({ name: "NetworkId", id: 0x0, type: "octstr", constraint: "1 to 32", conformance: "M" }),
        Field({ name: "NetworkIndex", id: 0x1, type: "uint8", constraint: "desc", conformance: "M" }),
        Field({ name: "Breadcrumb", id: 0x2, type: "uint64", conformance: "O" })
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
        Field({ name: "2G4", id: 0x0, conformance: "O.b+" }),
        Field({ name: "3G65", id: 0x1, conformance: "O.b+" }),
        Field({ name: "5G", id: 0x2, conformance: "O.b+" }),
        Field({ name: "6G", id: 0x3, conformance: "O.b+" }),
        Field({ name: "60G", id: 0x4, conformance: "O.b+" }),
        Field({ name: "1G", id: 0x5, conformance: "O.b+" })
    ),

    Datatype(
        { name: "NetworkCommissioningStatusEnum", type: "enum8" },
        Field({ name: "Success", id: 0x0, conformance: "M" }),
        Field({ name: "OutOfRange", id: 0x1, conformance: "M" }),
        Field({ name: "BoundsExceeded", id: 0x2, conformance: "M" }),
        Field({ name: "NetworkIdNotFound", id: 0x3, conformance: "M" }),
        Field({ name: "DuplicateNetworkId", id: 0x4, conformance: "M" }),
        Field({ name: "NetworkNotFound", id: 0x5, conformance: "M" }),
        Field({ name: "RegulatoryError", id: 0x6, conformance: "M" }),
        Field({ name: "AuthFailure", id: 0x7, conformance: "M" }),
        Field({ name: "UnsupportedSecurity", id: 0x8, conformance: "M" }),
        Field({ name: "OtherConnectionFailure", id: 0x9, conformance: "M" }),
        Field({ name: "Ipv6Failed", id: 0xa, conformance: "M" }),
        Field({ name: "IpBindFailed", id: 0xb, conformance: "M" }),
        Field({ name: "UnknownError", id: 0xc, conformance: "M" })
    ),

    Datatype(
        { name: "NetworkInfoStruct", type: "struct" },
        Field({ name: "NetworkId", id: 0x0, type: "octstr", constraint: "1 to 32", conformance: "M" }),
        Field({ name: "Connected", id: 0x1, type: "bool", conformance: "M" })
    ),

    Datatype(
        { name: "WiFiInterfaceScanResultStruct", type: "struct" },
        Field({ name: "Security", id: 0x0, type: "WiFiSecurityBitmap", conformance: "WI" }),
        Field({ name: "Ssid", id: 0x1, type: "octstr", constraint: "max 32", conformance: "WI" }),
        Field({ name: "Bssid", id: 0x2, type: "octstr", constraint: "6", conformance: "WI" }),
        Field({ name: "Channel", id: 0x3, type: "uint16", conformance: "WI" }),
        Field({ name: "WiFiBand", id: 0x4, type: "WiFiBandEnum", conformance: "[WI]" }),
        Field({ name: "Rssi", id: 0x5, type: "int8", conformance: "[WI]" })
    ),

    Datatype(
        { name: "ThreadInterfaceScanResultStruct", type: "struct" },
        Field({ name: "PanId", id: 0x0, type: "uint16", constraint: "max 65534", conformance: "TH" }),
        Field({ name: "ExtendedPanId", id: 0x1, type: "uint64", conformance: "TH" }),
        Field({ name: "NetworkName", id: 0x2, type: "string", constraint: "1 to 16", conformance: "TH" }),
        Field({ name: "Channel", id: 0x3, type: "uint16", conformance: "TH" }),
        Field({ name: "Version", id: 0x4, type: "uint8", conformance: "TH" }),
        Field({ name: "ExtendedAddress", id: 0x5, type: "hwadr", conformance: "TH" }),
        Field({ name: "Rssi", id: 0x6, type: "int8", conformance: "TH" }),
        Field({ name: "Lqi", id: 0x7, type: "uint8", conformance: "TH" })
    )
);

MatterDefinition.children.push(NetworkCommissioning);
