/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AllClustersApp } from "./support.js";

describe("ACL", () => {
    Chip.python(AllClustersApp, "TC_ACL_2_2");
    Chip.yaml(AllClustersApp, "Test_TC_ACL_*");
});
