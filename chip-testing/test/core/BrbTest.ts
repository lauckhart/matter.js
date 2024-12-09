/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BridgeApp } from "../support.js";

describe("BRBINFO", () => {
    chip({
        include: "BRBINFO_*",
        exclude: "BRBINFO_4_1", // ICD
    }).subject(BridgeApp);
});
