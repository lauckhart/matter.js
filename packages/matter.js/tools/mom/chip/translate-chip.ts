/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../../src/log/Logger.js";
import { Access, AnyElement, AttributeElement, BaseDataElement, BaseElement, ClusterElement, CommandElement, Conformance, DatatypeElement, EventElement } from "../../../src/model/index.js";
import { camelize } from "../../../src/util/index.js";
import { ChildTypeMap, TypeMap } from "./type-map.js";

const logger = Logger.get("translate-cluster");

export function translateChip(rootEl: Element, target: Array<AnyElement>) {
    rootEl.querySelectorAll("configurator > cluster").forEach((clusterEl) => {
        const id = int(child(clusterEl, "code"));
        const name = need("cluster name", str(child(clusterEl, "name"))).replace(/Cluster$/, "");
        const cluster = ClusterElement({
            id: need("cluster id", id),
            name: camelize(name),
            description: name,
            details: str(child(clusterEl, "description"))
        });

        if (bool(clusterEl.getAttribute("singleton"))) {
            cluster.singleton = true;
        }

        for (const n of clusterEl.childNodes) {
            if (n.nodeType != clusterEl.ownerDocument.ELEMENT_NODE) {
                continue;
            }
            const childEl = n as Element;
            if (childEl.tagName != "name" && childEl.tagName != "description") {
                translate(childEl, cluster);
            }
        }

        for (const node of rootEl.childNodes) {
            if (node.nodeType == 1 /* element */) {
                const clusterRefEl = child(node as Element, "cluster");
                if (clusterRefEl && int(clusterRefEl.getAttribute("code")) == id) {
                    translate(node as Element, cluster);
                }
            }
        }

        target.push(cluster);
    })
}

// A string as extracted from XML; either element body or attribute value
type MaybeStr = Element | string | null | undefined;

// Reject empty values
function need<T>(what: string, value: T | null | undefined): T {
    if (value == undefined || value === "" || Number.isNaN(value)) {
        throw Error(`missing ${what}`);
    }
    return value;
}

// Convert XML string to JS
function str(src?: MaybeStr) {
    if (typeof src != "string") {
        src = src?.textContent;
    }
    src = src?.trim().replace(/\s+/g, " ");
    return src;
}

// Convert XML string to JS integer
function int(src?: MaybeStr) {
    src = str(src);
    if (typeof src == "string") {
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
    return dom.getElementsByTagName(tagName)[0];
}

// Get all direct descendants with specified tag name
function children(dom: Element, tagName: string) {
    return Array.from(dom.getElementsByTagName(tagName));
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

    children(src, "access").forEach((accessEl) => {
        if (accessEl.getAttribute("modifier")) {
            // These are removed in newer XML files
            return;
        }
        const op = need(
            "access op",
            str(accessEl.getAttribute("op"))
        ) as keyof typeof srcAccess;
        if (Object.keys(srcAccess).indexOf(op) == -1) {
            throw new Error(`Unknown access op "${op}"`);
        }

        let privilege = need(
            "access role",
            str(accessEl.getAttribute("privilege") || accessEl.getAttribute("role"))
        ) as Access.Privilege;
        privilege = (Access.Privilege as any)[camelize(privilege)];
        if (!privilege) {
            throw new Error(`Unknown access role "${privilege}"`);
        }

        srcAccess[op] = privilege;
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
    dataEl: Element,
    target: BaseDataElement,
    base: string,
    propertyTag?: string
): T {
    let name = camelize(need(`${Factory.Type} name`, dataEl.getAttribute("name") || dataEl.getAttribute("define")));
    logger.debug(`${Factory.Type} ${name}`);

    let id = int(dataEl.getAttribute("code"));
    if (Factory.Type != DatatypeElement.Type) {
        need(`${Factory.Type} id`, id);
    }

    if (TypeMap[base.toUpperCase()]) {
        base = TypeMap[base.toUpperCase()];
    } else {
        base = camelize(base);
    }

    const element = Factory({ id: id, name: name, base: base } as T);

    setQualities(dataEl, element);

    if (propertyTag) {
        children(dataEl, propertyTag).forEach(propertyEl => {
            if (!element.children) {
                element.children = [];
            }

            const childBase = str(ChildTypeMap[base]) || propertyEl.getAttribute("type");

            element.children.push(createDataElement(
                DatatypeElement,
                propertyEl,
                element,
                need(`${Factory.Type} ${propertyTag} type`, childBase)
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
            need("attribute type", str(source.getAttribute("type")))
        );
    },

    event: (source, target) => {
        const event = createDataElement(
            EventElement,
            source,
            target,
            "STRUCT",
            "field"
        );
        event.priority = need("event priority", str(source.getAttribute("priority"))) as typeof event.priority;
        return event;
    },

    command: (source, target) => {
        const command = createDataElement(
            CommandElement,
            source,
            target,
            "STRUCT",
            "arg"
        );

        const response = str(source.getAttribute("response"));
        if (response) command.response = camelize(response);

        const src = str(source.getAttribute("source"));
        if (src == "client") {
            command.direction = CommandElement.Direction.Request;
        } else if (src == "server") {
            command.direction = CommandElement.Direction.Response;
        } else {
            throw new Error(`Illegal source ${src}`);
        }

        return command;
    },

    struct: (source, target) => {
        return createDataElement(
            DatatypeElement,
            source,
            target,
            str(source.getAttribute("type")) ?? "STRUCT",
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
        return;
    }
    translator(from, to);
}
