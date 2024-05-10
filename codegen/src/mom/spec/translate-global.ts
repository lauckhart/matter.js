/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "@project-chip/matter.js/common";
import { AttributeElement, DatatypeElement, FieldElement, Metatype, ValueElement } from "@project-chip/matter.js/model";
import { fixTypeIdentifier } from "./fixes.js";
import { ByteSize, Identifier, Integer, Str } from "./html-translators.js";
import { GlobalReference } from "./spec-types.js";
import {
    FieldRecord,
    selectMetatype,
    translateDatatype,
    translateFields,
    translateValueChildren,
} from "./translate-datatype.js";
import { Alias, Children, Optional, translateRecordsToMatter, translateTable } from "./translate-table.js";

let statusType: DatatypeElement | undefined;

/**
 * Converts global elements appearing in cluster specifications but not associated with a specific cluster.
 *
 * Most of these live in independent sections describing a single datatype except for the "global elements" list in the
 * core specification.
 */
export function* translateGlobal(ref: GlobalReference) {
    switch (ref.format) {
        case "datatypes":
            // Base and derived sections of the core "Data Types" chapter have a specialized table format
            yield* translateDatatypes(ref);
            break;

        case "elements":
            // Global attributes and fields are defined in a specialized table that is almost a normal field list
            yield* translateElements(ref);
            break;

        case "standalone":
            // Other global datatypes are just in a section of their own that matches the format of datatypes within
            // clusters
            const datatype = translateDatatype(ref);
            if (datatype?.type !== undefined) {
                yield datatype;
            }
            break;

        case "statusCodes":
            // Status codes exist in a dedicated table
            installstatusCodes(ref);
            break;

        default:
            throw new InternalError(`Unsupported datatype format ${ref.format}`);
    }
}

/**
 * This is the schema we use to parse "base data types" and "derived data types" in the core spec.
 */
const DatatypeSchema = {
    // We use the "long" name as description
    description: Alias(Str, "datatype"),

    // Name is an identifier but we want to capture the case so we do not use Identifier
    name: Alias(Str, "short"),

    // This is only present for the "derived type" table
    type: Optional(Alias(Str, "basetype")),

    // The ID seems to have no purpose.  We ignore it

    // Size may map to byteSize or conformance depending on format
    size: Optional(ByteSize),

    // A few of the structs define fields in the detail section
    children: Children(translateValueChildren),
};

/**
 * Extract basic datatypes from core spec.  We are not functional without these so this code is less lenient.
 */
function* translateDatatypes(ref: GlobalReference): Generator<DatatypeElement> {
    // Patch details so semtag matches correct detail section
    if (ref.details) {
        for (const detail of ref.details) {
            if (detail.name == "SemanticTagStruct") {
                detail.name = "semtag";
            }
        }
    }

    const records = translateTable("datatype", ref, DatatypeSchema);

    if (!records) {
        throw new InternalError(`No records from datatype section ${ref.name}`);
    }

    const datatypes = translateRecordsToMatter(
        "datatype",
        records,
        ({ name, description, type, size, children, details, xref }) => {
            if (type?.startsWith("same as ")) {
                return;
            }

            type = fixTypeIdentifier(type);

            const element = DatatypeElement({
                name,
                description,
                type,
                details,
                xref,
                children,
                metatype: selectMetatype(name),
            });

            switch (element.metatype) {
                case Metatype.integer:
                case Metatype.float:
                case Metatype.bitmap:
                    if (typeof size === "number") {
                        element.byteSize = size as ValueElement.ByteSize;
                    } else if (typeof size === "object") {
                        element.conformance = size;
                    }
                    break;
            }

            return element;
        },
    );

    if (!datatypes) {
        throw new InternalError(`No types from datatype section ${ref.name}`);
    }

    for (const datatype of datatypes) {
        // Actual status codes are defined far from the status enum.  Stash it so we can populate when we encounter the
        // codes
        if (datatype.name === "status") {
            statusType = datatype;
        }

        yield datatype;
    }
}

function* translateElements(ref: GlobalReference): Generator<AttributeElement | FieldElement> {
    // This is a standin for the actual element factory method that delegates to the appropriate element factory
    // based on the "element" field
    function globalTranslator(record: FieldRecord) {
        const { element } = record;
        delete record.element;

        if (element === "attribute") {
            return AttributeElement(record);
        } else if (element?.endsWith("field")) {
            return FieldElement(record);
        } else {
            throw new InternalError(`Global element type "${element}" requires additional mapping`);
        }
    }
    globalTranslator.Tag = "global";

    // This is a bit contorted in that we aren't actually translating fields but a list of field types...  But it
    // looks just like a list of fields with the exception of the additional "element" column that we processed
    // above.  So we can handle as we would fields of an actual struct-like element
    const elements = translateFields(globalTranslator, ref);

    for (const record of elements) {
        yield record;
    }
}

const StatusCodeSchema = {
    id: Alias(Integer, "statuscode"),
    name: Alias(Identifier, "value"),
    description: Alias(Str, "summary"),
};

function installstatusCodes(ref: GlobalReference) {
    if (statusType === undefined) {
        throw new InternalError("Status codes encountered but status type was not");
    }

    const records = translateTable("status codes", ref, StatusCodeSchema).filter(r => r.name !== "Reserved");
    if (!records.length) {
        throw new InternalError("Status code translation failed");
    }

    statusType.children = translateRecordsToMatter("status codes", records, FieldElement);
}
