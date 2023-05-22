/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { ClusterInterface } from "../../cluster/ClusterInterface.js";
import { AutoDevice } from "../AutoDevice.js";
import { Identify, Groups, Scenes, Power, LightPower, Level } from "../../cluster/interface/index.js";

export class OnOffLight extends AutoDevice.implement(DeviceTypes.ON_OFF_LIGHT, Identify, Groups, Scenes, Power) {
    static readonly options = {
        LightPower,
        Level,
    }

    static with<Options extends ClusterInterface<any, any, any>[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
