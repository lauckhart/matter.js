/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FlowMeasurementCluster, ClusterInterface } from "../index.js";

namespace Flow {
    export type State = {
        measuredValue: number | undefined;
        minMeasuredValue: number | undefined;
        maxMeasuredValue: number | undefined;
        tolerance?: number;
    }

    export interface Client {

        onMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onMinMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onMaxMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onToleranceChange(value: number, previous: number): void;
    }

    export interface Server {

        onMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onMinMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onMaxMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onToleranceChange(value: number, previous: number): void;
    }
}

export const Flow: ClusterInterface<Flow.State, Flow.Client, Flow.Server> = {
    definition: FlowMeasurementCluster
}
