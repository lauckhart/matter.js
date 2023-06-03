/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { camelize } from "../../../src/util/String.js";
import { DetailedReference } from "./intermediate.js";
import { symbol } from "./cluster-map.js";
import { Logger } from "../../../src/log/Logger.js";

const logger = Logger.get("table-trans");

// Schema fields defined using these types
type Translator = (el: HTMLElement) => any;
type Optional = { option: "optional", translator: Translator };
type Required = { option: "required", translator: Translator };
type Alias = string;
type Field = Translator | Optional | Required | Alias;

// Field need not be present (by default field must be present but may be
// nullish)
export const Optional = (translator: Translator): Optional => ({ option: "optional", translator: translator });

// Field must be present and not nullish
export const Required = (translator: Translator): Required => ({ option: "required", translator: translator });

// A very simple schema format.  This is all a little fancy for an ugly
// scraping tool but accuracy and repeatability is the goal
type TableSchema = {
    [name: string]: Field;
}

// Map field to TS type
type FieldType<F extends Field> =
    F extends Optional
    ? ReturnType<F["translator"]> | undefined
    : F extends Required
    ? ReturnType<F["translator"]>
    : F extends Translator
    ? ReturnType<F> | undefined
    : never;

// Create TS object type from schema definition
type TableRecord<T extends TableSchema> = {
    [name in keyof T as T[name] extends Alias ? never : name]: FieldType<T[name]>
};

export const Integer = (el: HTMLElement) => Number.parseInt(symbol(el));
export const Identifier = (el: HTMLElement) => camelize(symbol(el), true);
export const LowerIdentifier = (el: HTMLElement) => symbol(el).toLowerCase();
export const Str = (el: HTMLElement) => symbol(el).trim().replace(/[\s]+/g, " ");

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
    const required = new Set<String>();
    const translators = Array<[string, Translator]>();

    for (const [ k, v ] of Object.entries(schema)) {
        if (typeof v == "string") {
            aliases.push([k, v]);
        } else if (typeof v == "function") {
            translators.push([k, v]);
        } else if (v.option == "optional") {
            optional.add(k);
            translators.push([k, v.translator]);
        } else {
            required.add(k);
            translators.push([k, v.translator]);
        }
    }

    // Translate each table row
    nextRow: for (const source of definition.table) {
        // Hard cast as we are taking care of enforcing typing ourselves
        const record = {} as TableRecord<T>;

        // Map aliased columns to their normalized name
        for (const [alias, name] of aliases) {
            if (!has(source, name) && has(source, alias)) {
                source[name] = source[alias];
            }
        }

        // Translate each field
        for (const [name, translator] of translators) {
            // If the column isn't present, skip and log as missing unless
            // marked as optional
            if (!has(source, name)) {
                if (!optional.has(name)) {
                    missing.add(name);
                }
                continue;
            }

            const el = source[name];

            // If the column is present but undefined, skip the property if
            // not required; skip the row and mark as missing if required
            if (el === undefined) {
                if (required.has(name)) {
                    missing.add(name);
                    continue nextRow;
                }
                continue;
            }

            // Translate the column.  Any further error handling is up to the
            // translator
            const value = translator(el);
            if (value == undefined || value == "") {
                continue;
            }

            // Set the column
            (record as any)[name] = value;
        }
        result.push(record);
    }

    if (missing.size) {
        logger.warn(`missing keys or values for one or more ${desc} fields: ${Array(...missing).join(', ')}`);
        logger.warn(`keys present are: ${Object.keys(definition.table[0]).join(', ')}`);
    }

    return result;
}
