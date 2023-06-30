/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { FixedAttribute, AccessLevel, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvBitmap, TlvUInt8, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * This attribute provides legacy, read-only access to whether the Group Names
 * feature is supported. The most significant bit, bit 7, SHALL be equal to bit
 * 0 of the FeatureMap attribute. All other bits SHALL be 0.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.6.1
 */
export const NameSupport = TlvBitmap(TlvUInt8, {
    /**
     * The ability to store a name for a group.
     */
    GroupNames: BitFlag(7)
});

/**
 * The AddGroupResponse is sent by the Groups cluster server in response to an
 * AddGroup command. The AddGroupResponse command SHALL have the following data
 * fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.7
 */
export const AddGroupResponseRequest = TlvObject({
    Status: TlvField(0, TlvUInt8),
    GroupId: TlvField(1, TlvUInt16)
});

/**
 * The AddGroup command allows a client to add group membership in a particular
 * group for the server endpoint.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.1
 */
export const AddGroupRequest = TlvObject({
    GroupId: TlvField(0, TlvUInt16),
    GroupName: TlvField(1, TlvString.bound({ maxLength: 16 }))
});

/**
 * The ViewGroupResponse command is sent by the Groups cluster server in
 * response to a ViewGroup command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.8
 */
export const ViewGroupResponseRequest = TlvObject({
    Status: TlvField(0, TlvUInt8),
    GroupId: TlvField(1, TlvUInt16),
    GroupName: TlvField(2, TlvString.bound({ maxLength: 16 }))
});

/**
 * The ViewGroup command allows a client to request that the server responds
 * with a ViewGroupResponse command containing the name string for a particular
 * group.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.2
 */
export const ViewGroupRequest = TlvObject({ GroupId: TlvField(0, TlvUInt16) });

/**
 * The GetGroupMembershipResponse command is sent by the Groups cluster server
 * in response to a GetGroupMembership command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.9
 */
export const GetGroupMembershipResponseRequest = TlvObject({
    Capacity: TlvField(0, TlvNullable(TlvUInt8)),
    GroupList: TlvField(1, TlvArray(TlvUInt16))
});

/**
 * The GetGroupMembership command allows a client to inquire about the group
 * membership of the server endpoint, in a number of ways.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.3
 */
export const GetGroupMembershipRequest = TlvObject({ GroupList: TlvField(0, TlvArray(TlvUInt16)) });

/**
 * The RemoveGroupResponse command is generated by the server in response to
 * the receipt of a RemoveGroup command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.10
 */
export const RemoveGroupResponseRequest = TlvObject({
    Status: TlvField(0, TlvUInt8),
    GroupId: TlvField(1, TlvUInt16)
});

/**
 * The RemoveGroup command allows a client to request that the server removes
 * the membership for the server endpoint, if any, in a particular group.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.4
 */
export const RemoveGroupRequest = TlvObject({ GroupId: TlvField(0, TlvUInt16) });

/**
 * The AddGroupIfIdentifying command allows a client to add group membership in
 * a particular group for the server endpoint, on condition that the endpoint
 * is identifying itself. Identifying functionality is controlled using the
 * Identify cluster, (see Identify).
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.6
 */
export const AddGroupIfIdentifyingRequest = TlvObject({
    GroupId: TlvField(0, TlvUInt16),
    GroupName: TlvField(1, TlvString.bound({ maxLength: 16 }))
});

export namespace GroupsCluster {
    export const id = 4;
    export const name = "Groups";
    export const revision = 1;

    export const featureMap = {
        /**
         * GroupNames
         *
         * The ability to store a name for a group.
         */
        GN: BitFlag(0)
    };

    const Base = {
        attributes: {
            /**
             * This attribute provides legacy, read-only access to whether the
             * Group Names feature is supported. The most significant bit, bit
             * 7, SHALL be equal to bit 0 of the FeatureMap attribute. All
             * other bits SHALL be 0.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.6.1
             */
            nameSupport: FixedAttribute(0, NameSupport, { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * The AddGroup command allows a client to add group membership in
             * a particular group for the server endpoint.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.1
             */
            addGroup: Command(0, AddGroupRequest, 0, AddGroupResponseRequest),

            /**
             * The AddGroupResponse is sent by the Groups cluster server in
             * response to an AddGroup command. The AddGroupResponse command
             * SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.7
             */
            addGroupResponse: Command(0, AddGroupResponseRequest, 0, TlvNoResponse),

            /**
             * The ViewGroup command allows a client to request that the server
             * responds with a ViewGroupResponse command containing the name
             * string for a particular group.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.2
             */
            viewGroup: Command(1, ViewGroupRequest, 1, ViewGroupResponseRequest),

            /**
             * The ViewGroupResponse command is sent by the Groups cluster
             * server in response to a ViewGroup command.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.8
             */
            viewGroupResponse: Command(1, ViewGroupResponseRequest, 1, TlvNoResponse),

            /**
             * The GetGroupMembership command allows a client to inquire about
             * the group membership of the server endpoint, in a number of ways.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.3
             */
            getGroupMembership: Command(2, GetGroupMembershipRequest, 2, GetGroupMembershipResponseRequest),

            /**
             * The GetGroupMembershipResponse command is sent by the Groups
             * cluster server in response to a GetGroupMembership command.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.9
             */
            getGroupMembershipResponse: Command(2, GetGroupMembershipResponseRequest, 2, TlvNoResponse),

            /**
             * The RemoveGroup command allows a client to request that the
             * server removes the membership for the server endpoint, if any,
             * in a particular group.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.4
             */
            removeGroup: Command(3, RemoveGroupRequest, 3, RemoveGroupResponseRequest),

            /**
             * The RemoveGroupResponse command is generated by the server in
             * response to the receipt of a RemoveGroup command.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.10
             */
            removeGroupResponse: Command(3, RemoveGroupResponseRequest, 3, TlvNoResponse),

            /**
             * The RemoveAllGroups command allows a client to direct the server
             * to remove all group associations for the server endpoint.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.5
             */
            removeAllGroups: Command(4, TlvNoArguments, 4, TlvNoResponse),

            /**
             * The AddGroupIfIdentifying command allows a client to add group
             * membership in a particular group for the server endpoint, on
             * condition that the endpoint is identifying itself. Identifying
             * functionality is controlled using the Identify cluster, (see
             * Identify).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.6
             */
            addGroupIfIdentifying: Command(5, AddGroupIfIdentifyingRequest, 5, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: { GN: true },
        elements: [ Base ]
    });
};