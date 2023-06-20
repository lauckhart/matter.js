/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../../src/log/Logger.js";
import { AnyElement, AttributeElement, ClusterElement, CommandElement, DatatypeElement, EventElement, Globals, Metatype } from "../../../src/model/index.js";
import { camelize } from "../../../src/util/String.js";
import { ClusterReference, DetailedReference, HtmlReference } from "./spec-types.js";
import { Integer, Identifier, LowerIdentifier, translateTable, Str, Optional, UpperIdentifier, Alias, NoSpace, translateRecordsToMatter, Children, Bit, LimitedIdentifier } from "./translate-table.js";

const logger = Logger.get("translate-cluster");

// Translate from DOM -> MOM
export function* translateCluster(definition: ClusterReference) {
    const children = Array<ClusterElement.Child>();

    const metadata = translateMetadata(definition, children);
    if (!metadata) {
        return;
    }

    translateInvokable(definition, children);
    translateDatatypes(definition, children);

    for (const [idStr, name] of Object.entries(metadata.ids)) {
        const id = Number(idStr);
        logger.debug(`0x${id.toString(16).padStart(4, "0")} ${name}`, Logger.dict({ rev: metadata.revision, cls: metadata.classification }));
        const cluster = ClusterElement({
            id: id,
            name: name,
            classification: metadata.classification,
            children: children,
            type: metadata.derivesFrom,
            xref: definition.xref
        });

        addDetails(cluster, definition);

        yield cluster;
    }
}

// Load misc. values related to cluster definition
function translateMetadata(definition: ClusterReference, children: Array<ClusterElement.Child>) {
    const ids = translateIds();
    if (!ids) {
        logger.warn(`no IDs for ${definition.name}, skipping`);
        return;
    }

    const { classification, derivesFrom } = translateClassification();
    const revision = translateRevision();
    translateFeatures();

    return {
        ids: ids,
        classification: classification,
        revision: revision,
        derivesFrom
    }

    function translateIds() {
        const ids = translateTable("id", definition.ids, {
            // Core spec uses "identifier", cluster spec uses "id".
            // Because why would you to conform to a standard when you're
            // defining a standard?  Normalize to "ID".
            id: Alias(Integer, "identifier"),
            name: Identifier
        });
    
        // Some tables list the primary ID twice; only accept the secondary
        // instance
        const uniqueIds: { [id: number]: string } = {};
        for (const record of ids) {
            if (record.id !== undefined) {
                uniqueIds[record.id] = camelize(record.name || definition.name);
            }
        }
    
        if (!Object.keys(uniqueIds).length) {
            return false;
        }
    
        return uniqueIds;
    }
    
    function translateClassification() {
        const classifications = translateTable("classfication", definition.classifications, {
            hierarchy: Optional(Str),
            role: Optional(LowerIdentifier),
            scope: Optional(Alias(LowerIdentifier, "context"))
        });
    
        let classification: ClusterElement.Classification;
        if (classifications[0]?.role == "utility") {
            if (classifications[0]?.scope == "node") {
                classification = ClusterElement.Classification.NodeUtility;
            } else {
                classification = ClusterElement.Classification.EndpointUtility;
            }
        } else {
            classification = ClusterElement.Classification.Application;
        }

        let derivesFrom = classifications[0]?.hierarchy;
        if (derivesFrom) {
            derivesFrom = derivesFrom.replace(/^derive[sd] from /i, "");
            derivesFrom = camelize(derivesFrom);
            if (derivesFrom == "Base") {
                derivesFrom = undefined;
            }
        }
    
        return { classification, derivesFrom };
    }
    
    function translateRevision() {
        const revisions = translateTable("revision", definition.revisions, {
            revision: Alias(Integer, "rev")
        });
    
        let revision = revisions[revisions.length - 1]?.revision;
        if (revision == undefined) {
            logger.warn(`no revisions for ${definition.name}, assuming "1"`);
            revision = 1;
        }
    
        children.push({ ...Globals.ClusterRevision, default: revision });
    
        return revision;
    }
    
    function translateFeatures() {
        const records = translateTable("feature", definition.features, {
            id: Alias(Integer, "bit"),
            description: Optional(Alias(Str, "name", "summary")),

            conformance: Optional(Str),
    
            // Must define after description because name is overwritten
            // otherwise
            name: Alias(UpperIdentifier, "code", "feature"),
    
            // Actual type is numeric but we let Model handle that translation
            default: Optional(Alias(NoSpace, "def"))
        });
    
        const values = translateRecordsToMatter("feature", records, DatatypeElement);
        values && children.push({
            tag: Globals.FeatureMap.tag,
            id: Globals.FeatureMap.id,
            name: Globals.FeatureMap.name,
            type: "FeatureMap",
            children: values
        });
    }
}

// For some reason, "default" fabric access appears in an informational row
// instead of the access column in many of the core definitions.  Fix this.
function applyAccessNotes(fields?: HtmlReference, records?: { access?: string }[]) {
    if (!fields?.table?.notes.length || !records) {
        return;
    }

    // Determine what the access flag should be
    let flag: string | undefined;
    for (const n of fields.table.notes) {
        const match = n.textContent?.match(/access quality: fabric[\s\-](\w+)/i);
        if (match) {
            const quality = match[1].toLowerCase();

            switch (quality) {
                case "scoped":
                    flag = "F";
                    break;

                case "sensitive":
                    flag = "S";
                    break;

                default:
                    logger.warn(`ignoring unrecognized fabric access quality ${quality}`);
            }

            if (flag) {
                break;
            }
        }
    }

    // If we have the flag, apply it unless the row already has an access flag
    if (flag) {
        for (const r of records) {
            const access = r.access;
            if (!access) {
                r.access = flag;
            } else if (!access.match(/[SF]/i)) {
                r.access += flag;
            }
        }
    }
}

// Translate fields for an attribute or struct
function translateFields(desc: string, fields?: HtmlReference) {
    const records = translateTable(desc, fields, {
        id: Integer,
        name: Identifier,

        // Not really optional but we want to process rows even if missing
        type: Optional(NoSpace),

        constraint: Optional(Str),
        quality: Optional(Str),
        default: Optional(NoSpace),
        access: Optional(Str),
        conformance: Optional(Str),
        children: Children(translateValueChildren)
    });

    records.forEach(r => {
        if (typeof r.default == "string") {
            switch (r.default.toLowerCase()) {
                case "desc": // See description
                case "n/a": // Not available
                case "ms": // Manufacturer specific
                case "-": // Sometimes used for "none"
                    delete r.default;
                    break;

                case "varied":
                    r.default = "any";
                    break;
            }
        }
    });

    applyAccessNotes(fields, records);

    return records;
}

// Translate children of enums, bitmaps, structs, commands, attributes and
// events.  If "parent" is none of these, returns undefined
function translateValueChildren(tag: string, parent: undefined | { type?: string }, definition: HtmlReference): DatatypeElement[] | undefined {
    let type = parent?.type;
    if (type == undefined) {
        switch (tag) {
            case "command":
            case "event":
                type = "struct";
                break;

            default:
                return;
        }
    }

    const dt = (Globals as any)[type];
    switch (dt?.metatype) {
        case Metatype.enum: {
            const records = translateTable("value", definition, {
                id: Alias(Integer, "value", "enum"),
                name: Alias(Identifier, "type", "description"),
                conformance: Optional(Str),
                description: Optional(Str),
                meaning: Optional(Str)
            });
            return translateRecordsToMatter("value", records, DatatypeElement);
        }

        case Metatype.bitmap: {
            let records;
            if (definition.table?.rows[0]?.attributebitmask) {
                // Lock cluster does not adhere to standard
                records = translateTable("bit", definition, {
                    id: Alias(Bit, "attributebitmask"),
                    name: Alias(LimitedIdentifier, "eventdescription")
                })
            } else {
                // Standard bitmap table
                records = translateTable("bit", definition, {
                    id: Alias(Integer, "bit"),
                    name: Identifier,
                    description: Optional(Alias(Str, "summary"))
                });
            }
            return translateRecordsToMatter("bit", records, DatatypeElement);
        }

        case Metatype.object: {
            const records = translateFields("field", definition);
            return translateRecordsToMatter("field", records, DatatypeElement);
        }
    }
}

// Load attributes, events and commands
function translateInvokable(definition: ClusterReference, children: Array<ClusterElement.Child>) {    
    translateAttributes();
    translateEvents();
    translateCommands();

    function translateAttributes() {
        const records = translateFields("attribute", definition.attributes);
        const attributes = translateRecordsToMatter("attribute", records, AttributeElement);
        if (attributes) {
            children.push(...attributes);
        }
    }
    
    function translateCommands() {
        const records = translateTable("command", definition.commands, {
            id: Integer,
            name: Identifier,
            direction: Str,
            response: Optional(Identifier),
            access: Optional(Str),
            conformance: Optional(Str),
            children: Children(translateValueChildren)
        });

        applyAccessNotes(definition.commands, records);
    
        const commands = translateRecordsToMatter("command", records, (r) => {
            let direction: CommandElement.Direction | undefined;
            if (r.direction.match(/client.*server/i)) {
                direction = CommandElement.Direction.Request;
            } else if (r.direction.match(/server.*client/i)) {
                direction = CommandElement.Direction.Response;
            }
    
            let response: string | undefined;
            switch (r.response) {
                case "Y":
                    response = "status";
                    break;
    
                case "N":
                case "":
                case undefined:
                    break;
    
                default:
                    response = r.response;
                    break;
            }
    
            return CommandElement({ ...r, response: response, direction: direction });
        });
        commands && children.push(...commands);
    }
    
    function translateEvents() {
        const records = translateTable("event", definition.events, {
            id: Integer,
            name: Identifier,
            priority: Optional(LowerIdentifier),
            access: Optional(Str),
            conformance: Optional(Str),
            children: Children(translateValueChildren)
        });

        applyAccessNotes(definition.events, records);
        
        let events = translateRecordsToMatter("event", records, (r) => {
            let priority: EventElement.Priority;
            switch (r.priority?.toLowerCase()) {
                case "debug":
                    priority = EventElement.Priority.Debug;
                    break;

                case "info":
                    priority = EventElement.Priority.Info;
                    break;

                case "critical":
                    priority = EventElement.Priority.Critical;
                    break;

                case undefined:
                    logger.warn("no priority defined, assuming CRITICAL");
                    priority = EventElement.Priority.Critical;
                    break;

                default:
                    logger.warn(`unrecognized priority "${r.priority}", assuming CRITICAL`)
                    priority = EventElement.Priority.Critical;
                }
            return EventElement({ ...r, priority });
        });
        events && children.push(...events);
    }
}

// Load datatypes
function translateDatatypes(definition: ClusterReference, children: Array<ClusterElement.Child>) {
    if (!definition.datatypes) {
        return;
    }

    for (const datatype of definition.datatypes) {
        Logger.nest(() => {
            const child = translateDatatype(datatype);
            if (child) {
                addDetails(child, datatype);
                children.push(child);
            }
        });
    }
    
    function translateDatatype(definition: DetailedReference) {
        let name = definition.name;
        const text = definition.firstParagraph?.textContent;
        if (!text) {
            logger.warn(`no text to search for base type`);
        }
        let match = text?.match(/derived from ([a-z0-9\-_]+)/i);
        let type = match?.[1];
    
        let description: string | undefined;

        // Fix type errors
        switch (type) {
            case "attribute-id":
                type = "attr-id";
                break;

            case "bitmap8":
                type = "map8";
                break;

            case "node-idx":
                type = "node-id";
                break;
        }
    
        if (name.match(/enum$/i) || type?.match(/^enum/i)) {
            if (!type) {
                logger.warn(`no base detected, guessing enum8`)
                type = "enum8";
            }
        } else if (name.match(/bits$/i) || type?.match(/^map/i)) {
            if (!type) {
                logger.warn(`no base detected, guessing map8`);
                type = "map8";
            } else if (type.match(/^bitmap/)) {
                type = type.slice(3);
            }
        } else if (name.match(/struct$/i)
            || type == "struct"
            || (definition.table?.rows[0].type)
        ) {
            if (!type) {
                type = "struct";
            }
        } else if (match = name.match(/(.+) \((\S+) type\)/i)) {
            description = match[1];
            name = match[2];
        }

        const datatype = DatatypeElement({ type: type, name, description, xref: definition.xref });
        datatype.children = translateValueChildren("datatype", datatype, definition);
        return datatype;
    }
}

function addDetails(element: AnyElement, definition: HtmlReference) {
    if (definition.firstParagraph) {
        element.details = Str(definition.firstParagraph);
    }
}
