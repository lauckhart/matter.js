/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export function wordWrap(text: string, width = 120) {
    const lines = Array<string>();
    
    const inputLines = text.split(/\n+/);
    for (let i = 0; i < inputLines.length; i++) {
        const segments = inputLines[i].match(new RegExp(`(.{1,${width}}\\b)`, "g"));
        if (segments) {
            lines.push(...segments);
            if (i < inputLines.length - 1) {
                lines.push("");
            }
        }
    }

    return lines;
}
