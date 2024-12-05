/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OccurrenceManager } from "@matter/main/protocol";
import { NodeTestInstance } from "../../src/NodeTestInstance.js";

describe("BINFO", () => {
    before(() =>
        chip.container.edit(
            [
                // Until we're on 1.4
                "s/value: 18/value: 17/",
                "s/minValue: 0x01040000/minValue: 0x01030000/",
                "s/maxValue: 0x0104FF00/maxValue: 0x0103FF00/",
            ],
            `${chip.paths.yamlCertTestDir}/Test_TC_BINFO_2_1.yaml`,
        ),
    );

    chip({ include: "BINFO_*", exclude: "BINFO_2_2" });

    // For BINFO 2.2 we need to clear events because otherwise test will fail due to duplicate startup events
    chip({ include: "BINFO_2_2" }).beforeStart(subject =>
        (subject as NodeTestInstance).node.env.get(OccurrenceManager).clear(),
    );
});
