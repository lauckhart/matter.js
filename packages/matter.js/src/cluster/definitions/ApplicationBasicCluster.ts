/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { OptionalFixedAttribute, AccessLevel, FixedAttribute, Attribute } from "../../cluster/Cluster.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvUInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";

/**
 * This indicates a global identifier for an Application given a catalog.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.4.1
 */
export const TlvApplicationStruct = TlvObject({
    /**
     * This SHALL indicate the Connectivity Standards Alliance issued vendor ID for the catalog. The DIAL registry
     * SHALL use value 0x0000.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.4.1.1
     */
    catalogVendorId: TlvField(0, TlvUInt16),

    /**
     * This SHALL indicate the application identifier, expressed as a string, such as "123456-5433", "PruneVideo" or
     * "Company X". This field SHALL be unique within a catalog.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.4.1.2
     */
    applicationId: TlvField(1, TlvString)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.4.2
 */
export const enum TlvApplicationStatusEnum {
    /**
     * Application is not running.
     */
    Stopped = 0,

    /**
     * Application is running, is visible to the user, and is the active target for input.
     */
    ActiveVisibleFocus = 1,

    /**
     * Application is running but not visible to the user.
     */
    ActiveHidden = 2,

    /**
     * Application is running and visible, but is not the active target for input.
     */
    ActiveVisibleNotFocus = 3
};

/**
 * Standard ApplicationBasic cluster properties.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3
 */
export const ApplicationBasicMetadata = ClusterMetadata({ id: 0x50d, name: "ApplicationBasic", revision: 1 });

/**
 * A ApplicationBasicCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * This attribute SHALL specify a human readable (displayable) name of the vendor for the Content App.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.3.1
         */
        vendorName: OptionalFixedAttribute(
            0,
            TlvString.bound({ maxLength: 32 }),
            { default: "", readAcl: AccessLevel.View }
        ),

        /**
         * This attribute, if present, SHALL specify the Connectivity Standards Alliance assigned Vendor ID for the
         * Content App.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.3.2
         */
        vendorId: OptionalFixedAttribute(1, TlvUInt16, { readAcl: AccessLevel.View }),

        /**
         * This attribute SHALL specify a human readable (displayable) name of the Content App assigned by the vendor.
         * For example, "NPR On Demand". The maximum length of the ApplicationName attribute is 256 bytes of UTF-8
         * characters.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.3.3
         */
        applicationName: FixedAttribute(2, TlvString, { readAcl: AccessLevel.View }),

        /**
         * This attribute, if present, SHALL specify a numeric ID assigned by the vendor to identify a specific Content
         * App made by them. If the Content App is certified by the Connectivity Standards Alliance, then this would be
         * the Product ID as specified by the vendor for the certification.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.3.4
         */
        productId: OptionalFixedAttribute(3, TlvUInt16, { readAcl: AccessLevel.View }),

        /**
         * This attribute SHALL specify a Content App which consists of an Application ID using a specified catalog.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.3.5
         */
        application: FixedAttribute(4, TlvApplicationStruct, { readAcl: AccessLevel.View }),

        /**
         * This attribute SHALL specify the current running status of the application.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.3.6
         */
        status: Attribute(5, TlvEnum<TlvApplicationStatusEnum>(), { default: 1, readAcl: AccessLevel.View }),

        /**
         * This attribute SHALL specify a human readable (displayable) version of the Content App assigned by the
         * vendor. The maximum length of the ApplicationVersion attribute is 32 bytes of UTF-8 charac
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.3.7
         */
        applicationVersion: FixedAttribute(6, TlvString.bound({ maxLength: 32 }), { readAcl: AccessLevel.View }),

        /**
         * This is a list of vendor IDs. Each entry is a vendor-id.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.3.8
         */
        allowedVendorList: FixedAttribute(
            7,
            TlvArray(TlvUInt16),
            { default: [], readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
        )
    }
});

export type ApplicationBasicCluster<T extends TypeFromPartialBitSchema<typeof ApplicationBasicMetadata.features>> = 
    typeof ApplicationBasicMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function ApplicationBasicCluster<T extends (keyof typeof ApplicationBasicMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...ApplicationBasicMetadata,
        supportedFeatures: BitFlags(ApplicationBasicMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as ApplicationBasicCluster<BitFlags<typeof ApplicationBasicMetadata.features, T>>;
};