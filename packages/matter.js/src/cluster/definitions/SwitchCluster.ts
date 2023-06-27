/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, FixedAttribute, Attribute, OptionalEvent, EventPriority, Event } from "../../cluster/Cluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

/**
 * This event SHALL be generated, when the latching switch is moved to a new
 * position. It MAY have been delayed by debouncing within the switch.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.1
 */
export const SwitchLatchedEvent = TlvObject({ NewPosition: TlvField(0, TlvUInt8) });

/**
 * This event SHALL be generated, when the momentary switch starts to be
 * pressed (after debouncing).
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.2
 */
export const InitialPressEvent = TlvObject({ NewPosition: TlvField(0, TlvUInt8) });

/**
 * This event SHALL be generated, when the momentary switch has been pressed
 * for a "long" time (this time interval is manufacturer determined (e.g. since
 * it depends on the switch physics)).
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.3
 */
export const LongPressEvent = TlvObject({ NewPosition: TlvField(0, TlvUInt8) });

/**
 * This event SHALL be generated, when the momentary switch has been released
 * (after debouncing).
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.4
 */
export const ShortReleaseEvent = TlvObject({ PreviousPosition: TlvField(0, TlvUInt8) });

/**
 * This event SHALL be generated, when the momentary switch has been released
 * (after debouncing) and after having been pressed for a long time, i.e. this
 * event SHALL be generated when the switch is released if a LongPress event
 * has been generated since since the previous InitialPress event. Also see
 * Section 1.11.8, “Sequence of generated events”.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.5
 */
export const LongReleaseEvent = TlvObject({ PreviousPosition: TlvField(0, TlvUInt8) });

/**
 * This event SHALL be generated to indicate how many times the momentary
 * switch has been pressed in a multi-press sequence, during that sequence. See
 * Section 1.11.9, “Sequence of events for MultiPress” below.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.6
 */
export const MultiPressOngoingEvent = TlvObject({
    NewPosition: TlvField(0, TlvUInt8),
    CurrentNumberOfPressesCounted: TlvField(1, TlvUInt8)
});

/**
 * This event SHALL be generated to indicate how many times the momentary
 * switch has been pressed in a multi-press sequence, after it has been
 * detected that the sequence has ended. See Section 1.11.9, “Sequence of
 * events for MultiPress” below.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.7
 */
export const MultiPressCompleteEvent = TlvObject({
    PreviousPosition: TlvField(0, TlvUInt8),
    TotalNumberOfPressesCounted: TlvField(1, TlvUInt8)
});

export namespace SwitchCluster {
    /**
     * Switch
     *
     * This cluster exposes interactions with a switch device, for the purpose
     * of using those interactions by other devices. Two types of switch
     * devices are supported: latching switch (e.g. rocker switch) and
     * momentary switch (e.g. push button), distinguished with their feature
     * flags. Interactions with the switch device are exposed as attributes
     * (for the latching switch) and as events (for both types of switches). An
     * interested party MAY subscribe to these attributes/events and thus be
     * informed of the interactions, and can perform actions based on this, for
     * example by sending commands to perform an action such as controlling a
     * light or a window shade.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `Switch.with()` and a list of supported
     * features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11
     */
    export const Complete = Cluster({
        id: 0x3b,
        name: "Switch",
        revision: 1,

        features: {
            LS: BitFlag(0),
            MS: BitFlag(1),
            MSR: BitFlag(2),
            MSL: BitFlag(3),
            MSM: BitFlag(4)
        },

        attributes: {
            /**
             * This attribute SHALL indicate the maximum number of positions
             * the switch has. Any kind of switch has a minimum of 2 positions.
             * Also see Section 1.11.10, “NumberOfPositions > 2” for the case
             * NumberOfPositions>2.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.5.1
             */
            numberOfPositions: FixedAttribute(0, TlvUInt8, { default: 2 }),

            /**
             * This attribute SHALL indicate the position of the switch. The
             * valid range is zero to NumberOfPositions-1. CurrentPosition
             * value 0 SHALL be assigned to the default position of the switch:
             * for example the "open" state of a rocker switch, or the "idle"
             * state of a push button switch.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.5.2
             */
            currentPosition: Attribute(1, TlvUInt8, { persistent: true }),

            /**
             * This attribute SHALL indicate how many consecutive presses can
             * be detected and reported by a momentary switch which supports
             * multi-press (e.g. it will report the value 3 if it can detect
             * single press, double press and triple press, but not quad press
             * and beyond).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.5.3
             */
            multiPressMax: FixedAttribute(2, TlvUInt8, { default: 2 })
        },

        events: {
            /**
             * This event SHALL be generated, when the latching switch is moved
             * to a new position. It MAY have been delayed by debouncing within
             * the switch.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.1
             */
            switchLatched: OptionalEvent(0, EventPriority.Info, SwitchLatchedEvent),

            /**
             * This event SHALL be generated, when the momentary switch starts
             * to be pressed (after debouncing).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.2
             */
            initialPress: Event(1, EventPriority.Info, InitialPressEvent),

            /**
             * This event SHALL be generated, when the momentary switch has
             * been pressed for a "long" time (this time interval is
             * manufacturer determined (e.g. since it depends on the switch
             * physics)).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.3
             */
            longPress: Event(2, EventPriority.Info, LongPressEvent),

            /**
             * This event SHALL be generated, when the momentary switch has
             * been released (after debouncing).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.4
             */
            shortRelease: Event(3, EventPriority.Info, ShortReleaseEvent),

            /**
             * This event SHALL be generated, when the momentary switch has
             * been released (after debouncing) and after having been pressed
             * for a long time, i.e. this event SHALL be generated when the
             * switch is released if a LongPress event has been generated since
             * since the previous InitialPress event. Also see Section 1.11.8,
             * “Sequence of generated events”.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.5
             */
            longRelease: Event(4, EventPriority.Info, LongReleaseEvent),

            /**
             * This event SHALL be generated to indicate how many times the
             * momentary switch has been pressed in a multi-press sequence,
             * during that sequence. See Section 1.11.9, “Sequence of events
             * for MultiPress” below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.6
             */
            multiPressOngoing: Event(5, EventPriority.Info, MultiPressOngoingEvent),

            /**
             * This event SHALL be generated to indicate how many times the
             * momentary switch has been pressed in a multi-press sequence,
             * after it has been detected that the sequence has ended. See
             * Section 1.11.9, “Sequence of events for MultiPress” below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.7
             */
            multiPressComplete: Event(6, EventPriority.Info, MultiPressCompleteEvent)
        }
    });
};