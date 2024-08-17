/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WiFiNetworkDiagnostics } from "../../../cluster/definitions/WiFiNetworkDiagnosticsCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { WiFiNetworkDiagnosticsInterface } from "./WiFiNetworkDiagnosticsInterface.js";

/**
 * WiFiNetworkDiagnosticsBehavior is the base class for objects that support interaction with {@link
 * WiFiNetworkDiagnostics.Cluster}.
 *
 * This class does not have optional features of WiFiNetworkDiagnostics.Cluster enabled. You can enable additional
 * features using WiFiNetworkDiagnosticsBehavior.with.
 */
export const WiFiNetworkDiagnosticsBehavior = ClusterBehavior
    .withInterface<WiFiNetworkDiagnosticsInterface>()
    .for(WiFiNetworkDiagnostics.Cluster);

export interface WiFiNetworkDiagnosticsBehavior extends InstanceType<typeof WiFiNetworkDiagnosticsBehavior> {}
export namespace WiFiNetworkDiagnosticsBehavior {
    export interface State extends InstanceType<typeof WiFiNetworkDiagnosticsBehavior.State> {}
}
