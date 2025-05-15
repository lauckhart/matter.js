/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add(
    {
        name: "ColorControl", tag: "cluster",
        classification: "application", pics: "CC",

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

        xref: "cluster§3.2",

        children: [
            {
                name: "FeatureMap", tag: "attribute",
                xref: "cluster§3.2.4",

                children: [
                    { name: "HS", tag: "field", details: "Supports color specification via hue/saturation." },
                    { name: "EHUE", tag: "field", details: "Enhanced hue is supported." },
                    { name: "CL", tag: "field", details: "Color loop is supported." },
                    { name: "XY", tag: "field", details: "Supports color specification via XY." },
                    { name: "CT", tag: "field", details: "Supports specification of color temperature." }
                ]
            },

            {
                name: "CurrentHue", tag: "attribute",

                details: "The CurrentHue attribute contains the current hue value of the light. It is updated as fast as " +
                    "practical during commands that change the hue." +
                    "\n" +
                    "The hue in degrees shall be related to the CurrentHue attribute by the relationship:" +
                    "\n" +
                    "Hue = \"CurrentHue\" * 360 / 254" +
                    "\n" +
                    "where CurrentHue is in the range from 0 to 254 inclusive." +
                    "\n" +
                    "Changes to this attribute shall only be marked as reportable in the following cases:" +
                    "\n" +
                    "  • At most once per second or" +
                    "\n" +
                    "  • At the end of the movement/transition.",

                xref: "cluster§3.2.7.2"
            },

            {
                name: "CurrentSaturation", tag: "attribute",

                details: "Indicates the current saturation value of the light. It is updated as fast as practical during " +
                    "commands that change the saturation." +
                    "\n" +
                    "The saturation (on a scale from 0.0 to 1.0) shall be related to the CurrentSaturation attribute by " +
                    "the relationship:" +
                    "\n" +
                    "Saturation = \"CurrentSaturation\" / 254" +
                    "\n" +
                    "where CurrentSaturation is in the range from 0 to 254 inclusive." +
                    "\n" +
                    "Changes to this attribute shall only be marked as reportable in the following cases:" +
                    "\n" +
                    "  • At most once per second or" +
                    "\n" +
                    "  • At the end of the movement/transition.",

                xref: "cluster§3.2.7.3"
            },

            {
                name: "RemainingTime", tag: "attribute",

                details: "Indicates the time remaining, in 1/10ths of a second, until transitions due to the currently active " +
                    "command will be complete." +
                    "\n" +
                    "Changes to this attribute shall only be marked as reportable in the following cases:" +
                    "\n" +
                    "  • When it changes from 0 to any value higher than 10, or" +
                    "\n" +
                    "  • When it changes, with a delta larger than 10, caused by the invoke of a command, or" +
                    "\n" +
                    "  • When it changes to 0." +
                    "\n" +
                    "For commands with a transition time or changes to the transition time less than 1 second, changes to " +
                    "this attribute shall NOT be reported." +
                    "\n" +
                    "As this attribute is not being reported during a regular countdown, clients SHOULD NOT rely on the " +
                    "reporting of this attribute in order to keep track of the remaining duration.",

                xref: "cluster§3.2.7.4"
            },

            {
                name: "CurrentX", tag: "attribute",

                details: "Indicates the current value of the normalized chromaticity value x, as defined in the CIE xyY Color " +
                    "Space. It is updated as fast as practical during commands that change the color." +
                    "\n" +
                    "The value of x shall be related to the CurrentX attribute by the relationship" +
                    "\n" +
                    "x = \"CurrentX\" / 65536" +
                    "\n" +
                    "where CurrentX is in the range from 0 to 65279 inclusive." +
                    "\n" +
                    "Changes to this attribute shall only be marked as reportable in the following cases:" +
                    "\n" +
                    "  • At most once per second or" +
                    "\n" +
                    "  • At the end of the movement/transition.",

                xref: "cluster§3.2.7.5"
            },

            {
                name: "CurrentY", tag: "attribute",

                details: "Indicates the current value of the normalized chromaticity value y, as defined in the CIE xyY Color " +
                    "Space. It is updated as fast as practical during commands that change the color." +
                    "\n" +
                    "The value of y shall be related to the CurrentY attribute by the relationship" +
                    "\n" +
                    "y = \"CurrentY\" / 65536" +
                    "\n" +
                    "where CurrentY is in the range from 0 to 65279 inclusive." +
                    "\n" +
                    "Changes to this attribute shall only be marked as reportable in the following cases:" +
                    "\n" +
                    "  • At most once per second or" +
                    "\n" +
                    "  • At the end of the movement/transition.",

                xref: "cluster§3.2.7.6"
            },

            {
                name: "DriftCompensation", tag: "attribute",
                details: "Indicates what mechanism, if any, is in use for compensation for color/intensity drift over time.",
                xref: "cluster§3.2.7.7"
            },

            {
                name: "CompensationText", tag: "attribute",
                details: "This attribute shall contain a textual indication of what mechanism, if any, is in use to compensate " +
                    "for color/intensity drift over time.",
                xref: "cluster§3.2.7.8"
            },

            {
                name: "ColorTemperatureMireds", tag: "attribute",

                details: "Indicates a scaled inverse of the current value of the color temperature. The unit of " +
                    "ColorTemperatureMireds is the mired (micro reciprocal degree), a.k.a. mirek (micro reciprocal " +
                    "kelvin). It is updated as fast as practical during commands that change the color." +
                    "\n" +
                    "Changes to this attribute shall only be marked as reportable in the following cases:" +
                    "\n" +
                    "  • At most once per second or" +
                    "\n" +
                    "  • At the end of the movement/transition." +
                    "\n" +
                    "The color temperature value in kelvins shall be related to the ColorTemperatureMireds attribute in " +
                    "mired by the relationship" +
                    "\n" +
                    "\"Color temperature [K]\" = \"1,000,000\" / \"ColorTemperatureMireds\"" +
                    "\n" +
                    "where ColorTemperatureMireds is in the range from 1 to 65279 inclusive, giving a color temperature " +
                    "range from 1,000,000 K to 15.32 K." +
                    "\n" +
                    "If this attribute is implemented then the ColorMode attribute shall also be implemented.",

                xref: "cluster§3.2.7.9"
            },

            {
                name: "ColorMode", tag: "attribute",
                details: "Indicates which attributes are currently determining the color of the device." +
                    "\n" +
                    "The value of the ColorMode attribute cannot be written directly - it is set upon reception of any " +
                    "command in section Commands to the appropriate mode for that command.",
                xref: "cluster§3.2.7.10"
            },

            {
                name: "Options", tag: "attribute",

                details: "Indicates a bitmap that determines the default behavior of some cluster commands. Each command that " +
                    "is dependent on the Options attribute shall first construct a temporary Options bitmap that is in " +
                    "effect during the command processing. The temporary Options bitmap has the same format and meaning " +
                    "as the Options attribute, but includes any bits that may be overridden by command fields." +
                    "\n" +
                    "This attribute is meant to be changed only during commissioning." +
                    "\n" +
                    "Below is the format and description of the Options attribute and temporary Options bitmap and the " +
                    "effect on dependent commands." +
                    "\n" +
                    "Command execution shall NOT continue beyond the Options processing if all of these criteria are " +
                    "true:" +
                    "\n" +
                    "  • The On/Off cluster exists on the same endpoint as this cluster." +
                    "\n" +
                    "  • The OnOff attribute of the On/Off cluster, on this endpoint, is FALSE." +
                    "\n" +
                    "  • The value of the ExecuteIfOff bit is 0.",

                xref: "cluster§3.2.7.11"
            },

            {
                name: "NumberOfPrimaries", tag: "attribute",

                details: "Indicates the number of color primaries implemented on this device. A value of null shall indicate " +
                    "that the number of primaries is unknown." +
                    "\n" +
                    "Where this attribute is implemented, the attributes below for indicating the “x” and “y” color " +
                    "values of the primaries shall also be implemented for each of the primaries from 1 to " +
                    "NumberOfPrimaries, without leaving gaps. Implementation of the Primary1Intensity attribute and " +
                    "subsequent intensity attributes is optional.",

                xref: "cluster§3.2.7.24"
            },

            {
                name: "Primary1X", tag: "attribute",
                details: "Indicates the normalized chromaticity value x for this primary, as defined in the CIE xyY Color " +
                    "Space." +
                    "\n" +
                    "The value of x shall be related to the Primary1X attribute by the relationship x = Primary1X / 65536 " +
                    "(Primary1X in the range 0 to 65279 inclusive)",
                xref: "cluster§3.2.7.25"
            },

            {
                name: "Primary1Y", tag: "attribute",
                details: "Indicates the normalized chromaticity value y for this primary, as defined in the CIE xyY Color " +
                    "Space." +
                    "\n" +
                    "The value of y shall be related to the Primary1Y attribute by the relationship y = Primary1Y / 65536 " +
                    "(Primary1Y in the range 0 to 65279 inclusive)",
                xref: "cluster§3.2.7.26"
            },

            {
                name: "Primary1Intensity", tag: "attribute",

                details: "Indicates a representation of the maximum intensity of this primary as defined in the Dimming Light " +
                    "Curve in the Ballast Configuration cluster (see Ballast Configuration Cluster), normalized such that " +
                    "the primary with the highest maximum intensity contains the value 254." +
                    "\n" +
                    "A value of null shall indicate that this primary is not available." +
                    "\n" +
                    "3.2.7.28. Primary2X, Primary2Y, Primary2Intensity, Primary3X, Primary3Y, Primary3Intensity, " +
                    "Primary4X, Primary4Y, Primary4Intensity, Primary5X, Primary5Y, Primary5Intensity, Primary6X, " +
                    "Primary6Y and Primary6Intensity Attributes" +
                    "\n" +
                    "These attributes shall represent the capabilities of the 2nd, 3rd, 4th, 5th and 6th primaries, where " +
                    "present, in the same way as for the Primary1X, Primary1Y and Primary1Intensity attributes.",

                xref: "cluster§3.2.7.27"
            },

            { name: "Primary2X", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "Primary2Y", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "Primary2Intensity", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "Primary3X", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "Primary3Y", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "Primary3Intensity", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "Primary4X", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "Primary4Y", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "Primary4Intensity", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "Primary5X", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "Primary5Y", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "Primary5Intensity", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "Primary6X", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "Primary6Y", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "Primary6Intensity", tag: "attribute", xref: "cluster§3.2.7" },

            {
                name: "WhitePointX", tag: "attribute",
                details: "Indicates the normalized chromaticity value x, as defined in the CIE xyY Color Space, of the current " +
                    "white point of the device." +
                    "\n" +
                    "The value of x shall be related to the WhitePointX attribute by the relationship x = WhitePointX / " +
                    "65536 (WhitePointX in the range 0 to 65279 inclusive)",
                xref: "cluster§3.2.7.29"
            },

            {
                name: "WhitePointY", tag: "attribute",
                details: "Indicates the normalized chromaticity value y, as defined in the CIE xyY Color Space, of the current " +
                    "white point of the device." +
                    "\n" +
                    "The value of y shall be related to the WhitePointY attribute by the relationship y = WhitePointY / " +
                    "65536 (WhitePointY in the range 0 to 65279 inclusive)",
                xref: "cluster§3.2.7.30"
            },

            {
                name: "ColorPointRx", tag: "attribute",
                details: "Indicates the normalized chromaticity value x, as defined in the CIE xyY Color Space, of the red " +
                    "color point of the device." +
                    "\n" +
                    "The value of x shall be related to the ColorPointRX attribute by the relationship x = ColorPointRX / " +
                    "65536 (ColorPointRX in the range 0 to 65279 inclusive)",
                xref: "cluster§3.2.7.31"
            },

            {
                name: "ColorPointRy", tag: "attribute",
                details: "Indicates the normalized chromaticity value y, as defined in the CIE xyY Color Space, of the red " +
                    "color point of the device." +
                    "\n" +
                    "The value of y shall be related to the ColorPointRY attribute by the relationship y = ColorPointRY / " +
                    "65536 (ColorPointRY in the range 0 to 65279 inclusive)",
                xref: "cluster§3.2.7.32"
            },

            {
                name: "ColorPointRIntensity", tag: "attribute",

                details: "Indicates a representation of the relative intensity of the red color point as defined in the " +
                    "Dimming Light Curve in the Ballast Configuration cluster (see Ballast Configuration Cluster), " +
                    "normalized such that the color point with the highest relative intensity contains the value 254." +
                    "\n" +
                    "A value of null shall indicate an invalid value." +
                    "\n" +
                    "3.2.7.34. ColorPointGX, ColorPointGY, ColorPointGIntensity, ColorPointBX, ColorPointBY and " +
                    "ColorPointBIntensity Attributes" +
                    "\n" +
                    "These attributes shall represent the chromaticity values and intensities of the green and blue color " +
                    "points, in the same way as for the ColorPointRX, ColorPointRY and ColorPointRIntensity attributes." +
                    "\n" +
                    "If any one of these red, green or blue color point attributes is implemented then they shall all be " +
                    "implemented.",

                xref: "cluster§3.2.7.33"
            },

            { name: "ColorPointGx", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "ColorPointGy", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "ColorPointGIntensity", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "ColorPointBx", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "ColorPointBy", tag: "attribute", xref: "cluster§3.2.7" },
            { name: "ColorPointBIntensity", tag: "attribute", xref: "cluster§3.2.7" },

            {
                name: "EnhancedCurrentHue", tag: "attribute",

                details: "Indicates the non-equidistant steps along the CIE 1931 color triangle, and it provides 16-bits " +
                    "precision." +
                    "\n" +
                    "The upper 8 bits of this attribute shall be used as an index in the implementation specific XY " +
                    "lookup table to provide the non-equidistant steps. The lower 8 bits shall be used to interpolate " +
                    "between these steps in a linear way in order to provide color zoom for the user." +
                    "\n" +
                    "To provide compatibility with clients not supporting EHUE, the CurrentHue attribute shall contain a " +
                    "hue value in the range 0 to 254, calculated from the EnhancedCurrentHue attribute." +
                    "\n" +
                    "Changes to this attribute shall only be marked as reportable in the following cases:" +
                    "\n" +
                    "  • At most once per second or" +
                    "\n" +
                    "  • At the end of the movement/transition.",

                xref: "cluster§3.2.7.12"
            },

            {
                name: "EnhancedColorMode", tag: "attribute",

                details: "Indicates which attributes are currently determining the color of the device." +
                    "\n" +
                    "To provide compatibility with clients not supporting EHUE, the original ColorMode attribute shall " +
                    "indicate CurrentHue and CurrentSaturation when the light uses the EnhancedCurrentHue attribute. If " +
                    "the ColorMode attribute is changed, its new value shall be copied to the EnhancedColorMode " +
                    "attribute.",

                xref: "cluster§3.2.7.13"
            },

            {
                name: "ColorLoopActive", tag: "attribute",
                details: "Indicates the current active status of the color loop. If this attribute has the value 0, the color " +
                    "loop shall NOT be active. If this attribute has the value 1, the color loop shall be active.",
                xref: "cluster§3.2.7.14"
            },

            {
                name: "ColorLoopDirection", tag: "attribute",
                details: "Indicates the current direction of the color loop. If this attribute has the value 0, the " +
                    "EnhancedCurrentHue attribute shall be decremented. If this attribute has the value 1, the " +
                    "EnhancedCurrentHue attribute shall be incremented.",
                xref: "cluster§3.2.7.15"
            },

            {
                name: "ColorLoopTime", tag: "attribute",
                details: "Indicates the number of seconds it shall take to perform a full color loop, i.e., to cycle all " +
                    "values of the EnhancedCurrentHue attribute (between 0 and 65534).",
                xref: "cluster§3.2.7.16"
            },

            {
                name: "ColorLoopStartEnhancedHue", tag: "attribute",
                details: "Indicates the value of the EnhancedCurrentHue attribute from which the color loop shall be started.",
                xref: "cluster§3.2.7.17"
            },

            {
                name: "ColorLoopStoredEnhancedHue", tag: "attribute",
                details: "Indicates the value of the EnhancedCurrentHue attribute before the color loop was started. Once the " +
                    "color loop is complete, the EnhancedCurrentHue attribute shall be restored to this value.",
                xref: "cluster§3.2.7.18"
            },

            {
                name: "ColorCapabilities", tag: "attribute",
                details: "Indicates the color control capabilities of the device." +
                    "\n" +
                    "Bits 0-4 of the ColorCapabilities attribute shall have the same values as the corresponding bits of " +
                    "the FeatureMap attribute. All other bits in ColorCapabilities shall be 0.",
                xref: "cluster§3.2.7.19",

                children: [
                    {
                        name: "HueSaturation", tag: "field",
                        description: "Supports color specification via hue/saturation."
                    },
                    { name: "EnhancedHue", tag: "field", description: "Enhanced hue is supported." },
                    { name: "ColorLoop", tag: "field", description: "Color loop is supported." },
                    { name: "XY", tag: "field", description: "Supports color specification via XY." },
                    {
                        name: "ColorTemperature", tag: "field",
                        description: "Supports color specification via color temperature."
                    }
                ]
            },

            {
                name: "ColorTempPhysicalMinMireds", tag: "attribute",
                details: "Indicates the minimum mired value supported by the hardware. ColorTempPhysicalMinMireds corresponds " +
                    "to the maximum color temperature in kelvins supported by the hardware." +
                    "\n" +
                    "ColorTempPhysicalMinMireds <= ColorTemperatureMireds.",
                xref: "cluster§3.2.7.20"
            },

            {
                name: "ColorTempPhysicalMaxMireds", tag: "attribute",
                details: "Indicates the maximum mired value supported by the hardware. ColorTempPhysicalMaxMireds corresponds " +
                    "to the minimum color temperature in kelvins supported by the hardware." +
                    "\n" +
                    "ColorTemperatureMireds <= ColorTempPhysicalMaxMireds.",
                xref: "cluster§3.2.7.21"
            },

            {
                name: "CoupleColorTempToLevelMinMireds", tag: "attribute",

                details: "Indicates a lower bound on the value of the ColorTemperatureMireds attribute for the purposes of " +
                    "coupling the ColorTemperatureMireds attribute to the CurrentLevel attribute when the " +
                    "CoupleColorTempToLevel bit of the Options attribute of the Level Control cluster is equal to 1. When " +
                    "coupling the ColorTemperatureMireds attribute to the CurrentLevel attribute, this value shall " +
                    "correspond to a CurrentLevel value of 254 (100%)." +
                    "\n" +
                    "This attribute shall be set such that the following relationship exists: ColorTempPhysicalMinMireds " +
                    "<= CoupleColorTempToLevelMinMireds <= ColorTemperatureMireds" +
                    "\n" +
                    "Note that since this attribute is stored as a micro reciprocal degree (mired) value (i.e. color " +
                    "temperature in kelvins = 1,000,000 / CoupleColorTempToLevelMinMireds), the " +
                    "CoupleColorTempToLevelMinMireds attribute corresponds to an upper bound on the value of the color " +
                    "temperature" +
                    "\n" +
                    "in kelvins supported by the device.",

                xref: "cluster§3.2.7.22"
            },

            {
                name: "StartUpColorTemperatureMireds", tag: "attribute",
                details: "Indicates the desired startup color temperature value the light shall use when it is supplied with " +
                    "power and this value shall be reflected in the ColorTemperatureMireds attribute. In addition, the " +
                    "ColorMode and EnhancedColorMode attributes shall be set to 2 (ColorTemperatureMireds). The values of " +
                    "the StartUpColorTemperatureMireds attribute are listed in the table below,",
                xref: "cluster§3.2.7.23"
            },

            {
                name: "MoveToHue", tag: "command",
                xref: "cluster§3.2.8.4",

                children: [
                    {
                        name: "Hue", tag: "field",
                        details: "This field shall indicate the hue to be moved to.",
                        xref: "cluster§3.2.8.4.1"
                    },
                    {
                        name: "Direction", tag: "field",
                        details: "This field shall indicate the movement direction.",
                        xref: "cluster§3.2.8.4.2"
                    },

                    {
                        name: "TransitionTime", tag: "field",
                        details: "This field shall indicate, in 1/10ths of a second, the time that shall be taken to move to the new " +
                            "hue.",
                        xref: "cluster§3.2.8.4.3"
                    }
                ]
            },

            {
                name: "MoveHue", tag: "command",
                xref: "cluster§3.2.8.5",

                children: [
                    {
                        name: "MoveMode", tag: "field",
                        details: "This field shall indicate the mode of movement.",
                        xref: "cluster§3.2.8.5.1"
                    },

                    {
                        name: "Rate", tag: "field",
                        details: "This field shall indicate the rate of movement in steps per second. A step is a change in the " +
                            "device’s hue of one unit.",
                        xref: "cluster§3.2.8.5.2"
                    }
                ]
            },

            {
                name: "StepHue", tag: "command",
                xref: "cluster§3.2.8.6",

                children: [
                    {
                        name: "StepMode", tag: "field",
                        details: "This field shall indicate the mode of the step to be performed.",
                        xref: "cluster§3.2.8.6.1"
                    },

                    {
                        name: "StepSize", tag: "field",
                        details: "This field shall indicate the change to be added to (or subtracted from) the current value of the " +
                            "device’s hue.",
                        xref: "cluster§3.2.8.6.2"
                    },

                    {
                        name: "TransitionTime", tag: "field",

                        details: "This field shall indicate, in 1/10ths of a second, the time that shall be taken to perform the step." +
                            "\n" +
                            "A step is a change in the device’s hue of Step size units." +
                            "\n" +
                            "NOTE" +
                            "\n" +
                            "Here the TransitionTime data field is of data type uint8, where uint16 is more common for " +
                            "TransitionTime data fields in other clusters / commands.",

                        xref: "cluster§3.2.8.6.3"
                    }
                ]
            },

            { name: "MoveToSaturation", tag: "command", xref: "cluster§3.2.8.7" },

            {
                name: "MoveSaturation", tag: "command",
                xref: "cluster§3.2.8.8",

                children: [
                    {
                        name: "MoveMode", tag: "field",
                        details: "This field shall indicate the mode of movement, as described in the MoveHue command.",
                        xref: "cluster§3.2.8.8.1"
                    },

                    {
                        name: "Rate", tag: "field",
                        details: "This field shall indicate the rate of movement in steps per second. A step is a change in the " +
                            "device’s saturation of one unit.",
                        xref: "cluster§3.2.8.8.2"
                    }
                ]
            },

            {
                name: "StepSaturation", tag: "command",
                xref: "cluster§3.2.8.9",

                children: [
                    {
                        name: "StepMode", tag: "field",
                        details: "This field shall indicate the mode of the step to be performed, as described in the StepHue command.",
                        xref: "cluster§3.2.8.9.1"
                    },

                    {
                        name: "StepSize", tag: "field",
                        details: "This field shall indicate the change to be added to (or subtracted from) the current value of the " +
                            "device’s saturation.",
                        xref: "cluster§3.2.8.9.2"
                    },

                    {
                        name: "TransitionTime", tag: "field",

                        details: "This field shall indicate, in 1/10ths of a second, the time that shall be taken to perform the step. " +
                            "A step is a change in the device’s saturation of Step size units." +
                            "\n" +
                            "NOTE" +
                            "\n" +
                            "Here the TransitionTime data field is of data type uint8, where uint16 is more common for " +
                            "TransitionTime data fields in other clusters / commands.",

                        xref: "cluster§3.2.8.9.3"
                    }
                ]
            },

            { name: "MoveToHueAndSaturation", tag: "command", xref: "cluster§3.2.8.10" },
            { name: "MoveToColor", tag: "command", xref: "cluster§3.2.8.11" },

            {
                name: "MoveColor", tag: "command",
                xref: "cluster§3.2.8.12",

                children: [
                    {
                        name: "RateX", tag: "field",
                        details: "This field shall indicate the rate of movement in steps per second. A step is a change in the " +
                            "device’s CurrentX attribute of one unit.",
                        xref: "cluster§3.2.8.12.1"
                    },

                    {
                        name: "RateY", tag: "field",
                        details: "This field shall indicate the rate of movement in steps per second. A step is a change in the " +
                            "device’s CurrentY attribute of one unit.",
                        xref: "cluster§3.2.8.12.2"
                    }
                ]
            },

            {
                name: "StepColor", tag: "command",
                xref: "cluster§3.2.8.13",

                children: [{
                    name: "TransitionTime", tag: "field",
                    details: "The field shall indicate, in 1/10ths of a second, the time that shall be taken to perform the color " +
                        "change.",
                    xref: "cluster§3.2.8.13.2"
                }]
            },

            { name: "MoveToColorTemperature", tag: "command", xref: "cluster§3.2.8.14" },

            {
                name: "EnhancedMoveToHue", tag: "command",
                details: "This command allows the light to be moved in a smooth continuous transition from their current hue " +
                    "to a target hue.",
                xref: "cluster§3.2.8.15",

                children: [
                    {
                        name: "EnhancedHue", tag: "field",
                        details: "This field shall indicate the target extended hue for the light.",
                        xref: "cluster§3.2.8.15.1"
                    },
                    {
                        name: "Direction", tag: "field",
                        details: "This field shall indicate the movement direction.",
                        xref: "cluster§3.2.8.15.2"
                    },
                    {
                        name: "TransitionTime", tag: "field",
                        details: "This field shall indicate the transition time, as described in the MoveToHue command.",
                        xref: "cluster§3.2.8.15.3"
                    }
                ]
            },

            {
                name: "EnhancedMoveHue", tag: "command",
                details: "This command allows the light to start a continuous transition starting from their current hue.",
                xref: "cluster§3.2.8.16",

                children: [
                    {
                        name: "MoveMode", tag: "field",
                        details: "This field shall indicate the mode of movement, as described in the MoveHue command.",
                        xref: "cluster§3.2.8.16.1"
                    },

                    {
                        name: "Rate", tag: "field",
                        details: "This field shall indicate the rate of movement in steps per second. A step is a change in the " +
                            "extended hue of a device by one unit.",
                        xref: "cluster§3.2.8.16.2"
                    }
                ]
            },

            {
                name: "EnhancedStepHue", tag: "command",
                details: "This command allows the light to be moved in a stepped transition from their current hue, resulting " +
                    "in a linear transition through XY space.",
                xref: "cluster§3.2.8.17",

                children: [
                    {
                        name: "StepMode", tag: "field",
                        details: "This field shall indicate the mode of the step to be performed, as described in the StepHue command.",
                        xref: "cluster§3.2.8.17.1"
                    },

                    {
                        name: "StepSize", tag: "field",
                        details: "This field shall indicate the change to be added to (or subtracted from) the current value of the " +
                            "device’s enhanced hue.",
                        xref: "cluster§3.2.8.17.2"
                    },

                    {
                        name: "TransitionTime", tag: "field",

                        details: "The field shall indicate, in units of 1/10ths of a second, the time that shall be taken to perform " +
                            "the step. A step is a change to the device’s enhanced hue of a magnitude corresponding to the " +
                            "StepSize field." +
                            "\n" +
                            "NOTE" +
                            "\n" +
                            "Here TransitionTime data field is of data type uint16, while the TransitionTime data field of the " +
                            "StepHue command is of data type uint8.",

                        xref: "cluster§3.2.8.17.3"
                    }
                ]
            },

            {
                name: "EnhancedMoveToHueAndSaturation", tag: "command",
                details: "This command allows the light to be moved in a smooth continuous transition from their current hue " +
                    "to a target hue and from their current saturation to a target saturation.",
                xref: "cluster§3.2.8.18",

                children: [
                    {
                        name: "EnhancedHue", tag: "field",
                        details: "This field shall indicate the target extended hue for the light.",
                        xref: "cluster§3.2.8.18.1"
                    },
                    {
                        name: "Saturation", tag: "field",
                        details: "This field shall indicate the saturation, as described in the MoveToHueAndSaturation command.",
                        xref: "cluster§3.2.8.18.2"
                    },
                    {
                        name: "TransitionTime", tag: "field",
                        details: "This field shall indicate the transition time, as described in the MoveToHue command.",
                        xref: "cluster§3.2.8.18.3"
                    }
                ]
            },

            {
                name: "ColorLoopSet", tag: "command",
                details: "This command allows a color loop to be activated such that the color light cycles through its range " +
                    "of hues.",
                xref: "cluster§3.2.8.19",

                children: [
                    {
                        name: "UpdateFlags", tag: "field",
                        details: "This field shall indicate which color loop attributes to update (from the values supplied in the " +
                            "other fields, see field descriptions below) before the color loop is started.",
                        xref: "cluster§3.2.8.19.1"
                    },

                    {
                        name: "Action", tag: "field",
                        details: "This field shall indicate the action to take for the color loop.",
                        xref: "cluster§3.2.8.19.2"
                    },
                    {
                        name: "Direction", tag: "field",
                        details: "This field shall indicate the direction for the color loop.",
                        xref: "cluster§3.2.8.19.3"
                    },
                    {
                        name: "Time", tag: "field",
                        details: "This field shall indicate the number of seconds over which to perform a full color loop.",
                        xref: "cluster§3.2.8.19.4"
                    }
                ]
            },

            {
                name: "StopMoveStep", tag: "command",
                details: "This command is provided to allow MoveTo and Step commands to be stopped." +
                    "\n" +
                    "NOTE This automatically provides symmetry to the Level Control cluster." +
                    "\n" +
                    "NOTE The StopMoveStep command has no effect on an active color loop.",
                xref: "cluster§3.2.8.20"
            },

            {
                name: "MoveColorTemperature", tag: "command",
                details: "This command allows the color temperature of the light to be moved at a specified rate.",
                xref: "cluster§3.2.8.21",

                children: [
                    {
                        name: "MoveMode", tag: "field",
                        details: "This field shall indicate the mode of movement, as described in the MoveHue command.",
                        xref: "cluster§3.2.8.21.1"
                    },

                    {
                        name: "Rate", tag: "field",
                        details: "This field shall indicate the rate of movement in steps per second. A step is a change in the color " +
                            "temperature of a device by one unit.",
                        xref: "cluster§3.2.8.21.2"
                    },

                    {
                        name: "ColorTemperatureMinimumMireds", tag: "field",

                        details: "This field shall indicate a lower bound on the ColorTemperatureMireds attribute (≡ an upper bound on " +
                            "the color temperature in kelvins) for the current move operation" +
                            "\n" +
                            "ColorTempPhysicalMinMireds <= ColorTemperatureMinimumMireds field <= ColorTemperatureMireds" +
                            "\n" +
                            "As such if the move operation takes the ColorTemperatureMireds attribute towards the value of the " +
                            "ColorTemperatureMinimumMireds field it shall be clipped so that the above invariant is satisfied. If " +
                            "the ColorTemperatureMinimumMireds field is set to 0, ColorTempPhysicalMinMireds shall be used as the " +
                            "lower bound for the ColorTemperatureMireds attribute.",

                        xref: "cluster§3.2.8.21.3"
                    },

                    {
                        name: "ColorTemperatureMaximumMireds", tag: "field",

                        details: "This field shall indicate an upper bound on the ColorTemperatureMireds attribute (≡ a lower bound on " +
                            "the color temperature in kelvins) for the current move operation" +
                            "\n" +
                            "ColorTemperatureMireds <= ColorTemperatureMaximumMireds field <= ColorTempPhysicalMaxMireds" +
                            "\n" +
                            "As such if the move operation takes the ColorTemperatureMireds attribute towards the value of the " +
                            "ColorTemperatureMaximumMireds field it shall be clipped so that the above invariant is satisfied. If " +
                            "the ColorTemperatureMaximumMireds field is set to 0, ColorTempPhysicalMaxMireds shall be used as the " +
                            "upper bound for the ColorTemperatureMireds attribute.",

                        xref: "cluster§3.2.8.21.4"
                    }
                ]
            },

            {
                name: "StepColorTemperature", tag: "command",
                details: "This command allows the color temperature of the light to be stepped with a specified step size.",
                xref: "cluster§3.2.8.22",

                children: [
                    {
                        name: "StepMode", tag: "field",
                        details: "This field shall indicate the mode of the step to be performed, as described in the StepHue command.",
                        xref: "cluster§3.2.8.22.1"
                    },

                    {
                        name: "StepSize", tag: "field",
                        details: "This field shall indicate the change to be added to (or subtracted from) the current value of the " +
                            "device’s color temperature.",
                        xref: "cluster§3.2.8.22.2"
                    },

                    {
                        name: "TransitionTime", tag: "field",
                        details: "This field shall indicate, in units of 1/10ths of a second, the time that shall be taken to perform " +
                            "the step. A step is a change to the device’s color temperature of a magnitude corresponding to the " +
                            "StepSize field.",
                        xref: "cluster§3.2.8.22.3"
                    },

                    {
                        name: "ColorTemperatureMinimumMireds", tag: "field",

                        details: "This field shall indicate a lower bound on the ColorTemperatureMireds attribute (≡ an upper bound on " +
                            "the color temperature in kelvins) for the current step operation" +
                            "\n" +
                            "ColorTempPhysicalMinMireds <= ColorTemperatureMinimumMireds field <= ColorTemperatureMireds" +
                            "\n" +
                            "As such if the step operation takes the ColorTemperatureMireds attribute towards the value of the " +
                            "ColorTemperatureMinimumMireds field it shall be clipped so that the above invariant is satisfied. If " +
                            "the ColorTemperatureMinimumMireds field is set to 0, ColorTempPhysicalMinMireds shall be used as the " +
                            "lower bound for the ColorTemperatureMireds attribute.",

                        xref: "cluster§3.2.8.22.4"
                    },

                    {
                        name: "ColorTemperatureMaximumMireds", tag: "field",

                        details: "This field shall indicate an upper bound on the ColorTemperatureMireds attribute (≡ a lower bound on " +
                            "the color temperature in kelvins) for the current step operation" +
                            "\n" +
                            "ColorTemperatureMireds ≤ ColorTemperatureMaximumMireds field ≤ ColorTempPhysicalMaxMireds" +
                            "\n" +
                            "As such if the step operation takes the ColorTemperatureMireds attribute towards the value of the " +
                            "ColorTemperatureMaximumMireds field it shall be clipped so that the above invariant is satisfied. If " +
                            "the ColorTemperatureMaximumMireds field is set to 0, ColorTempPhysicalMaxMireds shall be used as the " +
                            "upper bound for the ColorTemperatureMireds attribute.",

                        xref: "cluster§3.2.8.22.5"
                    }
                ]
            },

            {
                name: "OptionsBitmap", tag: "datatype",
                xref: "cluster§3.2.6.2",

                children: [{
                    name: "ExecuteIfOff", tag: "field",
                    description: "Dependency on On/Off cluster",
                    details: "This bit shall indicate if this cluster server instance has a dependency with the On/Off cluster.",
                    xref: "cluster§3.2.6.2.1"
                }]
            },

            {
                name: "UpdateFlagsBitmap", tag: "datatype",
                details: "This data type is derived from map8 and is used in the ColorLoopSet command.",
                xref: "cluster§3.2.6.3",

                children: [
                    {
                        name: "UpdateAction", tag: "field",
                        description: "Device adheres to the associated action field.",

                        details: "This bit shall indicate whether the server adheres to the Action field in order to process the " +
                            "command." +
                            "\n" +
                            "  • 0 = Device shall ignore the Action field." +
                            "\n" +
                            "  • 1 = Device shall adhere to the Action field.",

                        xref: "cluster§3.2.6.3.1"
                    },

                    {
                        name: "UpdateDirection", tag: "field",
                        description: "Device updates the associated direction attribute.",

                        details: "This bit shall indicate whether the device updates the ColorLoopDirection attribute with the " +
                            "Direction field." +
                            "\n" +
                            "  • 0 = Device shall ignore the Direction field." +
                            "\n" +
                            "  • 1 = Device shall update the ColorLoopDirection attribute with the value of the Direction field.",

                        xref: "cluster§3.2.6.3.2"
                    },

                    {
                        name: "UpdateTime", tag: "field",
                        description: "Device updates the associated time attribute.",

                        details: "This bit shall indicate whether the device updates the ColorLoopTime attribute with the Time field." +
                            "\n" +
                            "  • 0 = Device shall ignore the Time field." +
                            "\n" +
                            "  • 1 = Device shall update the value of the ColorLoopTime attribute with the value of the Time " +
                            "    field.",

                        xref: "cluster§3.2.6.3.3"
                    },

                    {
                        name: "UpdateStartHue", tag: "field",
                        description: "Device updates the associated start hue attribute.",

                        details: "This bit shall indicate whether the device updates the ColorLoopStartEnhancedHue attribute with the " +
                            "value of the StartHue field." +
                            "\n" +
                            "  • 0 = Device shall ignore the StartHue field." +
                            "\n" +
                            "  • 1 = Device shall update the value of the ColorLoopStartEnhancedHue attribute with the value of " +
                            "    the StartHue field.",

                        xref: "cluster§3.2.6.3.4"
                    }
                ]
            },

            {
                name: "DriftCompensationEnum", tag: "datatype",
                xref: "cluster§3.2.6.4",

                children: [
                    { name: "None", tag: "field", description: "There is no compensation." },
                    {
                        name: "OtherOrUnknown", tag: "field",
                        description: "The compensation is based on other or unknown mechanism."
                    },
                    {
                        name: "TemperatureMonitoring", tag: "field",
                        description: "The compensation is based on temperature monitoring."
                    },
                    {
                        name: "OpticalLuminanceMonitoringAndFeedback", tag: "field",
                        description: "The compensation is based on optical luminance monitoring and feedback."
                    },
                    {
                        name: "OpticalColorMonitoringAndFeedback", tag: "field",
                        description: "The compensation is based on optical color monitoring and feedback."
                    }
                ]
            },

            {
                name: "ColorModeEnum", tag: "datatype",
                xref: "cluster§3.2.6.5",

                children: [
                    {
                        name: "CurrentHueAndCurrentSaturation", tag: "field",
                        description: "The current hue and saturation attributes determine the color."
                    },
                    {
                        name: "CurrentXAndCurrentY", tag: "field",
                        description: "The current X and Y attributes determine the color."
                    },
                    {
                        name: "ColorTemperatureMireds", tag: "field",
                        description: "The color temperature attribute determines the color."
                    }
                ]
            },

            {
                name: "EnhancedColorModeEnum", tag: "datatype",
                xref: "cluster§3.2.6.6",

                children: [
                    {
                        name: "CurrentHueAndCurrentSaturation", tag: "field",
                        description: "The current hue and saturation attributes determine the color."
                    },
                    {
                        name: "CurrentXAndCurrentY", tag: "field",
                        description: "The current X and Y attributes determine the color."
                    },
                    {
                        name: "ColorTemperatureMireds", tag: "field",
                        description: "The color temperature attribute determines the color."
                    },
                    {
                        name: "EnhancedCurrentHueAndCurrentSaturation", tag: "field",
                        description: "The enhanced current hue and saturation attributes determine the color."
                    }
                ]
            },

            {
                name: "DirectionEnum", tag: "datatype",
                xref: "cluster§3.2.6.7",

                children: [
                    { name: "Shortest", tag: "field", description: "Shortest distance" },
                    { name: "Longest", tag: "field", description: "Longest distance" },
                    { name: "Up", tag: "field", description: "Up" },
                    { name: "Down", tag: "field", description: "Down" }
                ]
            },

            {
                name: "MoveModeEnum", tag: "datatype",
                xref: "cluster§3.2.6.8",
                children: [
                    { name: "Stop", tag: "field", description: "Stop the movement" },
                    { name: "Up", tag: "field", description: "Move in an upwards direction" },
                    { name: "Down", tag: "field", description: "Move in a downwards direction" }
                ]
            },

            {
                name: "StepModeEnum", tag: "datatype",
                xref: "cluster§3.2.6.9",
                children: [
                    { name: "Up", tag: "field", description: "Step in an upwards direction" },
                    { name: "Down", tag: "field", description: "Step in a downwards direction" }
                ]
            },

            {
                name: "ColorLoopActionEnum", tag: "datatype",
                xref: "cluster§3.2.6.10",

                children: [
                    { name: "Deactivate", tag: "field", description: "De-activate the color loop." },
                    {
                        name: "ActivateFromColorLoopStartEnhancedHue", tag: "field",
                        description: "Activate the color loop from the value in the ColorLoopStartEnhancedHue field."
                    },
                    {
                        name: "ActivateFromEnhancedCurrentHue", tag: "field",
                        description: "Activate the color loop from the value of the EnhancedCurrentHue attribute."
                    }
                ]
            },

            {
                name: "ColorLoopDirectionEnum", tag: "datatype",
                xref: "cluster§3.2.6.11",
                children: [
                    { name: "Decrement", tag: "field", description: "Decrement the hue in the color loop." },
                    { name: "Increment", tag: "field", description: "Increment the hue in the color loop." }
                ]
            }
        ]
    }
);
