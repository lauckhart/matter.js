/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, WritableAttribute, AccessLevel, FixedAttribute, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvArray } from "../../tlv/TlvArray.js";

/**
 * Localization Configuration
 *
 * Nodes should be expected to be deployed to any and all regions of the world. These global regions may have differing
 * common languages, units of measurements, and numerical formatting standards. As such, Nodes that visually or audibly
 * convey information need a mechanism by which they can be configured to use a user’s preferred language, units, etc
 *
 * Use this factory function to create a LocalizationConfiguration cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.3
 */
export function LocalizationConfigurationCluster() {
    const cluster = Cluster({
        ...LocalizationConfigurationCluster.Metadata,
        ...LocalizationConfigurationCluster.BaseComponent
    });
    return cluster as unknown as LocalizationConfigurationCluster.Type;
}

export namespace LocalizationConfigurationCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * LocalizationConfiguration cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.3
     */
    export const Metadata = ClusterMetadata({ id: 0x2b, name: "LocalizationConfiguration", revision: 1, features: {} });

    /**
     * A LocalizationConfigurationCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * The ActiveLocale attribute shall represent the locale that the Node is currently configured to use when
             * conveying information. The ActiveLocale attribute shall be a Language Tag as defined by BCP47
             * [https://tools.ietf.org/rfc/bcp/bcp47.txt]. The ActiveLocale attribute shall have a default value
             * assigned by the Vendor and shall be a value contained within the SupportedLocales attribute list.
             *
             * An attempt to write a value to ActiveLocale that is not present in SupportedLocales shall result in a
             * CONSTRAINT_ERROR error.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.3.4.1
             */
            activeLocale: WritableAttribute(
                0,
                TlvString.bound({ maxLength: 35 }),
                { persistent: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The SupportedLocales attribute shall represent a list of locale strings that are valid values for the
             * ActiveLocale attribute. The list shall NOT contain any duplicate entries. The ordering of items within
             * the list SHOULD NOT express any meaning.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.3.4.2
             */
            supportedLocales: FixedAttribute(1, TlvArray(TlvString), { default: [] })
        }
    });

    /**
     * This cluster supports all LocalizationConfiguration features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
}
