/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { testNode } from "./node.js";
import { testWeb } from "./web.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { buildFormat, populateDist } from "../building/build.js";

enum TestType {
    esm = "esm",
    cjs = "cjs",
    web = "web",
}

export async function main(argv = process.argv) {
    const testTypes = new Set<TestType>();

    let manual = false;

    const args = await yargs(hideBin(argv))
        .scriptName("test")
        .usage("Runs tests in packages adhering to matter.js standards.")
        .option("prefix", { alias: "p", default: ".", type: "string", describe: "specify directory of package to test" })
        .option("web", { alias: "w", default: false, type: "boolean", describe: "enable web tests in default test mode" })
        .command("*", "run all supported test types")
        .command("esm", "run tests on node (ES6 modules)", () => testTypes.add(TestType.esm))
        .command("cjs", "run tests on node (CommonJS modules)", () => testTypes.add(TestType.cjs))
        .command("web", "run tests in web browser", () => testTypes.add(TestType.web))
        .command("manual", "start test server and print URL for manual testing", () => {
            testTypes.add(TestType.web);
            manual = true;
        })
        .strict()
        .argv;

    // If no test types are specified explicitly, run all enabled types
    if (!testTypes.size) {
        testTypes.add(TestType.esm);
        testTypes.add(TestType.cjs);
        if (args.web) {
            testTypes.add(TestType.web);
        }
    }

    let esmBuilt = false;
    async function buildEsm() {
        if (esmBuilt) {
            return;
        }

        await buildFormat("esm");
        await populateDist("esm");

        esmBuilt = true;
    }

    if (testTypes.has(TestType.esm)) {
        buildEsm();
        await testNode("esm");
    }

    if (testTypes.has(TestType.cjs)) {
        await buildFormat("cjs");
        await populateDist("cjs");
        await testNode("cjs");
    }

    if (testTypes.has(TestType.web)) {
        buildEsm();
        await testWeb(manual);
    }
}
