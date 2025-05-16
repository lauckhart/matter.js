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
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const WiFiNetworkDiagnostics = Cluster(
    { name: "WiFiNetworkDiagnostics", id: 0x36, quality: "K" },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "PKTCNT", constraint: "0", longName: "PacketCounts" }),
        Field({ name: "ERRCNT", constraint: "1", longName: "ErrorCounts" })
    ),
    Attribute({
        name: "Bssid", id: 0x0, type: "octstr",
        default: null, constraint: "6", conformance: "M", access: "R V", quality: "X"
    }),
    Attribute({
        name: "SecurityType", id: 0x1, type: "SecurityTypeEnum",
        default: null, conformance: "M", access: "R V", quality: "X"
    }),
    Attribute({
        name: "WiFiVersion", id: 0x2, type: "WiFiVersionEnum",
        default: null, conformance: "M", access: "R V", quality: "X"
    }),
    Attribute({ name: "ChannelNumber", id: 0x3, type: "uint16", default: null, conformance: "M", access: "R V", quality: "X" }),
    Attribute({
        name: "Rssi", id: 0x4, type: "int8",
        default: null, constraint: "-120 to 0", conformance: "M", access: "R V", quality: "X C"
    }),
    Attribute({
        name: "BeaconLostCount", id: 0x5, type: "uint32",
        default: 0, conformance: "ERRCNT", access: "R V", quality: "X C"
    }),
    Attribute({
        name: "BeaconRxCount", id: 0x6, type: "uint32",
        default: 0, conformance: "PKTCNT", access: "R V", quality: "X C"
    }),
    Attribute({
        name: "PacketMulticastRxCount", id: 0x7, type: "uint32",
        default: 0, conformance: "PKTCNT", access: "R V", quality: "X C"
    }),
    Attribute({
        name: "PacketMulticastTxCount", id: 0x8, type: "uint32",
        default: 0, conformance: "PKTCNT", access: "R V", quality: "X C"
    }),
    Attribute({
        name: "PacketUnicastRxCount", id: 0x9, type: "uint32",
        default: 0, conformance: "PKTCNT", access: "R V", quality: "X C"
    }),
    Attribute({
        name: "PacketUnicastTxCount", id: 0xa, type: "uint32",
        default: 0, conformance: "PKTCNT", access: "R V", quality: "X C"
    }),
    Attribute({ name: "CurrentMaxRate", id: 0xb, type: "uint64", default: 0, conformance: "O", access: "R V", quality: "X C" }),
    Attribute({ name: "OverrunCount", id: 0xc, type: "uint64", default: 0, conformance: "ERRCNT", access: "R V", quality: "X C" }),
    Event(
        { name: "Disconnection", id: 0x0, conformance: "O", access: "V", priority: "info" },
        Field({ name: "ReasonCode", id: 0x0, type: "uint16", conformance: "M" })
    ),
    Event(
        { name: "AssociationFailure", id: 0x1, conformance: "O", access: "V", priority: "info" },
        Field({ name: "AssociationFailureCause", id: 0x0, type: "AssociationFailureCauseEnum", conformance: "M" }),
        Field({ name: "Status", id: 0x1, type: "uint16", conformance: "M" })
    ),
    Event(
        { name: "ConnectionStatus", id: 0x2, conformance: "O", access: "V", priority: "info" },
        Field({ name: "ConnectionStatus", id: 0x0, type: "ConnectionStatusEnum", conformance: "M" })
    ),
    Command({ name: "ResetCounts", id: 0x0, conformance: "ERRCNT", access: "O", direction: "request", response: "status" }),

    Datatype(
        { name: "SecurityTypeEnum", type: "enum8" },
        Field({ name: "Unspecified", id: 0x0, conformance: "M" }),
        Field({ name: "None", id: 0x1, conformance: "M" }),
        Field({ name: "Wep", id: 0x2, conformance: "M" }),
        Field({ name: "Wpa", id: 0x3, conformance: "M" }),
        Field({ name: "Wpa2", id: 0x4, conformance: "M" }),
        Field({ name: "Wpa3", id: 0x5, conformance: "M" })
    ),

    Datatype(
        { name: "WiFiVersionEnum", type: "enum8" },
        Field({
            name: "A", id: 0x0,
            conformance: "M",
            longName: "Indicate the network interface is currently using 802.11a against the wireless access point."
        }),
        Field({
            name: "B", id: 0x1,
            conformance: "M",
            longName: "Indicate the network interface is currently using 802.11b against the wireless access point."
        }),
        Field({
            name: "G", id: 0x2,
            conformance: "M",
            longName: "Indicate the network interface is currently using 802.11g against the wireless access point."
        }),
        Field({
            name: "N", id: 0x3,
            conformance: "M",
            longName: "Indicate the network interface is currently using 802.11n against the wireless access point."
        }),
        Field({ name: "Ac", id: 0x4, conformance: "M" }),
        Field({ name: "Ax", id: 0x5, conformance: "M" }),
        Field({ name: "Ah", id: 0x6, conformance: "M" })
    ),

    Datatype(
        { name: "AssociationFailureCauseEnum", type: "enum8" },
        Field({ name: "Unknown", id: 0x0, conformance: "M" }),
        Field({ name: "AssociationFailed", id: 0x1, conformance: "M" }),
        Field({ name: "AuthenticationFailed", id: 0x2, conformance: "M" }),
        Field({ name: "SsidNotFound", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "ConnectionStatusEnum", type: "enum8" },
        Field({ name: "Connected", id: 0x0, conformance: "M" }),
        Field({ name: "NotConnected", id: 0x1, conformance: "M" })
    )
);

MatterDefinition.children.push(WiFiNetworkDiagnostics);
