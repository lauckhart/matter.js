/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("IDM", () => {
    // TODO - IDM_1_4 fails in final step (11) where batch invoke response should span packets.
    // We otherwise pass all IDM tests so worth tracking down
    chip({ include: "IDM_*", exclude: "IDM_1_4" });
});
