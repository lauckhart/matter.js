/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Type.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { OtaSoftwareUpdateRequestor } from "../../../cluster/definitions/OtaSoftwareUpdateRequestorCluster.js";
import { MatterCoreSpecificationV1_1 } from "../../../spec/Specifications.js";

export namespace OtaSoftwareUpdateRequestorInterface {
    /**
     * This command may be invoked by Administrators to announce the presence of a particular OTA Provider.
     *
     * This command shall be scoped to the accessing fabric.
     *
     * If the accessing fabric index is 0, this command shall fail with an UNSUPPORTED_ACCESS status code.
     *
     * This field shall contain the Node ID of a Node implementing the OTA Provider cluster server, on the accessing
     * fabric.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.6.1
     */
    export type AnnounceOtaProviderRequest = TypeFromSchema<typeof OtaSoftwareUpdateRequestor.TlvAnnounceOtaProviderRequest>;

    export interface Base {
        /**
         * This command may be invoked by Administrators to announce the presence of a particular OTA Provider.
         *
         * This command shall be scoped to the accessing fabric.
         *
         * If the accessing fabric index is 0, this command shall fail with an UNSUPPORTED_ACCESS status code.
         *
         * This field shall contain the Node ID of a Node implementing the OTA Provider cluster server, on the
         * accessing fabric.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.6.1
         */
        announceOtaProvider(request: AnnounceOtaProviderRequest): MaybePromise<void>;
    }
}

export type OtaSoftwareUpdateRequestorInterface = {
    components: [{ flags: {}, methods: OtaSoftwareUpdateRequestorInterface.Base }]
};
