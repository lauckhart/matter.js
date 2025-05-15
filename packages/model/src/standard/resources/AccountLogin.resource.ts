/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AccountLogin } from "#index.js";

AccountLogin.patch({
    details: "This cluster provides commands that facilitate user account login on a Content App or a node. For " +
        "example, a Content App running on a Video Player device, which is represented as an endpoint (see " +
        "Device Type Library document), can use this cluster to help make the user account on the Content App " +
        "match the user account on the Client." +
        "\n" +
        "Often a fabric administrator will facilitate commissioning of a Client (such as a Casting Video " +
        "Client), and invoke commands on the AccountLogin cluster on the Content App associated with that " +
        "client. Specifically:" +
        "\n" +
        "  1. GetSetupPIN in order to attempt to obtain the Passcode for commissioning." +
        "\n" +
        "  2. Login in order to let the Content App know that commissioning has completed. The Content App " +
        "     can use information provided in this command in order to determine the user account associated " +
        "     with the client, and potentially assume that user account." +
        "\n" +
        "  3. Logout in order to let the Content App know that client access has been removed, and " +
        "     potentially clear the current user account." +
        "\n" +
        "The cluster server for this cluster may be supported on each endpoint that represents a Content App " +
        "on a Video Player device." +
        "\n" +
        "See Device Type Library document for details of how a Content App, represented as an endpoint on" +
        "\n" +
        "the Video Player device, may implement the cluster server for this cluster to simplify account login " +
        "for its users.",

    xref: { document: "cluster", section: "6.2" }
});
