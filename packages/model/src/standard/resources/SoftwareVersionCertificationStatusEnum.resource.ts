/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "SoftwareVersionCertificationStatusEnum", tag: "datatype",
    details: "The values 0 through 2 shall correspond to the values 0 through 2 used in certification_type in the " +
        "Certification Declaration.",
    xref: "core§11.23.8.2",

    children: [
        {
            name: "DevTest", tag: "field",
            description: "used for development and test purposes (These will typically not be placed in DCL)"
        },
        {
            name: "Provisional", tag: "field",
            description: "used for a SoftwareVersion when going into certification testing (These might or might not be placed in DCL, depending on CSA policy and procedures)"
        },
        { name: "Certified", tag: "field", description: "used for a SoftwareVersion which has been certified" },
        { name: "Revoked", tag: "field", description: "used for a SoftwareVersion which has been revoked" }
    ]
});
