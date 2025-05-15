/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OtaSoftwareUpdateProvider } from "#index.js";

OtaSoftwareUpdateProvider.patch({
    xref: { document: "core", section: "11.20.6" },

    children: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Indicates that the OTA Provider has an update available." },
                { description: "Indicates OTA Provider may have an update, but it is not ready yet." },
                { description: "Indicates that there is definitely no update currently available from the OTA Provider." },
                { description: "Indicates that the requested download protocol is not supported by the OTA Provider." }
            ]
        },

        {
            children: [
                { description: "Apply the update." },
                { description: "Wait at least the given delay time." },
                { description: "The OTA Provider is conveying a desire to rescind a previously provided Software Image." }
            ]
        },

        {
            children: [
                { description: "Indicates support for synchronous BDX." },
                { description: "Indicates support for asynchronous BDX." },
                { description: "Indicates support for HTTPS." },
                { description: "Indicates support for vendor specific protocol." }
            ]
        }
    ]
});
