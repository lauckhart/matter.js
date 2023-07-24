/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Conformance } from "../aspects/Conformance.js";
import { Quality } from "../aspects/Quality.js";
import { ElementTag } from "../definitions/index.js";
import { BaseElement } from "./BaseElement.js";
import { ClusterElement } from "./ClusterElement.js";

/**
 * Describes a cluster as required by a DeviceType.
 */
export type DeviceClusterElement = Omit<ClusterElement, "tag"> & {
    tag: `${DeviceClusterElement.Tag}`,

    /**
     * True for client clusters, otherwise a server cluster.
     */
    client?: boolean,

    quality?: Quality.Definition,
    conformance?: Conformance.Definition
}

export function DeviceClusterElement(definition: DeviceClusterElement.Properties) {
    return {
        ...ClusterElement({ ...definition, tag: "cluster" }),
        tag: DeviceClusterElement.Tag
    } as DeviceClusterElement;
}

export namespace DeviceClusterElement {
    export type Tag = ElementTag.DeviceCluster;
    export const Tag = ElementTag.DeviceCluster;
    export type Properties = BaseElement.Properties<DeviceClusterElement>;
}
