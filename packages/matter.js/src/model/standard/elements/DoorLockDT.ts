/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "DoorLock", id: 0xa, classification: "simple",
    details: "A Door Lock is a device used to secure a door. It is possible to actuate a door lock either by " +
        "means of a manual or a remote method.",
    xref: { document: "device", section: "8.1" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 10, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "8.1.4" },
            children: [{ tag: "requirement", name: "QRY", conformance: "Zigbee", element: "feature" }]
        },

        {
            tag: "requirement", name: "DoorLock", id: 0x101, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "8.1.4" },

            children: [
                { tag: "requirement", name: "RID", conformance: "[Zigbee], P, O", element: "feature" },
                { tag: "requirement", name: "LOG", conformance: "[Zigbee]", element: "feature" },
                {
                    tag: "requirement", name: "USR", conformance: "Matter & (PIN | RID | FPG | FACE)",
                    element: "feature"
                },
                { tag: "requirement", name: "NOT", conformance: "[Zigbee]", element: "feature" },
                { tag: "requirement", name: "AlarmMask", conformance: "[Alarms]", element: "attribute" },
                { tag: "requirement", name: "KeypadOperationEventMask", conformance: "[Zigbee]", element: "attribute" },
                { tag: "requirement", name: "RemoteOperationEventMask", conformance: "[Zigbee]", element: "attribute" },
                { tag: "requirement", name: "ManualOperationEventMask", conformance: "[Zigbee]", element: "attribute" },
                { tag: "requirement", name: "RfidOperationEventMask", conformance: "[Zigbee]", element: "attribute" },
                {
                    tag: "requirement", name: "KeypadProgrammingEventMask", conformance: "[Zigbee]",
                    element: "attribute"
                },
                {
                    tag: "requirement", name: "RemoteProgrammingEventMask", conformance: "[Zigbee]",
                    element: "attribute"
                },
                { tag: "requirement", name: "RfidProgrammingEventMask", conformance: "[Zigbee]", element: "attribute" },
                { tag: "requirement", name: "OperatingEventNotification", conformance: "[Zigbee]", element: "command" },
                {
                    tag: "requirement", name: "ProgrammingEventNotification", conformance: "[Zigbee]",
                    element: "command"
                }
            ]
        },

        {
            tag: "requirement", name: "PollControl", id: 0x20, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "8.1.4" }
        },
        {
            tag: "requirement", name: "TimeSync", id: 0x38, conformance: "P, O", element: "clientCluster",
            xref: { document: "device", section: "8.1.4" }
        }
    ]
});
