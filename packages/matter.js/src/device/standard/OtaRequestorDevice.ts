/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";

export class OtaRequestor extends AutoDevice.implement(DeviceTypes.OTA_REQUESTOR) {
    readonly options = OtaRequestorOptions;

}
