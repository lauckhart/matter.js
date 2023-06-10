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
import { BaseElement, Globals, MatterElement } from "../../../src/model/index.js";
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
            if (filename == "test-cluster.xml") continue;

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

    installCrossClusterDependencies(elements);

    return elements;
}

// Grr, chip tool doesn't support conflicting names across clusters so
// sometimes they just leave an element out and the element with the same name
// from a different cluster is then picked up by chip tool.  So look for
// references to named elements in each cluster that are present in a different
// cluster to simulate this broken behavior.  If/when they fix the behavior
// this kludge can be removed but it won't hurt anything in the meantime.
function installCrossClusterDependencies(elements: MatterElement.Child[]) {
    const globalNamespace = new Map<string, BaseElement>();
    const elementNamespaces = new Map<string, Map<string, BaseElement>>();

    // One pass to build indices.  Only index direct children of top-level
    // children
    for (const e of elements) {
        const elementNamespace = new Map<string, BaseElement>();
        for (const c of (e.children || [])) {
            if (c.type == "datatype") {
                globalNamespace.set(c.name, c);
                elementNamespace.set(c.name, c);
            }
        }
        elementNamespaces.set(e.name, elementNamespace);
    }

    // Second pass to bring over missing elements from global index.  For this
    // we need to traverse the full tree
    for (const e of elements) {
        const elementNamespace = elementNamespaces.get(e.name)!;

        function visit(d: BaseElement) {
            const base = (d as any).base as string;
            if (base && !(Globals as any)[base] && !elementNamespace.has(base)) {
                const childToBringOver = globalNamespace.get(base);
                if (childToBringOver) {
                    logger.warn(`kludge addition of ${base} into ${d.name}`);
                    elementNamespace.set(base, childToBringOver);
                    e.children!.push(childToBringOver);
                } else {
                    logger.warn(`${d.name} missing ${base} but cannot find with global search`);
                }
            }
            d.children?.forEach(visit);
        }

        visit(e);
    }
}

// Load github authentication
async function loadAuth() {
    try {
        return readFileSync(AUTH_FILE, { encoding: "utf-8" });
    } catch (e) {
        logger.warn(`Stick a read-only github auth token into ${AUTH_FILE} or you will hit rate limit and need to run incrementally over several hours`);
    }
}
