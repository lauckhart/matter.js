/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ThreadNetworkDiagnostics } from "../../cluster/definitions/ThreadNetworkDiagnosticsCluster.js";
import { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import { ThreadNetworkDiagnosticsInterface } from "../cluster/definitions/ThreadNetworkDiagnosticsInterface.js";

/**
 * ThreadNetworkDiagnosticsBehavior is the base class for objects that support interaction with {@link
 * ThreadNetworkDiagnostics.Cluster}.
 *
 * This class does not have optional features of ThreadNetworkDiagnostics.Cluster enabled. You can enable additional
 * features using ThreadNetworkDiagnosticsBehavior.with.
 */
export const ThreadNetworkDiagnosticsBehavior = ClusterBehavior
    .withInterface<ThreadNetworkDiagnosticsInterface>()
    .for(ThreadNetworkDiagnostics.Cluster);

type ThreadNetworkDiagnosticsBehaviorType = InstanceType<typeof ThreadNetworkDiagnosticsBehavior>;
export interface ThreadNetworkDiagnosticsBehavior extends ThreadNetworkDiagnosticsBehaviorType {}
