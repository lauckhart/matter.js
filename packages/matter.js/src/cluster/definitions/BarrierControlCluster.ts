/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, OptionalWritableAttribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvUInt8, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * Input to the BarrierControl barrierControlGoToPercent command
 */
export const TlvBarrierControlGoToPercentRequest = TlvObject({ percentOpen: TlvField(0, TlvUInt8) });

/**
 * Barrier Control
 *
 * This cluster provides control of a barrier (garage door).
 */
export const BarrierControlCluster = Cluster({
    id: 0x103,
    name: "BarrierControl",
    revision: 1,
    features: {},

    attributes: {
        barrierMovingState: Attribute(1, TlvUInt8),
        barrierSafetyStatus: Attribute(2, TlvUInt16),
        barrierCapabilities: Attribute(3, TlvUInt8),
        barrierOpenEvents: OptionalWritableAttribute(4, TlvUInt16, { default: 0 }),
        barrierCloseEvents: OptionalWritableAttribute(5, TlvUInt16, { default: 0 }),
        barrierCommandOpenEvents: OptionalWritableAttribute(6, TlvUInt16, { default: 0 }),
        barrierCommandCloseEvents: OptionalWritableAttribute(7, TlvUInt16, { default: 0 }),
        barrierOpenPeriod: OptionalWritableAttribute(8, TlvUInt16),
        barrierClosePeriod: OptionalWritableAttribute(9, TlvUInt16),
        barrierPosition: Attribute(10, TlvUInt8)
    },

    commands: {
        barrierControlGoToPercent: Command(0, TlvBarrierControlGoToPercentRequest, 0, TlvNoResponse),
        barrierControlStop: Command(1, TlvNoArguments, 1, TlvNoResponse)
    }
});
