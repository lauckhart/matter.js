/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x001d, name: "Descriptor",
    classification: "endpoint",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "DeviceTypeList", base: "list[DeviceTypeStruct]",
            access: "R V", conformance: "M", constraint: "min 1", default: "desc", quality: "F",
            details: "This is a list of device types and corresponding revisions declaring endpoint conformance (see DeviceTypeStruct). At least one device type entry SHALL be present.",
            xref: { section: "9.5.5.1", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "ServerList", base: "list[cluster-id]",
            access: "R V", conformance: "M", constraint: "", default: "empty", quality: "F",
            details: "This attribute SHALL list each cluster ID for the server clusters present on the endpoint instance.",
            xref: { section: "9.5.5.2", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "ClientList", base: "list[cluster-id]",
            access: "R V", conformance: "M", constraint: "", default: "empty", quality: "F",
            details: "This attribute SHALL list each cluster ID for the client clusters present on the endpoint instance.",
            xref: { section: "9.5.5.3", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "PartsList", base: "list[endpoint-no]",
            access: "R V", conformance: "M", constraint: "", default: "empty",
            details: "This attribute indicates composition of the device type instance. Device type instance composition SHALL include the endpoints in this list. See Endpoint Composition for more information which endpoints to include in this list.",
            xref: { section: "9.5.5.4", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "DeviceTypeStruct", base: "struct",
            details: "The device type and revision define endpoint conformance to a release of a device type definition. See the Data Model specification for more information.",
            xref: { section: "9.5.4.1", document: "core", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "DeviceType", base: "devtype-id",
                    conformance: "M", constraint: "", default: "",
                    xref: { section: "9.5.4.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "Revision", base: "uint16",
                    conformance: "M", constraint: "min 1", default: "",
                    xref: { section: "9.5.4.1", document: "core", version: "1.1" }
                })
            ]
        })
    ]
}));
