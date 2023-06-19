/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0041, name: "UserLabel",
    classification: "endpoint", description: "User Label",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "LabelList",
            access: "RW VM", conformance: "M", default: [], quality: "N", type: "list",
            details: "An implementation SHALL support at least 4 list entries per node for " +
                     "all User Label cluster instances on the node",
            xref: { document: "core", section: "9.9.4.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "LabelStruct"
                }
            ]
        }
    ]
});
