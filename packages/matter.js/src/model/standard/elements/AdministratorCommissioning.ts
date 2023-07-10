/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "AdministratorCommissioning", id: 0x3c, classification: "node",
    description: "Administrator Commissioning",
    details: "Commands to trigger a Node to allow a new Administrator to commission it.",
    xref: { document: "core", section: "11.18" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "core", section: "11.18.4" },
            children: [ {
                tag: "datatype", name: "BC", id: 0x0, description: "Basic",
                details: "Node supports Basic Commissioning Method."
            } ]
        },

        {
            tag: "attribute", name: "WindowStatus", id: 0x0, type: "CommissioningWindowStatusEnum",
            access: "R V", conformance: "M",

            details: "This attribute shall indicate whether a new Commissioning window has been opened by an " +
                     "Administrator, using either the OCW command or the OBCW command." +
                     "\n" +
                     "This attribute shall revert to WindowNotOpen upon expiry of a commissioning window." +
                     "\n" +
                     "Note that an initial commissioning window is not opened using either the OCW command or the OBCW " +
                     "command, and therefore this attribute shall be set to WindowNotOpen on initial commissioning.",

            xref: { document: "core", section: "11.18.7.1" }
        },

        {
            tag: "attribute", name: "AdminFabricIndex", id: 0x1, type: "fabric-idx", access: "R V",
            conformance: "M", quality: "X",

            details: "When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the " +
                     "FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This " +
                     "MAY be used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster." +
                     "\n" +
                     "If, during an open commissioning window, the fabric for the Administrator that opened the window is " +
                     "removed, then this attribute shall be set to null." +
                     "\n" +
                     "When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.",

            xref: { document: "core", section: "11.18.7.2" }
        },

        {
            tag: "attribute", name: "AdminVendorId", id: 0x2, type: "vendor-id", access: "R V",
            conformance: "M", quality: "X",

            details: "When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the " +
                     "Vendor ID associated with the Fabric scoping of the Administrator that opened the window. This " +
                     "field shall match the VendorID field of the Fabrics attribute list entry associated with the " +
                     "Administrator having opened the window, at the time of window opening. If the fabric for the " +
                     "Administrator that opened the window is removed from the node while the commissioning window is " +
                     "still open, this attribute shall NOT be updated." +
                     "\n" +
                     "When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.",

            xref: { document: "core", section: "11.18.7.3" }
        },

        {
            tag: "command", name: "OpenCommissioningWindow", id: 0x0, access: "A T", conformance: "M",
            direction: "request", response: "status",
            xref: { document: "core", section: "11.18.8" },

            children: [
                { tag: "datatype", name: "CommissioningTimeout", type: "uint16", conformance: "M" },
                { tag: "datatype", name: "PakePasscodeVerifier", type: "octstr", conformance: "M" },
                { tag: "datatype", name: "Discriminator", type: "uint16", conformance: "M" },
                { tag: "datatype", name: "Iterations", type: "uint32", conformance: "M" },
                { tag: "datatype", name: "Salt", type: "octstr", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "OpenBasicCommissioningWindow", id: 0x1, access: "A T", conformance: "BC",
            direction: "request", response: "status",
            xref: { document: "core", section: "11.18.8" },
            children: [ { tag: "datatype", name: "CommissioningTimeout", type: "uint16", conformance: "M" } ]
        },

        {
            tag: "command", name: "RevokeCommissioning", id: 0x2, access: "A T", conformance: "M",
            direction: "request", response: "status",

            details: "This command is used by a current Administrator to instruct a Node to revoke any active Open " +
                     "Commissioning Window or Open Basic Commissioning Window command. This is an idempotent command and " +
                     "the Node shall (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop " +
                     "publishing the DNS-SD record associated with the Open Commissioning Window or Open Basic " +
                     "Commissioning Window command, see Section 4.3.1, “Commissionable Node Discovery”." +
                     "\n" +
                     "If no commissioning window was open at time of receipt, this command shall fail with a cluster " +
                     "specific status code of WindowNotOpen.",

            xref: { document: "core", section: "11.18.8.3" }
        },

        {
            tag: "datatype", name: "StatusCode", type: "status",

            children: [
                {
                    tag: "datatype", name: "Busy", id: 0x2,
                    details: "Could not be completed because another commissioning is in progress",
                    xref: { document: "core", section: "11.18.6" }
                },
                {
                    tag: "datatype", name: "PakeParameterError", id: 0x3,
                    details: "Provided PAKE parameters were incorrectly formatted or otherwise invalid",
                    xref: { document: "core", section: "11.18.6" }
                },
                {
                    tag: "datatype", name: "WindowNotOpen", id: 0x4,
                    details: "No commissioning window was currently open",
                    xref: { document: "core", section: "11.18.6" }
                }
            ]
        },

        {
            tag: "datatype", name: "CommissioningWindowStatusEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.18.5.1" },
            children: [
                { tag: "datatype", name: "WindowNotOpen", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "EnhancedWindowOpen", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "BasicWindowOpen", id: 0x2, conformance: "BC" }
            ]
        }
    ]
});
