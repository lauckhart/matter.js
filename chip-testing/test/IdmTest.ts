/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AllClustersApp } from "./support.js";

describe("IDM", () => {
    chip(AllClustersApp, "TC_DA_1_2");
    chip(AllClustersApp, "TC_DA_4_2");
});
