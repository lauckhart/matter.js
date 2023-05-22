/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IlluminanceMeasurementCluster, ClusterInterface } from "../index.js";

namespace IlluminanceMeasurement {
    export type State = {
        measuredValue: number | undefined;
        minMeasuredValue: number | undefined;
        maxMeasuredValue: number | undefined;
        tolerance?: number;
        lightSensorType?: number | undefined;
    }

    export interface Client {

        onMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onMinMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onMaxMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onToleranceChange(value: number, previous: number): void;
        onLightSensorTypeChange(value: number | undefined, previous: number | undefined): void;
    }

    export interface Server {

        onMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onMinMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onMaxMeasuredValueChange(value: number | undefined, previous: number | undefined): void;
        onToleranceChange(value: number, previous: number): void;
        onLightSensorTypeChange(value: number | undefined, previous: number | undefined): void;
    }
}

export const IlluminanceMeasurement: ClusterInterface<IlluminanceMeasurement.State, IlluminanceMeasurement.Client, IlluminanceMeasurement.Server> = {
    definition: IlluminanceMeasurementCluster
}
