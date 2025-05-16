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

export const ContentControl = Cluster(
    { name: "ContentControl", id: 0x50f },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "ST", constraint: "0", longName: "ScreenTime" }),
        Field({ name: "PM", constraint: "1", longName: "PinManagement" }),
        Field({ name: "BU", constraint: "2", longName: "BlockUnrated" }),
        Field({ name: "OCR", constraint: "3", longName: "OnDemandContentRating" }),
        Field({ name: "SCR", constraint: "4", longName: "ScheduledContentRating" }),
        Field({ name: "BC", constraint: "5", longName: "BlockChannels" }),
        Field({ name: "BA", constraint: "6", longName: "BlockApplications" }),
        Field({ name: "BTW", constraint: "7", longName: "BlockContentTimeWindow" })
    ),

    Attribute({ name: "Enabled", id: 0x0, type: "bool", conformance: "M", access: "R V" }),
    Attribute(
        { name: "OnDemandRatings", id: 0x1, type: "list", conformance: "OCR", access: "R V" },
        Field({ name: "entry", type: "RatingNameStruct" })
    ),
    Attribute({
        name: "OnDemandRatingThreshold", id: 0x2, type: "string",
        constraint: "max 8", conformance: "OCR", access: "R V"
    }),
    Attribute(
        { name: "ScheduledContentRatings", id: 0x3, type: "list", conformance: "SCR", access: "R V" },
        Field({ name: "entry", type: "RatingNameStruct" })
    ),
    Attribute({
        name: "ScheduledContentRatingThreshold", id: 0x4, type: "string",
        constraint: "max 8", conformance: "SCR", access: "R V"
    }),
    Attribute({ name: "ScreenDailyTime", id: 0x5, type: "elapsed-s", constraint: "max 86400", conformance: "ST", access: "R V" }),
    Attribute({
        name: "RemainingScreenTime", id: 0x6, type: "elapsed-s",
        constraint: "max 86400", conformance: "ST", access: "R V"
    }),
    Attribute({ name: "BlockUnrated", id: 0x7, type: "bool", conformance: "BU", access: "R V" }),
    Attribute(
        { name: "BlockChannelList", id: 0x8, type: "list", conformance: "BC", access: "R V" },
        Field({ name: "entry", type: "BlockChannelStruct" })
    ),
    Attribute(
        { name: "BlockApplicationList", id: 0x9, type: "list", conformance: "BA", access: "R V" },
        Field({ name: "entry", type: "AppInfoStruct" })
    ),

    Attribute(
        {
            name: "BlockContentTimeWindow", id: 0xa, type: "list",
            constraint: "max 7", conformance: "BTW", access: "R V"
        },
        Field({ name: "entry", type: "TimeWindowStruct" })
    ),

    Event({ name: "RemainingScreenTimeExpired", id: 0x0, conformance: "ST", access: "V", priority: "info" }),
    Event({ name: "EnteringBlockContentTimeWindow", id: 0x1, conformance: "BTW", access: "V", priority: "info" }),
    Command(
        { name: "UpdatePin", id: 0x0, conformance: "PM", access: "M T", direction: "request", response: "status" },
        Field({ name: "OldPin", id: 0x0, type: "string", constraint: "max 6", conformance: "M" }),
        Field({ name: "NewPin", id: 0x1, type: "string", constraint: "max 6", conformance: "M" })
    ),
    Command({ name: "ResetPin", id: 0x1, conformance: "PM", access: "A T", direction: "request", response: "ResetPinResponse" }),
    Command(
        { name: "ResetPinResponse", id: 0x2, conformance: "PM", direction: "response" },
        Field({ name: "PinCode", id: 0x0, type: "string", constraint: "max 6", conformance: "M" })
    ),
    Command({ name: "Enable", id: 0x3, conformance: "M", access: "M T", direction: "request", response: "status" }),
    Command({ name: "Disable", id: 0x4, conformance: "M", access: "M T", direction: "request", response: "status" }),
    Command(
        { name: "AddBonusTime", id: 0x5, conformance: "ST", access: "O", direction: "request", response: "status" },
        Field({ name: "PinCode", id: 0x0, type: "string", constraint: "max 6", conformance: "O" }),
        Field({ name: "BonusTime", id: 0x1, type: "elapsed-s", default: 300, constraint: "desc", conformance: "M" })
    ),

    Command(
        {
            name: "SetScreenDailyTime", id: 0x6,
            conformance: "ST", access: "M", direction: "request", response: "status"
        },
        Field({ name: "ScreenTime", id: 0x0, type: "elapsed-s", constraint: "max 86400", conformance: "M" })
    ),

    Command({ name: "BlockUnratedContent", id: 0x7, conformance: "BU", access: "M", direction: "request", response: "status" }),
    Command({
        name: "UnblockUnratedContent", id: 0x8,
        conformance: "BU", access: "M", direction: "request", response: "status"
    }),

    Command(
        {
            name: "SetOnDemandRatingThreshold", id: 0x9,
            conformance: "OCR", access: "M", direction: "request", response: "status"
        },
        Field({ name: "Rating", id: 0x0, type: "string", constraint: "max 8", conformance: "M" })
    ),

    Command(
        {
            name: "SetScheduledContentRatingThreshold", id: 0xa,
            conformance: "SCR", access: "M", direction: "request", response: "status"
        },
        Field({ name: "Rating", id: 0x0, type: "string", constraint: "max 8", conformance: "M" })
    ),

    Command(
        { name: "AddBlockChannels", id: 0xb, conformance: "BC", access: "M", direction: "request", response: "status" },
        Field(
            { name: "Channels", id: 0x0, type: "list", conformance: "M" },
            Field({ name: "entry", type: "BlockChannelStruct" })
        )
    ),

    Command(
        {
            name: "RemoveBlockChannels", id: 0xc,
            conformance: "BC", access: "M", direction: "request", response: "status"
        },
        Field(
            { name: "ChannelIndexes", id: 0x0, type: "list", conformance: "M" },
            Field({ name: "entry", type: "uint16" })
        )
    ),

    Command(
        {
            name: "AddBlockApplications", id: 0xd,
            conformance: "BA", access: "M", direction: "request", response: "status"
        },
        Field(
            { name: "Applications", id: 0x0, type: "list", conformance: "M" },
            Field({ name: "entry", type: "AppInfoStruct" })
        )
    ),

    Command(
        {
            name: "RemoveBlockApplications", id: 0xe,
            conformance: "BA", access: "M", direction: "request", response: "status"
        },
        Field(
            { name: "Applications", id: 0x0, type: "list", conformance: "M" },
            Field({ name: "entry", type: "AppInfoStruct" })
        )
    ),

    Command(
        {
            name: "SetBlockContentTimeWindow", id: 0xf,
            conformance: "BTW", access: "M", direction: "request", response: "status"
        },
        Field({ name: "TimeWindow", id: 0x0, type: "TimeWindowStruct", conformance: "M" })
    ),

    Command(
        {
            name: "RemoveBlockContentTimeWindow", id: 0x10,
            conformance: "BTW", access: "M", direction: "request", response: "status"
        },
        Field(
            { name: "TimeWindowIndexes", id: 0x0, type: "list", conformance: "M" },
            Field({ name: "entry", type: "uint16" })
        )
    ),

    Datatype(
        { name: "DayOfWeekBitmap", type: "map8" },
        Field({ name: "Sunday", constraint: "0" }),
        Field({ name: "Monday", constraint: "1" }),
        Field({ name: "Tuesday", constraint: "2" }),
        Field({ name: "Wednesday", constraint: "3" }),
        Field({ name: "Thursday", constraint: "4" }),
        Field({ name: "Friday", constraint: "5" }),
        Field({ name: "Saturday", constraint: "6" })
    ),

    Datatype(
        { name: "RatingNameStruct", type: "struct" },
        Field({ name: "RatingName", id: 0x0, type: "string", constraint: "max 8", conformance: "M" }),
        Field({ name: "RatingNameDesc", id: 0x1, type: "string", constraint: "max 64", conformance: "O" })
    ),

    Datatype(
        { name: "BlockChannelStruct", type: "struct" },
        Field({ name: "BlockChannelIndex", id: 0x0, type: "uint16", conformance: "M", quality: "X" }),
        Field({ name: "MajorNumber", id: 0x1, type: "uint16", conformance: "M" }),
        Field({ name: "MinorNumber", id: 0x2, type: "uint16", conformance: "M" }),
        Field({ name: "Identifier", id: 0x3, type: "string", conformance: "O" })
    ),

    Datatype(
        { name: "AppInfoStruct", type: "struct" },
        Field({ name: "CatalogVendorId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "ApplicationId", id: 0x1, type: "string", conformance: "M" })
    ),

    Datatype(
        { name: "TimeWindowStruct", type: "struct" },
        Field({ name: "TimeWindowIndex", id: 0x0, type: "uint16", conformance: "M", quality: "X" }),
        Field({ name: "DayOfWeek", id: 0x1, type: "DayOfWeekBitmap", constraint: "desc", conformance: "M" }),
        Field(
            { name: "TimePeriod", id: 0x2, type: "list", constraint: "desc", conformance: "M" },
            Field({ name: "entry", type: "TimePeriodStruct" })
        )
    ),

    Datatype(
        { name: "TimePeriodStruct", type: "struct" },
        Field({ name: "StartHour", id: 0x0, type: "uint8", constraint: "0 to 23", conformance: "M" }),
        Field({ name: "StartMinute", id: 0x1, type: "uint8", constraint: "0 to 59", conformance: "M" }),
        Field({ name: "EndHour", id: 0x2, type: "uint8", constraint: "0 to 23", conformance: "M" }),
        Field({ name: "EndMinute", id: 0x3, type: "uint8", constraint: "0 to 59", conformance: "M" })
    ),

    Datatype(
        { name: "StatusCodeEnum", type: "enum8" },
        Field({ name: "InvalidPinCode", id: 0x2 }),
        Field({ name: "InvalidRating", id: 0x3 }),
        Field({ name: "InvalidChannel", id: 0x4 }),
        Field({ name: "ChannelAlreadyExist", id: 0x5 }),
        Field({ name: "ChannelNotExist", id: 0x6 }),
        Field({ name: "UnidentifiableApplication", id: 0x7 }),
        Field({ name: "ApplicationAlreadyExist", id: 0x8 }),
        Field({ name: "ApplicationNotExist", id: 0x9 }),
        Field({ name: "TimeWindowAlreadyExist", id: 0xa }),
        Field({ name: "TimeWindowNotExist", id: 0xb })
    )
);

MatterDefinition.children.push(ContentControl);
