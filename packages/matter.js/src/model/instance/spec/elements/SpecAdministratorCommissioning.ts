/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x003c, name: "AdministratorCommissioning",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", type: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", type: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "BC",
                    description: "Node supports Basic Commissioning Method.",
                    xref: { document: "core", section: "11.18.4", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "Window", type: "Commis",
            access: "R V", conformance: "M", default: "",
            xref: { document: "core", section: "11.18.7", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "AdminFabricIndex", type: "fabric-idx",
            access: "R V", conformance: "M", default: 0, quality: "X",
            details: "When the WindowStatus attribute is not set to WindowNotOpen, this " +
                     "attribute SHALL indicate the FabricIndex associated with the Fabric " +
                     "scoping of the Administrator that opened the window. This MAY be used " +
                     "to cross-reference in the Fabrics attribute of the Node Operational " +
                     "Credentials cluster",
            xref: { document: "core", section: "11.18.7.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "AdminVendorId", type: "vendor-id",
            access: "R V", conformance: "M", default: 0, quality: "X",
            details: "When the WindowStatus attribute is not set to WindowNotOpen, this " +
                     "attribute SHALL indicate the Vendor ID associated with the Fabric " +
                     "scoping of the Administrator that opened the window. This field SHALL " +
                     "match the VendorID field of the Fabrics attribute list entry " +
                     "associated with the Administrator having opened the window, at the " +
                     "time of window opening. If the fabric for the Administrator that " +
                     "opened the window is removed from the node while the commissioning " +
                     "window is still open, this attribute SHALL NOT be updated",
            xref: { document: "core", section: "11.18.7.3", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "OpenCommissioningWindow",
            access: "A T", conformance: "M", direction: "request", response: "status",
            xref: { document: "core", section: "11.18.8", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "OpenBasicCommissioningWindow",
            access: "A T", conformance: "BC", direction: "request", response: "status",
            xref: { document: "core", section: "11.18.8", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "RevokeCommissioning",
            access: "A T", conformance: "M", direction: "request", response: "status",
            details: "This command is used by a current Administrator to instruct a Node to " +
                     "revoke any active Open Commissioning Window or Open Basic " +
                     "Commissioning Window command. This is an idempotent command and the " +
                     "Node SHALL (for ECM) delete the temporary PAKEPasscodeVerifier and " +
                     "associated data, and stop publishing the DNS-SD record associated with" +
                     " the Open Commissioning Window or Open Basic Commissioning Window " +
                     "command, see Section 4.3.1, “Commissionable Node Discovery",
            xref: { document: "core", section: "11.18.8.3", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "CommissioningWindowStatusEnum", type: "enum8",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.18.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "WindowNotOpen",
                    conformance: "M",
                    xref: { document: "core", section: "11.18.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "EnhancedWindowOpen",
                    conformance: "M",
                    xref: { document: "core", section: "11.18.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "BasicWindowOpen",
                    conformance: "BC",
                    xref: { document: "core", section: "11.18.5.1", version: "1.1" }
                })
            ]
        })
    ]
}));
