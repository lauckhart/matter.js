/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    DatatypeElement as Datatype,
    FieldElement as Field
} from "../../elements/index.js";

export const EnergyEvseMode = Cluster({
    name: "EnergyEvseMode", id: 0x9d, type: "ModeBase", classification: "application", pics: "EEVSEM",
    details: "This cluster is derived from the Mode Base cluster which also defines a namespace for the operation " +
        "of EVSE devices.",
    xref: { document: "cluster", section: "9.4" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Datatype({
            name: "ModeTag", type: "enum16",

            children: [
                Field({
                    name: "Manual", id: 0x4000,
                    details: "While in this mode, the EVSE needs to be sent an EnableEvseCharging or EnableEvseDischarging " +
                        "command to make the EVSE start charging or discharging.",
                    xref: { document: "cluster", section: "9.4.4.1.1" }
                }),

                Field({
                    name: "TimeOfUse", id: 0x4001,
                    details: "While in this mode, the EVSE will attempt to automatically start charging based on the user’s " +
                        "charging targets and a Time of Use tariff to charge at the cheapest times of the day.",
                    xref: { document: "cluster", section: "9.4.4.1.2" }
                }),

                Field({
                    name: "SolarCharging", id: 0x4002,
                    details: "While in this mode, the EVSE will attempt to automatically start charging based on available excess " +
                        "solar PV generation, limiting the charging power to avoid imported energy from the grid.",
                    xref: { document: "cluster", section: "9.4.4.1.3" }
                })
            ]
        }),

        Attribute({
            name: "SupportedModes", id: 0x0, type: "list", access: "R V", conformance: "M",
            constraint: "2 to 255", quality: "F",

            details: "This attribute shall contain the list of supported modes that may be selected for the CurrentMode " +
                "attribute. Each item in this list represents a unique mode as indicated by the Mode field of the " +
                "ModeOptionStruct." +
                "\n" +
                "Each entry in this list shall have a unique value for the Mode field. Each entry in this list shall " +
                "have a unique value for the Label field.",

            xref: { document: "cluster", section: "1.10.6.2" },
            children: [Field({ name: "entry", type: "EnergyEvseMode.ModeOptionStruct" })]
        }),

        Datatype({
            name: "ModeOptionStruct", type: "ModeOptionStruct",
            children: [Field({
                name: "ModeTags", type: "list",
                children: [Field({ name: "entry", type: "EnergyEvseMode.ModeTagStruct" })]
            })]
        }),

        Datatype({
            name: "ModeTagStruct", type: "ModeTagStruct",
            children: [Field({ name: "Value", type: "EnergyEvseMode.ModeTag" })]
        })
    ]
});

MatterDefinition.children.push(EnergyEvseMode);
