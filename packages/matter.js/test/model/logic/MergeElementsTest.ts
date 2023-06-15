/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../../src/log/index.js";
import { MergeElements } from "../../../src/model/logic/index.js";
import { Model } from "../../../src/model/models/index.js";
import { Time } from "../../../src/time/Time.js";

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

describe("MergeElements", () => {
    it("completes", () => {
        const merged = MergeElements();
        Model.create(merged).log();
    })
})
