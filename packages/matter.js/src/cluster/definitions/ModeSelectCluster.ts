/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, WritableAttribute } from "../../cluster/Cluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * Mode Select
 *
 * This cluster provides an interface for controlling a characteristic of a device that can be set to one of several
 * predefined values. For example, the light pattern of a disco ball, the mode of a massage chair, or the wash cycle of
 * a laundry machine.
 *
 * The server allows the client to set a mode on the server. A mode is one of a list of options that may be presented
 * by a client for a user choice, or understood by the client, via the semantic tags on the mode.
 *
 * A semantic tag is either a standard tag within a standard category namespace, or a manufacturer specific tag, within
 * the namespace of the vendor ID of the manufacturer. If there is no semantic tag, the mode is anonymous, and the
 * selection is made by the user solely based on the Label string.
 *
 * Each cluster ID that indicates this specification shall define a distinct purpose for the cluster instance. For
 * example: A LightBlinking cluster ID supports blinking modes for a light (and is described that way).
 *
 * An anonymous mode shall support the derived cluster purpose. A manufacturer specific semantic tag shall support the
 * derived cluster purpose. An anonymous mode shall NOT replace the meaning of a standard semantic tag, when one
 * exists, for the cluster purpose.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8
 */
export const ModeSelectCluster = Cluster({
    id: 0x50,
    name: "ModeSelect",
    revision: 1,

    attributes: {
        /**
         * This attribute shall indicate the value of CurrentMode that depends on the state of the On/Off cluster on
         * the same endpoint. If this attribute is not present or is set to null, it shall NOT have an effect,
         * otherwise the CurrentMode attribute shall depend on the OnOff attribute of the On/Off cluster
         *
         * The value of this field shall match the Mode field of one of the entries in the SupportedModes attribute.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.5.6
         */
        onMode: WritableAttribute(0x5, TlvNullable(TlvUInt8), { persistent: true, default: null })
    }
});
