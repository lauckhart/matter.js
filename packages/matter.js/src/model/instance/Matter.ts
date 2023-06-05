/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterElement } from "../index.js";

/**
 * This instance of MatterObjectModel represents Matter as described in the
 * Matter 1.1 Core and Application Cluster specifications.
 * 
 * TODO - Device Type specification
 */
export const Matter = MatterElement({
    id: 1,
    name: "Matter",
    description: "Formal Definition of Matter",
    version: "1.1"
});
