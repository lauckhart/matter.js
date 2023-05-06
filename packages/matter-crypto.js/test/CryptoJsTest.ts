/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { itWorks } from "./itWorks";
import { CryptoJS } from "../src/CryptoJS.js"

describe("CryptoJS", () => {
    itWorks(new CryptoJS());
});
