/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { dirname, join } from "path";

import { camelize } from "../../../src/util/String.js";
import { loadHtml } from "./input.js";
import { Reference, Table } from "./intermediate.js";

// Removes all whitespace and dashes from a string.  Ideally would only do
// whitespace but PDF-to-HTML is not precise and we end up with dashes from
// words that are hyphenated at line breaks
export function wsx(el: Node | undefined) {
    if (el?.textContent) {
        return el.textContent.replace(/[\s\u200c\-]/g, "");
    } else {
        return "";
    }
}

const FAKE_CLUSTER_NAMES = [
    "New",
    "Sample",
    "Disco Ball",
    "Super Disco Ball"
]

// Parse the section ID and name from a heading element
function parseHeading(e: Node | null) {
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
    console.info(`index ${path}`);

    const result = {
        clusters: Array<Reference>()
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
    source.querySelectorAll("a").forEach((a: HTMLAnchorElement) => {
        const heading = parseHeading(a);
        if (!heading) {
            return;
        }

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
                section: heading.section,
                spec,
                name: heading.name.slice(0, heading.name.length - 8),
                path: a.href
            });
            return;
        }

        // Cluster spec convention is one cluster per sub-section except the
        // first sub-section which summarizes the section
        if (spec == "cluster") {
            const sectionPath = heading.section.split(".");
            if (sectionPath.length == 2 && sectionPath[1] != "1") {
                const cluster = {
                    section: heading.section,
                    spec,
                    name: heading.name,
                    path: a.href
                };
                result.clusters.push(cluster);
            }
            return;
        }
    });
    
    return result;
}

// Convert HTMLTableELement -> Table
function convertTable(el: HTMLTableElement) {
    const table = [] as Table;
    let columns: string[] | undefined;
    for (const tr of el.querySelectorAll("tr")) {
        const cells = tr.querySelectorAll("td, th");

        if (!columns) {
            columns = [];
            cells.forEach(cell => {
                columns!.push(camelize(wsx(cell as HTMLElement), false));
            });
            continue;
        }

        const row = {} as Table[number];
        for (let i = 0; i < columns.length; i++) {
            row[columns[i]] = cells.item(i) as HTMLElement;
        }
        
        table.push(row);
    }
    return table;
}

// Parse a single page that is confirmed to be part of a "section of interest"
function* scanSectionPage(ref: Reference, html: Document): Generator<Reference> {
    const elements = html.querySelectorAll("h1, h2, h3, h4, h5, h6, body > p, table");

    let currentRef: Reference | undefined = undefined;

    function* emit() {
        if (currentRef) {
            yield currentRef;
            currentRef = undefined;
        }
    }

    for (let i = 1; i < elements.length; i++) {
        const element = elements[i] as HTMLElement;
        switch (element.tagName) {
            case "H1":
            case "H2":
            case "H3":
            case "H4":
            case "H5":
            case "H6":
                // If we're lucky, there's actually a header tag
                yield* emit();
                const heading = parseHeading(element);
                if (heading) {
                    currentRef = { ...ref, ...heading };
                }
                break;

            case "P":
                // Sometimes heading is just in a P so we have to guess as to
                // "headingness"
                const text = element.textContent;
                if (text?.match(/^(\d+\.)+ [ a-zA-Z0-9]+$/)) {
                    const possibleHeading = parseHeading(element);
                    if (possibleHeading && possibleHeading.section.startsWith(ref.section)) {
                        // Yep, looks like a heading
                        yield* emit();
                        currentRef = { ...ref, ...possibleHeading };
                        break;
                    }
                }

                // Save the first paragraph of the section
                if (currentRef && !currentRef.firstParagraph) {
                    let text = element.textContent;
                    if (text) {
                        text = text.replace(/(\s\u200c)+/, "");
                        if (text) {
                            currentRef.firstParagraph = element as HTMLParagraphElement;
                        }
                    }
                }
                break;

            case "TABLE":
                if (!currentRef) {
                    break;
                }

                const table = convertTable(element as HTMLTableElement);

                // If tables split across pages (in the original PDF) then each
                // section is a separate table (in the HTML page).  Headings
                // are the same, though; use this to merge tables
                const other = currentRef.table;
                if (other) {
                    if (table.length) {
                        if (!other.length || Object.keys(other[0]).join("/") == Object.keys(table[0]).join("/")) {
                            // Merge tables
                            other.push(...table);
                        }
                    }

                    // We either merged this table or we ignore it
                    break;
                }

                // New (presumably defining) table
                currentRef.table = table;
                break;
        }
    }

    yield* emit();
}

// Parses all pages in a specific section
export function* scanSection(ref: Reference) {
    let path = ref.path;

    let html = loadHtml(path);
    yield* scanSectionPage(ref, html);

    const toc = html.querySelectorAll(".toc a");
    for (const link of toc as NodeListOf<HTMLAnchorElement>) {
        path = join(dirname(ref.path), link.href);
        html = loadHtml(path);
        yield* scanSectionPage({ ...ref, path: path }, html);
    }
}
