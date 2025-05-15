/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ContentAppObserver } from "#index.js";

ContentAppObserver.patch({
    details: "This cluster provides an interface for sending targeted commands to an Observer of a Content App on " +
        "a Video Player device such as a Streaming Media Player, Smart TV or Smart Screen." +
        "\n" +
        "The cluster server for Content App Observer is implemented by an endpoint that communicates with a " +
        "Content App, such as a Casting Video Client." +
        "\n" +
        "The cluster client for Content App Observer is implemented by a Content App endpoint." +
        "\n" +
        "A Content App is informed of the NodeId of an Observer when a binding is set on the Content App. For " +
        "a Content App Platform, the binding is set by the platform when a CastingVideoClient is granted " +
        "access to the Content App, and the CastingVideoClient supports the Content App Observer cluster. The " +
        "Content App can then send the ContentAppMessage to the Observer (server cluster), and the Observer " +
        "responds with a ContentAppMessageResponse." +
        "\n" +
        "The Data and EncodingHint fields of the ContentAppMessage and ContentAppMessageResponse contain " +
        "content app-specific values, the format and interpretation of which is defined by the Content App " +
        "vendor, analogous to the custom message features offered by other popular casting protocols. " +
        "Standardized cluster and commands are used here rather than manufacturer-specific cluster and " +
        "commands because of the role that the Content App Platform plays in creating the ACLs and Bindings " +
        "on both sides of the communication between the Content App Observer endpoint and the Content App " +
        "endpoint." +
        "\n" +
        "By using standard cluster and commands:" +
        "\n" +
        "  1. The Content App Platform is able to easily determine that a binding is needed on the Content " +
        "     App endpoint because it can recognize the Content App Observer cluster implemented by a client " +
        "     node." +
        "\n" +
        "  2. The Content App Platform is able to easily identify commands that are allowed to be sent by the " +
        "     Content App to a client node because those commands use the Content App Observer cluster." +
        "\n" +
        "  3. The Content App is able to easily determine that a node supports the Content App Observer " +
        "     cluster because it has received a binding which specifies the Content App Observer cluster." +
        "\n" +
        "  4. The Casting Video Client is able to support a single cluster for receiving commands from any " +
        "     Content App and does not need to explicitly list every Content App it understands." +
        "\n" +
        "A Content App Observer SHOULD ignore the Data and EncodingHint field values in commands from a " +
        "Content App it does not recognize. A Content App SHOULD ignore the Data field values in responses " +
        "when the EncodingHint value is blank or not recognized.",

    xref: { document: "cluster", section: "6.12" },

    children: [
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Command succeeded" },
                { description: "Data field in command was not understood by the Observer" }
            ]
        }
    ]
});
