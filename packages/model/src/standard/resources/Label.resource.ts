/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Label } from "#index.js";

Label.patch({
    classification: "endpoint", pics: "LABEL",
    details: "This cluster provides a feature to tag an endpoint with zero or more labels. This is a base cluster " +
        "that requires a derived cluster to create an instance.",
    xref: "core§9.7",

    children: [
        undefined,
        { details: "This is a list of string tuples. Each entry is a LabelStruct.", xref: "core§9.7.5.1" },

        {
            details: "This is a string tuple with strings that are user defined.",
            xref: "core§9.7.4.1",

            children: [
                {
                    details: "The Label or Value semantic is not defined here. Label examples: \"room\", \"zone\", \"group\", " +
                        "\"direction\".",
                    xref: "core§9.7.4.1.1"
                },

                {
                    details: "The Label or Value semantic is not defined here. The Value is a discriminator for a Label that may " +
                        "have multiple instances. Label:Value examples: \"room\":\"bedroom 2\", \"orientation\":\"North\", " +
                        "\"floor\":\"2\", \"direction\":\"up\"",
                    xref: "core§9.7.4.1.2"
                }
            ]
        }
    ]
});
