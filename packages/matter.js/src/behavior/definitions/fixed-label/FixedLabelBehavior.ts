/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FixedLabel } from "../../../cluster/definitions/FixedLabelCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * FixedLabelBehavior is the base class for objects that support interaction with {@link FixedLabel.Cluster}.
 */
export const FixedLabelBehavior = ClusterBehavior.for(FixedLabel.Cluster);

export interface FixedLabelBehavior extends InstanceType<typeof FixedLabelBehavior> {}
export namespace FixedLabelBehavior { export interface State extends InstanceType<typeof FixedLabelBehavior.State> {} }
