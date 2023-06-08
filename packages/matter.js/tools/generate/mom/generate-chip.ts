/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Repo } from "../util/github.js";
import { readFileWithCache, writeMatterFile } from "../util/file.js";
import { readFileSync } from "fs";
import { homedir } from "os";
import { resolve } from "path";
import { Logger } from "../../../src/log/Logger.js";
import { JSDOM } from "jsdom";
import { Access, AttributeElement, BaseDataElement, BaseElement, ClusterElement, Conformance, EventElement, Globals, Quality } from "../../../src/model/index.js";
import { generateClusters } from "./generate-cluster.js";
import { camelize } from "../../../src/util/String.js";

const AUTH_FILE = resolve(homedir(), ".gh-auth");

const logger = Logger.get("generate-chip");

const auth = await loadAuth();
const repo = new Repo("project-chip", "connectedhomeip", "v1.1-branch", readFileWithCache, auth);

const parser = new(new JSDOM("").window.DOMParser)();

const clusters = Array<ClusterElement>();

logger.info("load chip");
Logger.nestAsync(async () => {
    logger.info("index");
    const path = await repo.cd("src/app/zap-templates/zcl/data-model/chip");

    for (const filename of await path.ls()) {
        if (!filename.endsWith(".xml")) continue;

        console.info(`file ${filename}`);
        Logger.nestAsync(async () => {
            console.debug("load");
            const xml = await path.get(filename);
            console.debug("parse");
            const document = parser.parseFromString(xml, "text/xml");
            console.debug("translate");
            translateClusters(document.documentElement);
        });
        generateClusters("chip", clusters);
    }
});

// Load github authentication
async function loadAuth() {
    try {
        return readFileSync(AUTH_FILE, { encoding: "utf-8" });
    } catch (e) {
        console.warn(`Stick a read-only github auth token into ${AUTH_FILE} or you will hit rate limit and need to run incrementally over several hours`);
    }
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
        if (!Access.Privilege[role]) {
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

    if (nullable) {
        target.quality = { nullable: true };
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
    target: BaseDataElement
): T {
    const id = need(`${Factory.Type} id`, int(src.getAttribute("code")));
    const name = camelize(need(`${Factory.Type} name`, str(src)));
    const base = need(`${Factory.Type} base`, str(src.getAttribute("type")));
    const element = Factory({ id: id, name: name, base: base } as T);

    setQualities(src, element);

    if (!target.children) {
        target.children = [];
    }
    target.children.push(element);

    return element;
}

type Translator = (source: Element, target: ClusterElement) => void;

const translators: { [name: string]: Translator } = {
    attribute: (source, target) => {
        createDataElement(AttributeElement, source, target);
    },

    event: (source, target) => {
        createDataElement(EventElement, source, target);
    },

    command: (source, target) => {

    },

    struct: (source, target) => {

    },

    enum: (source, target) => {

    },

    bitmap: (source, target) => {

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

function translateClusters(dom: Element) {
    dom.querySelectorAll("configurator > cluster").forEach((cdom) => {
        const idStr = child(cdom, "code");
        const name = need("cluster name", str(child(dom, "name"))).replace(/Cluster$/, "");
        const cluster = ClusterElement({
            id: need("cluster id", int(idStr)),
            name: camelize(name),
            description: name,
            details: str(child(cdom, "description"))
        });

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

const typeMap: { [name: string]: keyof typeof Globals} = {
    BOOLEAN: "bool",
    BITMAP8: "map8",
    BITMAP16: "map16",
    BITMAP24: "map24",
    BITMAP32: "map32",
    BITMAP64: "map64",
    INT8U: "uint8",
    INT16U: "uint16",
    INT24U: "uint24",
    INT32U: "uint32",
    INT40U: "uint40",
    INT48U: "uint48",
    INT56U: "uint56",
    INT64U: "uint64",
    INT8S: "int8",
    INT16S: "int16",
    INT24S: "int24",
    INT32S: "int32",
    INT40S: "int40",
    INT48S: "int48",
    INT56S: "int56",
    INT64S: "int64",
    ENUM8: "enum8",
    ENUM16: "enum16",
    SINGLE: "single",
    DOUBLE: "double",
    OCTET_STRING: "octstr",
    CHAR_STRING: "string",
    LONG_OCTET_STRING: "octstr",
    LONG_CHAR_STRING: "string",
    ARRAY: "list",
    STRUCT: "struct",
    TOD: "tod",
    DATE: "date",
    UTC: "utc",
    EPOCH_US: "epochUs",
    EPOCH_S: "epochS",
    SYSTIME_US: "systimeUs",
    PERCENT: "percent",
    PERCENT100THS: "percent100ths",
    CLUSTER_ID: "clusterId",
    ATTRIB_ID: "attributeId",
    FIELD_ID: "fieldId",
    EVENT_ID: "eventId",
    COMMAND_ID: "commandId",
    ACTION_ID: "actionId",
    TRANS_ID: "transactionId",
    NODE_ID: "nodeId",
    VENDOR_ID: "vendorId",
    DEVTYPE_ID: "deviceTypeId",
    FABRIC_ID: "fabricId",
    GROUP_ID: "groupId",
    STATUS: "status",
    DATA_VER: "dataVer",
    EVENT_NO: "eventNo",
    ENDPOINT_NO: "endpointNo",
    FABRIC_IDX: "fabricIdx",
    IPADR: "ipadr",
    IPV4ADR: "ipv4adr",
    IPV6ADR: "ipv6adr",
    IPV6PRE: "ipv6pre",
    HWADR: "hwadr"
};
