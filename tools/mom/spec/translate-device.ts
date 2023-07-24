/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceTypeElement } from "#models/links/matter.js/model/index.js";
import { DeviceReference } from "./spec-types.js";

<<<<<<< HEAD
// eslint-disable-next-line require-yield
export function* translateDevice(deviceRef: HtmlReference) {
    // TODO
    deviceRef;
=======
export function* translateDevice(deviceRef: DeviceReference) {
    const classification = deviceRef.classification
    return DeviceTypeElement({
        name: deviceRef.name,
        category: deviceRef.category
    })
>>>>>>> 7f03f75 (More device ingestion)
}
