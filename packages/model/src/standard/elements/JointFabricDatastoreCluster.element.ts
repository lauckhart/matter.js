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

export const JointFabricDatastoreCluster = Cluster(
    { name: "JointFabricDatastoreCluster", id: 0x752 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute({ name: "AnchorRootCa", id: 0x0, type: "octstr", conformance: "M", access: "R S A" }),
    Attribute({ name: "AnchorNodeId", id: 0x1, type: "node-id", conformance: "M", access: "R S A" }),
    Attribute({ name: "AnchorVendorId", id: 0x2, type: "vendor-id", conformance: "M", access: "R S A" }),
    Attribute({ name: "FriendlyName", id: 0x3, type: "string", constraint: "max 32", conformance: "M", access: "R S A" }),
    Attribute(
        { name: "GroupKeySetList", id: 0x4, type: "list", conformance: "M", access: "R S A" },
        Field({ name: "entry", type: "GroupKeyManagement.GroupKeySetStruct" })
    ),
    Attribute(
        { name: "GroupList", id: 0x5, type: "list", conformance: "M", access: "R S A" },
        Field({ name: "entry", type: "DatastoreGroupInformationEntry" })
    ),
    Attribute(
        { name: "NodeList", id: 0x6, type: "list", conformance: "M", access: "R S A" },
        Field({ name: "entry", type: "DatastoreNodeInformationEntry" })
    ),
    Attribute(
        { name: "AdminList", id: 0x7, type: "list", conformance: "M", access: "R S A" },
        Field({ name: "entry", type: "DatastoreAdministratorInformationEntry" })
    ),
    Attribute({ name: "StatusEntry", id: 0x8, type: "DatastoreAdministratorInformationEntry", conformance: "M", access: "R S A" }),
    Command({ name: "Section112471", id: 0x0, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command({ name: "Section112472", id: 0x1, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command({ name: "Section112473", id: 0x2, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command({ name: "Section112474", id: 0x3, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command({ name: "Section112475", id: 0x4, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command({ name: "Section112476", id: 0x5, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command({ name: "Section112477", id: 0x6, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command({ name: "Section112478", id: 0x7, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command({ name: "Section112479", id: 0x8, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command({ name: "Section1124710", id: 0x9, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command({ name: "Section1124711", id: 0xa, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command({ name: "Section1124712", id: 0xb, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command({ name: "Section1124713", id: 0xc, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command({ name: "Section1124714", id: 0xd, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command({ name: "Section1124715", id: 0xe, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command({ name: "Section1124716", id: 0xf, conformance: "M", access: "F A", direction: "request", response: "status" }),
    Command(
        { name: "Section1124717", id: 0x10, conformance: "M", access: "F A", direction: "request", response: "status" }
    ),
    Command(
        { name: "Section1124718", id: 0x11, conformance: "M", access: "F A", direction: "request", response: "status" }
    ),
    Command(
        { name: "Section1124719", id: 0x12, conformance: "M", access: "F A", direction: "request", response: "status" }
    ),
    Command(
        { name: "Section1124720", id: 0x13, conformance: "M", access: "F A", direction: "request", response: "status" }
    ),

    Datatype(
        { name: "DatastoreStateEnum", type: "enum8" },
        Field({ name: "Pending", id: 0x0, conformance: "M" }),
        Field({ name: "Committed", id: 0x1, conformance: "M" }),
        Field({ name: "DeletePending", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "DatastoreStatusEntry", type: "struct" },
        Field({ name: "State", id: 0x0, type: "DatastoreStateEnum", default: 0, conformance: "M", access: "R F V" }),
        Field({ name: "UpdateTimestamp", id: 0x1, type: "epoch-s", default: null, conformance: "M", access: "R F V" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreNodeKeyEntry", type: "struct" },
        Field({ name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M", access: "R F V" }),
        Field({ name: "StatusEntry", id: 0x1, type: "DatastoreStatusEntry", conformance: "M", access: "R F V" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreGroupInformationEntry", type: "struct" },
        Field({ name: "GroupId", id: 0x0, type: "uint64", conformance: "M", access: "R F V" }),
        Field({ name: "FriendlyName", id: 0x1, type: "string", constraint: "max 32", conformance: "M", access: "R F V" }),
        Field({ name: "GroupKeySetId", id: 0x2, type: "uint16", constraint: "1 to 65535", conformance: "M", access: "R F V" }),
        Field({ name: "GroupCat", id: 0x3, type: "uint16", constraint: "1 to 65535", conformance: "M", access: "R F V" }),
        Field({
            name: "GroupCatVersion", id: 0x4, type: "uint16",
            constraint: "1 to 65535", conformance: "M", access: "R F V"
        }),
        Field({
            name: "GroupPermission", id: 0x5, type: "AccessControl.AccessControlEntryPrivilegeEnum",
            conformance: "M", access: "R F V"
        }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreBindingEntry", type: "struct" },
        Field({ name: "ListId", id: 0x0, type: "uint16", conformance: "M", access: "R F V" }),
        Field({
            name: "Binding", id: 0x1, type: "Binding.TargetStruct",
            constraint: "desc", conformance: "M", access: "R F V"
        }),
        Field({ name: "StatusEntry", id: 0x2, type: "DatastoreStatusEntry", conformance: "M", access: "R F V" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreGroupIDEntry", type: "struct" },
        Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M", access: "R F V" }),
        Field({ name: "StatusEntry", id: 0x1, type: "DatastoreStatusEntry", conformance: "M", access: "R F V" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreEndpointEntry", type: "struct" },
        Field({ name: "EndpointId", id: 0x0, type: "endpoint-no", conformance: "M", access: "R F V" }),
        Field({ name: "NodeId", id: 0x1, type: "node-id", conformance: "M", access: "R F V" }),
        Field({ name: "FriendlyName", id: 0x2, type: "string", constraint: "max 32", conformance: "M", access: "R F V" }),
        Field({ name: "StatusEntry", id: 0x3, type: "DatastoreStatusEntry", conformance: "M", access: "R F V" }),
        Field(
            { name: "GroupIdList", id: 0x4, type: "list", conformance: "M", access: "R F V" },
            Field({ name: "entry", type: "DatastoreGroupIDEntry" })
        ),
        Field(
            { name: "BindingList", id: 0x5, type: "list", conformance: "M", access: "R F V" },
            Field({ name: "entry", type: "DatastoreBindingEntry" })
        ),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreACLEntry", type: "struct" },
        Field({ name: "ListId", id: 0x0, type: "uint16", conformance: "M", access: "R F V" }),
        Field({
            name: "AclEntry", id: 0x1, type: "AccessControl.AccessControlEntryStruct",
            conformance: "M", access: "R F V"
        }),
        Field({ name: "StatusEntry", id: 0x2, type: "DatastoreStatusEntry", conformance: "M", access: "R F V" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreNodeInformationEntry", type: "struct" },
        Field({ name: "NodeId", id: 0x1, type: "node-id", conformance: "M", access: "R F V" }),
        Field({ name: "FriendlyName", id: 0x2, type: "string", constraint: "max 32", conformance: "M", access: "R F V" }),
        Field({ name: "CommissioningStatusEntry", id: 0x3, type: "DatastoreStatusEntry", conformance: "M", access: "R F V" }),
        Field(
            { name: "NodeKeySetList", id: 0x4, type: "list", conformance: "M", access: "R F V" },
            Field({ name: "entry", type: "DatastoreNodeKeyEntry" })
        ),
        Field(
            { name: "AclList", id: 0x5, type: "list", conformance: "M", access: "R F V" },
            Field({ name: "entry", type: "DatastoreACLEntry" })
        ),
        Field(
            { name: "EndpointList", id: 0x6, type: "list", conformance: "M", access: "R F V" },
            Field({ name: "entry", type: "DatastoreEndpointEntry" })
        ),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreAdministratorInformationEntry", type: "struct" },
        Field({ name: "NodeId", id: 0x1, type: "node-id", conformance: "M", access: "R F V" }),
        Field({ name: "FriendlyName", id: 0x2, type: "string", constraint: "max 32", conformance: "M", access: "R F V" }),
        Field({ name: "VendorId", id: 0x3, type: "vendor-id", conformance: "M", access: "R F V" }),
        Field({ name: "Icac", id: 0x4, type: "octstr", constraint: "max 400", conformance: "M", access: "R F V" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    )
);

MatterDefinition.children.push(JointFabricDatastoreCluster);
