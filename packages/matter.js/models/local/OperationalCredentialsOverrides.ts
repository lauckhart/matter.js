/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "OperationalCredentials",

    children: [
        {
            tag: "command", name: "AttestationResponse", id: 0x1,
            children: [
                // Spec helpfully defines max length as RESP_MAX
                { tag: "datatype", id: 0x0, name: "AttestationElements", constraint: { max: 900 } }
            ]
        },
        {
            tag: "command", name: "CsrResponse", id: 0x5,
            children: [
                // RESP_MAX here too
                { tag: "datatype", id: 0x0, name: "NocsrElements", constraint: { max: 900 } }
            ]
        }
    ]
})
