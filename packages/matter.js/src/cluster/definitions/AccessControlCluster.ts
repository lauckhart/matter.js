/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, WritableAttribute, AccessLevel, OptionalWritableAttribute, FixedAttribute, Event, EventPriority } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvEnum, TlvUInt32, TlvUInt16, TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvByteString } from "../../tlv/TlvString.js";

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.3
 */
export const enum AccessControlEntryAuthModeEnum {
    Pase = 1,
    Case = 2,
    Group = 3
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.4
 */
export const AccessControlTargetStruct = TlvObject({
    Cluster: TlvField(0, TlvNullable(TlvUInt32)),
    Endpoint: TlvField(1, TlvNullable(TlvUInt16)),
    DeviceType: TlvField(2, TlvNullable(TlvUInt32))
});

export const enum AccessControlEntryPrivilegeEnum {
    View = 1,
    ProxyView = 2,
    Operate = 3,
    Manage = 4,
    Administer = 5
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.5
 */
export const AccessControlEntryStruct = TlvObject({
    /**
     * The AuthMode field SHALL specify the authentication mode required by
     * this Access Control Entry.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.5.2
     */
    AuthMode: TlvField(2, TlvNullable(TlvEnum<AccessControlEntryAuthModeEnum>())),

    /**
     * The targets field SHALL specify a list of AccessControlTargetStruct,
     * which define the clusters on this Node to which this Access Control
     * Entry grants access.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.5.4
     */
    Targets: TlvField(4, TlvNullable(TlvArray(AccessControlTargetStruct))),

    Privilege: TlvField(2, TlvEnum<AccessControlEntryPrivilegeEnum>())
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.6
 */
export const AccessControlExtensionStruct = TlvObject({
    /**
     * This field MAY be used by manufacturers to store arbitrary TLV-encoded
     * data related to a fabric’s
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.6.1
     */
    Data: TlvField(1, TlvByteString.bound({ maxLength: 128 }))
});

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.10.4.1
 */
export const enum ChangeTypeEnum {
    Changed = 0,
    Added = 1,
    Removed = 2
};

/**
 * The cluster SHALL send AccessControlEntryChanged events whenever its ACL
 * attribute data is changed by an Administrator.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.10.7.1
 */
export const AccessControlEntryChangedEvent = TlvObject({
    /**
     * The Node ID of the Administrator that made the change, if the change
     * occurred via a CASE session.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.7.1.1
     */
    AdminNodeId: TlvField(1, TlvNullable(TlvUInt64)),

    /**
     * The type of change as appropriate.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.7.1.3
     */
    ChangeType: TlvField(3, TlvNullable(TlvEnum<ChangeTypeEnum>())),

    /**
     * The latest value of the changed entry.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10.7.1.4
     */
    LatestValue: TlvField(4, TlvNullable(AccessControlEntryStruct))
});

/**
 * The cluster SHALL send AccessControlExtensionChanged events whenever its
 * extension attribute data is changed by an Administrator.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.10.7.2
 */
export const AccessControlExtensionChangedEvent = TlvObject({
    AdminNodeId: TlvField(1, TlvNullable(TlvUInt64)),
    ChangeType: TlvField(3, TlvNullable(TlvEnum<ChangeTypeEnum>())),
    LatestValue: TlvField(4, TlvNullable(AccessControlExtensionStruct))
});

export namespace AccessControlCluster {
    /**
     * Access Control
     *
     * The Access Control Cluster exposes a data model view of a Node's Access
     * Control List (ACL), which codifies the rules used to manage and enforce
     * Access Control for the Node's endpoints and their associated cluster
     * instances.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `AccessControl.with()` and a list of
     * supported features.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.10
     */
    export const Complete = Cluster({
        id: 0x1f,
        name: "AccessControl",
        revision: 1,

        attributes: {
            /**
             * An attempt to add an Access Control Entry when no more entries
             * are available SHALL result in a RESOURCE_EXHAUSTED error being
             * reported and the ACL attribute SHALL NOT have the entry
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.10.5.3
             */
            acl: WritableAttribute(0, TlvArray(AccessControlEntryStruct), { readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }),

            /**
             * If present, the Access Control Extensions MAY be used by
             * Administrators to store arbitrary data related to fabric’s
             * Access Control Entries.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.10.5.4
             */
            extension: OptionalWritableAttribute(1, TlvArray(AccessControlExtensionStruct), { readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }),

            /**
             * This attribute SHALL provide the minimum number of Subjects per
             * entry that are supported by this server.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.10.5.5
             */
            subjectsPerAccessControlEntry: FixedAttribute(2, TlvUInt16, { default: 4, readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL provide the minimum number of Targets per
             * entry that are supported by this server.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.10.5.6
             */
            targetsPerAccessControlEntry: FixedAttribute(3, TlvUInt16, { default: 3, readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL provide the minimum number of ACL Entries
             * per fabric that are supported by this server.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.10.5.7
             */
            accessControlEntriesPerFabric: FixedAttribute(4, TlvUInt16, { default: 4, readAcl: AccessLevel.View })
        },

        events: {
            /**
             * The cluster SHALL send AccessControlEntryChanged events whenever
             * its ACL attribute data is changed by an Administrator.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.10.7.1
             */
            accessControlEntryChanged: Event(0, EventPriority.Info, AccessControlEntryChangedEvent),

            /**
             * The cluster SHALL send AccessControlExtensionChanged events
             * whenever its extension attribute data is changed by an
             * Administrator.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.10.7.2
             */
            accessControlExtensionChanged: Event(1, EventPriority.Info, AccessControlExtensionChangedEvent)
        }
    });
};