/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0025, name: "Actions",
    classification: "application",
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
            id: 0x0000, name: "ActionList", base: "list[ActionStruct]",
            access: "R V", conformance: "M", constraint: "max 256", value: "empty",
            details: "The ActionList attribute holds the list of actions. Each entry SHALL have an unique ActionID, and its EndpointListID SHALL exist in the EndpointLists attribute.",
            xref: { section: "9.14.5.1", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "EndpointLists", base: "list[EndpointListStruct]",
            access: "R V", conformance: "M", constraint: "max 256", value: "empty",
            details: "The EndpointLists attribute holds the list of endpoint lists. Each entry SHALL have an unique EndpointListID.",
            xref: { section: "9.14.5.2", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "SetupUrl", base: "string",
            access: "R V", conformance: "O", constraint: "max 512", value: "empty",
            details: "The SetupURL attribute (when provided) SHALL indicate a URL; its syntax SHALL follow the syntax as specified in RFC 3986, max. 512 ASCII characters. The location referenced by this URL SHALL provide additional information for the actions provided:",
            xref: { section: "9.14.5.3", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "CommandBits", base: "map16",
            details: "This data type is derived from map16.",
            xref: { section: "9.14.4.1", document: "core", version: "1.1" }
        })
    ]
}));
