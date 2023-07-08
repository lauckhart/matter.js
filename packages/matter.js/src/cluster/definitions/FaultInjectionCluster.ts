/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvEnum, TlvUInt32, TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";

export const enum TlvFaultType {
    Unspecified = 0,
    SystemFault = 1,
    InetFault = 2,
    ChipFault = 3,
    CertFault = 4
};

export const TlvFailAtFaultRequest = TlvObject({
    type: TlvField(0, TlvEnum<TlvFaultType>()),
    id: TlvField(1, TlvUInt32),
    numCallsToSkip: TlvField(2, TlvUInt32),
    numCallsToFail: TlvField(3, TlvUInt32),
    takeMutex: TlvField(4, TlvBoolean)
});

export const TlvFailRandomlyAtFaultRequest = TlvObject({
    type: TlvField(0, TlvEnum<TlvFaultType>()),
    id: TlvField(1, TlvUInt32),
    percentage: TlvField(2, TlvUInt8)
});

/**
 * Standard FaultInjection cluster properties.
 */
export const FaultInjectionMetadata = ClusterMetadata({ id: 0xfff1fc06, name: "FaultInjection", revision: 1 });

/**
 * A FaultInjectionCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({ commands: {
    failAtFault: Command(0, TlvFailAtFaultRequest, 0, TlvNoResponse),
    failRandomlyAtFault: Command(1, TlvFailRandomlyAtFaultRequest, 1, TlvNoResponse)
} });

export type FaultInjectionCluster<T extends TypeFromPartialBitSchema<typeof FaultInjectionMetadata.features>> = 
    typeof FaultInjectionMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function FaultInjectionCluster<T extends (keyof typeof FaultInjectionMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...FaultInjectionMetadata,
        supportedFeatures: BitFlags(FaultInjectionMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as FaultInjectionCluster<BitFlags<typeof FaultInjectionMetadata.features, T>>;
};