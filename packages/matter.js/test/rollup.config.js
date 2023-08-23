/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import virtual from "@rollup/plugin-virtual";
import glob from "glob";
import path from "path";
import { fileURLToPath } from "url";

const ESM = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../build/esm");

const entry = `
import mocha from "mocha";
import "${ESM}/test/support/define-globals.js";
mocha.setup("bdd");
${
    glob.sync(`${ESM}/test/**/*Test.js`)
        .map((path) => `import ${JSON.stringify(path)};`)
        .join("\n")
}
mocha.run();
`;

export default {
    input: "entry",

    output: {
        file: "build/tests.js",
        format: 'es'
    },

    plugins: [
        commonjs(),
        resolve({ preferBuiltins: true }),
        json(),
        virtual({ entry })
    ]
};
