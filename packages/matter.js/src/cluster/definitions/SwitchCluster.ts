/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent, extendCluster } from "../../cluster/ClusterFactory.js";
import { BitFlag, TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";
import { FixedAttribute, Attribute, Event, EventPriority } from "../../cluster/Cluster.js";
import { TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

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

/**
 * Standard Switch cluster properties.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11
 */
export const SwitchMetadata = ClusterMetadata({
    id: 0x3b,
    name: "Switch",
    revision: 1,

    features: {
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
    }
});

/**
 * A SwitchCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * This attribute SHALL indicate the maximum number of positions the switch has. Any kind of switch has a
         * minimum of 2 positions. Also see Section 1.11.10, “NumberOfPositions > 2” for the case NumberOfPositions>2.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.5.1
         */
        numberOfPositions: FixedAttribute(0, TlvUInt8.bound({ min: 2 }), { default: 2 }),

        /**
         * This attribute SHALL indicate the position of the switch. The valid range is zero to NumberOfPositions-1.
         * CurrentPosition value 0 SHALL be assigned to the default position of the switch: for example the "open"
         * state of a rocker switch, or the "idle" state of a push button switch.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.5.2
         */
        currentPosition: Attribute(1, TlvUInt8, { persistent: true })
    }
});

/**
 * A SwitchCluster supports these elements if it supports feature MomentarySwitchMultiPress.
 */
export const MomentarySwitchMultiPressComponent = ClusterComponent({
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
         * multi-press sequence, during that sequence. See Section 1.11.9, “Sequence of events for MultiPress” below.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.6
         */
        multiPressOngoing: Event(5, EventPriority.Info, TlvMultiPressOngoingEvent),

        /**
         * This event SHALL be generated to indicate how many times the momentary switch has been pressed in a
         * multi-press sequence, after it has been detected that the sequence has ended. See Section 1.11.9, “Sequence
         * of events for MultiPress” below.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.7
         */
        multiPressComplete: Event(6, EventPriority.Info, TlvMultiPressCompleteEvent)
    }
});

/**
 * A SwitchCluster supports these elements if it supports feature LatchingSwitch.
 */
export const LatchingSwitchComponent = ClusterComponent({
    events: {
        /**
         * This event SHALL be generated, when the latching switch is moved to a new position. It MAY have been delayed
         * by debouncing within the switch.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.1
         */
        switchLatched: Event(0, EventPriority.Info, TlvSwitchLatchedEvent)
    }
});

/**
 * A SwitchCluster supports these elements if it supports feature MomentarySwitch.
 */
export const MomentarySwitchComponent = ClusterComponent({
    events: {
        /**
         * This event SHALL be generated, when the momentary switch starts to be pressed (after debouncing).
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.2
         */
        initialPress: Event(1, EventPriority.Info, TlvInitialPressEvent)
    }
});

/**
 * A SwitchCluster supports these elements if it supports feature MomentarySwitchLongPress.
 */
export const MomentarySwitchLongPressComponent = ClusterComponent({
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
});

/**
 * A SwitchCluster supports these elements if it supports feature MomentarySwitchRelease.
 */
export const MomentarySwitchReleaseComponent = ClusterComponent({
    events: {
        /**
         * This event SHALL be generated, when the momentary switch has been released (after debouncing).
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.11.7.4
         */
        shortRelease: Event(3, EventPriority.Info, TlvShortReleaseEvent)
    }
});

export type SwitchCluster<T extends TypeFromPartialBitSchema<typeof SwitchMetadata.features>> = 
    typeof SwitchMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent
    & (T extends { momentarySwitchMultiPress: true } ? typeof MomentarySwitchMultiPressComponent : {})
    & (T extends { latchingSwitch: true } ? typeof LatchingSwitchComponent : {})
    & (T extends { momentarySwitch: true } ? typeof MomentarySwitchComponent : {})
    & (T extends { momentarySwitchLongPress: true } ? typeof MomentarySwitchLongPressComponent : {})
    & (T extends { momentarySwitchRelease: true } ? typeof MomentarySwitchReleaseComponent : {});

export function SwitchCluster<T extends (keyof typeof SwitchMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...SwitchMetadata,
        supportedFeatures: BitFlags(SwitchMetadata.features, ...features),
        ...BaseComponent
    };
    extendCluster(cluster, MomentarySwitchMultiPressComponent, { momentarySwitchMultiPress: true });
    extendCluster(cluster, LatchingSwitchComponent, { latchingSwitch: true });
    extendCluster(cluster, MomentarySwitchComponent, { momentarySwitch: true });
    extendCluster(cluster, MomentarySwitchLongPressComponent, { momentarySwitchLongPress: true });
    extendCluster(cluster, MomentarySwitchReleaseComponent, { momentarySwitchRelease: true });
    
    return cluster as unknown as SwitchCluster<BitFlags<typeof SwitchMetadata.features, T>>;
};