/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { dirname, join } from "path";

import { loadHtml, parseHeading } from "./doc-utils.js";
import { Str } from "./html-translators.js";
import { HtmlReference, Table } from "./spec-types.js";

// Convert HTMLTableELement -> Table
function convertTable(el: HTMLTableElement, previous: Table | undefined) {
    let table: Table | undefined;

    const rowspans = Array<{ remaining: number; el: HTMLElement }>();

    for (const tr of el.querySelectorAll("tr")) {
        const cells = tr.querySelectorAll("td, th");

        if (table === undefined) {
            // Use the first row to identify whether this is a table split across page boundaries.  For the spec the
            // first row is always replicated on subsequent pages
            const firstRowIdentity = Array.from(cells)
                .map(cell => cell.textContent?.trim())
                .join("␜");

            if (previous?.firstRowIdentity === firstRowIdentity) {
                table = previous;

                // Skip the first row as it tells us nothing new
                continue;
            } else {
                table = {
                    firstRowIdentity,
                    fields: [],
                    rows: [],
                    notes: [],
                };
            }
        }

        if (cells.length === 1) {
            table.notes.push(cells[0] as HTMLElement);
            for (const span of rowspans) {
                if (span.remaining) {
                    span.remaining--;
                }
            }
            continue;
        }

        if (!table.fields.length) {
            cells.forEach(cell => {
                let key = cell.textContent || "";
                key = key.replace(/[\W]/g, "").toLowerCase();
                table?.fields.push(key);
            });
            continue;
        }

        const row = {} as Table["rows"][number];
        let sourceIndex = 0;
        for (let i = 0; i < table.fields.length; i++) {
            if (rowspans[i]?.remaining) {
                rowspans[i].remaining--;
                row[table.fields[i]] = rowspans[i].el;
                continue;
            }

            const cell = cells.item(sourceIndex++) as HTMLElement | null;
            if (cell === null) {
                continue;
            }

            row[table.fields[i]] = cell;

            const rowspan = (cell as HTMLTableCellElement)?.rowSpan;
            if (typeof rowspan === "number" && rowspan > 1) {
                rowspans[i] = {
                    remaining: rowspan - 1,
                    el: cell,
                };
            }
        }

        table.rows.push(row);
    }

    // If a table only has a single row but cells in that row wrap to multiple lines, Acrobat can get confused and
    // decide it is a multi-row table without line separators.
    //
    // Detect this case and correct by concatenating the contents of rows onto the first row
    if (table?.fields[0] !== undefined) {
        // Scan the table.  We treat as broken if there are multiple rows but the first column is empty except on the
        // first row
        const looksBorked =
            table.rows.length > 1 &&
            table.rows.every((row, i) => {
                let text = row[table?.fields[0]]?.textContent?.trim();
                if (text === "") {
                    text = undefined;
                }
                return (!i && text !== undefined) || (i && text === undefined);
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

function findNextLink(html: Document) {
    for (const a of html.querySelectorAll(".top_nav a")) {
        if (a.textContent === "Next >") {
            return a as HTMLAnchorElement;
        }
    }
}

// Parses all pages in a specific section
export function* scanDocument(docRef: HtmlReference) {
    // State for scanSection.  We maintain it across calls because some broken pages don't mention their section in the
    // heading, so we simply continue the last known section
    let currentRef: HtmlReference | undefined = undefined;

    // State for scanSection.  We need to fake section numbers sometimes. This contains fakery related state
    const fakeSection = {
        faking: false,
        fakingField: false,
        actual: "",
        section: 1,
        subsection: 1,
    };

    // Scan the index page
    let path = docRef.path;
    let html = loadHtml(path);
    yield* scanPage(docRef, html);

    // Scan all subpages referenced from the index page
    while (true) {
        const link = findNextLink(html);
        if (!link) {
            break;
        }
        path = join(dirname(path), link.href);
        html = loadHtml(path);
        yield* scanPage({ ...docRef, path: path }, html);
    }

    // Handle final emit outside of scanPage
    yield* emit();

    // End of logic

    function* emit() {
        if (currentRef) {
            if (currentRef.table && !currentRef.table.rows.length) {
                delete currentRef.table;
            }
            yield currentRef;
            currentRef = undefined;
        }
    }

    // Parse a single page that is confirmed to be part of a "section of interest"
    function* scanPage(ref: HtmlReference, html: Document): Generator<HtmlReference> {
        const elements = html.querySelectorAll("h1, h2, h3, h4, h5, h6, body > p, table");

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
                    // Sometimes heading is just in a P so we have to guess as to "headingness".  Most of this code is
                    // heuristics to do that.  Otherwise we just collect as prose associated with the section

                    // Extract text
                    const text = Str(element).replace(/\s*\([^)]+\)\s*/g, " ");

                    // Test for "heading" shapes with a numerical prefix followed by a label
                    if (text?.match(/^\d+\.(\d+\.)+ [ a-zA-Z0-9]+$/) || text?.match(/^\d+\.(\d+\.)+ .+ \(.+ type\)/i)) {
                        let possibleHeading = parseHeading(element);

                        // Ignore links elsewhere.  This occurs in TOC entries.  If this gets too fiddly then we can
                        // instead just skip TOC pages
                        const first = element.firstElementChild;
                        if (first?.tagName === "A") {
                            if ((first as HTMLAnchorElement).href?.length) {
                                possibleHeading = undefined;
                            }
                        }

                        if (possibleHeading?.section.startsWith(ref.xref.section)) {
                            // Yep, looks like a heading
                            yield* emit();
                            currentRef = {
                                ...ref,
                                name: possibleHeading.name,
                                xref: { ...ref.xref, section: possibleHeading.section },
                            };
                            fakeSection.faking = false;
                            break;
                        }
                    }

                    // If there's just a bare name hanging repeating the section name, don't let it confuse us.  Yes,
                    // it happens, see v1.1 cluster 6.5.5.2, "OutputTypeEnum"
                    if (currentRef?.name === text) {
                        continue;
                    }

                    // Sometimes there isn't even a section marker.  In this case we generate the missing section number
                    if (
                        text?.match(/^[a-z0-9]+(?: Field| Value)$/i) &&
                        fakeSection.faking &&
                        !fakeSection.fakingField
                    ) {
                        // Already faking; treat these like a sub-headings to our fake heading
                        yield* emit();
                        fakeSection.subsection++;
                        currentRef = {
                            ...ref,
                            name: text,
                            xref: {
                                ...ref.xref,
                                section: `${fakeSection.actual}.${fakeSection.section}.${fakeSection.subsection}`,
                            },
                        };
                        break;
                    } else if (
                        text?.match(/^[a-z0-9]+(?:Enum|Struct| Attribute| Command| Event| Type| Field| Value| Bits?)$/i)
                    ) {
                        // Looks like a section
                        const realSection = currentRef ? currentRef.xref.section : ref.xref.section;
                        yield* emit();
                        if (fakeSection.faking) {
                            fakeSection.section++;
                            fakeSection.subsection = 0;
                        } else {
                            fakeSection.faking = true;
                            fakeSection.actual = realSection;
                            fakeSection.section = 1;
                            fakeSection.subsection = 0;
                        }
                        currentRef = {
                            ...ref,
                            name: text,
                            xref: { ...ref.xref, section: `${fakeSection.actual}.${fakeSection.section}` },
                        };

                        // Note if we're faking a field or a value so we know not to treat them like subsections when we
                        // see the next one
                        fakeSection.fakingField = !!text.match(/(?: Field| Value)$/i);
                        break;
                    }

                    // Not a heading so save as prose
                    if (text && element.className !== "nav" && currentRef) {
                        if (!currentRef.prose) {
                            currentRef.prose = [];
                        }
                        currentRef.prose.push(element);
                    }
                    break;

                case "TABLE":
                    if (!currentRef) {
                        break;
                    }

                    const table = convertTable(element as HTMLTableElement, currentRef.table);
                    if (!table) {
                        break;
                    }

                    if (!currentRef.table) {
                        currentRef.table = table;
                    }
                    break;
            }
        }
    }
}
