/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterCode, Conformance } from "../index.js";
import { AttributeElement, CodedElement, CommandElement, EventElement } from "./index.js";

export type FeatureMap = { [name: string]: number };

/**
 * A cluster describes a set of related functionality.
 */
export type ClusterElement = CodedElement & {
    code: ClusterCode,

    revision: number,
    utility: boolean,
    features: FeatureMap,

    conformance: Conformance,

    attributes: AttributeElement[],
    commands: CommandElement[],
    events: EventElement[]
}
