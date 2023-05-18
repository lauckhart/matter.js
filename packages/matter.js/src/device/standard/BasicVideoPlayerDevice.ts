/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { OnOffLighting } from "../../cluster/interface/index.js";

export class BasicVideoPlayer extends AutoDevice.with(DeviceTypes.BASIC_VIDEO_PLAYER, OnOffLighting) {
}
