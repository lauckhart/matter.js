/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BasicInformation } from "../../../cluster/definitions/BasicInformationCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * BasicInformationBehavior is the base class for objects that support interaction with {@link
 * BasicInformation.Cluster}.
 */
export const BasicInformationBehavior = ClusterBehavior.for(BasicInformation.Cluster);

export interface BasicInformationBehavior extends InstanceType<typeof BasicInformationBehavior> {}
export namespace BasicInformationBehavior {
    export interface State extends InstanceType<typeof BasicInformationBehavior.State> {}
}
