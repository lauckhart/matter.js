/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import Chai from "chai";
import ChaiAsPromised from "chai-as-promised";
import { generalSetup, browserSetup } from "./mocha.js";
import { loggerSetup } from "./mocks/logging.js";
import { timeSetup, TheMockTime } from "./mocks/time.js";

Chai.use(ChaiAsPromised);

Object.assign(globalThis as any, {
    expect: Chai.expect,
});

Object.assign(globalThis, {
    MatterHooks: {
        loggerSetup: loggerSetup,
        timeSetup: timeSetup
    },
    
    MockTime: TheMockTime
});

if (typeof window === "object" && globalThis === window) {
    generalSetup(Mocha);
    browserSetup(mocha);
}
