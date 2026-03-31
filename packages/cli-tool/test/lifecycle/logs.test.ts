/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeRegistry } from "#node-registry.js";
import { mkdir, mkdtemp, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createTestDomain, TestDomain } from "./test-domain.js";

// Import commands so they register on `bin`
import "#commands/index.js";

describe("Logs Command", () => {
    let tmpDir: string;
    let td: TestDomain;
    let savedPathRoot: string | undefined;

    before(async () => {
        tmpDir = await mkdtemp(join(tmpdir(), "matter-test-"));
        savedPathRoot = process.env.MATTER_PATH_ROOT;
        process.env.MATTER_PATH_ROOT = tmpDir;
        td = await createTestDomain(tmpDir);
    });

    afterEach(async () => {
        // Verify no unexpected errors were emitted
        expect(td.errors, `Unexpected errors: ${td.errors.join("")}`).to.be.empty;

        // Clean tmpDir contents and reset captured output
        const entries = await readdir(tmpDir);
        await Promise.all(entries.map(e => rm(join(tmpDir, e), { recursive: true, force: true })));
        td.reset();
    });

    after(async () => {
        // Restore env
        if (savedPathRoot === undefined) {
            delete process.env.MATTER_PATH_ROOT;
        } else {
            process.env.MATTER_PATH_ROOT = savedPathRoot;
        }

        // Clean up temp dir
        await rm(tmpDir, { recursive: true, force: true });
    });

    function output() {
        return td.output.join("");
    }

    function registry() {
        return td.domain.env.get(NodeRegistry);
    }

    it("shows log file contents", async () => {
        const nodeDir = join(tmpDir, "mynode");
        await mkdir(nodeDir, { recursive: true });
        await writeFile(join(nodeDir, "matter.log"), "line1\nline2\nline3\n");
        await registry().register("mynode", "device");

        await td.domain.execute("logs mynode");

        expect(output()).to.equal("line1\nline2\nline3\n");
    });

    it("shows last N lines with --tail", async () => {
        const nodeDir = join(tmpDir, "mynode");
        await mkdir(nodeDir, { recursive: true });
        await writeFile(join(nodeDir, "matter.log"), "line1\nline2\nline3\nline4\nline5\n");
        await registry().register("mynode", "device");

        await td.domain.execute("logs mynode --tail 2");

        expect(output()).to.equal("line4\nline5\n");
    });

    it("clears log file with --clear", async () => {
        const nodeDir = join(tmpDir, "mynode");
        await mkdir(nodeDir, { recursive: true });
        await writeFile(join(nodeDir, "matter.log"), "old logs\n");
        await registry().register("mynode", "device");

        await td.domain.execute("logs mynode --clear");

        expect(output()).to.include("Cleared logs");
    });

    it("reports missing log file", async () => {
        await registry().register("mynode", "device");

        await td.domain.execute("logs mynode");

        expect(td.errors.join("")).to.include("No log file");
        td.errors.length = 0;
    });
});
