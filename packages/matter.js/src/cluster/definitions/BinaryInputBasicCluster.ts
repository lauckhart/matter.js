/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, OptionalWritableAttribute, WritableAttribute, OptionalAttribute, Attribute } from "../../cluster/Cluster.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvEnum, TlvBitmap, TlvUInt8, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { BitFlag } from "../../schema/BitmapSchema.js";

export const enum Polarity {};

export const enum Reliability {};

export const StatusFlags = TlvBitmap(TlvUInt8, {});

export namespace BinaryInputBasicCluster {
    /**
     * Binary Input (Basic)
     *
     * An interface for reading the value of a binary measurement and accessing
     * various characteristics of that measurement.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `BinaryInputBasic.with()` and a list of
     * supported features.
     */
    export const Complete = Cluster({
        id: 0xf,
        name: "BinaryInputBasic",
        revision: 1,

        attributes: {
            activeText: OptionalWritableAttribute(4, TlvString, { default: "" }),
            description: OptionalWritableAttribute(28, TlvString, { default: "" }),
            inactiveText: OptionalWritableAttribute(46, TlvString, { default: "" }),
            outOfService: WritableAttribute(81, TlvBoolean, { default: true }),
            polarity: OptionalAttribute(84, TlvEnum<Polarity>()),
            presentValue: WritableAttribute(85, TlvBoolean),
            reliability: OptionalWritableAttribute(103, TlvEnum<Reliability>()),
            statusFlags: Attribute(111, StatusFlags),
            applicationType: OptionalAttribute(256, TlvUInt32)
        }
    });
};