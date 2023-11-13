/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ColorControl } from "../../cluster/definitions/ColorControlCluster.js";
import { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import { ColorControlInterface } from "../cluster/definitions/ColorControlInterface.js";

/**
 * ColorControlBehavior is the base class for objects that support interaction with {@link ColorControl.Cluster}.
 *
 * This class does not have optional features of ColorControl.Cluster enabled. You can enable additional features using
 * ColorControlBehavior.with.
 */
export const ColorControlBehavior = ClusterBehavior
    .withInterface<ColorControlInterface>()
    .for(ColorControl.Cluster);

type ColorControlBehaviorType = InstanceType<typeof ColorControlBehavior>;
export interface ColorControlBehavior extends ColorControlBehaviorType {}
