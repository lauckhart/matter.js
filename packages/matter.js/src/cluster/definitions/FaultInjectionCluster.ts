/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GlobalAttributes, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvEnum, TlvUInt32, TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";

/**
 * Fault Injection
 *
 * The Fault Injection Cluster provide a means for a test harness to configure faults(for example triggering a fault in
 * the system).
 *
 * This function creates a FaultInjection cluster.
 */
export function FaultInjectionCluster() {
    const cluster = Cluster({ ...FaultInjectionCluster.Metadata, ...FaultInjectionCluster.BaseComponent });
    return cluster as unknown as FaultInjectionCluster.Type;
}

export const enum FaultType {
    Unspecified = 0,
    SystemFault = 1,
    InetFault = 2,
    ChipFault = 3,
    CertFault = 4
}

export const TlvFailAtFaultRequest = TlvObject({
    type: TlvField(0, TlvEnum<FaultType>()),
    id: TlvField(1, TlvUInt32),
    numCallsToSkip: TlvField(2, TlvUInt32),
    numCallsToFail: TlvField(3, TlvUInt32),
    takeMutex: TlvField(4, TlvBoolean)
});

export const TlvFailRandomlyAtFaultRequest = TlvObject({
    type: TlvField(0, TlvEnum<FaultType>()),
    id: TlvField(1, TlvUInt32),
    percentage: TlvField(2, TlvUInt8)
});

export namespace FaultInjectionCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * FaultInjection cluster metadata.
     */
    export const Metadata = ClusterMetadata({ id: 0xfff1fc06, name: "FaultInjection", revision: 1, features: {} });

    /**
     * A FaultInjectionCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        commands: {
            failAtFault: Command(0, TlvFailAtFaultRequest, 0, TlvNoResponse),
            failRandomlyAtFault: Command(1, TlvFailRandomlyAtFaultRequest, 1, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all FaultInjection features.
     */
    export const Complete = Cluster({ ...Metadata, commands: { ...BaseComponent.commands } });
}
