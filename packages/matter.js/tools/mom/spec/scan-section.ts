/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { dirname, join } from "path";

import { loadHtml } from "./spec-input.js";
import { HtmlReference, Table } from "./spec-types.js";
import { parseHeading } from "./scan-index.js";

// Convert HTMLTableELement -> Table
function convertTable(el: HTMLTableElement) {
    const table = {
        fields: [],
        rows: [],
        notes: []
    } as Table;
    for (const tr of el.querySelectorAll("tr")) {
        const cells = tr.querySelectorAll("td, th");

        if (cells.length == 1) {
            table.notes.push(cells[0] as HTMLElement);
            continue;
        }

        if (!table.fields.length) {
            cells.forEach(cell => {
                let key = cell.textContent || "";
                key = key.replace(/[\W]/g, "").toLowerCase();
                table.fields.push(key);
            });
            continue;
        }

        const row = {} as Table["rows"][number];
        for (let i = 0; i < table.fields.length; i++) {
            row[table.fields[i]] = cells.item(i) as HTMLElement;
        }
        
        table.rows.push(row);
    }

    // If a table only has a single row but cells in that row wrap to multiple
    // lines, Acrobat can get confused and decide it is a multi-row table
    // without line separators.
    //
    // Detect this case and correct by concatenating the contents of rows onto
    // the first row
    const col1 = table.fields[0];
    if (col1 != undefined) {
        // Scan the table.  We treat as broken if there are multiple rows but
        // the first column is empty except on the first row
        const looksBorked = table.rows.length > 1 && table.rows.every((row, i) => {
            let text = row[col1]?.textContent?.trim();
            if (text == "") {
                text = undefined;
            }
            return (!i && text != undefined) || (i && text == undefined);
        });

        // If above test succeeds, concatenate all cells in column into first
        // row and remove rows except the first
        if (looksBorked) {
            for (const colName of table.fields) {
                let target;
                for (let i = 0; i < table.rows.length; i++) {
                    const el = table.rows[i]?.[colName];
                    if (i) {
                        if (target && el) {
                            while (el.firstChild) {
                                target.appendChild(el.firstChild);
                            }
                        }
                    } else {
                        target = el;
                    }
                }
            }
            table.rows = table.rows.slice(0, 1);
        }
    }

    return table;
}

// Parse a single page that is confirmed to be part of a "section of interest"
function* scanSectionPage(ref: HtmlReference, html: Document): Generator<HtmlReference> {
    const elements = html.querySelectorAll("h1, h2, h3, h4, h5, h6, body > p, table");

    let currentRef: HtmlReference | undefined = undefined;

    const fakeSection = {
        faking: false,
        actual: "",
        section: 1,
        subsection: 1
    }

    function* emit() {
        if (currentRef) {
            if (currentRef.table && !currentRef.table.rows.length) {
                delete currentRef.table;
            }
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
                    currentRef = { ...ref, name: heading.name, xref: { ...ref.xref, section: heading.section } };
                    fakeSection.faking = false;
                }
                break;

            case "P":
                const text = element.textContent?.trim().replace(/(\s\u200c)+/, "");

                // Sometimes heading is just in a P so we have to guess as to
                // "headingness"
                if (text?.match(/^(\d+\.)+ [ a-zA-Z0-9]+$/) || text?.match(/^(\d+\.)+ .+ \(.+ type\)/)) {
                    const possibleHeading = parseHeading(element);
                    if (possibleHeading && possibleHeading.section.startsWith(ref.xref.section)) {
                        // Yep, looks like a heading
                        yield* emit();
                        currentRef = { ...ref, name: possibleHeading.name, xref: { ...ref.xref, section: possibleHeading.section } };
                        fakeSection.faking = false;
                        break;
                    }
                }

                // Sometimes there isn't even a section marker.  In this case
                // we just make up the section number
                if (text?.match(/^[a-z0-9]+(?:Enum| Attribute| Command| Event)$/i)) {
                    // Treat like a heading
                    yield* emit();
                    if (fakeSection.faking) {
                        fakeSection.section++;
                        fakeSection.subsection = 0;
                    } else {
                        fakeSection.actual = currentRef?.xref.section!;
                        fakeSection.section = 1;
                        fakeSection.subsection = 0;
                    }
                    currentRef = { ...ref, name: text, xref: { ...ref.xref, section: `${fakeSection.actual}.${fakeSection.section}` } };
                }

                // If we're faking the section we need to fake fields too
                if (text?.match(/^[a-z0-9]+(?: Field| Value)$/) && fakeSection.faking) {
                    // Treat like a sub-heading to our fake heading
                    yield* emit();
                    fakeSection.subsection++;
                    currentRef = { ...ref, name: text, xref: { ...ref.xref, section: `${fakeSection.actual}.${fakeSection.section}.${fakeSection.subsection}`}};
                }

                // Save the first paragraph of the section
                if (text && currentRef && !currentRef.firstParagraph) {
                    currentRef.firstParagraph = element as HTMLParagraphElement;
                }
                break;

            case "TABLE":
                if (!currentRef) {
                    break;
                }

                const table = convertTable(element as HTMLTableElement);
                if (!table.rows.length) {
                    continue;
                }

                // If tables split across pages (in the original PDF) then each
                // section is a separate table (in the HTML page).  Headings
                // are the same, though; use this to merge tables
                const other = currentRef.table;
                if (other) {
                    if (table.rows.length) {
                        if (!other.rows.length || Object.keys(other.rows[0]).join("/") == Object.keys(table.rows[0]).join("/")) {
                            // Merge tables
                            other.notes.push(...table.notes)
                            other.rows.push(...table.rows);
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
export function* scanSection(ref: HtmlReference) {
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
