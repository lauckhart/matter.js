/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Attribute, WritableAttribute } from "../../cluster/Cluster.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";

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

/**
 * Standard OnOffSwitchConfiguration cluster properties.
 */
export const OnOffSwitchConfigurationMetadata = ClusterMetadata({ id: 0x7, name: "OnOffSwitchConfiguration", revision: 1 });

/**
 * A OnOffSwitchConfigurationCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({ attributes: {
    switchType: Attribute(0, TlvEnum<TlvSwitchType>()),
    switchActions: WritableAttribute(16, TlvEnum<TlvSwitchActions>())
} });

export type OnOffSwitchConfigurationCluster<T extends TypeFromPartialBitSchema<typeof OnOffSwitchConfigurationMetadata.features>> = 
    typeof OnOffSwitchConfigurationMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function OnOffSwitchConfigurationCluster<T extends (keyof typeof OnOffSwitchConfigurationMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...OnOffSwitchConfigurationMetadata,
        supportedFeatures: BitFlags(OnOffSwitchConfigurationMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as OnOffSwitchConfigurationCluster<BitFlags<typeof OnOffSwitchConfigurationMetadata.features, T>>;
};