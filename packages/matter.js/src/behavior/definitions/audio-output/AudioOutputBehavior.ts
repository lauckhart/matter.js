/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AudioOutput } from "../../../cluster/definitions/AudioOutputCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { AudioOutputInterface } from "./AudioOutputInterface.js";

/**
 * AudioOutputBehavior is the base class for objects that support interaction with {@link AudioOutput.Cluster}.
 *
 * This class does not have optional features of AudioOutput.Cluster enabled. You can enable additional features using
 * AudioOutputBehavior.with.
 */
export const AudioOutputBehavior = ClusterBehavior
    .withInterface<AudioOutputInterface>()
    .for(AudioOutput.Cluster);

export interface AudioOutputBehavior extends InstanceType<typeof AudioOutputBehavior> {}
export namespace AudioOutputBehavior { export interface State extends InstanceType<typeof AudioOutputBehavior.State> {} }
