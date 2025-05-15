/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { status } from "#index.js";

status.patch({
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

    xref: { document: "core", section: "7.19.2.18" },

    children: [
        { description: "Operation was successful." },
        { description: "Operation was not successful." },
        { description: "Subscription ID is not active." },
        { description: "The sender of the action or command does not have authorization or access." },
        { description: "The endpoint indicated is unsupported on the node." },
        {
            description: "The action is malformed, has missing fields, or fields with invalid values. Action not carried out."
        },
        { description: "The indicated command ID is not supported on the cluster instance. Command not carried out." },
        {
            description: "The cluster command is malformed, has missing fields, or fields with invalid values. Command not carried out."
        },
        { description: "The indicated attribute ID, field ID or list entry does not exist for an attribute path." },
        {
            description: "Out of range error or set to a reserved value. Attribute keeps its old value. Note that an attribute value may be out of range if an attribute is related to another, e.g. with minimum and maximum attributes. See the individual attribute descriptions for specific details."
        },
        { description: "Attempt to write a read-only attribute." },
        {
            description: "An action or operation failed due to insufficient available resources.INSUFFICIENT_SPACE is anobsolete name for this error code."
        },
        { description: "The indicated data field or entry could not be found." },
        { description: "Reports cannot be issued for this attribute." },
        {
            description: "The data type indicated is undefined or invalid for the indicated data field. Command or action not carried out."
        },
        { description: "Attempt to read a write-only attribute." },
        { description: "Cluster instance data version did not match request path" },
        { description: "The transaction was aborted due to time being exceeded." },
        { description: "The node ID indicated is not supported on the node." },
        {
            description: "The receiver is busy processing another action that prevents the execution of the incoming action."
        },
        {
            description: "The access to the action or command by the sender is permitted by the ACL but restricted by the ARL."
        },
        { description: "The cluster indicated is not supported on the endpoint." },
        { description: "Used by proxies to convey to clients the lack of an upstream subscription to a source." },
        {
            description: "A Untimed Write or Untimed Invoke interaction was used for an attribute or command that requires a Timed Write or Timed Invoke."
        },
        { description: "The indicated event ID is not supported on the cluster instance." },
        { description: "The receiver has insufficient resources to support the specified number of paths in the request" },
        {
            description: "A request with TimedRequest field set to TRUE was issued outside a Timed transaction or a request with TimedRequest set to FALSE was issued inside a Timed transaction."
        },
        { description: "A request requiring a Fail-safe context was invoked without the Fail-Safe context." },
        { description: "The received request cannot be handled due to the current operational state of the device" },
        { description: "A CommandDataIB is missing a response in the InvokeResponses of an Invoke Response action." },
        {
            description: "The node requires updated TC acceptance. The user MAY be directed to visit the EnhancedSetupFlowMaintenanceUrl to complete this."
        },
        {
            description: "The node requires the user to visit the EnhancedSetupFlowMaintenanceUrl for instructions on further action."
        }
    ]
});
