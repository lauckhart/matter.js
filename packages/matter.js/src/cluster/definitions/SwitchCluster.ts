/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { FixedAttribute, Attribute, Event, EventPriority } from "../../cluster/Cluster.js";
import { TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * This event SHALL be generated to indicate how many times the momentary switch has been pressed in a multi-press
 * sequence, during that sequence. See Section 1.11.9, “Sequence of events for MultiPress” below.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.6
 */
export const TlvMultiPressOngoingEvent = TlvObject({
    newPosition: TlvField(0, TlvUInt8),
    currentNumberOfPressesCounted: TlvField(1, TlvUInt8.bound({ min: 2 }))
});

/**
 * This event SHALL be generated to indicate how many times the momentary switch has been pressed in a multi-press
 * sequence, after it has been detected that the sequence has ended. See Section 1.11.9, “Sequence of events for
 * MultiPress” below.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.7
 */
export const TlvMultiPressCompleteEvent = TlvObject({
    previousPosition: TlvField(0, TlvUInt8),
    totalNumberOfPressesCounted: TlvField(1, TlvUInt8.bound({ min: 1 }))
});

/**
 * This event SHALL be generated, when the latching switch is moved to a new position. It MAY have been delayed by
 * debouncing within the switch.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.1
 */
export const TlvSwitchLatchedEvent = TlvObject({ newPosition: TlvField(0, TlvUInt8) });

/**
 * This event SHALL be generated, when the momentary switch starts to be pressed (after debouncing).
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.2
 */
export const TlvInitialPressEvent = TlvObject({ newPosition: TlvField(0, TlvUInt8) });

/**
 * This event SHALL be generated, when the momentary switch has been pressed for a "long" time (this time interval is
 * manufacturer determined (e.g. since it depends on the switch physics)).
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.3
 */
export const TlvLongPressEvent = TlvObject({ newPosition: TlvField(0, TlvUInt8) });

/**
 * This event SHALL be generated, when the momentary switch has been released (after debouncing) and after having been
 * pressed for a long time, i.e. this event SHALL be generated when the switch is released if a LongPress event has
 * been generated since since the previous InitialPress event. Also see Section 1.11.8, “Sequence of generated events”.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.5
 */
export const TlvLongReleaseEvent = TlvObject({ previousPosition: TlvField(0, TlvUInt8) });

/**
 * This event SHALL be generated, when the momentary switch has been released (after debouncing).
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.4
 */
export const TlvShortReleaseEvent = TlvObject({ previousPosition: TlvField(0, TlvUInt8) });

export namespace SwitchCluster {
    export const id = 0x3b;
    export const name = "Switch";
    export const revision = 1;

    export const featureMap = {
        /**
         * LatchingSwitch
         */
        latchingSwitch: BitFlag(0),

        /**
         * MomentarySwitch
         */
        momentarySwitch: BitFlag(1),

        /**
         * MomentarySwitchRelease
         */
        momentarySwitchRelease: BitFlag(2),

        /**
         * MomentarySwitchLongPress
         */
        momentarySwitchLongPress: BitFlag(3),

        /**
         * MomentarySwitchMultiPress
         */
        momentarySwitchMultiPress: BitFlag(4)
    };

    const Base = {
        attributes: {
            /**
             * This attribute SHALL indicate the maximum number of positions the switch has. Any kind of switch has a
             * minimum of 2 positions. Also see Section 1.11.10, “NumberOfPositions > 2” for the case
             * NumberOfPositions>2.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.5.1
             */
            numberOfPositions: FixedAttribute(0, TlvUInt8.bound({ min: 2 }), { default: 2 }),

            /**
             * This attribute SHALL indicate the position of the switch. The valid range is zero to
             * NumberOfPositions-1. CurrentPosition value 0 SHALL be assigned to the default position of the switch:
             * for example the "open" state of a rocker switch, or the "idle" state of a push button switch.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.5.2
             */
            currentPosition: Attribute(1, TlvUInt8, { persistent: true })
        }
    };

    const MomentarySwitchMultiPress = {
        attributes: {
            /**
             * This attribute SHALL indicate how many consecutive presses can be detected and reported by a momentary
             * switch which supports multi-press (e.g. it will report the value 3 if it can detect single press, double
             * press and triple press, but not quad press and beyond).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.5.3
             */
            multiPressMax: FixedAttribute(2, TlvUInt8.bound({ min: 2 }), { default: 2 })
        },

        events: {
            /**
             * This event SHALL be generated to indicate how many times the momentary switch has been pressed in a
             * multi-press sequence, during that sequence. See Section 1.11.9, “Sequence of events for MultiPress”
             * below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.6
             */
            multiPressOngoing: Event(5, EventPriority.Info, TlvMultiPressOngoingEvent),

            /**
             * This event SHALL be generated to indicate how many times the momentary switch has been pressed in a
             * multi-press sequence, after it has been detected that the sequence has ended. See Section 1.11.9,
             * “Sequence of events for MultiPress” below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.7
             */
            multiPressComplete: Event(6, EventPriority.Info, TlvMultiPressCompleteEvent)
        }
    };

    const LatchingSwitch = {
        events: {
            /**
             * This event SHALL be generated, when the latching switch is moved to a new position. It MAY have been
             * delayed by debouncing within the switch.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.1
             */
            switchLatched: Event(0, EventPriority.Info, TlvSwitchLatchedEvent)
        }
    };

    const MomentarySwitch = {
        events: {
            /**
             * This event SHALL be generated, when the momentary switch starts to be pressed (after debouncing).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.2
             */
            initialPress: Event(1, EventPriority.Info, TlvInitialPressEvent)
        }
    };

    const MomentarySwitchLongPress = {
        events: {
            /**
             * This event SHALL be generated, when the momentary switch has been pressed for a "long" time (this time
             * interval is manufacturer determined (e.g. since it depends on the switch physics)).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.3
             */
            longPress: Event(2, EventPriority.Info, TlvLongPressEvent),

            /**
             * This event SHALL be generated, when the momentary switch has been released (after debouncing) and after
             * having been pressed for a long time, i.e. this event SHALL be generated when the switch is released if a
             * LongPress event has been generated since since the previous InitialPress event. Also see Section 1.11.8,
             * “Sequence of generated events”.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.5
             */
            longRelease: Event(4, EventPriority.Info, TlvLongReleaseEvent)
        }
    };

    const MomentarySwitchRelease = {
        events: {
            /**
             * This event SHALL be generated, when the momentary switch has been released (after debouncing).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.4
             */
            shortRelease: Event(3, EventPriority.Info, TlvShortReleaseEvent)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,

        supportedFeatures: {
            latchingSwitch: true,
            momentarySwitch: true,
            momentarySwitchRelease: true,
            momentarySwitchLongPress: true,
            momentarySwitchMultiPress: true
        },

        elements: [
            Base,
            MomentarySwitchMultiPress,
            LatchingSwitch,
            MomentarySwitch,
            MomentarySwitchLongPress,
            MomentarySwitchRelease
        ]
    });
};