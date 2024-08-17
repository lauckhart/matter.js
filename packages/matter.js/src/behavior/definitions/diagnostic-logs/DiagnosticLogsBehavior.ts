/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DiagnosticLogs } from "../../../cluster/definitions/DiagnosticLogsCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { DiagnosticLogsInterface } from "./DiagnosticLogsInterface.js";

/**
 * DiagnosticLogsBehavior is the base class for objects that support interaction with {@link DiagnosticLogs.Cluster}.
 */
export const DiagnosticLogsBehavior = ClusterBehavior
    .withInterface<DiagnosticLogsInterface>()
    .for(DiagnosticLogs.Cluster);

export interface DiagnosticLogsBehavior extends InstanceType<typeof DiagnosticLogsBehavior> {}
export namespace DiagnosticLogsBehavior {
    export interface State extends InstanceType<typeof DiagnosticLogsBehavior.State> {}
}
