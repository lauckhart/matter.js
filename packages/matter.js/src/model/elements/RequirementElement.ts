/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag } from "../definitions/index.js";
import { Conformance, Quality } from "../index.js";
import { BaseElement } from "./BaseElement.js";
import { ClusterElement } from "./ClusterElement.js";

/**
 * Defines a cluster requirement for a DeviceType.
 */
export type RequirementElement = BaseElement & {
    id: number,
    tag: `${RequirementElement.Tag}`,
    children: ClusterElement.Child[],

    clientServer: `${RequirementElement.ClientServer}`,
    quality: Quality.Definition,
    conformance: Conformance.Definition
}

export function RequirementElement(definition: RequirementElement.Properties) {
    return BaseElement(RequirementElement.Tag, definition);
}

export namespace RequirementElement {
    export type Tag = ElementTag.Requirement;
    export const Tag = ElementTag.Requirement;
    export type Properties = BaseElement.Properties<RequirementElement>;

    export enum ClientServer {
        Client = 'client',
        Server = 'server'
    }
}
