/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FixedAttribute, AccessLevel, Attribute } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvUInt32, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * The device type and revision define endpoint conformance to a release of a
 * device type definition. See the Data Model specification for more
 * information.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.5.4.1
 */
export const DeviceTypeStruct = TlvObject({
    /**
     * This SHALL indicate the device type definition. The endpoint SHALL
     * conform to the device type definition and cluster specifications
     * required by the device type.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.5.4.1.1
     */
    DeviceType: TlvField(0, TlvUInt32),

    /**
     * This is the implemented revision of the device type definition. The
     * endpoint SHALL conform to this revision of the device type.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.5.4.1.2
     */
    Revision: TlvField(1, TlvUInt16)
});

export namespace DescriptorCluster {
    export const id = 29;
    export const name = "Descriptor";
    export const revision = 1;

    const Base = {
        attributes: {
            /**
             * This is a list of device types and corresponding revisions
             * declaring endpoint conformance (see DeviceTypeStruct). At least
             * one device type entry SHALL be present.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.1
             */
            deviceTypeList: FixedAttribute(0, TlvArray(DeviceTypeStruct), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL list each cluster ID for the server
             * clusters present on the endpoint instance.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.2
             */
            serverList: FixedAttribute(1, TlvArray(TlvUInt32), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL list each cluster ID for the client
             * clusters present on the endpoint instance.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.3
             */
            clientList: FixedAttribute(2, TlvArray(TlvUInt32), { readAcl: AccessLevel.View }),

            /**
             * This attribute indicates composition of the device type
             * instance. Device type instance composition SHALL include the
             * endpoints in this list. See Endpoint Composition for more
             * information which endpoints to include in this list.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.4
             */
            partsList: Attribute(3, TlvArray(TlvUInt16), { readAcl: AccessLevel.View })
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        elements: [ Base ]
    });
};