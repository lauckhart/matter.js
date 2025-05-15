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

export const GeneralCommissioning = Cluster(
    { id: 0x30, name: "GeneralCommissioning" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "TC", conformance: "P", constraint: "0", longName: "TermsAndConditions" })
    ),
    Attribute({ id: 0x0, name: "Breadcrumb", type: "uint64", access: "RW VA", conformance: "M", default: 0 }),
    Attribute({
        id: 0x1, name: "BasicCommissioningInfo", type: "BasicCommissioningInfo",
        access: "R V", conformance: "M", constraint: "desc", quality: "F"
    }),
    Attribute({
        id: 0x2, name: "RegulatoryConfig", type: "RegulatoryLocationTypeEnum",
        access: "R V", conformance: "M", default: { type: "reference", name: "LocationCapability" }
    }),
    Attribute({
        id: 0x3, name: "LocationCapability", type: "RegulatoryLocationTypeEnum",
        access: "R V", conformance: "M", default: 2, quality: "F"
    }),
    Attribute({
        id: 0x4, name: "SupportsConcurrentConnection", type: "bool",
        access: "R V", conformance: "M", default: true, quality: "F"
    }),
    Attribute({ id: 0x5, name: "TcAcceptedVersion", type: "uint16", access: "R A", conformance: "P, TC", quality: "N" }),
    Attribute({ id: 0x6, name: "TcMinRequiredVersion", type: "uint16", access: "R A", conformance: "P, TC", quality: "N" }),
    Attribute({ id: 0x7, name: "TcAcknowledgements", type: "map16", access: "R A", conformance: "P, TC", quality: "N" }),
    Attribute({
        id: 0x8, name: "TcAcknowledgementsRequired", type: "bool",
        access: "R A", conformance: "P, TC", default: true, quality: "N"
    }),
    Attribute({ id: 0x9, name: "TcUpdateDeadline", type: "uint32", access: "R A", conformance: "P, TC", quality: "X N" }),

    Command(
        {
            id: 0x0, name: "ArmFailSafe",
            access: "A", conformance: "M", direction: "request", response: "ArmFailSafeResponse"
        },
        Field({ id: 0x0, name: "ExpiryLengthSeconds", type: "uint16", conformance: "M", default: 900 }),
        Field({ id: 0x1, name: "Breadcrumb", type: "uint64", conformance: "M" })
    ),

    Command(
        { id: 0x1, name: "ArmFailSafeResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "ErrorCode", type: "CommissioningErrorEnum", conformance: "M", default: 0 }),
        Field({ id: 0x1, name: "DebugText", type: "string", conformance: "M", constraint: "max 128" })
    ),

    Command(
        {
            id: 0x2, name: "SetRegulatoryConfig",
            access: "A", conformance: "M", direction: "request", response: "SetRegulatoryConfigResponse"
        },
        Field({ id: 0x0, name: "NewRegulatoryConfig", type: "RegulatoryLocationTypeEnum", conformance: "M" }),
        Field({ id: 0x1, name: "CountryCode", type: "string", conformance: "M", constraint: "2" }),
        Field({ id: 0x2, name: "Breadcrumb", type: "uint64", conformance: "M" })
    ),

    Command(
        { id: 0x3, name: "SetRegulatoryConfigResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "ErrorCode", type: "CommissioningErrorEnum", conformance: "M", default: 0 }),
        Field({ id: 0x1, name: "DebugText", type: "string", conformance: "M" })
    ),
    Command({
        id: 0x4, name: "CommissioningComplete",
        access: "F A", conformance: "M", direction: "request", response: "CommissioningCompleteResponse"
    }),
    Command(
        { id: 0x5, name: "CommissioningCompleteResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "ErrorCode", type: "CommissioningErrorEnum", conformance: "M", default: 0 }),
        Field({ id: 0x1, name: "DebugText", type: "string", conformance: "M" })
    ),

    Command(
        {
            id: 0x6, name: "SetTcAcknowledgements",
            access: "A", conformance: "P, TC", direction: "request", response: "SetTcAcknowledgementsResponse"
        },
        Field({ id: 0x0, name: "TcVersion", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "TcUserResponse", type: "map16", conformance: "M" })
    ),

    Command(
        { id: 0x7, name: "SetTcAcknowledgementsResponse", conformance: "P, TC", direction: "response" },
        Field({ id: 0x0, name: "ErrorCode", type: "CommissioningErrorEnum", conformance: "M", default: 0 })
    ),

    Datatype(
        { name: "CommissioningErrorEnum", type: "enum8" },
        Field({ id: 0x0, name: "Ok", conformance: "M" }),
        Field({ id: 0x1, name: "ValueOutsideRange", conformance: "M" }),
        Field({ id: 0x2, name: "InvalidAuthentication", conformance: "M" }),
        Field({ id: 0x3, name: "NoFailSafe", conformance: "M" }),
        Field({ id: 0x4, name: "BusyWithOtherAdmin", conformance: "M" }),
        Field({ id: 0x5, name: "RequiredTcNotAccepted", conformance: "TC" }),
        Field({ id: 0x6, name: "TcAcknowledgementsNotReceived", conformance: "TC" }),
        Field({ id: 0x7, name: "TcMinVersionNotMet", conformance: "TC" })
    ),

    Datatype(
        { name: "RegulatoryLocationTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Indoor", conformance: "M" }),
        Field({ id: 0x1, name: "Outdoor", conformance: "M" }),
        Field({ id: 0x2, name: "IndoorOutdoor", conformance: "M" })
    ),

    Datatype(
        { name: "BasicCommissioningInfo", type: "struct" },
        Field({ id: 0x0, name: "FailSafeExpiryLengthSeconds", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "MaxCumulativeFailsafeSeconds", type: "uint16", conformance: "M", constraint: "desc" })
    )
);

MatterDefinition.children.push(GeneralCommissioning);
