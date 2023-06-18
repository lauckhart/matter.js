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

    it("merges children by name", () => {
        const model1 = ClusterElement({
            id: 0x0406, name: "OccupancySensing",
            children: [
                {
                    tag: "datatype", name: "OccupancyBitmap",
                    type: "bitmap8",
                    details: "This data type is derived from bitmap8",
                    xref: { document: "cluster", section: "2.7.5.1" }
                }
            ]
        });

        const model2 = ClusterElement({
            id: 0x0406, name: "OccupancySensing",
            children: [
                {
                    tag: "datatype", name: "OccupancyBitmap",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Occupied",
                            conformance: "M"
                        }
                    ]
                },
            ]
        });

        const merged = MergeElements({ spec: model1, chip: model2 });
        expect(merged.children?.length).toBe(1);
    })
})
