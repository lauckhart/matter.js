/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ColorControl } from "#index.js";

ColorControl.patch({
    details: "This cluster provides an interface for changing the color of a light. Color is specified according " +
        "to the CIE 1931 Color space. Color control is carried out in terms of x,y values, as defined by this " +
        "specification." +
        "\n" +
        "Additionally, color may optionally be controlled in terms of color temperature, or as hue and " +
        "saturation values based on optionally variable RGB and W color points. It is recommended that the " +
        "hue and saturation are interpreted according to the HSV (a.k.a. HSB) color model." +
        "\n" +
        "Control over luminance is not included, as this is provided by means of the Level Control for " +
        "Lighting cluster. It is recommended that the level provided by this cluster be interpreted as " +
        "representing a proportion of the maximum intensity achievable at the current color.",

    xref: { document: "cluster", section: "3.2" },

    children: [
        undefined,

        {
            children: [
                { description: "HueSaturation" },
                { description: "EnhancedHue" },
                { description: "ColorLoop" },
                { description: "Xy" },
                { description: "ColorTemperature" }
            ]
        },

        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Supports color specification via hue/saturation." },
                { description: "Enhanced hue is supported." },
                { description: "Color loop is supported." },
                { description: "Supports color specification via XY." },
                { description: "Supports color specification via color temperature." }
            ]
        },

        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        { children: [{ description: "Dependency on On/Off cluster" }] },

        {
            children: [
                { description: "Device adheres to the associated action field." },
                { description: "Device updates the associated direction attribute." },
                { description: "Device updates the associated time attribute." },
                { description: "Device updates the associated start hue attribute." }
            ]
        },

        {
            children: [
                { description: "There is no compensation." },
                { description: "The compensation is based on other or unknown mechanism." },
                { description: "The compensation is based on temperature monitoring." },
                { description: "The compensation is based on optical luminance monitoring and feedback." },
                { description: "The compensation is based on optical color monitoring and feedback." }
            ]
        },

        {
            children: [
                { description: "The current hue and saturation attributes determine the color." },
                { description: "The current X and Y attributes determine the color." },
                { description: "The color temperature attribute determines the color." }
            ]
        },

        {
            children: [
                { description: "The current hue and saturation attributes determine the color." },
                { description: "The current X and Y attributes determine the color." },
                { description: "The color temperature attribute determines the color." },
                { description: "The enhanced current hue and saturation attributes determine the color." }
            ]
        },

        {
            children: [
                { description: "Shortest distance" },
                { description: "Longest distance" },
                { description: "Up" },
                { description: "Down" }
            ]
        },

        {
            children: [
                { description: "Stop the movement" },
                { description: "Move in an upwards direction" },
                { description: "Move in a downwards direction" }
            ]
        },

        {
            children: [
                { description: "Step in an upwards direction" },
                { description: "Step in a downwards direction" }
            ]
        },

        {
            children: [
                { description: "De-activate the color loop." },
                { description: "Activate the color loop from the value in the ColorLoopStartEnhancedHue field." },
                { description: "Activate the color loop from the value of the EnhancedCurrentHue attribute." }
            ]
        },

        {
            children: [
                { description: "Decrement the hue in the color loop." },
                { description: "Increment the hue in the color loop." }
            ]
        }
    ]
});
