/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "datatype", name: "AtomicAttributeStatusStruct",
    details: "This struct indicates the status of an attribute during an atomic write.",
    xref: "core§7.15.5",

    children: [
        {
            tag: "field", name: "AttributeId",
            details: "This field shall indicate the ID of the attribute with the associated StatusCode.",
            xref: "core§7.15.5.1"
        },
        {
            tag: "field", name: "StatusCode",
            details: "This field shall indicate the atomic status of an attribute.",
            xref: "core§7.15.5.2"
        }
    ]
});
