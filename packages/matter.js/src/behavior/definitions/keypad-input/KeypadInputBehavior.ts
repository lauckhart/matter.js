/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { KeypadInput } from "../../../cluster/definitions/KeypadInputCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { KeypadInputInterface } from "./KeypadInputInterface.js";

/**
 * KeypadInputBehavior is the base class for objects that support interaction with {@link KeypadInput.Cluster}.
 */
export const KeypadInputBehavior = ClusterBehavior
    .withInterface<KeypadInputInterface>()
    .for(KeypadInput.Cluster);

export interface KeypadInputBehavior extends InstanceType<typeof KeypadInputBehavior> {}
export namespace KeypadInputBehavior { export interface State extends InstanceType<typeof KeypadInputBehavior.State> {} }
