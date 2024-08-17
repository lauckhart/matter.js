/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OtaSoftwareUpdateRequestor } from "../../../cluster/definitions/OtaSoftwareUpdateRequestorCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { OtaSoftwareUpdateRequestorInterface } from "./OtaSoftwareUpdateRequestorInterface.js";

/**
 * OtaSoftwareUpdateRequestorBehavior is the base class for objects that support interaction with {@link
 * OtaSoftwareUpdateRequestor.Cluster}.
 */
export const OtaSoftwareUpdateRequestorBehavior = ClusterBehavior
    .withInterface<OtaSoftwareUpdateRequestorInterface>()
    .for(OtaSoftwareUpdateRequestor.Cluster);

export interface OtaSoftwareUpdateRequestorBehavior extends InstanceType<typeof OtaSoftwareUpdateRequestorBehavior> {}
export namespace OtaSoftwareUpdateRequestorBehavior {
    export interface State extends InstanceType<typeof OtaSoftwareUpdateRequestorBehavior.State> {}
}
