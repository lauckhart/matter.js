/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { parse } from "path";
import { Container } from "../docker/container.js";
import { Terminal } from "../docker/terminal.js";
import type { Chip } from "./chip.js";
import { ContainerPaths } from "./config.js";
import { Internal } from "./internal.js";
import { filterWithGlob, testNameOf } from "./support.js";

const definitions = Array<string>();

export function PythonTests(testee: Chip.Subject, includeGlob: string, excludeGlob?: string) {
    let tests = filterWithGlob(definitions, includeGlob);
    if (excludeGlob !== undefined) {
        tests = filterWithGlob(tests, excludeGlob, true);
    }

    if (tests.length === 0) {
        throw new Error(`Python test glob ${includeGlob} matched no tests`);
    }

    for (const file of tests) {
        const name = parse(file).name;
        Internal.implement(testee, {
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
                        "onnetwork-long",

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

            async invoke(container) {
                const terminal = await container.exec(
                    ["python3", `${ContainerPaths.pythonTestDir}/${name}.py`, "--PICS", ContainerPaths.matterJsPics],
                    Terminal.Line,
                );
                for await (const line of terminal) {
                    // TODO - pretty this up
                    MockLogger.injectExternalMessage("CHIP", line);
                }
            },
        });
    }
}

export namespace PythonTests {
    export async function initialize(container: Container) {
        const files = await container.resolveGlob(`${ContainerPaths.yamlTestDir}/Test_*.yaml`);
        definitions.push(...files.map(testNameOf));
    }
}
