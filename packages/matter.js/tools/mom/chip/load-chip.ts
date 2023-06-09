/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Repo } from "../../util/github.js";
import { readFileWithCache } from "../../util/file.js";
import { readFileSync } from "fs";
import { homedir } from "os";
import { resolve } from "path";
import { Logger } from "../../../src/log/Logger.js";
import { JSDOM } from "jsdom";
import { MatterElement } from "../../../src/model/index.js";
import { translateChip } from "./translate-chip.js";

const AUTH_FILE = resolve(homedir(), ".gh-auth");

const logger = Logger.get("load-chip");

const auth = await loadAuth();
const repo = new Repo("project-chip", "connectedhomeip", "v1.1-branch", readFileWithCache, auth);

const parser = new(new JSDOM("").window.DOMParser)();

export async function loadChip() {
    const elements = Array<MatterElement.Child>();

    logger.info("load chip");
    await Logger.nestAsync(async () => {
        logger.info("index");
        const path = await repo.cd("src/app/zap-templates/zcl/data-model/chip");

        for (const filename of await path.ls()) {
            if (!filename.endsWith(".xml")) continue;

            logger.info(`file ${filename}`);
            await Logger.nestAsync(async () => {
                logger.debug("load");
                const xml = await path.get(filename);
                logger.debug("parse");
                const document = parser.parseFromString(xml, "text/xml");
                translateChip(document.documentElement, elements);
            });
        }
    });

    return elements;
}

// Load github authentication
async function loadAuth() {
    try {
        return readFileSync(AUTH_FILE, { encoding: "utf-8" });
    } catch (e) {
        logger.warn(`Stick a read-only github auth token into ${AUTH_FILE} or you will hit rate limit and need to run incrementally over several hours`);
    }
}
