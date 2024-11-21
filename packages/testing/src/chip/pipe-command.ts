/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export type PipeCommand =
    | PipeCommand.SimulateLongPress
    | PipeCommand.SimulateMultiPress
    | PipeCommand.SimulateLatchedPosition;

export namespace PipeCommand {
    export type SimulateLongPress = {
        Name: "SimulateLongPress";
        EndpointId: number;
        ButtonId: number;
        LongPressDelayMillis: number;
        LongPressDurationMillis: number;
    };

    export type SimulateMultiPress = {
        Name: "SimulateMultiPress";
        EndpointId: number;
        ButtonId: number;
        MultiPressPressedTimeMillis: number;
        MultiPressReleasedTimeMillis: number;
        MultiPressNumPresses: number;
        FeatureMap: number;
        MultiPressMax: number;
    };

    export type SimulateLatchedPosition = {
        Name: "SimulateLatchPosition";
        EndpointId: number;
        PositionId: number;
    };
}
