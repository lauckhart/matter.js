/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import Chai from "chai";
import ChaiAsPromised from "chai-as-promised";

Chai.use(ChaiAsPromised);

import { captureLog, captureLogs } from "./logging.js";

Object.assign(globalThis, {
    expect: Chai.expect,
    captureLog,
    captureLogs,
});
