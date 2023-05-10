/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { itWorks } from "./itWorks.js";
import { CryptoSubtle } from "../../src/implementations/CryptoSubtle.js"

describe("CryptoSubtle", () => {
    itWorks(new CryptoSubtle());
});
