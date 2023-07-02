/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "PowerSourceConfiguration", id: 0x2e, classification: "endpoint",
    description: "Power Source Configuration",
    details: "This cluster is used to describe the configuration and capabilities of a Device's power system.",
    xref: { document: "core", section: "11.6" },

    children: [ {
        tag: "attribute", name: "Sources", id: 0x0, type: "list", access: "R V", conformance: "M",
        constraint: "max 6", quality: "N",
        details: "This list SHALL contain the set of all power sources capable of participating in the power system " +
                 "of this Node. Each entry in the list SHALL be the endpoint number of an endpoint having a Power " +
                 "Source cluster, which corresponds to a physical power source. The endpoint number SHALL be unique " +
                 "within the list.",
        xref: { document: "core", section: "11.6.4.1" },
        children: [ { tag: "datatype", name: "entry", type: "endpoint-no" } ]
    } ]
});