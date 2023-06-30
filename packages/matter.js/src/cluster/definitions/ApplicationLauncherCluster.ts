/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { Attribute, AccessLevel, OptionalWritableAttribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvUInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * This indicates a global identifier for an Application given a catalog.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.5.2
 */
export const ApplicationStruct = TlvObject({
    /**
     * This SHALL indicate the CSA-issued vendor ID for the catalog. The DIAL
     * registry SHALL use value 0x0000.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.5.2.1
     */
    CatalogVendorId: TlvField(0, TlvUInt16),

    /**
     * This SHALL indicate the application identifier, expressed as a string,
     * such as "PruneVideo" or "Company X". This field SHALL be unique within a
     * catalog.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.5.2.2
     */
    ApplicationId: TlvField(1, TlvString)
});

/**
 * This specifies an app along with its corresponding endpoint.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.5.3
 */
export const ApplicationEPStruct = TlvObject({
    Application: TlvField(0, ApplicationStruct),
    Endpoint: TlvOptionalField(1, TlvUInt16)
});

/**
 * StatusEnum Data Type is derived from enum8.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.5.1
 */
export const enum StatusEnum {
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
 * This command SHALL be generated in response to LaunchApp/StopApp/HideApp
 * commands.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.4
 */
export const LauncherResponseRequest = TlvObject({
    /**
     * This SHALL indicate the status of the command which resulted in this
     * response.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.4.1
     */
    Status: TlvField(0, TlvEnum<StatusEnum>()),

    /**
     * This SHALL specify Optional app-specific data.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.4.2
     */
    Data: TlvOptionalField(1, TlvByteString)
});

/**
 * Upon receipt of this command, the server SHALL launch the application with
 * optional data. The application SHALL be either
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.1
 */
export const LaunchAppRequest = TlvObject({
    /**
     * This field SHALL specify the Application to launch.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.1.1
     */
    Application: TlvOptionalField(0, ApplicationStruct),

    /**
     * This field SHALL specify optional app-specific data to be sent to the
     * app.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.1.2
     */
    Data: TlvOptionalField(1, TlvByteString)
});

/**
 * Upon receipt of this command, the server SHALL stop the application if it is
 * running. The application SHALL be either
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.2
 */
export const StopAppRequest = TlvObject({
    /**
     * This field SHALL specify the Application to stop.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.2.1
     */
    Application: TlvOptionalField(0, ApplicationStruct)
});

/**
 * Upon receipt of this command, the server SHALL hide the application. The
 * application SHALL be either
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.3
 */
export const HideAppRequest = TlvObject({
    /**
     * This field SHALL specify the Application to hide.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.3.1
     */
    Application: TlvOptionalField(0, ApplicationStruct)
});

export namespace ApplicationLauncherCluster {
    export const id = 1292;
    export const name = "ApplicationLauncher";
    export const revision = 1;

    export const featureMap = {
        /**
         * ApplicationPlatform
         *
         * Support for attributes and commands required for endpoint to support
         * launching any application within the supported application catalogs
         */
        AP: BitFlag(0)
    };

    const ApplicationPlatform = {
        attributes: {
            /**
             * This attribute SHALL specify the list of supported application
             * catalogs, where each entry in the list is the CSA-issued vendor
             * ID for the catalog. The DIAL registry (see [DIAL Registry])
             * SHALL use value 0x0000.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.3.1
             */
            catalogList: Attribute(0, TlvArray(TlvUInt16), { persistent: true, readAcl: AccessLevel.View })
        }
    };

    const Base = {
        attributes: {
            /**
             * This attribute SHALL specify the current in-focus application,
             * identified using an Application ID, catalog vendor ID and the
             * corresponding endpoint number when the application is
             * represented by a Content App endpoint. A null SHALL be used to
             * indicate there is no current in-focus application.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.3.2
             */
            currentApp: OptionalWritableAttribute(1, TlvNullable(ApplicationEPStruct), { default: null })
        },

        commands: {
            /**
             * Upon receipt of this command, the server SHALL launch the
             * application with optional data. The application SHALL be either
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.1
             */
            launchApp: Command(0, LaunchAppRequest, 3, LauncherResponseRequest),

            /**
             * Upon receipt of this command, the server SHALL stop the
             * application if it is running. The application SHALL be either
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.2
             */
            stopApp: Command(1, StopAppRequest, 3, LauncherResponseRequest),

            /**
             * Upon receipt of this command, the server SHALL hide the
             * application. The application SHALL be either
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.3
             */
            hideApp: Command(2, HideAppRequest, 3, LauncherResponseRequest),

            /**
             * This command SHALL be generated in response to
             * LaunchApp/StopApp/HideApp commands.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.4.4.4
             */
            launcherResponse: Command(3, LauncherResponseRequest, 3, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: { AP: true },
        elements: [
            ApplicationPlatform,
            Base
        ]
    });
};