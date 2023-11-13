/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "Aggregator", id: 0xe, classification: "dynamic",

    details: "This device type aggregates endpoints as a collection. Clusters on the endpoint indicating this " +
        "device type provide functionality for the collection of descendent endpoints present in the " +
        "PartsList of the endpoint’s descriptor, for example the Actions cluster." +
        "\n" +
        "The purpose of this device type is to aggregate functionality for a collection of endpoints. The " +
        "definition of the collection or functionality is not defined here." +
        "\n" +
        "When using this device type as a collection of bridged nodes, please see the \"Bridge\" section in " +
        "the System Model specification.",

    xref: { document: "device", section: "2.5" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 14, revision: 1 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Actions", conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "2.5.4" }
        }
    ]
});
