/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MockFilesystem } from "#fs/MockFilesystem.js";
import { LogFile } from "#log/LogFile.js";

describe("LogFile", () => {
    let fs: MockFilesystem;

    beforeEach(() => {
        fs = new MockFilesystem();
    });

    function writeLog(name: string, content: string) {
        return fs.file(name).write(content);
    }

    describe("query", () => {
        it("returns all content when no options specified", async () => {
            await writeLog("test.log", "line1\nline2\nline3\n");
            const result = await LogFile.query(fs.file("test.log"));
            expect(result).equal("line1\nline2\nline3\n");
        });

        it("returns empty string for empty file", async () => {
            await writeLog("test.log", "");
            const result = await LogFile.query(fs.file("test.log"));
            expect(result).equal("");
        });
    });

    describe("tail", () => {
        it("returns last N lines", async () => {
            await writeLog("test.log", "line1\nline2\nline3\nline4\nline5\n");
            const result = await LogFile.query(fs.file("test.log"), { tail: 2 });
            expect(result).equal("line4\nline5\n");
        });

        it("returns all lines when tail exceeds line count", async () => {
            await writeLog("test.log", "line1\nline2\n");
            const result = await LogFile.query(fs.file("test.log"), { tail: 10 });
            expect(result).equal("line1\nline2\n");
        });

        it("handles file without trailing newline", async () => {
            await writeLog("test.log", "line1\nline2\nline3");
            const result = await LogFile.query(fs.file("test.log"), { tail: 2 });
            expect(result).equal("line2\nline3\n");
        });

        it("returns single line", async () => {
            await writeLog("test.log", "line1\nline2\nline3\n");
            const result = await LogFile.query(fs.file("test.log"), { tail: 1 });
            expect(result).equal("line3\n");
        });

        it("returns empty string for empty file", async () => {
            await writeLog("test.log", "");
            const result = await LogFile.query(fs.file("test.log"), { tail: 5 });
            expect(result).equal("");
        });
    });

    describe("since", () => {
        it("filters lines by timestamp", async () => {
            const content = [
                "2025-01-15 10:00:00.000 INFO  test message 1",
                "2025-01-15 11:00:00.000 INFO  test message 2",
                "2025-01-15 12:00:00.000 INFO  test message 3",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const since = new Date("2025-01-15T11:00:00.000").getTime();
            const result = await LogFile.query(fs.file("test.log"), { since });
            expect(result).equal(
                "2025-01-15 11:00:00.000 INFO  test message 2\n2025-01-15 12:00:00.000 INFO  test message 3\n",
            );
        });

        it("includes continuation lines with their parent entry", async () => {
            const content = [
                "2025-01-15 10:00:00.000 INFO  early message",
                "2025-01-15 11:00:00.000 ERROR something broke",
                "  at Object.run (file.ts:10)",
                "  at main (index.ts:5)",
                "2025-01-15 12:00:00.000 INFO  recovery",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const since = new Date("2025-01-15T11:00:00.000").getTime();
            const result = await LogFile.query(fs.file("test.log"), { since });
            expect(result).equal(
                [
                    "2025-01-15 11:00:00.000 ERROR something broke",
                    "  at Object.run (file.ts:10)",
                    "  at main (index.ts:5)",
                    "2025-01-15 12:00:00.000 INFO  recovery",
                    "",
                ].join("\n"),
            );
        });

        it("excludes continuation lines when parent is filtered out", async () => {
            const content = [
                "2025-01-15 10:00:00.000 ERROR old error",
                "  at Object.run (file.ts:10)",
                "2025-01-15 12:00:00.000 INFO  new message",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const since = new Date("2025-01-15T11:00:00.000").getTime();
            const result = await LogFile.query(fs.file("test.log"), { since });
            expect(result).equal("2025-01-15 12:00:00.000 INFO  new message\n");
        });
    });

    describe("until", () => {
        it("filters lines by end timestamp", async () => {
            const content = [
                "2025-01-15 10:00:00.000 INFO  message 1",
                "2025-01-15 11:00:00.000 INFO  message 2",
                "2025-01-15 12:00:00.000 INFO  message 3",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const until = new Date("2025-01-15T11:00:00.000").getTime();
            const result = await LogFile.query(fs.file("test.log"), { until });
            expect(result).equal("2025-01-15 10:00:00.000 INFO  message 1\n2025-01-15 11:00:00.000 INFO  message 2\n");
        });
    });

    describe("since + until", () => {
        it("filters to a time window", async () => {
            const content = [
                "2025-01-15 09:00:00.000 INFO  too early",
                "2025-01-15 10:00:00.000 INFO  in range 1",
                "2025-01-15 11:00:00.000 INFO  in range 2",
                "2025-01-15 12:00:00.000 INFO  too late",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const since = new Date("2025-01-15T10:00:00.000").getTime();
            const until = new Date("2025-01-15T11:00:00.000").getTime();
            const result = await LogFile.query(fs.file("test.log"), { since, until });
            expect(result).equal(
                "2025-01-15 10:00:00.000 INFO  in range 1\n2025-01-15 11:00:00.000 INFO  in range 2\n",
            );
        });
    });

    describe("since + tail", () => {
        it("applies tail after time filtering", async () => {
            const content = [
                "2025-01-15 09:00:00.000 INFO  too early",
                "2025-01-15 10:00:00.000 INFO  match 1",
                "2025-01-15 11:00:00.000 INFO  match 2",
                "2025-01-15 12:00:00.000 INFO  match 3",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const since = new Date("2025-01-15T10:00:00.000").getTime();
            const result = await LogFile.query(fs.file("test.log"), { since, tail: 2 });
            expect(result).equal("2025-01-15 11:00:00.000 INFO  match 2\n2025-01-15 12:00:00.000 INFO  match 3\n");
        });
    });

    describe("ANSI formatted logs", () => {
        it("parses timestamps with leading ANSI escape sequences", async () => {
            const content = [
                "\x1b[2;39m2025-01-15 10:00:00.000 INFO  \x1b[0m\x1b[90;1mTestFacility       \x1b[0m early",
                "\x1b[2;39m2025-01-15 11:00:00.000 INFO  \x1b[0m\x1b[90;1mTestFacility       \x1b[0m later",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const since = new Date("2025-01-15T11:00:00.000").getTime();
            const result = await LogFile.query(fs.file("test.log"), { since });
            expect(result).equal(
                "\x1b[2;39m2025-01-15 11:00:00.000 INFO  \x1b[0m\x1b[90;1mTestFacility       \x1b[0m later\n",
            );
        });

        it("handles multiple ANSI escapes before timestamp", async () => {
            const content = [
                "\x1b[0m\x1b[2m\x1b[39m2025-01-15 10:00:00.000 INFO  message",
                "\x1b[0m\x1b[2m\x1b[39m2025-01-15 12:00:00.000 INFO  later message",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const since = new Date("2025-01-15T11:00:00.000").getTime();
            const result = await LogFile.query(fs.file("test.log"), { since });
            expect(result).equal("\x1b[0m\x1b[2m\x1b[39m2025-01-15 12:00:00.000 INFO  later message\n");
        });

        it("tail works with ANSI formatted lines", async () => {
            const content = [
                "\x1b[2;39m2025-01-15 10:00:00.000 INFO  \x1b[0m first",
                "\x1b[2;39m2025-01-15 11:00:00.000 INFO  \x1b[0m second",
                "\x1b[2;39m2025-01-15 12:00:00.000 INFO  \x1b[0m third",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const result = await LogFile.query(fs.file("test.log"), { tail: 1 });
            expect(result).equal("\x1b[2;39m2025-01-15 12:00:00.000 INFO  \x1b[0m third\n");
        });
    });

    describe("binary search boundary precision", () => {
        it("includes entry exactly at since timestamp", async () => {
            const content = [
                "2025-01-15 10:00:00.000 INFO  before",
                "2025-01-15 11:00:00.000 INFO  exact match",
                "2025-01-15 12:00:00.000 INFO  after",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const since = new Date("2025-01-15T11:00:00.000").getTime();
            const result = await LogFile.query(fs.file("test.log"), { since });
            expect(result).equal("2025-01-15 11:00:00.000 INFO  exact match\n2025-01-15 12:00:00.000 INFO  after\n");
        });

        it("includes entry exactly at until timestamp", async () => {
            const content = [
                "2025-01-15 10:00:00.000 INFO  before",
                "2025-01-15 11:00:00.000 INFO  exact match",
                "2025-01-15 12:00:00.000 INFO  after",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const until = new Date("2025-01-15T11:00:00.000").getTime();
            const result = await LogFile.query(fs.file("test.log"), { until });
            expect(result).equal("2025-01-15 10:00:00.000 INFO  before\n2025-01-15 11:00:00.000 INFO  exact match\n");
        });
    });

    describe("continuation lines at search boundaries", () => {
        it("includes continuation lines when parent is at since boundary", async () => {
            const content = [
                "2025-01-15 10:00:00.000 INFO  early",
                "2025-01-15 11:00:00.000 ERROR at boundary",
                "  stack trace line 1",
                "  stack trace line 2",
                "2025-01-15 12:00:00.000 INFO  later",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const since = new Date("2025-01-15T11:00:00.000").getTime();
            const result = await LogFile.query(fs.file("test.log"), { since });
            expect(result).equal(
                [
                    "2025-01-15 11:00:00.000 ERROR at boundary",
                    "  stack trace line 1",
                    "  stack trace line 2",
                    "2025-01-15 12:00:00.000 INFO  later",
                    "",
                ].join("\n"),
            );
        });

        it("includes continuation lines when parent is at until boundary", async () => {
            const content = [
                "2025-01-15 10:00:00.000 INFO  early",
                "2025-01-15 11:00:00.000 ERROR at boundary",
                "  stack trace line 1",
                "  stack trace line 2",
                "2025-01-15 12:00:00.000 INFO  later",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const until = new Date("2025-01-15T11:00:00.000").getTime();
            const result = await LogFile.query(fs.file("test.log"), { until });
            expect(result).equal(
                [
                    "2025-01-15 10:00:00.000 INFO  early",
                    "2025-01-15 11:00:00.000 ERROR at boundary",
                    "  stack trace line 1",
                    "  stack trace line 2",
                    "",
                ].join("\n"),
            );
        });
    });

    describe("large file convergence", () => {
        it("handles many entries with binary search", async () => {
            const lines = Array<string>();
            for (let i = 0; i < 200; i++) {
                const hour = String(Math.floor(i / 60)).padStart(2, "0");
                const minute = String(i % 60).padStart(2, "0");
                lines.push(`2025-01-15 ${hour}:${minute}:00.000 INFO  message ${i}`);
            }
            lines.push("");
            await writeLog("test.log", lines.join("\n"));

            const since = new Date("2025-01-15T01:30:00.000").getTime();
            const until = new Date("2025-01-15T01:32:00.000").getTime();
            const result = await LogFile.query(fs.file("test.log"), { since, until });
            expect(result).equal(
                [
                    "2025-01-15 01:30:00.000 INFO  message 90",
                    "2025-01-15 01:31:00.000 INFO  message 91",
                    "2025-01-15 01:32:00.000 INFO  message 92",
                    "",
                ].join("\n"),
            );
        });
    });

    describe("tail + since + until combined", () => {
        it("applies tail within time window", async () => {
            const content = [
                "2025-01-15 09:00:00.000 INFO  too early",
                "2025-01-15 10:00:00.000 INFO  match 1",
                "2025-01-15 11:00:00.000 INFO  match 2",
                "2025-01-15 12:00:00.000 INFO  match 3",
                "2025-01-15 13:00:00.000 INFO  too late",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const since = new Date("2025-01-15T10:00:00.000").getTime();
            const until = new Date("2025-01-15T12:00:00.000").getTime();
            const result = await LogFile.query(fs.file("test.log"), { since, until, tail: 2 });
            expect(result).equal("2025-01-15 11:00:00.000 INFO  match 2\n2025-01-15 12:00:00.000 INFO  match 3\n");
        });
    });

    describe("multi-byte UTF-8 characters", () => {
        it("preserves multi-byte characters in time-filtered results", async () => {
            const content = [
                "2025-01-15 10:00:00.000 INFO  早期メッセージ",
                "2025-01-15 11:00:00.000 INFO  中間メッセージ 🎉",
                "2025-01-15 12:00:00.000 INFO  最後のメッセージ",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const since = new Date("2025-01-15T11:00:00.000").getTime();
            const result = await LogFile.query(fs.file("test.log"), { since });
            expect(result).equal(
                "2025-01-15 11:00:00.000 INFO  中間メッセージ 🎉\n2025-01-15 12:00:00.000 INFO  最後のメッセージ\n",
            );
        });

        it("preserves multi-byte characters with tail", async () => {
            const content = [
                "2025-01-15 10:00:00.000 INFO  日本語テスト①",
                "2025-01-15 11:00:00.000 INFO  日本語テスト②",
                "2025-01-15 12:00:00.000 INFO  日本語テスト③",
                "",
            ].join("\n");
            await writeLog("test.log", content);

            const result = await LogFile.query(fs.file("test.log"), { tail: 2 });
            expect(result).equal(
                "2025-01-15 11:00:00.000 INFO  日本語テスト②\n2025-01-15 12:00:00.000 INFO  日本語テスト③\n",
            );
        });
    });

    describe("clear", () => {
        it("truncates the log file", async () => {
            await writeLog("test.log", "some log content\nmore content\n");

            await LogFile.clear(fs.file("test.log"));

            const result = await fs.file("test.log").readAllText();
            expect(result).equal("");
        });

        it("works on an already empty file", async () => {
            await writeLog("test.log", "");

            await LogFile.clear(fs.file("test.log"));

            const result = await fs.file("test.log").readAllText();
            expect(result).equal("");
        });
    });
});
