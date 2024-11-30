/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import colors from "ansi-colors";
import { basename } from "path";
import YAML from "yaml";
import { Test } from "../device/test.js";
import { Container } from "../docker/container.js";
import { Terminal } from "../docker/terminal.js";
import { parseStep } from "./chip-test-common.js";
import { ContainerPaths } from "./config.js";

export async function PythonTests(container: Container): Promise<Test[]> {
    const files = await container.resolveGlob(`${ContainerPaths.pythonTestDir}/*.py`);

    const tests = Array<Test>();

    for (const filename of files) {
        const name = basename(filename);
        if (!name.startsWith("TC_") && !name.startsWith("Test")) {
            continue;
        }

        tests.push(new PythonTest(name, filename));
    }

    return tests;
}

class PythonTest implements Test {
    #filename: string;
    domain = "python";

    constructor(
        public name: string,
        filename: string,
    ) {
        this.#filename = filename;
    }

    /**
     * Python commissioning logic is cleverly hidden in:
     *
     *     connectedhomeip/src/python_testing/chip/testing/matter_testing.py
     */
    async initializeSubject(container: Container) {
        const terminal = await container.exec(
            [
                "python3",
                ContainerPaths.pythonCommissioner,

                // Python commissioning is only available in test implementations so our "commissioner" is just
                // a random test.  Disable the actual test from running
                "--commission-only",

                "--commissioning-method",
                "on-network",

                "--passcode",
                "20202021",

                "--discriminator",
                "1234",

                // Our PID is meaningless within the container but Python uses in the name of the command pipe
                "--app-pid",
                "1",
            ],
            Terminal.Line,
            {
                cwd: "/tmp",
            },
        );

        try {
            for await (const line of terminal) {
                MockLogger.injectExternalMessage("PAIR", spiffy(line));
            }
        } catch (e) {
            throw new Error("Error pairing test app", { cause: e });
        }
    }

    async invoke(container: Container, step: (title: string) => void) {
        const terminal = await container.exec(await createCommand(container, this.#filename), Terminal.Line, {
            cwd: "/tmp",
        });

        let passed = false;
        for await (let line of terminal) {
            line = parseStep(line, step);

            if (line.indexOf("Final result: PASS") !== -1) {
                passed = true;
            }

            MockLogger.injectExternalMessage("CHIP", spiffy(line));
        }

        if (!passed) {
            throw new Error("Python test exited without error but did not indicate successful test");
        }
    }
}

/**
 * Add consistency and colors to otherwise bland
 */
function spiffy(line: string) {
    let timestamp = "";
    let level = "";
    let facility = "";
    let message = line;

    line = line.trim();

    const logFormat1 = line.match(/^\[MatterTest\] (\d\d-\d\d \d\d:\d\d:\d\d\.\d\d\d) ([A-Z]+) (.*)$/);
    if (logFormat1) {
        [, timestamp, level, message] = logFormat1;
    } else {
        const logFormat2 = line.match(/^([A-Z]+):([^:]+):(.*)$/);
        if (logFormat2) {
            [, level, facility, message] = logFormat2;
        } else {
            // OMFG why do they hate us
            const logFormat3 = line.match(/^\[(\d+\.\d+)\](\[[^\]]+\]) ([^ ]+): (.*)$/);
            if (logFormat3) {
                let someNumbersOfUnknownMeaning;
                [, timestamp, someNumbersOfUnknownMeaning, facility, message] = logFormat3;
                message = `${someNumbersOfUnknownMeaning} ${message}`;
            }
        }
    }

    if (level === "WARN") {
        message = colors.yellow(message);
    } else if (level === "ERROR") {
        message = colors.red(message);
    } else if (level === "CRITICAL" || level === "FATAL") {
        message = colors.red.bold(message);
    }
    // CHIP is very verbose at INFO so just leave it as default dim

    if (facility) {
        message = `${colors.bold(facility)} ${message}`;
    }

    return `${timestamp.padEnd(19)}${level.padEnd(9)}${message}`;
}

/**
 * Each Python test includes YAML defining arguments it expects in CI.  Most of these arguments are copy and pasted
 * boilerplate that we ignore, have reasonable defaults or that we set (e.g. PICS file).  Some however must be present
 * or the test will not run.  So we must extract these arguments to pass into the script.
 *
 * A program defining mandatory arguments to itself seems silly but we work with what we've got amiright?
 *
 * We read the entire configuration but all we currently extract are arguments to the first run that aren't
 * "boilerplate" arguments that we don't need.
 */
async function createCommand(container: Container, filename: string) {
    const result = ["python3", filename, "--PICS", ContainerPaths.matterJsPics];

    const terminal = await container.exec(["cat", filename], Terminal.Line);

    const yamlLines = new Array<string>();
    let readingYaml = false;
    for await (const line of terminal) {
        if (readingYaml) {
            if (line.indexOf("=== END CI TEST ARGUMENTS ===") !== -1) {
                break;
            }

            // YAML in comment is a little underspecified but by convention seems first space is insignificant
            yamlLines.push(line.replace(/^\s*# /, ""));
            continue;
        }

        if (line.indexOf("=== BEGIN CI TEST ARGUMENTS ===") !== -1) {
            readingYaml = true;
            continue;
        }
    }

    await terminal.close();

    if (!yamlLines.length) {
        return result;
    }

    const config = YAML.parse(yamlLines.join("\n"));
    const runs = config?.["test-runner-runs"];
    if (!runs) {
        return result;
    }

    const run1 = Object.values(runs)?.[0] as any;
    if (!run1) {
        return result;
    }

    let args = run1["script-args"];
    if (typeof args !== "string") {
        return result;
    }

    args = args.replace(/--(?:storage-path|commissioning-method|discriminator|passcode|trace-to|PICS)\s+\S+\s+/g, "");
    result.push(...args.trim().split(/\s+/));

    return result;
}
