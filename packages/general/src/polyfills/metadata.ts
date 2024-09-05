/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Seehttps://github.com/tc39/proposal-decorator-metadata

if (typeof Symbol.metadata !== "symbol") {
    (Symbol as { metadata: symbol }).metadata = Symbol("Symbol.metadata");
}
