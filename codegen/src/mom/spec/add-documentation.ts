/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bullets } from "@matter/general";
import { Words } from "../../util/words.js";
import { Str } from "./html-translators.js";
import { HtmlReference } from "./spec-types.js";

/**
 * Extraction terminates when it encounters these flags.  These are for places
 * where we don't have an elegant way of determining that content is unusable.
 */
export const EndContentFlags = [
    // OnOff cluster state diagram becomes a total mess
    /These concepts are illustrated in Explanation of the Behavior of Store/,
];

/**
 * Uncommon english words that are part of known splits.
 */
export const NotWords = new Set(["cur"]);

const liTest = new RegExp(`^[${Bullets.join("")}]\\s]`);

/**
 * A light attempt at dropping text to make documentation seem slightly less scavenged.
 */
function extractUsefulDocumentation(p: HTMLElement) {
    return Str(p)
        .replace(/SHALL/g, "shall")
        .replace(/MAY/g, "may")
        .replace(/RECOMMENDED/g, "recommended")
        .replace(/This data type is derived from \S+(?: and has its values listed below)?\./, "")
        .replace(/The data type \S+ is derived from \S+\./, "")
        .replace(/The data type of the(?: \w+)+ is derived from \S+\./, "")
        .replace(/The values of the(?: \w+)+ are listed below\./, "")
        .replace(/(?:The )?\S+ Data Type is derived from \S+\./, "")
        .replace(
            /(?:This\s+(?:command|event)|The\s+\w+\s+(?:command|event))\s+shall\s+have\s+the\s+following\s+data\s+fields:/i,
            "",
        )
        .replace(/The (?:data|arguments) for this command (?:shall be|is|are) as follows:/i, "")
        .replace(/This attribute has the following possible values:/, "")
        .replace(/The \w+ attribute is indicated by an enumeration:/, "")
        .replace(/The data of this event shall contain the following information:/i, "")
        .replace(/The event.s data are as follows:/, "")
        .replace(/ as described in the table below:/, "")
        .replace(/,? using(?: the)? data as follows:$/, ".")
        .replace(/Here are some examples:/, "")
        .replace(/Valid combinations using null fields are shown below:/, "")
        .replace(/,? shown below:$/, "")
        .replace(/ such that:$/, "")
        .replace(/, derived from \w+,/, "")
        .replace(/\([^)]*$/, "")
        .replace(/\s{2,}/, "  ")
        .replace(/This attribute shall (?:indicate|represent)/, "Indicates")
        .replace(/This attribute shall be null/, "Null")
        .replace(/The following tags are defined in this namespace\./, "")
        .replace(/This section contains the .* as part of the semantic tag feature\./i, "")
        .replace(
            /The table below lists the changes relative to the Mode Base Cluster for the fields of the ModeOptionStruct type\./,
            "",
        )
        .replace(/. if the AbsolutePosition/, ".\nif the AbsolutePosition")
        .trim();
}

/**
 * Look for obvious split paragraphs and reassemble.
 */
function mergeSplitParagraphs(paragraphs: string[]) {
    // First merge by identifying word splits.  These we want to merge without an intervening space
    for (let i = 0; i < paragraphs.length - 1; i++) {
        const trailing = paragraphs[i].replace(/^.*\s(\w+)$/, "$1").toLowerCase();
        const leading = paragraphs[i + 1].replace(/^(\w+)\W.*$/, "$1").toLowerCase();
        if (Words.has(leading) && !NotWords.has(leading) && Words.has(trailing) && !NotWords.has(trailing)) {
            continue;
        }
        const possibleWord = `${trailing}${leading}`;
        if (Words.has(possibleWord)) {
            joinParagraphs(i, "");
        }
    }

    // Next merge by identifying sentence splits
    for (let i = 0; i < paragraphs.length - 1; i++) {
        if (paragraphs[i].endsWith(".") || paragraphs[i].endsWith(":")) {
            continue;
        }

        const sentences = paragraphs[i].split(/[.?!:]\s/);
        const lastSentence = sentences[sentences.length - 1];
        if (!lastSentence.match(/^[A-Z]/)) {
            continue;
        }

        const nextParagraph = paragraphs[i + 1];
        if (nextParagraph.match(/^[a-z0-9]/)) {
            if (!nextParagraph.match(/[.?!]\s/) || nextParagraph.match(/[.?!]$/)) {
                joinParagraphs(i, " ");
            }
        }
    }

    function joinParagraphs(index: number, separator: string) {
        paragraphs.splice(index, 2, `${paragraphs[index]}${separator}${paragraphs[index + 1]}`);
    }
}

/**
 * Make a valiant attempt to extract comprehensible documentation from the gobbledy gook produced by tired spec writers
 * -> word -> PDF -> HTML -> us pipeline.
 */
export function addDocumentation(target: { details?: string }, definition: HtmlReference) {
    const prose = definition.prose;
    if (!prose) {
        return;
    }

    const paragraphs = Array<string>();

    let collectNote = false;

    const listIndent = Array<number>();

    prose: for (const p of prose) {
        // Anchors receive special examination
        let looksLikeHeading = false;
        const first = p.firstChild as any;
        if (first?.tagName == "A" && first.getAttribute("name")) {
            const text = first.textContent;

            // Ignore table notations
            if (text.match(/^Table \d+/)) {
                listIndent.length = 0;
                continue;
            }

            // This edge case happens a half dozen times or so; subsection headings would otherwise appear as unadorned
            // text.  Instead stick a markdownish prefix on them.  Heuristically ignore various junk that also appears
            // in links but isn't a heading
            if (text.match(/^[^(.:]*$/)) {
                looksLikeHeading = true;
            }
        }

        // Extract text
        let text = extractUsefulDocumentation(p);

        // Next paragraph is a note if text is "NOTE"
        if (text === "NOTE") {
            listIndent.length = 0;
            collectNote = true;
            continue;
        }

        // Create note if we we saw "NOTE" previously
        if (collectNote) {
            listIndent.length = 0;
            paragraphs.push(`> [!NOTE]\n> ${text}`);
            collectNote = false;
            continue;
        }

        // Terminate if flagged
        for (const flag of EndContentFlags) {
            if (text.match(flag)) {
                break prose;
            }
        }

        // Add the text
        if (text) {
            if (looksLikeHeading) {
                // Special case, likely not necessary anymore
                listIndent.length = 0;
                text = `### ${text}`;
            } else if (liTest.exec(text)) {
                // Create proper list indentation relying on the fact that Acrobat injects bullets as text and indents
                // using left padding
                const indentStr = p.getAttribute("style")?.replace(/.*padding-left: (\d+).*/, "$1");
                let indent;
                if (indentStr) {
                    indent = Number.parseInt(indentStr);
                    if (Number.isNaN(listIndent)) {
                        indent = 0;
                    }
                } else {
                    indent = 0;
                }
                while (listIndent && listIndent[listIndent.length - 1] > indent) {
                    listIndent.pop();
                }
                if (!listIndent.length || listIndent[listIndent.length - 1] == indent) {
                    listIndent.push(indent);
                }
                text = `${" ".repeat((listIndent.length - 1) * 2)} ${text}`;
            } else {
                listIndent.length = 0;
            }
            paragraphs.push(text);
        }
    }

    if (paragraphs) {
        mergeSplitParagraphs(paragraphs);
        target.details = paragraphs.join("\n");
    }
}
