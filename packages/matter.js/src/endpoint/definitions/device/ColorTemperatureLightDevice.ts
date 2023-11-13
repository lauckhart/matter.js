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

export const ColorTemperatureLightRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
        mandatory: {
            Descriptor: DescriptorServer.set({ deviceTypeList: [{ deviceType: 268, revision: 2 }] }),
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
                .with("ColorTemperature")
                .alter({ attributes: { remainingTime: { optional: false } } })
        }
    }
};

export const ColorTemperatureLightDeviceDefinition = MutableEndpoint({
    name: "ColorTemperatureLight",
    deviceType: 0x10c,
    requirements: ColorTemperatureLightRequirements,

    behaviors: SupportedBehaviors(
        ColorTemperatureLightRequirements.server.mandatory.Descriptor,
        ColorTemperatureLightRequirements.server.mandatory.Identify,
        ColorTemperatureLightRequirements.server.mandatory.Groups,
        ColorTemperatureLightRequirements.server.mandatory.Scenes,
        ColorTemperatureLightRequirements.server.mandatory.OnOff,
        ColorTemperatureLightRequirements.server.mandatory.LevelControl,
        ColorTemperatureLightRequirements.server.mandatory.ColorControl
    )
});

/**
 * A Color Temperature Light is a lighting device that is capable of being switched on or off, the intensity of its
 * light adjusted, and its color temperature adjusted by means of a bound controller device such as a Color Dimmer
 * Switch.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 4.3
 */
export interface ColorTemperatureLightDevice extends Identity<typeof ColorTemperatureLightDeviceDefinition> {}

export const ColorTemperatureLightDevice: ColorTemperatureLightDevice = ColorTemperatureLightDeviceDefinition;
