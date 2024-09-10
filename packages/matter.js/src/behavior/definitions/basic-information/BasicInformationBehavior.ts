/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BasicInformation } from "@project-chip/matter.js-types";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * BasicInformationBehavior is the base class for objects that support interaction with {@link
 * BasicInformation.Cluster}.
 */
export const BasicInformationBehavior = ClusterBehavior.for(BasicInformation.Cluster);

type BasicInformationBehaviorType = InstanceType<typeof BasicInformationBehavior>;
export interface BasicInformationBehavior extends BasicInformationBehaviorType {}
type StateType = InstanceType<typeof BasicInformationBehavior.State>;
export namespace BasicInformationBehavior { export interface State extends StateType {} }
