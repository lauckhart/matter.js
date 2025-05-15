/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Actions } from "#index.js";

Actions.patch({
    details: "This cluster provides a standardized way for a Node (typically a Bridge, but could be any Node) to " +
        "expose" +
        "\n" +
        "  • Information about logical grouping of endpoints on the Node (example: lights in a room)" +
        "\n" +
        "  • Information about named actions that can be performed on such a group of endpoints (example: " +
        "    recall a scene for a group of lights by its name)" +
        "\n" +
        "  • Commands to trigger such actions" +
        "\n" +
        "  • Events to receive feedback on the state of such actions." +
        "\n" +
        "The information on grouping and available actions is typically provided by the user or Bridge " +
        "manufacturer via some means not defined in Matter, and therefore provided as read-only to Nodes. For " +
        "example: a manufacturer-provided app allows a user to set up logical grouping and create/assign " +
        "scene for such groups." +
        "\n" +
        "Using this cluster, a Node can learn about such logical grouping, provided actions, and trigger such " +
        "actions." +
        "\n" +
        "While the origin of this cluster stems from use cases with a Bridge, its server side may also be " +
        "implemented on any Node which can expose certain grouping, actions or automations to other users." +
        "\n" +
        "After defining the attributes, commands and events for this cluster, and the associated data types, " +
        "several examples are provided to illustrate the capabilities of this cluster." +
        "\n" +
        "Actions can be defined in a flexible manner to suit the needs of the various nodes implementing this " +
        "cluster. For each action, the commands available for that particular action are defined." +
        "\n" +
        "This cluster can be used to expose only the grouping of endpoints without any actions defined by " +
        "populating the EndpointList attribute accordingly and providing an empty list for ActionList." +
        "\n" +
        "The term 'action' in the description of this cluster should not be confused with the term 'action' " +
        "as used in the Interaction Model.",

    xref: { document: "core", section: "9.14" },

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

        {
            children: [
                { description: "Indicate support for InstantAction command" },
                { description: "Indicate support for InstantActionWithTransition command" },
                { description: "Indicate support for StartAction command" },
                { description: "Indicate support for StartActionWithDuration command" },
                { description: "Indicate support for StopAction command" },
                { description: "Indicate support for PauseAction command" },
                { description: "Indicate support for PauseActionWithDuration command" },
                { description: "Indicate support for ResumeAction command" },
                { description: "Indicate support for EnableAction command" },
                { description: "Indicate support for EnableActionWithDuration command" },
                { description: "Indicate support for DisableAction command" },
                { description: "Indicate support for DisableActionWithDuration command" }
            ]
        },

        {
            children: [
                { description: "Use this only when none of the other values applies" },
                { description: "Bring the endpoints into a certain state" },
                { description: "A sequence of states with a certain time pattern" },
                { description: "Control an automation (e.g. motion sensor controlling lights)" },
                { description: "Sequence that will run when something doesn’t happen" },
                { description: "Use the endpoints to send a message to user" },
                { description: "Higher priority notification" }
            ]
        },

        {
            children: [
                { description: "The action is not active" },
                { description: "The action is active" },
                { description: "The action has been paused" },
                { description: "The action has been disabled" }
            ]
        },

        {
            children: [
                { description: "Other reason not listed in the row(s) below" },
                { description: "The action was interrupted by another command or interaction" }
            ]
        },

        {
            children: [
                { description: "Another group of endpoints" },
                { description: "User-configured group of endpoints where an endpoint can be in only one room" },
                { description: "User-configured group of endpoints where an endpoint can be in any number of zones" }
            ]
        }
    ]
});
