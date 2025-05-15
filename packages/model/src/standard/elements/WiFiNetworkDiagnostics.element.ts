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
    { id: 0x36, name: "WiFiNetworkDiagnostics", quality: "K" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "PKTCNT", constraint: "0", description: "PacketCounts" }),
        Field({ name: "ERRCNT", constraint: "1", description: "ErrorCounts" })
    ),
    Attribute({
        id: 0x0, name: "Bssid", type: "octstr",
        access: "R V", conformance: "M", constraint: "6", default: null, quality: "X"
    }),
    Attribute({
        id: 0x1, name: "SecurityType", type: "SecurityTypeEnum",
        access: "R V", conformance: "M", default: null, quality: "X"
    }),
    Attribute({
        id: 0x2, name: "WiFiVersion", type: "WiFiVersionEnum",
        access: "R V", conformance: "M", default: null, quality: "X"
    }),
    Attribute({ id: 0x3, name: "ChannelNumber", type: "uint16", access: "R V", conformance: "M", default: null, quality: "X" }),
    Attribute({
        id: 0x4, name: "Rssi", type: "int8",
        access: "R V", conformance: "M", constraint: "-120 to 0", default: null, quality: "X C"
    }),
    Attribute({
        id: 0x5, name: "BeaconLostCount", type: "uint32",
        access: "R V", conformance: "ERRCNT", default: 0, quality: "X C"
    }),
    Attribute({
        id: 0x6, name: "BeaconRxCount", type: "uint32",
        access: "R V", conformance: "PKTCNT", default: 0, quality: "X C"
    }),
    Attribute({
        id: 0x7, name: "PacketMulticastRxCount", type: "uint32",
        access: "R V", conformance: "PKTCNT", default: 0, quality: "X C"
    }),
    Attribute({
        id: 0x8, name: "PacketMulticastTxCount", type: "uint32",
        access: "R V", conformance: "PKTCNT", default: 0, quality: "X C"
    }),
    Attribute({
        id: 0x9, name: "PacketUnicastRxCount", type: "uint32",
        access: "R V", conformance: "PKTCNT", default: 0, quality: "X C"
    }),
    Attribute({
        id: 0xa, name: "PacketUnicastTxCount", type: "uint32",
        access: "R V", conformance: "PKTCNT", default: 0, quality: "X C"
    }),
    Attribute({ id: 0xb, name: "CurrentMaxRate", type: "uint64", access: "R V", conformance: "O", default: 0, quality: "X C" }),
    Attribute({ id: 0xc, name: "OverrunCount", type: "uint64", access: "R V", conformance: "ERRCNT", default: 0, quality: "X C" }),
    Event(
        { id: 0x0, name: "Disconnection", access: "V", conformance: "O", priority: "info" },
        Field({ id: 0x0, name: "ReasonCode", type: "uint16", conformance: "M" })
    ),
    Event(
        { id: 0x1, name: "AssociationFailure", access: "V", conformance: "O", priority: "info" },
        Field({ id: 0x0, name: "AssociationFailureCause", type: "AssociationFailureCauseEnum", conformance: "M" }),
        Field({ id: 0x1, name: "Status", type: "uint16", conformance: "M" })
    ),
    Event(
        { id: 0x2, name: "ConnectionStatus", access: "V", conformance: "O", priority: "info" },
        Field({ id: 0x0, name: "ConnectionStatus", type: "ConnectionStatusEnum", conformance: "M" })
    ),
    Command({ id: 0x0, name: "ResetCounts", access: "O", conformance: "ERRCNT", direction: "request", response: "status" }),

    Datatype(
        { name: "SecurityTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
        Field({ id: 0x1, name: "None", conformance: "M" }),
        Field({ id: 0x2, name: "Wep", conformance: "M" }),
        Field({ id: 0x3, name: "Wpa", conformance: "M" }),
        Field({ id: 0x4, name: "Wpa2", conformance: "M" }),
        Field({ id: 0x5, name: "Wpa3", conformance: "M" })
    ),

    Datatype(
        { name: "WiFiVersionEnum", type: "enum8" },
        Field({ id: 0x0, name: "A", conformance: "M" }),
        Field({ id: 0x1, name: "B", conformance: "M" }),
        Field({ id: 0x2, name: "G", conformance: "M" }),
        Field({ id: 0x3, name: "N", conformance: "M" }),
        Field({ id: 0x4, name: "Ac", conformance: "M" }),
        Field({ id: 0x5, name: "Ax", conformance: "M" }),
        Field({ id: 0x6, name: "Ah", conformance: "M" })
    ),

    Datatype(
        { name: "AssociationFailureCauseEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unknown", conformance: "M" }),
        Field({ id: 0x1, name: "AssociationFailed", conformance: "M" }),
        Field({ id: 0x2, name: "AuthenticationFailed", conformance: "M" }),
        Field({ id: 0x3, name: "SsidNotFound", conformance: "M" })
    ),

    Datatype(
        { name: "ConnectionStatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Connected", conformance: "M" }),
        Field({ id: 0x1, name: "NotConnected", conformance: "M" })
    )
);

MatterDefinition.children.push(WiFiNetworkDiagnostics);
