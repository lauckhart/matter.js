/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const AirQualitySensorDt = DeviceType(
    { name: "AirQualitySensor", id: 0x2c },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 44, revision: 1 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "AirQuality", id: 0x5b, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "TemperatureMeasurement", id: 0x402, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "RelativeHumidityMeasurement", id: 0x405, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "CarbonMonoxideConcentrationMeasurement", id: 0x40c, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "CarbonDioxideConcentrationMeasurement", id: 0x40d, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "NitrogenDioxideConcentrationMeasurement", id: 0x413, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "OzoneConcentrationMeasurement", id: 0x415, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "FormaldehydeConcentrationMeasurement", id: 0x42b, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "Pm1ConcentrationMeasurement", id: 0x42c, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "Pm25ConcentrationMeasurement", id: 0x42a, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "Pm10ConcentrationMeasurement", id: 0x42d, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "RadonConcentrationMeasurement", id: 0x42f, element: "serverCluster", conformance: "O" }),
    Requirement({
        name: "TotalVolatileOrganicCompoundsConcentrationMeasurement", id: 0x42e,
        element: "serverCluster", conformance: "O"
    })
);

MatterDefinition.children.push(AirQualitySensorDt);
