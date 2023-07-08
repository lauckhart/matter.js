/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent, extendCluster } from "../../cluster/ClusterFactory.js";
import { BitFlag, TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";
import { WritableAttribute, AccessLevel, FixedAttribute } from "../../cluster/Cluster.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvArray } from "../../tlv/TlvArray.js";

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.4.5.1
 */
export const enum TlvHourFormatEnum {
    "12Hr" = 0,
    "24Hr" = 1
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.4.5.2
 */
export const enum TlvCalendarTypeEnum {
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
};

/**
 * Standard TimeFormatLocalization cluster properties.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.4
 */
export const TimeFormatLocalizationMetadata = ClusterMetadata({
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
         * The HourFormat attribute SHALL represent the format that the Node is currently configured to use when
         * conveying the hour unit of time. If provided, this value SHALL take priority over any unit
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.4.6.1
         */
        hourFormat: WritableAttribute(
            0,
            TlvNullable(TlvEnum<TlvHourFormatEnum>()),
            { persistent: true, default: null, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        )
    }
});

/**
 * A TimeFormatLocalizationCluster supports these elements if it supports feature CalendarFormat.
 */
export const CalendarFormatComponent = ClusterComponent({
    attributes: {
        /**
         * The ActiveCalendarType attribute SHALL represent the calendar format that the Node is currently configured
         * to use when conveying dates. If provided, this value SHALL take priority over any unit implied through the
         * ActiveLocale Attribute.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.4.6.2
         */
        activeCalendarType: WritableAttribute(
            1,
            TlvNullable(TlvEnum<TlvCalendarTypeEnum>()),
            { persistent: true, default: null, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * The SupportedCalendarTypes attribute SHALL represent a list of CalendarTypeEnum values that are supported by
         * the Node. The list SHALL NOT contain any duplicate entries. The ordering of items within the list SHOULD NOT
         * express any meaning. The maximum length of the SupportedCalendarTypes list SHALL be equivalent to the number
         * of enumerations within CalendarTypeEnum.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.4.6.3
         */
        supportedCalendarTypes: FixedAttribute(
            2,
            TlvArray(TlvEnum<TlvCalendarTypeEnum>()),
            { default: [], readAcl: AccessLevel.View }
        )
    }
});

export type TimeFormatLocalizationCluster<T extends TypeFromPartialBitSchema<typeof TimeFormatLocalizationMetadata.features>> = 
    typeof TimeFormatLocalizationMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent
    & (T extends { calendarFormat: true } ? typeof CalendarFormatComponent : {});

export function TimeFormatLocalizationCluster<T extends (keyof typeof TimeFormatLocalizationMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...TimeFormatLocalizationMetadata,
        supportedFeatures: BitFlags(TimeFormatLocalizationMetadata.features, ...features),
        ...BaseComponent
    };
    extendCluster(cluster, CalendarFormatComponent, { calendarFormat: true });
    
    return cluster as unknown as TimeFormatLocalizationCluster<BitFlags<typeof TimeFormatLocalizationMetadata.features, T>>;
};