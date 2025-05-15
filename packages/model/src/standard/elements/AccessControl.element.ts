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
    { id: 0x1f, name: "AccessControl" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "EXTS", conformance: "O", constraint: "0", longName: "Extension" }),
        Field({ name: "MNGD", conformance: "desc", constraint: "1", longName: "ManagedDevice" })
    ),
    Attribute(
        { id: 0x0, name: "Acl", type: "list", access: "RW F A", conformance: "M", constraint: "desc" },
        Field({ name: "entry", type: "AccessControlEntryStruct" })
    ),
    Attribute(
        { id: 0x1, name: "Extension", type: "list", access: "RW F A", conformance: "EXTS", constraint: "desc" },
        Field({ name: "entry", type: "AccessControlExtensionStruct" })
    ),
    Attribute({
        id: 0x2, name: "SubjectsPerAccessControlEntry", type: "uint16",
        access: "R V", conformance: "M", constraint: "min 4", default: 4, quality: "F"
    }),
    Attribute({
        id: 0x3, name: "TargetsPerAccessControlEntry", type: "uint16",
        access: "R V", conformance: "M", constraint: "min 3", default: 3, quality: "F"
    }),
    Attribute({
        id: 0x4, name: "AccessControlEntriesPerFabric", type: "uint16",
        access: "R V", conformance: "M", constraint: "min 4", default: 4, quality: "F"
    }),

    Attribute(
        {
            id: 0x5, name: "CommissioningArL", type: "list",
            access: "R V", conformance: "MNGD", constraint: "desc", default: [], quality: "F"
        },
        Field({ name: "entry", type: "CommissioningAccessRestrictionEntryStruct" })
    ),

    Attribute(
        { id: 0x6, name: "Arl", type: "list", access: "R F V", conformance: "MNGD", constraint: "desc", default: [] },
        Field({ name: "entry", type: "AccessRestrictionEntryStruct" })
    ),

    Event(
        { id: 0x0, name: "AccessControlEntryChanged", access: "S A", conformance: "M", priority: "info" },
        Field({
            id: 0x1, name: "AdminNodeId", type: "node-id",
            access: "S", conformance: "M", constraint: "desc", quality: "X"
        }),
        Field({
            id: 0x2, name: "AdminPasscodeId", type: "uint16",
            access: "S", conformance: "M", constraint: "desc", quality: "X"
        }),
        Field({ id: 0x3, name: "ChangeType", type: "ChangeTypeEnum", access: "S", conformance: "M" }),
        Field({ id: 0x4, name: "LatestValue", type: "AccessControlEntryStruct", access: "S", conformance: "M", quality: "X" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Event(
        { id: 0x1, name: "AccessControlExtensionChanged", access: "S A", conformance: "EXTS", priority: "info" },
        Field({
            id: 0x1, name: "AdminNodeId", type: "node-id",
            access: "S", conformance: "M", constraint: "desc", quality: "X"
        }),
        Field({
            id: 0x2, name: "AdminPasscodeId", type: "uint16",
            access: "S", conformance: "M", constraint: "desc", quality: "X"
        }),
        Field({ id: 0x3, name: "ChangeType", type: "ChangeTypeEnum", access: "S", conformance: "M" }),
        Field({
            id: 0x4, name: "LatestValue", type: "AccessControlExtensionStruct",
            access: "S", conformance: "M", quality: "X"
        }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Event(
        { id: 0x2, name: "FabricRestrictionReviewUpdate", access: "S A", conformance: "MNGD", priority: "info" },
        Field({ id: 0x0, name: "Token", type: "uint64", access: "S", conformance: "M" }),
        Field({ id: 0x1, name: "Instruction", type: "string", access: "S", conformance: "O", constraint: "max 512" }),
        Field({ id: 0x2, name: "ArlRequestFlowUrl", type: "string", access: "S", conformance: "O", constraint: "max 256" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Command(
        {
            id: 0x0, name: "ReviewFabricRestrictions",
            access: "F A", conformance: "MNGD", direction: "request",
            response: "ReviewFabricRestrictionsResponse"
        },
        Field(
            { id: 0x0, name: "Arl", type: "list", conformance: "M", constraint: "desc" },
            Field({ name: "entry", type: "CommissioningAccessRestrictionEntryStruct" })
        )
    ),

    Command(
        { id: 0x1, name: "ReviewFabricRestrictionsResponse", conformance: "MNGD", direction: "response" },
        Field({ id: 0x0, name: "Token", type: "uint64", conformance: "M" })
    ),

    Datatype(
        { name: "ChangeTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Changed", conformance: "M" }),
        Field({ id: 0x1, name: "Added", conformance: "M" }),
        Field({ id: 0x2, name: "Removed", conformance: "M" })
    ),

    Datatype(
        { name: "AccessControlEntryPrivilegeEnum", type: "enum8" },
        Field({ id: 0x1, name: "View", conformance: "M" }),
        Field({ id: 0x2, name: "ProxyView", conformance: "P, M" }),
        Field({ id: 0x3, name: "Operate", conformance: "M" }),
        Field({ id: 0x4, name: "Manage", conformance: "M" }),
        Field({ id: 0x5, name: "Administer", conformance: "M" })
    ),

    Datatype(
        { name: "AccessRestrictionTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "AttributeAccessForbidden", conformance: "M" }),
        Field({ id: 0x1, name: "AttributeWriteForbidden", conformance: "M" }),
        Field({ id: 0x2, name: "CommandForbidden", conformance: "M" }),
        Field({ id: 0x3, name: "EventForbidden", conformance: "M" })
    ),

    Datatype(
        { name: "AccessControlEntryAuthModeEnum", type: "enum8" },
        Field({ id: 0x1, name: "Pase", conformance: "M" }),
        Field({ id: 0x2, name: "Case", conformance: "M" }),
        Field({ id: 0x3, name: "Group", conformance: "M" })
    ),

    Datatype(
        { name: "AccessControlTargetStruct", type: "struct" },
        Field({ id: 0x0, name: "Cluster", type: "cluster-id", conformance: "M", quality: "X" }),
        Field({ id: 0x1, name: "Endpoint", type: "endpoint-no", conformance: "M", quality: "X" }),
        Field({ id: 0x2, name: "DeviceType", type: "devtype-id", conformance: "M", quality: "X" })
    ),

    Datatype(
        { name: "AccessControlEntryStruct", type: "struct" },
        Field({ id: 0x1, name: "Privilege", type: "AccessControlEntryPrivilegeEnum", access: "S", conformance: "M" }),
        Field({ id: 0x2, name: "AuthMode", type: "AccessControlEntryAuthModeEnum", access: "S", conformance: "M" }),

        Field(
            {
                id: 0x3, name: "Subjects", type: "list",
                access: "S", conformance: "M", constraint: "max subjectsPerAccessControlEntry", quality: "X"
            },
            Field({ name: "entry", type: "subject-id" })
        ),

        Field(
            {
                id: 0x4, name: "Targets", type: "list",
                access: "S", conformance: "M", constraint: "max targetsPerAccessControlEntry", quality: "X"
            },
            Field({ name: "entry", type: "AccessControlTargetStruct" })
        ),

        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "AccessControlExtensionStruct", type: "struct" },
        Field({ id: 0x1, name: "Data", type: "octstr", access: "S", conformance: "M", constraint: "max 128" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),
    Datatype(
        { name: "AccessRestrictionStruct", type: "struct" },
        Field({ id: 0x0, name: "Type", type: "AccessRestrictionTypeEnum", conformance: "M" }),
        Field({ id: 0x1, name: "Id", type: "uint32", conformance: "M", quality: "X" })
    ),

    Datatype(
        { name: "AccessRestrictionEntryStruct", type: "struct" },
        Field({ id: 0x0, name: "Endpoint", type: "endpoint-no", access: "S", conformance: "M" }),
        Field({ id: 0x1, name: "Cluster", type: "cluster-id", access: "S", conformance: "M" }),
        Field(
            { id: 0x2, name: "Restrictions", type: "list", access: "S", conformance: "M", constraint: "min 1" },
            Field({ name: "entry", type: "AccessRestrictionStruct" })
        ),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "CommissioningAccessRestrictionEntryStruct", type: "struct" },
        Field({ id: 0x0, name: "Endpoint", type: "endpoint-no", conformance: "M" }),
        Field({ id: 0x1, name: "Cluster", type: "cluster-id", conformance: "M" }),
        Field(
            { id: 0x2, name: "Restrictions", type: "list", conformance: "M", constraint: "min 1" },
            Field({ name: "entry", type: "AccessRestrictionStruct" })
        )
    )
);

MatterDefinition.children.push(AccessControl);
