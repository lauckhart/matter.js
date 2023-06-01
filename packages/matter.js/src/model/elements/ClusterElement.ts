/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterCode, AttributeElement, CommandElement, EventElement, BaseTypeElement } from "../index.js";

export type FeatureMap = { [name: string]: number };

/**
 * A cluster describes a set of related functionality.
 */
export type ClusterElement = BaseTypeElement & {
    code: ClusterCode,

    revision: number,
    utility: boolean,
    features: FeatureMap,

    attributes: AttributeElement[],
    commands: CommandElement[],
    events: EventElement[]
}
