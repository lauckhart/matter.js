/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Run a TypeScript REPL with key objects loaded

import repl from "repl";
import { homedir } from "os";
import { join } from "path";

import * as model from "../src/model/index.js";

(global as any).model = model;

const server = repl.start({ prompt: "matter.js > "});

const historyPath = process.env.MATTER_REPL_HISTORY || join(homedir(), ".matter-repl-history");
server.setupHistory(historyPath, error => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
})
