/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { ClusterInterface } from "../../cluster/ClusterInterface.js";
import { AutoDevice } from "../AutoDevice.js";
import { Identify, Groups, Power, LightPower, Scenes, Level } from "../../cluster/interface/index.js";

export class HeatingCoolingUnit extends AutoDevice.implement(DeviceTypes.HEATING_COOLING_UNIT, Identify, Groups, Power) {
    static readonly options = {
        LightPower,
        Scenes,
        Level,
    }

    static with<Options extends ClusterInterface<any, any, any>[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
