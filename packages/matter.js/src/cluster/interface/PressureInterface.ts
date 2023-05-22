/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PressureMeasurementCluster, ClusterInterface } from "../index.js";

export namespace Pressure {
    export type State = {
        measuredValue: number | undefined;
        minMeasuredValue: number | undefined;
        maxMeasuredValue: number | undefined;
        tolerance?: number;
        scaledValue?: number | undefined;
        minScaledValue?: number | undefined;
        maxScaledValue?: number | undefined;
        scaledTolerance?: number;
        scale?: number;
    }

    export interface Client {

        onMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onMinMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onMaxMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onToleranceChange(value: number, previous: number): void;
        onScaledValueChange(value: number | undefined, previous: number | undefined): void;
        onMinScaledValueChange(value: number | undefined, previous: number | undefined): void;
        onMaxScaledValueChange(value: number | undefined, previous: number | undefined): void;
        onScaledToleranceChange(value: number, previous: number): void;
        onScaleChange(value: number, previous: number): void;
    }

    export interface Server {

        onMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onMinMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onMaxMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onToleranceChange(value: number, previous: number): void;
        onScaledValueChange(value: number | undefined, previous: number | undefined): void;
        onMinScaledValueChange(value: number | undefined, previous: number | undefined): void;
        onMaxScaledValueChange(value: number | undefined, previous: number | undefined): void;
        onScaledToleranceChange(value: number, previous: number): void;
        onScaleChange(value: number, previous: number): void;
    }
}

export const Pressure: ClusterInterface<Pressure.State, Pressure.Client, Pressure.Server> = {
    definition: PressureMeasurementCluster
}
