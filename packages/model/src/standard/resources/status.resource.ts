/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "status", tag: "datatype",
    description: "Status Code",

    details: "An enumeration value that means a success or error status. A status code is indicated as a response " +
        "to an action in an interaction (see Interaction Model)." +
        "\n" +
        "A status code shall be one of:" +
        "\n" +
        "  • a common status code from the set defined in the Interaction Model status code table;" +
        "\n" +
        "  • a cluster status code that is scoped to a particular cluster." +
        "\n" +
        "The following table defines the enumeration ranges for status codes." +
        "\n" +
        "Status codes in an undefined range, or status codes undefined within a range are reserved and shall " +
        "NOT be indicated.",

    xref: "core§7.19.2.18",

    children: [
        { name: "Success", tag: "field", description: "Operation was successful.", xref: "core§8.10.1" },
        { name: "Failure", tag: "field", description: "Operation was not successful.", xref: "core§8.10.1" },
        {
            name: "InvalidSubscription", tag: "field",
            description: "Subscription ID is not active.",
            xref: "core§8.10.1"
        },
        {
            name: "UnsupportedAccess", tag: "field",
            description: "The sender of the action or command does not have authorization or access.",
            xref: "core§8.10.1"
        },
        {
            name: "UnsupportedEndpoint", tag: "field",
            description: "The endpoint indicated is unsupported on the node.",
            xref: "core§8.10.1"
        },
        {
            name: "InvalidAction", tag: "field",
            description: "The action is malformed, has missing fields, or fields with invalid values. Action not carried out.",
            xref: "core§8.10.1"
        },
        {
            name: "UnsupportedCommand", tag: "field",
            description: "The indicated command ID is not supported on the cluster instance. Command not carried out.",
            xref: "core§8.10.1"
        },
        {
            name: "InvalidCommand", tag: "field",
            description: "The cluster command is malformed, has missing fields, or fields with invalid values. Command not carried out.",
            xref: "core§8.10.1"
        },
        {
            name: "UnsupportedAttribute", tag: "field",
            description: "The indicated attribute ID, field ID or list entry does not exist for an attribute path.",
            xref: "core§8.10.1"
        },
        {
            name: "ConstraintError", tag: "field",
            description: "Out of range error or set to a reserved value. Attribute keeps its old value. Note that an attribute value may be out of range if an attribute is related to another, e.g. with minimum and maximum attributes. See the individual attribute descriptions for specific details.",
            xref: "core§8.10.1"
        },
        {
            name: "UnsupportedWrite", tag: "field",
            description: "Attempt to write a read-only attribute.",
            xref: "core§8.10.1"
        },
        {
            name: "ResourceExhausted", tag: "field",
            description: "An action or operation failed due to insufficient available resources.INSUFFICIENT_SPACE is anobsolete name for this error code.",
            xref: "core§8.10.1"
        },
        {
            name: "NotFound", tag: "field",
            description: "The indicated data field or entry could not be found.",
            xref: "core§8.10.1"
        },
        {
            name: "UnreportableAttribute", tag: "field",
            description: "Reports cannot be issued for this attribute.",
            xref: "core§8.10.1"
        },
        {
            name: "InvalidDataType", tag: "field",
            description: "The data type indicated is undefined or invalid for the indicated data field. Command or action not carried out.",
            xref: "core§8.10.1"
        },
        {
            name: "UnsupportedRead", tag: "field",
            description: "Attempt to read a write-only attribute.",
            xref: "core§8.10.1"
        },
        {
            name: "DataVersionMismatch", tag: "field",
            description: "Cluster instance data version did not match request path",
            xref: "core§8.10.1"
        },
        {
            name: "Timeout", tag: "field",
            description: "The transaction was aborted due to time being exceeded.",
            xref: "core§8.10.1"
        },
        {
            name: "UnsupportedNode", tag: "field",
            description: "The node ID indicated is not supported on the node.",
            xref: "core§8.10.1"
        },
        {
            name: "Busy", tag: "field",
            description: "The receiver is busy processing another action that prevents the execution of the incoming action.",
            xref: "core§8.10.1"
        },
        {
            name: "AccessRestricted", tag: "field",
            description: "The access to the action or command by the sender is permitted by the ACL but restricted by the ARL.",
            xref: "core§8.10.1"
        },
        {
            name: "UnsupportedCluster", tag: "field",
            description: "The cluster indicated is not supported on the endpoint.",
            xref: "core§8.10.1"
        },
        {
            name: "NoUpstreamSubscription", tag: "field",
            description: "Used by proxies to convey to clients the lack of an upstream subscription to a source.",
            xref: "core§8.10.1"
        },
        {
            name: "NeedsTimedInteraction", tag: "field",
            description: "A Untimed Write or Untimed Invoke interaction was used for an attribute or command that requires a Timed Write or Timed Invoke.",
            xref: "core§8.10.1"
        },
        {
            name: "UnsupportedEvent", tag: "field",
            description: "The indicated event ID is not supported on the cluster instance.",
            xref: "core§8.10.1"
        },
        {
            name: "PathsExhausted", tag: "field",
            description: "The receiver has insufficient resources to support the specified number of paths in the request",
            xref: "core§8.10.1"
        },
        {
            name: "TimedRequestMismatch", tag: "field",
            description: "A request with TimedRequest field set to TRUE was issued outside a Timed transaction or a request with TimedRequest set to FALSE was issued inside a Timed transaction.",
            xref: "core§8.10.1"
        },
        {
            name: "FailsafeRequired", tag: "field",
            description: "A request requiring a Fail-safe context was invoked without the Fail-Safe context.",
            xref: "core§8.10.1"
        },
        {
            name: "InvalidInState", tag: "field",
            description: "The received request cannot be handled due to the current operational state of the device",
            xref: "core§8.10.1"
        },
        {
            name: "NoCommandResponse", tag: "field",
            description: "A CommandDataIB is missing a response in the InvokeResponses of an Invoke Response action.",
            xref: "core§8.10.1"
        },
        {
            name: "TermsAndConditionsChanged", tag: "field",
            description: "The node requires updated TC acceptance. The user MAY be directed to visit the EnhancedSetupFlowMaintenanceUrl to complete this.",
            xref: "core§8.10.1"
        },
        {
            name: "MaintenanceRequired", tag: "field",
            description: "The node requires the user to visit the EnhancedSetupFlowMaintenanceUrl for instructions on further action.",
            xref: "core§8.10.1"
        }
    ]
});
