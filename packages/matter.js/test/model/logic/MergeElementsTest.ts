/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../../src/log/index.js";
import { MergeElements } from "../../../src/model/logic/index.js";
import { Time } from "../../../src/time/Time.js";
import { SpecMatter, ChipMatter, LocalMatter } from "../../../models/index.js";
import { TimeFake } from "../../../src/time/index.js";
import { ClusterElement } from "../../../src/model/index.js";

Time.get = () => new TimeFake(0);
Logger.format = "ansi";

describe("MergeElements", () => {
    it("merges known models", () => {
        MergeElements({ spec: SpecMatter, chip: ChipMatter, local: LocalMatter });
    })

    const mergeOccupancySensing = () => MergeElements({ spec: Fixtures.SpecOccupancySensing, chip: Fixtures.ChipOccupancySensing });
    const mergeModeSelect = () => MergeElements({ spec: Fixtures.SpecModeSelect, chip: Fixtures.ChipModeSelect });

    it("merges children by ID", () => {
        expect(mergeOccupancySensing().children?.length).toBe(1);
    })

    it("prefers spec name", () => {
        expect(mergeOccupancySensing().name).toBe("OccupancySensing");
    })

    it("adds mismatched children", () => {
        expect(mergeOccupancySensing().children?.[0].children?.length).toBe(1);
    })

    it("merges with missing datatype", () => {
        expect(mergeModeSelect().children?.length).toBe(2);
    })
})

const Fixtures = {
    SpecOccupancySensing: ClusterElement({
        id: 0x0406, name: "OccupancySensing",
        children: [
            {
                tag: "datatype", name: "OccupancyBitmap", type: "bitmap8",
            }
        ]
    }),

    ChipOccupancySensing: ClusterElement({
        id: 0x0406, name: "OccupancyShmensing",
        children: [
            {
                tag: "datatype", name: "OccupancyBitmap",
                children: [
                    { tag: "datatype", id: 0x0001, name: "Occupied" }
                ]
            },
        ]
    }),

    SpecModeSelect: ClusterElement({
        tag: "cluster", id: 0x0050, name: "ModeSelect",
        classification: "application", description: "Mode Select",
        children: [
            {
                tag: "attribute", id: 0x0002, name: "SupportedModes",
                access: "R V", conformance: "M", constraint: "max 255", default: "MS", quality: "F", type: "list",
                details: "This attribute is the list of supported modes that may be selected for" +
                         " the CurrentMode attribute. Each item in this list represents a unique" +
                         " mode as indicated by the Mode field of the ModeOptionStruct. Each " +
                         "entry in this list SHALL have a unique value for the Mode field",
                xref: { document: "cluster", section: "1.8.5.3" },
                children: [
                    {
                        tag: "datatype", name: "entry",
                        type: "ModeOptionStruct"
                    }
                ]
            },
        ]
    }),

    ChipModeSelect: ClusterElement({
        tag: "cluster", id: 0x0050, name: "ModeSelect",
        classification: "application", description: "Mode Select",
        children: [
            {
                tag: "attribute", id: 0x0002, name: "SupportedModes",
                conformance: "M", type: "list",
                children: [
                    {
                        tag: "datatype", name: "entry",
                        type: "ModeOptionStruct"
                    }
                ]
            },

            {
                tag: "datatype", name: "ModeOptionStruct",
                conformance: "M", type: "struct",
                children: [
                    {
                        tag: "datatype", name: "Label",
                        conformance: "M", type: "string"
                    },

                    {
                        tag: "datatype", name: "Mode",
                        conformance: "M", type: "uint8"
                    },

                    {
                        tag: "datatype", name: "SemanticTags",
                        conformance: "M", type: "SemanticTagStruct"
                    }
                ]
            },
        ]
    })
}
