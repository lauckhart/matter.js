/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x003c, name: "AdministratorCommissioning",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "Window", base: "Commis",
            access: "R V", conformance: "M", constraint: "", value: "",
            xref: { section: "11.18.7", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "AdminFabricIndex", base: "fabric-idx",
            access: "R V", conformance: "M", constraint: "", value: "", quality: "X",
            details: "When the WindowStatus attribute is not set to WindowNotOpen, this attribute SHALL indicate the FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This MAY be used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster.",
            xref: { section: "11.18.7.2", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "AdminVendorId", base: "vendor-id",
            access: "R V", conformance: "M", constraint: "", value: "", quality: "X",
            details: "When the WindowStatus attribute is not set to WindowNotOpen, this attribute SHALL indicate the Vendor ID associated with the Fabric scoping of the Administrator that opened the window. This field SHALL match the VendorID field of the Fabrics attribute list entry associated with the Administrator having opened the window, at the time of window opening. If the fabric for the Administrator that opened the window is removed from the node while the commissioning window is still open, this attribute SHALL NOT be updated.",
            xref: { section: "11.18.7.3", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "CommissioningWindowStatusEnum", base: "enum8",
            details: "This data type is derived from enum8.",
            xref: { section: "11.18.5.1", document: "core", version: "1.1" }
        })
    ]
}));
