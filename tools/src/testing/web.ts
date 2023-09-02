/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { glob } from "glob";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { build } from "esbuild";
import { writeFile, mkdir } from "fs/promises";
import express from "express";
import { AddressInfo } from "net";

let DIRNAME: string;
if (globalThis.import) {
    DIRNAME = dirname(fileURLToPath(globalThis.import.meta.url));
} else {
    DIRNAME = globalThis.__dirname;
}

namespace paths {
    export const matterJs = resolve(DIRNAME, "../../../..");
    export const nodeModules = resolve(matterJs, "../../node_modules");
    export const tests = resolve(matterJs, "build/esm/test");
    export const temp = resolve(matterJs, "build/test");
    export const testBundle = resolve(temp, "all.js");
}

export async function testWeb(manual: boolean) {
    const testFiles = [
        resolve(paths.tests, "support/global-definitions.js"),
        ...glob.sync(resolve(paths.tests, "**/*Test.js"))
    ];
    
    mkdir(paths.temp, { recursive: true });
    await writeFile(
        paths.testBundle,
        testFiles.map((p) => `import "${p}";`).join("\n")
    );
    
    await build({
        entryPoints: [ paths.testBundle ],
        bundle: true,
        outfile: resolve(paths.temp, "tests.js")
    });

    const server = express()
        .use(express.static(paths.nodeModules))
        .use(express.static(paths.temp))
        .use(express.static(resolve(paths.matterJs, "test/support")))
        .listen(0, "localhost", () => {
            if (manual) {
                const addr = server.address() as AddressInfo;
                console.log(`Run tests manually at http://${addr.address}:${addr.port}/`);
            } else {
                // TODO - run tests automatically
            }
        });
    await new Promise<void>((resolve, reject) => {
        server.on("error", reject);
        server.on("close", resolve);
    });
}
