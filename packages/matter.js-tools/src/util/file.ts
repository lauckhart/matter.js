/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { statSync } from "fs";
import { ignoreErrorSync } from "./errors.js";

export function isDirectory(path: string) {
    return !!ignoreErrorSync("ENOENT", () => statSync(path).isDirectory());
}

export function isFile(path: string) {
    return !!ignoreErrorSync("ENOENT", () => statSync(path).isFile());
}
