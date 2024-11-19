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

export function YamlTests(testee: Chip.Subject, includeGlob: string, excludeGlob?: string) {
    let tests = filterWithGlob(definitions, includeGlob);
    if (excludeGlob !== undefined) {
        tests = filterWithGlob(tests, excludeGlob, true);
    }

    if (tests.length === 0) {
        throw new Error(`YAML test glob ${includeGlob} matched no tests`);
    }

    for (const name of tests) {
        Internal.implement(testee, {
            name: parse(name).base,

            async commission(container: Container) {
                const terminal = await container.exec(
                    ["chip-tool", "pairing", "onnetwork-long", "0x12344321", "20202021", "1234"],
                    Terminal.Line,
                );

                try {
                    for await (const line of terminal) {
                        MockLogger.injectExternalMessage("PAIR-YAML", line);
                    }
                } catch (e) {
                    throw new Error("Error pairing test app", { cause: e });
                }
            },

            async invoke(container: Container) {
                const terminal = await container.exec(
                    [
                        "python3",
                        ContainerPaths.yamlRunner,
                        `${ContainerPaths.yamlTestDir}/${name}.yaml`,
                        "--PICS",
                        ContainerPaths.matterJsPics,
                    ],
                    Terminal.Line,
                );
                for await (const line of terminal) {
                    MockLogger.injectExternalMessage("CHIP", line);
                }
            },
        });
    }
}

export namespace YamlTests {
    export async function initialize(container: Container) {
        const files = await container.resolveGlob(`${ContainerPaths.pythonTestDir}/*.py`);
        const all = files.map(testNameOf).filter(name => name.startsWith("TC_") || name.startsWith("Test"));
        definitions.push(...all);
    }
}
