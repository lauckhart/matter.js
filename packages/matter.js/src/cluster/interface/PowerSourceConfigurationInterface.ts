/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerSourceConfigurationCluster, ClusterInterface } from "../index.js";

namespace PowerSourceConfiguration {
    export type State = {
        sources: number[];
    }

    export interface Client {

        onSourcesChange(value: number[], previous: number[]): void;
    }

    export interface Server {

        onSourcesChange(value: number[], previous: number[]): void;
    }
}

export const PowerSourceConfiguration: ClusterInterface<PowerSourceConfiguration.State, PowerSourceConfiguration.Client, PowerSourceConfiguration.Server> = {
    definition: PowerSourceConfigurationCluster
}
