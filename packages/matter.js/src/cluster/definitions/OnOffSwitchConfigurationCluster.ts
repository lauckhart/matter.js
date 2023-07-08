/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Attribute, WritableAttribute } from "../../cluster/Cluster.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";

/**
 * On/off Switch Configuration
 *
 * Attributes and commands for configuring On/Off switching devices.
 *
 * This function creates a OnOffSwitchConfiguration cluster.
 */
export function OnOffSwitchConfigurationCluster() {
    const cluster = { ...OnOffSwitchConfigurationCluster.Metadata, ...OnOffSwitchConfigurationCluster.BaseComponent };
    return cluster as unknown as OnOffSwitchConfigurationCluster.Type;
};

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
    export type Type = 
        typeof Metadata
        & typeof BaseComponent;

    /**
     * OnOffSwitchConfiguration cluster metadata.
     */
    export const Metadata = ClusterMetadata({ id: 0x7, name: "OnOffSwitchConfiguration", revision: 1 });

    /**
     * A OnOffSwitchConfigurationCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({ attributes: {
        switchType: Attribute(0, TlvEnum<TlvSwitchType>()),
        switchActions: WritableAttribute(16, TlvEnum<TlvSwitchActions>())
    } });

    /**
     * This cluster supports all OnOffSwitchConfiguration features.
     */
    export const Complete = { ...Metadata, attributes: { ...BaseComponent.attributes } };
};
