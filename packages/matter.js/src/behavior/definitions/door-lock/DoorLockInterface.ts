/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Type.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { DoorLock } from "../../../cluster/definitions/DoorLockCluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../../spec/Specifications.js";

export namespace DoorLockInterface {
    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type LockDoorRequest = TypeFromSchema<typeof DoorLock.TlvLockDoorRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type UnlockDoorRequest = TypeFromSchema<typeof DoorLock.TlvUnlockDoorRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type UnlockWithTimeoutRequest = TypeFromSchema<typeof DoorLock.TlvUnlockWithTimeoutRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type SetUserRequest = TypeFromSchema<typeof DoorLock.TlvSetUserRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type GetUserRequest = TypeFromSchema<typeof DoorLock.TlvGetUserRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type GetUserResponse = TypeFromSchema<typeof DoorLock.TlvGetUserResponse>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type ClearUserRequest = TypeFromSchema<typeof DoorLock.TlvClearUserRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type SetCredentialRequest = TypeFromSchema<typeof DoorLock.TlvSetCredentialRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type SetCredentialResponse = TypeFromSchema<typeof DoorLock.TlvSetCredentialResponse>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type GetCredentialStatusRequest = TypeFromSchema<typeof DoorLock.TlvGetCredentialStatusRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type GetCredentialStatusResponse = TypeFromSchema<typeof DoorLock.TlvGetCredentialStatusResponse>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type ClearCredentialRequest = TypeFromSchema<typeof DoorLock.TlvClearCredentialRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type SetWeekDayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvSetWeekDayScheduleRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type GetWeekDayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvGetWeekDayScheduleRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type GetWeekDayScheduleResponse = TypeFromSchema<typeof DoorLock.TlvGetWeekDayScheduleResponse>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type ClearWeekDayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvClearWeekDayScheduleRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type SetYearDayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvSetYearDayScheduleRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type GetYearDayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvGetYearDayScheduleRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type GetYearDayScheduleResponse = TypeFromSchema<typeof DoorLock.TlvGetYearDayScheduleResponse>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type ClearYearDayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvClearYearDayScheduleRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type SetHolidayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvSetHolidayScheduleRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type GetHolidayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvGetHolidayScheduleRequest>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type GetHolidayScheduleResponse = TypeFromSchema<typeof DoorLock.TlvGetHolidayScheduleResponse>;

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
     */
    export type ClearHolidayScheduleRequest = TypeFromSchema<typeof DoorLock.TlvClearHolidayScheduleRequest>;

    export interface Base {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        lockDoor(request: LockDoorRequest): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        unlockDoor(request: UnlockDoorRequest): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        unlockWithTimeout(request: UnlockWithTimeoutRequest): MaybePromise<void>;
    }

    export interface Logging {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        getLogRecord(): MaybePromise<void>;
    }

    export interface User {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        setUser(request: SetUserRequest): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        getUser(request: GetUserRequest): MaybePromise<GetUserResponse>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        clearUser(request: ClearUserRequest): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        setCredential(request: SetCredentialRequest): MaybePromise<SetCredentialResponse>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        getCredentialStatus(request: GetCredentialStatusRequest): MaybePromise<GetCredentialStatusResponse>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        clearCredential(request: ClearCredentialRequest): MaybePromise<void>;
    }

    export interface WeekDayAccessSchedules {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        setWeekDaySchedule(request: SetWeekDayScheduleRequest): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        getWeekDaySchedule(request: GetWeekDayScheduleRequest): MaybePromise<GetWeekDayScheduleResponse>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        clearWeekDaySchedule(request: ClearWeekDayScheduleRequest): MaybePromise<void>;
    }

    export interface YearDayAccessSchedules {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        setYearDaySchedule(request: SetYearDayScheduleRequest): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        getYearDaySchedule(request: GetYearDayScheduleRequest): MaybePromise<GetYearDayScheduleResponse>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        clearYearDaySchedule(request: ClearYearDayScheduleRequest): MaybePromise<void>;
    }

    export interface HolidaySchedules {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        setHolidaySchedule(request: SetHolidayScheduleRequest): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        getHolidaySchedule(request: GetHolidayScheduleRequest): MaybePromise<GetHolidayScheduleResponse>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        clearHolidaySchedule(request: ClearHolidayScheduleRequest): MaybePromise<void>;
    }

    export interface PinCredentialNotUser {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        setPinCode(): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        getPinCode(): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        clearPinCode(): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        clearAllPinCodes(): MaybePromise<void>;
    }

    export interface PinCredentialAndRfidCredentialAndFingerCredentialsNotUser {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        setUserStatus(): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        getUserStatus(): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        setUserType(): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        getUserType(): MaybePromise<void>;
    }

    export interface RfidCredentialNotUser {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        setRfidCode(): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        getRfidCode(): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        clearRfidCode(): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.2.4
         */
        clearAllRfidCodes(): MaybePromise<void>;
    }
}

export type DoorLockInterface = {
    components: [
        { flags: {}, methods: DoorLockInterface.Base },
        { flags: { logging: true }, methods: DoorLockInterface.Logging },
        { flags: { user: true }, methods: DoorLockInterface.User },
        { flags: { weekDayAccessSchedules: true }, methods: DoorLockInterface.WeekDayAccessSchedules },
        { flags: { yearDayAccessSchedules: true }, methods: DoorLockInterface.YearDayAccessSchedules },
        { flags: { holidaySchedules: true }, methods: DoorLockInterface.HolidaySchedules },
        { flags: { pinCredential: true, user: false }, methods: DoorLockInterface.PinCredentialNotUser },
        {
            flags: { pinCredential: true, rfidCredential: true, fingerCredentials: true, user: false },
            methods: DoorLockInterface.PinCredentialAndRfidCredentialAndFingerCredentialsNotUser
        },
        { flags: { rfidCredential: true, user: false }, methods: DoorLockInterface.RfidCredentialNotUser }
    ]
};
