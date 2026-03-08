/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeRegistry } from "#node-registry.js";
import { type File, Filesystem, LogFile } from "@matter/general";
import { LogsServer } from "@matter/node/behaviors/system/logs";
import { open, stat } from "node:fs/promises";
import { join } from "node:path";
import { Command } from "./command.js";

Command({
    usage: ["<node>", "<node> --follow", "<node> --tail 100", "<node> --since 10m", "<node> --clear"],
    description:
        "Show logs for a node.\n\n" +
        "If the node is running and reachable, queries logs via the remote LogsServer API.  Otherwise falls back to " +
        "reading the log file directly.\n\n" +
        "Use --follow to stream new lines as they are written (like tail -f).  Use --tail to show only the last N " +
        "lines.  Use --since/--until to filter by time (accepts ISO timestamps like 2025-01-15T14:30:00 or relative " +
        'durations like "10m", "2h", "1d").  Use --clear to truncate the log file.  Use --file to force file-based ' +
        "access.",
    positionalArgs: [{ name: "node", type: "string", description: "Node ID" }],
    namedArgs: [
        { name: "follow", description: "Stream new log lines as they are written" },
        { name: "f", description: "Short for --follow" },
        { name: "tail", type: "integer", description: "Show only the last N lines" },
        { name: "n", type: "integer", description: "Short for --tail" },
        {
            name: "since",
            type: "string",
            description: "Show logs since timestamp or relative duration (e.g. 10m, 2h, 1d)",
        },
        { name: "until", type: "string", description: "Show logs until timestamp or relative duration" },
        { name: "clear", description: "Truncate the log file" },
        { name: "file", description: "Force file-based access (skip remote)" },
    ],

    invoke: async function logs(args) {
        const nodeId = args.node;
        if (!nodeId) {
            this.err("Node ID is required\n");
            return;
        }

        const registry = this.env.get(NodeRegistry);
        const logPath = join(registry.storageRoot, nodeId, "matter.log");
        const follow = args.follow || args.f;
        const tailLines = args.tail ?? args.n;

        // Parse time filters
        const since = args.since ? parseTimeArg(args.since) : undefined;
        const until = args.until ? parseTimeArg(args.until) : undefined;

        if (args.since && since === undefined) {
            this.err(`Invalid --since value: "${args.since}"\n`);
            return;
        }
        if (args.until && until === undefined) {
            this.err(`Invalid --until value: "${args.until}"\n`);
            return;
        }

        const queryOptions = { tail: tailLines, since, until };

        // Try remote access unless --file is specified or --follow is active (follow only works locally)
        if (!args.file && !follow) {
            const pid = await registry.readPid(nodeId);
            if (pid !== undefined && registry.isAlive(pid)) {
                try {
                    const remote = await this.node(nodeId);
                    const logsApi = remote.commandsOf(LogsServer);

                    if (args.clear) {
                        await logsApi.clear(undefined);
                        this.out(`Cleared logs for "${nodeId}"\n`);
                        return;
                    }

                    const text = await logsApi.query(queryOptions);
                    if (text) {
                        this.out(text);
                    }
                    return;
                } catch {
                    // Connection failed — fall through to file-based access
                }
            }
        }

        // File-based access
        if (args.clear) {
            await clearLogFile(this, logPath, nodeId);
            return;
        }

        // Check the log file exists
        try {
            await stat(logPath);
        } catch (e) {
            if ((e as NodeJS.ErrnoException).code === "ENOENT") {
                this.err(`No log file for "${nodeId}".  Has the node been started?\n`);
                return;
            }
            throw e;
        }

        const hasTimeFilter = since !== undefined || until !== undefined;

        if (hasTimeFilter) {
            const fs = this.env.get(Filesystem);
            const file = fs.create(`${nodeId}/matter.log`);
            await showFiltered(this, file, queryOptions);
        } else if (tailLines !== undefined) {
            await showTail(this, logPath, tailLines);
        } else if (!follow) {
            await showAll(this, logPath);
        }

        if (follow) {
            await followLog(this, logPath);
        }
    },
});

interface Output {
    out(...text: string[]): void;
}

/**
 * Clear (truncate) the log file, or report if it doesn't exist.
 */
async function clearLogFile(output: Output & { err(...text: string[]): void }, logPath: string, nodeId: string) {
    try {
        const fh = await open(logPath, "a");
        try {
            await fh.truncate(0);
        } finally {
            await fh.close();
        }
        output.out(`Cleared logs for "${nodeId}"\n`);
    } catch (e) {
        if ((e as NodeJS.ErrnoException).code === "ENOENT") {
            output.out(`No log file for "${nodeId}"\n`);
        } else {
            throw e;
        }
    }
}

/**
 * Read and display the entire log file.
 */
async function showAll(output: Output, logPath: string) {
    const fh = await open(logPath, "r");
    try {
        const stream = fh.createReadStream({ encoding: "utf-8" });
        for await (const chunk of stream) {
            output.out(chunk as string);
        }
    } finally {
        await fh.close();
    }
}

/**
 * Read and display the last N lines of the log file.
 */
async function showTail(output: Output, logPath: string, count: number) {
    const fh = await open(logPath, "r");
    try {
        const { size } = await fh.stat();
        if (size === 0) {
            return;
        }

        const chunkSize = 8192;
        const lines = Array<string>();
        let remaining = "";
        let position = size;

        outer: while (position > 0) {
            const readSize = Math.min(chunkSize, position);
            position -= readSize;

            const buf = Buffer.alloc(readSize);
            await fh.read(buf, 0, readSize, position);
            const chunk = buf.toString("utf-8") + remaining;
            remaining = "";

            const parts = chunk.split("\n");

            if (position > 0) {
                remaining = parts.shift()!;
            }

            for (let i = parts.length - 1; i >= 0; i--) {
                if (parts[i] !== "" || lines.length > 0) {
                    lines.unshift(parts[i]);
                }
                if (lines.length >= count) {
                    break outer;
                }
            }
        }

        if (remaining && lines.length < count) {
            lines.unshift(remaining);
        }

        const text = lines.join("\n");
        if (text) {
            output.out(text);
            if (!text.endsWith("\n")) {
                output.out("\n");
            }
        }
    } finally {
        await fh.close();
    }
}

/**
 * Read and display log lines with time-based filtering.
 *
 * Delegates to {@link LogFile.query} using the {@link File} abstraction.
 */
async function showFiltered(output: Output, file: File, options: LogFile.QueryOptions) {
    const text = await LogFile.query(file, options);
    if (text) {
        output.out(text);
    }
}

/**
 * Follow the log file, streaming new lines as they are appended.
 *
 * Watches for file changes and reads new data from the last known position.  Runs until the process is interrupted.
 */
async function followLog(output: Output, logPath: string) {
    const fh = await open(logPath, "r");
    try {
        const { size } = await fh.stat();
        let position = size;

        const read = async () => {
            const { size: currentSize } = await fh.stat();
            if (currentSize <= position) {
                if (currentSize < position) {
                    // File was truncated — reset
                    position = 0;
                }
                return;
            }

            const readSize = currentSize - position;
            const buf = Buffer.alloc(readSize);
            await fh.read(buf, 0, readSize, position);
            position = currentSize;
            output.out(buf.toString("utf-8"));
        };

        // Poll for changes — fs.watch is unreliable for append-mode files on some platforms
        await new Promise<void>((_resolve, reject) => {
            const interval = setInterval(() => {
                read().catch(reject);
            }, 250);

            const onSignal = () => {
                clearInterval(interval);
                process.removeListener("SIGINT", onSignal);
                process.removeListener("SIGTERM", onSignal);
                _resolve();
            };

            process.on("SIGINT", onSignal);
            process.on("SIGTERM", onSignal);
        });
    } finally {
        await fh.close();
    }
}

const DURATION_RE = /^(\d+)(s|m|h|d)$/;

/**
 * Parse a time argument as either an ISO timestamp or a relative duration (e.g. "10m", "2h", "1d").
 *
 * Returns epoch milliseconds, or undefined if the value cannot be parsed.
 */
function parseTimeArg(value: string): number | undefined {
    const m = DURATION_RE.exec(value);
    if (m) {
        const amount = parseInt(m[1]);
        const unit = m[2];
        const multipliers: Record<string, number> = { s: 1000, m: 60_000, h: 3_600_000, d: 86_400_000 };
        return Date.now() - amount * multipliers[unit];
    }

    // Try parsing as a date/timestamp
    const ts = new Date(value).getTime();
    if (!isNaN(ts)) {
        return ts;
    }

    return undefined;
}
