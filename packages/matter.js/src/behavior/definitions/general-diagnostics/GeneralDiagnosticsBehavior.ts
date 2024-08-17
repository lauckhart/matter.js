/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GeneralDiagnostics } from "../../../cluster/definitions/GeneralDiagnosticsCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { GeneralDiagnosticsInterface } from "./GeneralDiagnosticsInterface.js";

/**
 * GeneralDiagnosticsBehavior is the base class for objects that support interaction with {@link
 * GeneralDiagnostics.Cluster}.
 *
 * This class does not have optional features of GeneralDiagnostics.Cluster enabled. You can enable additional features
 * using GeneralDiagnosticsBehavior.with.
 */
export const GeneralDiagnosticsBehavior = ClusterBehavior
    .withInterface<GeneralDiagnosticsInterface>()
    .for(GeneralDiagnostics.Cluster);

export interface GeneralDiagnosticsBehavior extends InstanceType<typeof GeneralDiagnosticsBehavior> {}
export namespace GeneralDiagnosticsBehavior {
    export interface State extends InstanceType<typeof GeneralDiagnosticsBehavior.State> {}
}
