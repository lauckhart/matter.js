/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { itWorks } from "./itWorks";
import { CryptoSubtle } from "../src/CryptoSubtle.js"

describe("CryptoSubtle", () => {
    itWorks(new CryptoSubtle());
});
