/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AlarmBase } from "#index.js";

AlarmBase.patch({
    details: "This cluster is a base cluster from which clusters for particular alarms for a device type can be " +
        "derived. Each derivation shall define the values for the AlarmBitmap data type used in this cluster. " +
        "Each derivation shall define which alarms are latched.",
    xref: { document: "cluster", section: "1.15" },
    children: [undefined, { children: [{ description: "Reset" }] }]
});
