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

expect.IGNORE = Symbol.for("matter:expect-ignore");
expect.BIGINT = Symbol.for("matter:expect-bigint");
expect.BYTES = Symbol.for("matter:expect-bytes");
expect.NUMBER = Symbol.for("matter:expect-number");
expect.STRING = Symbol.for("matter:expect-string");

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
        comparator(expected: unknown, actual: unknown) {
            switch (expected) {
                case expect.IGNORE:
                    return true;

                case expect.BIGINT:
                    return typeof actual === "bigint";

                case expect.NUMBER:
                    return typeof actual === "number";

                case expect.STRING:
                    return typeof actual === "string";

                case expect.BYTES:
                    return actual instanceof Uint8Array;
            }
            return null;
        },
    });
};
