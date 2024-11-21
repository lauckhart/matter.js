/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import colors from "ansi-colors";
import { basename } from "path";
import { Container } from "../docker/container.js";
import { Terminal } from "../docker/terminal.js";
import type { Chip } from "./chip.js";
import { ContainerPaths } from "./config.js";

export async function PythonTests(container: Container): Promise<Chip.Test[]> {
    const files = await container.resolveGlob(`${ContainerPaths.pythonTestDir}/*.py`);

    const tests = Array<Chip.Test>();

    for (const filename of files) {
        const name = basename(filename);
        if (!name.startsWith("TC_") && !name.startsWith("Test")) {
            continue;
        }

        tests.push({
            name,

            /**
             * Python commissioning logic is cleverly hidden in:
             *
             *     connectedhomeip/src/python_testing/chip/testing/matter_testing.py
             */
            async commission(container: Container) {
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

                        // Our PID is meaningless within the container but Python tests (and thus CommandPipe) are
                        // hard-coded to use it in the command FIFO filename
                        "--app-pid",
                        process.pid.toString(),
                    ],
                    Terminal.Line,
                );

                try {
                    for await (const line of terminal) {
                        MockLogger.injectExternalMessage("PAIR", spiffy(line));
                    }
                } catch (e) {
                    throw new Error("Error pairing test app", { cause: e });
                }
            },

            async invoke(container: Container) {
                const terminal = await container.exec(
                    ["python3", filename, "--PICS", ContainerPaths.matterJsPics],
                    Terminal.Line,
                );

                let passed = false;
                for await (const line of terminal) {
                    if (line.indexOf("Final result: PASS") !== -1) {
                        passed = true;
                    }
                    MockLogger.injectExternalMessage("CHIP", spiffy(line));
                }

                if (!passed) {
                    throw new Error("Test exited without error but did not indicate successful test");
                }
            },
        });
    }

    return tests;
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
