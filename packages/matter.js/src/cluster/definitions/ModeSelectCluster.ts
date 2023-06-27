/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, FixedAttribute, AccessLevel, Attribute, OptionalWritableAttribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvEnum, TlvUInt8, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

/**
 * This attribute, when not null, SHALL indicate a single standard namespace
 * for any standard semantic tag value supported in this or any other cluster
 * instance with the same value of this attribute. A null value indicates no
 * standard namespace, and therefore, no standard semantic tags are provided in
 * this cluster instance. Each standard namespace and corresponding values and
 * value meanings SHALL be defined in another document.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.5.2
 */
export const enum StandardNamespace {};

/**
 * This field SHALL indicate the semantic tag within a semantic tag namespace
 * which is either manufacturer specific or standard. For semantic tags in a
 * standard namespace, see Standard Namespace.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.8.2.1
 */
export const enum Value {};

/**
 * A Semantic Tag is meant to be interpreted by the client for the purpose the
 * cluster serves.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.8.2
 */
export const SemanticTagStruct = TlvObject({
    /**
     * If this field is null, the Value field SHALL be defined in a standard
     * namespace as indicated by the StandardNamespace attribute. If this field
     * is not null, it SHALL indicate a manufacturer code (Vendor ID), and the
     * Value field SHALL indicate a semantic tag defined by the manufacturer.
     * Each manufacturer code supports a single namespace of values. The same
     * manufacturer code and semantic tag value in separate cluster instances
     * are part of the same namespace and have the same meaning. For example: a
     * manufacturer tag meaning "pinch", has the same meaning in a cluster
     * whose purpose is to choose the amount of sugar, or amount of salt.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.8.2.2
     */
    MfgCode: TlvField(0, TlvNullable(TlvUInt16)),

    /**
     * This field SHALL indicate the semantic tag within a semantic tag
     * namespace which is either manufacturer specific or standard. For
     * semantic tags in a standard namespace, see Standard Namespace.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.8.2.1
     */
    Value: TlvField(1, TlvEnum<Value>())
});

/**
 * This is a struct representing a possible mode of the server.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.8.1
 */
export const ModeOptionStruct = TlvObject({
    /**
     * This field is readable text that describes the mode option that can be
     * used by a client to indicate to the user what this option means. This
     * field is meant to be readable and understandable by the user.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.8.1.1
     */
    Label: TlvField(0, TlvString.bound({ maxLength: 64 })),

    /**
     * The Mode field is used to identify the mode option. The value SHALL be
     * unique for every item in the SupportedModes attribute.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.8.1.2
     */
    Mode: TlvField(1, TlvUInt8),

    /**
     * This field is a list of semantic tags that map to the mode option. This
     * MAY be used by clients to determine the meaning of the mode option as
     * defined in a standard or manufacturer specific namespace. Semantic tags
     * can help clients look for options that meet certain criteria. A semantic
     * tag SHALL be either a standard tag or manufacturer specific tag as
     * defined in each SemanticTagStruct list entry.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.8.1.3
     */
    SemanticTags: TlvField(2, TlvArray(SemanticTagStruct))
});

/**
 * On receipt of this command, if the NewMode field indicates a valid mode
 * transition within the supported list, the server SHALL set the CurrentMode
 * attribute to the NewMode value, otherwise, the
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.6.1
 */
export const ChangeToModeRequest = TlvObject({ NewMode: TlvField(0, TlvUInt8) });

export namespace ModeSelectCluster {
    /**
     * Mode Select
     *
     * Attributes and commands for selecting a mode from a list of supported
     * options.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `ModeSelect.with()` and a list of
     * supported features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8
     */
    export const Complete = Cluster({
        id: 0x50,
        name: "ModeSelect",
        revision: 1,
        features: { ONOFF: BitFlag(0) },

        attributes: {
            /**
             * This attribute describes the purpose of the server, in readable
             * text.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.5.1
             */
            description: FixedAttribute(0, TlvString.bound({ maxLength: 64 }), { readAcl: AccessLevel.View }),

            /**
             * This attribute, when not null, SHALL indicate a single standard
             * namespace for any standard semantic tag value supported in this
             * or any other cluster instance with the same value of this
             * attribute. A null value indicates no standard namespace, and
             * therefore, no standard semantic tags are provided in this
             * cluster instance. Each standard namespace and corresponding
             * values and value meanings SHALL be defined in another document.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.5.2
             */
            standardNamespace: FixedAttribute(1, TlvNullable(TlvEnum<StandardNamespace>()), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute is the list of supported modes that may be
             * selected for the CurrentMode attribute. Each item in this list
             * represents a unique mode as indicated by the Mode field of the
             * ModeOptionStruct. Each entry in this list SHALL have a unique
             * value for the Mode field.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.5.3
             */
            supportedModes: FixedAttribute(2, TlvArray(ModeOptionStruct), { readAcl: AccessLevel.View }),

            /**
             * This attribute represents the current mode of the server.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.5.4
             */
            currentMode: Attribute(3, TlvUInt8, { scene: true, persistent: true, readAcl: AccessLevel.View }),

            /**
             * The StartUpMode attribute value indicates the desired startup
             * mode for the server when it is supplied with power.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.5.5
             */
            startUpMode: OptionalWritableAttribute(4, TlvNullable(TlvUInt8), { persistent: true }),

            /**
             * This attribute SHALL indicate the value of CurrentMode that
             * depends on the state of the On/Off cluster on the same endpoint.
             * If this attribute is not present or is set to null, it SHALL NOT
             * have an effect, otherwise the CurrentMode attribute SHALL depend
             * on the OnOff attribute of the On/Off cluster as described in the
             * table below:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.5.6
             */
            onMode: OptionalWritableAttribute(5, TlvNullable(TlvUInt8), { persistent: true, default: null })
        },

        commands: {
            /**
             * On receipt of this command, if the NewMode field indicates a
             * valid mode transition within the supported list, the server
             * SHALL set the CurrentMode attribute to the NewMode value,
             * otherwise, the
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.6.1
             */
            changeToMode: Command(0, ChangeToModeRequest, 0, TlvNoResponse)
        }
    });
};