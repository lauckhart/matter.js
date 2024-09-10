/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IcdManagement } from "@project-chip/matter.js-types";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { IcdManagementInterface } from "./IcdManagementInterface.js";

/**
 * IcdManagementBehavior is the base class for objects that support interaction with {@link IcdManagement.Cluster}.
 *
 * This class does not have optional features of IcdManagement.Cluster enabled. You can enable additional features
 * using IcdManagementBehavior.with.
 */
export const IcdManagementBehavior = ClusterBehavior
    .withInterface<IcdManagementInterface>()
    .for(IcdManagement.Cluster);

type IcdManagementBehaviorType = InstanceType<typeof IcdManagementBehavior>;
export interface IcdManagementBehavior extends IcdManagementBehaviorType {}
type StateType = InstanceType<typeof IcdManagementBehavior.State>;
export namespace IcdManagementBehavior { export interface State extends StateType {} }
