/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export function capitalize(text: string) {
    return text[0].toUpperCase() + text.slice(1);
}

/**
 * Converts identifiers of the form "foo-bar", "foo_bar", "foo bar" or "fooBar"
 * into "FooBar" or "fooBar".
 */
export function camelize(name: string, upperFirst = true) {
    const pieces = new Array<string>();
    let pieceStart = 0;
    let sawLower = false;

    let i = 0;
    function addPiece(to: number) {
        if (pieceStart < to) pieces.push(name.slice(pieceStart, i));
        sawLower = false;
    }

    for (; i < name.length; i++) {
        if (name[i] == "-" || name[i] == "_" || name[i] == " " || name[i] == "\n") {
            addPiece(i - 1);
            pieceStart = i + 1;
            continue;
        }

        if (name[i] >= "A" && name[i] <= "Z" && sawLower) {
            addPiece(i);
            pieceStart = i;
            continue;
        }

        if (name[i] >= "a" && name[i] <= "z") {
            sawLower = true;
        }
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
