/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DescriptorServer } from "../../../behavior/server/definitions/DescriptorServer.js";
import { IdentifyServer } from "../../../behavior/server/definitions/IdentifyServer.js";
import { WindowCoveringServer } from "../../../behavior/server/definitions/WindowCoveringServer.js";
import { GroupsServer } from "../../../behavior/server/definitions/GroupsServer.js";
import { ScenesServer } from "../../../behavior/server/definitions/ScenesServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const WindowCoveringRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
        mandatory: {
            Descriptor: DescriptorServer.set({ deviceTypeList: [{ deviceType: 514, revision: 2 }] }),
            Identify: IdentifyServer,
            WindowCovering: WindowCoveringServer
        },
        optional: { Groups: GroupsServer, Scenes: ScenesServer }
    }
};

export const WindowCoveringDeviceDefinition = MutableEndpoint({
    name: "WindowCovering",
    deviceType: 0x202,
    requirements: WindowCoveringRequirements,
    behaviors: SupportedBehaviors(
        WindowCoveringRequirements.server.mandatory.Descriptor,
        WindowCoveringRequirements.server.mandatory.Identify
    )
});

/**
 * This defines conformance to the Window Covering device type.
 *
 * WindowCoveringDevice requires WindowCovering cluster but WindowCovering is not added by default because you must
 * select the features your device supports. You can add manually using WindowCoveringDevice.with().
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 8.3
 */
export interface WindowCoveringDevice extends Identity<typeof WindowCoveringDeviceDefinition> {}

export const WindowCoveringDevice: WindowCoveringDevice = WindowCoveringDeviceDefinition;
