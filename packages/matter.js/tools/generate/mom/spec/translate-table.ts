/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { camelize } from "../../../../src/util/String.js";
import { DetailedReference } from "./spec-types.js";
import { Logger } from "../../../../src/log/Logger.js";
import { AnyElement, BaseElement } from "../../../../src/model/index.js";

const logger = Logger.get("table-translate");

// Generic type of table cell "translators" such as those that follow
type Translator<T> = (el: HTMLElement) => T;

// String, trimmed with whitespace collapsed
export const Str = (el: HTMLElement) => el.textContent
    ? el.textContent
        // Remove leading and trailing whitespace
        .trim()

        // Remove soft hyphen and any surrounding whitespace
        .replace(/\s*\u00ad\s*/g, "")
        
        // Collapse whitespace    
        .replace(/\s+/g, " ")
    : "";

// String with no space at all
export const NoSpace = (el: HTMLElement) => Str(el).replace(/\s/g, "");

// Number parsed as integer
export const Integer = (el: HTMLElement) => Number.parseInt(NoSpace(el));

// CamelCase identifier.  Note we replace "Fo o" with "Foo" because space
// errors are very common in the PDFs, especially in narrow columns and we
// don't want to end up with FoO
export const Identifier = (el: HTMLElement) => camelize(Str(el)
    .replace(/[^\sA-Za-z0-9\-_]/g, "")
    .replace(/ +([a-z])/g, "$1"),
    true);

// Identifier, all lowercase
export const LowerIdentifier = (el: HTMLElement) => Identifier(el).toLowerCase();

// Identifier, all uppercase
export const UpperIdentifier = (el: HTMLElement) => Identifier(el).toUpperCase();

// Modifier that allows a value to be undefined
type Optional<T> = { option: "optional", wrapped: Alias<T> | Translator<T> };
export const Optional = <T> (wrapped: Alias<T> | Translator<T>): Optional<T> =>
    ({ option: "optional", wrapped });

// Modifier that maps one or more columns to a canonical name
type Alias<T> = { option: "alias", sources: string[], wrapped: Translator<T> };
export const Alias = <T> (wrapped: Translator<T>, ...sources: string[]): Alias<T> =>
    ({ option: "alias", sources, wrapped });

// Injects a column with a fixed value
type Constant<T> = { option: "constant", value: any };
export const Constant = <T> (value: T): Constant<T> =>
    ({ option: "constant", value });

// A simple schema format.  This is all a little fancy for an ugly scraping
// tool but accuracy and repeatability is the goal
type TableSchema = {
    [name: string]: any;
}

type FieldType<F>
    = F extends Optional<infer W> ? W | undefined
    : F extends Alias<infer W> | Translator<infer W> | Constant<infer W> ? W
    : never;

// Create TS object type from schema definition
type TableRecord<T extends TableSchema> = {
    [name in keyof T]: FieldType<T[name]>
} & { xref?: AnyElement.CrossReference, name?: string, details?: string };

const has = (object: Object, name: string) =>
    !!Object.getOwnPropertyDescriptor(object, name);

// Translates an array of key => HTMLElement records into a proper TS type
export function translateTable<T extends TableSchema>(
    desc: string,
    definition: DetailedReference | undefined,
    schema: T
): Array<TableRecord<T>> {
    if (!definition) {
        return [];
    }

    if (!definition.table) {
        logger.warn(`no ${desc} table § ${definition.xref.section}`);
        return [];
    }

    let missing = new Set<string>();
    const result = Array<TableRecord<T>>();

    const aliases = Array<[string, string]>();
    const optional = new Set<String>();
    const translators = Array<[string, Translator<any>]>();

    for (let [ k, v ] of Object.entries(schema)) {
        while (typeof v == "object") {
            switch (v.option) {
                case "optional":
                    optional.add(k);
                    v = v.wrapped;
                    break;
                    
                case "alias":
                    for (const source of v.sources) {
                        aliases.push([ source, k ]);
                    }
                    v = v.wrapped;
                    break;

                case "constant":
                    v = v.value;
                    break;
            }
        }

        translators.push([k, v]);
    }

    // Translate each table row
    nextRow: for (let source of definition.table.rows) {
        source = { ...source };

        // Map aliased columns to their normalized name
        for (const [alias, name] of aliases) {
            if (!has(source, name) && has(source, alias)) {
                source[name] = source[alias];
                delete source[alias];
            }
        }

        // Hard cast as we are taking care of enforcing typing ourselves
        const record = { xref: definition.xref } as TableRecord<T>;

        // Translate each field
        for (const [name, translator] of translators) {
            const el = source[name];
            const value = el == undefined ? undefined : translator(el);

            // Ignore the row if required values are missing
            if ((value == undefined || value === "" || Number.isNaN(value)) && !optional.has(name)) {
                missing.add(name);
                continue nextRow;
            }

            // Set the column
            (record as any)[name] = value;
        }
        result.push(record);
    }

    if (missing.size) {
        logger.error(`ignored one or more ${desc} rows due to missing fields: ${Array(...missing).join(', ')}`);
        logger.error(`keys present are: ${Object.keys(definition.table.rows[0]).join(', ')}`);
    }

    installPreciseDetails(desc, definition, result);

    return result;
}

// Convert from raw records into a matter element.  Note that we have to
// cast the element to any for automatic properties because TS isn't sure that
// the extension hasn't changed the values
export function translateRecordsToMatter<R, E extends { id: number, name: string }>(
    desc: string,
    records: R[],
    mapper: (record: R) => E | undefined
): Array<E> | undefined {
    const result = Array<E>();
    for (const record of records) {
        const mapped = mapper(record);
        if (!mapped) {
            continue;
        }

        logger.debug(`${desc} ${mapped.name} = ${mapped.id}`);
        result.push(mapped as E);
    }
    if (result.length == undefined) {
        return undefined;
    }
    return result;
}

// Attempt to install more specific xref and details
function installPreciseDetails(
    desc: string,
    definition: DetailedReference,
    records: Array<{ name?: string, xref?: BaseElement.CrossReference, details?: string }>
) {
    const lookup = Object.fromEntries(
        definition.details.map((detail) =>
            [ detail.name.toLowerCase(), detail ]
        )
    );

    records.forEach((r) => {
        if (!r.name) {
            return;
        }

        const detail = lookup[`${r.name.toLowerCase()} ${desc}`]
            || lookup[`${r.name.toLowerCase()}`];
        if (detail) {
            r.xref = detail.xref;
            detail.firstParagraph && (r.details = Str(detail.firstParagraph));
        }
    })
}
