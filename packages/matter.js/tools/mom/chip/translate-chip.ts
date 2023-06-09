/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../../src/log/Logger.js";
import { Access, AttributeElement, BaseDataElement, BaseElement, ClusterElement, CommandElement, Conformance, DatatypeElement, EventElement } from "../../../src/model/index.js";
import { camelize } from "../../../src/util/index.js";

const logger = Logger.get("translate-cluster");

export function translateChip(dom: Element) {
    dom.querySelectorAll("configurator > cluster").forEach((cdom) => {
        const idStr = child(cdom, "code");
        const name = need("cluster name", str(child(dom, "name"))).replace(/Cluster$/, "");
        const cluster = ClusterElement({
            id: need("cluster id", int(idStr)),
            name: camelize(name),
            description: name,
            details: str(child(cdom, "description"))
        });

        if (bool(cdom.getAttribute("singleton"))) {
            cluster.singleton = true;
        }

        for (const n of cdom.childNodes) {
            if (n.nodeType != Node.ELEMENT_NODE) {
                return;
            }
            const el = n as Element;
            if (el.tagName != "name" && el.tagName != "description") {
                translate(el, cluster);
            }
        }

        for (const el of cdom.parentElement!.querySelectorAll(`:scope > * > cluster[code="${idStr}"]`)) {
            translate(el, cluster);
        }
    })
}

// A string as extracted from XML; either element body or attribute value
type MaybeStr = Element | string | null | undefined;

// Reject empty values
function need<T>(what: string, value: T | null | undefined): T {
    if (value == null || value == undefined || value == "" || Number.isNaN(value)) {
        throw Error(`missing ${what}`);
    }
    return value;
}

// Convert XML string to JS
function str(src?: MaybeStr) {
    if (src instanceof Element) {
        src = src?.textContent;
    }
    src = src?.trim();
    return src;
}

// Convert XML string to JS integer
function int(src?: MaybeStr) {
    src = str(src);
    if (src == "string") {
        const value = Number.parseInt(src);
        if (Number.isNaN(value)) {
            throw new Error("Invalid numeric value");
        }
        return value;
    }
}

// Convert XML string to JS boolean
function bool(src?: MaybeStr) {
    return str(src)?.toLowerCase() == "true";
}

// Get first direct descendant with specified tag name
function child(dom: Element, tagName: string) {
    const el = dom.querySelector(`:scope > ${tagName}`);
    return el ? el : undefined;
}

// Get all direct descendants with specified tag name
function children(dom: Element, tagName: string) {
    return dom.querySelectorAll(`:scope > ${tagName}`);
}

// Translate CHIP XML access tags to MOM privileges
function setAccessPrivileges(src: Element, target: Access.Ast) {
    const srcAccess = {
        read: undefined,
        invoke: undefined,
        write: undefined 
    } as {
        read?: Access.Privilege,
        invoke?: Access.Privilege,
        write?: Access.Privilege
    }

    children(src, "access").forEach((el) => {
        const op = need(
            "access op",
            str(el.getAttribute("op"))
        ) as keyof typeof srcAccess;
        if (Object.keys(srcAccess).indexOf(op) == -1) {
            throw new Error(`Unknown access op "${op}"`);
        }

        const role = need(
            "access role",
            str(el.getAttribute("role"))
        ) as Access.Privilege;
        if (!(Access.Privilege as any)[role]) {
            throw new Error(`Unknown access role "${role}"`);
        }

        srcAccess[op] = role;
    });

    if (srcAccess.read !== undefined) {
        target.readPrivilege = srcAccess.read;
    }
    if (srcAccess.write) {
        target.writePrivilege = srcAccess.write;
    }
    if (srcAccess.invoke) {
        if (srcAccess.read || srcAccess.write) {
            throw new Error(`Intermingled data and command privileges`);
        }
        target.writePrivilege = srcAccess.invoke;
    }
}

// Gather quality information from XML for a specific element and translate to
// MOM equivalents
function setQualities(src: Element, target: BaseDataElement) {
    const optional = bool(src.getAttribute("optional"));
    const nullable = bool(src.getAttribute("isNullable"));
    const reportable = bool(src.getAttribute("reportable"));
    const singleton = bool(src.getAttribute("singleton"));
    const fabricSensitive = bool(src.getAttribute("isFabricSensitive"));
    const fabricScoped = !fabricSensitive && bool(src.getAttribute("isFabricScoped"));
    const writable = bool(src.getAttribute("writable"));
    const timed = bool(src.getAttribute("mustUseTimedWrite"));

    const access: Access.Ast = {
         rw: Access.Rw.Read
    };
    if (writable) {
        access.rw = Access.Rw.Write;
    }
    if (fabricSensitive) {
        access.fabric = Access.Fabric.Sensitive;
    } else if (fabricScoped) {
        access.fabric = Access.Fabric.Scoped;
    }
    if (timed) {
        access.timed = true;
    }
    setAccessPrivileges(src, access);
    target.access = access;

    if (nullable || reportable || singleton) {
        target.quality = {};
        if (nullable) target.quality.nullable = true;
        if (reportable) target.quality.reportable = true;
        if (singleton) target.quality.singleton = true;
    }

    const conformance = Array<Conformance.Flag>();
    if (optional === true) {
        conformance.push(Conformance.Flag.Optional);
    } else if (optional === false) {
        conformance.push(Conformance.Flag.Mandatory);
    }

    target.conformance = conformance;
}

// Create a MOM element with data properties translated from CHIP XML
function createDataElement<T extends BaseDataElement>(
    Factory: ((properties: T) => T) & { Type: BaseElement.Type },
    src: Element,
    target: BaseDataElement,
    base: string,
    propertyTag?: string
): T {
    const id = need(`${Factory.Type} id`, int(src.getAttribute("code")));
    const name = camelize(need(`${Factory.Type} name`, str(src)));
    const element = Factory({ id: id, name: name, base: base } as T);

    setQualities(src, element);

    if (propertyTag) {
        children(src, propertyTag).forEach(pdom => {
            if (!element.children) {
                element.children = [];
            }
            element.children.push(createDataElement(
                DatatypeElement,
                pdom,
                element,
                need(`${Factory.Type} ${propertyTag} type`, str(src.getAttribute("type")))
            ))
        })
    }

    if (!target.children) {
        target.children = [];
    }
    target.children.push(element);

    return element;
}

type Translator = (source: Element, target: ClusterElement) => void;

const translators: { [name: string]: Translator } = {
    attribute: (source, target) => {
        return createDataElement(
            AttributeElement,
            source,
            target,
            need("attribute body", str(source))
        );
    },

    event: (source, target) => {
        const el = createDataElement(
            EventElement,
            source,
            target,
            "struct",
            "field"
        );
        el.priority = need("event priority", str(source.getAttribute("priority"))) as typeof el.priority;
        return el;
    },

    command: (source, target) => {
        const el = createDataElement(
            CommandElement,
            source,
            target,
            "struct",
            "arg"
        );

        const response = str(source.getAttribute("response"));
        if (response) el.response = response;

        const src = str(source.getAttribute("source"));
        if (src == "client") {
            el.direction = CommandElement.Direction.Request;
        } else if (src == "server") {
            el.direction = CommandElement.Direction.Response;
        } else {
            throw new Error(`Illegal source ${src}`);
        }

        return el;
    },

    struct: (source, target) => {
        return createDataElement(
            DatatypeElement,
            source,
            target,
            str(source.getAttribute("type")) ?? "struct",
            "item"
        );
    },

    enum: (source, target) => {
        return createDataElement(
            DatatypeElement,
            source,
            target,
            need("enum type", str(source.getAttribute("type"))),
            "item"
        )
    },

    bitmap: (source, target) => {
        return createDataElement(
            DatatypeElement,
            source,
            target,
            need("bitmap type", str(source.getAttribute("type"))),
            "item"
        )
    }
}

function translate(from: Element, to: ClusterElement) {
    const translator = translators[from.tagName];
    if (!translator) {
        logger.warn(`Unrecognized cluster constituent tag ${from.tagName}`);
        return;
    }
    translator(from, to);
}
