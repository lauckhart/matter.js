/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { statSync } from "fs";

export function maybeStatSync(path: string) {
    try {
        return statSync(path);
    } catch (e) {
        if (typeof e === "object" && e !== null && "code" in e && (e.code === "ENOENT" || e.code === "ENOTDIR")) {
            return;
        }
        throw e;
    }
}
