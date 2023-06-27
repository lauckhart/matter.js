/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, WritableAttribute } from "../../cluster/Cluster.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";

export const enum SwitchType {
    Toggle = 0,
    Momentary = 1,
    MultiFunction = 2
};

export const enum SwitchActions {
    On = 0,
    Off = 1,
    Toggle = 2
};

export namespace OnOffSwitchConfigurationCluster {
    /**
     * On/off Switch Configuration
     *
     * Attributes and commands for configuring On/Off switching devices.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `OnOffSwitchConfiguration.with()` and a
     * list of supported features.
     */
    export const Complete = Cluster({
        id: 0x7,
        name: "OnOffSwitchConfiguration",
        revision: 1,
        attributes: {
            switchType: Attribute(0, TlvEnum<SwitchType>()),
            switchActions: WritableAttribute(16, TlvEnum<SwitchActions>())
        }
    });
};