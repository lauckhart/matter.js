/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic, Logger } from "#general";
import { Specification } from "#model";
import { readFileSync } from "node:fs";
import { DefaultTreeAdapterTypes, parse } from "parse5";
import { Str } from "./html-translators.js";
import { HtmlReference } from "./spec-types.js";

const logger = Logger.get("doc-utils");

export const DEFAULT_MATTER_VERSION = Specification.REVISION;

// Parse the section ID and name from a heading element
export function parseHeading(e: HTMLElement | null) {
    if (!e) {
        return undefined;
    }

    const heading = Str(e)?.replace(/^chapter\s+/i, "");
    if (!heading) {
        return undefined;
    }

    const parsed = /^([\d.]+)\. (.+)$/.exec(heading);
    if (!parsed) {
        return;
    }

    return {
        section: parsed[1],
        name: parsed[2],
    };
}

export type IndexDetail = {
    ref: HtmlReference;
    version: string;
    hasClusters: boolean;
    hasDevices: boolean;
    hasNamespaces: boolean;
};

export namespace Html {
    export type Document = DefaultTreeAdapterTypes.Document;
    export type Node = DefaultTreeAdapterTypes.Node;
    export type ChildNode = DefaultTreeAdapterTypes.ChildNode;
    export type ParentNode = DefaultTreeAdapterTypes.ParentNode;

    export interface ScanActions {
        emit?: boolean;
        enter?: boolean;
    }

    export interface ScanController {
        (node: Node): undefined | ScanActions;
    }

    export function* scan(node: Node, controller?: ScanController): Generator<Node> {
        yield* visitOne(node);

        function* visitOne(node: Node) {
            const actions = controller?.(node);

            if (actions?.emit !== false) {
                yield node;
            }

            if (actions?.enter === false || !("childNodes" in node)) {
                return;
            }

            for (const child of node.childNodes) {
                visitOne(child);
            }
        }
    }

    export function textOf(node: Node) {
        const parts = Array<string>();

        let needBreak = false;

        visit(node);

        return parts.join("");

        function visit(node: Node) {
            if (node.nodeName === "#text") {
                if (needBreak) {
                    parts.push("\n");
                }
                parts.push((node as DefaultTreeAdapterTypes.TextNode).value);
                return;
            }

            if ("childNodes" in node) {
                for (const child of node.childNodes) {
                    visit(child);

                    // Not trying very hard to identify block vs inline
                    if (child.nodeName === "BR" || child.nodeName === "P") {
                        needBreak = true;
                    }
                }
            }
        }
    }
}

export function loadHtml(path: string): Html.Document {
    const html = readFileSync(path);
    return parse(new TextDecoder().decode(html));
}

// Read an index file to find the portions of the spec we care about
export function identifyDocument(path: string, html: Html.Document): IndexDetail {
    let foundDocCell = false;

    let version: undefined | string, title: undefined | string;
    for (const node of Html.scan(html)) {
        switch (node.nodeName) {
            case "TD":
                if (!foundDocCell) {
                    if (Html.textOf(node) === "Document:") {
                        foundDocCell = true;
                        break;
                    }
                    throw new Error("No document identifier in first table cell");
                }

                const match = Html.textOf(node).match(/-(\d+(?:\.[\d+])*)-([a-z-]+)\.pdf/i);
                if (!match) {
                    throw new Error("Cannot parse document title");
                }

                version = match[1];
                title = match[2];

                break;
        }
    }

    if (!title || !version) {
        throw new Error("Did not locate document title or version");
    }

    let spec: Specification;
    let hasClusters = false;
    let hasDevices = false;
    let hasNamespaces = false;
    if (title.match(/matter specification/i)) {
        spec = Specification.Core;
        hasClusters = true;
    } else if (title.match(/application/i)) {
        spec = Specification.Cluster;
        hasClusters = true;
    } else if (title.match(/device/i)) {
        spec = Specification.Device;
        hasDevices = true;
    } else if (title.match(/namespaces/i)) {
        spec = Specification.Namespace;
        hasNamespaces = true;
    } else {
        throw new Error(`Matter specification name ${title} unrecognized in ${path}`);
    }

    // Drop dotted elements except the first two unless the third one is non-zero
    const versionParts = version.split(".");
    if (versionParts.length > 2) {
        if (versionParts[2] === "0") {
            version = versionParts.slice(0, 2).join(".");
        } else {
            version = versionParts.slice(0, 3).join(".");
        }
    }

    logger.info("recognized", Diagnostic.dict({ doc: spec, version: version }));

    return {
        ref: {
            name: title,
            path,
            xref: {
                document: spec,
                section: "",
            },
        },
        version,
        hasClusters,
        hasDevices,
        hasNamespaces,
    };
}
