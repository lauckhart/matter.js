/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DescriptorServer } from "../../../behavior/server/definitions/DescriptorServer.js";
import { IdentifyBehavior } from "../../../behavior/definitions/IdentifyBehavior.js";
import { OnOffBehavior } from "../../../behavior/definitions/OnOffBehavior.js";
import { GroupsBehavior } from "../../../behavior/definitions/GroupsBehavior.js";
import { ScenesBehavior } from "../../../behavior/definitions/ScenesBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const OnOffLightSwitchRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { Descriptor: DescriptorServer.set({ deviceTypeList: [{ deviceType: 259, revision: 2 }] }) } },

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: {
        mandatory: { Identify: IdentifyBehavior, OnOff: OnOffBehavior },
        optional: { Groups: GroupsBehavior, Scenes: ScenesBehavior }
    }
};

export const OnOffLightSwitchDeviceDefinition = MutableEndpoint({
    name: "OnOffLightSwitch",
    deviceType: 0x103,
    requirements: OnOffLightSwitchRequirements,
    behaviors: SupportedBehaviors(OnOffLightSwitchRequirements.server.mandatory.Descriptor)
});

/**
 * An On/Off Light Switch is a controller device that, when bound to a lighting device such as an On/Off Light, is
 * capable of being used to switch the device on or off.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 6.1
 */
export interface OnOffLightSwitchDevice extends Identity<typeof OnOffLightSwitchDeviceDefinition> {}

export const OnOffLightSwitchDevice: OnOffLightSwitchDevice = OnOffLightSwitchDeviceDefinition;
