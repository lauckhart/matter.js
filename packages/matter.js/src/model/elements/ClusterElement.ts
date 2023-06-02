/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterCode, AttributeElement, CommandElement, EventElement, MatterElement, DatatypeElement } from "../index.js";

/**
 * A cluster describes a set of related functionality.
 */
export type ClusterElement = MatterElement & {
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
     * Utility; falsy = application; true = utility.
     */
    utility?: boolean,

    /**
     * Scope; falsy = endpoint; true = node.
     */
    nodeScope?: boolean,

    /**
     * Feature flags for the cluster.  Each ID represents a bit position.
     */
    features: MatterElement[],

    /**
     * Datatypes scoped to the cluster.
     */
    datatypes: DatatypeElement[],

    /**
     * Attributes of the cluster.
     */
    attributes: AttributeElement[],

    /**
     * Commands the cluster supports.
     */
    commands: CommandElement[],

    /**
     * Events the cluster supports.
     */
    events: EventElement[]
}
