/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, maybeStatSync } from "@matter/tools";
import { cp, stat } from "fs/promises";

/**
 * Install "templates" to dist so we can install without external dependencies.
 */
export async function before({ project }: Project.Context) {
    await cp(
        project.pkg.findPackage("@matter/examples").resolve("src/examples"),
        project.pkg.resolve("dist/templates"),
        {
            recursive: true,
            force: true,

            async filter(source, dest) {
                const stats = await stat(source);

                if (stats.isDirectory()) {
                    return true;
                }

                if (!source.endsWith(".ts")) {
                    return false;
                }

                const destMtime = maybeStatSync(dest)?.mtimeMs;

                return !destMtime || destMtime < stats.mtimeMs;
            },
        },
    );
}
