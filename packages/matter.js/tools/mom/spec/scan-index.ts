/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadHtml } from "./spec-input.js";
import { HtmlReference } from "./spec-types.js";
import { Logger } from "../../../src/log/Logger.js";
import { Specification } from "../../../src/model/index.js";

const logger = Logger.get("scan-index");

const FAKE_CLUSTER_NAMES = [
    "New",
    "Sample",
    "Disco Ball",
    "Super Disco Ball"
]

// Parse the section ID and name from a heading element
export function parseHeading(e: Node | null) {
    if (!e) {
        return undefined;
    }

    const heading = e.textContent?.trim().replace(/\s+/g, " ").replace("\u200c", "");
    if (!heading) {
        return undefined;
    }

    const parsed = /^([\d\.]+)\. (.+)$/.exec(heading);
    if (!parsed) {
        return;
    }

    return {
        section: parsed[1],
        name: parsed[2]
    }
}

// Read an index file to find the portions of the spec we care about
export function scanIndex(path: string) {
    const source = loadHtml(path);
    const titleEl = source.querySelector("h1");
    if (!titleEl || !titleEl.textContent) {
        logger.error("cannot find specification title");
        return;
    }
    const title = titleEl.textContent;

    const result = {
        clusters: Array<HtmlReference>()
    }

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
        logger.error(`version element unrecognized`)
        return;
    }
    const version = versionEl.textContent.replace(/.*version ([\d\.]+).*/i, "$1");

    logger.info("recognized", Logger.dict({ doc: spec, version: version }));

    source.querySelectorAll("a").forEach((a: HTMLAnchorElement) => {
        const heading = parseHeading(a);
        if (!heading) {
            return;
        }

        const xref = {
            section: heading.section,
            document: spec
        };

        // Core spec convention for clusters is heading suffixed with "Cluster"
        if (heading.name.endsWith(" Cluster")) {
            if (Number.parseInt(heading.section) < 3) {
                // There's some noise in early sections
                return;
            }

            const name = heading.name.slice(0, heading.name.length - 8);
            if (FAKE_CLUSTER_NAMES.indexOf(name) != -1) {
                return;
            }

            result.clusters.push({
                name: heading.name.slice(0, heading.name.length - 8),
                path: a.href,
                xref: xref
            });
            return;
        }

        // Cluster spec convention is one cluster per sub-section except the
        // first sub-section which summarizes the section
        if (spec == "cluster") {
            const sectionPath = heading.section.split(".");
            if (sectionPath.length == 2 && sectionPath[1] != "1") {
                const cluster = {
                    name: heading.name,
                    path: a.href,
                    xref: xref
                };
                result.clusters.push(cluster);
            }
            return;
        }
    });
    
    return result;
}
