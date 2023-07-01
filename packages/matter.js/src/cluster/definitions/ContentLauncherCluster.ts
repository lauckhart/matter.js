/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { Attribute, AccessLevel, WritableAttribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvUInt32, TlvEnum, TlvDouble } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.1
 */
export const enum StatusEnum {
    /**
     * Command succeeded
     */
    Success = 0,

    /**
     * Requested URL could not be reached by device.
     */
    UrlNotAvailable = 1,

    /**
     * Requested URL returned 401 error code.
     */
    AuthFailed = 2
};

/**
 * This command SHALL be generated in response to LaunchContent and LaunchURL
 * commands.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.3
 */
export const LauncherResponseRequest = TlvObject({
    /**
     * This SHALL indicate the status of the command which resulted in this
     * response.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.3.1
     */
    Status: TlvField(0, TlvEnum<StatusEnum>()),

    /**
     * This SHALL indicate Optional app-specific data.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.3.2
     */
    Data: TlvOptionalField(1, TlvByteString)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.9
 */
export const enum MetricTypeEnum {
    /**
     * This value is used for dimensions defined in a number of Pixels.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.9.1
     */
    Pixels = 0,

    /**
     * This value is for dimensions defined as a percentage of the overall
     * display dimensions. For example, if using a Percentage Metric type for a
     * Width measurement of 50.0, against a display width of 1920 pixels, then
     * the resulting value used would be 960 pixels (50.0% of 1920) for that
     * dimension. Whenever a measurement uses this Metric type, the resulting
     * values SHALL be rounded ("floored") towards 0 if the measurement
     * requires an integer final value.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.9.2
     */
    Percentage = 1
};

/**
 * This object defines dimension which can be used for defining Size of
 * background images.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.8
 */
export const DimensionStruct = TlvObject({
    /**
     * This indicates the width using the metric defined in Metric
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.8.1
     */
    Width: TlvField(0, TlvDouble),

    /**
     * This indicates the height using the metric defined in Metric
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.8.2
     */
    Height: TlvField(1, TlvDouble),

    /**
     * This SHALL indicate metric used for defining Height/Width.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.8.3
     */
    Metric: TlvField(2, TlvEnum<MetricTypeEnum>())
});

/**
 * This object defines style information which can be used by content providers
 * to change the Media Player’s style related properties.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.7
 */
export const StyleInformationStruct = TlvObject({
    /**
     * This SHALL indicate the URL of image used for Styling different Video
     * Player sections like Logo, Watermark etc.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.7.1
     */
    ImageUrl: TlvOptionalField(0, TlvString.bound({ maxLength: 8192 })),

    /**
     * This SHALL indicate the color, in RGB or RGBA, used for styling
     * different Video Player sections like Logo, Watermark, etc. The value
     * SHALL conform to the 6-digit or 8-digit format defined for CSS sRGB
     * hexadecimal color notation
     * [https://www.w3.org/TR/css-color-4/#hex-notation]. Examples:
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.7.2
     */
    Color: TlvOptionalField(1, TlvString),

    /**
     * This SHALL indicate the size of the image used for Styling different
     * Video Player sections like Logo, Watermark etc.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.7.3
     */
    Size: TlvOptionalField(2, DimensionStruct)
});

/**
 * This object defines Branding Information which can be provided by the client
 * in order to customize the skin of the Video Player during playback.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6
 */
export const BrandingInformationStruct = TlvObject({
    /**
     * This SHALL indicate name of of the provider for the given content.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.1
     */
    ProviderName: TlvField(0, TlvString.bound({ maxLength: 256 })),

    /**
     * This SHALL indicate background of the Video Player while content launch
     * request is being processed by it. This background information MAY also
     * be used by the Video Player when it is in idle state.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.2
     */
    Background: TlvOptionalField(1, StyleInformationStruct),

    /**
     * This SHALL indicate the logo shown when the Video Player is launching.
     * This is also used when the Video Player is in the idle state and Splash
     * field is not available.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.3
     */
    Logo: TlvOptionalField(2, StyleInformationStruct),

    /**
     * This SHALL indicate the style of progress bar for media playback.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.4
     */
    ProgressBar: TlvOptionalField(3, StyleInformationStruct),

    /**
     * This SHALL indicate the screen shown when the Video Player is in an idle
     * state. If this property is not populated, the Video Player SHALL default
     * to logo or the provider name.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.5
     */
    Splash: TlvOptionalField(4, StyleInformationStruct),

    /**
     * This SHALL indicate watermark shown when the media is playing.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.6
     */
    WaterMark: TlvOptionalField(5, StyleInformationStruct)
});

/**
 * Upon receipt, this SHALL launch content from the specified URL.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2
 */
export const LaunchUrlRequest = TlvObject({
    /**
     * This SHALL indicate the URL of content to launch.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2.1
     */
    ContentUrl: TlvField(0, TlvString),

    /**
     * This field, if present, SHALL provide a string that MAY be used to
     * describe the content being accessed at the given URL.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2.2
     */
    DisplayString: TlvOptionalField(1, TlvString),

    /**
     * This field, if present, SHALL indicate the branding information that MAY
     * be displayed when playing back the given content.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2.3
     */
    BrandingInformation: TlvOptionalField(2, BrandingInformationStruct)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.4
 */
export const enum ParameterEnum {
    /**
     * Actor represents an actor credited in video media content; for example,
     * “Gaby sHoffman”
     */
    Actor = 0,

    /**
     * Channel represents the identifying data for a television channel; for
     * example, "PBS"
     */
    Channel = 1,

    /**
     * A character represented in video media content; for example, “Snow White”
     */
    Character = 2,

    /**
     * A director of the video media content; for example, “Spike Lee”
     */
    Director = 3,

    /**
     * An event is a reference to a type of event; examples would include
     * sports, music, or other types of events. For example, searching for
     * "Football games" would search for a 'game' event entity and a 'football'
     * sport entity.
     */
    Event = 4,

    /**
     * A franchise is a video entity which can represent a number of video
     * entities, like movies or TV shows. For example, take the fictional
     * franchise "Intergalactic Wars" which represents a collection of movie
     * trilogies, as well as animated and live action TV shows. This entity
     * type was introduced to account for requests by customers such as "Find
     * Intergalactic Wars movies", which would search for all 'Intergalactic
     * Wars' programs of the MOVIE MediaType, rather than attempting to match
     * to a single title.
     */
    Franchise = 5,

    /**
     * Genre represents the genre of video media content such as action, drama
     * or comedy.
     */
    Genre = 6,

    /**
     * League represents the categorical information for a sporting league; for
     * example, "NCAA"
     */
    League = 7,

    /**
     * Popularity indicates whether the user asks for popular content.
     */
    Popularity = 8,

    /**
     * The provider (MSP) the user wants this media to be played on; for
     * example, "Netflix".
     */
    Provider = 9,

    /**
     * Sport represents the categorical information of a sport; for example,
     * football
     */
    Sport = 10,

    /**
     * SportsTeam represents the categorical information of a professional
     * sports team; for example, "University of Washington Huskies"
     */
    SportsTeam = 11,

    /**
     * The type of content requested. Supported types are "Movie",
     * "MovieSeries", "TVSeries", "TVSeason", "TVEpisode", "SportsEvent", and
     * "Video"
     */
    Type = 12,

    /**
     * Video represents the identifying data for a specific piece of video
     * content; for example, "Manchester by the Sea".
     */
    Video = 13
};

/**
 * This object defines additional name=value pairs that can be used for
 * identifying content.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.5
 */
export const AdditionalInfoStruct = TlvObject({
    /**
     * This SHALL indicate the name of external id, ex. "musicbrainz".
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.5.1
     */
    Name: TlvField(0, TlvString.bound({ maxLength: 256 })),

    /**
     * This SHALL indicate the value for external id, ex. "ST0000000666661".
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.5.2
     */
    Value: TlvField(1, TlvString.bound({ maxLength: 8192 }))
});

/**
 * This object defines inputs to a search for content for display or playback.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.3
 */
export const ParameterStruct = TlvObject({
    /**
     * This SHALL indicate the entity type.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.3.1
     */
    Type: TlvField(0, TlvEnum<ParameterEnum>()),

    /**
     * This SHALL indicate the entity value, which is a search string, ex.
     * “Manchester by the Sea”.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.3.2
     */
    Value: TlvField(1, TlvString.bound({ maxLength: 1024 })),

    /**
     * This SHALL indicate the list of additional external content identifiers.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.3.3
     */
    ExternalIdList: TlvOptionalField(2, TlvArray(AdditionalInfoStruct))
});

/**
 * This object defines inputs to a search for content for display or playback.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.2
 */
export const ContentSearchStruct = TlvObject({
    /**
     * This SHALL indicate the list of parameters comprising the search. If
     * multiple parameters are provided, the search parameters SHALL be joined
     * with 'AND' logic. e.g. action movies with Tom Cruise will be represented
     * as [{Actor: 'Tom Cruise'}, {Type: 'Movie'}, {Genre: 'Action'}]
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.2.1
     */
    ParameterList: TlvField(0, TlvArray(ParameterStruct))
});

/**
 * Upon receipt, this SHALL launch the specified content with optional search
 * criteria. This command returns a Launch Response.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1
 */
export const LaunchContentRequest = TlvObject({
    /**
     * This SHALL indicate the content to launch.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1.1
     */
    Search: TlvField(0, ContentSearchStruct),

    /**
     * This SHALL indicate whether to automatically start playing content,
     * where: * TRUE means best match should start playing automatically. *
     * FALSE means matches should be displayed on screen for user selection.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1.2
     */
    AutoPlay: TlvField(1, TlvBoolean),

    /**
     * This SHALL indicate Optional app-specific data.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1.3
     */
    Data: TlvOptionalField(2, TlvByteString)
});

export namespace ContentLauncherCluster {
    export const id = 1290;
    export const name = "ContentLauncher";
    export const revision = 1;

    export const featureMap = {
        /**
         * ContentSearch
         *
         * Device supports content search (non-app specific)
         */
        contentSearch: BitFlag(0),

        /**
         * UrlPlayback
         *
         * Device supports basic URL-based file playback
         */
        urlPlayback: BitFlag(1)
    };

    const UrlPlayback = {
        attributes: {
            /**
             * This list provides list of content types supported by the Video
             * Player or Content App in the form of entries in the HTTP
             * "Accept" request header.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.3.1
             */
            acceptHeader: Attribute(0, TlvArray(TlvString), { persistent: true, readAcl: AccessLevel.View }),

            /**
             * This attribute provides information about supported streaming
             * protocols.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.3.2
             */
            supportedStreamingProtocols: WritableAttribute(1, TlvUInt32, { persistent: true })
        },

        commands: {
            /**
             * Upon receipt, this SHALL launch content from the specified URL.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2
             */
            launchUrl: Command(1, LaunchUrlRequest, 2, LauncherResponseRequest)
        }
    };

    const ContentSearch = {
        commands: {
            /**
             * Upon receipt, this SHALL launch the specified content with
             * optional search criteria. This command returns a Launch Response.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1
             */
            launchContent: Command(0, LaunchContentRequest, 2, LauncherResponseRequest)
        }
    };

    const ContentSearchOrUrlPlayback = {
        commands: {
            /**
             * This command SHALL be generated in response to LaunchContent and
             * LaunchURL commands.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.3
             */
            launcherResponse: Command(2, LauncherResponseRequest, 2, TlvNoResponse)
        }
    };

    const Base = {};

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: {
            contentSearch: true,
            urlPlayback: true
        },

        elements: [
            UrlPlayback,
            ContentSearch,
            ContentSearchOrUrlPlayback,
            Base
        ]
    });
};