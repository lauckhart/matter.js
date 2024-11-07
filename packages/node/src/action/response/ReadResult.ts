/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeReportData, EventData, StatusCode } from "#types";
import { StreamingResult } from "./StreamingResult.js";

export interface ReadResult<Chunk = ReadResult.Chunk> extends StreamingResult<ReadResult.Chunk> {}

export namespace ReadResult {
    export interface Chunk extends StreamingResult.Chunk {
        reports: Report[];
    }

    export type Status =
        | {
              code: StatusCode;
          }
        | {
              clusterCode: number;
          };

    export type Report = AttributeValue | EventValue | AttributeStatus | EventStatus;

    export interface AttributeValue extends AttributeReportData {
        kind: "attribute";
        status?: undefined;
    }

    export interface EventValue extends EventData {
        kind: "event";
        status?: undefined;
    }

    export interface AttributeStatus {
        kind: "attribute";
        status: Status;
    }

    export interface EventStatus {
        kind: "event";
        status: Status;
    }
}
