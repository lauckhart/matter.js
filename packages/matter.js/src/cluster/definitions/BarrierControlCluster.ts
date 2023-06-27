/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, OptionalWritableAttribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvEnum, TlvBitmap, TlvUInt16, TlvUInt8 } from "../../tlv/TlvNumber.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

export const enum BarrierMovingState {};

export const BarrierSafetyStatus = TlvBitmap(TlvUInt16, {});

export const BarrierCapabilities = TlvBitmap(TlvUInt8, {});

export const BarrierControlGoToPercentRequest = TlvObject({ PercentOpen: TlvField(0, TlvUInt8) });

export namespace BarrierControlCluster {
    /**
     * Barrier Control
     *
     * This cluster provides control of a barrier (garage door).
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `BarrierControl.with()` and a list of
     * supported features.
     */
    export const Complete = Cluster({
        id: 0x103,
        name: "BarrierControl",
        revision: 1,

        attributes: {
            barrierMovingState: Attribute(1, TlvEnum<BarrierMovingState>()),
            barrierSafetyStatus: Attribute(2, BarrierSafetyStatus),
            barrierCapabilities: Attribute(3, BarrierCapabilities),
            barrierOpenEvents: OptionalWritableAttribute(4, TlvUInt16),
            barrierCloseEvents: OptionalWritableAttribute(5, TlvUInt16),
            barrierCommandOpenEvents: OptionalWritableAttribute(6, TlvUInt16),
            barrierCommandCloseEvents: OptionalWritableAttribute(7, TlvUInt16),
            barrierOpenPeriod: OptionalWritableAttribute(8, TlvUInt16),
            barrierClosePeriod: OptionalWritableAttribute(9, TlvUInt16),
            barrierPosition: Attribute(10, TlvUInt8)
        },

        commands: {
            barrierControlGoToPercent: Command(0, BarrierControlGoToPercentRequest, 0, TlvNoResponse),
            barrierControlStop: Command(1, TlvNoArguments, 1, TlvNoResponse)
        }
    });
};