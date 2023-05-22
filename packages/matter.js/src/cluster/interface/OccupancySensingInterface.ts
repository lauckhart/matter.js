/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OccupancySensingCluster, ClusterInterface } from "../index.js";

namespace OccupancySensing {
    export type State = {
        occupancy: number;
        occupancySensorType: number;
        occupancySensorTypeBitmap: number;
        pirOccupiedToUnoccupiedDelay?: number;
        pirUnoccupiedToOccupiedDelay?: number;
        pirUnoccupiedToOccupiedThreshold?: number;
        ultrasonicOccupiedToUnoccupiedDelay?: number;
        ultrasonicUnoccupiedToOccupiedDelay?: number;
        ultrasonicUnoccupiedToOccupiedThreshold?: number;
        physicalContactOccupiedToUnoccupiedDelay?: number | undefined;
        physicalContactUnoccupiedToOccupiedDelay?: number | undefined;
        physicalContactUnoccupiedToOccupiedThreshold?: number;
    }

    export interface Client {

        onOccupancyChange(value: number, previous: number): void;
        onOccupancySensorTypeChange(value: number, previous: number): void;
        onOccupancySensorTypeBitmapChange(value: number, previous: number): void;
        onPirOccupiedToUnoccupiedDelayChange(value: number, previous: number): void;
        onPirUnoccupiedToOccupiedDelayChange(value: number, previous: number): void;
        onPirUnoccupiedToOccupiedThresholdChange(value: number, previous: number): void;
        onUltrasonicOccupiedToUnoccupiedDelayChange(value: number, previous: number): void;
        onUltrasonicUnoccupiedToOccupiedDelayChange(value: number, previous: number): void;
        onUltrasonicUnoccupiedToOccupiedThresholdChange(value: number, previous: number): void;
        onPhysicalContactOccupiedToUnoccupiedDelayChange(value: number | undefined, previous: number | undefined): void;
        onPhysicalContactUnoccupiedToOccupiedDelayChange(value: number | undefined, previous: number | undefined): void;
        onPhysicalContactUnoccupiedToOccupiedThresholdChange(value: number, previous: number): void;
    }

    export interface Server {

        onOccupancyChange(value: number, previous: number): void;
        onOccupancySensorTypeChange(value: number, previous: number): void;
        onOccupancySensorTypeBitmapChange(value: number, previous: number): void;
        onPirOccupiedToUnoccupiedDelayChange(value: number, previous: number): void;
        onPirUnoccupiedToOccupiedDelayChange(value: number, previous: number): void;
        onPirUnoccupiedToOccupiedThresholdChange(value: number, previous: number): void;
        onUltrasonicOccupiedToUnoccupiedDelayChange(value: number, previous: number): void;
        onUltrasonicUnoccupiedToOccupiedDelayChange(value: number, previous: number): void;
        onUltrasonicUnoccupiedToOccupiedThresholdChange(value: number, previous: number): void;
        onPhysicalContactOccupiedToUnoccupiedDelayChange(value: number | undefined, previous: number | undefined): void;
        onPhysicalContactUnoccupiedToOccupiedDelayChange(value: number | undefined, previous: number | undefined): void;
        onPhysicalContactUnoccupiedToOccupiedThresholdChange(value: number, previous: number): void;
    }
}

export const OccupancySensing: ClusterInterface<OccupancySensing.State, OccupancySensing.Client, OccupancySensing.Server> = {
    definition: OccupancySensingCluster
}
