/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export function capitalize(text: string) {
    return text[0].toUpperCase() + text.slice(1);
}

/**
 * Converts identifiers of the form "foo-bar", "foo_bar", "foo bar", "foo*bar"
 * or "fooBar" into "FooBar" or "fooBar".
 */
export function camelize(name: string, upperFirst = true) {
    const pieces = new Array<string>();
    let pieceStart = 0,
        sawUpper = false,
        sawLower = false,
        i = 0;

    function addPiece(to: number) {
        if (pieceStart < to) pieces.push(name.slice(pieceStart, to));
        sawLower = sawUpper = false;
    }

    for (; i < name.length; i++) {
        if (name[i] >= "A" && name[i] <= "Z") {
            if (sawLower) {
                addPiece(i);
                pieceStart = i;
            }
            sawUpper = true;
            continue;
        }

        if (name[i] >= "a" && name[i] <= "z") {
            if (!sawLower) {
                if (sawUpper) {
                    addPiece(i - 1);
                    pieceStart = i - 1;
                }
            }
            sawLower = true;
            continue;
        }

        addPiece(i);
        pieceStart = i + 1;
        continue;
    }
    addPiece(i);

    let didFirst = false;
    return pieces.map((piece) => {
        let firstChar = piece[0];
        if (upperFirst || didFirst) {
            firstChar = firstChar.toUpperCase();
        } else {
            firstChar = firstChar.toLowerCase();
            didFirst = true;
        }
        return `${firstChar}${piece.slice(1).toLowerCase()}`;
    }).join("");
}

/**
 * Like JSON.stringify but targets well-formed JS and is slightly more readable
 */
export function serialize(value: any) {
    const visited = new Set();

    function asValidKey(key: string) {
        if (key.match(/[a-z_\$][a-z_\$0-9]*/i)) {
            return key;
        }
        return JSON.stringify(key);
    }
    
    function serializeOne(value: any): string | undefined {
        if (value == undefined || typeof value == "function") {
            return undefined;
        }
        if (value == null) {
            return "null";
        }
        if (typeof value == "bigint" || value instanceof BigInt) {
            return value.toString();
        }
        if (typeof value == "number" || value instanceof Number) {
            return value.toString();
        }
        if (typeof value == "string") {
            return JSON.stringify(value);
        }

        // Composite objects after this
        if (visited.has(value)) {
            return undefined;
        }
        if (value.toJSON) {
            value = JSON.parse(JSON.stringify(value));
        }

        try {
            visited.add(value);

            if (Array.isArray(value)) {
                if (value.length) {
                    return `[ ${value.map(serializeOne).join(", ")} ]`;
                }
                return "[]";
            }

            const entries = Object.entries(value)
                .map(([k, v]) => [ k, serializeOne(v) ])
                .filter(([_k, v]) => v !== undefined)
                .map(([k, v]) => `${asValidKey(k!)}: ${v}`);

            if (!entries.length) {
                return "{}";
            }

            return `{ ${entries.join(", ")} }`
        } finally {
            visited.delete(value);
        }
    }

    return serializeOne(value);
}
