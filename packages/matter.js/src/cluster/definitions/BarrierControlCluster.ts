/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Attribute, OptionalWritableAttribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvUInt8, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";

export const TlvBarrierControlGoToPercentRequest = TlvObject({ percentOpen: TlvField(0, TlvUInt8) });

/**
 * Standard BarrierControl cluster properties.
 */
export const BarrierControlMetadata = ClusterMetadata({ id: 0x103, name: "BarrierControl", revision: 1 });

/**
 * A BarrierControlCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        barrierMovingState: Attribute(1, TlvUInt8),
        barrierSafetyStatus: Attribute(2, TlvUInt16),
        barrierCapabilities: Attribute(3, TlvUInt8),
        barrierOpenEvents: OptionalWritableAttribute(4, TlvUInt16),
        barrierCloseEvents: OptionalWritableAttribute(5, TlvUInt16),
        barrierCommandOpenEvents: OptionalWritableAttribute(6, TlvUInt16),
        barrierCommandCloseEvents: OptionalWritableAttribute(7, TlvUInt16),
        barrierOpenPeriod: OptionalWritableAttribute(8, TlvUInt16),
        barrierClosePeriod: OptionalWritableAttribute(9, TlvUInt16),
        barrierPosition: Attribute(10, TlvUInt8)
    },

    commands: {
        barrierControlGoToPercent: Command(0, TlvBarrierControlGoToPercentRequest, 0, TlvNoResponse),
        barrierControlStop: Command(1, TlvNoArguments, 1, TlvNoResponse)
    }
});

export type BarrierControlCluster<T extends TypeFromPartialBitSchema<typeof BarrierControlMetadata.features>> = 
    typeof BarrierControlMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function BarrierControlCluster<T extends (keyof typeof BarrierControlMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...BarrierControlMetadata,
        supportedFeatures: BitFlags(BarrierControlMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as BarrierControlCluster<BitFlags<typeof BarrierControlMetadata.features, T>>;
};