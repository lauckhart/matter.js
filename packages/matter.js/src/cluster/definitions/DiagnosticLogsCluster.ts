/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvEnum, TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";

/**
 * Diagnostic Logs
 *
 * The cluster provides commands for retrieving unstructured diagnostic logs from a Node that may be used to aid in
 * diagnostics.
 *
 * This function creates a DiagnosticLogs cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.10
 */
export function DiagnosticLogsCluster() {
    const cluster = Cluster({ ...DiagnosticLogsCluster.Metadata, ...DiagnosticLogsCluster.BaseComponent });
    return cluster as unknown as DiagnosticLogsCluster.Type;
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.10.4.1
 */
export const enum IntentEnum {
    /**
     * SHALL indicate that the purpose of the log request is to retrieve logs for the intention of providing support to
     * an end-user.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.4.1.1
     */
    EndUserSupport = 0,

    /**
     * SHALL indicate that the purpose of the log request is to diagnose the network(s) for which the Node is currently
     * commissioned (and/or connected) or has previously been commissioned (and/or connected).
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.4.1.2
     */
    NetworkDiag = 1,

    /**
     * SHALL indicate that the purpose of the log request is to retrieve any crash logs that may be present on a Node.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.4.1.3
     */
    CrashLogs = 2
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.10.4.3
 */
export const enum TransferProtocolEnum {
    /**
     * SHALL be used by a Client to request that logs are transferred using the LogContent attribute of the response
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.4.3.1
     */
    ResponsePayload = 0,

    /**
     * SHALL be used by a Client to request that logs are transferred using BDX as defined in BDX Protocol
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.4.3.2
     */
    Bdx = 1
};

/**
 * Reception of this command starts the process of retrieving diagnostic logs from a Node. The data for this command is
 * as follows:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.10.5.1
 */
export const TlvRetrieveLogsRequestRequest = TlvObject({
    /**
     * This field SHALL indicate why the diagnostic logs are being retrieved from the Node. A Node MAY utilize this
     * field to selectively determine the logs to transfer.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.5.1.1
     */
    intent: TlvField(0, TlvEnum<IntentEnum>()),

    /**
     * This field SHALL be used to indicate how the log transfer is to be realized. If the field is set to BDX, then if
     * the receiving Node supports BDX it SHALL attempt to use BDX to transfer any potential diagnostic logs; if the
     * receiving Node does not support BDX then the Node SHALL follow the requirements defined for a
     * TransferProtocolEnum of ResponsePayload. If this field is set to ResponsePayload the receiving Node SHALL only
     * utilize the LogContent field of the RetreiveLogsResponse command to transfer diagnostic log information.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.5.1.2
     */
    requestedProtocol: TlvField(1, TlvEnum<TransferProtocolEnum>()),

    /**
     * This field SHALL be present if the RequestedProtocol is BDX. The TransferFileDesignator SHALL be set as the File
     * Designator of the BDX transfer if initiated.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.5.1.3
     */
    transferFileDesignator: TlvOptionalField(2, TlvString.bound({ maxLength: 32 }))
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.10.4.2
 */
export const enum StatusEnum {
    /**
     * SHALL be used if diagnostic logs will be or are being transferred.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.4.2.1
     */
    Success = 0,

    /**
     * SHALL be used when a BDX session is requested, however, all available logs were provided in a
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.4.2.2
     */
    Exhausted = 1,

    /**
     * SHALL be used if the Node does not currently have any diagnostic logs of the requested type (Intent) to transfer.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.4.2.3
     */
    NoLogs = 2,

    /**
     * SHALL be used if the Node is unable to handle the request (e.g. in the process of another transfer) and the
     * Client SHOULD re-attempt the request later.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.4.2.4
     */
    Busy = 3,

    /**
     * SHALL be used if the Node is denying the current transfer of diagnostic logs for any reason.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.4.2.5
     */
    Denied = 4
};

/**
 * This SHALL be generated as a response to the RetrieveLogsRequest. The data for this command is shown in the
 * following.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.10.5.2
 */
export const TlvRetrieveLogsResponseRequest = TlvObject({
    /**
     * This field SHALL indicate the result of an attempt to retrieve diagnostic logs.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.5.2.1
     */
    status: TlvField(0, TlvEnum<StatusEnum>()),

    /**
     * This field SHALL be included in the command if the Status field has a value of Success or Exhausted. A Node
     * SHOULD utilize this field to transfer the newest diagnostic log entries. This field SHALL be empty if BDX is
     * requested and the Status field has a value of Success.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.5.2.2
     */
    logContent: TlvField(1, TlvByteString.bound({ minLength: 1024, maxLength: 1024 })),

    /**
     * This field SHOULD be included in the command if the Status field has a value of Success and the Node maintains a
     * wall clock. When included, the UTCTimeStamp field SHALL contain the value of the oldest log entry in the
     * diagnostic logs that are being transferred.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.5.2.3
     */
    utcTimeStamp: TlvOptionalField(2, TlvUInt64),

    /**
     * This field SHOULD be included in the command if the Status field has a value of Success. When included, the
     * TimeSinceBoot field SHALL contain the time of the oldest log entry in the diagnostic logs that are being
     * transferred represented by the number of microseconds since the last time the Node went through a reboot.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10.5.2.4
     */
    timeSinceBoot: TlvOptionalField(3, TlvUInt64)
});

export namespace DiagnosticLogsCluster {
    export type Type = 
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * DiagnosticLogs cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.10
     */
    export const Metadata = ClusterMetadata({ id: 0x32, name: "DiagnosticLogs", revision: 1, features: {} });

    /**
     * A DiagnosticLogsCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        commands: {
            /**
             * Reception of this command starts the process of retrieving diagnostic logs from a Node. The data for
             * this command is as follows:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.10.5.1
             */
            retrieveLogsRequest: Command(0, TlvRetrieveLogsRequestRequest, 1, TlvRetrieveLogsResponseRequest),

            /**
             * This SHALL be generated as a response to the RetrieveLogsRequest. The data for this command is shown in
             * the following.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.10.5.2
             */
            retrieveLogsResponse: Command(1, TlvRetrieveLogsResponseRequest, 1, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all DiagnosticLogs features.
     */
    export const Complete = Cluster({ ...Metadata, commands: { ...BaseComponent.commands } });
};
