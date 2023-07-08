/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { WritableFabricScopedAttribute, AccessLevel, OptionalWritableFabricScopedAttribute, FixedAttribute, Event, EventPriority } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvEnum, TlvUInt64, TlvUInt32, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvByteString } from "../../tlv/TlvString.js";

/**
 * Access Control
 *
 * The Access Control Cluster exposes a data model view of a Node's Access Control List (ACL), which codifies the rules
 * used to manage and enforce Access Control for the Node's endpoints and their associated cluster instances.
 *
 * This function creates a AccessControl cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.10
 */
export function AccessControlCluster() {
    const cluster = { ...AccessControlCluster.Metadata, ...AccessControlCluster.BaseComponent };
    return cluster as unknown as AccessControlCluster.Type;
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.2
 */
export const enum TlvAccessControlEntryPrivilegeEnum {
    View = 1,
    ProxyView = 2,

    /**
     * This value implicitly grants View privileges
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.2.1
     */
    Operate = 3,

    /**
     * This value implicitly grants Operate & View privileges
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.2.2
     */
    Manage = 4,

    /**
     * This value implicitly grants Manage, Operate, Proxy View & View privileges
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.2.3
     */
    Administer = 5
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.3
 */
export const enum TlvAccessControlEntryAuthModeEnum {
    Pase = 1,
    Case = 2,
    Group = 3
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.4
 */
export const TlvAccessControlTargetStruct = TlvObject({
    cluster: TlvField(0, TlvNullable(TlvUInt32)),
    endpoint: TlvField(1, TlvNullable(TlvUInt16)),
    deviceType: TlvField(2, TlvNullable(TlvUInt32))
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.5
 */
export const TlvAccessControlEntryStruct = TlvObject({
    /**
     * The privilege field SHALL specify the level of privilege granted by this Access Control Entry.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.5.1
     */
    privilege: TlvField(1, TlvEnum<TlvAccessControlEntryPrivilegeEnum>()),

    /**
     * The AuthMode field SHALL specify the authentication mode required by this Access Control Entry.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.5.2
     */
    authMode: TlvField(2, TlvEnum<TlvAccessControlEntryAuthModeEnum>()),

    /**
     * The subjects field SHALL specify a list of Subject IDs, to which this Access Control Entry grants access.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.5.3
     */
    subjects: TlvField(3, TlvNullable(TlvArray(TlvUInt64))),

    /**
     * The targets field SHALL specify a list of AccessControlTargetStruct, which define the clusters on this Node to
     * which this Access Control Entry grants access.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.5.4
     */
    targets: TlvField(4, TlvNullable(TlvArray(TlvAccessControlTargetStruct)))
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.6
 */
export const TlvAccessControlExtensionStruct = TlvObject({
    /**
     * This field MAY be used by manufacturers to store arbitrary TLV-encoded data related to a fabric’s
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.6.1
     */
    data: TlvField(1, TlvByteString.bound({ maxLength: 128 }))
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.1
 */
export const enum TlvChangeTypeEnum {
    Changed = 0,
    Added = 1,
    Removed = 2
};

/**
 * The cluster SHALL send AccessControlEntryChanged events whenever its ACL attribute data is changed by an
 * Administrator.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.10.7.1
 */
export const TlvAccessControlEntryChangedEvent = TlvObject({
    /**
     * The Node ID of the Administrator that made the change, if the change occurred via a CASE session.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.7.1.1
     */
    adminNodeId: TlvField(1, TlvNullable(TlvUInt64)),

    /**
     * The Passcode ID of the Administrator that made the change, if the change occurred via a PASE session. Non-zero
     * values are reserved for future use (see PasscodeId generation in PBKDFParamRequest).
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.7.1.2
     */
    adminPasscodeId: TlvField(2, TlvNullable(TlvUInt16)),

    /**
     * The type of change as appropriate.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.7.1.3
     */
    changeType: TlvField(3, TlvEnum<TlvChangeTypeEnum>()),

    /**
     * The latest value of the changed entry.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.7.1.4
     */
    latestValue: TlvField(4, TlvNullable(TlvAccessControlEntryStruct))
});

/**
 * The cluster SHALL send AccessControlExtensionChanged events whenever its extension attribute data is changed by an
 * Administrator.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.10.7.2
 */
export const TlvAccessControlExtensionChangedEvent = TlvObject({
    adminNodeId: TlvField(1, TlvNullable(TlvUInt64)),
    adminPasscodeId: TlvField(2, TlvNullable(TlvUInt16)),
    changeType: TlvField(3, TlvEnum<TlvChangeTypeEnum>()),
    latestValue: TlvField(4, TlvNullable(TlvAccessControlExtensionStruct))
});

export namespace AccessControlCluster {
    export type Type = 
        typeof Metadata
        & typeof BaseComponent;

    /**
     * AccessControl cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10
     */
    export const Metadata = ClusterMetadata({ id: 0x1f, name: "AccessControl", revision: 1 });

    /**
     * A AccessControlCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * An attempt to add an Access Control Entry when no more entries are available SHALL result in a
             * RESOURCE_EXHAUSTED error being reported and the ACL attribute SHALL NOT have the entry
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.10.5.3
             */
            acl: WritableFabricScopedAttribute(
                0,
                TlvArray(TlvAccessControlEntryStruct),
                { default: [], readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * If present, the Access Control Extensions MAY be used by Administrators to store arbitrary data related
             * to fabric’s Access Control Entries.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.10.5.4
             */
            extension: OptionalWritableFabricScopedAttribute(
                1,
                TlvArray(TlvAccessControlExtensionStruct),
                { default: [], readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * This attribute SHALL provide the minimum number of Subjects per entry that are supported by this server.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.10.5.5
             */
            subjectsPerAccessControlEntry: FixedAttribute(
                2,
                TlvUInt16.bound({ min: 4 }),
                { default: 4, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute SHALL provide the minimum number of Targets per entry that are supported by this server.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.10.5.6
             */
            targetsPerAccessControlEntry: FixedAttribute(
                3,
                TlvUInt16.bound({ min: 3 }),
                { default: 3, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute SHALL provide the minimum number of ACL Entries per fabric that are supported by this
             * server.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.10.5.7
             */
            accessControlEntriesPerFabric: FixedAttribute(
                4,
                TlvUInt16.bound({ min: 4 }),
                { default: 4, readAcl: AccessLevel.View }
            )
        },

        events: {
            /**
             * The cluster SHALL send AccessControlEntryChanged events whenever its ACL attribute data is changed by an
             * Administrator.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.10.7.1
             */
            accessControlEntryChanged: Event(0, EventPriority.Info, TlvAccessControlEntryChangedEvent),

            /**
             * The cluster SHALL send AccessControlExtensionChanged events whenever its extension attribute data is
             * changed by an Administrator.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.10.7.2
             */
            accessControlExtensionChanged: Event(1, EventPriority.Info, TlvAccessControlExtensionChangedEvent)
        }
    });

    /**
     * This cluster supports all AccessControl features.
     */
    export const Complete = {
        ...Metadata,
        attributes: { ...BaseComponent.attributes },
        events: { ...BaseComponent.events }
    };
};
