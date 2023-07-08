/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { OptionalAttribute, AccessLevel, Command, TlvNoResponse, Attribute } from "../../cluster/Cluster.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvArray } from "../../tlv/TlvArray.js";

/**
 * Application Launcher
 *
 * This cluster provides an interface for launching content on a media player device such as a TV or Speaker.
 *
 * This function creates a ApplicationLauncher cluster supporting a specific set of features.  Include each
 * {@link ApplicationLauncherCluster.Feature} you wish to support.
 *
 * @param features a list of {@link ApplicationLauncherCluster.Feature} to support
 * @returns a ApplicationLauncher cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4
 */
export function ApplicationLauncherCluster<T extends ApplicationLauncherCluster.Feature[]>(...features: [ ...T ]) {
    const cluster = {
        ...ApplicationLauncherCluster.Metadata,
        supportedFeatures: BitFlags(ApplicationLauncherCluster.Metadata.features, ...features),
        ...ApplicationLauncherCluster.BaseComponent
    };
    extendCluster(cluster, ApplicationLauncherCluster.ApplicationPlatformComponent, { applicationPlatform: true });
    return cluster as unknown as ApplicationLauncherCluster.Type<BitFlags<typeof ApplicationLauncherCluster.Metadata.features, T>>;
};

/**
 * This indicates a global identifier for an Application given a catalog.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.5.2
 */
export const TlvApplicationStruct = TlvObject({
    /**
     * This SHALL indicate the CSA-issued vendor ID for the catalog. The DIAL registry SHALL use value 0x0000.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.5.2.1
     */
    catalogVendorId: TlvField(0, TlvUInt16),

    /**
     * This SHALL indicate the application identifier, expressed as a string, such as "PruneVideo" or "Company X". This
     * field SHALL be unique within a catalog.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.5.2.2
     */
    applicationId: TlvField(1, TlvString)
});

/**
 * This specifies an app along with its corresponding endpoint.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.5.3
 */
export const TlvApplicationEPStruct = TlvObject({
    application: TlvField(0, TlvApplicationStruct),
    endpoint: TlvOptionalField(1, TlvUInt16)
});

/**
 * Upon receipt of this command, the server SHALL launch the application with optional data. The application SHALL be
 * either
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.1
 */
export const TlvLaunchAppRequest = TlvObject({
    /**
     * This field SHALL specify the Application to launch.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.1.1
     */
    application: TlvOptionalField(0, TlvApplicationStruct),

    /**
     * This field SHALL specify optional app-specific data to be sent to the app.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.1.2
     */
    data: TlvOptionalField(1, TlvByteString)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.5.1
 */
export const enum TlvStatusEnum {
    /**
     * Command succeeded
     */
    Success = 0,

    /**
     * Requested app is not available.
     */
    AppNotAvailable = 1,

    /**
     * Video platform unable to honor command.
     */
    SystemBusy = 2
};

/**
 * This command SHALL be generated in response to LaunchApp/StopApp/HideApp commands.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.4
 */
export const TlvLauncherResponseRequest = TlvObject({
    /**
     * This SHALL indicate the status of the command which resulted in this response.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.4.1
     */
    status: TlvField(0, TlvEnum<TlvStatusEnum>()),

    /**
     * This SHALL specify Optional app-specific data.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.4.2
     */
    data: TlvOptionalField(1, TlvByteString)
});

/**
 * Upon receipt of this command, the server SHALL stop the application if it is running. The application SHALL be either
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.2
 */
export const TlvStopAppRequest = TlvObject({
    /**
     * This field SHALL specify the Application to stop.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.2.1
     */
    application: TlvOptionalField(0, TlvApplicationStruct)
});

/**
 * Upon receipt of this command, the server SHALL hide the application. The application SHALL be either
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.3
 */
export const TlvHideAppRequest = TlvObject({
    /**
     * This field SHALL specify the Application to hide.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.3.1
     */
    application: TlvOptionalField(0, TlvApplicationStruct)
});

export namespace ApplicationLauncherCluster {
    /**
     * These are optional features supported by ApplicationLauncherCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.2
     */
    export enum Feature {
        /**
         * ApplicationPlatform
         *
         * Support for attributes and commands required for endpoint to support launching any application within the
         * supported application catalogs
         */
        ApplicationPlatform = "ApplicationPlatform"
    };

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> = 
        typeof Metadata
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { applicationPlatform: true } ? typeof ApplicationPlatformComponent : {});

    /**
     * ApplicationLauncher cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4
     */
    export const Metadata = ClusterMetadata({
        id: 0x50c,
        name: "ApplicationLauncher",
        revision: 1,

        features: {
            /**
             * ApplicationPlatform
             *
             * Support for attributes and commands required for endpoint to support launching any application within
             * the supported application catalogs
             */
            applicationPlatform: BitFlag(0)
        }
    });

    /**
     * A ApplicationLauncherCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute SHALL specify the current in-focus application, identified using an Application ID,
             * catalog vendor ID and the corresponding endpoint number when the application is represented by a Content
             * App endpoint. A null SHALL be used to indicate there is no current in-focus application.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.3.2
             */
            currentApp: OptionalAttribute(
                1,
                TlvNullable(TlvApplicationEPStruct),
                { default: null, readAcl: AccessLevel.View }
            )
        },

        commands: {
            /**
             * Upon receipt of this command, the server SHALL launch the application with optional data. The
             * application SHALL be either
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.1
             */
            launchApp: Command(0, TlvLaunchAppRequest, 3, TlvLauncherResponseRequest),

            /**
             * Upon receipt of this command, the server SHALL stop the application if it is running. The application
             * SHALL be either
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.2
             */
            stopApp: Command(1, TlvStopAppRequest, 3, TlvLauncherResponseRequest),

            /**
             * Upon receipt of this command, the server SHALL hide the application. The application SHALL be either
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.3
             */
            hideApp: Command(2, TlvHideAppRequest, 3, TlvLauncherResponseRequest),

            /**
             * This command SHALL be generated in response to LaunchApp/StopApp/HideApp commands.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.4
             */
            launcherResponse: Command(3, TlvLauncherResponseRequest, 3, TlvNoResponse)
        }
    });

    /**
     * A ApplicationLauncherCluster supports these elements if it supports feature ApplicationPlatform.
     */
    export const ApplicationPlatformComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute SHALL specify the list of supported application catalogs, where each entry in the list is
             * the CSA-issued vendor ID for the catalog. The DIAL registry (see [DIAL Registry]) SHALL use value 0x0000.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.3.1
             */
            catalogList: Attribute(0, TlvArray(TlvUInt16), { persistent: true, default: [], readAcl: AccessLevel.View })
        }
    });

    /**
     * This cluster supports all ApplicationLauncher features.  It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = {
        ...Metadata,
        attributes: { ...BaseComponent.attributes, ...ApplicationPlatformComponent.attributes },
        commands: { ...BaseComponent.commands }
    };
};
