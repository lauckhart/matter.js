/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeRegistry } from "#node-registry.js";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createTestDomain, TestDomain } from "./test-domain.js";

// Import commands so they register on `bin`
import "#commands/index.js";

describe("Node Lifecycle", function () {
    let tmpDir: string;
    let td: TestDomain;
    let savedPathRoot: string | undefined;

    beforeEach(async () => {
        tmpDir = await mkdtemp(join(tmpdir(), "matter-test-"));
        savedPathRoot = process.env.MATTER_PATH_ROOT;
        process.env.MATTER_PATH_ROOT = tmpDir;
        td = await createTestDomain(tmpDir);
    });

    afterEach(async function () {
        // Restore env
        if (savedPathRoot === undefined) {
            delete process.env.MATTER_PATH_ROOT;
        } else {
            process.env.MATTER_PATH_ROOT = savedPathRoot;
        }

        // Kill any surviving child processes
        try {
            const registry = td.domain.env.get(NodeRegistry);
            const nodeIds = await registry.allNodeIds();
            for (const nodeId of nodeIds) {
                const pid = await registry.readPid(nodeId);
                if (pid !== undefined && registry.isAlive(pid)) {
                    try {
                        process.kill(pid, "SIGKILL");
                    } catch {
                        // already dead
                    }
                }
            }
        } catch {
            // registry not available
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

    async function waitForDeath(pid: number, timeoutMs = 5000) {
        const start = Date.now();
        while (Date.now() - start < timeoutMs) {
            if (!registry().isAlive(pid)) {
                return;
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }

    describe("register", () => {
        it("registers a controller node", async () => {
            await td.domain.execute("register controller");

            expect(output()).to.include("Registered controller");
            expect(registry().get("controller", "type")).to.equal("controller");
        });
    });

    describe("start and stop", () => {
        it("auto-registers and starts a controller", async function () {
            await td.domain.execute("start controller");

            expect(output()).to.include("Auto-registered");
            expect(output()).to.include("Started node");

            const pid = await registry().readPid("controller");
            expect(pid).to.be.a("number");
            expect(registry().isAlive(pid!)).to.be.true;

            // Clear output for stop
            td.output.length = 0;
            await td.domain.execute("stop controller --force");

            expect(output()).to.include("Killed node");
            await waitForDeath(pid!);
            expect(registry().isAlive(pid!)).to.be.false;
        });

        it("reports when node is not running", async () => {
            await td.domain.execute("register controller");
            td.output.length = 0;

            await td.domain.execute("stop controller");

            expect(output()).to.include("is not running");
        });

        // Completes in ~0.7s on an M4 Mac but may be marginal in CI
        it("gracefully stops a running node", async function () {
            this.timeout(10_000);
            await td.domain.execute("start controller");
            const pid = await registry().readPid("controller");
            expect(pid).to.be.a("number");

            td.output.length = 0;
            td.errors.length = 0;
            await td.domain.execute("stop controller");

            expect(output()).to.include("Stopped node");
            await waitForDeath(pid!);
            expect(registry().isAlive(pid!)).to.be.false;
            expect(td.errors).to.deep.equal([]);
        });

        it("force-kills a running node", async function () {
            await td.domain.execute("start controller");
            const pid = await registry().readPid("controller");
            expect(pid).to.be.a("number");

            td.output.length = 0;
            await td.domain.execute("stop controller --force");

            expect(output()).to.include("Killed node");
            await waitForDeath(pid!);
            expect(registry().isAlive(pid!)).to.be.false;
        });
    });

    describe("restart", () => {
        it("stops and starts a node with a new PID", async function () {
            await td.domain.execute("start controller");
            const pid1 = await registry().readPid("controller");
            expect(pid1).to.be.a("number");

            td.output.length = 0;
            await td.domain.execute("restart controller");

            const pid2 = await registry().readPid("controller");
            expect(pid2).to.be.a("number");
            expect(pid2).to.not.equal(pid1);
            expect(registry().isAlive(pid2!)).to.be.true;

            // Cleanup
            td.output.length = 0;
            td.errors.length = 0;
            await td.domain.execute("stop controller --force");
        });
    });
});
