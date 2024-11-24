/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AllClustersApp } from "./support.js";

describe("ACL", () => {
    chip(AllClustersApp, "TC_ACL_2_1");
    chip(AllClustersApp, "TC_ACL_2_2");
    chip(AllClustersApp, "TC_ACL_2_3");
    chip(AllClustersApp, "TC_ACL_2_4");
    chip(AllClustersApp, "TC_ACL_2_5");
    //chip(AllClustersApp, "TC_ACL_*", "TC_ACL_2_11");
});
