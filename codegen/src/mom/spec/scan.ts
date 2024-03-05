/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Specification } from "@project-chip/matter.js/model";
import url from "url";
import { Diagnostic } from "../../../../packages/matter.js/src/log/Diagnostic.js";
import { Logger } from "../../../../packages/matter.js/src/log/Logger.js";
import { loadHtml } from "./spec-input.js";

new URL("foo.jhtml");

const logger = Logger.get("scane");

export function nextOf(html: Document) {
    for (const a of html.querySelectorAll(".top_nav a")) {
        if (a.textContent === "Next >") {
            return a.getAttribute("href");
        }
    }
}

export function scan(indexPath: string) {
    const source = loadHtml(indexPath);
    const titleEl = source.querySelector("h1");
    if (!titleEl || !titleEl.textContent) {
        logger.error("cannot find specification title");
        return;
    }
    const title = titleEl.textContent;

    let spec: Specification;
    if (title.match(/matter specification/i)) {
        spec = Specification.Core;
    } else if (title.match(/application/i)) {
        spec = Specification.Cluster;
    } else if (title.match(/device/i)) {
        spec = Specification.Device;
    } else {
        logger.error(`matter specification name ${title} unrecognized`);
        return;
    }

    const versionEl = titleEl.nextElementSibling;
    if (!versionEl || !versionEl.textContent || !versionEl.textContent.match(/version (?:\d\.)+/i)) {
        logger.error("version element unrecognized");
        return;
    }
    const version = versionEl.textContent.replace(/.*version ([\d.]+).*/i, "$1");

    logger.info("recognized", Diagnostic.dict({ spec, version }));

    let lastUrl = url.pathToFileURL(indexPath);
    let lastDoc = source;

    return {
        spec,
        version,
        [Symbol.iterator]() {
            return {
                next() {
                    const next = nextOf(lastDoc);

                    if (next === undefined || next === null) {
                        return { done: true };
                    }

                    lastUrl = new URL(next, lastUrl);

                    lastDoc = loadHtml(url.fileURLToPath(lastUrl));

                    return {
                        value: lastDoc,
                    };
                },
            };
        },
    };
}
