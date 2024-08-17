/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MicrowaveOvenControl } from "../../../cluster/definitions/MicrowaveOvenControlCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { MicrowaveOvenControlInterface } from "./MicrowaveOvenControlInterface.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * MicrowaveOvenControlBehavior is the base class for objects that support interaction with {@link
 * MicrowaveOvenControl.Cluster}.
 *
 * MicrowaveOvenControl.Cluster requires you to enable one or more optional features. You can do so using {@link
 * MicrowaveOvenControlBehavior.with}.
 */
export const MicrowaveOvenControlBehavior = ClusterBehavior
    .withInterface<MicrowaveOvenControlInterface>()
    .for(ClusterType(MicrowaveOvenControl.Base));

export interface MicrowaveOvenControlBehavior extends InstanceType<typeof MicrowaveOvenControlBehavior> {}
export namespace MicrowaveOvenControlBehavior {
    export interface State extends InstanceType<typeof MicrowaveOvenControlBehavior.State> {}
}
