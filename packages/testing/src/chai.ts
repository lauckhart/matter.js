/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import Chai from "chai";
import ChaiAsPromised from "chai-as-promised";
import "./global-definitions.js";

Chai.config.truncateThreshold = 200;
Chai.use(ChaiAsPromised);

expect.IGNORE = Symbol.for("matter:expect-ignore");
expect.BIGINT = Symbol.for("matter:expect-bigint");
expect.BYTES = Symbol.for("matter:expect-bytes");
expect.NUMBER = Symbol.for("matter:expect-number");
expect.STRING = Symbol.for("matter:expect-string");

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
