/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { itWorks } from "./itWorks.js";
import { CryptoNode } from "../src/CryptoNode.js";

describe("CryptoNode", () => {
    itWorks(new CryptoNode());
});
