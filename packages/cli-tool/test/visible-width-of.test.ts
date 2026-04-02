/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// TODO — these tests should move to packages/tools/test/ when matter-build respects tsc project reference ordering

import { ansi, visibleWidthOf } from "@matter/tools/ansi-text";

describe("visibleWidthOf", () => {
    it("measures plain ASCII", () => {
        expect(visibleWidthOf("hello")).equal(5);
        expect(visibleWidthOf("")).equal(0);
        expect(visibleWidthOf("a b c")).equal(5);
    });

    it("skips zero-width characters", () => {
        // ZWSP, ZWJ, BOM
        expect(visibleWidthOf("a\u200bb\u200dc\ufeff")).equal(3);
    });

    it("counts surrogate pairs as single character", () => {
        // 🔥 is a surrogate pair
        expect(visibleWidthOf("🔥")).equal(1);
        expect(visibleWidthOf("a🔥b")).equal(3);
    });

    it("skips ANSI CSI sequences", () => {
        // Bold on/off
        expect(visibleWidthOf("\x1b[1mhello\x1b[22m")).equal(5);
        // Cyan
        expect(visibleWidthOf("\x1b[36mtest\x1b[39m")).equal(4);
        // Multiple parameters
        expect(visibleWidthOf("\x1b[1;4mtext\x1b[22;24m")).equal(4);
    });

    it("handles TextBuilder-styled strings", () => {
        const styled = ansi.cyan("hello").toString();
        expect(visibleWidthOf(styled)).equal(5);

        const bold = ansi.bold.underline("heading").toString();
        expect(visibleWidthOf(bold)).equal(7);
    });

    it("handles mixed styled and plain content", () => {
        const text = "prefix " + ansi.cyan("styled").toString() + " suffix";
        // "prefix " (7) + "styled" (6) + " suffix" (7) = 20
        expect(visibleWidthOf(text)).equal(20);
    });
});
