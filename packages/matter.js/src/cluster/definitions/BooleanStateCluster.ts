/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Attribute, AccessLevel, OptionalEvent, EventPriority } from "../../cluster/Cluster.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * This event SHALL be generated when the StateValue attribute changes.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.5.1
 */
export const StateChangeEvent = TlvObject({ StateValue: TlvField(0, TlvBoolean) });

export namespace BooleanStateCluster {
    export const id = 69;
    export const name = "BooleanState";
    export const revision = 1;

    const Base = {
        attributes: {
            /**
             * This represents a Boolean state.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.4.1
             */
            stateValue: Attribute(0, TlvBoolean, { readAcl: AccessLevel.View })
        },

        events: {
            /**
             * This event SHALL be generated when the StateValue attribute
             * changes.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.5.1
             */
            stateChange: OptionalEvent(0, EventPriority.Info, StateChangeEvent)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        elements: [ Base ]
    });
};