/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ValueManager } from "./ValueManager.js";

/**
 * If you invoke {@link ValueManager.manage} on a non-collection value, this is
 * the manage implementation you will receive.
 * 
 * Struct and list manager implementations optimize by bypassing
 * PrimitiveManager.
 */
export const PrimitiveManager: ValueManager.Manage = reference => reference;
