/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, OptionalFixedAttribute, FixedAttribute, Attribute, AccessLevel, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvUInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvArray } from "../../tlv/TlvArray.js";

/**
 * Application Basic
 *
 * This cluster provides information about an application running on a TV or media player device which is represented
 * as an endpoint.
 *
 * Use this factory function to create an ApplicationBasic cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3
 */
export function ApplicationBasicCluster() {
    const cluster = Cluster({ ...ApplicationBasicCluster.Metadata, ...ApplicationBasicCluster.BaseComponent });
    return cluster as unknown as ApplicationBasicCluster.Type;
}

/**
 * This indicates a global identifier for an Application given a catalog.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.4.1
 */
export const TlvApplicationStruct = TlvObject({
    /**
     * This shall indicate the Connectivity Standards Alliance issued vendor ID for the catalog. The DIAL registry
     * shall use value 0x0000.
     *
     * It is assumed that Content App Platform providers (see Video Player Architecture section in [MatterDevLib] )
     * will have their own catalog vendor ID (set to their own Vendor ID) and will assign an ApplicationID to each
     * Content App.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.4.1.1
     */
    catalogVendorId: TlvField(0, TlvUInt16),

    /**
     * This shall indicate the application identifier, expressed as a string, such as "123456-5433", "PruneVideo" or
     * "Company X". This field shall be unique within a catalog.
     *
     * For the DIAL registry catalog, this value shall be the DIAL prefix.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.4.1.2
     */
    applicationId: TlvField(1, TlvString)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.4.2
 */
export const enum ApplicationStatus {
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
}

export namespace ApplicationBasicCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * ApplicationBasic cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3
     */
    export const Metadata = ClusterMetadata({ id: 0x50d, name: "ApplicationBasic", revision: 1, features: {} });

    /**
     * A ApplicationBasicCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute shall specify a human readable (displayable) name of the vendor for the Content App.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.3.1
             */
            vendorName: OptionalFixedAttribute(0, TlvString.bound({ maxLength: 32 }), { default: "" }),

            /**
             * This attribute, if present, shall specify the Connectivity Standards Alliance assigned Vendor ID for the
             * Content App.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.3.2
             */
            vendorId: OptionalFixedAttribute(1, TlvUInt16, { default: 0 }),

            /**
             * This attribute shall specify a human readable (displayable) name of the Content App assigned by the
             * vendor. For example, "NPR On Demand". The maximum length of the ApplicationName attribute is 256 bytes
             * of UTF-8 characters.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.3.3
             */
            applicationName: FixedAttribute(2, TlvString),

            /**
             * This attribute, if present, shall specify a numeric ID assigned by the vendor to identify a specific
             * Content App made by them. If the Content App is certified by the Connectivity Standards Alliance, then
             * this would be the Product ID as specified by the vendor for the certification.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.3.4
             */
            productId: OptionalFixedAttribute(3, TlvUInt16, { default: 0 }),

            /**
             * This attribute shall specify a Content App which consists of an Application ID using a specified catalog.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.3.5
             */
            application: FixedAttribute(4, TlvApplicationStruct),

            /**
             * This attribute shall specify the current running status of the application.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.3.6
             */
            status: Attribute(5, TlvEnum<ApplicationStatus>(), { default: ApplicationStatus.ActiveVisibleFocus }),

            /**
             * This attribute shall specify a human readable (displayable) version of the Content App assigned by the
             * vendor. The maximum length of the ApplicationVersion attribute is 32 bytes of UTF-8 characters.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.3.3.7
             */
            applicationVersion: FixedAttribute(6, TlvString.bound({ maxLength: 32 })),

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

    /**
     * This cluster supports all ApplicationBasic features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
}
