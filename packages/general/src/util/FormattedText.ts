/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

const LIST_INDENT = 2;

export { camelize, describeList, serialize } from "./String.js";

/**
 * Performs word wrap.  Input is assumed to be a series of paragraphs separated by a newline.  Output is an array of
 * formatted lines.
 *
 * Contains specialized support for lists, ESDoc directives and ANSI escape codes.
 */
export function FormattedText(text: string, width = 120) {
    const structure = detectStructure(text);
    return formatStructure(structure, width);
}

/**
 * Types of things we consider "blocks".  Most blocks are lists but we also support markdown-style quotes prefixed with
 * ">".
 */
enum BlockType {
    Bullet1 = "•",
    Bullet2 = "◦",
    Bullet3 = "▪",
    Bullet4 = "○",
    Bullet5 = "●",
    Bullet6 = "‣",
    Bullet7 = "⁃",
    Bullet8 = "◘",
    Number = "number",
    LowerAlpha = "alpha",
    UpperAlpha = "ALPHA",
    LowerRoman = "roman",
    UpperRoman = "ROMAN",
    Quote = ">",
}

const Bullets = Object.entries(BlockType)
    .filter(([key]) => key.startsWith("Bullet"))
    .map(([, value]) => value);

function detectBlock(text: string, blockState: BlockType[]) {
    function enterBlock(blockType: BlockType) {
        const existing = blockState.indexOf(blockType);
        if (existing == -1) {
            blockState.push(blockType);
        } else {
            blockState.length = existing + 1;
        }
    }

    for (const value of Bullets) {
        if (text[0] === value && text[1] === " ") {
            enterBlock(text[0] as BlockType);
            return;
        }
    }

    if (text[0] === BlockType.Quote && text[1] === " ") {
        enterBlock(BlockType.Quote);
        return;
    }

    function detectEnumeration(test: RegExp, blockType: BlockType, first: string) {
        if (!text.match(test)) {
            return false;
        }

        if (blockState.indexOf(blockType) != -1 || text.startsWith(`${first}.`)) {
            enterBlock(blockType);
            return true;
        }

        return false;
    }

    if (detectEnumeration(/^\d+\./, BlockType.Number, "1")) return;
    if (detectEnumeration(/^[ivx]+\./, BlockType.LowerRoman, "i")) return;
    if (detectEnumeration(/^[IVX]+\./, BlockType.UpperRoman, "I")) return;
    if (detectEnumeration(/^[a-z]+\./, BlockType.LowerAlpha, "a")) return;
    if (detectEnumeration(/^[A-Z]+\./, BlockType.UpperAlpha, "A")) return;

    blockState.length = 0;
}

type TextStructure = {
    prefixWidth: number;
    blockType?: BlockType;
    entries: (string | TextStructure)[];
};

function extractPrefix(text: string) {
    const match = text.match(/^(\S+)\s+($|\S.*$)/);
    if (match) {
        return { prefix: match[1], text: match[2] };
    }
    return { prefix: text, text: "" };
}

function detectStructure(text: string): TextStructure {
    if (text == "") {
        return { prefixWidth: 0, entries: [] };
    }
    const paragraphs = text.split(/\n+/).map(paragraph => paragraph.trim().replace(/\s+/g, " "));
    if (!paragraphs.length) {
        return { prefixWidth: 0, entries: [] };
    }

    const blockState = Array<BlockType>();
    let index = 0;

    return processLevel();

    function processLevel() {
        const level = blockState.length;
        const structure = {
            prefixWidth: 0,
            entries: [],
        } as TextStructure;

        if (level) {
            structure.blockType = blockState[level - 1];
        }

        while (index < paragraphs.length) {
            detectBlock(paragraphs[index], blockState);

            // If we've moved to a higher block, we're done with this level
            if (blockState.length < level) {
                break;
            }

            // If we've moved to a deeper block, process the new level before continuing
            if (blockState.length > level) {
                structure.entries.push(processLevel());
                if (blockState.length < level || index >= paragraphs.length) {
                    break;
                }
            }

            // This paragraph is in this level
            structure.entries.push(paragraphs[index]);

            // In blocks, update the prefix width so we know how far out to pad when formatting
            if (level) {
                const { prefix } = extractPrefix(paragraphs[index]);
                if (prefix.length > structure.prefixWidth) {
                    structure.prefixWidth = prefix.length;
                }
            }

            // Move to next line
            index++;
        }

        return structure;
    }
}

function wrapParagraph(input: string, into: string[], wrapWidth: number, padding: number, prefixWidth: number) {
    const segments = input.split(/\s+/);
    if (!segments) {
        return;
    }

    // Reassemble text surrounded by "{@" and "}" as this is likely an ESDoc directive and ESDoc doesn't like directives
    // wrapped
    for (let i = 0; i < segments?.length; i++) {
        if (!segments[i].includes("{@")) {
            continue;
        }
        for (let j = i; j < segments.length; j++) {
            if (segments[j].includes("}")) {
                segments.splice(i, j - i + 1, segments.slice(i, j + 1).join(" "));
                break;
            }
        }
    }

    // Configure for block prefix formatting
    let wrapPrefix: string;
    if (prefixWidth) {
        // After wrapping this prefix will pad out subsequent entries
        wrapPrefix = "".padStart(prefixWidth + 1, " ");
    } else {
        // No prefix
        wrapPrefix = "";
    }

    // Wrapping setup.  Track the portions of the line and current length
    const line = Array<string>();
    let length = 0;

    // Perform actual wrapping
    let pushedOne = false;
    let needWrapPrefix = false;
    for (const s of segments) {
        const segmentLength = visibleLengthOf(s);

        // If we'll extend too far, start on a new line
        if (length && length + segmentLength > wrapWidth) {
            addLine();
            line.length = length = 0;
            needWrapPrefix = true;
        }

        // Add padding if this is a new line
        if (!line.length && padding) {
            line.push("".padStart(padding, " "));
            length += padding;
        }

        // Add wrap prefix if this is a new line in a block
        if (needWrapPrefix) {
            needWrapPrefix = false;
            line.push(wrapPrefix);
            length += wrapPrefix.length;
        }

        // Add to the line
        line.push(s);
        line.push(" ");
        length += segmentLength + 1;
    }

    // If there is a remaining line, add it
    line.length = line.length - 1; // Remove ending space
    if (line.length) {
        addLine();
    }

    function addLine() {
        if (!pushedOne) {
            if (into.length) {
                into.push("");
            }
            pushedOne = true;
        }

        into.push(line.join(""));
    }
}

function formatStructure(structure: TextStructure, width: number) {
    const lines = Array<string>();

    function formatLevel(structure: TextStructure, padding: number) {
        for (const entry of structure.entries) {
            if (typeof entry == "string") {
                wrapParagraph(entry, lines, width, padding, structure.prefixWidth);
            } else {
                formatLevel(entry, padding + (entry.blockType === BlockType.Quote ? 0 : LIST_INDENT));
            }
        }
    }

    formatLevel(structure, 0);

    return lines;
}

function visibleLengthOf(text: string) {
    let length = 0;
    for (let i = 0; i < text.length; ) {
        switch (text[i]) {
            case `\u001b`:
                // Escape
                i++;
                const code = text[i];

                if ((code >= "@" && code <= "Z") || code === "-" || code === "_") {
                    // Fe except CSI (control sequence introducer)
                    i++;
                    break;
                }

                if (code === "[") {
                    // CSI
                    i++;
                    while (text[i] >= "0" && text[i] <= "?") {
                        // Parameter
                        i++;
                    }
                    while (text[i] >= " " && text[i] <= "/") {
                        // Intermediate
                        i++;
                    }
                    if (text[i] >= "@" && text[i] <= "~") {
                        // Final
                        i++;
                        break;
                    }
                }

                break;

            case `\u200b`:
                // Zero-width space
                i++;
                break;

            default:
                i++;
                length++;
                break;
        }
    }
    return length;
}
