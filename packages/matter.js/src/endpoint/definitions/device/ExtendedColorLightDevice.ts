/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DescriptorServer } from "../../../behavior/server/definitions/DescriptorServer.js";
import { IdentifyServer } from "../../../behavior/server/definitions/IdentifyServer.js";
import { GroupsServer } from "../../../behavior/server/definitions/GroupsServer.js";
import { ScenesServer } from "../../../behavior/server/definitions/ScenesServer.js";
import { OnOffServer } from "../../../behavior/server/definitions/OnOffServer.js";
import { LevelControlServer } from "../../../behavior/server/definitions/LevelControlServer.js";
import { ColorControlServer } from "../../../behavior/server/definitions/ColorControlServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const ExtendedColorLightRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
        mandatory: {
            Descriptor: DescriptorServer.set({ deviceTypeList: [{ deviceType: 269, revision: 2 }] }),
            Identify: IdentifyServer.alter({ commands: { triggerEffect: { optional: false } } }),
            Groups: GroupsServer,

            Scenes: ScenesServer
                .alter({
                    commands: {
                        enhancedAddScene: { optional: false },
                        enhancedViewScene: { optional: false },
                        copyScene: { optional: false }
                    }
                }),

            OnOff: OnOffServer.with("LevelControlForLighting"),

            LevelControl: LevelControlServer
                .with("OnOff", "Lighting")
                .alter({
                    attributes: {
                        currentLevel: { min: 1, max: 254 },
                        minLevel: { default: 1, min: 1, max: 2 },
                        maxLevel: { default: 254, min: 254, max: 255 }
                    }
                }),

            ColorControl: ColorControlServer
                .with("Xy", "ColorTemperature")
                .alter({ attributes: { remainingTime: { optional: false } } })
        }
    }
};

export const ExtendedColorLightDeviceDefinition = MutableEndpoint({
    name: "ExtendedColorLight",
    deviceType: 0x10d,
    requirements: ExtendedColorLightRequirements,

    behaviors: SupportedBehaviors(
        ExtendedColorLightRequirements.server.mandatory.Descriptor,
        ExtendedColorLightRequirements.server.mandatory.Identify,
        ExtendedColorLightRequirements.server.mandatory.Groups,
        ExtendedColorLightRequirements.server.mandatory.Scenes,
        ExtendedColorLightRequirements.server.mandatory.OnOff,
        ExtendedColorLightRequirements.server.mandatory.LevelControl,
        ExtendedColorLightRequirements.server.mandatory.ColorControl
    )
});

/**
 * An Extended Color Light is a lighting device that is capable of being switched on or off, the intensity of its light
 * adjusted, and its color adjusted by means of a bound controller device such as a Color Dimmer Switch or Control
 * Bridge. The device supports adjustment of color by means of hue/saturation, enhanced hue, color looping, XY
 * coordinates, and color temperature. In addition, the extended color light is also capable of being switched by means
 * of a bound occupancy sensor.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 4.4
 */
export interface ExtendedColorLightDevice extends Identity<typeof ExtendedColorLightDeviceDefinition> {}

export const ExtendedColorLightDevice: ExtendedColorLightDevice = ExtendedColorLightDeviceDefinition;
