/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DescriptorServer } from "../../../behavior/server/definitions/DescriptorServer.js";
import { TemperatureMeasurementServer } from "../../../behavior/server/definitions/TemperatureMeasurementServer.js";
import { IdentifyServer } from "../../../behavior/server/definitions/IdentifyServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const TemperatureSensorRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
        mandatory: {
            Descriptor: DescriptorServer.set({ deviceTypeList: [{ deviceType: 770, revision: 2 }] }),
            TemperatureMeasurement: TemperatureMeasurementServer,
            Identify: IdentifyServer
        }
    }
};

export const TemperatureSensorDeviceDefinition = MutableEndpoint({
    name: "TemperatureSensor",
    deviceType: 0x302,
    requirements: TemperatureSensorRequirements,
    behaviors: SupportedBehaviors(
        TemperatureSensorRequirements.server.mandatory.Descriptor,
        TemperatureSensorRequirements.server.mandatory.TemperatureMeasurement,
        TemperatureSensorRequirements.server.mandatory.Identify
    )
});

/**
 * A Temperature Sensor device reports measurements of temperature.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 7.4
 */
export interface TemperatureSensorDevice extends Identity<typeof TemperatureSensorDeviceDefinition> {}

export const TemperatureSensorDevice: TemperatureSensorDevice = TemperatureSensorDeviceDefinition;
