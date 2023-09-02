/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import Mocha from "mocha";
import { glob } from "glob";

export async function testNode(format: "cjs" | "esm") {
    const mocha = new Mocha({
        inlineDiffs: true
    });

    mocha.addFile("../../tools/.build/testing/global-definitions.js");
    glob.sync(`build/${format}/test/**/*Test.js`).forEach((name) => mocha.addFile(name));

    await mocha.loadFilesAsync();

    mocha.run();
}
