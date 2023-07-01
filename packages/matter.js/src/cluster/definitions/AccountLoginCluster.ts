/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * This message is sent in response to the GetSetupPIN command, and contains
 * the Setup PIN code, or null when the account identified in the request does
 * not match the active account of the running Content App.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.2
 */
export const GetSetupPinResponseRequest = TlvObject({
    /**
     * This field SHALL provide the setup PIN code as a text string at least 11
     * characters in length or null to indicate that the accounts do not match.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.2.1
     */
    SetupPin: TlvField(0, TlvNullable(TlvString.bound({ minLength: 11 })))
});

/**
 * The purpose of this command is to determine if the active user account of
 * the given Content App matches the active user account of a given
 * Commissionee, and when it does, return a Setup PIN code which can be used
 * for password-authenticated session establishment (PASE) with the
 * Commissionee.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.1
 */
export const GetSetupPinRequest = TlvObject({
    /**
     * This attribute SHALL specify the client’s Temporary Account Identifier.
     * The length of this field SHALL be at least 16 characters to protect the
     * account holder against password guessing attacks.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.1.1
     */
    TempAccountIdentifier: TlvField(0, TlvString)
});

/**
 * The purpose of this command is to allow the Content App to assume the user
 * account of a given Commissionee by leveraging the Setup PIN code input by
 * the user during the commissioning process.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.3
 */
export const LoginRequest = TlvObject({
    /**
     * This field SHALL specify the client’s temporary account identifier.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.3.1
     */
    TempAccountIdentifier: TlvField(0, TlvString),

    /**
     * This field SHALL provide the setup PIN code as a text string at least 11
     * characters in length.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.3.2
     */
    SetupPin: TlvField(1, TlvString.bound({ minLength: 11 }))
});

export namespace AccountLoginCluster {
    export const id = 1294;
    export const name = "AccountLogin";
    export const revision = 1;

    const Base = {
        commands: {
            /**
             * The purpose of this command is to determine if the active user
             * account of the given Content App matches the active user account
             * of a given Commissionee, and when it does, return a Setup PIN
             * code which can be used for password-authenticated session
             * establishment (PASE) with the Commissionee.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.1
             */
            getSetupPin: Command(0, GetSetupPinRequest, 1, GetSetupPinResponseRequest),

            /**
             * This message is sent in response to the GetSetupPIN command, and
             * contains the Setup PIN code, or null when the account identified
             * in the request does not match the active account of the running
             * Content App.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.2
             */
            getSetupPinResponse: Command(1, GetSetupPinResponseRequest, 1, TlvNoResponse),

            /**
             * The purpose of this command is to allow the Content App to
             * assume the user account of a given Commissionee by leveraging
             * the Setup PIN code input by the user during the commissioning
             * process.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.3
             */
            login: Command(2, LoginRequest, 2, TlvNoResponse),

            /**
             * The purpose of this command is to instruct the Content App to
             * clear the current user account. This command SHOULD be used by
             * clients of a Content App to indicate the end of a user session.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.4
             */
            logout: Command(3, TlvNoArguments, 3, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        elements: [ Base ]
    });
};