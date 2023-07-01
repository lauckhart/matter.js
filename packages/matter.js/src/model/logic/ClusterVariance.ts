/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/index.js";
import { isDeepEqual } from "../../util/index.js";
import { AttributeModel, ClusterModel, ValueModel } from "../models/index.js";

function pattern(...parts: string[]) {
    parts = parts.map(p => {
        switch (p) {
            case "[":
            case "]":
            case "(":
            case ")":
                return `\\${p}`;

            default:
                return p;
        }
    });
    return new RegExp(`^${parts.join("")}$`);
}

const FEATURE = "([A-Z_][A-Z_]+)";
const FIELD = "[A-Z][A-Za-z_$]+";
const OR = " \\| ";
const AND = " & ";
const NOT = "!";

/**
 * We use a rules-based approach to process cluster variance.  The goal is to
 * classify into as few sets as possible.  This leads to fewer duplicated
 * elements and reduced complexity of generated clusters.
 * 
 * An alternative would be to permute features, test for conformance, then
 * infer the condition from conforming feature permutations.  For now though
 * current approach is much simpler.  Could revisit if variance permutations
 * increases drastically with feature Matter versions.
 * 
 * Matches string form rather than the AST because that is also simpler for
 * the moment.  Note this is less fragile than it may appear because string is
 * normalized product of parser -> AST -> serializer.
 * 
 * Note also that this only applies to conformance of cluster-level elements.
 * There is considerably more variance in field-level conformance but we handle
 * that with the record validator which supports the entire dialect.
 */
const VarianceMatchers: VarianceMatcher[] = [
    // Mandatory, unconditional
    {
        pattern: pattern("(?:|M)"),
        processor: (add) => {
            add();
        }
    },
    
    // Optional, unconditional
    {
        pattern: pattern("(?:O|desc)"),
        processor: (add) => {
            add(true);
        }
    },

    // Optional, unconditional.  Ignores field expression which can only be
    // enforced at runtime
    {
        pattern: pattern(FIELD, " > ", "\\d+"),
        processor: (add) => {
            add(true);
        }
    },

    // FOO & fieldName (field ignored as must be runtime enforced)
    {
        pattern: pattern(FEATURE, " & ", FIELD),
        processor: (add, match) => {
            add(true, { allOf: match });
        }
    },

    // FOO
    {
        pattern: pattern(FEATURE),
        processor: (add, match) => {
            add(false, { allOf: match })
        }
    },

    // [FOO]
    {
        pattern: pattern("[", FEATURE, "]"),
        processor: (add, match) => {
            add(true, { allOf: match })
        }
    },
    
    // FOO | BAR or FOO, BAR
    {
        pattern: pattern(FEATURE, "(?:, | \\| )", FEATURE),
        processor: (add, match) => {
            add(false, { anyOf: match });
        }
    },

    // FOO & BAR
    {
        pattern: pattern(FEATURE, AND, FEATURE),
        processor: (add, match) => {
            add(false, { allOf: match });
        }
    },

    // FOO, [BAR]
    {
        pattern: pattern(FEATURE, ", ", "[", FEATURE, "]"),
        processor: (add, match) => {
            // Must add to two sets because optionality differs
            add(false, { allOf: [ match[0] ] });
            add(true, { allOf: [ match[1] ] });
        }
    },

    // !FOO & BAR
    {
        pattern: pattern(NOT, FEATURE, AND, FEATURE),
        processor: (add, match) => {
            add(false, { allOf: [ match[1] ], not: match[0] });
        }
    },

    // !FOO & [BAR]
    {
        pattern: pattern(NOT, FEATURE, AND, "[", FEATURE, "]"),
        processor: (add, match) => {
            add(true, { allOf: [ match[1] ], not: match[0] });
        }
    },

    // !FOO & (BAR | BIZ)
    {
        pattern: pattern(NOT, FEATURE, AND, "(", FEATURE, OR, FEATURE, ")"),
        processor: (add, match) => {
            add(true, { allOf: match.slice(1), not: match[0] });
        }
    },

    // !FOO
    {
        pattern: pattern(NOT, FEATURE),
        processor: (add, match) => {
            add(false, { not: match[0] });
        }
    },

    // [!FOO]
    {
        pattern: pattern("[", NOT, FEATURE, "]"),
        processor: (add, match) => {
            add(true, { not: match[0] });
        }
    },

    // [FOO & BAR]
    {
        pattern: pattern("[", FEATURE, AND, FEATURE, "]"),
        processor: (add, match) => {
            add(true, { allOf: match });
        }
    },

    // FOO & BAR, [BIZ]
    {
        pattern: pattern(FEATURE, AND, FEATURE, ", ", "[", FEATURE, "]"),
        processor: (add, match) => {
            add(false, { allOf: match.slice(0, 2) });
            add(true, { allOf: [ match[2] ] });
        }
    }
];

/**
 * The condition for supported patterns of complex variance.
 */
export type VarianceCondition = {
    anyOf?: string[],
    allOf?: string[],
    not?: string
}

/**
 * Lists mandatory and optional elements for a specific context.
 */
export type ElementVariance = {
    mandatory: ValueModel[],
    optional: ValueModel[],
    condition?: VarianceCondition
}

/**
 * Details all variance for a cluster.
 */
export type ClusterVariance = ElementVariance[];

/**
 * Computes valid feature feature combinations for a cluster and which
 * elements apply to each valid combination. 
 */
export function ClusterVariance(cluster: ClusterModel): ClusterVariance {
    const result = [] as ClusterVariance;
    cluster.children.forEach(child => addElement(result, child));
    return result;
}

type VarianceMatcher = {
    pattern: RegExp,
    processor: (
        add: (optional?: boolean, condition?: VarianceCondition) => void,
        match: string[]
    ) => void
}

function addElement(variance: ClusterVariance, element: ValueModel) {
    if (element.base instanceof AttributeModel && element.base.global) {
        return;
    }

    let text = element.conformance.toString();

    if (text == "X") {
        return;
    }

    while (true) {
        if (text == "D") {
            text = "O";
            break;
        }
        if (text == "P") {
            text = "M";
            break;
        }
        if (text.match(/^[DP], /)) {
            text = text.substring(3);
        } else {
            break;
        }
    }

    for (const matcher of VarianceMatchers) {
        const match = text.match(matcher.pattern);
        if (match) {
            matcher.processor((optional, condition) => {
                addVariance(variance, element, optional, condition);
            }, match.slice(1));
            return;
        }
    }
    throw new InternalError(`New rule needed for conformance "${element.conformance}" (element ${element.path})`);
}

function addVariance(clusterVariance: ClusterVariance, element: ValueModel, optional?: boolean, condition?: VarianceCondition) {
    let into: ElementVariance | undefined;

    // Find set
    for (const existing of clusterVariance) {
        if (isDeepEqual(existing.condition, condition)) {
            into = existing;
            break;
        }
    }

    // If set does not exist, create it
    if (!into) {
        into = {
            condition,
            optional: [],
            mandatory: []
        }
        clusterVariance.push(into);
    }

    // Add the element to the set
    if (optional) {
        into.optional.push(element);
    } else {
        into.mandatory.push(element);
    }
}
