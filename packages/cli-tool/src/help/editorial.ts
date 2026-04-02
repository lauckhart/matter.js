/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Extract a useful first-sentence summary from spec `details` text.
 *
 * Strips common Matter spec boilerplate prefixes and capitalizes the result. Based on frequency analysis of 3,076
 * first sentences across the full standard model.
 */
export function editorialSummary(text: string | undefined): string {
    if (!text) {
        return "";
    }

    let sentence = firstSentence(text);
    sentence = stripPrefix(sentence);
    sentence = stripTrailingRef(sentence);
    return capitalize(sentence);
}

/**
 * Extract the first sentence from a description string.
 *
 * Protects common abbreviations (e.g., i.e., a.k.a.) from being treated as sentence terminators.
 */
function firstSentence(text: string): string {
    // Replace abbreviation periods with a placeholder to prevent false sentence breaks
    const placeholder = "\uffff";
    const protected_ = text.replace(/\b([a-z]\.[a-z]\.(?:[a-z]\.)?)/gi, match => match.replace(/\./g, placeholder));
    const match = protected_.match(/^(.+?\.)\s/s);
    if (!match) {
        return text.split("\n")[0];
    }
    return match[1].replaceAll(placeholder, ".");
}

// Group A: strip the whole "This [noun] shall/is [verb]" prefix through the verb.
// Covers ~1,300 occurrences.
const groupA = new RegExp(
    "^(?:" +
        // "The purpose of this command is to ..."
        "the purpose of this \\w+ is to " +
        // "Upon receipt, this/the ... shall ..."
        "|upon receipt,? .*?shall " +
        // "This field/attribute/value/bit shall indicate/contain/specify/represent/provide/define/be ..."
        "|this (?:optional )?(?:field|attribute|value|bit),?(?:\\s+if \\w+,?)? shall " +
        "(?:indicate|contain|specify|represent|provide|define|describe|hold|enable|disable|be set to|be) " +
        // "This field/attribute is/indicates/contains/provides/specifies ..."
        "|this (?:field|attribute) (?:is used to |is |indicates |specifies |contains |provides )" +
        // "This command is used to/shall/causes/allows ..."
        "|this command (?:is used to |shall |causes |allows )" +
        // "The [Name] command allows/causes ..."
        "|the \\w+ command (?:allows |causes )" +
        // "This event shall be generated ..."
        "|this event shall be generated " +
        // "This shall indicate ..."
        "|this shall (?:indicate|be) " +
        ")",
    "i",
);

// Group B: strip "This [noun] " subject, keep the verb.
// Covers ~186 occurrences.
const groupB =
    /^this (?:cluster|feature(?: flag)?|enumeration|structure|data type|object|mode|(?:represents|indicates|contains) )/i;

// Group C: strip leading "Indicates".
// Covers ~521 occurrences.
const groupC = /^indicates /i;

// Group D: strip "Allows a client to".
// Covers ~15 occurrences.
const groupD = /^allows a client to /i;

function stripPrefix(text: string): string {
    let match;

    match = text.match(groupA);
    if (match) {
        return text.slice(match[0].length);
    }

    match = text.match(groupB);
    if (match) {
        // For "This represents/indicates/contains", strip "This " only
        if (/^this (?:represents|indicates|contains) /i.test(text)) {
            return text.slice(5); // strip "This "
        }
        // For other Group B, strip "This [noun] " but keep the verb
        return text.slice(match[0].length);
    }

    match = text.match(groupC);
    if (match) {
        return text.slice(match[0].length);
    }

    match = text.match(groupD);
    if (match) {
        return text.slice(match[0].length);
    }

    return text;
}

/**
 * Strip trailing "as defined in [Ref]" or "as defined in FooEnum".
 */
function stripTrailingRef(text: string): string {
    return text.replace(/,?\s+as defined in \[?\w+\]?\.?$/, "");
}

function capitalize(text: string): string {
    if (!text) {
        return text;
    }
    return text[0].toUpperCase() + text.slice(1);
}
