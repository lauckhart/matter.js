/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { EthernetNetworkDiagnostics } from "../../../cluster/definitions/EthernetNetworkDiagnosticsCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { EthernetNetworkDiagnosticsInterface } from "./EthernetNetworkDiagnosticsInterface.js";

/**
 * EthernetNetworkDiagnosticsBehavior is the base class for objects that support interaction with {@link
 * EthernetNetworkDiagnostics.Cluster}.
 *
 * This class does not have optional features of EthernetNetworkDiagnostics.Cluster enabled. You can enable additional
 * features using EthernetNetworkDiagnosticsBehavior.with.
 */
export const EthernetNetworkDiagnosticsBehavior = ClusterBehavior
    .withInterface<EthernetNetworkDiagnosticsInterface>()
    .for(EthernetNetworkDiagnostics.Cluster);

export interface EthernetNetworkDiagnosticsBehavior extends InstanceType<typeof EthernetNetworkDiagnosticsBehavior> {}
export namespace EthernetNetworkDiagnosticsBehavior {
    export interface State extends InstanceType<typeof EthernetNetworkDiagnosticsBehavior.State> {}
}
