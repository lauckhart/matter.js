/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterElement } from "../../index.js";

/**
 * This is a partial Matter model that adds elements and properties unavailable
 * in other sources.
 */
export const LocalMatter = MatterElement({
    name: "LocalMatter",
    description: "Matter.js Matter extensions",
    version: "1.1",
    children: []
});
