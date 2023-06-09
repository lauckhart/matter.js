/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x002b, name: "LocalizationConfiguration",
    classification: "node",
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
            id: 0x0000, name: "ActiveLocale", base: "string",
            access: "RW VM", conformance: "M", constraint: "max 35", default: "MS", quality: "N",
            details: "The ActiveLocale attribute SHALL represent the locale that the Node is currently configured to use when conveying information. The ActiveLocale attribute SHALL be a Language Tag as defined by BCP47 [https://tools.ietf.org/rfc/bcp/bcp47.txt]. The ActiveLocale attribute SHALL have a default value assigned by the Vendor and SHALL be a value contained within the SupportedLocales attribute list.",
            xref: { section: "11.3.4.1", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "SupportedLocales", base: "list[string]",
            access: "R V", conformance: "M", constraint: "max 32[max 35]", default: "MS", quality: "F",
            details: "The SupportedLocales attribute SHALL represent a list of locale strings that are valid values for the ActiveLocale attribute. The list SHALL NOT contain any duplicate entries. The ordering of items within the list SHOULD NOT express any meaning.",
            xref: { section: "11.3.4.2", document: "core", version: "1.1" }
        })
    ]
}))