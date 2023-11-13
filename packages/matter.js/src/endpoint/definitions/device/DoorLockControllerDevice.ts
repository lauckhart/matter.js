/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DescriptorServer } from "../../../behavior/server/definitions/DescriptorServer.js";
import { TimeSyncServer } from "../../../behavior/server/definitions/TimeSyncServer.js";
import { DoorLockBehavior } from "../../../behavior/definitions/DoorLockBehavior.js";
import { IdentifyBehavior } from "../../../behavior/definitions/IdentifyBehavior.js";
import { GroupsBehavior } from "../../../behavior/definitions/GroupsBehavior.js";
import { ScenesBehavior } from "../../../behavior/definitions/ScenesBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const DoorLockControllerRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
        mandatory: { Descriptor: DescriptorServer.set({ deviceTypeList: [{ deviceType: 11, revision: 2 }] }) },
        optional: { TimeSync: TimeSyncServer }
    },

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: {
        mandatory: { DoorLock: DoorLockBehavior },
        optional: { Identify: IdentifyBehavior, Groups: GroupsBehavior, Scenes: ScenesBehavior }
    }
};

export const DoorLockControllerDeviceDefinition = MutableEndpoint({
    name: "DoorLockController",
    deviceType: 0xb,
    requirements: DoorLockControllerRequirements,
    behaviors: SupportedBehaviors(DoorLockControllerRequirements.server.mandatory.Descriptor)
});

/**
 * A Door Lock Controller is a device capable of controlling a door lock.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 8.2
 */
export interface DoorLockControllerDevice extends Identity<typeof DoorLockControllerDeviceDefinition> {}

export const DoorLockControllerDevice: DoorLockControllerDevice = DoorLockControllerDeviceDefinition;
