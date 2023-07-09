/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * Account Login
 *
 * This cluster provides commands that facilitate user account login on a Content App or a node. For example, a Content
 * App running on a Video Player device, which is represented as an endpoint (see [TV Architecture]), can use this
 * cluster to help make the user account on the Content App match the user account on the Client.
 *
 * This function creates a AccountLogin cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2
 */
export function AccountLoginCluster() {
    const cluster = Cluster({ ...AccountLoginCluster.Metadata, ...AccountLoginCluster.BaseComponent });
    return cluster as unknown as AccountLoginCluster.Type;
};

/**
 * The purpose of this command is to determine if the active user account of the given Content App matches the active
 * user account of a given Commissionee, and when it does, return a Setup PIN code which can be used for
 * password-authenticated session establishment (PASE) with the Commissionee.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.1
 */
export const TlvGetSetupPinRequest = TlvObject({
    /**
     * This attribute SHALL specify the client’s Temporary Account Identifier. The length of this field SHALL be at
     * least 16 characters to protect the account holder against password guessing attacks.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.1.1
     */
    tempAccountIdentifier: TlvField(0, TlvString)
});

/**
 * This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or null when the
 * account identified in the request does not match the active account of the running Content App.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.2
 */
export const TlvGetSetupPinResponseRequest = TlvObject({
    /**
     * This field SHALL provide the setup PIN code as a text string at least 11 characters in length or null to
     * indicate that the accounts do not match.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.2.1
     */
    setupPin: TlvField(0, TlvNullable(TlvString.bound({ minLength: 11 })))
});

/**
 * The purpose of this command is to allow the Content App to assume the user account of a given Commissionee by
 * leveraging the Setup PIN code input by the user during the commissioning process.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.3
 */
export const TlvLoginRequest = TlvObject({
    /**
     * This field SHALL specify the client’s temporary account identifier.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.3.1
     */
    tempAccountIdentifier: TlvField(0, TlvString),

    /**
     * This field SHALL provide the setup PIN code as a text string at least 11 characters in length.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.3.2
     */
    setupPin: TlvField(1, TlvString.bound({ minLength: 11 }))
});

export namespace AccountLoginCluster {
    export type Type = 
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * AccountLogin cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2
     */
    export const Metadata = ClusterMetadata({ id: 0x50e, name: "AccountLogin", revision: 1, features: {} });

    /**
     * A AccountLoginCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        commands: {
            /**
             * The purpose of this command is to determine if the active user account of the given Content App matches
             * the active user account of a given Commissionee, and when it does, return a Setup PIN code which can be
             * used for password-authenticated session establishment (PASE) with the Commissionee.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.1
             */
            getSetupPin: Command(0, TlvGetSetupPinRequest, 1, TlvGetSetupPinResponseRequest),

            /**
             * This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or null
             * when the account identified in the request does not match the active account of the running Content App.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.2
             */
            getSetupPinResponse: Command(1, TlvGetSetupPinResponseRequest, 1, TlvNoResponse),

            /**
             * The purpose of this command is to allow the Content App to assume the user account of a given
             * Commissionee by leveraging the Setup PIN code input by the user during the commissioning process.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.3
             */
            login: Command(2, TlvLoginRequest, 2, TlvNoResponse),

            /**
             * The purpose of this command is to instruct the Content App to clear the current user account. This
             * command SHOULD be used by clients of a Content App to indicate the end of a user session.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.4
             */
            logout: Command(3, TlvNoArguments, 3, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all AccountLogin features.
     */
    export const Complete = Cluster({ ...Metadata, commands: { ...BaseComponent.commands } });
};
