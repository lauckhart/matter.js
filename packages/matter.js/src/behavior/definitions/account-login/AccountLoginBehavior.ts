/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AccountLogin } from "../../../cluster/definitions/AccountLoginCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { AccountLoginInterface } from "./AccountLoginInterface.js";

/**
 * AccountLoginBehavior is the base class for objects that support interaction with {@link AccountLogin.Cluster}.
 */
export const AccountLoginBehavior = ClusterBehavior
    .withInterface<AccountLoginInterface>()
    .for(AccountLogin.Cluster);

export interface AccountLoginBehavior extends InstanceType<typeof AccountLoginBehavior> {}
export namespace AccountLoginBehavior { export interface State extends InstanceType<typeof AccountLoginBehavior.State> {} }
