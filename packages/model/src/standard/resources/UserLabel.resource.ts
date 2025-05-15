/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "UserLabel", tag: "cluster",
    classification: "endpoint", pics: "ULABEL",
    details: "This cluster is derived from the Label cluster and provides a feature to tag an endpoint with zero " +
        "or more writable labels.",
    xref: "core§9.9",

    children: [{
        name: "LabelList", tag: "attribute",
        details: "An implementation shall support at least 4 list entries per node for all User Label cluster " +
            "instances on the node.",
        xref: "core§9.9.4.1"
    }]
});
