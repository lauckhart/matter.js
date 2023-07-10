/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { WORDS } from "../../util/words.js";
import { Str } from "./html-translators.js";
import { HtmlReference } from "./spec-types.js";

/**
 * A light attempt dropping text to make documentation seem slightly less
 * scavenged.
 */
function extractUsefulDocumentation(p: HTMLElement) {
    return Str(p)
        .replace(/This data type is derived from \S+(?: and has its values listed below)?\./, "")
        .replace(/The data type \S+ is derived from \S+\./, "")
        .replace(/The data type of the(?: \w+)+ is derived from \S+\./, "")
        .replace(/The values of the(?: \w+)+ are listed below\./, "")
        .replace(/(?:The )?\S+ Data Type is derived from \S+\./, "")
        .replace(/(?:This command|The \w+ command) SHALL have the following data fields:/i, "")
        .replace(/The (?:data|arguments) for this command (?:shall be|is|are) as follows:/i, "")
        .replace(/This attribute has the following possible values:/, "")
        .replace(/The \w+ attribute is indicated by an enumeration:/, "")
        .replace(/The data of this event SHALL contain the following information:/i, "")
        .replace(/The event.s data are as follows:/, "")
        .replace(/ as described in the table below:/, "")
        .replace(/,? using(?: the)? data as follows:$/, ".")
        .replace(/Here are some examples:/, "")
        .replace(/,? shown below:$/, "")
        .replace(/ such that:$/, "")
        .replace(/, derived from \w+,/, "")
        .replace(/SHALL/g, "shall")
        .replace(/\([^)]*$/, "")
        .replace(/\s\s+/, "  ")
        .trim();
}

/**
 * Similarly to what we do within paragraphs, look for obvious word splits
 * spanning paragraphs and reassemble.
 */
function mergeSplitParagraphs(paragraphs: string[]) {
    for (let i = 0; i < paragraphs.length - 1; i++) {
        const trailing = paragraphs[i].replace(/^.*\s(\w+)$/, "$1").toLowerCase();
        const leading = paragraphs[i + 1].replace(/^(\w+).*$/, "$1").toLowerCase();
        if (WORDS.has(leading) && WORDS.has(leading)) {
            continue;
        }
        const possibleWord = `${trailing}${leading}`;
        if (WORDS.has(possibleWord)) {
            paragraphs.splice(i, 2, `${paragraphs[i]}${paragraphs[i + 1]}`);
        }
    }
}

/**
 * Make a valiant attempt to extract comprehensible documentation from the
 * gobbledy gook produced by tired spec writers -> word -> PDF -> HTML -> us
 * pipeline.
 */
export function addDetails(target: { details?: string }, definition: HtmlReference) {
    let prose = definition.prose;
    if (!prose) {
        return;
    }

    const paragraphs = Array<string>();

    for (const p of prose) {
        // Anchors receive special examination
        let looksLikeHeading = false;
        const first = p.firstChild as any;
        if (first?.tagName == "A" && first.getAttribute("name")) {
            const text = first.textContent;

            // Ignore table notations
            if (text.match(/^Table \d+/)) {
                continue;
            }

            // This edge case happens a half dozen times or so; subsection
            // headings would otherwise appear as unadorned text.  Instead
            // stick a markdownish prefix on them.  Heuristically ignore
            // various junk that also appears in links but isn't a heading
            if (text.match(/^[^(.:]*$/)) {
                looksLikeHeading = true;
            }            
        }

        // Extract text
        let text = extractUsefulDocumentation(p);
        if (text) {
            if (looksLikeHeading) {
                text = `### ${text}`;
            }
            paragraphs.push(text);
        }
    }
    
    if (paragraphs) {
        mergeSplitParagraphs(paragraphs);
        target.details = paragraphs.join("\n");
    }
}
