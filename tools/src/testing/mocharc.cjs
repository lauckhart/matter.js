/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// This file configures mocha for "buildless" dev execution.  May be useful for
// running tests in IDE with Mocha support.  Utilize by importing into
// .mocharc.cjs as a sibling of package.json in the package to test

const { resolve } = require("path");
const cli = require("mocha/lib/cli/cli");

const TOOLS = resolve(__dirname, "../..");

module.exports = (format = "cjs") => {
    const testJs = `build/${format}/test`;
    const defaultSpec = `${testJs}/**/*Test.js`;

    // Build.  Ideally we'd import build code but it's asynchronous so instead
    // build in a separate process
    const spawnSync = require("child_process").spawnSync;
    const result = spawnSync(`${TOOLS}/bin/build.js`, [ format ], { stdio: "inherit" });
    if (result.error) {
        console.error(result.error);
        process.exit(-1);
    }

    // Hook Mocha so we can futz with args
    const main = cli.main;
    cli.main = function(argv, args) {
        const spec = args._;

        // Remove wildcard test selection if there's an input file
        if (spec.length > 1 && spec[spec.length - 1] === defaultSpec) {
            spec.length = spec.length - 1;
        }

        // Map input files to the compiled test
        for (let i = 0; i < spec.length; i++) {
            let path = spec[i];

            // Convenience - map src/ file to test equivalent
            path = path.replace(/src\/(.*)(\.[jt]s)/, "test/$1Test$2");

            // Map ts files to compiled equivalent
            path = path.replace(/test\/(.*)\.ts/, `${testJs}/$1.js`);

            spec[i] = path;
        }

        main.call(this, argv, args);
    }

    return {
        inlineDiffs: true,
        file: [
            `${TOOLS}/dist/${format}/testing/mocks/index.js`,
            `${TOOLS}/dist/${format}/testing/global-definitions.js`
        ],
        spec: [ defaultSpec ]
    }
}
