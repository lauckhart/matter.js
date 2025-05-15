/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "JointFabricDatastoreCluster", tag: "cluster",
    classification: "node", pics: "JFDS",

    details: "The Joint Fabric Datastore Cluster is a cluster that provides a mechanism for the Joint Fabric " +
        "Administrators to manage the set of Nodes, Groups, and Group membership among Nodes in the Joint " +
        "Fabric." +
        "\n" +
        "When an Ecosystem Administrator Node is commissioned onto the Joint Fabric, the Ecosystem " +
        "Administrator Node has no knowledge of what Nodes and Groups are present, or what set-up information " +
        "related to the Joint Fabric is provided by the user. To address lack of knowledge, the Joint Fabric " +
        "Datastore provides the information required for all Ecosystem Administrators to maintain a " +
        "consistent view of the Joint Fabric including Nodes, Groups, settings and privileges." +
        "\n" +
        "The Joint Fabric Datastore cluster server shall only be accessible on a Node which is acting as the " +
        "Joint Fabric Anchor Administrator. When not acting as the Joint Fabric Anchor Administrator, the " +
        "Joint Fabric Datastore cluster shall NOT be accessible." +
        "\n" +
        "The Admin level of access to the Joint Fabric Datastore cluster server shall be limited to JF " +
        "Administrator Nodes identified using the Administrator CAT." +
        "\n" +
        "NOTE Support for Joint Fabric Datastore cluster is provisional.",

    xref: "core§11.24",

    children: [
        {
            name: "AnchorRootCa", tag: "attribute",
            details: "This shall indicate the Anchor Root CA used to sign all NOC Issuers in the Joint Fabric. A null " +
                "value indicates that the Joint Fabric is not yet formed.",
            xref: "core§11.24.6.1"
        },

        {
            name: "AnchorNodeId", tag: "attribute",
            details: "This shall indicate the Node identifier of the Joint Fabric Anchor Root CA.",
            xref: "core§11.24.6.2"
        },
        {
            name: "AnchorVendorId", tag: "attribute",
            details: "This shall indicate the Vendor identifier of the Joint Fabric Anchor Root CA.",
            xref: "core§11.24.6.3"
        },
        {
            name: "FriendlyName", tag: "attribute",
            details: "Friendly name for this fabric which can be propagated to nodes.",
            xref: "core§11.24.6.4"
        },

        {
            name: "GroupKeySetList", tag: "attribute",
            details: "This shall indicate the list of GroupKeySetStruct used in the Joint Fabric." +
                "\n" +
                "This attribute shall contain at least one entry, the IPK, which has GroupKeySetID of 0.",
            xref: "core§11.24.6.5"
        },

        {
            name: "GroupList", tag: "attribute",
            details: "This shall indicate the list of groups in the Joint Fabric.",
            xref: "core§11.24.6.6"
        },
        {
            name: "NodeList", tag: "attribute",
            details: "This shall indicate the list of nodes in the Joint Fabric.",
            xref: "core§11.24.6.7"
        },

        {
            name: "AdminList", tag: "attribute",

            details: "This shall indicate the list of administrators in the Joint Fabric." +
                "\n" +
                "Only one Administrator may serve as the Anchor Root CA and Anchor Fabric Administrator and shall " +
                "have index value 0. All other Joint Fabric Administrators shall be referenced at index 1 or greater." +
                "\n" +
                "A null value or empty list indicates that the Joint Fabric is not yet formed.",

            xref: "core§11.24.6.8"
        },

        {
            name: "StatusEntry", tag: "attribute",
            details: "This shall indicate the current state of the Joint Fabric Datastore Cluster." +
                "\n" +
                "The Committed status indicates the DataStore is ready for use. The Pending status indicates that the " +
                "DataStore is not yet ready for use. The DeletePending status indicates that the DataStore is in the " +
                "process of being transferred to another Joint Fabric Anchor Administrator.",
            xref: "core§11.24.6.9"
        },

        { name: "Section112471", tag: "command", xref: "core§11.24.7" },
        { name: "Section112472", tag: "command", xref: "core§11.24.7" },
        { name: "Section112473", tag: "command", xref: "core§11.24.7" },
        { name: "Section112474", tag: "command", xref: "core§11.24.7" },
        { name: "Section112475", tag: "command", xref: "core§11.24.7" },
        { name: "Section112476", tag: "command", xref: "core§11.24.7" },
        { name: "Section112477", tag: "command", xref: "core§11.24.7" },
        { name: "Section112478", tag: "command", xref: "core§11.24.7" },
        { name: "Section112479", tag: "command", xref: "core§11.24.7" },
        { name: "Section1124710", tag: "command", xref: "core§11.24.7" },
        { name: "Section1124711", tag: "command", xref: "core§11.24.7" },
        { name: "Section1124712", tag: "command", xref: "core§11.24.7" },
        { name: "Section1124713", tag: "command", xref: "core§11.24.7" },
        { name: "Section1124714", tag: "command", xref: "core§11.24.7" },
        { name: "Section1124715", tag: "command", xref: "core§11.24.7" },
        { name: "Section1124716", tag: "command", xref: "core§11.24.7" },
        { name: "Section1124717", tag: "command", xref: "core§11.24.7" },
        { name: "Section1124718", tag: "command", xref: "core§11.24.7" },
        { name: "Section1124719", tag: "command", xref: "core§11.24.7" },
        { name: "Section1124720", tag: "command", xref: "core§11.24.7" },

        {
            name: "DatastoreStateEnum", tag: "datatype",
            xref: "core§11.24.5.1",
            children: [
                { name: "Pending", tag: "field", description: "Target device operation is pending" },
                { name: "Committed", tag: "field", description: "Target device operation has been committed" },
                { name: "DeletePending", tag: "field", description: "Target device delete operation is pending" }
            ]
        },

        {
            name: "DatastoreStatusEntry", tag: "datatype",
            xref: "core§11.24.5.2",

            children: [
                {
                    name: "State", tag: "field",
                    details: "This field shall contain the current state of the target device operation.",
                    xref: "core§11.24.5.2.1"
                },
                {
                    name: "UpdateTimestamp", tag: "field",
                    details: "This field shall contain the timestamp of the last update.",
                    xref: "core§11.24.5.2.2"
                }
            ]
        },

        {
            name: "DatastoreNodeKeyEntry", tag: "datatype",
            xref: "core§11.24.5.3",
            children: [{
                name: "StatusEntry", tag: "field",
                details: "Indicates whether entry in this list is pending, committed, or delete-pending.",
                xref: "core§11.24.5.3.2"
            }]
        },

        {
            name: "DatastoreGroupInformationEntry", tag: "datatype",
            xref: "core§11.24.5.4",

            children: [
                {
                    name: "GroupId", tag: "field",
                    details: "The unique identifier for the group.",
                    xref: "core§11.24.5.4.1"
                },
                {
                    name: "FriendlyName", tag: "field",
                    details: "The friendly name for the group.",
                    xref: "core§11.24.5.4.2"
                },
                {
                    name: "GroupKeySetId", tag: "field",
                    details: "The unique identifier for the group key set.",
                    xref: "core§11.24.5.4.3"
                },

                {
                    name: "GroupCat", tag: "field",
                    details: "CAT value for this group. This is used for control of individual members of a group (non-broadcast " +
                        "commands).",
                    xref: "core§11.24.5.4.4"
                },

                {
                    name: "GroupCatVersion", tag: "field",
                    details: "Current version number for this CAT.",
                    xref: "core§11.24.5.4.5"
                },

                {
                    name: "GroupPermission", tag: "field",
                    details: "The permission level associated with ACL entries for this group. There should be only one " +
                        "Administrator group per fabric, and at most one Manage group per Ecosystem (Vendor Entry).",
                    xref: "core§11.24.5.4.6"
                }
            ]
        },

        {
            name: "DatastoreBindingEntry", tag: "datatype",
            xref: "core§11.24.5.4.7",

            children: [
                {
                    name: "ListId", tag: "field",
                    details: "The unique identifier for the Binding entry in the Datastore’s list of DatastoreBindingEntry.",
                    xref: "core§11.24.5.4.7.1"
                },
                { name: "Binding", tag: "field", details: "The binding target structure.", xref: "core§11.24.5.4.7.2" },
                {
                    name: "StatusEntry", tag: "field",
                    details: "Indicates whether entry in this list is pending, committed, or delete-pending.",
                    xref: "core§11.24.5.4.7.3"
                }
            ]
        },

        {
            name: "DatastoreGroupIDEntry", tag: "datatype",
            xref: "core§11.24.5.5",

            children: [
                {
                    name: "GroupId", tag: "field",
                    details: "The unique identifier for the group.",
                    xref: "core§11.24.5.5.1"
                },
                {
                    name: "StatusEntry", tag: "field",
                    details: "Indicates whether entry in this list is pending, committed, or delete-pending.",
                    xref: "core§11.24.5.5.2"
                }
            ]
        },

        {
            name: "DatastoreEndpointEntry", tag: "datatype",
            xref: "core§11.24.5.6",

            children: [
                {
                    name: "EndpointId", tag: "field",
                    details: "The unique identifier for the endpoint.",
                    xref: "core§11.24.5.6.1"
                },
                {
                    name: "NodeId", tag: "field",
                    details: "The unique identifier for the node.",
                    xref: "core§11.24.5.6.2"
                },

                {
                    name: "FriendlyName", tag: "field",
                    details: "Friendly name for this endpoint which is propagated to nodes. Any changes to Friendly Name or Group " +
                        "Id List (add/remove entry) must follow the pending→committed workflow with current state reflected " +
                        "in the Status Entry.",
                    xref: "core§11.24.5.6.3"
                },

                {
                    name: "StatusEntry", tag: "field",
                    details: "Indicates whether changes to Friendly Name are pending or committed.",
                    xref: "core§11.24.5.6.4"
                },

                {
                    name: "GroupIdList", tag: "field",
                    details: "List of Group IDs that this endpoint is a member of. Any changes to Group Id List (add/remove entry) " +
                        "must follow the pending→committed workflow with current state reflected in the Status Entry.",
                    xref: "core§11.24.5.6.5"
                },

                {
                    name: "BindingList", tag: "field",
                    details: "List of Binding Targets for this endpoint. Any changes to Binding List (add/remove entry) must " +
                        "follow the pending→committed workflow with current state reflected in the Status Entry.",
                    xref: "core§11.24.5.6.6"
                }
            ]
        },

        {
            name: "DatastoreACLEntry", tag: "datatype",
            xref: "core§11.24.5.7",

            children: [
                {
                    name: "ListId", tag: "field",
                    details: "The unique identifier for the ACL entry in the Datastore’s list of DatastoreACLEntry.",
                    xref: "core§11.24.5.7.1"
                },
                {
                    name: "AclEntry", tag: "field",
                    details: "The Access Control Entry structure.",
                    xref: "core§11.24.5.7.2"
                },
                {
                    name: "StatusEntry", tag: "field",
                    details: "Indicates whether entry in this list is pending, committed, or delete-pending.",
                    xref: "core§11.24.5.7.3"
                }
            ]
        },

        {
            name: "DatastoreNodeInformationEntry", tag: "datatype",
            xref: "core§11.24.5.8",

            children: [
                {
                    name: "NodeId", tag: "field",
                    details: "The unique identifier for the node.",
                    xref: "core§11.24.5.8.1"
                },
                {
                    name: "FriendlyName", tag: "field",
                    details: "Friendly name for this node which is not propagated to nodes.",
                    xref: "core§11.24.5.8.2"
                },

                {
                    name: "CommissioningStatusEntry", tag: "field",
                    details: "Set to pending prior to completing commissioning, and set to completed after commissioning complete " +
                        "is successful.",
                    xref: "core§11.24.5.8.3"
                },

                {
                    name: "NodeKeySetList", tag: "field",
                    details: "List of Key Set information for the given Node. Updates to the Group Key List must follow the " +
                        "pending→committed workflow with current state reflected in the Status Entry for the corresponding " +
                        "entry in the list.",
                    xref: "core§11.24.5.8.4"
                },

                {
                    name: "AclList", tag: "field",
                    details: "List of ACL entries. Group membership for this node is inferred from the ACLs. Client access to a " +
                        "Node Information Entry will be determined from the ACL List. Any changes to ACL List (add/remove " +
                        "entry) must follow the pending→committed workflow with current state reflected in the Status Entry " +
                        "for the corresponding entry in the list.",
                    xref: "core§11.24.5.8.5"
                },

                {
                    name: "EndpointList", tag: "field",
                    details: "The list of endpoints for this node. Any changes to Endpoint List (add/remove entry) must follow the " +
                        "pending→committed workflow with current state reflected in the Status Entry for the corresponding " +
                        "entry in the list.",
                    xref: "core§11.24.5.8.6"
                }
            ]
        },

        {
            name: "DatastoreAdministratorInformationEntry", tag: "datatype",
            xref: "core§11.24.5.9",

            children: [
                {
                    name: "NodeId", tag: "field",
                    details: "The unique identifier for the node.",
                    xref: "core§11.24.5.9.1"
                },
                {
                    name: "FriendlyName", tag: "field",
                    details: "Friendly name for this node which is not propagated to nodes.",
                    xref: "core§11.24.5.9.2"
                },
                { name: "VendorId", tag: "field", details: "The Vendor ID for the node.", xref: "core§11.24.5.9.3" },
                { name: "Icac", tag: "field", details: "The ICAC used to issue the NOC.", xref: "core§11.24.5.9.4" }
            ]
        }
    ]
});
