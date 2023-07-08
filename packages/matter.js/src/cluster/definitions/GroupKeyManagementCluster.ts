/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { WritableFabricScopedAttribute, AccessLevel, FabricScopedAttribute, FixedAttribute, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt16, TlvEnum, TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * Group Key Management
 *
 * The Group Key Management Cluster is the mechanism by which group keys are managed.
 *
 * This function creates a GroupKeyManagement cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2
 */
export function GroupKeyManagementCluster() {
    const cluster = { ...GroupKeyManagementCluster.Metadata, ...GroupKeyManagementCluster.BaseComponent };
    return cluster as unknown as GroupKeyManagementCluster.Type;
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.3
 */
export const TlvGroupKeyMapStruct = TlvObject({
    /**
     * This field uniquely identifies the group within the scope of the given Fabric.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.3.1
     */
    groupId: TlvField(1, TlvUInt16),

    /**
     * This field references the set of group keys that generate operational group keys for use with this
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.3.2
     */
    groupKeySetId: TlvField(2, TlvUInt16.bound({ min: 1, max: 65535 }))
});

/**
 * This field uniquely identifies the group within the scope of the given Fabric.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.5
 */
export const TlvGroupInfoMapStruct = TlvObject({
    groupId: TlvField(1, TlvUInt16),

    /**
     * This field provides the list of Endpoint IDs on the Node to which messages to this group SHALL be forwarded.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.5.1
     */
    endpoints: TlvField(2, TlvArray(TlvUInt16)),

    /**
     * This field provides a name for the group. This field SHALL contain the last GroupName written for a given
     * GroupId on any Endpoint via the Groups cluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.5.2
     */
    groupName: TlvOptionalField(3, TlvString.bound({ maxLength: 16 }))
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.1
 */
export const enum TlvGroupKeySecurityPolicyEnum {
    TrustFirst = 0,
    CacheAndSync = 1
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.2
 */
export const enum TlvGroupKeyMulticastPolicyEnum {
    /**
     * The 16-bit Group Identifier of the Multicast Address SHALL be the Group ID of the group.
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
 * This field shall provide the fabric-unique index for the associated group key set, as specified in Section
 * 4.15.3.5.1, “Group Key Set ID”.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4
 */
export const TlvGroupKeySetStruct = TlvObject({
    groupKeySetId: TlvField(0, TlvUInt16),

    /**
     * This field SHALL provide the security policy for an operational group key set.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.1
     */
    groupKeySecurityPolicy: TlvField(1, TlvEnum<TlvGroupKeySecurityPolicyEnum>()),

    /**
     * This field, if not null, SHALL be the root credential used in the derivation of an operational group key for
     * epoch slot 0 of the given group key set. If EpochKey0 is not null, EpochStartTime0 SHALL NOT be null.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.2
     */
    epochKey0: TlvField(2, TlvNullable(TlvByteString.bound({ minLength: 16, maxLength: 16 }))),

    /**
     * This field, if not null, SHALL define when EpochKey0 becomes valid as specified by Section 4.15.3, “Epoch Keys”.
     * Units are absolute UTC time in microseconds encoded using the epoch-us representation.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.3
     */
    epochStartTime0: TlvField(3, TlvNullable(TlvUInt64)),

    /**
     * This field, if not null, SHALL be the root credential used in the derivation of an operational group key for
     * epoch slot 1 of the given group key set. If EpochKey1 is not null, EpochStartTime1 SHALL NOT be null.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.4
     */
    epochKey1: TlvField(4, TlvNullable(TlvByteString.bound({ minLength: 16, maxLength: 16 }))),

    /**
     * This field, if not null, SHALL define when EpochKey1 becomes valid as specified by Section 4.15.3, “Epoch Keys”.
     * Units are absolute UTC time in microseconds encoded using the epoch-us representation.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.5
     */
    epochStartTime1: TlvField(5, TlvNullable(TlvUInt64)),

    /**
     * This field, if not null, SHALL be the root credential used in the derivation of an operational group key for
     * epoch slot 2 of the given group key set. If EpochKey2 is not null, EpochStartTime2 SHALL NOT be null.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.6
     */
    epochKey2: TlvField(6, TlvNullable(TlvByteString.bound({ minLength: 16, maxLength: 16 }))),

    /**
     * This field, if not null, SHALL define when EpochKey2 becomes valid as specified by Section 4.15.3, “Epoch Keys”.
     * Units are absolute UTC time in microseconds encoded using the epoch-us representation.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.7
     */
    epochStartTime2: TlvField(7, TlvNullable(TlvUInt64)),

    /**
     * This field specifies how the IPv6 Multicast Address SHALL be formed for groups using this operational group key
     * set.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.8
     */
    groupKeyMulticastPolicy: TlvOptionalField(8, TlvEnum<TlvGroupKeyMulticastPolicyEnum>())
});

/**
 * This command is used by Administrators to set the state of a given Group Key Set, including atomi
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.1
 */
export const TlvKeySetWriteRequest = TlvObject({ groupKeySet: TlvField(0, TlvGroupKeySetStruct) });

/**
 * This command is used by Administrators to read the state of a given Group Key Set.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.2
 */
export const TlvKeySetReadRequest = TlvObject({ groupKeySetId: TlvField(0, TlvUInt16) });

/**
 * This command SHALL be generated in response to the KeySetRead command, if a valid Group Key Set was found. It SHALL
 * contain the configuration of the requested Group Key Set, with the EpochKey0, EpochKey1 and EpochKey2 key contents
 * replaced by null.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.3
 */
export const TlvKeySetReadResponseRequest = TlvObject({ groupKeySet: TlvField(0, TlvGroupKeySetStruct) });

/**
 * This command is used by Administrators to remove all state of a given Group Key Set.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.4
 */
export const TlvKeySetRemoveRequest = TlvObject({ groupKeySetId: TlvField(0, TlvUInt16) });

/**
 * This command is used by Administrators to query a list of all Group Key Sets associated with the accessing fabric.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.5
 */
export const TlvKeySetReadAllIndicesRequest = TlvObject({ groupKeySetIDs: TlvField(0, TlvUInt16) });

/**
 * This command SHALL be generated in response to KeySetReadAllIndices and it SHALL contain the list of GroupKeySetID
 * for all Group Key Sets associated with the scoped Fabric.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.6
 */
export const TlvKeySetReadAllIndicesResponseRequest = TlvObject({ groupKeySetIDs: TlvField(0, TlvArray(TlvUInt16)) });

export namespace GroupKeyManagementCluster {
    /**
     * These are optional features supported by GroupKeyManagementCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.5
     */
    export enum Feature {
        /**
         * CacheAndSync
         *
         * The ability to support CacheAndSync security policy and MCSP.
         */
        CacheAndSync = "CacheAndSync"
    };

    export type Type = 
        typeof Metadata
        & typeof BaseComponent;

    /**
     * GroupKeyManagement cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2
     */
    export const Metadata = ClusterMetadata({
        id: 0x3f,
        name: "GroupKeyManagement",
        revision: 1,

        features: {
            /**
             * CacheAndSync
             *
             * The ability to support CacheAndSync security policy and MCSP.
             */
            cacheAndSync: BitFlag(0)
        }
    });

    /**
     * A GroupKeyManagementCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute is a list of GroupKeyMapStruct entries. Each entry associates a logical Group Id with a
             * particular group key set.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.7.1
             */
            groupKeyMap: WritableFabricScopedAttribute(
                0,
                TlvArray(TlvGroupKeyMapStruct),
                { persistent: true, default: [], readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute is a list of GroupInfoMapStruct entries. Each entry provides read-only information about
             * how a given logical Group ID maps to a particular set of endpoints, and a name for the group. The
             * content of this attribute reflects data managed via the Groups cluster (see AppClusters), and is in
             * general terms referred to as the 'node-wide Group Table'.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.7.2
             */
            groupTable: FabricScopedAttribute(1, TlvArray(TlvGroupInfoMapStruct), { default: [] }),

            /**
             * This attribute SHALL indicate the maximum number of groups that this node supports per fabric. The value
             * of this attribute SHALL be set to be no less than the required minimum supported groups as specified in
             * Group Limits. The length of the GroupKeyMap and GroupTable list attributes SHALL NOT exceed the value of
             * the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.7.3
             */
            maxGroupsPerFabric: FixedAttribute(2, TlvUInt16),

            /**
             * This attribute SHALL indicate the maximum number of group key sets this node supports per fabric. The
             * value of this attribute SHALL be set according to the minimum number of group key sets to support as
             * specified in Group Limits.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.7.4
             */
            maxGroupKeysPerFabric: FixedAttribute(3, TlvUInt16.bound({ min: 1, max: 65535 }), { default: 1 })
        },

        commands: {
            /**
             * This command is used by Administrators to set the state of a given Group Key Set, including atomi
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.1
             */
            keySetWrite: Command(0, TlvKeySetWriteRequest, 0, TlvNoResponse),

            /**
             * This command is used by Administrators to read the state of a given Group Key Set.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.2
             */
            keySetRead: Command(1, TlvKeySetReadRequest, 2, TlvKeySetReadResponseRequest),

            /**
             * This command SHALL be generated in response to the KeySetRead command, if a valid Group Key Set was
             * found. It SHALL contain the configuration of the requested Group Key Set, with the EpochKey0, EpochKey1
             * and EpochKey2 key contents replaced by null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.3
             */
            keySetReadResponse: Command(2, TlvKeySetReadResponseRequest, 2, TlvNoResponse),

            /**
             * This command is used by Administrators to remove all state of a given Group Key Set.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.4
             */
            keySetRemove: Command(3, TlvKeySetRemoveRequest, 3, TlvNoResponse),

            /**
             * This command is used by Administrators to query a list of all Group Key Sets associated with the
             * accessing fabric.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.5
             */
            keySetReadAllIndices: Command(4, TlvKeySetReadAllIndicesRequest, 5, TlvKeySetReadAllIndicesResponseRequest),

            /**
             * This command SHALL be generated in response to KeySetReadAllIndices and it SHALL contain the list of
             * GroupKeySetID for all Group Key Sets associated with the scoped Fabric.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.6
             */
            keySetReadAllIndicesResponse: Command(5, TlvKeySetReadAllIndicesResponseRequest, 5, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all GroupKeyManagement features.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes },
        commands: { ...BaseComponent.commands }
    });
};
