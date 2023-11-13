/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DescriptorServer } from "../../../behavior/server/definitions/DescriptorServer.js";
import { OnOffBehavior } from "../../../behavior/definitions/OnOffBehavior.js";
import { KeypadInputBehavior } from "../../../behavior/definitions/KeypadInputBehavior.js";
import { ContentLauncherBehavior } from "../../../behavior/definitions/ContentLauncherBehavior.js";
import { ApplicationBasicBehavior } from "../../../behavior/definitions/ApplicationBasicBehavior.js";
import { LevelControlBehavior } from "../../../behavior/definitions/LevelControlBehavior.js";
import { WakeOnLanBehavior } from "../../../behavior/definitions/WakeOnLanBehavior.js";
import { ChannelBehavior } from "../../../behavior/definitions/ChannelBehavior.js";
import { TargetNavigatorBehavior } from "../../../behavior/definitions/TargetNavigatorBehavior.js";
import { MediaPlaybackBehavior } from "../../../behavior/definitions/MediaPlaybackBehavior.js";
import { MediaInputBehavior } from "../../../behavior/definitions/MediaInputBehavior.js";
import { LowPowerBehavior } from "../../../behavior/definitions/LowPowerBehavior.js";
import { AudioOutputBehavior } from "../../../behavior/definitions/AudioOutputBehavior.js";
import { ApplicationLauncherBehavior } from "../../../behavior/definitions/ApplicationLauncherBehavior.js";
import { AccountLoginBehavior } from "../../../behavior/definitions/AccountLoginBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const CastingVideoClientRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { Descriptor: DescriptorServer.set({ deviceTypeList: [{ deviceType: 41, revision: 1 }] }) } },

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: {
        mandatory: {
            OnOff: OnOffBehavior,
            KeypadInput: KeypadInputBehavior,
            ContentLauncher: ContentLauncherBehavior,
            ApplicationBasic: ApplicationBasicBehavior
        },

        optional: {
            LevelControl: LevelControlBehavior,
            WakeOnLan: WakeOnLanBehavior,
            Channel: ChannelBehavior,
            TargetNavigator: TargetNavigatorBehavior,
            MediaPlayback: MediaPlaybackBehavior,
            MediaInput: MediaInputBehavior,
            LowPower: LowPowerBehavior,
            AudioOutput: AudioOutputBehavior,
            ApplicationLauncher: ApplicationLauncherBehavior,
            AccountLogin: AccountLoginBehavior
        }
    }
};

export const CastingVideoClientDeviceDefinition = MutableEndpoint({
    name: "CastingVideoClient",
    deviceType: 0x29,
    requirements: CastingVideoClientRequirements,
    behaviors: SupportedBehaviors(CastingVideoClientRequirements.server.mandatory.Descriptor)
});

/**
 * This defines conformance to the Casting Video Client device type.
 *
 * A Casting Video Client is a client that can launch content on a Casting Video Player, for example, a Smart Speaker
 * or a Content Provider phone app.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 10.6
 */
export interface CastingVideoClientDevice extends Identity<typeof CastingVideoClientDeviceDefinition> {}

export const CastingVideoClientDevice: CastingVideoClientDevice = CastingVideoClientDeviceDefinition;
