/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, AccessLevel, OptionalAttribute, Command, TlvNoResponse, OptionalEvent, EventPriority, Event } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvEnum, TlvUInt16, TlvUInt64, TlvUInt32 } from "../../tlv/TlvNumber.js";

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.4
 */
export const enum InterfaceTypeEnum {
    Unspecified = 0,
    WiFi = 1,
    Ethernet = 2,
    Cellular = 3,
    Thread = 4
};

/**
 * This structure describes a network interface supported by the Node, as
 * provided in the NetworkInterfaces attribute.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6
 */
export const NetworkInterface = TlvObject({
    /**
     * This field SHALL indicate a human-readable (displayable) name for the
     * network interface, that is different from all other interfaces.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.1
     */
    Name: TlvField(0, TlvString.bound({ maxLength: 32 })),

    /**
     * This field SHALL indicate if the Node is currently advertising itself
     * operationally on this network interface and is capable of successfully
     * receiving incoming traffic from other Nodes.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.2
     */
    IsOperational: TlvField(1, TlvBoolean),

    /**
     * This field SHALL indicate whether the Node is currently able to reach
     * off-premise services it uses by utilizing IPv4. The value SHALL be null
     * if the Node does not use such services or does not know whether it can
     * reach them.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.3
     */
    OffPremiseServicesReachableIPv4: TlvField(2, TlvNullable(TlvBoolean)),

    /**
     * This field SHALL indicate whether the Node is currently able to reach
     * off-premise services it uses by utilizing IPv6. The value SHALL be null
     * if the Node does not use such services or does not know whether it can
     * reach them.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.4
     */
    OffPremiseServicesReachableIPv6: TlvField(3, TlvNullable(TlvBoolean)),

    /**
     * This field SHALL contain the current link-layer address for a 802.3 or
     * IEEE 802.11-2020 network interface and contain the current extended MAC
     * address for a 802.15.4 interface. The byte order of the octstr SHALL be
     * in wire byte order. For addresses values less than 64 bits, the first
     * two bytes SHALL be zero.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.5
     */
    HardwareAddress: TlvField(4, TlvByteString),

    /**
     * This field SHALL provide a list of the IPv4 addresses that are currently
     * assigned to the network interface.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.6
     */
    IPv4Addresses: TlvField(5, TlvArray(TlvByteString)),

    /**
     * This field SHALL provide a list of the unicast IPv6 addresses that are
     * currently assigned to the network interface. This list SHALL include the
     * Node’s link-local address and SHOULD include any assigned GUA and ULA
     * addresses. This list SHALL NOT include any multicast group addresses to
     * which the Node is subscribed.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.7
     */
    IPv6Addresses: TlvField(6, TlvArray(TlvByteString)),

    /**
     * This field SHALL indicate the type of the interface using the
     * InterfaceTypeEnum.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.8
     */
    Type: TlvField(7, TlvEnum<InterfaceTypeEnum>())
});

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.5
 */
export const enum BootReasonEnum {
    Unspecified = 0,
    PowerOnReboot = 1,
    BrownOutReset = 2,
    SoftwareWatchdogReset = 3,
    HardwareWatchdogReset = 4,
    SoftwareUpdateCompleted = 5,
    SoftwareReset = 6
};

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.1
 */
export const enum HardwareFaultEnum {
    Unspecified = 0,
    Radio = 1,
    Sensor = 2,
    ResettableOverTemp = 3,
    NonResettableOverTemp = 4,
    PowerSource = 5,
    VisualDisplayFault = 6,
    AudioOutputFault = 7,
    UserInterfaceFault = 8,
    NonVolatileMemoryError = 9,
    TamperDetected = 10
};

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.2
 */
export const enum RadioFaultEnum {
    Unspecified = 0,
    WiFiFault = 1,
    CellularFault = 2,
    ThreadFault = 3,
    NfcFault = 4,
    BleFault = 5,
    EthernetFault = 6
};

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.3
 */
export const enum NetworkFaultEnum {
    Unspecified = 0,
    HardwareFailure = 1,
    NetworkJammed = 2,
    ConnectionFailed = 3
};

/**
 * This command SHALL be supported to provide a means for certification tests
 * to trigger some test- plan-specific events, necessary to assist in
 * automation of device interactions for some certification test cases. This
 * command SHALL NOT cause any changes to the state of the device that persist
 * after the last fabric is removed.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.11.7.1
 */
export const TestEventTriggerRequest = TlvObject({
    /**
     * The EnableKey is a 128 bit value provided by the client in this command,
     * which needs to match a value chosen by the manufacturer and configured
     * on the server using manufacturer-specific means, such as
     * pre-provisioning. The value of all zeroes is reserved to indicate that
     * no EnableKey is set. Therefore, if the EnableKey field is received with
     * all zeroes, this command SHALL FAIL with a response status of
     * CONSTRAINT_ERROR.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.7.1.1
     */
    EnableKey: TlvField(0, TlvByteString.bound({ minLength: 16, maxLength: 16 })),

    /**
     * This field SHALL indicate the test or test mode which the client wants
     * to trigger.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.7.1.2
     */
    EventTrigger: TlvField(1, TlvUInt64)
});

/**
 * The HardwareFaultChange Event SHALL indicate a change in the set of hardware
 * faults currently detected by the Node.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.1
 */
export const HardwareFaultChangeEvent = TlvObject({
    /**
     * This field SHALL represent the set of faults currently detected, as per
     * Section 11.11.4.1, “HardwareFaultEnum”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.1.1
     */
    Current: TlvField(0, TlvArray(TlvEnum<HardwareFaultEnum>())),

    /**
     * This field SHALL represent the set of faults detected prior to this
     * change event, as per Section
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.1.2
     */
    Previous: TlvField(1, TlvArray(TlvEnum<HardwareFaultEnum>()))
});

/**
 * The RadioFaultChange Event SHALL indicate a change in the set of radio
 * faults currently detected by the Node.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.2
 */
export const RadioFaultChangeEvent = TlvObject({
    Current: TlvField(0, TlvArray(TlvEnum<RadioFaultEnum>())),
    Previous: TlvField(1, TlvArray(TlvEnum<RadioFaultEnum>()))
});

/**
 * The NetworkFaultChange Event SHALL indicate a change in the set of network
 * faults currently detected by the Node.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.3
 */
export const NetworkFaultChangeEvent = TlvObject({
    Current: TlvField(0, TlvArray(TlvEnum<NetworkFaultEnum>())),
    Previous: TlvField(1, TlvArray(TlvEnum<NetworkFaultEnum>()))
});

/**
 * The BootReason Event SHALL indicate the reason that caused the device to
 * start-up. The data of this event SHALL contain the following information:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.4
 */
export const BootReasonEvent = TlvObject({
    /**
     * This field SHALL contain the reason for this BootReason event.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.4.1
     */
    BootReason: TlvField(0, TlvEnum<BootReasonEnum>())
});

export namespace GeneralDiagnosticsCluster {
    /**
     * General Diagnostics
     *
     * The General Diagnostics Cluster, along with other diagnostics clusters,
     * provide a means to acquire standardized diagnostics metrics that MAY be
     * used by a Node to assist a user or Administrative Node in diagnosing
     * potential problems.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `GeneralDiagnostics.with()` and a list of
     * supported features.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11
     */
    export const Complete = Cluster({
        id: 0x33,
        name: "GeneralDiagnostics",
        revision: 1,

        attributes: {
            /**
             * The NetworkInterfaces attribute SHALL be a list of
             * NetworkInterface structs. Each logical network interface on the
             * Node SHALL be represented by a single entry within the
             * NetworkInterfaces attribute.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.1
             */
            networkInterfaces: Attribute(0, TlvArray(NetworkInterface), { readAcl: AccessLevel.View }),

            /**
             * The RebootCount attribute SHALL indicate a best-effort count of
             * the number of times the Node has rebooted. The RebootCount
             * attribute SHOULD be incremented each time the Node reboots. The
             * RebootCount attribute SHALL NOT be incremented when a Node wakes
             * from a low-power or sleep state. The RebootCount attribute SHALL
             * only be reset to 0 upon a factory reset of the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.2
             */
            rebootCount: Attribute(1, TlvUInt16, { persistent: true, readAcl: AccessLevel.View }),

            /**
             * The UpTime attribute SHALL indicate a best-effort assessment of
             * the length of time, in seconds, since the Node’s last reboot.
             * The UpTime attribute SHOULD be incremented to account for the
             * periods of time that a Node is in a low-power or sleep state.
             * The UpTime attribute SHALL only be reset upon a device reboot.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.3
             */
            upTime: OptionalAttribute(2, TlvUInt64, { omitChanges: true, readAcl: AccessLevel.View }),

            /**
             * The TotalOperationalHours attribute SHALL indicate a best-effort
             * attempt at tracking the length of time, in hours, that the Node
             * has been operational. The TotalOperationalHours attribute SHOULD
             * be incremented to account for the periods of time that a Node is
             * in a low-power or sleep state. The
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.4
             */
            totalOperationalHours: OptionalAttribute(3, TlvUInt32, { persistent: true, omitChanges: true, readAcl: AccessLevel.View }),

            /**
             * The BootReason attribute SHALL indicate the reason for the
             * Node’s most recent boot.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.5
             */
            bootReason: OptionalAttribute(4, TlvEnum<BootReasonEnum>(), { readAcl: AccessLevel.View }),

            /**
             * The ActiveHardwareFaults attribute SHALL indicate the set of
             * faults currently detected by the Node. When the Node detects a
             * fault has been raised, the appropriate HardwareFaultEnum value
             * SHALL be added to this list. This list SHALL NOT contain more
             * than one instance of a specific HardwareFaultEnum value. When
             * the Node detects that all conditions contributing to a fault has
             * been cleared, the corresponding HardwareFaultEnum value SHALL be
             * removed from this list. An empty list SHALL indicate there are
             * currently no active faults. The order of this list SHOULD have
             * no significance. Clients interested in monitoring changes in
             * active faults MAY subscribe to this attribute, or they MAY
             * subscribe to HardwareFaultChange.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.6
             */
            activeHardwareFaults: OptionalAttribute(5, TlvArray(TlvEnum<HardwareFaultEnum>()), { readAcl: AccessLevel.View }),

            /**
             * The ActiveRadioFaults attribute SHALL indicate the set of faults
             * currently detected by the Node. When the Node detects a fault
             * has been raised, the appropriate RadioFaultEnum value SHALL be
             * added to this list. This list SHALL NOT contain more than one
             * instance of a specific RadioFaultEnum value. When the Node
             * detects that all conditions contributing to a fault has been
             * cleared, the corresponding RadioFaultEnum value SHALL be removed
             * from this list. An empty list SHALL indicate there are currently
             * no active faults. The order of this list SHOULD have no
             * significance. Clients interested in monitoring changes in active
             * faults MAY subscribe to this attribute, or they MAY subscribe to
             * RadioFaultChange.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.7
             */
            activeRadioFaults: OptionalAttribute(6, TlvArray(TlvEnum<RadioFaultEnum>()), { readAcl: AccessLevel.View }),

            /**
             * The ActiveNetworkFaults attribute SHALL indicate the set of
             * faults currently detected by the Node. When the Node detects a
             * fault has been raised, the appropriate NetworkFaultEnum value
             * SHALL be added to this list. This list SHALL NOT contain more
             * than one instance of a specific NetworkFaultEnum value. When the
             * Node detects that all conditions contributing to a fault has
             * been cleared, the corresponding NetworkFaultEnum value SHALL be
             * removed from this list. An empty list SHALL indicate there are
             * currently no active faults. The order of this list SHOULD have
             * no significance. Clients interested in monitoring changes in
             * active faults MAY subscribe to this attribute, or they MAY
             * subscribe to NetworkFaultChange.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.8
             */
            activeNetworkFaults: OptionalAttribute(7, TlvArray(TlvEnum<NetworkFaultEnum>()), { readAcl: AccessLevel.View }),

            /**
             * The TestEventTriggersEnabled attribute SHALL indicate whether
             * the Node has any TestEventTrigger configured. When this
             * attribute is true, the Node has been configured with one or more
             * test event triggers by virtue of the internally programmed
             * EnableKey value (see Section 11.11.7.1, “TestEventTrigger
             * Command”) being set to a non-zero value. This attribute can be
             * used by Administrators to detect if a device was inadvertently
             * commissioned with test event trigger mode enabled, and take
             * appropriate action (e.g. warn the user and/or offer to remove
             * all fabrics on the Node).
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.9
             */
            testEventTriggersEnabled: Attribute(8, TlvBoolean, { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * This command SHALL be supported to provide a means for
             * certification tests to trigger some test- plan-specific events,
             * necessary to assist in automation of device interactions for
             * some certification test cases. This command SHALL NOT cause any
             * changes to the state of the device that persist after the last
             * fabric is removed.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.7.1
             */
            testEventTrigger: Command(0, TestEventTriggerRequest, 0, TlvNoResponse)
        },

        events: {
            /**
             * The HardwareFaultChange Event SHALL indicate a change in the set
             * of hardware faults currently detected by the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.1
             */
            hardwareFaultChange: OptionalEvent(0, EventPriority.Critical, HardwareFaultChangeEvent),

            /**
             * The RadioFaultChange Event SHALL indicate a change in the set of
             * radio faults currently detected by the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.2
             */
            radioFaultChange: OptionalEvent(1, EventPriority.Critical, RadioFaultChangeEvent),

            /**
             * The NetworkFaultChange Event SHALL indicate a change in the set
             * of network faults currently detected by the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.3
             */
            networkFaultChange: OptionalEvent(2, EventPriority.Critical, NetworkFaultChangeEvent),

            /**
             * The BootReason Event SHALL indicate the reason that caused the
             * device to start-up. The data of this event SHALL contain the
             * following information:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.4
             */
            bootReason: Event(3, EventPriority.Critical, BootReasonEvent)
        }
    });
};