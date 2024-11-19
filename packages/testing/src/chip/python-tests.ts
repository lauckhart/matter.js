/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { basename } from "path";
import { Container } from "../docker/container.js";
import { Terminal } from "../docker/terminal.js";
import type { Chip } from "./chip.js";
import { ContainerPaths } from "./config.js";

export async function PythonTests(container: Container): Promise<Chip.Test[]> {
    let files = await container.resolveGlob(`${ContainerPaths.pythonTestDir}/*.py`);
    files = files.map(filename => basename(filename)).filter(name => name.startsWith("TC_") || name.startsWith("Test"));

    return files.map(filename => ({
        name: filename,

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
                ],
                Terminal.Line,
            );

            try {
                for await (const line of terminal) {
                    MockLogger.injectExternalMessage("PAIR-PY", line);
                }
            } catch (e) {
                throw new Error("Error pairing test app", { cause: e });
            }
        },

        async invoke(container: Container) {
            const terminal = await container.exec(
                ["python3", `${ContainerPaths.pythonTestDir}/${name}.py`, "--PICS", ContainerPaths.matterJsPics],
                Terminal.Line,
            );
            for await (const line of terminal) {
                // TODO - pretty this up
                MockLogger.injectExternalMessage("CHIP", line);
            }
        },
    }));
}
