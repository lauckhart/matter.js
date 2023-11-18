/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Block, TsFile } from "../util/TsFile.js";
import { ClusterModel, ClusterVariance } from "@project-chip/matter.js/model";
import { Logger } from "@project-chip/matter.js/log";
import { InterfaceGenerator } from "./InterfaceGenerator.js";
import { decamelize } from "@project-chip/matter.js/util";

const logger = Logger.get("InterfaceFile");

export class InterfaceFile extends TsFile {
    readonly baseName: string;
    readonly definitionName: string;
    readonly cluster: ClusterModel;
    readonly ns: Block;

    constructor(cluster: ClusterModel, private variance: ClusterVariance) {
        const baseName = `${decamelize(cluster.name)}/Interface`;
        super(`#behaviors/${baseName}`);
        this.baseName = baseName;
        this.definitionName = `${cluster.name}Interface`;
        this.cluster = cluster;
        this.ns = this.statements(`export namespace ${this.definitionName} {`, "}");

        this.generate();
    }

    override addImport(filename: string, symbol: string) {
        if (filename.startsWith("./")) {
            return super.addImport(filename, symbol);
        }
        return super.addImport(`../../../${filename}`, symbol);
    }

    private generate() {
        logger.info(`${this.cluster.name} → ${this.name}.ts`);

        const gen = new InterfaceGenerator(this);

        gen.generateComponent("Base", this.variance.base);
        for (const component of this.variance.components) {
            gen.generateComponent(component.name, component);
        }

        gen.generateInterface();
    }
}
