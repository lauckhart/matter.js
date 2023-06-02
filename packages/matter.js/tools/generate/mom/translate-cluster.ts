/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeElement, ClusterElement, CommandElement, DatatypeElement, EventElement, MatterElement } from "../../../src/model/index.js";
import { camelize } from "../../../src/util/String.js";
import { wsx } from "./html-scanner.js";
import { ClusterDom, ElementDom } from "./intermediate.js";
import { clusterWarn } from "./load-cluster.js";

type TableSchema = {
    [name: string]: ((el: HTMLElement) => any)
}

type TableRecord<T extends TableSchema> = {
    [name in keyof T]?: ReturnType<T[name]>
}

function translateTable<T extends TableSchema>(name: string, definition: ElementDom | undefined, schema: T): Array<TableRecord<T>> {
    if (!definition) {
        return [];
    }

    if (!definition.table) {
        clusterWarn(`no table for ${definition.name} § ${definition.section}`);
        return [];
    }

    let missing = new Set<string>();
    const result = Array<TableRecord<T>>();

    for (const source of definition.table) {
        const record: TableRecord<T> = {};
        for (const k in schema) {
            if (!Object.getOwnPropertyDescriptor(source, k)) {
                missing.add(k);
                continue;
            }

            const el = source[k];
            if (el === undefined) {
                continue;
            }

            const value = schema[k](el);
            if (value == undefined || value == "") {
                continue;
            }

            record[k] = value;
        }
        result.push(record);
    }

    if (missing.size) {
        clusterWarn(`missing keys in one or more ${name} fields: ${Array(...missing).join(', ')}`);
        clusterWarn(`keys present are: ${Object.keys(definition.table[0]).join(', ')}`);
    }

    return result;
}

const Integer = (el: HTMLElement) => Number.parseInt(wsx(el));
const Identifier = wsx;
const LowerIdentifier = (el: HTMLElement) => wsx(el).toLowerCase();

function translateIds(definition: ClusterDom) {
    const ids = translateTable("id", definition.ids, {
        id: Integer,
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

function translateMisc(definition: ClusterDom) {
    const revisions = translateTable("revision", definition.revisions, {
        revision: Integer
    });

    let revision = revisions[revisions.length - 1]?.revision;
    if (revision == undefined) {
        clusterWarn(`no revisions for ${definition.name}, assuming "1"`);
        revision = 1;
    }

    const classifications = translateTable("classfication", definition.classifications, {
        role: LowerIdentifier,
        scope: LowerIdentifier
    });
    const utility = classifications[0]?.role == "utility";
    const nodeScope = classifications[0]?.scope == "node";

    return { revision, utility, nodeScope };
}

function translateFeatures(definition: ClusterDom): Array<MatterElement> {
    // TODO
    definition; return [];
}

function translateDatatypes(definition: ClusterDom): Array<DatatypeElement> {
    // TODO
    definition; return [];
}

function translateAttributes(definition: ClusterDom): Array<AttributeElement> {
    // TODO
    definition; return [];
}

function translateCommands(definition: ClusterDom): Array<CommandElement> {
    // TODO
    definition; return [];
}

function translateEvents(definition: ClusterDom): Array<EventElement> {
    // TODO
    definition; return [];
}

// Translate from DOM -> MOM
export function* translateClusterDefinition(definition: ClusterDom) {
    console.log("    translate");

    const ids = translateIds(definition);
    if (!ids) {
        clusterWarn(`no IDs for ${definition.name}, skipping`);
        return;
    }

    const { revision, utility, nodeScope } = translateMisc(definition);

    const attributes = translateAttributes(definition);
    const events = translateEvents(definition);
    const features = translateFeatures(definition);
    const commands = translateCommands(definition);
    const datatypes = translateDatatypes(definition);

    for (const [idStr, name] of Object.entries(ids)) {
        const id = Number(idStr);
        console.log(`      0x${id.toString(16).padStart(4, "0")} ${name} r${revision} ${utility ? "" : "!"}util ${nodeScope ? "" : "!"}node`);
        const cluster: ClusterElement = {
            id: id,
            name: name,
            utility: utility,
            nodeScope: nodeScope,
            revision: revision,
            features: features,
            datatypes: datatypes,
            attributes: attributes,
            commands: commands,
            events: events
        };

        yield cluster;
    }
}
