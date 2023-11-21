/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

if (!Storage.registered) {
    Storage.create = (name: string, clear = false) => {};
}
