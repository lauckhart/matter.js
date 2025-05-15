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
    { id: 0x752, name: "JointFabricDatastoreCluster" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute({ id: 0x0, name: "AnchorRootCa", type: "octstr", access: "R S A", conformance: "M" }),
    Attribute({ id: 0x1, name: "AnchorNodeId", type: "node-id", access: "R S A", conformance: "M" }),
    Attribute({ id: 0x2, name: "AnchorVendorId", type: "vendor-id", access: "R S A", conformance: "M" }),
    Attribute({ id: 0x3, name: "FriendlyName", type: "string", access: "R S A", conformance: "M", constraint: "max 32" }),
    Attribute(
        { id: 0x4, name: "GroupKeySetList", type: "list", access: "R S A", conformance: "M" },
        Field({ name: "entry", type: "GroupKeyManagement.GroupKeySetStruct" })
    ),
    Attribute(
        { id: 0x5, name: "GroupList", type: "list", access: "R S A", conformance: "M" },
        Field({ name: "entry", type: "DatastoreGroupInformationEntry" })
    ),
    Attribute(
        { id: 0x6, name: "NodeList", type: "list", access: "R S A", conformance: "M" },
        Field({ name: "entry", type: "DatastoreNodeInformationEntry" })
    ),
    Attribute(
        { id: 0x7, name: "AdminList", type: "list", access: "R S A", conformance: "M" },
        Field({ name: "entry", type: "DatastoreAdministratorInformationEntry" })
    ),
    Attribute({ id: 0x8, name: "StatusEntry", type: "DatastoreAdministratorInformationEntry", access: "R S A", conformance: "M" }),
    Command({ id: 0x0, name: "Section112471", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0x1, name: "Section112472", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0x2, name: "Section112473", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0x3, name: "Section112474", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0x4, name: "Section112475", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0x5, name: "Section112476", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0x6, name: "Section112477", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0x7, name: "Section112478", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0x8, name: "Section112479", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0x9, name: "Section1124710", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0xa, name: "Section1124711", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0xb, name: "Section1124712", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0xc, name: "Section1124713", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0xd, name: "Section1124714", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0xe, name: "Section1124715", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0xf, name: "Section1124716", access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command(
        { id: 0x10, name: "Section1124717", access: "F A", conformance: "M", direction: "request", response: "status" }
    ),
    Command(
        { id: 0x11, name: "Section1124718", access: "F A", conformance: "M", direction: "request", response: "status" }
    ),
    Command(
        { id: 0x12, name: "Section1124719", access: "F A", conformance: "M", direction: "request", response: "status" }
    ),
    Command(
        { id: 0x13, name: "Section1124720", access: "F A", conformance: "M", direction: "request", response: "status" }
    ),

    Datatype(
        { name: "DatastoreStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "Pending", conformance: "M" }),
        Field({ id: 0x1, name: "Committed", conformance: "M" }),
        Field({ id: 0x2, name: "DeletePending", conformance: "M" })
    ),

    Datatype(
        { name: "DatastoreStatusEntry", type: "struct" },
        Field({ id: 0x0, name: "State", type: "DatastoreStateEnum", access: "R F V", conformance: "M", default: 0 }),
        Field({ id: 0x1, name: "UpdateTimestamp", type: "epoch-s", access: "R F V", conformance: "M", default: null }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreNodeKeyEntry", type: "struct" },
        Field({ id: 0x0, name: "GroupKeySetId", type: "uint16", access: "R F V", conformance: "M" }),
        Field({ id: 0x1, name: "StatusEntry", type: "DatastoreStatusEntry", access: "R F V", conformance: "M" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreGroupInformationEntry", type: "struct" },
        Field({ id: 0x0, name: "GroupId", type: "uint64", access: "R F V", conformance: "M" }),
        Field({ id: 0x1, name: "FriendlyName", type: "string", access: "R F V", conformance: "M", constraint: "max 32" }),
        Field({ id: 0x2, name: "GroupKeySetId", type: "uint16", access: "R F V", conformance: "M", constraint: "1 to 65535" }),
        Field({ id: 0x3, name: "GroupCat", type: "uint16", access: "R F V", conformance: "M", constraint: "1 to 65535" }),
        Field({
            id: 0x4, name: "GroupCatVersion", type: "uint16",
            access: "R F V", conformance: "M", constraint: "1 to 65535"
        }),
        Field({
            id: 0x5, name: "GroupPermission", type: "AccessControl.AccessControlEntryPrivilegeEnum",
            access: "R F V", conformance: "M"
        }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreBindingEntry", type: "struct" },
        Field({ id: 0x0, name: "ListId", type: "uint16", access: "R F V", conformance: "M" }),
        Field({
            id: 0x1, name: "Binding", type: "Binding.TargetStruct",
            access: "R F V", conformance: "M", constraint: "desc"
        }),
        Field({ id: 0x2, name: "StatusEntry", type: "DatastoreStatusEntry", access: "R F V", conformance: "M" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreGroupIDEntry", type: "struct" },
        Field({ id: 0x0, name: "GroupId", type: "group-id", access: "R F V", conformance: "M" }),
        Field({ id: 0x1, name: "StatusEntry", type: "DatastoreStatusEntry", access: "R F V", conformance: "M" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreEndpointEntry", type: "struct" },
        Field({ id: 0x0, name: "EndpointId", type: "endpoint-no", access: "R F V", conformance: "M" }),
        Field({ id: 0x1, name: "NodeId", type: "node-id", access: "R F V", conformance: "M" }),
        Field({ id: 0x2, name: "FriendlyName", type: "string", access: "R F V", conformance: "M", constraint: "max 32" }),
        Field({ id: 0x3, name: "StatusEntry", type: "DatastoreStatusEntry", access: "R F V", conformance: "M" }),
        Field(
            { id: 0x4, name: "GroupIdList", type: "list", access: "R F V", conformance: "M" },
            Field({ name: "entry", type: "DatastoreGroupIDEntry" })
        ),
        Field(
            { id: 0x5, name: "BindingList", type: "list", access: "R F V", conformance: "M" },
            Field({ name: "entry", type: "DatastoreBindingEntry" })
        ),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreACLEntry", type: "struct" },
        Field({ id: 0x0, name: "ListId", type: "uint16", access: "R F V", conformance: "M" }),
        Field({
            id: 0x1, name: "AclEntry", type: "AccessControl.AccessControlEntryStruct",
            access: "R F V", conformance: "M"
        }),
        Field({ id: 0x2, name: "StatusEntry", type: "DatastoreStatusEntry", access: "R F V", conformance: "M" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreNodeInformationEntry", type: "struct" },
        Field({ id: 0x1, name: "NodeId", type: "node-id", access: "R F V", conformance: "M" }),
        Field({ id: 0x2, name: "FriendlyName", type: "string", access: "R F V", conformance: "M", constraint: "max 32" }),
        Field({ id: 0x3, name: "CommissioningStatusEntry", type: "DatastoreStatusEntry", access: "R F V", conformance: "M" }),
        Field(
            { id: 0x4, name: "NodeKeySetList", type: "list", access: "R F V", conformance: "M" },
            Field({ name: "entry", type: "DatastoreNodeKeyEntry" })
        ),
        Field(
            { id: 0x5, name: "AclList", type: "list", access: "R F V", conformance: "M" },
            Field({ name: "entry", type: "DatastoreACLEntry" })
        ),
        Field(
            { id: 0x6, name: "EndpointList", type: "list", access: "R F V", conformance: "M" },
            Field({ name: "entry", type: "DatastoreEndpointEntry" })
        ),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreAdministratorInformationEntry", type: "struct" },
        Field({ id: 0x1, name: "NodeId", type: "node-id", access: "R F V", conformance: "M" }),
        Field({ id: 0x2, name: "FriendlyName", type: "string", access: "R F V", conformance: "M", constraint: "max 32" }),
        Field({ id: 0x3, name: "VendorId", type: "vendor-id", access: "R F V", conformance: "M" }),
        Field({ id: 0x4, name: "Icac", type: "octstr", access: "R F V", conformance: "M", constraint: "max 400" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    )
);

MatterDefinition.children.push(JointFabricDatastoreCluster);
