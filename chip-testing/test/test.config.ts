/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { log } from "../src/GenericTestApp.js";

log.directive = () => {};
log.error = (...args: any[]) => console.error(...args);
