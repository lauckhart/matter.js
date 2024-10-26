/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { stderr, stdout } from "process";
import { bold, green, red } from "./colors.js";

function join(parts: unknown[]) {
    return parts.map(part => (part instanceof Error ? part.message : `${part}`)).join(" ");
}

export function error(...parts: unknown[]) {
    stderr.write(`${red(bold("Error:"))} ${join(parts)}\n\n`);
}

export function notice(...parts: unknown[]) {
    stdout.write(`${green(join(parts))}\n\n`);
}
