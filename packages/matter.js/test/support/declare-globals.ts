/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type Chai from "chai";
import "chai-as-promised";
import { captureLog as captureLogFn, captureLogs as captureLogsFn } from "./logging.js";

declare global {
    // Our globals
    const expect: typeof Chai.expect;
    const captureLog: typeof captureLogFn;
    const captureLogs: typeof captureLogsFn;
}
