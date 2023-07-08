/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { WritableAttribute, AccessLevel, FixedAttribute } from "../../cluster/Cluster.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvArray } from "../../tlv/TlvArray.js";

/**
 * Localization Configuration
 *
 * Nodes should be expected to be deployed to any and all regions of the world. These global regions may have differing
 * common languages, units of measurements, and numerical formatting standards. As such, Nodes that visually or audibly
 * convey information need a mechanism by which they can be configured to use a user’s preferred language, units, etc
 *
 * This function creates a LocalizationConfiguration cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.3
 */
export function LocalizationConfigurationCluster() {
    const cluster = { ...LocalizationConfigurationCluster.Metadata, ...LocalizationConfigurationCluster.BaseComponent };
    return cluster as unknown as LocalizationConfigurationCluster.Type;
};

export namespace LocalizationConfigurationCluster {
    export type Type = 
        typeof Metadata
        & typeof BaseComponent;

    /**
     * LocalizationConfiguration cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.3
     */
    export const Metadata = ClusterMetadata({ id: 0x2b, name: "LocalizationConfiguration", revision: 1 });

    /**
     * A LocalizationConfigurationCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * The ActiveLocale attribute SHALL represent the locale that the Node is currently configured to use when
             * conveying information. The ActiveLocale attribute SHALL be a Language Tag as defined by BCP47
             * [https://tools.ietf.org/rfc/bcp/bcp47.txt]. The ActiveLocale attribute SHALL have a default value
             * assigned by the Vendor and SHALL be a value contained within the SupportedLocales attribute list.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.3.4.1
             */
            activeLocale: WritableAttribute(
                0,
                TlvString.bound({ maxLength: 35 }),
                { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The SupportedLocales attribute SHALL represent a list of locale strings that are valid values for the
             * ActiveLocale attribute. The list SHALL NOT contain any duplicate entries. The ordering of items within
             * the list SHOULD NOT express any meaning.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.3.4.2
             */
            supportedLocales: FixedAttribute(1, TlvArray(TlvString), { default: [], readAcl: AccessLevel.View })
        }
    });

    /**
     * This cluster supports all LocalizationConfiguration features.
     */
    export const Complete = { ...Metadata, attributes: { ...BaseComponent.attributes } };
};
