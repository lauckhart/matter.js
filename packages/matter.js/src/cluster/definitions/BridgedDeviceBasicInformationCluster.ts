/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, OptionalAttribute, OptionalWritableAttribute, Attribute, OptionalEvent, EventPriority, Event, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvUInt16, TlvUInt32, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * Bridged Device Basic Information
 *
 * This Cluster serves two purposes towards a Node communicating with a Bridge: indicate that the functionality on the
 * Endpoint where it is placed (and its Parts) is bridged from a non-CHIP technology; and provide a centralized
 * collection of attributes that the Node MAY collect to aid in conveying information regarding the Bridged Device to a
 * user, such as the vendor name, the model name, or user-assigned name.
 *
 * This function creates a BridgedDeviceBasicInformation cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.13
 */
export function BridgedDeviceBasicInformationCluster() {
    const cluster = Cluster({
        ...BridgedDeviceBasicInformationCluster.Metadata,
        ...BridgedDeviceBasicInformationCluster.BaseComponent
    });
    return cluster as unknown as BridgedDeviceBasicInformationCluster.Type;
}

export const enum ProductFinishEnum {
    Other = 0,
    Matte = 1,
    Satin = 2,
    Polished = 3,
    Rugged = 4,
    Fabric = 5
}

export const enum ColorEnum {
    Black = 0,
    Navy = 1,
    Green = 2,
    Teal = 3,
    Maroon = 4,
    Purple = 5,
    Olive = 6,
    Gray = 7,
    Blue = 8,
    Lime = 9,
    Aqua = 10,
    Red = 11,
    Fuchsia = 12,
    Yellow = 13,
    White = 14,
    Nickel = 15,
    Chrome = 16,
    Brass = 17,
    Copper = 18,
    Silver = 19,
    Gold = 20
}

export const TlvProductAppearanceStruct = TlvObject({
    finish: TlvField(0, TlvEnum<ProductFinishEnum>()),
    primaryColor: TlvField(1, TlvNullable(TlvEnum<ColorEnum>()))
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.13.5
 */
export const TlvStartUpEvent = TlvObject({ softwareVersion: TlvField(0, TlvUInt32) });

/**
 * This event SHALL be generated when there is a change in the Reachable attribute. Its purpose is to provide an
 * indication towards interested parties that the reachability of a bridged device (over the non-Matter network) has
 * changed, so they MAY take appropriate action.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.13.5.1
 */
export const TlvReachableChangedEvent = TlvObject({ reachableNewValue: TlvField(0, TlvBoolean) });

export namespace BridgedDeviceBasicInformationCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * BridgedDeviceBasicInformation cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.13
     */
    export const Metadata = ClusterMetadata({ id: 0x39, name: "BridgedDeviceBasicInformation", revision: 1, features: {} });

    /**
     * A BridgedDeviceBasicInformationCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.4
             */
            vendorName: OptionalAttribute(1, TlvString),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.4
             */
            vendorId: OptionalAttribute(2, TlvUInt16),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.4
             */
            productName: OptionalAttribute(3, TlvString),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.4
             */
            nodeLabel: OptionalWritableAttribute(5, TlvString, { default: "" }),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.4
             */
            hardwareVersion: OptionalAttribute(7, TlvUInt16, { default: 0 }),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.4
             */
            hardwareVersionString: OptionalAttribute(8, TlvString),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.4
             */
            softwareVersion: OptionalAttribute(9, TlvUInt32, { default: 0 }),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.4
             */
            softwareVersionString: OptionalAttribute(10, TlvString),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.4
             */
            manufacturingDate: OptionalAttribute(11, TlvString),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.4
             */
            partNumber: OptionalAttribute(12, TlvString),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.4
             */
            productUrl: OptionalAttribute(13, TlvString),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.4
             */
            productLabel: OptionalAttribute(14, TlvString),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.4
             */
            serialNumber: OptionalAttribute(15, TlvString),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.4
             */
            reachable: Attribute(17, TlvBoolean, { default: true }),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.4
             */
            uniqueId: OptionalAttribute(18, TlvString),

            productAppearance: OptionalAttribute(20, TlvProductAppearanceStruct)
        },

        events: {
            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.5
             */
            startUp: OptionalEvent(0, EventPriority.Critical, TlvStartUpEvent),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.5
             */
            shutDown: OptionalEvent(1, EventPriority.Critical, TlvNoArguments),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.5
             */
            leave: OptionalEvent(2, EventPriority.Info, TlvNoArguments),

            /**
             * This event SHALL be generated when there is a change in the Reachable attribute. Its purpose is to
             * provide an indication towards interested parties that the reachability of a bridged device (over the
             * non-Matter network) has changed, so they MAY take appropriate action.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.13.5.1
             */
            reachableChanged: Event(3, EventPriority.Info, TlvReachableChangedEvent)
        }
    });

    /**
     * This cluster supports all BridgedDeviceBasicInformation features.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes },
        events: { ...BaseComponent.events }
    });
}
