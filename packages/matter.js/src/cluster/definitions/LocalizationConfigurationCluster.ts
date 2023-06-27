/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, WritableAttribute, FixedAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvArray } from "../../tlv/TlvArray.js";



export namespace LocalizationConfigurationCluster {
    /**
     * Localization Configuration
     *
     * Nodes should be expected to be deployed to any and all regions of the
     * world. These global regions may have differing common languages, units
     * of measurements, and numerical formatting standards. As such, Nodes that
     * visually or audibly convey information need a mechanism by which they
     * can be configured to use a user’s preferred language, units, etc
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `LocalizationConfiguration.with()` and a
     * list of supported features.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.3
     */
    export const Complete = Cluster({
        id: 0x2b,
        name: "LocalizationConfiguration",
        revision: 1,

        attributes: {
            /**
             * The ActiveLocale attribute SHALL represent the locale that the
             * Node is currently configured to use when conveying information.
             * The ActiveLocale attribute SHALL be a Language Tag as defined by
             * BCP47 [https://tools.ietf.org/rfc/bcp/bcp47.txt]. The
             * ActiveLocale attribute SHALL have a default value assigned by
             * the Vendor and SHALL be a value contained within the
             * SupportedLocales attribute list.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.3.4.1
             */
            activeLocale: WritableAttribute(0, TlvString.bound({ maxLength: 35 }), { persistent: true }),

            /**
             * The SupportedLocales attribute SHALL represent a list of locale
             * strings that are valid values for the ActiveLocale attribute.
             * The list SHALL NOT contain any duplicate entries. The ordering
             * of items within the list SHOULD NOT express any meaning.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.3.4.2
             */
            supportedLocales: FixedAttribute(1, TlvArray(TlvString), { readAcl: AccessLevel.View })
        }
    });
};