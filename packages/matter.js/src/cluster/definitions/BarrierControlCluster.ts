/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GlobalAttributes, Attribute, OptionalWritableAttribute, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvUInt8, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * Barrier Control
 *
 * This cluster provides control of a barrier (garage door).
 *
 * Use this factory function to create a BarrierControl cluster.
 */
export function BarrierControlCluster() {
    const cluster = Cluster({ ...BarrierControlCluster.Metadata, ...BarrierControlCluster.BaseComponent });
    return cluster as unknown as BarrierControlCluster.Type;
}

/**
 * Input to the BarrierControl barrierControlGoToPercent command
 */
export const TlvBarrierControlGoToPercentRequest = TlvObject({ percentOpen: TlvField(0, TlvUInt8) });

export namespace BarrierControlCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * BarrierControl cluster metadata.
     */
    export const Metadata = ClusterMetadata({ id: 0x103, name: "BarrierControl", revision: 1, features: {} });

    /**
     * A BarrierControlCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
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

    /**
     * This cluster supports all BarrierControl features.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes },
        commands: { ...BaseComponent.commands }
    });
}
