/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DescriptorServer } from "../../../behavior/server/definitions/DescriptorServer.js";
import { WindowCoveringBehavior } from "../../../behavior/definitions/WindowCoveringBehavior.js";
import { IdentifyBehavior } from "../../../behavior/definitions/IdentifyBehavior.js";
import { GroupsBehavior } from "../../../behavior/definitions/GroupsBehavior.js";
import { ScenesBehavior } from "../../../behavior/definitions/ScenesBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const WindowCoveringControllerRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { Descriptor: DescriptorServer.set({ deviceTypeList: [{ deviceType: 515, revision: 2 }] }) } },

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: {
        mandatory: { WindowCovering: WindowCoveringBehavior },
        optional: { Identify: IdentifyBehavior, Groups: GroupsBehavior, Scenes: ScenesBehavior }
    }
};

export const WindowCoveringControllerDeviceDefinition = MutableEndpoint({
    name: "WindowCoveringController",
    deviceType: 0x203,
    requirements: WindowCoveringControllerRequirements,
    behaviors: SupportedBehaviors(WindowCoveringControllerRequirements.server.mandatory.Descriptor)
});

/**
 * A Window Covering Controller is a device that controls an automatic window covering.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 8.4
 */
export interface WindowCoveringControllerDevice extends Identity<typeof WindowCoveringControllerDeviceDefinition> {}

export const WindowCoveringControllerDevice: WindowCoveringControllerDevice = WindowCoveringControllerDeviceDefinition;
