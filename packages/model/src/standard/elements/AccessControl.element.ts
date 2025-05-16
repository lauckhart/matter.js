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

export const AccessControl = Cluster(
    { name: "AccessControl", id: 0x1f },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "EXTS", constraint: "0", conformance: "O", longName: "Extension" }),
        Field({ name: "MNGD", constraint: "1", conformance: "desc", longName: "ManagedDevice" })
    ),
    Attribute(
        { name: "Acl", id: 0x0, type: "list", constraint: "desc", conformance: "M", access: "RW F A" },
        Field({ name: "entry", type: "AccessControlEntryStruct" })
    ),
    Attribute(
        { name: "Extension", id: 0x1, type: "list", constraint: "desc", conformance: "EXTS", access: "RW F A" },
        Field({ name: "entry", type: "AccessControlExtensionStruct" })
    ),
    Attribute({
        name: "SubjectsPerAccessControlEntry", id: 0x2, type: "uint16",
        default: 4, constraint: "min 4", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "TargetsPerAccessControlEntry", id: 0x3, type: "uint16",
        default: 3, constraint: "min 3", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "AccessControlEntriesPerFabric", id: 0x4, type: "uint16",
        default: 4, constraint: "min 4", conformance: "M", access: "R V", quality: "F"
    }),

    Attribute(
        {
            name: "CommissioningArL", id: 0x5, type: "list",
            default: [], constraint: "desc", conformance: "MNGD", access: "R V", quality: "F"
        },
        Field({ name: "entry", type: "CommissioningAccessRestrictionEntryStruct" })
    ),

    Attribute(
        { name: "Arl", id: 0x6, type: "list", default: [], constraint: "desc", conformance: "MNGD", access: "R F V" },
        Field({ name: "entry", type: "AccessRestrictionEntryStruct" })
    ),

    Event(
        { name: "AccessControlEntryChanged", id: 0x0, conformance: "M", access: "S A", priority: "info" },
        Field({
            name: "AdminNodeId", id: 0x1, type: "node-id",
            constraint: "desc", conformance: "M", access: "S", quality: "X"
        }),
        Field({
            name: "AdminPasscodeId", id: 0x2, type: "uint16",
            constraint: "desc", conformance: "M", access: "S", quality: "X"
        }),
        Field({ name: "ChangeType", id: 0x3, type: "ChangeTypeEnum", conformance: "M", access: "S" }),
        Field({ name: "LatestValue", id: 0x4, type: "AccessControlEntryStruct", conformance: "M", access: "S", quality: "X" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Event(
        { name: "AccessControlExtensionChanged", id: 0x1, conformance: "EXTS", access: "S A", priority: "info" },
        Field({
            name: "AdminNodeId", id: 0x1, type: "node-id",
            constraint: "desc", conformance: "M", access: "S", quality: "X"
        }),
        Field({
            name: "AdminPasscodeId", id: 0x2, type: "uint16",
            constraint: "desc", conformance: "M", access: "S", quality: "X"
        }),
        Field({ name: "ChangeType", id: 0x3, type: "ChangeTypeEnum", conformance: "M", access: "S" }),
        Field({
            name: "LatestValue", id: 0x4, type: "AccessControlExtensionStruct",
            conformance: "M", access: "S", quality: "X"
        }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Event(
        { name: "FabricRestrictionReviewUpdate", id: 0x2, conformance: "MNGD", access: "S A", priority: "info" },
        Field({ name: "Token", id: 0x0, type: "uint64", conformance: "M", access: "S" }),
        Field({ name: "Instruction", id: 0x1, type: "string", constraint: "max 512", conformance: "O", access: "S" }),
        Field({ name: "ArlRequestFlowUrl", id: 0x2, type: "string", constraint: "max 256", conformance: "O", access: "S" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Command(
        {
            name: "ReviewFabricRestrictions", id: 0x0,
            conformance: "MNGD", access: "F A", direction: "request",
            response: "ReviewFabricRestrictionsResponse"
        },
        Field(
            { name: "Arl", id: 0x0, type: "list", constraint: "desc", conformance: "M" },
            Field({ name: "entry", type: "CommissioningAccessRestrictionEntryStruct" })
        )
    ),

    Command(
        { name: "ReviewFabricRestrictionsResponse", id: 0x1, conformance: "MNGD", direction: "response" },
        Field({ name: "Token", id: 0x0, type: "uint64", conformance: "M" })
    ),

    Datatype(
        { name: "ChangeTypeEnum", type: "enum8" },
        Field({ name: "Changed", id: 0x0, conformance: "M" }),
        Field({ name: "Added", id: 0x1, conformance: "M" }),
        Field({ name: "Removed", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "AccessControlEntryPrivilegeEnum", type: "enum8" },
        Field({ name: "View", id: 0x1, conformance: "M" }),
        Field({ name: "ProxyView", id: 0x2, conformance: "P, M" }),
        Field({ name: "Operate", id: 0x3, conformance: "M" }),
        Field({ name: "Manage", id: 0x4, conformance: "M" }),
        Field({ name: "Administer", id: 0x5, conformance: "M" })
    ),

    Datatype(
        { name: "AccessRestrictionTypeEnum", type: "enum8" },
        Field({ name: "AttributeAccessForbidden", id: 0x0, conformance: "M" }),
        Field({ name: "AttributeWriteForbidden", id: 0x1, conformance: "M" }),
        Field({ name: "CommandForbidden", id: 0x2, conformance: "M" }),
        Field({ name: "EventForbidden", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "AccessControlEntryAuthModeEnum", type: "enum8" },
        Field({ name: "Pase", id: 0x1, conformance: "M" }),
        Field({ name: "Case", id: 0x2, conformance: "M" }),
        Field({ name: "Group", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "AccessControlTargetStruct", type: "struct" },
        Field({ name: "Cluster", id: 0x0, type: "cluster-id", conformance: "M", quality: "X" }),
        Field({ name: "Endpoint", id: 0x1, type: "endpoint-no", conformance: "M", quality: "X" }),
        Field({ name: "DeviceType", id: 0x2, type: "devtype-id", conformance: "M", quality: "X" })
    ),

    Datatype(
        { name: "AccessControlEntryStruct", type: "struct" },
        Field({ name: "Privilege", id: 0x1, type: "AccessControlEntryPrivilegeEnum", conformance: "M", access: "S" }),
        Field({ name: "AuthMode", id: 0x2, type: "AccessControlEntryAuthModeEnum", conformance: "M", access: "S" }),

        Field(
            {
                name: "Subjects", id: 0x3, type: "list",
                constraint: "max subjectsPerAccessControlEntry", conformance: "M", access: "S", quality: "X"
            },
            Field({ name: "entry", type: "subject-id" })
        ),

        Field(
            {
                name: "Targets", id: 0x4, type: "list",
                constraint: "max targetsPerAccessControlEntry", conformance: "M", access: "S", quality: "X"
            },
            Field({ name: "entry", type: "AccessControlTargetStruct" })
        ),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "AccessControlExtensionStruct", type: "struct" },
        Field({ name: "Data", id: 0x1, type: "octstr", constraint: "max 128", conformance: "M", access: "S" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),
    Datatype(
        { name: "AccessRestrictionStruct", type: "struct" },
        Field({ name: "Type", id: 0x0, type: "AccessRestrictionTypeEnum", conformance: "M" }),
        Field({ name: "Id", id: 0x1, type: "uint32", conformance: "M", quality: "X" })
    ),

    Datatype(
        { name: "AccessRestrictionEntryStruct", type: "struct" },
        Field({ name: "Endpoint", id: 0x0, type: "endpoint-no", conformance: "M", access: "S" }),
        Field({ name: "Cluster", id: 0x1, type: "cluster-id", conformance: "M", access: "S" }),
        Field(
            { name: "Restrictions", id: 0x2, type: "list", constraint: "min 1", conformance: "M", access: "S" },
            Field({ name: "entry", type: "AccessRestrictionStruct" })
        ),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "CommissioningAccessRestrictionEntryStruct", type: "struct" },
        Field({ name: "Endpoint", id: 0x0, type: "endpoint-no", conformance: "M" }),
        Field({ name: "Cluster", id: 0x1, type: "cluster-id", conformance: "M" }),
        Field(
            { name: "Restrictions", id: 0x2, type: "list", constraint: "min 1", conformance: "M" },
            Field({ name: "entry", type: "AccessRestrictionStruct" })
        )
    )
);

MatterDefinition.children.push(AccessControl);
