/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import {
    ValveConfigurationAndControlServer as BaseValveConfigurationAndControlServer
} from "../../../behavior/definitions/valve-configuration-and-control/ValveConfigurationAndControlServer.js";
import {
    FlowMeasurementServer as BaseFlowMeasurementServer
} from "../../../behavior/definitions/flow-measurement/FlowMeasurementServer.js";
import {
    FlowMeasurementBehavior as BaseFlowMeasurementBehavior
} from "../../../behavior/definitions/flow-measurement/FlowMeasurementBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * This defines conformance to the Water Valve device type.
 *
 * @see {@link MatterSpecification.v13.Device} § 5.4
 */
export interface WaterValveDevice extends Identity<typeof WaterValveDeviceDefinition> {}

export namespace WaterValveRequirements {
    /**
     * The Identify cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link IdentifyServer} for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The ValveConfigurationAndControl cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link ValveConfigurationAndControlServer} for convenience.
     */
    export const ValveConfigurationAndControlServer = BaseValveConfigurationAndControlServer;

    /**
     * The FlowMeasurement cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link FlowMeasurementServer} for convenience.
     */
    export const FlowMeasurementServer = BaseFlowMeasurementServer;

    /**
     * The FlowMeasurement cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link FlowMeasurementBehavior} for convenience.
     */
    export const FlowMeasurementBehavior = BaseFlowMeasurementBehavior;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: { Identify: IdentifyServer, ValveConfigurationAndControl: ValveConfigurationAndControlServer },
        optional: { FlowMeasurement: FlowMeasurementServer }
    };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = { optional: { FlowMeasurement: FlowMeasurementBehavior }, mandatory: {} };
}

export const WaterValveDeviceDefinition = MutableEndpoint({
    name: "WaterValve",
    deviceType: 0x42,
    deviceRevision: 1,
    requirements: WaterValveRequirements,
    behaviors: SupportedBehaviors(
        WaterValveRequirements.server.mandatory.Identify,
        WaterValveRequirements.server.mandatory.ValveConfigurationAndControl
    )
});

export const WaterValveDevice: WaterValveDevice = WaterValveDeviceDefinition;
