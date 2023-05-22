/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BridgedDeviceBasicInformationCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type StartUpEvent = TypeFromSchema<typeof BridgedDeviceBasicInformationCluster.events.startUp.schema>;
type ShutDownEvent = TypeFromSchema<typeof BridgedDeviceBasicInformationCluster.events.shutDown.schema>;
type LeaveEvent = TypeFromSchema<typeof BridgedDeviceBasicInformationCluster.events.leave.schema>;
type ReachableChangedEvent = TypeFromSchema<typeof BridgedDeviceBasicInformationCluster.events.reachableChanged.schema>;

export namespace BridgeDevice {
    export type State = {
        vendorName?: string;
        vendorId?: number;
        productName?: string;
        nodeLabel?: string;
        hardwareVersion?: number;
        hardwareVersionString?: string;
        softwareVersion?: number;
        softwareVersionString?: string;
        manufacturingDate?: string;
        partNumber?: string;
        productUrl?: string;
        productLabel?: string;
        serialNumber?: string;
        reachable: boolean;
        uniqueId?: string;
    }

    export interface Client {

        onVendorNameChange(value: string, previous: string): void;
        onVendorIdChange(value: number, previous: number): void;
        onProductNameChange(value: string, previous: string): void;
        onNodeLabelChange(value: string, previous: string): void;
        onHardwareVersionChange(value: number, previous: number): void;
        onHardwareVersionStringChange(value: string, previous: string): void;
        onSoftwareVersionChange(value: number, previous: number): void;
        onSoftwareVersionStringChange(value: string, previous: string): void;
        onManufacturingDateChange(value: string, previous: string): void;
        onPartNumberChange(value: string, previous: string): void;
        onProductUrlChange(value: string, previous: string): void;
        onProductLabelChange(value: string, previous: string): void;
        onSerialNumberChange(value: string, previous: string): void;
        onReachableChange(value: boolean, previous: boolean): void;
        onUniqueIdChange(value: string, previous: string): void;
        onStartUp(event: StartUpEvent): Promise<void>
        onShutDown(event: ShutDownEvent): Promise<void>
        onLeave(event: LeaveEvent): Promise<void>
        onReachableChanged(event: ReachableChangedEvent): Promise<void>
    }

    export interface Server {

        onVendorNameChange(value: string, previous: string): void;
        onVendorIdChange(value: number, previous: number): void;
        onProductNameChange(value: string, previous: string): void;
        onNodeLabelChange(value: string, previous: string): void;
        onHardwareVersionChange(value: number, previous: number): void;
        onHardwareVersionStringChange(value: string, previous: string): void;
        onSoftwareVersionChange(value: number, previous: number): void;
        onSoftwareVersionStringChange(value: string, previous: string): void;
        onManufacturingDateChange(value: string, previous: string): void;
        onPartNumberChange(value: string, previous: string): void;
        onProductUrlChange(value: string, previous: string): void;
        onProductLabelChange(value: string, previous: string): void;
        onSerialNumberChange(value: string, previous: string): void;
        onReachableChange(value: boolean, previous: boolean): void;
        onUniqueIdChange(value: string, previous: string): void;
        triggerStartUp(event: StartUpEvent): Promise<void>;
        triggerShutDown(event: ShutDownEvent): Promise<void>;
        triggerLeave(event: LeaveEvent): Promise<void>;
        triggerReachableChanged(event: ReachableChangedEvent): Promise<void>;
    }
}

export const BridgeDevice: ClusterInterface<BridgeDevice.State, BridgeDevice.Client, BridgeDevice.Server> = {
    definition: BridgedDeviceBasicInformationCluster
}
