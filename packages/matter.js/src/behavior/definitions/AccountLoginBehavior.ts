/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AccountLogin } from "../../cluster/definitions/AccountLoginCluster.js";
import { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import { AccountLoginInterface } from "../cluster/definitions/AccountLoginInterface.js";

/**
 * AccountLoginBehavior is the base class for objects that support interaction with {@link AccountLogin.Cluster}.
 */
export const AccountLoginBehavior = ClusterBehavior
    .withInterface<AccountLoginInterface>()
    .for(AccountLogin.Cluster);

type AccountLoginBehaviorType = InstanceType<typeof AccountLoginBehavior>;
export interface AccountLoginBehavior extends AccountLoginBehaviorType {}
