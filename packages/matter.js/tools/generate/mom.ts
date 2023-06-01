/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { resolve } from "path";
import { homedir } from "os";
import { JSDOM } from "jsdom";
import { readFileSync, readdirSync } from "fs";

// This script scrapes specification information from a HTML version of the
// Matter specification.  Override the default location with
// MATTER_SPECIFICATION_PATH environment variable.
//
// I used Adobe Acrobat Pro v23.001.20174.0 to generate the HTML, choosing
// the option to save individual HTML based on headers.  We will probably parse
// output of the current Acrobat version.  Other means of HTML generation will
// likely require this code to be reworked.

const SPECIFICATION_PATH = process.env.MATTER_SPECIFICATION_PATH ??
    resolve(homedir(), "Dropbox", "iot", "matter-1.1");

export function loadHtml(path: string) {
    return new JSDOM(readFileSync(resolve(SPECIFICATION_PATH, path))).window.document;
}

let paths: string[];
try {
    paths = readdirSync(SPECIFICATION_PATH).filter(filename => filename.endsWith(".html"));
} catch (e) {
    if ((e as any).code == "ENOENT") {
        throw new Error(`Path ${SPECIFICATION_PATH} does not exist, do you need to set MATTER_SPECIFICATION_PATH?`);
    } else {
        throw e;
    }
}

if (!paths.length) {
    throw new Error(`No HTML files in ${SPECIFICATION_PATH}`);
}

type Reference = {
    section: string,
    spec: "core" | "cluster" | "device",
    path: string
}

type Cluster = Reference & {
    name: string,
    features?: Reference,
    types?: Reference,
    attributes?: Reference,
    commands?: Reference,
    events?: Reference
}

function scrapeIndex(path: string) {
    const result = {
        clusters: Array<Cluster>()
    }
    let spec: "core" | "cluster" | "device";
    if (path.match(/core/i)) {
        spec = "core";
    } else if (path.match(/app/i || path.match(/cluster/i))) {
        spec = "cluster";
    } else if (path.match(/device/)) {
        spec = "device";
    } else {
        return result;
    }

    const source = loadHtml(path);
    let cluster: Cluster;
    source.querySelectorAll("a").forEach(a => {
        const heading = a.textContent?.trim().replace(/\s+/, " ");
        if (!heading) {
            return;
        }

        const parsed = /^([\d\.]+)\. (.+)$/.exec(heading);
        if (!parsed) {
            return;
        }
        const section = parsed[1];
        const name = parsed[2];

        if (name.endsWith(" Cluster")) {
            cluster = { section, spec, name: name.slice(0, name.length - 8), path: a.href };
            result.clusters.push(cluster);
            return;
        }

        if (spec == "cluster") {
            const sectionPath = section.split(".");
            if (sectionPath.length == 2 && sectionPath[1] != "1") {
                cluster = { section, spec, name, path: a.href};
                result.clusters.push(cluster);
            }
            return;
        }

        if (cluster && heading.startsWith(`${cluster.section}.`)) {
            const ref = { section: section, spec: spec, path: a.href }
            switch (name) {
                case "Data Types":
                    cluster.types = ref;
                    break;

                case "Attributes":
                    cluster.attributes = ref;
                    break;

                case "Commands":
                    cluster.commands = ref;
                    break;

                case "Events":
                    cluster.events = ref;
                    break;

                case "Features":
                    cluster.features = ref;
                    break;
            }
        }
    });
    
    return result;
}

paths.forEach(path => {
    console.log(`index ${path}`);
    const index = scrapeIndex(path);
    index.clusters.forEach(cluster => {
        console.log(`  cluster ${cluster.name} (${cluster.spec} § ${cluster.section})`);

        // TODO
    })
})
