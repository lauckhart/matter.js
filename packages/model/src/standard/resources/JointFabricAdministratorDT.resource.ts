/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "JointFabricAdministrator", tag: "deviceType",
    classification: "utility",

    details: "A Joint Fabric Administrator device provides capabilities to manage the Joint Fabric Datastore and " +
        "issue an ICAC signed by the Joint Fabric Anchor Root CA." +
        "\n" +
        "A client wanting to access the capabilities of the Joint Fabric Administrator may use the Joint " +
        "Commissioning Method to be commissioned onto the Joint Fabric. Once commissioned, a client may " +
        "access the capabilities of the Joint Fabric Administrator.",

    xref: "device§2.9",
    children: [
        { name: "JointFabricDatastore", tag: "requirement", xref: "device§2.9.4" },
        { name: "JointFabricPki", tag: "requirement", xref: "device§2.9.4" }
    ]
});
