/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { stdout } from "process";

function formatter(on: number, off: number): (text: string) => string {
    if (!stdout.isTTY) {
        return text => text;
    }
    return text => `\u001b[${on}m${text}\u001b[${off}m`;
}

export const bold = formatter(1, 22);
export const red = formatter(31, 39);
export const green = formatter(32, 39);
export const blue = formatter(34, 39);
