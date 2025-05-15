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
    { id: 0x50f, name: "ContentControl" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "ST", constraint: "0", longName: "ScreenTime" }),
        Field({ name: "PM", constraint: "1", longName: "PinManagement" }),
        Field({ name: "BU", constraint: "2", longName: "BlockUnrated" }),
        Field({ name: "OCR", constraint: "3", longName: "OnDemandContentRating" }),
        Field({ name: "SCR", constraint: "4", longName: "ScheduledContentRating" }),
        Field({ name: "BC", constraint: "5", longName: "BlockChannels" }),
        Field({ name: "BA", constraint: "6", longName: "BlockApplications" }),
        Field({ name: "BTW", constraint: "7", longName: "BlockContentTimeWindow" })
    ),

    Attribute({ id: 0x0, name: "Enabled", type: "bool", access: "R V", conformance: "M" }),
    Attribute(
        { id: 0x1, name: "OnDemandRatings", type: "list", access: "R V", conformance: "OCR" },
        Field({ name: "entry", type: "RatingNameStruct" })
    ),
    Attribute({
        id: 0x2, name: "OnDemandRatingThreshold", type: "string",
        access: "R V", conformance: "OCR", constraint: "max 8"
    }),
    Attribute(
        { id: 0x3, name: "ScheduledContentRatings", type: "list", access: "R V", conformance: "SCR" },
        Field({ name: "entry", type: "RatingNameStruct" })
    ),
    Attribute({
        id: 0x4, name: "ScheduledContentRatingThreshold", type: "string",
        access: "R V", conformance: "SCR", constraint: "max 8"
    }),
    Attribute({ id: 0x5, name: "ScreenDailyTime", type: "elapsed-s", access: "R V", conformance: "ST", constraint: "max 86400" }),
    Attribute({
        id: 0x6, name: "RemainingScreenTime", type: "elapsed-s",
        access: "R V", conformance: "ST", constraint: "max 86400"
    }),
    Attribute({ id: 0x7, name: "BlockUnrated", type: "bool", access: "R V", conformance: "BU" }),
    Attribute(
        { id: 0x8, name: "BlockChannelList", type: "list", access: "R V", conformance: "BC" },
        Field({ name: "entry", type: "BlockChannelStruct" })
    ),
    Attribute(
        { id: 0x9, name: "BlockApplicationList", type: "list", access: "R V", conformance: "BA" },
        Field({ name: "entry", type: "AppInfoStruct" })
    ),

    Attribute(
        {
            id: 0xa, name: "BlockContentTimeWindow", type: "list",
            access: "R V", conformance: "BTW", constraint: "max 7"
        },
        Field({ name: "entry", type: "TimeWindowStruct" })
    ),

    Event({ id: 0x0, name: "RemainingScreenTimeExpired", access: "V", conformance: "ST", priority: "info" }),
    Event({ id: 0x1, name: "EnteringBlockContentTimeWindow", access: "V", conformance: "BTW", priority: "info" }),
    Command(
        { id: 0x0, name: "UpdatePin", access: "M T", conformance: "PM", direction: "request", response: "status" },
        Field({ id: 0x0, name: "OldPin", type: "string", conformance: "M", constraint: "max 6" }),
        Field({ id: 0x1, name: "NewPin", type: "string", conformance: "M", constraint: "max 6" })
    ),
    Command({ id: 0x1, name: "ResetPin", access: "A T", conformance: "PM", direction: "request", response: "ResetPinResponse" }),
    Command(
        { id: 0x2, name: "ResetPinResponse", conformance: "PM", direction: "response" },
        Field({ id: 0x0, name: "PinCode", type: "string", conformance: "M", constraint: "max 6" })
    ),
    Command({ id: 0x3, name: "Enable", access: "M T", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0x4, name: "Disable", access: "M T", conformance: "M", direction: "request", response: "status" }),
    Command(
        { id: 0x5, name: "AddBonusTime", access: "O", conformance: "ST", direction: "request", response: "status" },
        Field({ id: 0x0, name: "PinCode", type: "string", conformance: "O", constraint: "max 6" }),
        Field({ id: 0x1, name: "BonusTime", type: "elapsed-s", conformance: "M", constraint: "desc", default: 300 })
    ),

    Command(
        {
            id: 0x6, name: "SetScreenDailyTime",
            access: "M", conformance: "ST", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "ScreenTime", type: "elapsed-s", conformance: "M", constraint: "max 86400" })
    ),

    Command({ id: 0x7, name: "BlockUnratedContent", access: "M", conformance: "BU", direction: "request", response: "status" }),
    Command({
        id: 0x8, name: "UnblockUnratedContent",
        access: "M", conformance: "BU", direction: "request", response: "status"
    }),

    Command(
        {
            id: 0x9, name: "SetOnDemandRatingThreshold",
            access: "M", conformance: "OCR", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "Rating", type: "string", conformance: "M", constraint: "max 8" })
    ),

    Command(
        {
            id: 0xa, name: "SetScheduledContentRatingThreshold",
            access: "M", conformance: "SCR", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "Rating", type: "string", conformance: "M", constraint: "max 8" })
    ),

    Command(
        { id: 0xb, name: "AddBlockChannels", access: "M", conformance: "BC", direction: "request", response: "status" },
        Field(
            { id: 0x0, name: "Channels", type: "list", conformance: "M" },
            Field({ name: "entry", type: "BlockChannelStruct" })
        )
    ),

    Command(
        {
            id: 0xc, name: "RemoveBlockChannels",
            access: "M", conformance: "BC", direction: "request", response: "status"
        },
        Field(
            { id: 0x0, name: "ChannelIndexes", type: "list", conformance: "M" },
            Field({ name: "entry", type: "uint16" })
        )
    ),

    Command(
        {
            id: 0xd, name: "AddBlockApplications",
            access: "M", conformance: "BA", direction: "request", response: "status"
        },
        Field(
            { id: 0x0, name: "Applications", type: "list", conformance: "M" },
            Field({ name: "entry", type: "AppInfoStruct" })
        )
    ),

    Command(
        {
            id: 0xe, name: "RemoveBlockApplications",
            access: "M", conformance: "BA", direction: "request", response: "status"
        },
        Field(
            { id: 0x0, name: "Applications", type: "list", conformance: "M" },
            Field({ name: "entry", type: "AppInfoStruct" })
        )
    ),

    Command(
        {
            id: 0xf, name: "SetBlockContentTimeWindow",
            access: "M", conformance: "BTW", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "TimeWindow", type: "TimeWindowStruct", conformance: "M" })
    ),

    Command(
        {
            id: 0x10, name: "RemoveBlockContentTimeWindow",
            access: "M", conformance: "BTW", direction: "request", response: "status"
        },
        Field(
            { id: 0x0, name: "TimeWindowIndexes", type: "list", conformance: "M" },
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
        Field({ id: 0x0, name: "RatingName", type: "string", conformance: "M", constraint: "max 8" }),
        Field({ id: 0x1, name: "RatingNameDesc", type: "string", conformance: "O", constraint: "max 64" })
    ),

    Datatype(
        { name: "BlockChannelStruct", type: "struct" },
        Field({ id: 0x0, name: "BlockChannelIndex", type: "uint16", conformance: "M", quality: "X" }),
        Field({ id: 0x1, name: "MajorNumber", type: "uint16", conformance: "M" }),
        Field({ id: 0x2, name: "MinorNumber", type: "uint16", conformance: "M" }),
        Field({ id: 0x3, name: "Identifier", type: "string", conformance: "O" })
    ),

    Datatype(
        { name: "AppInfoStruct", type: "struct" },
        Field({ id: 0x0, name: "CatalogVendorId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "ApplicationId", type: "string", conformance: "M" })
    ),

    Datatype(
        { name: "TimeWindowStruct", type: "struct" },
        Field({ id: 0x0, name: "TimeWindowIndex", type: "uint16", conformance: "M", quality: "X" }),
        Field({ id: 0x1, name: "DayOfWeek", type: "DayOfWeekBitmap", conformance: "M", constraint: "desc" }),
        Field(
            { id: 0x2, name: "TimePeriod", type: "list", conformance: "M", constraint: "desc" },
            Field({ name: "entry", type: "TimePeriodStruct" })
        )
    ),

    Datatype(
        { name: "TimePeriodStruct", type: "struct" },
        Field({ id: 0x0, name: "StartHour", type: "uint8", conformance: "M", constraint: "0 to 23" }),
        Field({ id: 0x1, name: "StartMinute", type: "uint8", conformance: "M", constraint: "0 to 59" }),
        Field({ id: 0x2, name: "EndHour", type: "uint8", conformance: "M", constraint: "0 to 23" }),
        Field({ id: 0x3, name: "EndMinute", type: "uint8", conformance: "M", constraint: "0 to 59" })
    ),

    Datatype(
        { name: "StatusCodeEnum", type: "enum8" },
        Field({ id: 0x2, name: "InvalidPinCode" }),
        Field({ id: 0x3, name: "InvalidRating" }),
        Field({ id: 0x4, name: "InvalidChannel" }),
        Field({ id: 0x5, name: "ChannelAlreadyExist" }),
        Field({ id: 0x6, name: "ChannelNotExist" }),
        Field({ id: 0x7, name: "UnidentifiableApplication" }),
        Field({ id: 0x8, name: "ApplicationAlreadyExist" }),
        Field({ id: 0x9, name: "ApplicationNotExist" }),
        Field({ id: 0xa, name: "TimeWindowAlreadyExist" }),
        Field({ id: 0xb, name: "TimeWindowNotExist" })
    )
);

MatterDefinition.children.push(ContentControl);
