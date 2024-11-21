/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { basename, parse } from "path";
import { Container } from "../docker/container.js";
import { Terminal } from "../docker/terminal.js";
import type { Chip } from "./chip.js";
import { ContainerPaths } from "./config.js";

export async function YamlTests(container: Container): Promise<Chip.Test[]> {
    const files = await container.resolveGlob(`${ContainerPaths.yamlTestDir}/Test_*.yaml`);

    return files.map(filename => ({
        name: parse(filename).base,

        async commission(container: Container) {
            const terminal = await container.exec(
                ["chip-tool", "pairing", "onnetwork-long", "0x12344321", "20202021", "1234"],
                Terminal.Line,
            );

            try {
                for await (const line of terminal) {
                    MockLogger.injectExternalMessage("PAIR", line);
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
                    "tests",
                    basename(filename),
                    "--PICS",
                    ContainerPaths.matterJsPics,
                ],
                Terminal.Line,
                { cwd: "/" },
            );
            for await (const line of terminal) {
                MockLogger.injectExternalMessage("CHIP", line);
            }
        },
    }));
}
