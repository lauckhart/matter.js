/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time } from "../../src/time/Time.js";
import { Logger } from "../../src/log/Logger.js";

Time.get = () => ({
    now: () => {
        return new Date();
    },

    nowMs: () => {
        return new Date().getTime();
    },

    getPeriodicTimer: () => {
        throw new Error();
    },

    getTimer: () => {
        throw new Error();
    }
});

Logger.format = "ansi";
