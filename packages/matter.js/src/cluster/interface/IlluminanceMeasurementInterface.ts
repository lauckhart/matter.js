/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IlluminanceMeasurementCluster, ClusterInterface } from "../index.js";


export module IlluminanceMeasurement {
    export type State = {
        readonly measuredValue: number | undefined;
        readonly minMeasuredValue: number | undefined;
        readonly maxMeasuredValue: number | undefined;
        readonly tolerance?: number;
        readonly lightSensorType?: number | undefined;
    }

    export interface Common {
    }
}

export const IlluminanceMeasurement: ClusterInterface<IlluminanceMeasurement.State, IlluminanceMeasurement.Common, IlluminanceMeasurement.Common> = {
    definition: IlluminanceMeasurementCluster
}
