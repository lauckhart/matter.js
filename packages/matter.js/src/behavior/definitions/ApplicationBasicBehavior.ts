/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ApplicationBasic } from "../../cluster/definitions/ApplicationBasicCluster.js";
import { ClusterBehavior } from "../cluster/ClusterBehavior.js";

/**
 * ApplicationBasicBehavior is the base class for objects that support interaction with {@link
 * ApplicationBasic.Cluster}.
 */
export const ApplicationBasicBehavior = ClusterBehavior.for(ApplicationBasic.Cluster);

type ApplicationBasicBehaviorType = InstanceType<typeof ApplicationBasicBehavior>;
export interface ApplicationBasicBehavior extends ApplicationBasicBehaviorType {}
