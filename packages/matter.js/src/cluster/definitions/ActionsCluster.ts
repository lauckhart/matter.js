/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, Attribute, OptionalAttribute, OptionalCommand, TlvNoResponse, Event, EventPriority, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
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
 * Use this factory function to create an Actions cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14
 */
export function ActionsCluster() {
    const cluster = Cluster({ ...ActionsCluster.Metadata, ...ActionsCluster.BaseComponent });
    return cluster as unknown as ActionsCluster.Type;
}

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.2
 */
export const enum ActionType {
    Other = 0,

    /**
     * Can be used to set a static state of the associated endpoints (typically using InstantAction or
     * InstantActionWithTransition), or to bring these endpoints into a more dynamic state (typically using
     * StartAction), where the endpoints would e.g. gradually cycle through certain colors for a pleasing effect. A
     * voice controller could use "set" (to map to InstantAction) or "play" (to map to StartAction) to trig
     *
     * ger such actions.
     *
     * Example: see examples 1 and 2.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.2.1
     */
    Scene = 1,

    /**
     * Indicates an action which involves a sequence of events/states of the associated endpoints, such as a wake-up
     * experience.
     *
     * Example: see example 4.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.2.2
     */
    Sequence = 2,

    /**
     * Indications an automation (e.g. a motion sensor controlling lights, an alarm system) which can bee.g. started,
     * stopped, paused, resumed. Example: see example 3.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.2.3
     */
    Automation = 3,

    /**
     * Indicates some action which the server will execute when a certain condition (which normally does not happen) is
     * not met.
     *
     * Example: lock the doors when the server’s system has detected no one is at home while the doors are in the
     * 'unlocked' state.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.2.4
     */
    Exception = 4,

    /**
     * Indicates an action that can be triggered (e.g. by InstantAction) to notify the user.
     *
     * Example: play a pattern on the lights in the living room if there is someone in the garden in the evening.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.2.5
     */
    Notification = 5,

    /**
     * Similar to Notification but with a higher priority (and might override other endpoint states which
     * Type=Notification would not override).
     *
     * Example: flash all lights in the house when CO sensor triggers.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.2.6
     */
    Alarm = 6
}

/**
 * Bit definitions for TlvCommandBits
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.1
 */
export const CommandBitsBits = {
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

/**
 * Note - The bit allocation of this bitmap shall follow the ID’s of the Commands of this cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.1
 */
export const TlvCommandBits = TlvBitmap(TlvUInt16, CommandBitsBits);

/**
 * Note that some of these states are applicable only for certain actions, as determined by their SupportedCommands.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.3
 */
export const enum ActionState {
    Inactive = 0,
    Active = 1,
    Paused = 2,
    Disabled = 3
}

/**
 * This data type holds the details of a single action, and contains the data fields below.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.6
 */
export const TlvActionStruct = TlvObject({
    /**
     * This field shall provide an unique identifier used to identify an action.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.6.1
     */
    actionId: TlvField(0, TlvUInt16),

    /**
     * This field shall indicate the name (as assigned by the user or automatically by the server) associated with this
     * action. This can be used for identifying the action to the user by the client. Example: "my colorful scene".
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.6.2
     */
    name: TlvField(1, TlvString.bound({ maxLength: 32 })),

    /**
     * This field shall indicate the type of action. The value of Type of an action, along with its SupportedCommands
     * can be used by the client in its UX or logic to determine how to present or use such action. See ActionTypeEnum
     * for details and examples.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.6.3
     */
    type: TlvField(2, TlvEnum<ActionType>()),

    /**
     * This field shall provide a reference to the associated endpoint list, which specifies the endpoints on this Node
     * which will be impacted by this ActionID.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.6.4
     */
    endpointListId: TlvField(3, TlvUInt16),

    /**
     * This field is a bitmap which shall be used to indicate which of the cluster’s commands are sup
     *
     * ported for this particular action, with a bit set to 1 for each supported command according to the table below.
     * Other bits shall be set to 0.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.6.5
     */
    supportedCommands: TlvField(4, TlvCommandBits),

    /**
     * This field shall indicate the current state of this action.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.6.6
     */
    state: TlvField(5, TlvEnum<ActionState>())
});

/**
 * The Room and Zone values are provided for the cases where a user (or the system on behalf of the user) has created
 * logical grouping of the endpoints (e.g. bridged devices) based on location.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.5
 */
export const enum EndpointListType {
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
     * room can be part of the "reading corner" zone (subset of the lights in the living room) but also part of the
     * "downstairs" zone which contains all the lights on a floor, e.g. combining living room, kitchen and hallway.
     * This indicates that a user has defined this list of endpoints as something they logically would like to control
     * as a group, so Matter controllers could provide the user with a way to do as such.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.5.3
     */
    Zone = 2
}

/**
 * This data type holds the details of a single endpoint list, which relates to a set of endpoints that have some
 * logical relation, and contains the data fields below.
 *
 * This field shall provide an unique identifier used to identify the endpoint list.
 *
 * This field shall indicate the name (as assigned by the user or automatically by the server) associated with the set
 * of endpoints in this list. This can be used for identifying the action to the user by the client. Example: "living
 * room".
 *
 * This field shall indicate the type of endpoint list, see EndpointListTypeEnum.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.7
 */
export const TlvEndpointListStruct = TlvObject({
    endpointListId: TlvField(0, TlvUInt16),
    name: TlvField(1, TlvString.bound({ maxLength: 32 })),
    type: TlvField(2, TlvEnum<EndpointListType>()),

    /**
     * This field shall provide a list of endpoint numbers.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.7.1
     */
    endpoints: TlvField(3, TlvArray(TlvUInt16))
});

/**
 * Input to the Actions instantAction command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.1
 */
export const TlvInstantActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32)
});

/**
 * Input to the Actions instantActionWithTransition command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.2
 */
export const TlvInstantActionWithTransitionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),

    /**
     * This field shall indicate the transition time in 1/10th of seconds.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.2.1
     */
    transitionTime: TlvField(2, TlvUInt16)
});

/**
 * Input to the Actions startAction command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.3
 */
export const TlvStartActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32)
});

/**
 * Input to the Actions startActionWithDuration command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.4
 */
export const TlvStartActionWithDurationRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),

    /**
     * This field shall indicate the requested duration in seconds.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.4.1
     */
    duration: TlvField(2, TlvUInt32)
});

/**
 * Input to the Actions stopAction command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.5
 */
export const TlvStopActionRequest = TlvObject({ actionId: TlvField(0, TlvUInt16), invokeId: TlvOptionalField(1, TlvUInt32) });

/**
 * Input to the Actions pauseAction command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.6
 */
export const TlvPauseActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32)
});

/**
 * Input to the Actions pauseActionWithDuration command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.7
 */
export const TlvPauseActionWithDurationRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
    duration: TlvField(2, TlvUInt32)
});

/**
 * Input to the Actions resumeAction command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.8
 */
export const TlvResumeActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32)
});

/**
 * Input to the Actions enableAction command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.9
 */
export const TlvEnableActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32)
});

/**
 * Input to the Actions enableActionWithDuration command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.10
 */
export const TlvEnableActionWithDurationRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
    duration: TlvField(2, TlvUInt32)
});

/**
 * Input to the Actions disableAction command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.11
 */
export const TlvDisableActionRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32)
});

/**
 * Input to the Actions disableActionWithDuration command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.12
 */
export const TlvDisableActionWithDurationRequest = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvOptionalField(1, TlvUInt32),
    duration: TlvField(2, TlvUInt32)
});

/**
 * Body of the Actions stateChanged event
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.7.1
 */
export const TlvStateChangedEvent = TlvObject({
    actionId: TlvField(0, TlvUInt16),

    /**
     * This field shall be set to the InvokeID which was provided to the most recent command referencing this ActionID.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.7.1.1
     */
    invokeId: TlvField(1, TlvUInt32),

    /**
     * This field shall be set to state that the action has changed to.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.7.1.2
     */
    newState: TlvField(2, TlvEnum<ActionState>())
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.4.4
 */
export const enum ActionError {
    Unknown = 0,
    Interrupted = 1
}

/**
 * Body of the Actions actionFailed event
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.14.7.2
 */
export const TlvActionFailedEvent = TlvObject({
    actionId: TlvField(0, TlvUInt16),
    invokeId: TlvField(1, TlvUInt32),
    newState: TlvField(2, TlvEnum<ActionState>()),

    /**
     * This field shall be set to indicate the reason for non-successful progress of the action.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.14.7.2.1
     */
    error: TlvField(3, TlvEnum<ActionError>())
});

export namespace ActionsCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
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
             * The ActionList attribute holds the list of actions. Each entry shall have an unique ActionID, and its
             * EndpointListID shall exist in the EndpointLists attribute.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.5.1
             */
            actionList: Attribute(0, TlvArray(TlvActionStruct), { default: [] }),

            /**
             * The EndpointLists attribute holds the list of endpoint lists. Each entry shall have an unique
             * EndpointListID.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.5.2
             */
            endpointLists: Attribute(1, TlvArray(TlvEndpointListStruct), { default: [] }),

            /**
             * The SetupURL attribute (when provided) shall indicate a URL; its syntax shall follow the syntax as
             * specified in RFC 3986, max. 512 ASCII characters. The location referenced by this URL shall provide
             * additional information for the actions provided:
             *
             *   • When used without suffix, it shall provide information about the various actions which the cluster
             *     provides.
             *
             *     ◦ Example: SetupURL could take the value of example://Actions or https://domain.example/
             *       Matter/bridgev1/Actions for this generic case (access generic info how to use actions provided by
             *       this cluster).
             *
             *   • When used with a suffix of "/?a=" and the decimal value of ActionID for one of the actions, it MAY
             *     provide information about that particular action. This could be a deeplink to
             *     manufacturer-app/website (associated somehow to the server node) with the information/edit-screen
             *     for this action so that the user can view and update details of the action, e.g. edit the scene, or
             *     change the wake-up experience time period.
             *
             *     ◦ Example of SetupURL with suffix added: example://Actions/?a=12345 or
             *       https://domain.example/Matter/bridgev1/Actions/?a=12345 for linking to specific info/editing of
             *       the action with ActionID 0x3039.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.5.3
             */
            setupUrl: OptionalAttribute(2, TlvString.bound({ maxLength: 512 }), { default: "empty" })
        },

        commands: {
            /**
             * This command triggers an action (state change) on the involved endpoints, in a "fire and forget" manner.
             * Afterwards, the action’s state shall be Inactive.
             *
             * Example: recall a scene on a number of lights.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.1
             */
            instantAction: OptionalCommand(0, TlvInstantActionRequest, 0, TlvNoResponse),

            /**
             * It is recommended that, where possible (e.g., it is not possible for attributes with Boolean data type),
             * a gradual transition SHOULD take place from the old to the new state over this time period. However, the
             * exact transition is manufacturer dependent.
             *
             * This command triggers an action (state change) on the involved endpoints, with a specified time to
             * transition from the current state to the new state. During the transition, the action’s state shall be
             * Active. Afterwards, the action’s state shall be Inactive.
             *
             * Example: recall a scene on a number of lights, with a specified transition time.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.2
             */
            instantActionWithTransition: OptionalCommand(1, TlvInstantActionWithTransitionRequest, 1, TlvNoResponse),

            /**
             * This command triggers the commencement of an action on the involved endpoints. Afterwards, the action’s
             * state shall be Active.
             *
             * Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of
             * the scene) on a set of lights.
             *
             * Example: start a sequence of events such as a wake-up experience involving lights moving through several
             * brightness/color combinations and the window covering gradually opening.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.3
             */
            startAction: OptionalCommand(2, TlvStartActionRequest, 2, TlvNoResponse),

            /**
             * This command triggers the commencement of an action on the involved endpoints, and shall change the
             * action’s state to Active. After the specified Duration, the action will stop, and the action’s state
             * shall change to Inactive.
             *
             * Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of
             * the scene) on a set of lights for 1 hour (Duration=3600).
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.4
             */
            startActionWithDuration: OptionalCommand(3, TlvStartActionWithDurationRequest, 3, TlvNoResponse),

            /**
             * This command stops the ongoing action on the involved endpoints. Afterwards, the action’s state shall be
             * Inactive.
             *
             * Example: stop a dynamic lighting pattern which was previously started with StartAction.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.5
             */
            stopAction: OptionalCommand(4, TlvStopActionRequest, 4, TlvNoResponse),

            /**
             * This command pauses an ongoing action, and shall change the action’s state to Paused.
             *
             * Example: pause a dynamic lighting effect (the lights stay at their current color) which was previously
             * started with StartAction.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.6
             */
            pauseAction: OptionalCommand(5, TlvPauseActionRequest, 5, TlvNoResponse),

            /**
             * This command pauses an ongoing action, and shall change the action’s state to Paused. After the
             * specified Duration, the ongoing action will be automatically resumed. which shall change the action’s
             * state to Active.
             *
             * Example: pause a dynamic lighting effect (the lights stay at their current color) for 10 minutes
             * (Duration=600).
             *
             * The difference between Pause/Resume and Disable/Enable is on the one hand semantic (the former is more
             * of a transitionary nature while the latter is more permanent) and on the other hand these can be
             * implemented slightly differently in the implementation of the action (e.g. a Pause would be
             * automatically resumed after some hours or during a nightly reset, while an Disable would remain in
             * effect until explicitly enabled again).
             *
             * This field shall indicate the requested duration in seconds.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.7
             */
            pauseActionWithDuration: OptionalCommand(6, TlvPauseActionWithDurationRequest, 6, TlvNoResponse),

            /**
             * This command resumes a previously paused action, and shall change the action’s state to Active.
             *
             * The difference between ResumeAction and StartAction is that ResumeAction will continue the action from
             * the state where it was paused, while StartAction will start the action from the beginning.
             *
             * Example: resume a dynamic lighting effect (the lights' colors will change gradually, continuing from the
             * point they were paused).
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.8
             */
            resumeAction: OptionalCommand(7, TlvResumeActionRequest, 7, TlvNoResponse),

            /**
             * This command enables a certain action or automation. Afterwards, the action’s state shall be Active.
             *
             * Example: enable a motion sensor to control the lights in an area.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.9
             */
            enableAction: OptionalCommand(8, TlvEnableActionRequest, 8, TlvNoResponse),

            /**
             * This command enables a certain action or automation, and shall change the action’s state to be Active.
             * After the specified Duration, the action or automation will stop, and the action’s state shall change to
             * Disabled.
             *
             * Example: enable a "presence mimicking" behavior for the lights in your home during a vacation; the
             * Duration field is used to indicated the length of your absence from home. After that period, the
             * presence mimicking behavior will no longer control these lights.
             *
             * This field shall indicate the requested duration in seconds.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.10
             */
            enableActionWithDuration: OptionalCommand(9, TlvEnableActionWithDurationRequest, 9, TlvNoResponse),

            /**
             * This command disables a certain action or automation, and shall change the action’s state to Inactive.
             *
             * Example: disable a motion sensor to no longer control the lights in an area.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.11
             */
            disableAction: OptionalCommand(10, TlvDisableActionRequest, 10, TlvNoResponse),

            /**
             * This command disables a certain action or automation, and shall change the action’s state to Disabled.
             * After the specified Duration, the action or automation will re-start, and the action’s state shall
             * change to either Inactive or Active, depending on the actions (see examples 4 and 6).
             *
             * Example: disable a "wakeup" experience for a period of 1 week when going on holiday (to prevent them
             * from turning on in the morning while you’re not at home). After this period, the wakeup experience will
             * control the lights as before.
             *
             * This field shall indicate the requested duration in seconds.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.6.12
             */
            disableActionWithDuration: OptionalCommand(11, TlvDisableActionWithDurationRequest, 11, TlvNoResponse)
        },

        events: {
            /**
             * This event shall be generated when there is a change in the State of an ActionID during the execution of
             * an action and the most recent command using that ActionID used an InvokeID data field.
             *
             * It provides feedback to the client about the progress of the action.
             *
             * Example: When InstantActionWithTransition is invoked (with an InvokeID data field), two StateChanged
             * events will be generated:
             *
             *   • one when the transition starts (NewState=Active)
             *
             *   • one when the transition completed (NewState=Inactive) This event shall have the following data
             *     fields:
             *
             * This field shall be set to the ActionID of the action which has changed state.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.14.7.1
             */
            stateChanged: Event(0, EventPriority.Info, TlvStateChangedEvent),

            /**
             * This event shall be generated when there is some error which prevents the action from its normal planned
             * execution and the most recent command using that ActionID used an InvokeID data field.
             *
             * It provides feedback to the client about the non-successful progress of the action.
             *
             * Example: When InstantActionWithTransition is invoked (with an InvokeID data field), and another
             * controller changes the state of one or more of the involved endpoints during the transition, thus
             * interrupting the transition triggered by the action, two events would be generated:
             *
             *   • StateChanged when the transition starts (NewState=Active)
             *
             *   • ActionFailed when the interrupting command occurs (NewState=Inactive, Error=interrupted)
             *
             * Example: When InstantActionWithTransition is invoked (with an InvokeID data field = 1), and the same
             * client invokes an InstantAction with (the same or another ActionId and) InvokeID = 2, and this second
             * command interrupts the transition triggered by the first command, these events would be generated:
             *
             *   • StateChanged (InvokeID=1, NewState=Active) when the transition starts
             *
             *   • ActionFailed (InvokeID=2, NewState=Inactive, Error=interrupted) when the second command interrupts
             *     the transition
             *
             *   • StateChanged (InvokeID=2, NewState=Inactive) upon the execution of the action for the second command
             *
             * This event shall have the following data fields:
             *
             * This field shall be set to the ActionID of the action which encountered an error.
             *
             * This field shall be set to the InvokeID which was provided to the most recent command referencing this
             * ActionID.
             *
             * This field shall be set to state that the action is in at the time of generating the event.
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
}
