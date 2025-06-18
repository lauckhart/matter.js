/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Note - we don't import mocha here because in the browser we load their standard browser bundle which is different
// from the Node version

import Chai from "chai";
import ChaiAsPromised from "chai-as-promised";
import { browserSetup, extendApi, generalSetup } from "./mocha.js";
import { bootSetup } from "./mocks/boot.js";
import { MockLogger, loggerSetup } from "./mocks/logging.js";
import { timeSetup } from "./mocks/time.js";

Chai.config.truncateThreshold = 200;
Chai.use(ChaiAsPromised);

Object.assign(globalThis, {
    expect: Chai.expect,

    MatterHooks: {
        interrupt,
        bootSetup,
        loggerSetup,
        timeSetup,
    },

    MockLogger,
});

expect.IGNORE = Symbol.for("matter-test:ignore");

if (globalThis === (globalThis as any).window) {
    extendApi(Mocha);
    generalSetup(mocha);
    browserSetup(mocha);
}

function interrupt() {
    // Interrupt handling is platform dependent
}

(Chai.config as any).deepEqual = (expected: unknown, actual: unknown) => {
    return (Chai.util as any).eql(expected, actual, {
        comparator(expected: unknown) {
            if (expected === expect.IGNORE) {
                return true;
            }
            return null;
        },
    });
};
