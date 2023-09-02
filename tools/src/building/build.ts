/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { build as esbuild, Format } from "esbuild";
import { mkdir, cp, writeFile } from "fs/promises";
import { stat, rm } from "fs/promises";
import { ignoreError } from "../util/errors.js";
import { spawn } from "child_process";

export async function buildFormat(format: Format) {
    console.log(`Building ${format.toUpperCase()}...`);
    await esbuild({
        entryPoints: [ "src/**/*.ts" ],
        outdir: `build/${format}/src`,
        format: format as Format,
        sourcemap: true
    });

    await ignoreError("ENOENT", async () => {
        if ((await stat("test")).isDirectory()) {
            console.log(`Building ${format.toUpperCase()} tests...`);
            await esbuild({
                entryPoints: [ "test/**/*.ts" ],
                outdir: `build/${format}/test`,
                format: format as Format,
                sourcemap: true
            });
        }
    });
}

export async function populateDist(directory: string) {
    console.log(`Populating dist/${directory}...`);
    const target = `dist/${directory}`;
    
    await ignoreError("EEXIST", () => mkdir(target, { recursive: true }));

    await cp(`build/types/src`, target, { recursive: true, force: true });
    await cp(`build/${directory}/src`, target, { recursive: true, force: true });

    if (directory === "cjs") {
        await writeFile(`${target}/package.json`, '{ "type": "commonjs" }');
    }
}

export async function clean() {
    for (const dir of [ "build", "dist" ]) {
        rm(dir, { recursive: true, force: true });
    }
}

export async function buildDeclarations() {
    console.log("Building declarations...");
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
