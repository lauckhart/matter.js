/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Attribute, Command, TlvNoResponse, OptionalCommand } from "../../cluster/Cluster.js";
import { TlvUInt32, TlvUInt16, TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";

export const TlvMonitoringRegistration = TlvObject({ clientNodeId: TlvField(1, TlvUInt64), iCid: TlvField(2, TlvUInt64) });

export const TlvRegisterClientMonitoringRequest = TlvObject({
    clientNodeId: TlvField(0, TlvUInt64),
    iCid: TlvField(1, TlvUInt64)
});

export const TlvUnregisterClientMonitoringRequest = TlvObject({
    clientNodeId: TlvField(0, TlvUInt64),
    iCid: TlvField(1, TlvUInt64)
});

/**
 * Standard ClientMonitoring cluster properties.
 */
export const ClientMonitoringMetadata = ClusterMetadata({ id: 0x1046, name: "ClientMonitoring", revision: 1 });

/**
 * A ClientMonitoringCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        idleModeInterval: Attribute(0, TlvUInt32, { default: 18 }),
        activeModeInterval: Attribute(1, TlvUInt32, { default: 18 }),
        activeModeThreshold: Attribute(2, TlvUInt16),
        expectedClients: Attribute(3, TlvArray(TlvMonitoringRegistration), { default: [] })
    },

    commands: {
        registerClientMonitoring: Command(0, TlvRegisterClientMonitoringRequest, 0, TlvNoResponse),
        unregisterClientMonitoring: Command(1, TlvUnregisterClientMonitoringRequest, 1, TlvNoResponse),
        stayAwakeRequest: OptionalCommand(2, TlvNoArguments, 2, TlvNoResponse)
    }
});

export type ClientMonitoringCluster<T extends TypeFromPartialBitSchema<typeof ClientMonitoringMetadata.features>> = 
    typeof ClientMonitoringMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function ClientMonitoringCluster<T extends (keyof typeof ClientMonitoringMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...ClientMonitoringMetadata,
        supportedFeatures: BitFlags(ClientMonitoringMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as ClientMonitoringCluster<BitFlags<typeof ClientMonitoringMetadata.features, T>>;
};