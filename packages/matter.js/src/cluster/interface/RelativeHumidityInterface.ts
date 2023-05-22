/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RelativeHumidityCluster, ClusterInterface } from "../index.js";

namespace RelativeHumidity {
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

export const RelativeHumidity: ClusterInterface<RelativeHumidity.State, RelativeHumidity.Client, RelativeHumidity.Server> = {
    definition: RelativeHumidityCluster
}
