/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { GlobalAttributes, WritableAttribute, AccessLevel, FixedAttribute, Cluster } from "../../cluster/Cluster.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvArray } from "../../tlv/TlvArray.js";

/**
 * Time Format Localization
 *
 * Nodes should be expected to be deployed to any and all regions of the world. These global regions may have differing
 * preferences for how dates and times are conveyed. As such, Nodes that visually or audibly convey time information
 * need a mechanism by which they can be configured to use a user’s preferred format.
 *
 * Use this factory function to create a TimeFormatLocalization cluster supporting a specific set of features. Include
 * each {@link TimeFormatLocalizationCluster.Feature} you wish to support.
 *
 * @param features a list of {@link TimeFormatLocalizationCluster.Feature} to support
 * @returns a TimeFormatLocalization cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.4
 */
export function TimeFormatLocalizationCluster<T extends TimeFormatLocalizationCluster.Feature[]>(...features: [...T]) {
    const cluster = Cluster({
        ...TimeFormatLocalizationCluster.Metadata,
        supportedFeatures: BitFlags(TimeFormatLocalizationCluster.Metadata.features, ...features),
        ...TimeFormatLocalizationCluster.BaseComponent
    });
    extendCluster(cluster, TimeFormatLocalizationCluster.CalendarFormatComponent, { calendarFormat: true });
    return cluster as unknown as TimeFormatLocalizationCluster.Type<BitFlags<typeof TimeFormatLocalizationCluster.Metadata.features, T>>;
}

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.4.5.1
 */
export const enum HourFormat {
    "12Hr" = 0,
    "24Hr" = 1
}

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.4.5.2
 */
export const enum CalendarType {
    Buddhist = 0,
    Chinese = 1,
    Coptic = 2,
    Ethiopian = 3,
    Gregorian = 4,
    Hebrew = 5,
    Indian = 6,
    Islamic = 7,
    Japanese = 8,
    Korean = 9,
    Persian = 10,
    Taiwanese = 11
}

export namespace TimeFormatLocalizationCluster {
    /**
     * These are optional features supported by TimeFormatLocalizationCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.4.4
     */
    export enum Feature {
        /**
         * CalendarFormat
         *
         * The Node can be configured to use different calendar formats when conveying values to a user.
         */
        CalendarFormat = "CalendarFormat"
    }

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> =
        typeof Metadata
        & { attributes: GlobalAttributes<typeof Metadata.features> }
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { calendarFormat: true } ? typeof CalendarFormatComponent : {});

    /**
     * TimeFormatLocalization cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.4
     */
    export const Metadata = ClusterMetadata({
        id: 0x2c,
        name: "TimeFormatLocalization",
        revision: 1,

        features: {
            /**
             * CalendarFormat
             *
             * The Node can be configured to use different calendar formats when conveying values to a user.
             */
            calendarFormat: BitFlag(0)
        }
    });

    /**
     * A TimeFormatLocalizationCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * The HourFormat attribute shall represent the format that the Node is currently configured to use when
             * conveying the hour unit of time. If provided, this value shall take priority over any unit
             *
             * implied through the ActiveLocale Attribute.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.4.6.1
             */
            hourFormat: WritableAttribute(
                0,
                TlvNullable(TlvEnum<HourFormat>()),
                { persistent: true, default: null, writeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * A TimeFormatLocalizationCluster supports these elements if it supports feature CalendarFormat.
     */
    export const CalendarFormatComponent = ClusterComponent({
        attributes: {
            /**
             * The ActiveCalendarType attribute shall represent the calendar format that the Node is currently
             * configured to use when conveying dates. If provided, this value shall take priority over any unit
             * implied through the ActiveLocale Attribute.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.4.6.2
             */
            activeCalendarType: WritableAttribute(
                1,
                TlvNullable(TlvEnum<CalendarType>()),
                { persistent: true, default: null, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The SupportedCalendarTypes attribute shall represent a list of CalendarTypeEnum values that are
             * supported by the Node. The list shall NOT contain any duplicate entries. The ordering of items within
             * the list SHOULD NOT express any meaning. The maximum length of the SupportedCalendarTypes list shall be
             * equivalent to the number of enumerations within CalendarTypeEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.4.6.3
             */
            supportedCalendarTypes: FixedAttribute(2, TlvArray(TlvEnum<CalendarType>()), { default: [] })
        }
    });

    /**
     * This cluster supports all TimeFormatLocalization features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes, ...CalendarFormatComponent.attributes }
    });
}
