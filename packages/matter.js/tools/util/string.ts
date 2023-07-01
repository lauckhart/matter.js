/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export function wordWrap(text: string, width = 120) {
    const lines = Array<string>();
    
    const inputLines = text.split(/\n+/);
    for (let i = 0; i < inputLines.length; i++) {
        const segments = inputLines[i].match(/\S+(?:\s+|$)/g);
        if (segments?.length) {
            const line = Array<string>();
            let length = 0;
            for (const s of segments) {
                if (length && length + s.length > width) {
                    lines.push(line.join(""));
                    line.length = length = 0;
                }
                line.push(s);
                length += s.length;
            }
            if (line.length) {
                lines.push(line.join(""));
            }
            if (i < inputLines.length - 1) {
                lines.push("");
            }
        }
    }

    return lines;
}

export function asObjectKey(label: {}) {
    label = label.toString();
    if (!(label as string).match(/^[\$_a-z][\$_a-z0-9]*$/i)) {
        label = JSON.stringify(label);
    }
    return label;
}
