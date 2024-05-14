/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import {
    DeviceTypeElement as DeviceType,
    RequirementElement as Requirement,
    FieldElement as Field
} from "../../elements/index.js";

export const TemperatureControlledCabinetDt = DeviceType({
    name: "TemperatureControlledCabinet", id: 0x71, classification: "simple",
    details: "A Temperature Controlled Cabinet only exists composed as part of another device type. It represents " +
        "a single cabinet that is capable of having its temperature controlled. Such a cabinet may be " +
        "chilling or freezing food, for example as part of a refrigerator, freezer, wine chiller, or other " +
        "similar device. Equally, such a cabinet may be warming or heating food, for example as part of an " +
        "oven, range, or similar device.",
    xref: { document: "device", section: "13.4" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [Requirement({ name: "DeviceTypeList", default: [ { deviceType: 113, revision: 2 } ], element: "attribute" })]
        }),
        Requirement({
            name: "TemperatureControl", id: 0x56, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "13.4.4" }
        }),
        Requirement({
            name: "TemperatureMeasurement", id: 0x402, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "13.4.4" }
        }),

        Requirement({
            name: "RefrigeratorAndTemperatureControlledCabinetMode", id: 0x52, conformance: "[Cooler]",
            element: "serverCluster",
            xref: { document: "device", section: "13.4.4" },
            children: [
                Requirement({ name: "StartUpMode", conformance: "X", element: "attribute" }),
                Requirement({ name: "ONOFF", conformance: "X", element: "feature" })
            ]
        }),

        Requirement({
            name: "OvenMode", id: 0x49, conformance: "[Heater]", element: "serverCluster",
            xref: { document: "device", section: "13.4.4" },
            children: [
                Requirement({ name: "StartUpMode", conformance: "X", element: "attribute" }),
                Requirement({ name: "ONOFF", conformance: "X", element: "feature" })
            ]
        }),

        Requirement({
            name: "OvenCavityOperationalState", id: 0x48, conformance: "[Heater]", element: "serverCluster",
            xref: { document: "device", section: "13.4.4" },
            children: [
                Requirement({ name: "Pause", conformance: "X", element: "command" }),
                Requirement({ name: "Resume", conformance: "X", element: "command" })
            ]
        }),

        Field({
            name: "conditions", type: "enum8",

            children: [
                Field({
                    name: "Cooler", description: "The device has cooling functionality.",
                    xref: { document: "device", section: "13.4.3" }
                }),
                Field({
                    name: "Heater", description: "The device has heating functionality.",
                    xref: { document: "device", section: "13.4.3" }
                })
            ]
        })
    ]
});

Matter.children.push(TemperatureControlledCabinetDt);
