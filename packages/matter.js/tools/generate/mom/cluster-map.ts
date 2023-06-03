/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../../src/log/Logger.js";
import { ClusterElement, EnumElement, IntElement, MatterElement } from "../../../src/model/index.js";
import { camelize } from "../../../src/util/String.js";
import { ClusterReference } from "./intermediate.js";
import { Integer, Identifier, LowerIdentifier, translateTable, Str, Optional, Required } from "./table-map.js";

const logger = Logger.get("cluster-map");

export function symbol(el: Node | undefined) {
    if (el?.textContent) {
        return el.textContent.replace(/[^a-zA-Z0-9]/g, "");
    } else {
        return "";
    }
}

function translateIds(definition: ClusterReference) {
    const ids = translateTable("id", definition.ids, {
        id: Integer,
        name: Identifier,

        // Core spec uses "identifier", cluster spec uses "id".
        // Because why would you to conform to a standard when you're
        // defining a standard?  Normalize to "ID".
        identifier: "id"
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

function translateMisc(definition: ClusterReference) {
    const revisions = translateTable("revision", definition.revisions, {
        revision: Integer,
        rev: "revision"
    });

    let revision = revisions[revisions.length - 1]?.revision;
    if (revision == undefined) {
        logger.warn(`no revisions for ${definition.name}, assuming "1"`);
        revision = 1;
    }

    const classifications = translateTable("classfication", definition.classifications, {
        role: LowerIdentifier,
        scope: Optional(LowerIdentifier),
        context: "scope"
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

    return { revision, classification };
}

// Convert from raw records into a matter element.  Note that we have to
// reassure TS that the MatterElement extension won't change the types of
// id, name and xref so that we can set them automatically
function translateRecordsToMatter<R, E extends MatterElement & { id: number, name: string, xref: MatterElement.CrossReference }>(
    desc: string,
    xref: MatterElement.CrossReference,
    records: R[],
    mapper: (record: R) => Omit<E, "id" | "name" | "xref"> & Partial<Pick<E, "id" | "name" | "xref">>
): Array<E> | undefined {
    const result = Array<E>();
    let pos = 0;
    for (const record of records) {
        pos++;
        const partial = mapper(record);

        if (partial.id == undefined) {
            const id = Number.parseInt((record as any)["id"]);
            if (Number.isNaN(id)) {
                logger.warn(`missing ID for ${desc} #${pos}, ignoring`);
                continue;
            }
            partial.id = id;
        }

        if (partial.name == undefined) {
            const name = (record as any)["name"];
            if (!name) {
                logger.warn(`missing ID for ${desc} #${pos}, ignoring`);
                continue;
            }
            partial.name = name.toString();
        }

        if (partial.xref == undefined) {
            partial.xref = xref;
        }

        result.push(partial as E);
    }
    if (result.length) {
        logger.info(`${result.length} ${desc}s`);
        return result;
    }
    return undefined;
}

function translateFeatures(definition: ClusterReference) {
    const records = translateTable("feature", definition.features, {
        id: Required(Integer),
        bit: "id",
        code: Required(Identifier),
        name: Str,
        def: Integer,
        description: Str
    });
    const values = translateRecordsToMatter("feature", definition.xref, records, record => {
        if (!record.code) {
            logger.warn(`bitmap`)
        }
        return IntElement({
            id: record.id,
            name: record.code,
            description: record.name,
            details: record.description
        });
    });
    if (!values) {
        return undefined;
    }
    return EnumElement({
        // Hmm, don't think ID is useful here
        id: 0,
        name: "Features",
        values: values as IntElement[]
    })
}

function translateDatatypes(definition: ClusterReference) {
    // TODO
    definition; return [];
}

function translateAttributes(definition: ClusterReference) {
    // TODO
    definition; return [];
}

function translateCommands(definition: ClusterReference) {
    // TODO
    definition; return [];
}

function translateEvents(definition: ClusterReference) {
    // TODO
    definition; return [];
}

// Translate from DOM -> MOM
export function* clusterMap(definition: ClusterReference) {
    const ids = translateIds(definition);
    if (!ids) {
        logger.warn(`no IDs for ${definition.name}, skipping`);
        return;
    }

    const { revision, classification } = translateMisc(definition);

    const features = translateFeatures(definition);
    const datatypes = translateDatatypes(definition);
    const attributes = translateAttributes(definition);
    const events = translateEvents(definition);
    const commands = translateCommands(definition);

    for (const [idStr, name] of Object.entries(ids)) {
        const id = Number(idStr);
        logger.debug(`0x${id.toString(16).padStart(4, "0")} ${name}`, Logger.dict({ rev: revision, cls: classification }));
        const cluster = ClusterElement({
            id: id,
            name: name,
            classification: classification,
            revision: revision,
            features: features,
            datatypes: datatypes,
            attributes: attributes,
            commands: commands,
            events: events
        });

        yield cluster;
    }
}
