/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { basename, extname } from "path";

export function filterWithGlob(list: string[], glob: string, invert = false) {
    const globPattern = glob.replace(/\*/g, "[^\\/]+");
    const pattern = new RegExp(`^${globPattern}$`);
    return list.filter(s => !!s.match(pattern) === !invert);
}

export function testNameOf(path: string) {
    const name = basename(path);
    return name.slice(0, name.length - extname(name).length);
}
