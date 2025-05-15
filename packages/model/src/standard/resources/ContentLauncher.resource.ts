/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ContentLauncher } from "#index.js";

ContentLauncher.patch({
    details: "This cluster provides an interface for launching content on a Video Player device such as a " +
        "Streaming Media Player, Smart TV or Smart Screen." +
        "\n" +
        "This cluster would be supported on a Video Player device or devices that can playback content, such " +
        "as a Streaming Media Player, Smart TV or Smart Screen. This cluster supports playing back content " +
        "referenced by URL. It supports finding content by type and global identifier, and either playing the " +
        "content or displaying the search results." +
        "\n" +
        "The cluster server for Content Launcher is implemented by an endpoint that can launch content, such " +
        "as a Video Player, or an endpoint representing a Content App on such a device." +
        "\n" +
        "When this cluster is implemented for an Content App Endpoint (Endpoint with type “Content App” and " +
        "having an Application Basic cluster), the Video Player device shall launch the application when a " +
        "client invokes the LaunchContent or LaunchURL commands.",

    xref: { document: "cluster", section: "6.7" },

    children: [
        undefined,

        {
            children: [
                { description: "ContentSearch" },
                { description: "UrlPlayback" },
                { description: "AdvancedSeek" },
                { description: "TextTracks" },
                { description: "AudioTracks" }
            ]
        },

        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Device supports Dynamic Adaptive Streaming over HTTP (DASH)" },
                { description: "Device supports HTTP Live Streaming (HLS)" }
            ]
        },

        {
            children: [
                { description: "Command succeeded" },
                { description: "Requested URL could not be reached by device." },
                { description: "Requested URL returned 401 error code." },
                { description: "Requested Text Track (in PlaybackPreferences) not available" },
                { description: "Requested Audio Track (in PlaybackPreferences) not available" }
            ]
        },

        {
            children: [
                { description: "Actor represents an actor credited in video media content; for example, “Gaby Hoffman”" },
                { description: "Channel represents the identifying data for a television channel; for example, \"PBS\"" },
                { description: "A character represented in video media content; for example, “Snow White”" },
                { description: "A director of the video media content; for example, “Spike Lee”" },
                {
                    description: "An event is a reference to a type of event; examples would include sports, music, or other types of events. For example, searching for \"Football games\" would search for a 'game' event entity and a 'football' sport entity."
                },
                {
                    description: "A franchise is a video entity which can represent a number of video entities, like movies or TV shows. For example, take the fictional franchise \"Intergalactic Wars\" which represents a collection of movie trilogies, as well as animated and live action TV shows. This entity type was introduced to account for requests by customers such as \"Find Intergalactic Wars movies\", which would search for all 'Intergalactic Wars' programs of the MOVIE MediaType, rather than attempting to match to a single title."
                },
                { description: "Genre represents the genre of video media content such as action, drama or comedy." },
                {
                    description: "League represents the categorical information for a sporting league; for example, \"NCAA\""
                },
                { description: "Popularity indicates whether the user asks for popular content." },
                { description: "The provider (MSP) the user wants this media to be played on; for example, \"Netflix\"." },
                { description: "Sport represents the categorical information of a sport; for example, football" },
                {
                    description: "SportsTeam represents the categorical information of a professional sports team; for example, \"University of Washington Huskies\""
                },
                {
                    description: "The type of content requested. Supported types are \"Movie\", \"MovieSeries\", \"TVSeries\", \"TVSeason\", \"TVEpisode\", \"Trailer\", \"SportsEvent\", \"LiveEvent\", and \"Video\""
                },
                {
                    description: "Video represents the identifying data for a specific piece of video content; for example, \"Manchester by the Sea\"."
                },
                { description: "Season represents the specific season number within a TV series." },
                { description: "Episode represents a specific episode number within a Season in a TV series." },
                {
                    description: "Represents a search text input across many parameter types or even outside of the defined param types."
                }
            ]
        },

        {
            children: [
                { description: "Dimensions defined in a number of Pixels" },
                { description: "Dimensions defined as a percentage" }
            ]
        }
    ]
});
