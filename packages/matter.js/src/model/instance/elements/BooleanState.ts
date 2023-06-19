/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0045, name: "BooleanState",
    classification: "application", description: "Boolean State",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "StateValue",
            access: "R V", conformance: "M", default: undefined, quality: "P", type: "bool",
            details: "This represents a Boolean state",
            xref: { document: "cluster", section: "1.7.4.1" }
        },

        {
            tag: "event", id: 0x0000, name: "StateChange",
            access: "V", conformance: "O", priority: "info",
            details: "This event SHALL be generated when the StateValue attribute changes",
            xref: { document: "cluster", section: "1.7.5.1" },
            children: [
                {
                    tag: "datatype", name: "StateValue",
                    conformance: "M", type: "bool"
                }
            ]
        }
    ]
});
