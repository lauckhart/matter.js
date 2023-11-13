/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { AdministratorCommissioningBehavior } from "../../definitions/AdministratorCommissioningBehavior.js";
import { AdministratorCommissioning } from "../../../cluster/definitions/AdministratorCommissioningCluster.js";

const Base = AdministratorCommissioningBehavior.for(AdministratorCommissioning.Complete);

/**
 * This is the default server implementation of AdministratorCommissioningBehavior.
 *
 * This implementation includes all features of AdministratorCommissioning.Cluster. You should use
 * AdministratorCommissioningServer.with to specialize the class for the features your implementation supports.
 */
export class AdministratorCommissioningServer extends Base {
}
