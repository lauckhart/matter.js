/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonTypeDefinition } from "./index.js";

export const derive = <T extends CommonTypeDefinition> (input: T, changes: Partial<T>): T =>
    ({ ...input, ...changes });
