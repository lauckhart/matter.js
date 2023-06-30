/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { WritableAttribute, FixedAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.4.5.1
 */
export const enum HourFormatEnum {
    "12Hr" = 0,
    "24Hr" = 1
};

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.4.5.2
 */
export const enum CalendarTypeEnum {
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

export namespace TimeFormatLocalizationCluster {
    export const id = 44;
    export const name = "TimeFormatLocalization";
    export const revision = 1;

    export const featureMap = {
        /**
         * CalendarFormat
         *
         * The Node can be configured to use different calendar formats when
         * conveying values to a user.
         */
        CALFMT: BitFlag(0)
    };

    const Base = {
        attributes: {
            /**
             * The HourFormat attribute SHALL represent the format that the
             * Node is currently configured to use when conveying the hour unit
             * of time. If provided, this value SHALL take priority over any
             * unit
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.4.6.1
             */
            hourFormat: WritableAttribute(0, TlvNullable(TlvEnum<HourFormatEnum>()), { persistent: true, default: null })
        }
    };

    const CALFMT = {
        attributes: {
            /**
             * The ActiveCalendarType attribute SHALL represent the calendar
             * format that the Node is currently configured to use when
             * conveying dates. If provided, this value SHALL take priority
             * over any unit implied through the ActiveLocale Attribute.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.4.6.2
             */
            activeCalendarType: WritableAttribute(1, TlvNullable(TlvEnum<CalendarTypeEnum>()), { persistent: true, default: null }),

            /**
             * The SupportedCalendarTypes attribute SHALL represent a list of
             * CalendarTypeEnum values that are supported by the Node. The list
             * SHALL NOT contain any duplicate entries. The ordering of items
             * within the list SHOULD NOT express any meaning. The maximum
             * length of the SupportedCalendarTypes list SHALL be equivalent to
             * the number of enumerations within CalendarTypeEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.4.6.3
             */
            supportedCalendarTypes: FixedAttribute(2, TlvArray(TlvEnum<CalendarTypeEnum>()), { readAcl: AccessLevel.View })
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: { CALFMT: true },
        elements: [
            Base,
            CALFMT
        ]
    });
};