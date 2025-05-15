/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GeneralDiagnostics } from "#index.js";

GeneralDiagnostics.patch({
    details: "The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire " +
        "standardized diagnostics metrics that may be used by a Node to assist a user or Administrator in " +
        "diagnosing potential problems. The General Diagnostics Cluster attempts to centralize all metrics " +
        "that are broadly relevant to the majority of Nodes.",
    xref: { document: "core", section: "11.12" },

    children: [
        undefined,
        { children: [{ description: "DataModelTest" }] },
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
                { description: "The Node has encountered an unspecified fault." },
                { description: "The Node has encountered a fault with at least one of its radios." },
                { description: "The Node has encountered a fault with at least one of its sensors." },
                { description: "The Node has encountered an over-temperature fault that is resettable." },
                { description: "The Node has encountered an over-temperature fault that is not resettable." },
                { description: "The Node has encountered a fault with at least one of its power sources." },
                { description: "The Node has encountered a fault with at least one of its visual displays." },
                { description: "The Node has encountered a fault with at least one of its audio outputs." },
                { description: "The Node has encountered a fault with at least one of its user interfaces." },
                { description: "The Node has encountered a fault with its non-volatile memory." },
                { description: "The Node has encountered disallowed physical tampering." }
            ]
        },

        {
            children: [
                { description: "The Node has encountered an unspecified radio fault." },
                { description: "The Node has encountered a fault with its Wi-Fi radio." },
                { description: "The Node has encountered a fault with its cellular radio." },
                { description: "The Node has encountered a fault with its802.15.4 radio." },
                { description: "The Node has encountered a fault with its NFC radio." },
                { description: "The Node has encountered a fault with its BLE radio." },
                { description: "The Node has encountered a fault with its Ethernet controller." }
            ]
        },

        {
            children: [
                { description: "The Node has encountered an unspecified fault." },
                { description: "The Node has encountered a network fault as a result of a hardware failure." },
                { description: "The Node has encountered a network fault as a result of a jammed network." },
                {
                    description: "The Node has encountered a network fault as a result of a failure to establish a connection."
                }
            ]
        },

        {
            children: [
                { description: "Indicates an interface of an unspecified type." },
                { description: "Indicates a Wi-Fi interface." },
                { description: "Indicates a Ethernet interface." },
                { description: "Indicates a Cellular interface." },
                { description: "Indicates a Thread interface." }
            ]
        },

        {
            children: [
                {
                    description: "The Node is unable to identify the Power-On reason as one of the other provided enumeration values."
                },
                {
                    description: "The Node has booted as the result of physical interaction with the device resulting in a reboot."
                },
                { description: "The Node has rebooted as the result of a brown-out of the Node’s power supply." },
                { description: "The Node has rebooted as the result of a software watchdog timer." },
                { description: "The Node has rebooted as the result of a hardware watchdog timer." },
                { description: "The Node has rebooted as the result of a completed software update." },
                { description: "The Node has rebooted as the result of a software initiated reboot." }
            ]
        }
    ]
});
