/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextRange, TSDocParser } from "@microsoft/tsdoc";
import { SourceFile } from "typescript";
import { Progress } from "../../util/progress.js";

/**
 * Convenience wrapper around tsdoc parser.  Shoots for maximal efficiency.
 */
export class CommentParser {
    #tsdoc = new TSDocParser();
    #progress: Progress;

    constructor(progress: Progress) {
        this.#progress = progress;
    }

    get config() {
        return this.#tsdoc.configuration;
    }

    parse(source: SourceFile, { pos, end }: { pos: number; end: number }) {
        const buffer = source.text;

        // Only consider doc comments
        if (buffer[pos] !== "/" || buffer[pos + 1] !== "*" || buffer[pos + 2] !== "*" || buffer[pos + 3] === "/") {
            return;
        }

        // Ignore license
        for (let i = pos; i < end; i++) {
            if (
                buffer[i] === "@" &&
                buffer[i + 1] === "l" &&
                buffer[i + 2] === "i" &&
                buffer[i + 3] === "c" &&
                buffer[i + 4] === "e" &&
                buffer[i + 5] === "n" &&
                buffer[i + 6] === "s" &&
                buffer[i + 7] === "e"
            ) {
                return;
            }
        }

        // Zero-copy parse
        const context = this.#tsdoc.parseRange(TextRange.fromStringRange(buffer, pos, end));

        for (const message of context.log.messages) {
            this.#progress.warn(message.toString());
        }

        return context.docComment;
    }
}
