/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { UserLabel } from "../../../cluster/definitions/UserLabelCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * UserLabelBehavior is the base class for objects that support interaction with {@link UserLabel.Cluster}.
 */
export const UserLabelBehavior = ClusterBehavior.for(UserLabel.Cluster);

export interface UserLabelBehavior extends InstanceType<typeof UserLabelBehavior> {}
export namespace UserLabelBehavior { export interface State extends InstanceType<typeof UserLabelBehavior.State> {} }
