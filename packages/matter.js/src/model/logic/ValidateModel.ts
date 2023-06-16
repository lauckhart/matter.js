/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../log/index.js";
import { DefinitionError } from "../definitions/index.js";
import { Model } from "../models/index.js";
import { ModelValidator } from "./definition-validation/ModelValidator.js";

const logger = Logger.get("ModelValidator");

/**
 * Ensures that a model's definition is correct.  Places errors into the error
 * array of invalid models.
 * 
 * Casts default values to the correct type as a side effect.
 * 
 * Note that we run validation against model classes rather than element
 * datatypes.  The classes implement type resolution, error handling and other
 * logic we rely on for validation.
 */
export function ValidateModel(model: Model) {
    function validate(model: Model) {
        logger.debug(
            model.name,
            Logger.dict({
                tag: model.tag,
                children: model.children.length || undefined,
                id: model.id ? `0x${model.id?.toString(16)}` : undefined,
                xref: model.xref
            })
        );

        const Validator = ModelValidator.validators[model.tag];
        if (!Validator) {
            model.error("UNKOWN_MODEL_TYPE", `No validator for ${model.tag}`);
            return;
        }

        new Validator(model).validate();

        Logger.nest(() => {
            model.children.forEach(validate);
        });
    }

    logger.info("Validating matter model");
    validate(model);
}

export namespace ValidateModel {
    export function report(model: Model) {
        const counts: { [name: string]: number } = {};
        const errors = Array<DefinitionError>();
        model.visit((m) => {
            if (!m.valid) {
                for (const error of m.errors!) {
                    if (counts[error.code]) {
                        counts[error.code]++;
                    } else {
                        counts[error.code] = 1;
                    }
                    errors.push(error);
                }
            }
        });

        if (errors.length) {
            logger.error("*** Validation error summary ***");
            errors.forEach(error => logger.error(
                error.message,
                Logger.dict({ code: error.code, xref: error.xref, src: error.source })
            ));

            logger.error("Error counts by code:");
            Logger.nest(() => {
                const codes = Object.keys(counts)
                    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
                for (const code of codes) {
                    logger.error(`${code}: ${counts[code]}`);
                }
            });
    
            logger.error(`*** Total ${errors.length} validation error${errors.length != 1 ? "s" : ""} ***`);
        } else {
            logger.info(`*** Validation successful ***`)
        }
    }
}
