/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Attribute, WritableAttribute } from "../../cluster/Cluster.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

export const enum TlvSwitchType {
    Toggle = 0,
    Momentary = 1,
    MultiFunction = 2
};

export const enum TlvSwitchActions {
    On = 0,
    Off = 1,
    Toggle = 2
};

export namespace OnOffSwitchConfigurationCluster {
    export const id = 0x7;
    export const name = "OnOffSwitchConfiguration";
    export const revision = 1;
    const Base = { attributes: {
        switchType: Attribute(0, TlvEnum<TlvSwitchType>()),
        switchActions: WritableAttribute(16, TlvEnum<TlvSwitchActions>())
    } };
    export const Complete = BuildCluster({ id, name, revision, elements: [ Base ] });
};