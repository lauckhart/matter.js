/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CarbonDioxideConcentrationMeasurementServer } from "../../../../src/behavior/definitions/carbon-dioxide-concentration-measurement/CarbonDioxideConcentrationMeasurementServer.js";
import { CarbonMonoxideConcentrationMeasurementServer } from "../../../../src/behavior/definitions/carbon-monoxide-concentration-measurement/CarbonMonoxideConcentrationMeasurementServer.js";
import { ConcentrationMeasurement } from "../../../../src/cluster/definitions/ConcentrationMeasurementCluster.js";
import { FanControl } from "../../../../src/cluster/definitions/FanControlCluster.js";
import { AirPurifierDevice } from "../../../../src/endpoint/definitions/device/AirPurifierDevice.js";
import { MockServerNode } from "../../../node/mock-server-node.js";

describe("CarbonDioxideConcentrationMeasurementServer", () => {
    it("supports one value mode", async () => {
        const node = await MockServerNode.create();
        const Co2MeasurementServer = CarbonDioxideConcentrationMeasurementServer.with("NumericMeasurement");
        const PurifierDevice = AirPurifierDevice.with(Co2MeasurementServer);
        await node.add(PurifierDevice, {
            fanControl: { fanModeSequence: FanControl.FanModeSequence.OffHigh, percentCurrent: 50 },
            carbonDioxideConcentrationMeasurement: {
                measurementMedium: ConcentrationMeasurement.MeasurementMedium.Air,
                measurementUnit: ConcentrationMeasurement.MeasurementUnit.Ppm,
            },
        });
    });

    it("supports one value mode with sibling with different value mode", async () => {
        const node = await MockServerNode.create();
        const Co2MeasurementServer = CarbonDioxideConcentrationMeasurementServer.with("NumericMeasurement");
        const CoMeasurementServer = CarbonMonoxideConcentrationMeasurementServer.with("LevelIndication");
        const PurifierDevice = AirPurifierDevice.with(Co2MeasurementServer, CoMeasurementServer);
        await node.add(PurifierDevice, {
            fanControl: { fanModeSequence: FanControl.FanModeSequence.OffHigh, percentCurrent: 50 },
            carbonDioxideConcentrationMeasurement: {
                measurementMedium: ConcentrationMeasurement.MeasurementMedium.Air,
                measurementUnit: ConcentrationMeasurement.MeasurementUnit.Ppm,
            },
            carbonMonoxideConcentrationMeasurement: {
                measurementMedium: ConcentrationMeasurement.MeasurementMedium.Air,
            },
        });
    });
});
