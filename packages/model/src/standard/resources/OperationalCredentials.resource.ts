/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OperationalCredentials } from "#index.js";

OperationalCredentials.patch({
    details: "This cluster is used to add or remove Node Operational credentials on a Commissionee or Node, as " +
        "well as manage the associated Fabrics.",
    xref: { document: "core", section: "11.18" },

    children: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Request the DER- encoded DAC certificate" },
                { description: "Request the DER- encoded PAI certificate" }
            ]
        },

        {
            children: [
                { description: "OK, no error" },
                { description: "Public Key in the NOC does not match the public key in the NOCSR" },
                { description: "The Node Operational ID in the NOC is not formatted correctly." },
                { description: "Any other validation error in NOC chain" },
                { description: "No record of prior CSR for which this NOC could match" },
                { description: "NOCs table full, cannot add another one" },
                { description: "Invalid CaseAdminSubject field for an AddNOC command." },
                { description: "Trying to AddNOC instead of UpdateNOC against an existing Fabric." },
                { description: "Label already exists on another Fabric." },
                { description: "FabricIndex argument is invalid." }
            ]
        }
    ]
});
