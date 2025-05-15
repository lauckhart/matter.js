/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ContentControl", tag: "cluster",
    classification: "application", pics: "CONCON",

    details: "This cluster is used for managing the content control (including \"parental control\") settings on a" +
        "\n" +
        "media device such as a TV, or Set-top Box." +
        "\n" +
        "This cluster allows to configure content control settings by clients with the Management privilege. " +
        "It is responsibility of the end product to enforce appropriate right access (for example, to prevent " +
        "a child from disabling this feature)." +
        "\n" +
        "NOTE Support for Content Control cluster is provisional.",

    xref: "cluster§6.13",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§6.13.4",

            children: [
                { name: "ST", tag: "field", details: "Supports managing screen time limits." },
                {
                    name: "PM", tag: "field",
                    details: "Supports managing a PIN code which is used for restricting access to configuration of this feature."
                },
                { name: "BU", tag: "field", details: "Supports managing content controls for unrated content." },
                {
                    name: "OCR", tag: "field",
                    details: "Supports managing content controls based upon rating threshold for on demand content."
                },
                {
                    name: "SCR", tag: "field",
                    details: "Supports managing content controls based upon rating threshold for scheduled content."
                },
                { name: "BC", tag: "field", details: "Supports managing a set of channels that are prohibited." },
                { name: "BA", tag: "field", details: "Supports managing a set of applications that are prohibited." },
                {
                    name: "BTW", tag: "field",
                    details: "Supports managing content controls based upon setting time window in which all contents and " +
                        "applications SHALL be blocked."
                }
            ]
        },

        {
            name: "Enabled", tag: "attribute",
            details: "Indicates whether the Content Control feature implemented on a media device is turned off (FALSE) or " +
                "turned on (TRUE).",
            xref: "cluster§6.13.7.1"
        },

        {
            name: "OnDemandRatings", tag: "attribute",

            details: "This attribute shall provide the collection of ratings that are currently valid for this media " +
                "device. The items should honor the metadata of the on-demand content (e.g. Movie) rating system for " +
                "one country or region where the media device has been provisioned. For example, for the MPAA system, " +
                "RatingName may be one value out of \"G\", \"PG\", \"PG-13\", \"R\", \"NC-17\"." +
                "\n" +
                "The media device shall have a way to determine which rating system applies for the on-demand content " +
                "and then populate this attribute. For example, it can do it through examining the Location attribute " +
                "in the Basic Information cluster, and then determining which rating system applies." +
                "\n" +
                "The ratings in this collection shall be in order from a rating for the youngest viewers to the one " +
                "for the oldest viewers. Each rating in the list shall be unique.",

            xref: "cluster§6.13.7.2"
        },

        {
            name: "OnDemandRatingThreshold", tag: "attribute",

            details: "Indicates a threshold rating as a content filter which is compared with the rating for on-demand " +
                "content. For example, if the on-demand content rating is greater than or equal to " +
                "OnDemandRatingThreshold, for a rating system that is ordered from lower viewer age to higher viewer " +
                "age, then on-demand content is not appropriate for the User and the Node shall prevent the playback " +
                "of content." +
                "\n" +
                "This attribute shall be set to one of the values present in the OnDemandRatings attribute." +
                "\n" +
                "When this attribute changes, the device SHOULD make the user aware of any limits of this feature. " +
                "For example, if the feature does not control content within apps, then the device should make this " +
                "clear to the user when the attribute changes.",

            xref: "cluster§6.13.7.3"
        },

        {
            name: "ScheduledContentRatings", tag: "attribute",

            details: "Indicates a collection of ratings which ScheduledContentRatingThreshold can be set to. The items " +
                "should honor metadata of the scheduled content rating system for the country or region where the " +
                "media device has been provisioned." +
                "\n" +
                "The media device shall have a way to determine which scheduled content rating system applies and " +
                "then populate this attribute. For example, this can be done by examining the Location attribute in " +
                "Basic Information cluster, and then determining which rating system applies." +
                "\n" +
                "The ratings in this collection shall be in order from a rating for the youngest viewers to the one " +
                "for the oldest viewers. Each rating in the list shall be unique.",

            xref: "cluster§6.13.7.4"
        },

        {
            name: "ScheduledContentRatingThreshold", tag: "attribute",

            details: "Indicates a threshold rating as a content filter which is used to compare with the rating for " +
                "scheduled content. For example, if the scheduled content rating is greater than or equal to " +
                "ScheduledContentRatingThreshold for a rating system that is ordered from lower viewer age to higher " +
                "viewer age, then the scheduled content is not appropriate for the User and shall be blocked." +
                "\n" +
                "This attribute shall be set to one of the values present in the ScheduledContentRatings attribute." +
                "\n" +
                "When this attribute changes, the device SHOULD make the user aware of any limits of this feature. " +
                "For example, if the feature does not control content within apps, then the device should make this " +
                "clear to the user when the attribute changes.",

            xref: "cluster§6.13.7.5"
        },

        {
            name: "ScreenDailyTime", tag: "attribute",
            details: "Indicates the amount of time (in seconds) which the User is allowed to spend watching TV within one " +
                "day when the Content Control feature is activated.",
            xref: "cluster§6.13.7.6"
        },

        {
            name: "RemainingScreenTime", tag: "attribute",

            details: "Indicates the remaining screen time (in seconds) which the User is allowed to spend watching TV for " +
                "the current day when the Content Control feature is activated. When this value equals 0, the media " +
                "device shall terminate the playback of content." +
                "\n" +
                "This attribute shall be updated when the AddBonusTime command is received and processed successfully " +
                "(with the correct PIN).",

            xref: "cluster§6.13.7.7"
        },

        {
            name: "BlockUnrated", tag: "attribute",

            details: "Indicates whether the playback of unrated content is allowed when the Content Control feature is " +
                "activated. If this attribute equals FALSE, then playback of unrated content shall be permitted. " +
                "Otherwise, the media device shall prevent the playback of unrated content." +
                "\n" +
                "When this attribute changes, the device SHOULD make the user aware of any limits of this feature. " +
                "For example, if the feature does not control content within apps, then the device should make this " +
                "clear to the user when the attribute changes.",

            xref: "cluster§6.13.7.8"
        },

        {
            name: "BlockChannelList", tag: "attribute",
            details: "Indicates a set of channels that shall be blocked when the Content Control feature is activated.",
            xref: "cluster§6.13.7.9"
        },
        {
            name: "BlockApplicationList", tag: "attribute",
            details: "Indicates a set of applications that shall be blocked when the Content Control feature is activated.",
            xref: "cluster§6.13.7.10"
        },

        {
            name: "BlockContentTimeWindow", tag: "attribute",

            details: "Indicates a set of periods during which the playback of content on media device shall be blocked " +
                "when the Content Control feature is activated. The media device shall reject any request to play " +
                "content during one period of this attribute. If it is entering any one period of this attribute, the " +
                "media device shall block content which is playing and generate an event " +
                "EnteringBlockContentTimeWindow. There shall NOT be multiple entries in this attribute list for the " +
                "same day of week.",

            xref: "cluster§6.13.7.11"
        },

        {
            name: "RemainingScreenTimeExpired", tag: "event",
            details: "This event shall be generated when the RemainingScreenTime equals 0.",
            xref: "cluster§6.13.9.1"
        },

        {
            name: "EnteringBlockContentTimeWindow", tag: "event",
            details: "This event shall be generated when entering a period of blocked content as configured in the " +
                "BlockContentTimeWindow attribute.",
            xref: "cluster§6.13.9.2"
        },

        {
            name: "UpdatePin", tag: "command",

            details: "The purpose of this command is to update the PIN used for protecting configuration of the content " +
                "control settings. Upon success, the old PIN shall no longer work." +
                "\n" +
                "The PIN is used to ensure that only the Node (or User) with the PIN code can make changes to the " +
                "Content Control settings, for example, turn off Content Controls or modify the ScreenDailyTime. The " +
                "PIN is composed of a numeric string of up to 6 human readable characters (displayable) ." +
                "\n" +
                "Upon receipt of this command, the media device shall check if the OldPIN field of this command is " +
                "the same as the current PIN. If the PINs are the same, then the PIN code shall be set to NewPIN. " +
                "Otherwise a response with InvalidPINCode error status shall be returned." +
                "\n" +
                "The media device may provide a default PIN to the User via an out of band mechanism. For security " +
                "reasons, it is recommended that a client encourage the user to update the PIN from its default value " +
                "when performing configuration of the Content Control settings exposed by this cluster. The ResetPIN " +
                "command can also be used to obtain the default PIN.",

            xref: "cluster§6.13.8.1",

            children: [
                {
                    name: "OldPin", tag: "field",
                    details: "This field shall specify the original PIN. Once the UpdatePIN command is performed successfully, it " +
                        "shall be invalid.",
                    xref: "cluster§6.13.8.1.1"
                },

                {
                    name: "NewPin", tag: "field",
                    details: "This field shall indicate a new PIN for the Content Control feature.",
                    xref: "cluster§6.13.8.1.2"
                }
            ]
        },

        {
            name: "ResetPin", tag: "command",
            details: "The purpose of this command is to reset the PIN." +
                "\n" +
                "If this command is executed successfully, a ResetPINResponse command with a new PIN shall be " +
                "returned.",
            xref: "cluster§6.13.8.2"
        },

        {
            name: "ResetPinResponse", tag: "command",
            details: "This command shall be generated in response to a ResetPIN command.",
            xref: "cluster§6.13.8.3",
            children: [{
                name: "PinCode", tag: "field",
                details: "This field shall indicate a new PIN of the Content Control feature.",
                xref: "cluster§6.13.8.3.1"
            }]
        },

        {
            name: "Enable", tag: "command",
            details: "The purpose of this command is to turn on the Content Control feature on a media device." +
                "\n" +
                "Upon receipt of the Enable command, the media device shall set the Enabled attribute to TRUE.",
            xref: "cluster§6.13.8.4"
        },

        {
            name: "Disable", tag: "command",
            details: "The purpose of this command is to turn off the Content Control feature on a media device." +
                "\n" +
                "On receipt of the Disable command, the media device shall set the Enabled attribute to FALSE.",
            xref: "cluster§6.13.8.5"
        },

        {
            name: "AddBonusTime", tag: "command",

            details: "The purpose of this command is to add the extra screen time for the user." +
                "\n" +
                "If a client with Operate privilege invokes this command, the media device shall check whether the " +
                "PINCode passed in the command matches the current PINCode value. If these match, then the " +
                "RemainingScreenTime attribute shall be increased by the specified BonusTime value." +
                "\n" +
                "If the PINs do not match, then a response with InvalidPINCode error status shall be returned, and no " +
                "changes shall be made to RemainingScreenTime." +
                "\n" +
                "If a client with Manage privilege or greater invokes this command, the media device shall ignore the " +
                "PINCode field and directly increase the RemainingScreenTime attribute by the specified BonusTime " +
                "value." +
                "\n" +
                "A server that does not support the PM feature shall respond with InvalidPINCode to clients that only " +
                "have Operate privilege unless:" +
                "\n" +
                "  • It has been provided with the PIN value to expect via an out of band mechanism, and" +
                "\n" +
                "  • The client has provided a PINCode that matches the expected PIN value.",

            xref: "cluster§6.13.8.6",

            children: [
                {
                    name: "PinCode", tag: "field",

                    details: "This field shall indicate the PIN." +
                        "\n" +
                        "This field shall be optional for clients with Manage or greater privilege but shall be mandatory for " +
                        "clients with Operate privilege. The PIN provided in this field shall be used to guarantee that a " +
                        "client with Operate permission is allowed to invoke this command only if the PIN passed in this " +
                        "command is equal to the current PIN value.",

                    xref: "cluster§6.13.8.6.1"
                },

                {
                    name: "BonusTime", tag: "field",
                    details: "This field shall indicate the amount of extra time (in seconds) to increase RemainingScreenTime. " +
                        "This field shall NOT exceed the remaining time of this day.",
                    xref: "cluster§6.13.8.6.2"
                }
            ]
        },

        {
            name: "SetScreenDailyTime", tag: "command",
            details: "The purpose of this command is to set the ScreenDailyTime attribute." +
                "\n" +
                "Upon receipt of the SetScreenDailyTime command, the media device shall set the ScreenDailyTime " +
                "attribute to the ScreenTime value.",
            xref: "cluster§6.13.8.7",

            children: [{
                name: "ScreenTime", tag: "field",
                details: "This field shall indicate the time (in seconds) which the User is allowed to spend watching TV on " +
                    "this media device within one day.",
                xref: "cluster§6.13.8.7.1"
            }]
        },

        {
            name: "BlockUnratedContent", tag: "command",
            details: "The purpose of this command is to specify whether programs with no Content rating must be blocked by " +
                "this media device." +
                "\n" +
                "Upon receipt of the BlockUnratedContent command, the media device shall set the BlockUnrated " +
                "attribute to TRUE.",
            xref: "cluster§6.13.8.8"
        },

        {
            name: "UnblockUnratedContent", tag: "command",
            details: "The purpose of this command is to specify whether programs with no Content rating must be blocked by " +
                "this media device." +
                "\n" +
                "Upon receipt of the UnblockUnratedContent command, the media device shall set the BlockUnrated " +
                "attribute to FALSE.",
            xref: "cluster§6.13.8.9"
        },

        {
            name: "SetOnDemandRatingThreshold", tag: "command",
            details: "The purpose of this command is to set the OnDemandRatingThreshold attribute." +
                "\n" +
                "Upon receipt of the SetOnDemandRatingThreshold command, the media device shall check if the Rating " +
                "field is one of values present in the OnDemandRatings attribute. If not, then a response with " +
                "InvalidRating error status shall be returned.",
            xref: "cluster§6.13.8.10",

            children: [{
                name: "Rating", tag: "field",
                details: "This field indicates a threshold rating for filtering on-demand content. This field shall be set to " +
                    "one of the values present in the OnDemandRatings attribute",
                xref: "cluster§6.13.8.10.1"
            }]
        },

        {
            name: "SetScheduledContentRatingThreshold", tag: "command",
            details: "The purpose of this command is to set ScheduledContentRatingThreshold attribute." +
                "\n" +
                "Upon receipt of the SetScheduledContentRatingThreshold command, the media device shall check if the " +
                "Rating field is one of values present in the ScheduledContentRatings attribute. If not, then a " +
                "response with InvalidRating error status shall be returned.",
            xref: "cluster§6.13.8.11",

            children: [{
                name: "Rating", tag: "field",
                details: "This field indicates a threshold rating for filtering scheduled content. This field shall be set to " +
                    "one of the values present in the ScheduledContentRatings attribute.",
                xref: "cluster§6.13.8.11.1"
            }]
        },

        {
            name: "AddBlockChannels", tag: "command",

            details: "The purpose of this command is to set BlockChannelList attribute." +
                "\n" +
                "Upon receipt of the AddBlockChannels command, the media device shall check if the channels" +
                "\n" +
                "passed in this command are valid. If the channel is invalid, then a response with InvalidChannel " +
                "error Status shall be returned." +
                "\n" +
                "If there is at least one channel in Channels field which is not in the BlockChannelList attribute, " +
                "the media device shall process the request by adding these new channels into the BlockChannelList " +
                "attribute and return a successful Status Response. During this process, the media device shall " +
                "assign one unique index to BlockChannelIndex field for every channel passed in this command." +
                "\n" +
                "If all channels in Channel field already exist in the BlockChannelList attribute, then a response " +
                "with ChannelAlreadyExist error Status shall be returned.",

            xref: "cluster§6.13.8.12",

            children: [{
                name: "Channels", tag: "field",
                details: "This field indicates a set of channels that shall be blocked when the Content Control feature is " +
                    "activated. This field shall be set to values present in ChannelList attribute in the Channel " +
                    "cluster. The BlockChannelIndex field passed in this command shall be NULL.",
                xref: "cluster§6.13.8.12.1"
            }]
        },

        {
            name: "RemoveBlockChannels", tag: "command",

            details: "The purpose of this command is to remove channels from the BlockChannelList attribute." +
                "\n" +
                "Upon receipt of the RemoveBlockChannels command, the media device shall check if the channels " +
                "indicated by ChannelIndexes passed in this command are present in BlockChannelList attribute. If one " +
                "or more channels indicated by ChannelIndexes passed in this command field are not present in the " +
                "BlockChannelList attribute, then a response with ChannelNotExist error Status shall be returned.",

            xref: "cluster§6.13.8.13",

            children: [{
                name: "ChannelIndexes", tag: "field",
                details: "This field shall specify a set of indexes indicating Which channels shall be removed from the " +
                    "BlockChannelList attribute.",
                xref: "cluster§6.13.8.13.1"
            }]
        },

        {
            name: "AddBlockApplications", tag: "command",

            details: "The purpose of this command is to set applications to the BlockApplicationList attribute." +
                "\n" +
                "Upon receipt of the AddBlockApplications command, the media device shall check if the Applications " +
                "passed in this command are installed. If there is an application in Applications field which is not " +
                "identified by media device, then a response with UnidentifiableApplication error Status may be" +
                "\n" +
                "returned." +
                "\n" +
                "If there is one or more applications which are not present in BlockApplicationList attribute, the " +
                "media device shall process the request by adding the new application to the BlockApplicationList " +
                "attribute and return a successful Status Response." +
                "\n" +
                "If all applications in Applications field are already present in BlockApplicationList attribute, " +
                "then a response with ApplicationAlreadyExist error Status shall be returned.",

            xref: "cluster§6.13.8.14",

            children: [{
                name: "Applications", tag: "field",
                details: "This field indicates a set of applications that shall be blocked when the Content Control feature is " +
                    "activated.",
                xref: "cluster§6.13.8.14.1"
            }]
        },

        {
            name: "RemoveBlockApplications", tag: "command",

            details: "The purpose of this command is to remove applications from the BlockApplicationList attribute." +
                "\n" +
                "Upon receipt of the RemoveBlockApplications command, the media device shall check if the " +
                "applications passed in this command present in the BlockApplicationList attribute. If one or more " +
                "applications in Applications field which are not present in the BlockApplicationList attribute, then " +
                "a response with ApplicationNotExist error Status shall be returned.",

            xref: "cluster§6.13.8.15",

            children: [{
                name: "Applications", tag: "field",
                details: "This field indicates a set of applications which shall be removed from BlockApplicationList " +
                    "attribute.",
                xref: "cluster§6.13.8.15.1"
            }]
        },

        {
            name: "SetBlockContentTimeWindow", tag: "command",

            details: "The purpose of this command is to set the BlockContentTimeWindow attribute." +
                "\n" +
                "Upon receipt of the SetBlockContentTimeWindow command, the media device shall check if the " +
                "TimeWindowIndex field passed in this command is NULL. If the TimeWindowIndex field is NULL, the " +
                "media device shall check if there is an entry in the BlockContentTimeWindow attribute which matches " +
                "with the TimePeriod and DayOfWeek fields passed in this command. * If Yes, then a response with " +
                "TimeWindowAlreadyExist error status shall be returned. * If No, then the media device shall assign " +
                "one unique index for this time window and add it into the BlockContentTimeWindow list attribute." +
                "\n" +
                "If the TimeWindowIndex field is not NULL and presents in the BlockContentTimeWindow attribute, the " +
                "media device shall replace the original time window with the new time window passed in this command.",

            xref: "cluster§6.13.8.16",
            children: [{
                name: "TimeWindow", tag: "field",
                details: "This field shall indicate a time window requested to set to the BlockContentTimeWindow attribute.",
                xref: "cluster§6.13.8.16.1"
            }]
        },

        {
            name: "RemoveBlockContentTimeWindow", tag: "command",

            details: "The purpose of this command is to remove the selected time windows from the BlockContentTimeWindow " +
                "attribute." +
                "\n" +
                "Upon receipt of the RemoveBlockContentTimeWindow command, the media device shall check if the time " +
                "window index passed in this command presents in the BlockContentTimeWindow attribute." +
                "\n" +
                "If one or more time window indexes passed in this command are not present in BlockContentTimeWindow " +
                "attribute, then a response with TimeWindowNotExist error status shall be returned.",

            xref: "cluster§6.13.8.17",

            children: [{
                name: "TimeWindowIndexes", tag: "field",
                details: "This field shall specify a set of time window indexes indicating which time windows will be removed " +
                    "from the BlockContentTimeWindow attribute.",
                xref: "cluster§6.13.8.17.1"
            }]
        },

        {
            name: "DayOfWeekBitmap", tag: "datatype",
            xref: "cluster§6.13.5.1",

            children: [
                { name: "Sunday", tag: "field", description: "Sunday" },
                { name: "Monday", tag: "field", description: "Monday" },
                { name: "Tuesday", tag: "field", description: "Tuesday" },
                { name: "Wednesday", tag: "field", description: "Wednesday" },
                { name: "Thursday", tag: "field", description: "Thursday" },
                { name: "Friday", tag: "field", description: "Friday" },
                { name: "Saturday", tag: "field", description: "Saturday" }
            ]
        },

        {
            name: "RatingNameStruct", tag: "datatype",
            xref: "cluster§6.13.5.2",

            children: [
                {
                    name: "RatingName", tag: "field",
                    details: "This field shall indicate the name of the rating level of the applied rating system. The applied " +
                        "rating system is dependent upon the region or country where the Node has been provisioned, and may " +
                        "vary from one country to another.",
                    xref: "cluster§6.13.5.2.1"
                },

                {
                    name: "RatingNameDesc", tag: "field",
                    details: "This field shall specify a human readable (displayable) description for RatingName.",
                    xref: "cluster§6.13.5.2.2"
                }
            ]
        },

        {
            name: "BlockChannelStruct", tag: "datatype",
            xref: "cluster§6.13.5.3",

            children: [
                {
                    name: "BlockChannelIndex", tag: "field",
                    details: "This field shall indicate a unique index value for a blocked channel. This value may be used to " +
                        "indicate one selected channel which will be removed from BlockChannelList attribute.",
                    xref: "cluster§6.13.5.3.1"
                },

                {
                    name: "MajorNumber", tag: "field",
                    details: "This field shall indicate the channel major number value (for example, using ATSC format). When the " +
                        "channel number is expressed as a string, such as \"13.1\" or \"256\", the major number would be 13 or " +
                        "256, respectively. This field is required but shall be set to 0 for channels such as over-the-top " +
                        "channels that are not represented by a major or minor number.",
                    xref: "cluster§6.13.5.3.2"
                },

                {
                    name: "MinorNumber", tag: "field",
                    details: "This field shall indicate the channel minor number value (for example, using ATSC format). When the " +
                        "channel number is expressed as a string, such as \"13.1\" or \"256\", the minor number would be 1 or 0, " +
                        "respectively. This field is required but shall be set to 0 for channels such as over-the-top " +
                        "channels that are not represented by a major or minor number.",
                    xref: "cluster§6.13.5.3.3"
                },

                {
                    name: "Identifier", tag: "field",
                    details: "This field shall indicate the unique identifier for a specific channel. This field is optional, but " +
                        "SHOULD be provided when MajorNumber and MinorNumber are not available.",
                    xref: "cluster§6.13.5.3.4"
                }
            ]
        },

        {
            name: "AppInfoStruct", tag: "datatype",
            xref: "cluster§6.13.5.4",

            children: [
                {
                    name: "CatalogVendorId", tag: "field",
                    details: "This field shall indicate the CSA-issued vendor ID for the catalog. The DIAL registry shall use " +
                        "value 0x0000." +
                        "\n" +
                        "Content App Platform providers will have their own catalog vendor ID (set to their own Vendor ID) " +
                        "and will assign an ApplicationID to each Content App.",
                    xref: "cluster§6.13.5.4.1"
                },

                {
                    name: "ApplicationId", tag: "field",
                    details: "This field shall indicate the application identifier, expressed as a string, such as \"PruneVideo\" or " +
                        "\"Company X\". This field shall be unique within a catalog.",
                    xref: "cluster§6.13.5.4.2"
                }
            ]
        },

        {
            name: "TimeWindowStruct", tag: "datatype",
            xref: "cluster§6.13.5.5",

            children: [
                {
                    name: "TimeWindowIndex", tag: "field",
                    details: "This field shall indicate a unique index of a specific time window. This value may be used to " +
                        "indicate a selected time window which will be removed from the BlockContentTimeWindow attribute.",
                    xref: "cluster§6.13.5.5.1"
                },

                {
                    name: "DayOfWeek", tag: "field",
                    details: "This field shall indicate a day of week.",
                    xref: "cluster§6.13.5.5.2"
                },
                {
                    name: "TimePeriod", tag: "field",
                    details: "This field shall indicate one or more discrete time periods.",
                    xref: "cluster§6.13.5.5.3"
                }
            ]
        },

        {
            name: "TimePeriodStruct", tag: "datatype",
            xref: "cluster§6.13.5.6",

            children: [
                {
                    name: "StartHour", tag: "field",
                    details: "This field shall indicate the starting hour.",
                    xref: "cluster§6.13.5.6.1"
                },
                {
                    name: "StartMinute", tag: "field",
                    details: "This field shall indicate the starting minute.",
                    xref: "cluster§6.13.5.6.2"
                },
                {
                    name: "EndHour", tag: "field",
                    details: "This field shall indicate the ending hour. EndHour shall be equal to or greater than StartHour",
                    xref: "cluster§6.13.5.6.3"
                },

                {
                    name: "EndMinute", tag: "field",
                    details: "This field shall indicate the ending minute. If EndHour is equal to StartHour then EndMinute shall " +
                        "be greater than StartMinute. If the EndHour is equal to 23 and the EndMinute is equal to 59, all " +
                        "contents shall be blocked until 23:59:59.",
                    xref: "cluster§6.13.5.6.4"
                }
            ]
        },

        {
            name: "StatusCodeEnum", tag: "datatype",
            xref: "cluster§6.13.6.1",

            children: [
                {
                    name: "InvalidPinCode", tag: "field",
                    description: "Provided PIN Code does not match the current PIN code."
                },
                {
                    name: "InvalidRating", tag: "field",
                    description: "Provided Rating is out of scope of the corresponding Rating list."
                },
                { name: "InvalidChannel", tag: "field", description: "Provided Channel(s) is invalid." },
                { name: "ChannelAlreadyExist", tag: "field", description: "Provided Channel(s) already exists." },
                {
                    name: "ChannelNotExist", tag: "field",
                    description: "Provided Channel(s) doesn’t exist in BlockChannelList attribute."
                },
                {
                    name: "UnidentifiableApplication", tag: "field",
                    description: "Provided Application(s) is not identified."
                },
                {
                    name: "ApplicationAlreadyExist", tag: "field",
                    description: "Provided Application(s) already exists."
                },
                {
                    name: "ApplicationNotExist", tag: "field",
                    description: "Provided Application(s) doesn’t exist in BlockApplicationList attribute."
                },
                {
                    name: "TimeWindowAlreadyExist", tag: "field",
                    description: "Provided time Window already exists in BlockContentTimeWindow attribute."
                },
                {
                    name: "TimeWindowNotExist", tag: "field",
                    description: "Provided time window doesn’t exist in BlockContentTimeWindow attribute."
                }
            ]
        }
    ]
});
