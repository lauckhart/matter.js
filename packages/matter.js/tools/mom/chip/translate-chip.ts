/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../../src/log/Logger.js";
import { Access, AnyElement, AttributeElement, ValueElement, ClusterElement, CommandElement, Conformance, DatatypeElement, ElementTag, EventElement, AnyValueElement } from "../../../src/model/index.js";
import { camelize } from "../../../src/util/index.js";
import { TypeMap } from "./type-map.js";

const logger = Logger.get("translate-chip");

export function translateChip(rootEl: Element) {
    const result = Array<AnyElement>();
    for (const node of rootEl.childNodes) {
        if (node.nodeType == 1 /* element */) {
            const translated = translate(node as Element);
            if (translated) {
                result.push(translated);
            }
        }
    }
    return result;
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
        target.readPriv = srcAccess.read;
    }
    if (srcAccess.write) {
        target.writePriv = srcAccess.write;
    }
    if (srcAccess.invoke) {
        if (srcAccess.read || srcAccess.write) {
            throw new Error(`Intermingled data and command privileges`);
        }
        target.writePriv = srcAccess.invoke;
    }
}

// Gather quality information from XML for a specific element and translate to
// MOM equivalents
function setQualities(src: Element, target: ValueElement) {
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
        access.rw = Access.Rw.ReadWrite;
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

function mapType(chipType: string | undefined) {
    if (!chipType) {
        return;
    }
    const mapped = TypeMap[chipType.toUpperCase()];
    if (mapped) {
        return mapped;
    }
    return camelize(chipType);
}

// Create a MOM element with data properties translated from CHIP XML
function createValueElement<T extends AnyValueElement>({
    factory,
    source,
    isClass,
    type,
    propertyTag,
    propertyIsClass
}: {
    factory: ((properties: T) => T) & { Tag: ElementTag },
    source: Element,
    isClass?: boolean,
    type?: string,
    propertyTag?: string,
    propertyIsClass?: boolean
}): T {
    let name = camelize(need(`${factory.Tag} name`, source.getAttribute("name") || source.getAttribute("define")), isClass);
    logger.debug(`${factory.Tag} ${name}`);

    let id = int(source.getAttribute("code") || source.getAttribute("value") || source.getAttribute("mask"));
    if (factory.Tag != DatatypeElement.Tag) {
        need(`${factory.Tag} id`, id);
    }

    type = mapType(type);

    const element = factory({ id: id, name: name, type: type } as T);

    let value = str(source.getAttribute("default"));
    if (value != undefined) {
        if (element.type?.match(/struct$/i) && value == "0x0") {
            value = "null";
        }
        element.default = value;
    }

    setQualities(source, element);

    if (propertyTag) {
        children(source, propertyTag).forEach(propertyEl => {
            if (!element.children) {
                element.children = [];
            }

            const childType = str(propertyEl.getAttribute("type"));

            element.children.push(createValueElement({
                factory: DatatypeElement,
                source: propertyEl,
                isClass: propertyIsClass,
                type: childType
            }));
        })
    }

    if (!element.children?.length) {
        const entryType = source.getAttribute("entryType");
        if (entryType) {
            element.children = [ DatatypeElement({ name: "entry", type: mapType(entryType) }) ];
        }
    }

    return element;
}

type Translator = (source: Element) => AnyElement;

const translators: { [name: string]: Translator } = {
    attribute: (source) => {
        return createValueElement({
            factory: AttributeElement,
            source,
            type: need("attribute type", str(source.getAttribute("type")))
        });
    },

    event: (source) => {
        const event = createValueElement({
            factory: EventElement,
            source,
            isClass: true,
            propertyTag: "field"
        });
        event.priority = need("event priority", str(source.getAttribute("priority"))) as typeof event.priority;
        return event;
    },

    command: (source) => {
        const command = createValueElement({
            factory: CommandElement,
            source,
            isClass: true,
            propertyTag: "arg"
        });

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

    struct: (source) => {
        return createValueElement({
            factory: DatatypeElement,
            source,
            isClass: true,
            type: str(source.getAttribute("type")) ?? "STRUCT",
            propertyTag: "item"
        });
    },

    enum: (source) => {
        return createValueElement({
            factory: DatatypeElement,
            source,
            isClass: true,
            type: need("enum type", str(source.getAttribute("type"))),
            propertyTag: "item",
            propertyIsClass: true
        })
    },

    bitmap: (source) => {
        return createValueElement({
            factory: DatatypeElement,
            source,
            isClass: true,
            type: need("bitmap type", str(source.getAttribute("type"))),
            propertyTag: "field",
            propertyIsClass: true
        })
    },

    cluster: (source) => {
        const id = int(child(source, "code"));
        const name = need("cluster name", str(child(source, "name"))).replace(/Cluster$/, "");
        const cluster = ClusterElement({
            id: need("cluster id", id),
            name: camelize(name),
            description: name,
            details: str(child(source, "description"))
        });

        if (bool(source.getAttribute("singleton"))) {
            cluster.singleton = true;
        }

        for (const n of source.childNodes) {
            if (n.nodeType != source.ownerDocument.ELEMENT_NODE) {
                continue;
            }
            const childEl = n as Element;
            if (childEl.tagName != "name" && childEl.tagName != "description") {
                const element = translate(childEl);
                if (element) {
                    if (!cluster.children) {
                        cluster.children = [];
                    }
                    cluster.children.push(element);
                }
            }
        }

        return cluster;
    }
}

function translate(from: Element) {
    const translator = translators[from.tagName];
    if (!translator) {
        return;
    }
    return translator(from);
}
