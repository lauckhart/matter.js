/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOffSwitchConfiguration } from "../../../cluster/definitions/OnOffSwitchConfigurationCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * OnOffSwitchConfigurationBehavior is the base class for objects that support interaction with {@link
 * OnOffSwitchConfiguration.Cluster}.
 */
export const OnOffSwitchConfigurationBehavior = ClusterBehavior.for(OnOffSwitchConfiguration.Cluster);

type OnOffSwitchConfigurationBehaviorType = InstanceType<typeof OnOffSwitchConfigurationBehavior>;
export interface OnOffSwitchConfigurationBehavior extends OnOffSwitchConfigurationBehaviorType {}
