/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "AreaNamespace", tag: "semanticNamespace",
    details: "The tags contained in this namespace may be used in any domain or context, to indicate an " +
        "association with an indoor or outdoor area of a home.",
    xref: "namespace§13",

    children: [
        { name: "Bathroom", tag: "semanticTag", description: "Also known as Restroom" },
        { name: "Boxroom", tag: "semanticTag", description: "A small room typically used for storage" },
        {
            name: "Den", tag: "semanticTag",
            description: "A small, comfortable room for individual activities such as work or hobbies"
        },
        { name: "Ensuite", tag: "semanticTag", description: "A bathroom directly accessible from a bedroom" },
        { name: "Guest Bathroom", tag: "semanticTag", description: "Also known as Guest Restroom" },
        {
            name: "Hearth Room", tag: "semanticTag",
            description: "A cozy room containing a fireplace or other point heat source"
        },
        {
            name: "Mud Room", tag: "semanticTag",
            description: "A space used to remove soiled garments prior to entering the domicile proper"
        },
        { name: "Pantry", tag: "semanticTag", description: "AKA a larder, a place where food is stored" },
        { name: "Scullery", tag: "semanticTag", description: "A utility space for cleaning dishes and laundry" },
        {
            name: "Snug", tag: "semanticTag",
            description: "An informal space meant to be 'cozy', 'snug', relaxed, meant to share with family or friends"
        },
        { name: "Toilet", tag: "semanticTag", description: "A room dedicated to a toilet; a water closet / WC" }
    ]
});
