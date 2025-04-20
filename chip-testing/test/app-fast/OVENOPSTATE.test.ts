/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("OVENOPSTATE", () => {
    chip("OVENOPSTATE/*").exclude(
        // Excluded because Pause and Resume are unsupported but test python file exists
        // https://github.com/CHIP-Specifications/chip-test-plans/issues/5067
        "OVENOPSTATE/2.3",
    );
});
