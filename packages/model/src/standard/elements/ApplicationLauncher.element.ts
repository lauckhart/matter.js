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

export const ApplicationLauncher = Cluster(
    { id: 0x50c, name: "ApplicationLauncher" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "AP", constraint: "0", longName: "ApplicationPlatform" })
    ),
    Attribute(
        { id: 0x0, name: "CatalogList", type: "list", access: "R V", conformance: "AP", quality: "N" },
        Field({ name: "entry", type: "uint16" })
    ),
    Attribute({
        id: 0x1, name: "CurrentApp", type: "ApplicationEPStruct",
        access: "R V", conformance: "O", constraint: "desc", default: null, quality: "X"
    }),

    Command(
        {
            id: 0x0, name: "LaunchApp",
            access: "O", conformance: "M", direction: "request", response: "LauncherResponse"
        },
        Field({ id: 0x0, name: "Application", type: "ApplicationStruct", conformance: "AP", constraint: "desc" }),
        Field({ id: 0x1, name: "Data", type: "octstr", conformance: "O" })
    ),

    Command(
        { id: 0x1, name: "StopApp", access: "O", conformance: "M", direction: "request", response: "LauncherResponse" },
        Field({ id: 0x0, name: "Application", type: "ApplicationStruct", conformance: "AP", constraint: "desc" })
    ),
    Command(
        { id: 0x2, name: "HideApp", access: "O", conformance: "M", direction: "request", response: "LauncherResponse" },
        Field({ id: 0x0, name: "Application", type: "ApplicationStruct", conformance: "AP", constraint: "desc" })
    ),
    Command(
        { id: 0x3, name: "LauncherResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "StatusEnum", conformance: "M" }),
        Field({ id: 0x1, name: "Data", type: "octstr", conformance: "O" })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Success", conformance: "M" }),
        Field({ id: 0x1, name: "AppNotAvailable", conformance: "M" }),
        Field({ id: 0x2, name: "SystemBusy", conformance: "M" }),
        Field({ id: 0x3, name: "PendingUserApproval", conformance: "M" }),
        Field({ id: 0x4, name: "Downloading", conformance: "M" }),
        Field({ id: 0x5, name: "Installing", conformance: "M" })
    ),

    Datatype(
        { name: "ApplicationStruct", type: "struct" },
        Field({ id: 0x0, name: "CatalogVendorId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "ApplicationId", type: "string", conformance: "M" })
    ),
    Datatype(
        { name: "ApplicationEPStruct", type: "struct" },
        Field({ id: 0x0, name: "Application", type: "ApplicationStruct", conformance: "M" }),
        Field({ id: 0x1, name: "Endpoint", type: "endpoint-no", conformance: "O" })
    )
);

MatterDefinition.children.push(ApplicationLauncher);
