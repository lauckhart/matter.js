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

export const ServiceArea = Cluster(
    { id: 0x150, name: "ServiceArea" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "SELRUN", constraint: "0", description: "SelectWhileRunning" }),
        Field({ name: "PROG", constraint: "1", description: "ProgressReporting" }),
        Field({ name: "MAPS", constraint: "2", description: "Maps" })
    ),

    Attribute(
        { id: 0x0, name: "SupportedAreas", type: "list", access: "R V", conformance: "M", constraint: "max 255" },
        Field({ name: "entry", type: "AreaStruct" })
    ),
    Attribute(
        { id: 0x1, name: "SupportedMaps", type: "list", access: "R V", conformance: "MAPS", constraint: "max 255" },
        Field({ name: "entry", type: "MapStruct" })
    ),

    Attribute(
        {
            id: 0x2, name: "SelectedAreas", type: "list",
            access: "R V", conformance: "M", constraint: "desc", default: []
        },
        Field({ name: "entry", type: "uint32" })
    ),

    Attribute({
        id: 0x3, name: "CurrentArea", type: "uint32",
        access: "R V", conformance: "desc", constraint: "desc", default: null, quality: "X"
    }),
    Attribute({
        id: 0x4, name: "EstimatedEndTime", type: "epoch-s",
        access: "R V", conformance: "[CurrentArea]", default: null, quality: "X Q"
    }),

    Attribute(
        {
            id: 0x5, name: "Progress", type: "list",
            access: "R V", conformance: "PROG", constraint: "max 255", default: []
        },
        Field({ name: "entry", type: "ProgressStruct" })
    ),

    Command(
        {
            id: 0x0, name: "SelectAreas",
            access: "O", conformance: "M", direction: "request", response: "SelectAreasResponse"
        },
        Field(
            { id: 0x0, name: "NewAreas", type: "list", conformance: "M", constraint: "desc" },
            Field({ name: "entry", type: "uint32" })
        )
    ),

    Command(
        { id: 0x1, name: "SelectAreasResponse", access: "O", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "SelectAreasStatus", conformance: "M" }),
        Field({ id: 0x1, name: "StatusText", type: "string", conformance: "M", constraint: "max 256" })
    ),

    Command(
        {
            id: 0x2, name: "SkipArea",
            access: "O", conformance: "desc", direction: "request", response: "SkipAreaResponse"
        },
        Field({ id: 0x0, name: "SkippedArea", type: "uint32", conformance: "M", constraint: "desc" })
    ),

    Command(
        { id: 0x3, name: "SkipAreaResponse", access: "O", conformance: "SkipArea", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "SkipAreaStatus", conformance: "M" }),
        Field({ id: 0x1, name: "StatusText", type: "string", conformance: "M", constraint: "max 256" })
    ),
    Datatype(
        { name: "LandmarkInfoStruct", type: "struct" },
        Field({ id: 0x0, name: "LandmarkTag", type: "tag", conformance: "M" }),
        Field({ id: 0x1, name: "RelativePositionTag", type: "tag", conformance: "M", quality: "X" })
    ),
    Datatype(
        { name: "AreaInfoStruct", type: "struct" },
        Field({ id: 0x0, name: "LocationInfo", type: "locationdesc", conformance: "M", quality: "X" }),
        Field({ id: 0x1, name: "LandmarkInfo", type: "LandmarkInfoStruct", conformance: "M", quality: "X" })
    ),
    Datatype(
        { name: "MapStruct", type: "struct" },
        Field({ id: 0x0, name: "MapId", type: "uint32", conformance: "M" }),
        Field({ id: 0x1, name: "Name", type: "string", conformance: "M", constraint: "max 64" })
    ),

    Datatype(
        { name: "AreaStruct", type: "struct" },
        Field({ id: 0x0, name: "AreaId", type: "uint32", conformance: "M" }),
        Field({ id: 0x1, name: "MapId", type: "uint32", conformance: "M", constraint: "desc", quality: "X" }),
        Field({ id: 0x2, name: "AreaInfo", type: "AreaInfoStruct", conformance: "M" })
    ),

    Datatype(
        { name: "ProgressStruct", type: "struct" },
        Field({ id: 0x0, name: "AreaId", type: "uint32", conformance: "M" }),
        Field({ id: 0x1, name: "Status", type: "OperationalStatusEnum", conformance: "M" }),
        Field({ id: 0x2, name: "TotalOperationalTime", type: "elapsed-s", conformance: "O", quality: "X" }),
        Field({ id: 0x3, name: "EstimatedTime", type: "elapsed-s", quality: "X" })
    ),

    Datatype(
        { name: "OperationalStatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Pending", conformance: "M" }),
        Field({ id: 0x1, name: "Operating", conformance: "M" }),
        Field({ id: 0x2, name: "Skipped", conformance: "M" }),
        Field({ id: 0x3, name: "Completed", conformance: "M" })
    ),

    Datatype(
        { name: "SelectAreasStatus", type: "enum8" },
        Field({ id: 0x0, name: "Success", conformance: "M" }),
        Field({ id: 0x1, name: "UnsupportedArea", conformance: "M" }),
        Field({ id: 0x2, name: "InvalidInMode", conformance: "M" }),
        Field({ id: 0x3, name: "InvalidSet", conformance: "M" })
    ),

    Datatype(
        { name: "SkipAreaStatus", type: "enum8" },
        Field({ id: 0x0, name: "Success", conformance: "M" }),
        Field({ id: 0x1, name: "InvalidAreaList", conformance: "M" }),
        Field({ id: 0x2, name: "InvalidInMode", conformance: "M" }),
        Field({ id: 0x3, name: "InvalidSkippedArea", conformance: "M" })
    )
);

MatterDefinition.children.push(ServiceArea);
