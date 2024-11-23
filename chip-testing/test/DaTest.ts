/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AllClustersApp } from "./support.js";

describe("DA", () => {
    chip(AllClustersApp, "TC_DA_1_2");
    chip(AllClustersApp, "TC_DA_1_5");
    chip(AllClustersApp, "TC_DA_1_7");
});
