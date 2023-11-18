/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel, ClusterVariance, CommandModel, MatterModel } from "@project-chip/matter.js/model";
import { BehaviorFile } from "./endpoints/BehaviorFile.js";
import { EndpointFile } from "./endpoints/EndpointFile.js";
import { TsFile } from "./util/TsFile.js";
import "./util/setup.js";
import { InterfaceFile } from "./endpoints/InterfaceFile.js";
import { BehaviorServerFile } from "./endpoints/BehaviorServerFile.js";

export async function main() {
    const mom = new MatterModel();

    const clusters = mom.clusters.filter(cluster => cluster.id !== undefined);

    const behaviorExports = new TsFile("#behaviors/export");

    for (const cluster of clusters) {
        const variance = ClusterVariance(cluster);

        if (cluster.all(CommandModel).length) {
            generateClusterFile(InterfaceFile, cluster, behaviorExports, variance);
        }
        generateClusterFile(BehaviorFile, cluster, behaviorExports, variance);
        generateClusterFile(BehaviorServerFile, cluster, behaviorExports, variance);
    }

    behaviorExports.save();

    EndpointFile.clean();
    const endpointExports = new TsFile("#endpoints/export");
    for (const device of mom.deviceTypes) {
        const file = new EndpointFile(device);
        file.save();

        endpointExports.atom(`export * from "./${file.definitionPath}.js"`);
    }
    endpointExports.save();
}

function generateClusterFile(
    klass: new (cluster: ClusterModel, variance: ClusterVariance) => (TsFile & { baseName: string }),
    cluster: ClusterModel,
    exports: TsFile,
    variance: ClusterVariance,
) {
    const file = new klass(cluster, variance);
    file.save();
    exports.atom(`export * from "./${file.baseName}.js"`);
}
