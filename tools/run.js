#!/usr/bin/env node

/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// This script runs a bootstrap compile with esbuild then hands off to the
// compiled script.  This is an alternative to the use of (incredibly slow)
// ts-node

import { build } from "esbuild";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { stat } from "fs/promises";

const TOOLS_PATH = dirname(fileURLToPath(import.meta.url));

// Determine the command to run
let command = process.argv[2];
if (command === undefined) {
    process.stderr.write("Please provide the name of the tool to run\n");
    process.exit(1);
}
process.argv.splice(2, 1);

// If the command points to a directory, look for "main.ts"
let filename = resolve(TOOLS_PATH, command);
try {
    const stats = await stat(filename);
    if (stats.isDirectory()) {
        command = `${command}/main`;
        filename = resolve(filename, "main");
    }
} catch (e) {
    if (e.code !== "ENOENT") {
        throw e;
    }
}

// Verify the command exists
try {
    const stats = await stat(`${filename}.ts`);
    if (!stats.isFile()) {
        process.stderr.write(`Command ${command} does not exist\n`);
        process.exit(1);
    }
} catch (e) {
    if (e.code === "ENOENT") {
        process.stderr.write(`Command ${command} does not exist\n`);
        process.exit(1);
    }
    throw e;
}

// Bootstrap -- always build as it's very fast and we can put all higher-level
// logic into Typescript
await build({
    entryPoints: [ resolve(TOOLS_PATH, "**/*.ts") ],
    outdir: resolve(TOOLS_PATH, ".build"),
    sourcemap: true
});

// Hand off to TS
await import(`./.build/${command}.js`);
