/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("DGGEN", () => {
    // Make the YAML test trigger enable key match the Python one so we don't have to set conditionally
    before(() =>
        chip.container.edit(
            ["s/hex:00112233445566778899aabbccddeeff/hex:000102030405060708090a0b0c0d0e0f/"],
            `${chip.paths.yamlCertTestDir}/Test_TC_DGGEN_2_1.yaml`,
            `${chip.paths.yamlCertTestDir}/Test_TC_DGGEN_2_3.yaml`,
        ),
    );

    chip({ include: "DGGEN_*" });
});
