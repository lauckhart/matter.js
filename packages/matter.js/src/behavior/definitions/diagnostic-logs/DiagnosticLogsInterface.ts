/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "@project-chip/matter.js-general";
import { DiagnosticLogs } from "@project-chip/matter.js-types";

export namespace DiagnosticLogsInterface {
    export interface Base {
        /**
         * Reception of this command starts the process of retrieving diagnostic logs from a Node.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.11.5.1
         */
        retrieveLogsRequest(request: DiagnosticLogs.RetrieveLogsRequest): MaybePromise<DiagnosticLogs.RetrieveLogsResponse>;
    }
}

export type DiagnosticLogsInterface = { components: [{ flags: {}, methods: DiagnosticLogsInterface.Base }] };
