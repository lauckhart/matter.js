/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { writeFileSync } from "fs";
import { Program } from "typescript";
import { Package } from "../../util/package.js";
import { Progress } from "../../util/progress.js";
import { ApiContext } from "./api-context.js";
import { loadEntrypoints } from "./load-entrypoints.js";

/**
 * Convert program into ApiModel.
 */
export async function emitApiDoc(pkg: Package, program: Program, progress: Progress) {
    if (!pkg.isLibrary) {
        return;
    }

    if (pkg.sourceModules === undefined) {
        return;
    }

    const cx = ApiContext(pkg, program, progress);

    loadEntrypoints(cx);

    writeFileSync(pkg.resolve("build/package.api.json"), JSON.stringify(cx.api));
}
