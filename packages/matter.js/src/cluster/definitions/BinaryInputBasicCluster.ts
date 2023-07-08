/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { OptionalWritableAttribute, WritableAttribute, OptionalAttribute, Attribute } from "../../cluster/Cluster.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvUInt8, TlvUInt32 } from "../../tlv/TlvNumber.js";

/**
 * Binary Input (Basic)
 *
 * An interface for reading the value of a binary measurement and accessing various characteristics of that measurement.
 *
 * This function creates a BinaryInputBasic cluster.
 */
export function BinaryInputBasicCluster() {
    const cluster = { ...BinaryInputBasicCluster.Metadata, ...BinaryInputBasicCluster.BaseComponent };
    return cluster as unknown as BinaryInputBasicCluster.Type;
};

export namespace BinaryInputBasicCluster {
    export type Type = 
        typeof Metadata
        & typeof BaseComponent;

    /**
     * BinaryInputBasic cluster metadata.
     */
    export const Metadata = ClusterMetadata({ id: 0xf, name: "BinaryInputBasic", revision: 1 });

    /**
     * A BinaryInputBasicCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({ attributes: {
        activeText: OptionalWritableAttribute(4, TlvString, { default: "" }),
        description: OptionalWritableAttribute(28, TlvString, { default: "" }),
        inactiveText: OptionalWritableAttribute(46, TlvString, { default: "" }),
        outOfService: WritableAttribute(81, TlvBoolean, { default: true }),
        polarity: OptionalAttribute(84, TlvUInt8),
        presentValue: WritableAttribute(85, TlvBoolean),
        reliability: OptionalWritableAttribute(103, TlvUInt8),
        statusFlags: Attribute(111, TlvUInt8),
        applicationType: OptionalAttribute(256, TlvUInt32)
    } });

    /**
     * This cluster supports all BinaryInputBasic features.
     */
    export const Complete = { ...Metadata, attributes: { ...BaseComponent.attributes } };
};
