/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { buildFormat, buildDeclarations, clean, populateDist } from "./build.js";

enum Target {
    clean = "clean",
    types = "types",
    esm = "esm",
    cjs = "cjs"
}

export async function main(argv = process.argv) {
    const targets = new Set<Target>;

    const args = await yargs(hideBin(argv))
        .scriptName("build")
        .usage("Builds packages adhering to matter.js standards.")
        .option("prefix", { alias: "p", default: ".", type: "string", describe: "specify build directory" })
        .option("clean", { alias: "c", default: false, type: "boolean", describe: "clean before build" })
        .command("*", "build types and both JS module formats", () => {
            targets.add(Target.types);
            targets.add(Target.esm);
            targets.add(Target.cjs);
        })
        .command("clean", "remove build and dist directories", () => targets.add(Target.clean))
        .command("types", "build type definitions", () => targets.add(Target.types))
        .command("esm", "build JS (ES6 modules)", () => targets.add(Target.esm))
        .command("cjs", "build JS (CommonJS modules)", () => targets.add(Target.cjs))
        .strict()
        .argv;

    process.chdir(args.prefix);

    if (targets.has(Target.clean) || args.clean) {
        await clean();
    }

    if (targets.has(Target.types)) {
        await buildDeclarations();
    }
    
    if (targets.has(Target.esm)) {
        await buildFormat(Target.esm);
        await populateDist(Target.esm);
    }
    
    if (targets.has(Target.cjs)) {
        await buildFormat(Target.cjs);
        await populateDist(Target.cjs);
    }
}
