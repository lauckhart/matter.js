/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const AirQualitySensorDt = DeviceType(
    { id: 0x2c, name: "AirQualitySensor", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 44, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x5b, name: "AirQuality", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x402, name: "TemperatureMeasurement", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x405, name: "RelativeHumidityMeasurement", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x40c, name: "CarbonMonoxideConcentrationMeasurement", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x40d, name: "CarbonDioxideConcentrationMeasurement", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x413, name: "NitrogenDioxideConcentrationMeasurement", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x415, name: "OzoneConcentrationMeasurement", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x42b, name: "FormaldehydeConcentrationMeasurement", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x42c, name: "Pm1ConcentrationMeasurement", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x42a, name: "Pm25ConcentrationMeasurement", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x42d, name: "Pm10ConcentrationMeasurement", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x42f, name: "RadonConcentrationMeasurement", conformance: "O", element: "serverCluster" }),
    Requirement({
        id: 0x42e, name: "TotalVolatileOrganicCompoundsConcentrationMeasurement",
        conformance: "O", element: "serverCluster"
    })
);

MatterDefinition.children.push(AirQualitySensorDt);
