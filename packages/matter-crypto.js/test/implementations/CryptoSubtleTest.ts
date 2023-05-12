/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { testCrypto } from "./testCrypto.js";
import { CryptoSubtle } from "../../src/implementations/CryptoSubtle.js"

describe("CryptoSubtle", () => {
    testCrypto(new CryptoSubtle());
});
