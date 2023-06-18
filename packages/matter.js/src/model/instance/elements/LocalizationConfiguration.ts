/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x002b, name: "LocalizationConfiguration",
    classification: "node", description: "Localization Configuration",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "ActiveLocale",
            access: "RW", conformance: "M", constraint: "max 35", default: "MS", quality: "N", type: "string",
            details: "The ActiveLocale attribute SHALL represent the locale that the Node is" +
                     " currently configured to use when conveying information. The " +
                     "ActiveLocale attribute SHALL be a Language Tag as defined by BCP47 [" +
                     "https://tools.ietf.org/rfc/bcp/bcp47.txt]. The ActiveLocale attribute " +
                     "SHALL have a default value assigned by the Vendor and SHALL be a value" +
                     " contained within the SupportedLocales attribute list",
            xref: { document: "core", section: "11.3.4.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "SupportedLocales",
            access: "R V", conformance: "M", constraint: "max 32[max 35]", default: "MS", quality: "F", type: "list",
            details: "The SupportedLocales attribute SHALL represent a list of locale " +
                     "strings that are valid values for the ActiveLocale attribute. The list" +
                     " SHALL NOT contain any duplicate entries. The ordering of items within" +
                     " the list SHOULD NOT express any meaning",
            xref: { document: "core", section: "11.3.4.2" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "string"
                }
            ]
        }
    ]
});
