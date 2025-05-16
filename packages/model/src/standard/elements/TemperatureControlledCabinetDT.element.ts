/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    DeviceTypeElement as DeviceType,
    RequirementElement as Requirement,
    FieldElement as Field
} from "../../elements/index.js";

export const TemperatureControlledCabinetDt = DeviceType(
    { name: "TemperatureControlledCabinet", id: 0x71 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 113, revision: 3 } ] })
    ),
    Requirement({ name: "TemperatureControl", id: 0x56, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "TemperatureMeasurement", id: 0x402, element: "serverCluster", conformance: "O" }),

    Requirement(
        {
            name: "RefrigeratorAndTemperatureControlledCabinetMode", id: 0x52,
            element: "serverCluster", conformance: "[Cooler]"
        },
        Requirement({ name: "StartUpMode", element: "attribute", conformance: "X" }),
        Requirement({ name: "ONOFF", element: "feature", conformance: "X" })
    ),

    Requirement(
        { name: "OvenMode", id: 0x49, element: "serverCluster", conformance: "[Heater]" },
        Requirement({ name: "StartUpMode", element: "attribute", conformance: "X" }),
        Requirement({ name: "ONOFF", element: "feature", conformance: "X" })
    ),
    Requirement(
        { name: "OvenCavityOperationalState", id: 0x48, element: "serverCluster", conformance: "[Heater]" },
        Requirement({ name: "Pause", element: "command", conformance: "X" }),
        Requirement({ name: "Resume", element: "command", conformance: "X" })
    ),
    Field({ name: "conditions", type: "enum8" }, Field({ name: "Cooler" }), Field({ name: "Heater" }))
);

MatterDefinition.children.push(TemperatureControlledCabinetDt);
