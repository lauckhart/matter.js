/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DescriptorServer } from "../../../behavior/server/definitions/DescriptorServer.js";
import { IdentifyServer } from "../../../behavior/server/definitions/IdentifyServer.js";
import { SwitchServer } from "../../../behavior/server/definitions/SwitchServer.js";
import { FixedLabelServer } from "../../../behavior/server/definitions/FixedLabelServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const GenericSwitchRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
        mandatory: {
            Descriptor: DescriptorServer.set({ deviceTypeList: [{ deviceType: 15, revision: 1 }] }),
            Identify: IdentifyServer,
            Switch: SwitchServer
        },
        optional: { FixedLabel: FixedLabelServer }
    }
};

export const GenericSwitchDeviceDefinition = MutableEndpoint({
    name: "GenericSwitch",
    deviceType: 0xf,
    requirements: GenericSwitchRequirements,
    behaviors: SupportedBehaviors(
        GenericSwitchRequirements.server.mandatory.Descriptor,
        GenericSwitchRequirements.server.mandatory.Identify
    )
});

/**
 * This defines conformance for the Generic Switch device type.
 *
 * GenericSwitchDevice requires Switch cluster but Switch is not added by default because you must select the features
 * your device supports. You can add manually using GenericSwitchDevice.with().
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 6.6
 */
export interface GenericSwitchDevice extends Identity<typeof GenericSwitchDeviceDefinition> {}

export const GenericSwitchDevice: GenericSwitchDevice = GenericSwitchDeviceDefinition;
