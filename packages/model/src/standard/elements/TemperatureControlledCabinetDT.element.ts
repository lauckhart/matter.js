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
    { id: 0x71, name: "TemperatureControlledCabinet", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 113, revision: 3 } ], element: "attribute" })
    ),
    Requirement({ id: 0x56, name: "TemperatureControl", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x402, name: "TemperatureMeasurement", conformance: "O", element: "serverCluster" }),

    Requirement(
        {
            id: 0x52, name: "RefrigeratorAndTemperatureControlledCabinetMode",
            conformance: "[Cooler]", element: "serverCluster"
        },
        Requirement({ name: "StartUpMode", conformance: "X", element: "attribute" }),
        Requirement({ name: "ONOFF", conformance: "X", element: "feature" })
    ),

    Requirement(
        { id: 0x49, name: "OvenMode", conformance: "[Heater]", element: "serverCluster" },
        Requirement({ name: "StartUpMode", conformance: "X", element: "attribute" }),
        Requirement({ name: "ONOFF", conformance: "X", element: "feature" })
    ),
    Requirement(
        { id: 0x48, name: "OvenCavityOperationalState", conformance: "[Heater]", element: "serverCluster" },
        Requirement({ name: "Pause", conformance: "X", element: "command" }),
        Requirement({ name: "Resume", conformance: "X", element: "command" })
    ),
    Field({ name: "conditions", type: "enum8" }, Field({ name: "Cooler" }), Field({ name: "Heater" }))
);

MatterDefinition.children.push(TemperatureControlledCabinetDt);
