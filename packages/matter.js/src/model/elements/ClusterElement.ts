/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterCode, AttributeElement, CommandElement, EventElement, BaseElement, DatatypeElement } from "../index.js";

/**
 * A cluster describes a set of related functionality.
 */
export type ClusterElement = BaseElement & {
    type: ClusterElement.Type,

    /**
     * Semantic ID for the cluster.  Either defined in the Matter specification
     * (IDs less than 0x10000) or manufacturer defined,
     */
    id: ClusterCode,

    /**
     * Encodes both classification and scope from the Matter specification.
     */
    classification: ClusterElement.Classification,

    children: ClusterElement.Children[]
}

export function ClusterElement(definition: ClusterElement.Definition) {
    return BaseElement({ type: BaseElement.Type.Cluster, ...definition }) as ClusterElement;
}

export namespace ClusterElement {
    export type Type = BaseElement.Type.Cluster;
    export const Type = BaseElement.Type.Cluster;
    export type Children = DatatypeElement | AttributeElement | CommandElement | EventElement;
    export type Definition = BaseElement.Definition & {
        id: ClusterCode,
        classification: ClusterElement.Classification,
        children?: Children[]
    }

    export enum Classification {
        EndpointUtility = "endpoint",
        NodeUtility = "node",
        Application = "application"
    }
}
