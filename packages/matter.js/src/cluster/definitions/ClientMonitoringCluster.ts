/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GlobalAttributes, Attribute, Command, TlvNoResponse, OptionalCommand, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvUInt32, TlvUInt16, TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNodeId } from "../../datatype/NodeId.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * Client Monitoring
 *
 * Client Monitoring allows for ensuring that listed clients meet the required monitoring conditions on the server.
 *
 * Use this factory function to create a ClientMonitoring cluster.
 */
export function ClientMonitoringCluster() {
    const cluster = Cluster({ ...ClientMonitoringCluster.Metadata, ...ClientMonitoringCluster.BaseComponent });
    return cluster as unknown as ClientMonitoringCluster.Type;
}

export const TlvMonitoringRegistration = TlvObject({ clientNodeId: TlvField(1, TlvNodeId), iCid: TlvField(2, TlvUInt64) });

/**
 * Input to the ClientMonitoring registerClientMonitoring command
 */
export const TlvRegisterClientMonitoringRequest = TlvObject({
    clientNodeId: TlvField(0, TlvNodeId),
    iCid: TlvField(1, TlvUInt64)
});

/**
 * Input to the ClientMonitoring unregisterClientMonitoring command
 */
export const TlvUnregisterClientMonitoringRequest = TlvObject({
    clientNodeId: TlvField(0, TlvNodeId),
    iCid: TlvField(1, TlvUInt64)
});

export namespace ClientMonitoringCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * ClientMonitoring cluster metadata.
     */
    export const Metadata = ClusterMetadata({ id: 0x1046, name: "ClientMonitoring", revision: 1, features: {} });

    /**
     * A ClientMonitoringCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            idleModeInterval: Attribute(0, TlvUInt32, { default: 18 }),
            activeModeInterval: Attribute(1, TlvUInt32, { default: 18 }),
            activeModeThreshold: Attribute(2, TlvUInt16, { default: 0 }),
            expectedClients: Attribute(3, TlvArray(TlvMonitoringRegistration), { default: [] })
        },

        commands: {
            registerClientMonitoring: Command(0, TlvRegisterClientMonitoringRequest, 0, TlvNoResponse),
            unregisterClientMonitoring: Command(1, TlvUnregisterClientMonitoringRequest, 1, TlvNoResponse),
            stayAwakeRequest: OptionalCommand(2, TlvNoArguments, 2, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all ClientMonitoring features.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes },
        commands: { ...BaseComponent.commands }
    });
}
