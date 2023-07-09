/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GlobalAttributes, Attribute, WritableAttribute, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";

/**
 * On/off Switch Configuration
 *
 * Attributes and commands for configuring On/Off switching devices.
 *
 * This function creates an OnOffSwitchConfiguration cluster.
 */
export function OnOffSwitchConfigurationCluster() {
    const cluster = Cluster({
        ...OnOffSwitchConfigurationCluster.Metadata,
        ...OnOffSwitchConfigurationCluster.BaseComponent
    });
    return cluster as unknown as OnOffSwitchConfigurationCluster.Type;
}

export const enum SwitchType {
    Toggle = 0,
    Momentary = 1,
    MultiFunction = 2
}

export const enum SwitchActions {
    On = 0,
    Off = 1,
    Toggle = 2
}

export namespace OnOffSwitchConfigurationCluster {
    export type Type = 
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * OnOffSwitchConfiguration cluster metadata.
     */
    export const Metadata = ClusterMetadata({ id: 0x7, name: "OnOffSwitchConfiguration", revision: 1, features: {} });

    /**
     * A OnOffSwitchConfigurationCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({ attributes: {
        switchType: Attribute(0, TlvEnum<SwitchType>()),
        switchActions: WritableAttribute(16, TlvEnum<SwitchActions>(), { default: 0 })
    } });

    /**
     * This cluster supports all OnOffSwitchConfiguration features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
}
