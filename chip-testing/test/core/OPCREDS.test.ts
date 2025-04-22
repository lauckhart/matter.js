/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("OPCREDS", () => {
    chip("OPCREDS/*").exclude(
        // Hmm, test expects us to provide NOC field to a different fabric even though it's fabric sensitive.  This
        // seems likely a CHIP + test bug
        //
        // TODO - validate and remove exclusion once resolved
        "OPCREDS/3.9",
    );
});
