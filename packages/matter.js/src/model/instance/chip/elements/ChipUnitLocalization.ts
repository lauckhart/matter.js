/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x002d, name: "UnitLocalization",
    description: "Unit Localization",
    details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions may have differing preferences for the units in which values are conveyed in communication to a user. As such, Nodes that visually or audibly convey measurable values to the user need a mechanism by which they can be configured to use a user’s preferred unit.",
    children: [
        AttributeElement({
            id: 0x0000, name: "TemperatureUnit", base: "TemperatureUnit",
            access: { rw: "W" }, conformance: [ "O" ]
        })
    ]
}));
