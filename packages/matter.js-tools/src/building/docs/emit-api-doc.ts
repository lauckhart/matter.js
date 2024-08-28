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
import { ApiFile } from "./api-file.js";
import { Api } from "./api.js";

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

    const cx = ApiContext(pkg, program, progress, (file, moduleName, cx) => new ApiFile(file, moduleName, cx));

    const api: Api.Root = {
        name: pkg.name,
        version: pkg.version,
        modules: [],
    };

    for (const exp of cx.exports) {
        api.modules.push(exp.api);
    }

    writeFileSync(pkg.resolve("build/package.api.json"), JSON.stringify(api));
}
