/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterCode, AttributeElement, CommandElement, EventElement, BaseElement, DatatypeElement, EnumElement } from "../../index.js";

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
     * Latest revision in Matter specification.
     */
    revision: number,

    /**
     * Encodes both classification and scope from the Matter specification.
     */
    classification: ClusterElement.Classification,

    /**
     * Feature flags for the cluster.  Each ID represents a bit position.
     */
    features?: EnumElement,

    /**
     * Datatypes scoped to the cluster.
     */
    datatypes?: DatatypeElement[],

    /**
     * Attributes of the cluster.
     */
    attributes?: AttributeElement[],

    /**
     * Commands the cluster supports.
     */
    commands?: CommandElement[],

    /**
     * Events the cluster supports.
     */
    events?: EventElement[]
}

export function ClusterElement(definition: BaseElement.Typeless<ClusterElement>): ClusterElement {
    return { ...definition, type: ClusterElement.Type }
}

export namespace ClusterElement {
    export type Type = BaseElement.Type.Cluster;
    export const Type = BaseElement.Type.Cluster;

    export enum Classification {
        EndpointUtility = "endpoint",
        NodeUtility = "node",
        Application = "application"
    }
}
