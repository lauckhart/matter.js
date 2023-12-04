/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Io } from "../Io.js";

/**
 * If you invoke {@link Io.manage} on a non-collection value, this is the
 * manage implementation you will receive.
 */
export const PrimitiveManager: Io.Manage = reference => reference;
