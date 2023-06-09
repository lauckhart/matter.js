/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x002b, name: "LocalizationConfiguration",
    description: "Localization Configuration",
    details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions may have differing common languages, units of measurements, and numerical formatting standards. As such, Nodes that visually or audibly convey information need a mechanism by which they can be configured to use a user’s preferred language, units, etc",
    children: [
        AttributeElement({
            id: 0x0000, name: "ActiveLocale", base: "ActiveLocale",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "SupportedLocales", base: "SupportedLocales",
            access: { rw: "R" }, conformance: [ "M" ]
        })
    ]
}))