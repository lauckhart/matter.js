/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Generates the runtime Matter model

import "./util/setup.js";
import { Logger } from "../src/log/Logger.js";
import { AnyElement, MatterElement, MatterModel } from "../src/model/index.js";
import { MergeElements, ValidateModel } from "../src/model/logic/index.js";
import { TsFile } from "./util/TsFile.js";
import { clean } from "./util/file.js";
import { generateElement } from "./mom/common/generate-element.js";
import { SpecMatter, ChipMatter, LocalMatter } from "../models/index.js";

export const MODEL_PATH = "src/model/instance/elements";
export const CLUSTER_SUFFIX = "Element";

const logger = Logger.get("generate-model");

function generateElementFile(element: AnyElement) {
    logger.debug(element.name);

    const file = new TsFile(`${MODEL_PATH}/${element.name}`);

    file.addImport(`../Matter`, `Matter`);

    generateElement(
        file,
        element,
        `Matter.children.push(`,
        ");\n"
    )

    file.save();
}

function generateIndex(elements: AnyElement[]) {
    const file = new TsFile(`${MODEL_PATH}/index`);
    elements.forEach(element => {
        if (!element.global) {
            file.add(`import "./${element.name}.js";`);
        }
    });

    file.save();
}

const matter = new MatterModel(MergeElements({ spec: SpecMatter, chip: ChipMatter, local: LocalMatter }) as MatterElement);

logger.info("validate matter model");
let validationResult: ValidateModel.Result | undefined;
Logger.nest(() => {
    validationResult = ValidateModel(matter);
});

logger.info("remove matter model elements")
clean(`${MODEL_PATH}`);

logger.info("generate matter model");
Logger.nest(() => {
    for (const child of matter.children) {
        if (child.global) {
            continue;
        }
        Logger.nest(() => generateElementFile(child as AnyElement));
    }

    logger.info("index");
    generateIndex(matter.children);
});

validationResult?.report();
