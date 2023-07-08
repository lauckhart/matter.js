/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Attribute, AccessLevel, OptionalAttribute, OptionalCommand, TlvNoResponse, Event, EventPriority, Cluster } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt16, TlvEnum, TlvBitmap, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvString } from "../../tlv/TlvString.js";
import { BitFlag } from "../../schema/BitmapSchema.js";

/**
 * Actions
 *
 * This cluster provides a standardized way for a Node (typically a Bridge, but could be any Node) to expose action
 * information.
 *
 * This function creates a Actions cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14
 */
export function ActionsCluster() {
    const cluster = { ...ActionsCluster.Metadata, ...ActionsCluster.BaseComponent };
    return cluster as unknown as ActionsCluster.Type;
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.2
 */
export const enum TlvActionTypeEnum {
    Other = 0,

    /**
     * Can be used to set a static state of the associated endpoints (typically using InstantAction or
     * InstantActionWithTransition), or to bring these endpoints into a more dynamic state (typically using
     * StartAction), where the endpoints would e.g. gradually cycle through certain colors for a pleasing effect. A
     * voice controller could use "set" (to map to InstantAction) or "play" (to map to StartAction) to trig
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.2.1
     */
    Scene = 1,

    /**
     * Indicates an action which involves a sequence of events/states of the associated endpoints, such as a wake-up
     * experience.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.2.2
     */
    Sequence = 2,

    /**
     * Indications an automation (e.g. a motion sensor controlling lights, an alarm system) which can be
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.2.3
     */
    Automation = 3,

    /**
     * Indicates some action which the server will execute when a certain condition (which normally does not happen) is
     * not met.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.2.4
     */
    Exception = 4,

    /**
     * Indicates an action that can be triggered (e.g. by InstantAction) to notify the user.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.2.5
     */
    Notification = 5,

    /**
     * Similar to Notification but with a higher priority (and might override other endpoint states which
     * Type=Notification would not override).
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.2.6
     */
    Alarm = 6
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.1
 */
export const TlvCommandBitsBits = {
    /**
     * Indicate support for InstantActionWithTransition command
     */
    instantActionWithTransition: BitFlag(1),

    /**
     * Indicate support for StartAction command
     */
    startAction: BitFlag(2),

    /**
     * Indicate support for StartActionWithDuration command
     */
    startActionWithDuration: BitFlag(3),

    /**
     * Indicate support for StopAction command
     */
    stopAction: BitFlag(16),

    /**
     * Indicate support for PauseAction command
     */
    pauseAction: BitFlag(32),

    /**
     * Indicate support for PauseActionWithDuration command
     */
    pauseActionWithDuration: BitFlag(64),

    /**
     * Indicate support for ResumeAction command
     */
    resumeAction: BitFlag(128),

    /**
     * Indicate support for EnableAction command
     */
    enableAction: BitFlag(256),

    /**
     * Indicate support for EnableActionWithDuration command
     */
    enableActionWithDuration: BitFlag(512),

    /**
     * Indicate support for DisableAction command
     */
    disableAction: BitFlag(1024),

    /**
     * Indicate support for DisableActionWithDuration command
     */
    disableActionWithDuration: BitFlag(2048)
};

export const TlvCommandBits = TlvBitmap(TlvUInt16, TlvCommandBitsBits);

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.3
 */
export const enum TlvActionStateEnum {
    Inactive = 0,
    Active = 1,
    Paused = 2,
    Disabled = 3
};

/**
 * This data type holds the details of a single action, and contains the data fields below.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.6
 */
export const TlvActionStruct = TlvObject({
    /**
     * This field SHALL provide an unique identifier used to identify an action.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.6.1
     */
    actionId: TlvField(0, TlvUInt16),

    /**
     * This field SHALL indicate the name (as assigned by the user or automatically by the server) associated with this
     * action. This can be used for identifying the action to the user by the client. Example: "my colorful scene".
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.6.2
     */
    name: TlvField(1, TlvString.bound({ maxLength: 32 })),

    /**
     * This field SHALL indicate the type of action. The value of Type of an action, along with its SupportedCommands
     * can be used by the client in its UX or logic to determine how to present or use such action. See ActionTypeEnum
     * for details and examples.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.6.3
     */
    type: TlvField(2, TlvEnum<TlvActionTypeEnum>()),

    /**
     * This field SHALL provide a reference to the associated endpoint list, which specifies the endpoints on this Node
     * which will be impacted by this ActionID.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.6.4
     */
    endpointListId: TlvField(3, TlvUInt16),

    /**
     * This field is a bitmap which SHALL be used to indicate which of the cluster’s commands are sup
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.6.5
     */
    supportedCommands: TlvField(4, TlvCommandBits),

    /**
     * This field SHALL indicate the current state of this action.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.6.6
     */
    state: TlvField(5, TlvEnum<TlvActionStateEnum>())
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.5
 */
export const enum TlvEndpointListTypeEnum {
    /**
     * This value is provided for the case of an endpoint list which is tied specifically to this action i.e. not
     * independently created by the user. For Type=Other the Name MAY be empty. A Matter controller would typically not
     * use this for anything else than just to know which endpoints would be affected by the action.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.5.1
     */
    Other = 0,

    /**
     * Is used for the situation where an endpoint can only be part of one such rooms (e.g. physical mapping). Using
     * these exposed logical groups, a Matter controller who has a similar grouping concept can use it to place each
     * endpoint (bridged device) in the right room automatically, without user having to redo that setup for each
     * device in each system - both at first contact and upon later updates to the endpoints (e.g. user adds a bridged
     * device or creates a new room).
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.5.2
     */
    Room = 1,

    /**
     * Is a more general concept where an endpoint can be part of multiple zones, e.g. a light in the living
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.5.3
     */
    Zone = 2
};

/**
 * This data type holds the details of a single endpoint list, which relates to a set of endpoints that have some
 * logical relation, and contains the data fields below.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.7
 */
export const TlvEndpointListStruct = TlvObject({
    endpointListId: TlvField(0, TlvUInt16),
    name: TlvField(1, TlvString.bound({ maxLength: 32 })),
    type: TlvField(2, TlvEnum<TlvEndpointListTypeEnum>()),

    /**
     * This field SHALL provide a list of endpoint numbers.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.7.1
     */
    endpoints: TlvField(3, TlvArray(TlvUInt16))
});

/**
 * This command SHALL have the following data fields:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.1
 */
export const TlvInstantActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32)
});

/**
 * This command SHALL have the following data fields:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.2
 */
export const TlvInstantActionWithTransitionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),

    /**
     * This field SHALL indicate the transition time in 1/10th of seconds.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.2.1
     */
    transitionTime: TlvField(2, TlvUInt16)
});

/**
 * This command SHALL have the following data fields:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.3
 */
export const TlvStartActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32)
});

/**
 * This command SHALL have the following data fields:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.4
 */
export const TlvStartActionWithDurationRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),

    /**
     * This field SHALL indicate the requested duration in seconds.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.4.1
     */
    duration: TlvField(2, TlvUInt32)
});

/**
 * This command SHALL have the following data fields:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.5
 */
export const TlvStopActionRequest = TlvObject({ actionId: TlvField(0, TlvUInt16), invokeId: TlvOptionalField(1, TlvUInt32) });

/**
 * This command SHALL have the following data fields:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.6
 */
export const TlvPauseActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32)
});

/**
 * This command SHALL have the following data fields:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.7
 */
export const TlvPauseActionWithDurationRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
    duration: TlvField(2, TlvUInt32)
});

/**
 * This command SHALL have the following data fields:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.8
 */
export const TlvResumeActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32)
});

/**
 * This command SHALL have the following data fields:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.9
 */
export const TlvEnableActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32)
});

/**
 * This command SHALL have the following data fields:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.10
 */
export const TlvEnableActionWithDurationRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
    duration: TlvField(2, TlvUInt32)
});

/**
 * This command SHALL have the following data fields:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.11
 */
export const TlvDisableActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32)
});

/**
 * This command SHALL have the following data fields:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.12
 */
export const TlvDisableActionWithDurationRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
    duration: TlvField(2, TlvUInt32)
});

/**
 * This event SHALL be generated when there is a change in the State of an ActionID during the execution of an action
 * and the most recent command using that ActionID used an InvokeID data field.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.7.1
 */
export const TlvStateChangedEvent = TlvObject({
    actionId: TlvField(0, TlvUInt16),

    /**
     * This field SHALL be set to the InvokeID which was provided to the most recent command referencing this ActionID.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.7.1.1
     */
    invokeId: TlvField(1, TlvUInt32),

    /**
     * This field SHALL be set to state that the action has changed to.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.7.1.2
     */
    newState: TlvField(2, TlvEnum<TlvActionStateEnum>())
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.4
 */
export const enum TlvActionErrorEnum {
    Unknown = 0,
    Interrupted = 1
};

/**
 * This event SHALL be generated when there is some error which prevents the action from its normal planned execution
 * and the most recent command using that ActionID used an InvokeID data field.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.7.2
 */
export const TlvActionFailedEvent = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvField(1, TlvUInt32),
    newState: TlvField(2, TlvEnum<TlvActionStateEnum>()),

    /**
     * This field SHALL be set to indicate the reason for non-successful progress of the action.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.7.2.1
     */
    error: TlvField(3, TlvEnum<TlvActionErrorEnum>())
});

export namespace ActionsCluster {
    export type Type = 
        typeof Metadata
        & typeof BaseComponent;

    /**
     * Actions cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14
     */
    export const Metadata = ClusterMetadata({ id: 0x25, name: "Actions", revision: 1, features: {} });

    /**
     * A ActionsCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * The ActionList attribute holds the list of actions. Each entry SHALL have an unique ActionID, and its
             * EndpointListID SHALL exist in the EndpointLists attribute.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.5.1
             */
            actionList: Attribute(0, TlvArray(TlvActionStruct), { default: [], readAcl: AccessLevel.View }),

            /**
             * The EndpointLists attribute holds the list of endpoint lists. Each entry SHALL have an unique
             * EndpointListID.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.5.2
             */
            endpointLists: Attribute(1, TlvArray(TlvEndpointListStruct), { default: [], readAcl: AccessLevel.View }),

            /**
             * The SetupURL attribute (when provided) SHALL indicate a URL; its syntax SHALL follow the syntax as
             * specified in RFC 3986, max. 512 ASCII characters. The location referenced by this URL SHALL provide
             * additional information for the actions provided:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.5.3
             */
            setupUrl: OptionalAttribute(
                2,
                TlvString.bound({ maxLength: 512 }),
                { default: "empty", readAcl: AccessLevel.View }
            )
        },

        commands: {
            /**
             * This command SHALL have the following data fields:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.1
             */
            instantAction: OptionalCommand(0, TlvInstantActionRequest, 0, TlvNoResponse),

            /**
             * This command SHALL have the following data fields:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.2
             */
            instantActionWithTransition: OptionalCommand(1, TlvInstantActionWithTransitionRequest, 1, TlvNoResponse),

            /**
             * This command SHALL have the following data fields:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.3
             */
            startAction: OptionalCommand(2, TlvStartActionRequest, 2, TlvNoResponse),

            /**
             * This command SHALL have the following data fields:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.4
             */
            startActionWithDuration: OptionalCommand(3, TlvStartActionWithDurationRequest, 3, TlvNoResponse),

            /**
             * This command SHALL have the following data fields:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.5
             */
            stopAction: OptionalCommand(4, TlvStopActionRequest, 4, TlvNoResponse),

            /**
             * This command SHALL have the following data fields:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.6
             */
            pauseAction: OptionalCommand(5, TlvPauseActionRequest, 5, TlvNoResponse),

            /**
             * This command SHALL have the following data fields:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.7
             */
            pauseActionWithDuration: OptionalCommand(6, TlvPauseActionWithDurationRequest, 6, TlvNoResponse),

            /**
             * This command SHALL have the following data fields:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.8
             */
            resumeAction: OptionalCommand(7, TlvResumeActionRequest, 7, TlvNoResponse),

            /**
             * This command SHALL have the following data fields:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.9
             */
            enableAction: OptionalCommand(8, TlvEnableActionRequest, 8, TlvNoResponse),

            /**
             * This command SHALL have the following data fields:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.10
             */
            enableActionWithDuration: OptionalCommand(9, TlvEnableActionWithDurationRequest, 9, TlvNoResponse),

            /**
             * This command SHALL have the following data fields:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.11
             */
            disableAction: OptionalCommand(10, TlvDisableActionRequest, 10, TlvNoResponse),

            /**
             * This command SHALL have the following data fields:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.12
             */
            disableActionWithDuration: OptionalCommand(11, TlvDisableActionWithDurationRequest, 11, TlvNoResponse)
        },

        events: {
            /**
             * This event SHALL be generated when there is a change in the State of an ActionID during the execution of
             * an action and the most recent command using that ActionID used an InvokeID data field.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.7.1
             */
            stateChanged: Event(0, EventPriority.Info, TlvStateChangedEvent),

            /**
             * This event SHALL be generated when there is some error which prevents the action from its normal planned
             * execution and the most recent command using that ActionID used an InvokeID data field.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.7.2
             */
            actionFailed: Event(1, EventPriority.Info, TlvActionFailedEvent)
        }
    });

    /**
     * This cluster supports all Actions features.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes },
        commands: { ...BaseComponent.commands },
        events: { ...BaseComponent.events }
    });
};
