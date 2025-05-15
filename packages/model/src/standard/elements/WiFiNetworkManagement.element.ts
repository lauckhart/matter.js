/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    CommandElement as Command,
    FieldElement as Field
} from "../../elements/index.js";

export const WiFiNetworkManagement = Cluster(
    { id: 0x451, name: "WiFiNetworkManagement" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute({
        id: 0x0, name: "Ssid", type: "octstr",
        access: "R V", conformance: "M", constraint: "1 to 32", default: null, quality: "X N"
    }),
    Attribute({
        id: 0x1, name: "PassphraseSurrogate", type: "uint64",
        access: "R M", conformance: "M", default: null, quality: "X N"
    }),
    Command({
        id: 0x0, name: "NetworkPassphraseRequest",
        access: "M", conformance: "M", direction: "request", response: "NetworkPassphraseResponse"
    }),
    Command(
        { id: 0x1, name: "NetworkPassphraseResponse", direction: "response" },
        Field({ id: 0x0, name: "Passphrase", type: "octstr", conformance: "M", constraint: "max 64" })
    )
);

MatterDefinition.children.push(WiFiNetworkManagement);
