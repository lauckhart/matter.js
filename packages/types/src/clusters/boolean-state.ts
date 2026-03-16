/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import { Attribute, OptionalEvent } from "../cluster/Cluster.js";
import { TlvBoolean } from "../tlv/TlvBoolean.js";
import { Priority } from "../globals/Priority.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { Identity } from "@matter/general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";
import { ClusterNamespace, ClusterNamespaceTyping } from "../cluster/ClusterNamespace.js";
import { BooleanState as BooleanStateModel } from "@matter/model";
import { ClusterId } from "../datatype/ClusterId.js";

export namespace BooleanState {
    /**
     * If this event is supported, it shall be generated when the StateValue attribute changes.
     *
     * @see {@link MatterSpecification.v142.Cluster} § 1.7.5.1
     */
    export interface StateChangeEvent {
        /**
         * This field shall indicate the new value of the StateValue attribute.
         *
         * @see {@link MatterSpecification.v142.Cluster} § 1.7.5.1.1
         */
        stateValue: boolean;
    }

    export interface Attributes {
        stateValue: boolean;
    }
    export namespace Attributes {
        export type Components = [{ flags: {}, mandatory: "stateValue" }];
    }
    export interface Events {
        stateChange: StateChangeEvent;
    }
    export namespace Events {
        export type Components = [{ flags: {}, optional: "stateChange" }];
    }

    /**
     * Body of the BooleanState stateChange event
     *
     * @see {@link MatterSpecification.v142.Cluster} § 1.7.5.1
     */
    export const TlvStateChangeEvent = TlvObject({
        /**
         * This field shall indicate the new value of the StateValue attribute.
         *
         * @see {@link MatterSpecification.v142.Cluster} § 1.7.5.1.1
         */
        stateValue: TlvField(0, TlvBoolean)
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x45,
        name: "BooleanState",
        revision: 1,

        attributes: {
            /**
             * This represents a boolean state.
             *
             * The semantics of this boolean state are defined by the device type using this cluster. For example, in a
             * Contact Sensor device type, FALSE=open or no contact, TRUE=closed or contact.
             *
             * @see {@link MatterSpecification.v142.Cluster} § 1.7.4.1
             */
            stateValue: Attribute(0x0, TlvBoolean)
        },

        events: {
            /**
             * If this event is supported, it shall be generated when the StateValue attribute changes.
             *
             * @see {@link MatterSpecification.v142.Cluster} § 1.7.5.1
             */
            stateChange: OptionalEvent(0x0, Priority.Info, TlvStateChangeEvent)
        }
    });

    /**
     * This cluster provides an interface to a boolean state.
     *
     * @see {@link MatterSpecification.v142.Cluster} § 1.7
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
    export const id = ClusterId(0x45);
    export const name = "BooleanState" as const;
    export const revision = 1;
    export const schema = BooleanStateModel;
    export declare const attributes: ClusterNamespace.Attributes<Attributes>;
    export declare const events: ClusterNamespace.Events<Events>;
    export declare const Typing: BooleanState | undefined;
}

export type BooleanStateCluster = BooleanState.Cluster;
export const BooleanStateCluster = BooleanState.Cluster;
ClusterRegistry.register(BooleanState.Complete);
ClusterNamespace.define(BooleanState);
export interface BooleanState extends ClusterNamespaceTyping { Attributes: BooleanState.Attributes & { Components: BooleanState.Attributes.Components }; Events: BooleanState.Events & { Components: BooleanState.Events.Components } }
