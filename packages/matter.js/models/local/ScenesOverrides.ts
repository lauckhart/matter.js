/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globals } from "../../src/model/index.js";
import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "Scenes",

    children: [
        // Enable scene names by default.  Not mandated by the specification but a reasonable default
        {
            tag: "attribute", id: Globals.FeatureMap.id, name: Globals.FeatureMap.name,
            children: [{ tag: "datatype", name: "SN", default: true }]
        },

        // Set NameSupport default to match feature default per the specification
        {
            tag: "attribute", id: 4, name: "NameSupport",
            children: [{ tag: "datatype", name: "NameSupport", default: true }]
        }
    ]
})
