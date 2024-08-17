/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OtaSoftwareUpdateProvider } from "../../../cluster/definitions/OtaSoftwareUpdateProviderCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { OtaSoftwareUpdateProviderInterface } from "./OtaSoftwareUpdateProviderInterface.js";

/**
 * OtaSoftwareUpdateProviderBehavior is the base class for objects that support interaction with {@link
 * OtaSoftwareUpdateProvider.Cluster}.
 */
export const OtaSoftwareUpdateProviderBehavior = ClusterBehavior
    .withInterface<OtaSoftwareUpdateProviderInterface>()
    .for(OtaSoftwareUpdateProvider.Cluster);

export interface OtaSoftwareUpdateProviderBehavior extends InstanceType<typeof OtaSoftwareUpdateProviderBehavior> {}
export namespace OtaSoftwareUpdateProviderBehavior {
    export interface State extends InstanceType<typeof OtaSoftwareUpdateProviderBehavior.State> {}
}
