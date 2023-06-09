/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0003, name: "Identify",
    classification: "endpoint",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 4, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "QUERY",
                    description: "Multicast query for identification state",
                    details: "This feature supports a unicast, groupcast or multicast query of the cluster state, with a response back to query initiator, if the identification state is active. This feature is supported for underlying stacks that support a response to a multicast or groupcast command.",
                    xref: { section: "1.2.4.1", document: "cluster", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "IdentifyTime", base: "uint16",
            access: "RW VO", conformance: "M", default: "0",
            details: "This attribute specifies the remaining length of time, in seconds, that the endpoint will continue to identify itself.",
            xref: { section: "1.2.5.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "IdentifyType", base: "enum8",
            access: "R V", conformance: "M*", constraint: "desc", default: "0",
            details: "This attribute specifies how the identification state is presented to the user. This field SHALL contain one of the values listed below:",
            xref: { section: "1.2.5.2", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "Identify",
            access: "M", conformance: "M", direction: "request", response: "status",
            details: "This command starts or stops the receiving device identifying itself. This command SHALL have the following data fields:",
            xref: { section: "1.2.6.1", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "IdentifyQuery",
            access: "M", conformance: "QRY", direction: "request", response: "IdentifyQueryResponse",
            details: "This command allows the sending device to request the target or targets to respond if they are currently identifying themselves.",
            xref: { section: "1.2.6.2", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0040, name: "TriggerEffect",
            access: "M", conformance: "O", direction: "request", response: "status",
            details: "This command allows the support of feedback to the user, such as a certain light effect. It is used to allow an implementation to provide visual feedback to the user under certain circumstances such as a color light turning green when it has successfully connected to a network. The use of this command and the effects themselves are entirely up to the implementer to use whenever a visual feedback is useful but it is not the same as and does not replace the identify mechanism used during commissioning.",
            xref: { section: "1.2.6.3", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "IdentifyQueryResponse",
            conformance: "QRY", direction: "response",
            details: "This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the case that the device is currently identifying itself.",
            xref: { section: "1.2.6.4", document: "cluster", version: "1.1" }
        })
    ]
}));
