/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyBehavior } from "../../../behavior/definitions/IdentifyBehavior.js";
import { OnOffBehavior } from "../../../behavior/definitions/OnOffBehavior.js";
import { LevelControlBehavior } from "../../../behavior/definitions/LevelControlBehavior.js";
import { ColorControlBehavior } from "../../../behavior/definitions/ColorControlBehavior.js";
import { GroupsBehavior } from "../../../behavior/definitions/GroupsBehavior.js";
import { ScenesBehavior } from "../../../behavior/definitions/ScenesBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const ColorDimmerSwitchRequirements = {
    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: {
        mandatory: {
            Identify: IdentifyBehavior,
            OnOff: OnOffBehavior,
            LevelControl: LevelControlBehavior,
            ColorControl: ColorControlBehavior
        },

        optional: { Groups: GroupsBehavior, Scenes: ScenesBehavior }
    }
};

export const ColorDimmerSwitchDeviceDefinition = MutableEndpoint({
    name: "ColorDimmerSwitch",
    deviceType: 0x105,
    deviceRevision: 2,
    requirements: ColorDimmerSwitchRequirements,
    behaviors: SupportedBehaviors()
});

/**
 * A Color Dimmer Switch is a controller device that, when bound to a lighting device such as an Extended Color Light,
 * is capable of being used to adjust the color of the light being emitted.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 6.3
 */
export interface ColorDimmerSwitchDevice extends Identity<typeof ColorDimmerSwitchDeviceDefinition> {}

export const ColorDimmerSwitchDevice: ColorDimmerSwitchDevice = ColorDimmerSwitchDeviceDefinition;
