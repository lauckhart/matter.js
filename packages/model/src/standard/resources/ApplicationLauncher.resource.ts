/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ApplicationLauncher", tag: "cluster",
    classification: "application", pics: "APPLAUNCHER",

    details: "This cluster provides an interface for launching applications on a Video Player device such as a TV." +
        "\n" +
        "This cluster is supported on endpoints that can launch Applications, such as a Casting Video Player " +
        "device with a Content App Platform. It supports identifying an Application by global identifier from " +
        "a given catalog, and launching it. It also supports tracking the currently in-focus Application." +
        "\n" +
        "Depending on the support for the Application Platform feature, the cluster can either support " +
        "launching the application corresponding to the endpoint on which the cluster is supported (AP " +
        "feature not supported) or it can support launching any application (AP feature supported).",

    xref: "cluster§6.4",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§6.4.4",
            children: [{
                name: "AP", tag: "field",
                details: "Support for attributes and commands required for endpoint to support launching any application " +
                    "within the supported application catalogs"
            }]
        },

        {
            name: "CatalogList", tag: "attribute",

            details: "This attribute shall specify the list of supported application catalogs, where each entry in the " +
                "list is the CSA-issued vendor ID for the catalog. The DIAL registry (see [DIAL Registry]) shall use " +
                "value 0x0000." +
                "\n" +
                "It is expected that Content App Platform providers will have their own catalog vendor ID (set to " +
                "their own Vendor ID) and will assign an ApplicationID to each Content App.",

            xref: "cluster§6.4.6.1"
        },

        {
            name: "CurrentApp", tag: "attribute",
            details: "This attribute shall specify the current in-focus application, identified using an Application ID, " +
                "catalog vendor ID and the corresponding endpoint number when the application is represented by a " +
                "Content App endpoint. A null shall be used to indicate there is no current in-focus application.",
            xref: "cluster§6.4.6.2"
        },

        {
            name: "LaunchApp", tag: "command",

            details: "Upon receipt of this command, the server shall launch the application with optional data. The " +
                "application shall be either" +
                "\n" +
                "  • the specified application, if the Application Platform feature is supported;" +
                "\n" +
                "  • otherwise the application corresponding to the endpoint." +
                "\n" +
                "The endpoint shall launch and bring to foreground the requisite application if the application is " +
                "not already launched and in foreground. The Status attribute shall be updated to ActiveVisibleFocus " +
                "on the Application Basic cluster of the Endpoint corresponding to the launched application. The " +
                "Status attribute shall be updated on any other application whose Status may have changed as a result " +
                "of this command. The CurrentApp attribute, if supported, shall be updated to reflect the new " +
                "application in the foreground." +
                "\n" +
                "This command returns a Launcher Response.",

            xref: "cluster§6.4.7.1",

            children: [
                {
                    name: "Application", tag: "field",
                    details: "This field shall specify the Application to launch.",
                    xref: "cluster§6.4.7.1.1"
                },

                {
                    name: "Data", tag: "field",

                    details: "This field shall specify optional app-specific data to be sent to the app." +
                        "\n" +
                        "NOTE" +
                        "\n" +
                        "This format and meaning of this value is proprietary and outside the specification. It provides a " +
                        "transition path for device makers that use other protocols (like DIAL) which allow for proprietary " +
                        "data. Apps that are not yet Matter aware can be launched via Matter, while retaining the existing " +
                        "ability to launch with proprietary data.",

                    xref: "cluster§6.4.7.1.2"
                }
            ]
        },

        {
            name: "StopApp", tag: "command",

            details: "Upon receipt of this command, the server shall stop the application if it is running. The " +
                "application shall be either" +
                "\n" +
                "  • the specified application, if the Application Platform feature is supported;" +
                "\n" +
                "  • otherwise the application corresponding to the endpoint." +
                "\n" +
                "The Status attribute shall be updated to Stopped on the Application Basic cluster of the Endpoint " +
                "corresponding to the stopped application. The Status attribute shall be updated on any other " +
                "application whose Status may have changed as a result of this command." +
                "\n" +
                "This command returns a Launcher Response.",

            xref: "cluster§6.4.7.2",
            children: [{
                name: "Application", tag: "field",
                details: "This field shall specify the Application to stop.",
                xref: "cluster§6.4.7.2.1"
            }]
        },

        {
            name: "HideApp", tag: "command",

            details: "Upon receipt of this command, the server shall hide the application. The application shall be either" +
                "\n" +
                "  • the specified application, if the Application Platform feature is supported;" +
                "\n" +
                "  • otherwise the application corresponding to the endpoint." +
                "\n" +
                "The endpoint may decide to stop the application based on manufacturer specific behavior or resource " +
                "constraints if any. The Status attribute shall be updated to ActiveHidden or Stopped, depending on " +
                "the action taken, on the Application Basic cluster of the Endpoint corresponding to the application " +
                "on which the action was taken. The Status attribute shall be updated on any other application whose " +
                "Status may have changed as a result of this command." +
                "\n" +
                "This command returns a Launcher Response.",

            xref: "cluster§6.4.7.3",
            children: [{
                name: "Application", tag: "field",
                details: "This field shall specify the Application to hide.",
                xref: "cluster§6.4.7.3.1"
            }]
        },

        {
            name: "LauncherResponse", tag: "command",
            details: "This command shall be generated in response to LaunchApp/StopApp/HideApp commands.",
            xref: "cluster§6.4.7.4",

            children: [
                {
                    name: "Status", tag: "field",
                    details: "This field shall indicate the status of the command which resulted in this response.",
                    xref: "cluster§6.4.7.4.1"
                },
                {
                    name: "Data", tag: "field",
                    details: "This field shall specify Optional app-specific data.",
                    xref: "cluster§6.4.7.4.2"
                }
            ]
        },

        {
            name: "StatusEnum", tag: "datatype",
            xref: "cluster§6.4.5.1",

            children: [
                { name: "Success", tag: "field", description: "Command succeeded" },
                { name: "AppNotAvailable", tag: "field", description: "Requested app is not available" },
                { name: "SystemBusy", tag: "field", description: "Video platform unable to honor command" },
                { name: "PendingUserApproval", tag: "field", description: "User approval for app download is pending" },
                { name: "Downloading", tag: "field", description: "Downloading the requested app" },
                { name: "Installing", tag: "field", description: "Installing the requested app" }
            ]
        },

        {
            name: "ApplicationStruct", tag: "datatype",
            details: "This indicates a global identifier for an Application given a catalog.",
            xref: "cluster§6.4.5.2",

            children: [
                {
                    name: "CatalogVendorId", tag: "field",
                    details: "This field shall indicate the CSA-issued vendor ID for the catalog. The DIAL registry shall use " +
                        "value 0x0000." +
                        "\n" +
                        "Content App Platform providers will have their own catalog vendor ID (set to their own Vendor ID) " +
                        "and will assign an ApplicationID to each Content App.",
                    xref: "cluster§6.4.5.2.1"
                },

                {
                    name: "ApplicationId", tag: "field",
                    details: "This field shall indicate the application identifier, expressed as a string, such as \"PruneVideo\" or " +
                        "\"Company X\". This field shall be unique within a catalog." +
                        "\n" +
                        "For the DIAL registry catalog, this value shall be the DIAL prefix (see [DIAL Registry]).",
                    xref: "cluster§6.4.5.2.2"
                }
            ]
        },

        {
            name: "ApplicationEPStruct", tag: "datatype",
            details: "This specifies an app along with its corresponding endpoint.",
            xref: "cluster§6.4.5.3"
        }
    ]
});
