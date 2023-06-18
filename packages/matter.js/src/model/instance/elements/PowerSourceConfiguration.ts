/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x002e, name: "PowerSourceConfiguration",
    classification: "endpoint", description: "Power Source Configuration",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "Sources",
            access: "R V", conformance: "M", constraint: "max 6", default: "", quality: "N", type: "list",
            details: "This list SHALL contain the set of all power sources capable of " +
                     "participating in the power system of this Node. Each entry in the list" +
                     " SHALL be the endpoint number of an endpoint having a Power Source " +
                     "cluster, which corresponds to a physical power source. The endpoint " +
                     "number SHALL be unique within the list",
            xref: { document: "core", section: "11.6.4.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "uint8"
                }
            ]
        }
    ]
});
