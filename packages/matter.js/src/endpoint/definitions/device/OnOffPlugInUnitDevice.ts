/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer } from "../../../behavior/server/definitions/IdentifyServer.js";
import { GroupsServer } from "../../../behavior/server/definitions/GroupsServer.js";
import { ScenesServer } from "../../../behavior/server/definitions/ScenesServer.js";
import { OnOffServer } from "../../../behavior/server/definitions/OnOffServer.js";
import { LevelControlServer } from "../../../behavior/server/definitions/LevelControlServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const OnOffPlugInUnitRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
        mandatory: { Identify: IdentifyServer, Groups: GroupsServer, Scenes: ScenesServer, OnOff: OnOffServer },
        optional: { LevelControl: LevelControlServer }
    }
};

export const OnOffPlugInUnitDeviceDefinition = MutableEndpoint({
    name: "OnOffPlugInUnit",
    deviceType: 0x10a,
    deviceRevision: 2,
    requirements: OnOffPlugInUnitRequirements,

    behaviors: SupportedBehaviors(
        OnOffPlugInUnitRequirements.server.mandatory.Identify,
        OnOffPlugInUnitRequirements.server.mandatory.Groups,
        OnOffPlugInUnitRequirements.server.mandatory.Scenes,
        OnOffPlugInUnitRequirements.server.mandatory.OnOff
    )
});

/**
 * An On/Off Plug-in Unit is a device that is capable of being switched on or off by means of a bound controller device
 * such as an On/Off Light Switch or a Dimmer Switch. The On/Off Plug-in Unit is typically used to control a
 * conventional non-communicating light by switching its mains connection. Other appliances can be controlled this way
 * as well.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 5.1
 */
export interface OnOffPlugInUnitDevice extends Identity<typeof OnOffPlugInUnitDeviceDefinition> {}

export const OnOffPlugInUnitDevice: OnOffPlugInUnitDevice = OnOffPlugInUnitDeviceDefinition;
