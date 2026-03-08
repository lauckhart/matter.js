/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { File } from "../fs/File.js";

/**
 * Regex matching the timestamp prefix of a matter.js log line: `YYYY-MM-DD HH:MM:SS.mmm`
 *
 * The timestamp may be preceded by ANSI escape sequences (e.g. `\x1b[2;39m`) when the log uses ANSI formatting.
 */
// oxlint-disable-next-line no-control-regex -- matching ANSI escape sequences requires literal \x1b
const TIMESTAMP_RE = /^(?:\x1b[^a-zA-Z]*[a-zA-Z])*(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3})/;

/**
 * Parse a matter.js log timestamp into epoch milliseconds.  Returns undefined if the line doesn't start with a
 * recognizable timestamp.
 *
 * Handles both plain-text and ANSI-formatted log lines.
 */
function parseLogTimestamp(line: string): number | undefined {
    const m = TIMESTAMP_RE.exec(line);
    if (!m) {
        return undefined;
    }
    // The format is local time without timezone info, so parse as local
    return new Date(m[1].replace(" ", "T")).getTime();
}

/**
 * Platform-agnostic log file operations using the {@link File} abstraction.
 */
export namespace LogFile {
    export interface QueryOptions {
        /**
         * Return only the last N lines.
         */
        tail?: number;

        /**
         * Show logs since this timestamp (epoch ms).  Lines with timestamps before this value are excluded.
         */
        since?: number;

        /**
         * Show logs until this timestamp (epoch ms).  Lines with timestamps after this value are excluded.
         */
        until?: number;
    }

    /**
     * Query a log file, returning text content.
     *
     * When {@link QueryOptions.since} or {@link QueryOptions.until} are set, uses binary search on the file's byte
     * offsets to efficiently locate the matching range without reading the entire file.
     *
     * When {@link QueryOptions.tail} is set, reads backward from the end of the matching range.
     *
     * Continuation lines (those without a timestamp) inherit the timestamp of the preceding log entry.
     */
    export async function query(file: File, options?: QueryOptions): Promise<string> {
        const tail = options?.tail;
        const since = options?.since;
        const until = options?.until;

        // Fast path: no filtering at all
        if (tail === undefined && since === undefined && until === undefined) {
            return await file.readAllText();
        }

        const handle = await file.open("r");
        try {
            const { size } = await handle.stat();
            if (size === 0) {
                return "";
            }

            const cursor = handle.cursor(size);

            let startPos = 0;
            let endPos = size;

            if (since !== undefined) {
                startPos = await binarySearchBound(cursor, since, "gte");
            }
            if (until !== undefined) {
                endPos = await binarySearchBound(cursor, until, "gt");
            }
            if (startPos >= endPos) {
                return "";
            }

            if (tail !== undefined) {
                return await readTailInRange(cursor, startPos, endPos, tail);
            }
            return await readRange(cursor, startPos, endPos);
        } finally {
            await handle.close();
        }
    }

    /**
     * Truncate a log file.
     */
    export async function clear(file: File): Promise<void> {
        const handle = await file.open("a");
        try {
            await handle.truncate();
        } finally {
            await handle.close();
        }
    }
}

/**
 * Given an arbitrary byte offset, find the start of the line containing it.  Scans backward for `\n` (safe in UTF-8)
 * using small reads.  Returns byte offset of the first character after the `\n`, or 0 if no newline found.
 */
async function findLineStart(cursor: File.Cursor, position: number): Promise<number> {
    const chunkSize = 256;
    let pos = position;

    while (pos > 0) {
        const readStart = Math.max(0, pos - chunkSize);
        cursor.seek(readStart);
        const buf = await cursor.read(pos - readStart);

        for (let i = buf.length - 1; i >= 0; i--) {
            if (buf[i] === 0x0a) {
                return readStart + i + 1;
            }
        }
        pos = readStart;
    }

    return 0;
}

/**
 * Read one line starting at a byte position.  Returns the decoded line text (without trailing newline).
 *
 * Searches for `\n` (0x0a) in raw bytes before decoding, so multi-byte UTF-8 characters split across read boundaries
 * are decoded correctly.
 */
async function readLineAt(cursor: File.Cursor, position: number): Promise<string> {
    const chunkSize = 512;
    const chunks = Array<Uint8Array>();

    cursor.seek(position);
    while (cursor.position < cursor.max) {
        const readLen = Math.min(chunkSize, cursor.max - cursor.position);
        const buf = await cursor.read(readLen, true);
        const nlIndex = buf.indexOf(0x0a);

        if (nlIndex !== -1) {
            chunks.push(buf.subarray(0, nlIndex));
            return new TextDecoder().decode(concatBytes(chunks));
        }

        chunks.push(buf);
    }

    return new TextDecoder().decode(concatBytes(chunks));
}

/**
 * Find the timestamp of the log entry at or before the given line start.  Continuation lines (stack traces) have no
 * timestamp, so we scan backward to find the owning entry.  Returns `{ position, timestamp }` or undefined.
 */
async function findEntryTimestamp(cursor: File.Cursor, lineStart: number
): Promise<{ position: number; timestamp: number } | undefined> {
    let pos = lineStart;
    const maxBacktrack = 50;

    for (let i = 0; i < maxBacktrack; i++) {
        const line = await readLineAt(cursor, pos);
        const ts = parseLogTimestamp(line);
        if (ts !== undefined) {
            return { position: pos, timestamp: ts };
        }
        if (pos === 0) {
            return undefined;
        }
        // Scan to previous line
        pos = await findLineStart(cursor, pos - 1);
    }

    return undefined;
}

/**
 * Binary search for a byte position boundary.
 *
 * - `"gte"`: first entry with `ts >= target` (for `since`)
 * - `"gt"`: first entry with `ts > target` (for `until` — includes entries *at* the boundary)
 */
async function binarySearchBound(
    cursor: File.Cursor,
    targetTs: number,
    mode: "gte" | "gt",
): Promise<number> {
    let low = 0;
    let high = cursor.max;
    let result = cursor.max; // default: no match found → beyond end

    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        const lineStart = await findLineStart(cursor, mid);
        const entry = await findEntryTimestamp(cursor, lineStart);

        if (entry === undefined) {
            // No timestamp found — skip this region
            low = mid + 1;
            continue;
        }

        const matches = mode === "gte" ? entry.timestamp >= targetTs : entry.timestamp > targetTs;

        if (matches) {
            result = entry.position;
            high = entry.position;
        } else {
            // Need to advance past this entry.  Guard against stalls when multiple mids land in the same entry.
            if (entry.position <= low) {
                low = mid + 1;
            } else {
                low = entry.position + 1;
            }
        }
    }

    return result;
}

/**
 * Forward read from `start` to `end` in chunks.
 *
 * Uses a streaming {@link TextDecoder} so multi-byte UTF-8 characters split across chunk boundaries are decoded
 * correctly.
 */
async function readRange(cursor: File.Cursor, start: number, end: number): Promise<string> {
    const decoder = new TextDecoder();
    let result = "";

    cursor.seek(start);
    while (cursor.position < end) {
        const readLen = Math.min(8192, end - cursor.position);
        const buf = await cursor.read(readLen);
        result += decoder.decode(buf, { stream: cursor.position < end });
    }

    if (!result) {
        return "";
    }
    return result.endsWith("\n") ? result : result + "\n";
}

/**
 * Read the last N lines within a byte range [start, end).
 *
 * Reads backward in raw byte chunks, counting `\n` (0x0a) bytes to determine when enough data has been read, then
 * concatenates and decodes the bytes in a single pass.  This avoids corrupting multi-byte UTF-8 characters that
 * straddle chunk boundaries.
 */
async function readTailInRange(cursor: File.Cursor, start: number, end: number, count: number): Promise<string> {
    const chunkSize = 8192;
    const chunks = Array<Uint8Array>();
    let nlCount = 0;
    let position = end;

    // Read backward, accumulating raw bytes and counting newlines
    while (position > start) {
        const readSize = Math.min(chunkSize, position - start);
        position -= readSize;

        cursor.seek(position);
        const buf = await cursor.read(readSize, true);
        chunks.unshift(buf);

        for (let i = buf.length - 1; i >= 0; i--) {
            if (buf[i] === 0x0a) {
                nlCount++;
                // We need more newlines than lines to ensure we have enough content (trailing \n + separators)
                if (nlCount > count) {
                    break;
                }
            }
        }
        if (nlCount > count) {
            break;
        }
    }

    // Concatenate all byte chunks and decode once
    const allBytes = concatBytes(chunks);
    const text = new TextDecoder().decode(allBytes);

    const allLines = text.split("\n");

    // Remove trailing empty element (artifact of trailing newline)
    if (allLines.length > 0 && allLines[allLines.length - 1] === "") {
        allLines.pop();
    }

    // Take last `count` lines
    const selected = allLines.length > count ? allLines.slice(-count) : allLines;

    if (selected.length === 0) {
        return "";
    }
    return selected.join("\n") + "\n";
}

/**
 * Concatenate an array of Uint8Arrays into a single Uint8Array.
 */
function concatBytes(chunks: Uint8Array[]): Uint8Array {
    if (chunks.length === 0) {
        return new Uint8Array(0);
    }
    if (chunks.length === 1) {
        return chunks[0];
    }
    let totalLength = 0;
    for (const chunk of chunks) {
        totalLength += chunk.length;
    }
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks) {
        result.set(chunk, offset);
        offset += chunk.length;
    }
    return result;
}
