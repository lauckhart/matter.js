/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { WritableAttribute, AccessLevel, FabricScopedAttribute, FixedAttribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt16, TlvEnum, TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.3
 */
export const GroupKeyMapStruct = TlvObject({
    /**
     * This field uniquely identifies the group within the scope of the given
     * Fabric.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.3.1
     */
    GroupId: TlvField(1, TlvUInt16),

    /**
     * This field references the set of group keys that generate operational
     * group keys for use with this
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.3.2
     */
    GroupKeySetId: TlvField(2, TlvUInt16)
});

/**
 * This field uniquely identifies the group within the scope of the given
 * Fabric.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.5
 */
export const GroupInfoMapStruct = TlvObject({
    GroupId: TlvField(1, TlvUInt16),

    /**
     * This field provides the list of Endpoint IDs on the Node to which
     * messages to this group SHALL be forwarded.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.5.1
     */
    Endpoints: TlvField(2, TlvArray(TlvUInt16)),

    /**
     * This field provides a name for the group. This field SHALL contain the
     * last GroupName written for a given GroupId on any Endpoint via the
     * Groups cluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.5.2
     */
    GroupName: TlvOptionalField(3, TlvString.bound({ maxLength: 16 }))
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.1
 */
export const enum GroupKeySecurityPolicyEnum {
    TrustFirst = 0,
    CacheAndSync = 1
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.2
 */
export const enum GroupKeyMulticastPolicyEnum {
    /**
     * The 16-bit Group Identifier of the Multicast Address SHALL be the Group
     * ID of the group.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.2.1
     */
    PerGroupId = 0,

    /**
     * The 16-bit Group Identifier of the Multicast Address SHALL be 0xFFFF.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.2.2
     */
    AllNodes = 1
};

/**
 * This field shall provide the fabric-unique index for the associated group
 * key set, as specified in Section 4.15.3.5.1, “Group Key Set ID”.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4
 */
export const GroupKeySetStruct = TlvObject({
    GroupKeySetId: TlvField(0, TlvUInt16),

    /**
     * This field SHALL provide the security policy for an operational group
     * key set.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.1
     */
    GroupKeySecurityPolicy: TlvField(1, TlvEnum<GroupKeySecurityPolicyEnum>()),

    /**
     * This field, if not null, SHALL be the root credential used in the
     * derivation of an operational group key for epoch slot 0 of the given
     * group key set. If EpochKey0 is not null, EpochStartTime0 SHALL NOT be
     * null.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.2
     */
    EpochKey0: TlvField(2, TlvNullable(TlvByteString.bound({ minLength: 16, maxLength: 16 }))),

    /**
     * This field, if not null, SHALL define when EpochKey0 becomes valid as
     * specified by Section 4.15.3, “Epoch Keys”. Units are absolute UTC time
     * in microseconds encoded using the epoch-us representation.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.3
     */
    EpochStartTime0: TlvField(3, TlvNullable(TlvUInt64)),

    /**
     * This field, if not null, SHALL be the root credential used in the
     * derivation of an operational group key for epoch slot 1 of the given
     * group key set. If EpochKey1 is not null, EpochStartTime1 SHALL NOT be
     * null.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.4
     */
    EpochKey1: TlvField(4, TlvNullable(TlvByteString.bound({ minLength: 16, maxLength: 16 }))),

    /**
     * This field, if not null, SHALL define when EpochKey1 becomes valid as
     * specified by Section 4.15.3, “Epoch Keys”. Units are absolute UTC time
     * in microseconds encoded using the epoch-us representation.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.5
     */
    EpochStartTime1: TlvField(5, TlvNullable(TlvUInt64)),

    /**
     * This field, if not null, SHALL be the root credential used in the
     * derivation of an operational group key for epoch slot 2 of the given
     * group key set. If EpochKey2 is not null, EpochStartTime2 SHALL NOT be
     * null.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.6
     */
    EpochKey2: TlvField(6, TlvNullable(TlvByteString.bound({ minLength: 16, maxLength: 16 }))),

    /**
     * This field, if not null, SHALL define when EpochKey2 becomes valid as
     * specified by Section 4.15.3, “Epoch Keys”. Units are absolute UTC time
     * in microseconds encoded using the epoch-us representation.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.7
     */
    EpochStartTime2: TlvField(7, TlvNullable(TlvUInt64)),

    /**
     * This field specifies how the IPv6 Multicast Address SHALL be formed for
     * groups using this operational group key set.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.8
     */
    GroupKeyMulticastPolicy: TlvOptionalField(8, TlvEnum<GroupKeyMulticastPolicyEnum>())
});

/**
 * This command is used by Administrators to set the state of a given Group Key
 * Set, including atomi
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.1
 */
export const KeySetWriteRequest = TlvObject({ GroupKeySet: TlvField(0, GroupKeySetStruct) });

/**
 * This command SHALL be generated in response to the KeySetRead command, if a
 * valid Group Key Set was found. It SHALL contain the configuration of the
 * requested Group Key Set, with the EpochKey0, EpochKey1 and EpochKey2 key
 * contents replaced by null.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.3
 */
export const KeySetReadResponseRequest = TlvObject({ GroupKeySet: TlvField(0, GroupKeySetStruct) });

/**
 * This command is used by Administrators to read the state of a given Group
 * Key Set.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.2
 */
export const KeySetReadRequest = TlvObject({ GroupKeySetId: TlvField(0, TlvUInt16) });

/**
 * This command is used by Administrators to remove all state of a given Group
 * Key Set.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.4
 */
export const KeySetRemoveRequest = TlvObject({ GroupKeySetId: TlvField(0, TlvUInt16) });

/**
 * This command SHALL be generated in response to KeySetReadAllIndices and it
 * SHALL contain the list of GroupKeySetID for all Group Key Sets associated
 * with the scoped Fabric.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.6
 */
export const KeySetReadAllIndicesResponseRequest = TlvObject({ GroupKeySetIDs: TlvField(0, TlvArray(TlvUInt16)) });

/**
 * This command is used by Administrators to query a list of all Group Key Sets
 * associated with the accessing fabric.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.5
 */
export const KeySetReadAllIndicesRequest = TlvObject({ GroupKeySetIDs: TlvField(0, TlvUInt16) });

export namespace GroupKeyManagementCluster {
    export const id = 63;
    export const name = "GroupKeyManagement";
    export const revision = 1;

    export const featureMap = {
        /**
         * CacheAndSync
         *
         * The ability to support CacheAndSync security policy and MCSP.
         */
        cacheAndSync: BitFlag(0)
    };

    const Base = {
        attributes: {
            /**
             * This attribute is a list of GroupKeyMapStruct entries. Each
             * entry associates a logical Group Id with a particular group key
             * set.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.7.1
             */
            groupKeyMap: WritableAttribute(0, TlvArray(GroupKeyMapStruct), { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),

            /**
             * This attribute is a list of GroupInfoMapStruct entries. Each
             * entry provides read-only information about how a given logical
             * Group ID maps to a particular set of endpoints, and a name for
             * the group. The content of this attribute reflects data managed
             * via the Groups cluster (see AppClusters), and is in general
             * terms referred to as the 'node-wide Group Table'.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.7.2
             */
            groupTable: FabricScopedAttribute(1, TlvArray(GroupInfoMapStruct)),

            /**
             * This attribute SHALL indicate the maximum number of groups that
             * this node supports per fabric. The value of this attribute SHALL
             * be set to be no less than the required minimum supported groups
             * as specified in Group Limits. The length of the GroupKeyMap and
             * GroupTable list attributes SHALL NOT exceed the value of the
             * MaxGroupsPerFabric attribute multiplied by the number of
             * supported fabrics.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.7.3
             */
            maxGroupsPerFabric: FixedAttribute(2, TlvUInt16),

            /**
             * This attribute SHALL indicate the maximum number of group key
             * sets this node supports per fabric. The value of this attribute
             * SHALL be set according to the minimum number of group key sets
             * to support as specified in Group Limits.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.7.4
             */
            maxGroupKeysPerFabric: FixedAttribute(3, TlvUInt16, { default: 1 })
        },

        commands: {
            /**
             * This command is used by Administrators to set the state of a
             * given Group Key Set, including atomi
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.1
             */
            keySetWrite: Command(0, KeySetWriteRequest, 0, TlvNoResponse),

            /**
             * This command is used by Administrators to read the state of a
             * given Group Key Set.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.2
             */
            keySetRead: Command(1, KeySetReadRequest, 2, KeySetReadResponseRequest),

            /**
             * This command SHALL be generated in response to the KeySetRead
             * command, if a valid Group Key Set was found. It SHALL contain
             * the configuration of the requested Group Key Set, with the
             * EpochKey0, EpochKey1 and EpochKey2 key contents replaced by null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.3
             */
            keySetReadResponse: Command(2, KeySetReadResponseRequest, 2, TlvNoResponse),

            /**
             * This command is used by Administrators to remove all state of a
             * given Group Key Set.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.4
             */
            keySetRemove: Command(3, KeySetRemoveRequest, 3, TlvNoResponse),

            /**
             * This command is used by Administrators to query a list of all
             * Group Key Sets associated with the accessing fabric.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.5
             */
            keySetReadAllIndices: Command(4, KeySetReadAllIndicesRequest, 5, KeySetReadAllIndicesResponseRequest),

            /**
             * This command SHALL be generated in response to
             * KeySetReadAllIndices and it SHALL contain the list of
             * GroupKeySetID for all Group Key Sets associated with the scoped
             * Fabric.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.6
             */
            keySetReadAllIndicesResponse: Command(5, KeySetReadAllIndicesResponseRequest, 5, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: { cacheAndSync: true },
        elements: [ Base ]
    });
};