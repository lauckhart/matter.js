/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BasicInformation } from "../../cluster/definitions/BasicInformationCluster.js";
import { ClusterBehavior } from "../cluster/ClusterBehavior.js";

/**
 * BasicInformationBehavior is the base class for objects that support interaction with {@link
 * BasicInformation.Cluster}.
 */
export const BasicInformationBehavior = ClusterBehavior.for(BasicInformation.Cluster);

type BasicInformationBehaviorType = InstanceType<typeof BasicInformationBehavior>;
export interface BasicInformationBehavior extends BasicInformationBehaviorType {}
