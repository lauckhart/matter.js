/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "@matter/general";

/**
 * A parsed endpoint selector.  Produced by the {@link EndpointSelector} factory from a target DSL string.
 *
 * Path selectors (containing `/` or starting with `.`) set {@link isPath} to `true` and store the raw string in
 * {@link path}.  All other selectors parse into optional {@link fabric}, {@link node}, and {@link endpoint} components.
 */
export interface EndpointSelector {
    readonly fabric?: "*" | string[];
    readonly node?: "*" | string[];
    readonly endpoint?: "*" | string[];
    readonly isPath: boolean;
    readonly path?: string;
    toString(): string;
}

/**
 * Parse a target DSL string into a frozen {@link EndpointSelector}.
 *
 * Use `\` to escape special characters (`:`, `,`, `*`, `/`, `.`, `@`, `\`) so they appear literally in names.
 *
 * Grammar:
 *
 *     TARGET    := PATH | SELECTOR
 *     PATH      := starts with unescaped "." or "/" or contains unescaped "/"
 *     SELECTOR  := FABRICS ":" NODES ":" ENDPOINTS
 *                 | NODES ":" ENDPOINTS
 *                 | NODE
 *     FABRICS   := VALUE_LIST | "*"
 *     NODES     := VALUE_LIST | "*" | ""
 *     ENDPOINTS := VALUE_LIST | "*" | ""
 *     VALUE_LIST:= VALUE ("," VALUE)*
 */
export function EndpointSelector(target: string): EndpointSelector {
    if (target === "") {
        throw new ImplementationError("Endpoint selector must not be empty");
    }

    // Path detection: unescaped "." at start, or unescaped "/" anywhere
    if (hasUnescaped(target, "/") || target[0] === ".") {
        return Object.freeze({
            isPath: true,
            path: unescape(target),
            toString: () => target,
        });
    }

    const parts = splitUnescaped(target, ":");

    if (parts.length > 3) {
        throw new ImplementationError(`Endpoint selector has too many colon-separated components: "${target}"`);
    }

    let fabric: "*" | string[] | undefined;
    let node: "*" | string[] | undefined;
    let endpoint: "*" | string[] | undefined;

    if (parts.length === 3) {
        fabric = parseComponent(parts[0]);
        node = parseComponent(parts[1]);
        endpoint = parseComponent(parts[2]);
    } else if (parts.length === 2) {
        node = parseComponent(parts[0]);
        endpoint = parseComponent(parts[1]);
    } else {
        // Bare node name
        node = parseComponent(parts[0]);
    }

    // Wildcard scoping validation
    if (fabric === "*" && node !== "*" && node !== undefined) {
        throw new ImplementationError(
            `Wildcard fabric requires node to be "*" or empty, got "${serializeComponent(node)}"`,
        );
    }

    if (node === "*") {
        validateWildcardNodeEndpoints(endpoint);
    }

    return Object.freeze({
        isPath: false,
        fabric,
        node,
        endpoint,
        toString: () => toCanonical(fabric, node, endpoint),
    });
}

/**
 * Characters that must be escaped with `\` when they appear literally in a name.
 */
const SPECIAL = new Set([":", ",", "*", "/", ".", "@", "\\"]);

/**
 * Split {@link str} on unescaped occurrences of {@link sep}.
 */
function splitUnescaped(str: string, sep: string): string[] {
    const parts = Array<string>();
    let current = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "\\" && i + 1 < str.length) {
            current += str[i] + str[i + 1];
            i++;
        } else if (str[i] === sep) {
            parts.push(current);
            current = "";
        } else {
            current += str[i];
        }
    }

    parts.push(current);
    return parts;
}

/**
 * Test whether {@link str} contains an unescaped occurrence of {@link ch}.
 */
function hasUnescaped(str: string, ch: string): boolean {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "\\" && i + 1 < str.length) {
            i++;
        } else if (str[i] === ch) {
            return true;
        }
    }
    return false;
}

/**
 * Strip escape backslashes, turning `\:` into `:` etc.
 */
function unescape(str: string): string {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "\\" && i + 1 < str.length) {
            result += str[i + 1];
            i++;
        } else {
            result += str[i];
        }
    }
    return result;
}

/**
 * Re-escape special characters so the value round-trips through the parser.
 */
function escape(str: string): string {
    let result = "";
    for (const ch of str) {
        if (SPECIAL.has(ch)) {
            result += "\\";
        }
        result += ch;
    }
    return result;
}

function parseComponent(raw: string): "*" | string[] | undefined {
    if (raw === "") {
        return undefined;
    }
    if (raw === "*") {
        return "*";
    }
    return splitUnescaped(raw, ",").map(unescape);
}

function serializeComponent(value: "*" | string[] | undefined): string {
    if (value === undefined) {
        return "";
    }
    if (value === "*") {
        return "*";
    }
    return value.map(escape).join(",");
}

function toCanonical(
    fabric: "*" | string[] | undefined,
    node: "*" | string[] | undefined,
    endpoint: "*" | string[] | undefined,
): string {
    if (fabric !== undefined) {
        return `${serializeComponent(fabric)}:${serializeComponent(node)}:${serializeComponent(endpoint)}`;
    }
    if (endpoint !== undefined) {
        return `${serializeComponent(node)}:${serializeComponent(endpoint)}`;
    }
    return serializeComponent(node);
}

function validateWildcardNodeEndpoints(endpoint: "*" | string[] | undefined) {
    if (endpoint === undefined || endpoint === "*") {
        return;
    }

    for (const value of endpoint) {
        if (isNumeric(value)) {
            throw new ImplementationError(
                `Wildcard node selector does not allow numeric endpoint "${value}"; use a device type name or "@" prefix`,
            );
        }
    }
}

function isNumeric(value: string): boolean {
    return /^\d+$/.test(value);
}
