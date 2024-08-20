/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { MochaOptions } from "mocha";

/**
 * Configure mocha for "buildless" dev execution.  May be useful for running tests in IDE with Mocha support.
 * Utilize by importing into .mocharc.cjs as a sibling of package.json in the package to test.
 */
export function mocharc(): MochaOptions;
