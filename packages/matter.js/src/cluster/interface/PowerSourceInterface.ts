/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerSourceCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type WiredFaultChangeEvent = TypeFromSchema<typeof PowerSourceCluster.events.wiredFaultChange.schema>;
type BatFaultChangeEvent = TypeFromSchema<typeof PowerSourceCluster.events.batFaultChange.schema>;
type BatChargeFaultChangeEvent = TypeFromSchema<typeof PowerSourceCluster.events.batChargeFaultChange.schema>;

export namespace PowerSource {
    export type State = {
        status: number;
        order: number;
        description: string;
        wiredAssessedInputVoltage?: number | undefined;
        wiredAssessedInputFrequency?: number | undefined;
        wiredCurrentType?: number;
        wiredAssessedCurrent?: number | undefined;
        wiredNominalVoltage?: number;
        wiredMaximumCurrent?: number;
        wiredPresent?: boolean;
        activeWiredFaults?: number[];
        batVoltage?: number | undefined;
        batPercentRemaining?: number | undefined;
        batTimeRemaining?: number | undefined;
        batChargeLevel?: number;
        batReplacementNeeded?: boolean;
        batReplaceability?: number;
        batPresent?: boolean;
        activeBatFaults?: number[];
        batReplacementDescription?: string;
        batCommonDesignation?: number;
        batAnsidesignation?: string;
        batIecdesignation?: string;
        batApprovedChemistry?: number;
        batCapacity?: number;
        batQuantity?: number;
        batChargeState?: number;
        batTimeToFullCharge?: number | undefined;
        batFunctionalWhileCharging?: boolean;
        batChargingCurrent?: number | undefined;
        activeBatChargeFaults?: number[];
    }

    export interface Client {

        onStatusChange(value: number, previous: number): void;
        onOrderChange(value: number, previous: number): void;
        onDescriptionChange(value: string, previous: string): void;
        onWiredAssessedInputVoltageChange(value: number | undefined, previous: number | undefined): void;
        onWiredAssessedInputFrequencyChange(value: number | undefined, previous: number | undefined): void;
        onWiredCurrentTypeChange(value: number, previous: number): void;
        onWiredAssessedCurrentChange(value: number | undefined, previous: number | undefined): void;
        onWiredNominalVoltageChange(value: number, previous: number): void;
        onWiredMaximumCurrentChange(value: number, previous: number): void;
        onWiredPresentChange(value: boolean, previous: boolean): void;
        onActiveWiredFaultsChange(value: number[], previous: number[]): void;
        onBatVoltageChange(value: number | undefined, previous: number | undefined): void;
        onBatPercentRemainingChange(value: number | undefined, previous: number | undefined): void;
        onBatTimeRemainingChange(value: number | undefined, previous: number | undefined): void;
        onBatChargeLevelChange(value: number, previous: number): void;
        onBatReplacementNeededChange(value: boolean, previous: boolean): void;
        onBatReplaceabilityChange(value: number, previous: number): void;
        onBatPresentChange(value: boolean, previous: boolean): void;
        onActiveBatFaultsChange(value: number[], previous: number[]): void;
        onBatReplacementDescriptionChange(value: string, previous: string): void;
        onBatCommonDesignationChange(value: number, previous: number): void;
        onBatAnsidesignationChange(value: string, previous: string): void;
        onBatIecdesignationChange(value: string, previous: string): void;
        onBatApprovedChemistryChange(value: number, previous: number): void;
        onBatCapacityChange(value: number, previous: number): void;
        onBatQuantityChange(value: number, previous: number): void;
        onBatChargeStateChange(value: number, previous: number): void;
        onBatTimeToFullChargeChange(value: number | undefined, previous: number | undefined): void;
        onBatFunctionalWhileChargingChange(value: boolean, previous: boolean): void;
        onBatChargingCurrentChange(value: number | undefined, previous: number | undefined): void;
        onActiveBatChargeFaultsChange(value: number[], previous: number[]): void;
        onWiredFaultChange(event: WiredFaultChangeEvent): Promise<void>
        onBatFaultChange(event: BatFaultChangeEvent): Promise<void>
        onBatChargeFaultChange(event: BatChargeFaultChangeEvent): Promise<void>
    }

    export interface Server {

        onStatusChange(value: number, previous: number): void;
        onOrderChange(value: number, previous: number): void;
        onDescriptionChange(value: string, previous: string): void;
        onWiredAssessedInputVoltageChange(value: number | undefined, previous: number | undefined): void;
        onWiredAssessedInputFrequencyChange(value: number | undefined, previous: number | undefined): void;
        onWiredCurrentTypeChange(value: number, previous: number): void;
        onWiredAssessedCurrentChange(value: number | undefined, previous: number | undefined): void;
        onWiredNominalVoltageChange(value: number, previous: number): void;
        onWiredMaximumCurrentChange(value: number, previous: number): void;
        onWiredPresentChange(value: boolean, previous: boolean): void;
        onActiveWiredFaultsChange(value: number[], previous: number[]): void;
        onBatVoltageChange(value: number | undefined, previous: number | undefined): void;
        onBatPercentRemainingChange(value: number | undefined, previous: number | undefined): void;
        onBatTimeRemainingChange(value: number | undefined, previous: number | undefined): void;
        onBatChargeLevelChange(value: number, previous: number): void;
        onBatReplacementNeededChange(value: boolean, previous: boolean): void;
        onBatReplaceabilityChange(value: number, previous: number): void;
        onBatPresentChange(value: boolean, previous: boolean): void;
        onActiveBatFaultsChange(value: number[], previous: number[]): void;
        onBatReplacementDescriptionChange(value: string, previous: string): void;
        onBatCommonDesignationChange(value: number, previous: number): void;
        onBatAnsidesignationChange(value: string, previous: string): void;
        onBatIecdesignationChange(value: string, previous: string): void;
        onBatApprovedChemistryChange(value: number, previous: number): void;
        onBatCapacityChange(value: number, previous: number): void;
        onBatQuantityChange(value: number, previous: number): void;
        onBatChargeStateChange(value: number, previous: number): void;
        onBatTimeToFullChargeChange(value: number | undefined, previous: number | undefined): void;
        onBatFunctionalWhileChargingChange(value: boolean, previous: boolean): void;
        onBatChargingCurrentChange(value: number | undefined, previous: number | undefined): void;
        onActiveBatChargeFaultsChange(value: number[], previous: number[]): void;
        triggerWiredFaultChange(event: WiredFaultChangeEvent): Promise<void>;
        triggerBatFaultChange(event: BatFaultChangeEvent): Promise<void>;
        triggerBatChargeFaultChange(event: BatChargeFaultChangeEvent): Promise<void>;
    }
}

export const PowerSource: ClusterInterface<PowerSource.State, PowerSource.Client, PowerSource.Server> = {
    definition: PowerSourceCluster
}
