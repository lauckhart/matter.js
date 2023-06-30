/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FixedAttribute, AccessLevel, WritableAttribute, OptionalFixedAttribute, OptionalWritableAttribute, OptionalAttribute, Event, EventPriority, OptionalEvent } from "../../cluster/Cluster.js";
import { TlvUInt16, TlvUInt32, TlvEnum, TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * This structure provides constant values related to overall global
 * capabilities of this Node, that are not cluster-specific.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.1.4.1
 */
export const CapabilityMinimaStruct = TlvObject({
    /**
     * This field SHALL indicate the actual minimum number of concurrent CASE
     * sessions that are supported per fabric.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.1.4.1.1
     */
    CaseSessionsPerFabric: TlvField(0, TlvUInt16),

    /**
     * This field SHALL indicate the actual minimum number of concurrent
     * subscriptions supported per fabric.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.1.4.1.2
     */
    SubscriptionsPerFabric: TlvField(1, TlvUInt16)
});

export const enum ProductFinishEnum {
    Other = 0,
    Matte = 1,
    Satin = 2,
    Polished = 3,
    Rugged = 4,
    Fabric = 5
};

export const enum ColorEnum {
    Black = 0,
    Navy = 1,
    Green = 2,
    Teal = 3,
    Maroon = 4,
    Purple = 5,
    Olive = 6,
    Gray = 7,
    Blue = 8,
    Lime = 9,
    Aqua = 10,
    Red = 11,
    Fuchsia = 12,
    Yellow = 13,
    White = 14,
    Nickel = 15,
    Chrome = 16,
    Brass = 17,
    Copper = 18,
    Silver = 19,
    Gold = 20
};

export const ProductAppearanceStruct = TlvObject({
    Finish: TlvField(0, TlvEnum<ProductFinishEnum>()),
    PrimaryColor: TlvField(1, TlvNullable(TlvEnum<ColorEnum>()))
});

/**
 * The StartUp event SHALL be generated by a Node as soon as reasonable after
 * completing a boot or reboot process. The StartUp event SHOULD be the first
 * Data Model event recorded by the Node after it completes a boot or reboot
 * process.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.1
 */
export const StartUpEvent = TlvObject({
    /**
     * This field SHALL be set to the same value as the one available in the
     * Software Version attribute of the Basic Information Cluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.1.1
     */
    SoftwareVersion: TlvField(0, TlvUInt32)
});

/**
 * The Leave event SHOULD be generated by a Node prior to permanently leaving a
 * given Fabric, such as when the RemoveFabric command is invoked for a given
 * fabric, or triggered by factory reset or some other manufacturer specific
 * action to disable or reset the operational data in the Node. When a Leave
 * event is generated, it SHOULD be assumed that the fabric recorded in the
 * event is no longer usable, and subsequent interactions targeting that fabric
 * will most likely fail.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.3
 */
export const LeaveEvent = TlvObject({
    /**
     * This field SHALL contain the local Fabric Index of the fabric which the
     * node is about to leave.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.3.1
     */
    FabricIndex: TlvField(0, TlvUInt8)
});

/**
 * This event SHALL be supported if and only if the Reachable attribute is
 * supported.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.4
 */
export const ReachableChangedEvent = TlvObject({
    /**
     * This field SHALL indicate the value of the Reachable attribute after it
     * was changed.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.4.1
     */
    ReachableNewValue: TlvField(0, TlvBoolean)
});

export namespace BasicInformationCluster {
    export const id = 40;
    export const name = "BasicInformation";
    export const revision = 1;

    const Base = {
        attributes: {
            /**
             * This attribute SHALL be set to the revision number of the Data
             * Model against which the Node is certified.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.1
             */
            dataModelRevision: FixedAttribute(0, TlvUInt16, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL specify a human readable (displayable) name
             * of the vendor for the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.2
             */
            vendorName: FixedAttribute(1, TlvString.bound({ maxLength: 32 }), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL specify the Vendor ID.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.3
             */
            vendorId: FixedAttribute(2, TlvUInt16, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL specify a human readable (displayable) name
             * of the model for the Node such as the model number (or other
             * identifier) assigned by the vendor.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.4
             */
            productName: FixedAttribute(3, TlvString.bound({ maxLength: 32 }), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL specify the Product ID assigned by the
             * vendor that is unique to the specific product of the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.5
             */
            productId: FixedAttribute(4, TlvUInt16, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL represent a user defined name for the Node.
             * This attribute SHOULD be set during initial commissioning and
             * MAY be updated by further reconfigurations.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.6
             */
            nodeLabel: WritableAttribute(5, TlvString.bound({ maxLength: 32 }), { persistent: true, default: "", readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),

            /**
             * This attribute SHALL be an ISO 3166-1 alpha-2 code to represent
             * the country, dependent territory, or special area of geographic
             * interest in which the Node is located at the time of the
             * attribute being set. This attribute SHALL be set during initial
             * commissioning (unless already set) and MAY be updated by further
             * reconfigurations. This attribute MAY affect some regulatory
             * aspects of the Node’s operation, such as radio transmission
             * power levels in given spectrum allocation bands if technologies
             * where this is applicable are used. The Location’s region code
             * SHALL be interpreted in a case-insensitive manner. If the Node
             * cannot understand the location code with which it was
             * configured, or the location code has not yet been configured, it
             * SHALL configure itself in a region- agnostic manner as
             * determined by the vendor, avoiding region-specific assumptions
             * as much as is practical. The special value XX SHALL indicate
             * that region-agnostic mode is used.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.7
             */
            location: WritableAttribute(6, TlvString.bound({ minLength: 2, maxLength: 2 }), { persistent: true, default: "XX", readAcl: AccessLevel.View, writeAcl: AccessLevel.Administer }),

            /**
             * This attribute SHALL specify the version number of the hardware
             * of the Node. The meaning of its value, and the versioning
             * scheme, are vendor defined.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.8
             */
            hardwareVersion: FixedAttribute(7, TlvUInt16, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL specify the version number of the hardware
             * of the Node. The meaning of its value, and the versioning
             * scheme, are vendor defined. The HardwareVersionString attribute
             * SHALL be used to provide a more user-friendly value than that
             * represented by the HardwareVersion attribute.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.9
             */
            hardwareVersionString: FixedAttribute(8, TlvString.bound({ minLength: 1, maxLength: 64 }), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL contain the current version number for the
             * software running on this Node. The version number can be
             * compared using a total ordering to determine if a version is
             * logically newer than another one. A larger value of
             * SoftwareVersion is newer than a lower value, from the
             * perspective of software updates (see Section 11.19.3.3,
             * “Availability of Software Images”). Nodes MAY query this field
             * to determine the currently running version of software on
             * another given Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.10
             */
            softwareVersion: FixedAttribute(9, TlvUInt32, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL contain a current human-readable
             * representation for the software running on the Node. This
             * version information MAY be conveyed to users. The maximum length
             * of the SoftwareVersionString attribute is 64 bytes of UTF-8
             * characters. The contents SHOULD only use simple 7-bit ASCII
             * alphanumeric and punctuation characters, so as to simplify the
             * conveyance of the value to a variety of cultures.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.11
             */
            softwareVersionString: FixedAttribute(10, TlvString.bound({ minLength: 1, maxLength: 64 }), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL specify the date that the Node was
             * manufactured. The first 8 characters SHALL specify the date of
             * manufacture of the Node in international date notation according
             * to ISO 8601, i.e., YYYYMMDD, e.g., 20060814. The final 8
             * characters MAY include country, factory, line, shift or other
             * related information at the option of the vendor. The format of
             * this information is vendor
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.12
             */
            manufacturingDate: OptionalFixedAttribute(11, TlvString.bound({ minLength: 8, maxLength: 16 }), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL specify a human-readable (displayable)
             * vendor assigned part number for the Node whose meaning and
             * numbering scheme is vendor defined.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.13
             */
            partNumber: OptionalFixedAttribute(12, TlvString.bound({ maxLength: 32 }), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL specify a link to a product specific web
             * page. The syntax of the ProductURL attribute SHALL follow the
             * syntax as specified in RFC 3986
             * [https://tools.ietf.org/html/rfc3986]. The specified URL SHOULD
             * resolve to a maintained web page available for the lifetime of
             * the product. The maximum length of the ProductUrl attribute is
             * 256 ASCII characters.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.14
             */
            productUrl: OptionalFixedAttribute(13, TlvString.bound({ maxLength: 256 }), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL specify a vendor specific human readable
             * (displayable) product label. The ProductLabel attribute MAY be
             * used to provide a more user-friendly value than that represented
             * by the ProductName attribute. The ProductLabel attribute SHOULD
             * NOT include the name of the vendor as defined within the
             * VendorName attribute.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.15
             */
            productLabel: OptionalFixedAttribute(14, TlvString.bound({ maxLength: 64 }), { readAcl: AccessLevel.View }),

            /**
             * This attributes SHALL specify a human readable (displayable)
             * serial number.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.16
             */
            serialNumber: OptionalFixedAttribute(15, TlvString.bound({ maxLength: 32 }), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL allow a local Node configuration to be
             * disabled. When this attribute is set to True the Node SHALL
             * disable the ability to configure the Node through an on-Node
             * user interface. The value of the LocalConfigDisabled attribute
             * SHALL NOT in any way modify, disable, or otherwise affect the
             * user’s ability to trigger a factory reset on the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.17
             */
            localConfigDisabled: OptionalWritableAttribute(16, TlvBoolean, { persistent: true, default: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),

            /**
             * This attribute (when used) SHALL indicate whether the Node can
             * be reached. For a native Node this is implicitly True (and its
             * use is optional).
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.18
             */
            reachable: OptionalAttribute(17, TlvBoolean, { default: true, readAcl: AccessLevel.View }),

            /**
             * This attribute (when used) SHALL indicate a unique identifier
             * for the device, which is constructed in a manufacturer specific
             * manner.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.19
             */
            uniqueId: OptionalFixedAttribute(18, TlvString.bound({ maxLength: 32 }), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL provide the minimum guaranteed value for
             * some system-wide resource capabilities that are not otherwise
             * cluster-specific and do not appear elsewhere. This attribute MAY
             * be used by clients to optimize communication with Nodes by
             * allowing them to use more than the strict minimum values
             * required by this specification, wherever available.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.20
             */
            capabilityMinima: FixedAttribute(19, CapabilityMinimaStruct, { readAcl: AccessLevel.View }),

            productAppearance: OptionalAttribute(20, ProductAppearanceStruct)
        },

        events: {
            /**
             * The StartUp event SHALL be generated by a Node as soon as
             * reasonable after completing a boot or reboot process. The
             * StartUp event SHOULD be the first Data Model event recorded by
             * the Node after it completes a boot or reboot process.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.1
             */
            startUp: Event(0, EventPriority.Critical, StartUpEvent),

            /**
             * The ShutDown event SHOULD be generated by a Node prior to any
             * orderly shutdown sequence on a best-effort basis. When a
             * ShutDown event is generated, it SHOULD be the last Data Model
             * event recorded by the Node. This event SHOULD be delivered
             * urgently to current subscribers on a best- effort basis. Any
             * subsequent incoming interactions to the Node MAY be dropped
             * until the completion of a future boot or reboot process.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.2
             */
            shutDown: OptionalEvent(1, EventPriority.Critical, TlvNoArguments),

            /**
             * The Leave event SHOULD be generated by a Node prior to
             * permanently leaving a given Fabric, such as when the
             * RemoveFabric command is invoked for a given fabric, or triggered
             * by factory reset or some other manufacturer specific action to
             * disable or reset the operational data in the Node. When a Leave
             * event is generated, it SHOULD be assumed that the fabric
             * recorded in the event is no longer usable, and subsequent
             * interactions targeting that fabric will most likely fail.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.3
             */
            leave: OptionalEvent(2, EventPriority.Info, LeaveEvent),

            /**
             * This event SHALL be supported if and only if the Reachable
             * attribute is supported.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.4
             */
            reachableChanged: OptionalEvent(3, EventPriority.Info, ReachableChangedEvent)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        elements: [ Base ]
    });
};