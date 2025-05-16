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
    { name: "GeneralCommissioning", id: 0x30 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "TC", constraint: "0", conformance: "P", longName: "TermsAndConditions" })
    ),
    Attribute({ name: "Breadcrumb", id: 0x0, type: "uint64", default: 0, conformance: "M", access: "RW VA" }),
    Attribute({
        name: "BasicCommissioningInfo", id: 0x1, type: "BasicCommissioningInfo",
        constraint: "desc", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "RegulatoryConfig", id: 0x2, type: "RegulatoryLocationTypeEnum",
        default: { type: "reference", name: "LocationCapability" }, conformance: "M", access: "R V"
    }),
    Attribute({
        name: "LocationCapability", id: 0x3, type: "RegulatoryLocationTypeEnum",
        default: 2, conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "SupportsConcurrentConnection", id: 0x4, type: "bool",
        default: true, conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({ name: "TcAcceptedVersion", id: 0x5, type: "uint16", conformance: "P, TC", access: "R A", quality: "N" }),
    Attribute({ name: "TcMinRequiredVersion", id: 0x6, type: "uint16", conformance: "P, TC", access: "R A", quality: "N" }),
    Attribute({ name: "TcAcknowledgements", id: 0x7, type: "map16", conformance: "P, TC", access: "R A", quality: "N" }),
    Attribute({
        name: "TcAcknowledgementsRequired", id: 0x8, type: "bool",
        default: true, conformance: "P, TC", access: "R A", quality: "N"
    }),
    Attribute({ name: "TcUpdateDeadline", id: 0x9, type: "uint32", conformance: "P, TC", access: "R A", quality: "X N" }),

    Command(
        {
            name: "ArmFailSafe", id: 0x0,
            conformance: "M", access: "A", direction: "request", response: "ArmFailSafeResponse"
        },
        Field({ name: "ExpiryLengthSeconds", id: 0x0, type: "uint16", default: 900, conformance: "M" }),
        Field({ name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "M" })
    ),

    Command(
        { name: "ArmFailSafeResponse", id: 0x1, conformance: "M", direction: "response" },
        Field({ name: "ErrorCode", id: 0x0, type: "CommissioningErrorEnum", default: 0, conformance: "M" }),
        Field({ name: "DebugText", id: 0x1, type: "string", constraint: "max 128", conformance: "M" })
    ),

    Command(
        {
            name: "SetRegulatoryConfig", id: 0x2,
            conformance: "M", access: "A", direction: "request", response: "SetRegulatoryConfigResponse"
        },
        Field({ name: "NewRegulatoryConfig", id: 0x0, type: "RegulatoryLocationTypeEnum", conformance: "M" }),
        Field({ name: "CountryCode", id: 0x1, type: "string", constraint: "2", conformance: "M" }),
        Field({ name: "Breadcrumb", id: 0x2, type: "uint64", conformance: "M" })
    ),

    Command(
        { name: "SetRegulatoryConfigResponse", id: 0x3, conformance: "M", direction: "response" },
        Field({ name: "ErrorCode", id: 0x0, type: "CommissioningErrorEnum", default: 0, conformance: "M" }),
        Field({ name: "DebugText", id: 0x1, type: "string", conformance: "M" })
    ),
    Command({
        name: "CommissioningComplete", id: 0x4,
        conformance: "M", access: "F A", direction: "request", response: "CommissioningCompleteResponse"
    }),
    Command(
        { name: "CommissioningCompleteResponse", id: 0x5, conformance: "M", direction: "response" },
        Field({ name: "ErrorCode", id: 0x0, type: "CommissioningErrorEnum", default: 0, conformance: "M" }),
        Field({ name: "DebugText", id: 0x1, type: "string", conformance: "M" })
    ),

    Command(
        {
            name: "SetTcAcknowledgements", id: 0x6,
            conformance: "P, TC", access: "A", direction: "request", response: "SetTcAcknowledgementsResponse"
        },
        Field({ name: "TcVersion", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "TcUserResponse", id: 0x1, type: "map16", conformance: "M" })
    ),

    Command(
        { name: "SetTcAcknowledgementsResponse", id: 0x7, conformance: "P, TC", direction: "response" },
        Field({ name: "ErrorCode", id: 0x0, type: "CommissioningErrorEnum", default: 0, conformance: "M" })
    ),

    Datatype(
        { name: "CommissioningErrorEnum", type: "enum8" },
        Field({ name: "Ok", id: 0x0, conformance: "M" }),
        Field({ name: "ValueOutsideRange", id: 0x1, conformance: "M" }),
        Field({ name: "InvalidAuthentication", id: 0x2, conformance: "M" }),
        Field({ name: "NoFailSafe", id: 0x3, conformance: "M" }),
        Field({ name: "BusyWithOtherAdmin", id: 0x4, conformance: "M" }),
        Field({ name: "RequiredTcNotAccepted", id: 0x5, conformance: "TC" }),
        Field({ name: "TcAcknowledgementsNotReceived", id: 0x6, conformance: "TC" }),
        Field({ name: "TcMinVersionNotMet", id: 0x7, conformance: "TC" })
    ),

    Datatype(
        { name: "RegulatoryLocationTypeEnum", type: "enum8" },
        Field({ name: "Indoor", id: 0x0, conformance: "M" }),
        Field({ name: "Outdoor", id: 0x1, conformance: "M" }),
        Field({ name: "IndoorOutdoor", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "BasicCommissioningInfo", type: "struct" },
        Field({ name: "FailSafeExpiryLengthSeconds", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "MaxCumulativeFailsafeSeconds", id: 0x1, type: "uint16", constraint: "desc", conformance: "M" })
    )
);

MatterDefinition.children.push(GeneralCommissioning);
