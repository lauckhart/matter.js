/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { build, Format } from "esbuild";
import { spawn } from "child_process";
import { mkdir, cp, writeFile } from "fs/promises";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { stat, rm, symlink } from "fs/promises";

enum Target {
    clean = "clean",
    types = "types",
    esm = "esm",
    cjs = "cjs"
}

export async function cli(argv = process.argv) {
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
        await buildTypeDefinitions();
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

async function buildTypeDefinitions() {
    console.log("Building type definitions...");
    // Would prefer to run in-process but tsc API would be far messier and
    // compilation is quite slow regardless
    await new Promise<void>((resolve, reject) => {
        const proc = spawn(
            "tsc",
            [
                "--emitDeclarationOnly",
                "--declarationMap",
                "--outDir",
                "build/types",
                "--sourceRoot",
                "../../..",
                "--incremental",
                "--tsBuildInfoFile",
                "build/types/tsbuildinfo"
            ],
            {
                stdio: "inherit"
            }
        );
        proc.on("error", reject);
        proc.on("close", (code) => {
            if (code !== 0) {
                process.exit(code ?? -1);
            }
            resolve();
        })
    });
}

async function ignoreError(code: string, fn: () => Promise<any>) {
    try {
        await fn();
    } catch (e) {
        if ((e as any).code !== code) {
            throw e;
        }
    }
}

async function buildFormat(target: Target) {
    console.log(`Building ${target.toUpperCase()}...`);
    await build({
        entryPoints: [ "src/**/*.ts" ],
        outdir: `build/${target}/src`,
        format: target as Format,
        sourcemap: true
    });

    await ignoreError("ENOENT", async () => {
        if ((await stat("test")).isDirectory()) {
            console.log(`Building ${target.toUpperCase()} tests...`);
            await build({
                entryPoints: [ "test/**/*.ts" ],
                outdir: `build/${target}/test`,
                format: target as Format,
                sourcemap: true
            });
        }
    });
}

async function populateDist(format: Target) {
    console.log(`Populating dist/${format}...`);
    const target = `dist/${format}`;
    
    await ignoreError("EEXIST", () => mkdir(target, { recursive: true }));

    await cp(`build/types/src`, target, { recursive: true, force: true });
    await cp(`build/${format}/src`, target, { recursive: true, force: true });

    if (format === Target.cjs) {
        await writeFile(`${target}/package.json`, '{ "type": "commonjs" }');
    }
}

async function clean() {
    for (const dir of [ "build", "dist" ]) {
        rm(dir, { recursive: true, force: true });
    }
}
