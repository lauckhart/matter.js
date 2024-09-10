/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OtaSoftwareUpdateRequestor } from "@project-chip/matter.js-types";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { OtaSoftwareUpdateRequestorInterface } from "./OtaSoftwareUpdateRequestorInterface.js";

/**
 * OtaSoftwareUpdateRequestorBehavior is the base class for objects that support interaction with {@link
 * OtaSoftwareUpdateRequestor.Cluster}.
 */
export const OtaSoftwareUpdateRequestorBehavior = ClusterBehavior
    .withInterface<OtaSoftwareUpdateRequestorInterface>()
    .for(OtaSoftwareUpdateRequestor.Cluster);

type OtaSoftwareUpdateRequestorBehaviorType = InstanceType<typeof OtaSoftwareUpdateRequestorBehavior>;
export interface OtaSoftwareUpdateRequestorBehavior extends OtaSoftwareUpdateRequestorBehaviorType {}
type StateType = InstanceType<typeof OtaSoftwareUpdateRequestorBehavior.State>;
export namespace OtaSoftwareUpdateRequestorBehavior { export interface State extends StateType {} }
