/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { WritableAttribute, AccessLevel, FixedAttribute } from "../../cluster/Cluster.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";



/**
 * Standard LocalizationConfiguration cluster properties.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.3
 */
export const LocalizationConfigurationMetadata = ClusterMetadata({
    id: 0x2b,
    name: "LocalizationConfiguration",
    revision: 1
});

/**
 * A LocalizationConfigurationCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * The ActiveLocale attribute SHALL represent the locale that the Node is currently configured to use when
         * conveying information. The ActiveLocale attribute SHALL be a Language Tag as defined by BCP47
         * [https://tools.ietf.org/rfc/bcp/bcp47.txt]. The ActiveLocale attribute SHALL have a default value assigned
         * by the Vendor and SHALL be a value contained within the SupportedLocales attribute list.
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
         * ActiveLocale attribute. The list SHALL NOT contain any duplicate entries. The ordering of items within the
         * list SHOULD NOT express any meaning.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.3.4.2
         */
        supportedLocales: FixedAttribute(1, TlvArray(TlvString), { default: [], readAcl: AccessLevel.View })
    }
});

export type LocalizationConfigurationCluster<T extends TypeFromPartialBitSchema<typeof LocalizationConfigurationMetadata.features>> = 
    typeof LocalizationConfigurationMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function LocalizationConfigurationCluster<T extends (keyof typeof LocalizationConfigurationMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...LocalizationConfigurationMetadata,
        supportedFeatures: BitFlags(LocalizationConfigurationMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as LocalizationConfigurationCluster<BitFlags<typeof LocalizationConfigurationMetadata.features, T>>;
};