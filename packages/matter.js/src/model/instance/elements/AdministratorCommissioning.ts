/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x003c, name: "AdministratorCommissioning",
    classification: "node", description: "Administrator Commissioning",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "Window",
            access: "R V", conformance: "M", default: "", type: "Commis",
            xref: { document: "core", section: "11.18.7" }
        },

        {
            tag: "attribute", id: 0x0001, name: "AdminFabricIndex",
            access: "R V", conformance: "M", default: 0, quality: "X", type: "fabric-idx",
            details: "When the WindowStatus attribute is not set to WindowNotOpen, this " +
                     "attribute SHALL indicate the FabricIndex associated with the Fabric " +
                     "scoping of the Administrator that opened the window. This MAY be used " +
                     "to cross-reference in the Fabrics attribute of the Node Operational " +
                     "Credentials cluster",
            xref: { document: "core", section: "11.18.7.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "AdminVendorId",
            access: "R V", conformance: "M", default: 0, quality: "X", type: "uint16",
            details: "When the WindowStatus attribute is not set to WindowNotOpen, this " +
                     "attribute SHALL indicate the Vendor ID associated with the Fabric " +
                     "scoping of the Administrator that opened the window. This field SHALL " +
                     "match the VendorID field of the Fabrics attribute list entry " +
                     "associated with the Administrator having opened the window, at the " +
                     "time of window opening. If the fabric for the Administrator that " +
                     "opened the window is removed from the node while the commissioning " +
                     "window is still open, this attribute SHALL NOT be updated",
            xref: { document: "core", section: "11.18.7.3" }
        },

        {
            tag: "attribute", id: 0x0000, name: "WindowStatus",
            conformance: "M", type: "CommissioningWindowStatusEnum"
        },

        {
            tag: "command", id: 0x0000, name: "OpenCommissioningWindow",
            access: "R A", conformance: "M", direction: "request", response: "status",
            xref: { document: "core", section: "11.18.8" },
            children: [
                {
                    tag: "datatype", name: "CommissioningTimeout",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "PakePasscodeVerifier",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "Discriminator",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "Iterations",
                    conformance: "M", type: "uint32"
                },

                {
                    tag: "datatype", name: "Salt",
                    conformance: "M", type: "octstr"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "OpenBasicCommissioningWindow",
            access: "R A", conformance: "BC", direction: "request", response: "status",
            xref: { document: "core", section: "11.18.8" },
            children: [
                {
                    tag: "datatype", name: "CommissioningTimeout",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "RevokeCommissioning",
            access: "R A", conformance: "M", direction: "request", response: "status",
            details: "This command is used by a current Administrator to instruct a Node to " +
                     "revoke any active Open Commissioning Window or Open Basic " +
                     "Commissioning Window command. This is an idempotent command and the " +
                     "Node SHALL (for ECM) delete the temporary PAKEPasscodeVerifier and " +
                     "associated data, and stop publishing the DNS-SD record associated with" +
                     " the Open Commissioning Window or Open Basic Commissioning Window " +
                     "command, see Section 4.3.1, “Commissionable Node Discovery",
            xref: { document: "core", section: "11.18.8.3" }
        },

        {
            tag: "datatype", name: "CommissioningWindowStatusEnum",
            conformance: "M", type: "enum8",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.18.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "WindowNotOpen",
                    conformance: "M",
                    xref: { document: "core", section: "11.18.5.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "EnhancedWindowOpen",
                    conformance: "M",
                    xref: { document: "core", section: "11.18.5.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "BasicWindowOpen",
                    conformance: "BC",
                    xref: { document: "core", section: "11.18.5.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "StatusCode",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0002, name: "Busy",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "PakeParameterError",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "WindowNotOpen",
                    conformance: "M"
                }
            ]
        }
    ]
});
