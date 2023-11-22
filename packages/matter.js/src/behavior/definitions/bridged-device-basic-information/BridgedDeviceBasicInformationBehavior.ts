/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BridgedDeviceBasicInformation } from "../../../cluster/definitions/BridgedDeviceBasicInformationCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * BridgedDeviceBasicInformationBehavior is the base class for objects that support interaction with {@link
 * BridgedDeviceBasicInformation.Cluster}.
 */
export const BridgedDeviceBasicInformationBehavior = ClusterBehavior.for(BridgedDeviceBasicInformation.Cluster);

type BridgedDeviceBasicInformationBehaviorType = InstanceType<typeof BridgedDeviceBasicInformationBehavior>;
export interface BridgedDeviceBasicInformationBehavior extends BridgedDeviceBasicInformationBehaviorType {}
