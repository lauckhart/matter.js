/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TemperatureMeasurementCluster, ClusterInterface } from "../index.js";

namespace Temperature {
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

export const Temperature: ClusterInterface<Temperature.State, Temperature.Client, Temperature.Server> = {
    definition: TemperatureMeasurementCluster
}
