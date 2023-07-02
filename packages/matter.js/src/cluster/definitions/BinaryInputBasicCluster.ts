/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OptionalWritableAttribute, WritableAttribute, OptionalAttribute, Attribute } from "../../cluster/Cluster.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvUInt8, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";



export namespace BinaryInputBasicCluster {
    export const id = 0xf;
    export const name = "BinaryInputBasic";
    export const revision = 1;

    const Base = { attributes: {
        activeText: OptionalWritableAttribute(4, TlvString, { default: "" }),
        description: OptionalWritableAttribute(28, TlvString, { default: "" }),
        inactiveText: OptionalWritableAttribute(46, TlvString, { default: "" }),
        outOfService: WritableAttribute(81, TlvBoolean, { default: true }),
        polarity: OptionalAttribute(84, TlvUInt8),
        presentValue: WritableAttribute(85, TlvBoolean),
        reliability: OptionalWritableAttribute(103, TlvUInt8),
        statusFlags: Attribute(111, TlvUInt8),
        applicationType: OptionalAttribute(256, TlvUInt32)
    } };

    export const Complete = BuildCluster({ id, name, revision, elements: [ Base ] });
};