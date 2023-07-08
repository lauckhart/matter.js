/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent, extendCluster } from "../../cluster/ClusterFactory.js";
import { BitFlag, TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";
import { Attribute, AccessLevel, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvUInt32, TlvDouble, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.9
 */
export const enum TlvMetricTypeEnum {
    /**
     * This value is used for dimensions defined in a number of Pixels.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.9.1
     */
    Pixels = 0,

    /**
     * This value is for dimensions defined as a percentage of the overall display dimensions. For example, if using a
     * Percentage Metric type for a Width measurement of 50.0, against a display width of 1920 pixels, then the
     * resulting value used would be 960 pixels (50.0% of 1920) for that dimension. Whenever a measurement uses this
     * Metric type, the resulting values SHALL be rounded ("floored") towards 0 if the measurement requires an integer
     * final value.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.9.2
     */
    Percentage = 1
};

/**
 * This object defines dimension which can be used for defining Size of background images.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.8
 */
export const TlvDimensionStruct = TlvObject({
    /**
     * This indicates the width using the metric defined in Metric
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.8.1
     */
    width: TlvField(0, TlvDouble),

    /**
     * This indicates the height using the metric defined in Metric
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.8.2
     */
    height: TlvField(1, TlvDouble),

    /**
     * This SHALL indicate metric used for defining Height/Width.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.8.3
     */
    metric: TlvField(2, TlvEnum<TlvMetricTypeEnum>())
});

/**
 * This object defines style information which can be used by content providers to change the Media Player’s style
 * related properties.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.7
 */
export const TlvStyleInformationStruct = TlvObject({
    /**
     * This SHALL indicate the URL of image used for Styling different Video Player sections like Logo, Watermark etc.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.7.1
     */
    imageUrl: TlvOptionalField(0, TlvString.bound({ maxLength: 8192 })),

    /**
     * This SHALL indicate the color, in RGB or RGBA, used for styling different Video Player sections like Logo,
     * Watermark, etc. The value SHALL conform to the 6-digit or 8-digit format defined for CSS sRGB hexadecimal color
     * notation [https://www.w3.org/TR/css-color-4/#hex-notation]. Examples:
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.7.2
     */
    color: TlvOptionalField(1, TlvString),

    /**
     * This SHALL indicate the size of the image used for Styling different Video Player sections like Logo, Watermark
     * etc.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.7.3
     */
    size: TlvOptionalField(2, TlvDimensionStruct)
});

/**
 * This object defines Branding Information which can be provided by the client in order to customize the skin of the
 * Video Player during playback.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6
 */
export const TlvBrandingInformationStruct = TlvObject({
    /**
     * This SHALL indicate name of of the provider for the given content.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.1
     */
    providerName: TlvField(0, TlvString.bound({ maxLength: 256 })),

    /**
     * This SHALL indicate background of the Video Player while content launch request is being processed by it. This
     * background information MAY also be used by the Video Player when it is in idle state.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.2
     */
    background: TlvOptionalField(1, TlvStyleInformationStruct),

    /**
     * This SHALL indicate the logo shown when the Video Player is launching. This is also used when the Video Player
     * is in the idle state and Splash field is not available.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.3
     */
    logo: TlvOptionalField(2, TlvStyleInformationStruct),

    /**
     * This SHALL indicate the style of progress bar for media playback.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.4
     */
    progressBar: TlvOptionalField(3, TlvStyleInformationStruct),

    /**
     * This SHALL indicate the screen shown when the Video Player is in an idle state. If this property is not
     * populated, the Video Player SHALL default to logo or the provider name.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.5
     */
    splash: TlvOptionalField(4, TlvStyleInformationStruct),

    /**
     * This SHALL indicate watermark shown when the media is playing.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.6
     */
    waterMark: TlvOptionalField(5, TlvStyleInformationStruct)
});

/**
 * Upon receipt, this SHALL launch content from the specified URL.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2
 */
export const TlvLaunchUrlRequest = TlvObject({
    /**
     * This SHALL indicate the URL of content to launch.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2.1
     */
    contentUrl: TlvField(0, TlvString),

    /**
     * This field, if present, SHALL provide a string that MAY be used to describe the content being accessed at the
     * given URL.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2.2
     */
    displayString: TlvOptionalField(1, TlvString),

    /**
     * This field, if present, SHALL indicate the branding information that MAY be displayed when playing back the
     * given content.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2.3
     */
    brandingInformation: TlvOptionalField(2, TlvBrandingInformationStruct)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.1
 */
export const enum TlvStatusEnum {
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
 * This command SHALL be generated in response to LaunchContent and LaunchURL commands.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.3
 */
export const TlvLauncherResponseRequest = TlvObject({
    /**
     * This SHALL indicate the status of the command which resulted in this response.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.3.1
     */
    status: TlvField(0, TlvEnum<TlvStatusEnum>()),

    /**
     * This SHALL indicate Optional app-specific data.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.3.2
     */
    data: TlvOptionalField(1, TlvByteString)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.4
 */
export const enum TlvParameterEnum {
    /**
     * Actor represents an actor credited in video media content; for example, “Gaby sHoffman”
     */
    Actor = 0,

    /**
     * Channel represents the identifying data for a television channel; for example, "PBS"
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
     * An event is a reference to a type of event; examples would include sports, music, or other types of events. For
     * example, searching for "Football games" would search for a 'game' event entity and a 'football' sport entity.
     */
    Event = 4,

    /**
     * A franchise is a video entity which can represent a number of video entities, like movies or TV shows. For
     * example, take the fictional franchise "Intergalactic Wars" which represents a collection of movie trilogies, as
     * well as animated and live action TV shows. This entity type was introduced to account for requests by customers
     * such as "Find Intergalactic Wars movies", which would search for all 'Intergalactic Wars' programs of the MOVIE
     * MediaType, rather than attempting to match to a single title.
     */
    Franchise = 5,

    /**
     * Genre represents the genre of video media content such as action, drama or comedy.
     */
    Genre = 6,

    /**
     * League represents the categorical information for a sporting league; for example, "NCAA"
     */
    League = 7,

    /**
     * Popularity indicates whether the user asks for popular content.
     */
    Popularity = 8,

    /**
     * The provider (MSP) the user wants this media to be played on; for example, "Netflix".
     */
    Provider = 9,

    /**
     * Sport represents the categorical information of a sport; for example, football
     */
    Sport = 10,

    /**
     * SportsTeam represents the categorical information of a professional sports team; for example, "University of
     * Washington Huskies"
     */
    SportsTeam = 11,

    /**
     * The type of content requested. Supported types are "Movie", "MovieSeries", "TVSeries", "TVSeason", "TVEpisode",
     * "SportsEvent", and "Video"
     */
    Type = 12,

    /**
     * Video represents the identifying data for a specific piece of video content; for example, "Manchester by the
     * Sea".
     */
    Video = 13
};

/**
 * This object defines additional name=value pairs that can be used for identifying content.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.5
 */
export const TlvAdditionalInfoStruct = TlvObject({
    /**
     * This SHALL indicate the name of external id, ex. "musicbrainz".
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.5.1
     */
    name: TlvField(0, TlvString.bound({ maxLength: 256 })),

    /**
     * This SHALL indicate the value for external id, ex. "ST0000000666661".
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.5.2
     */
    value: TlvField(1, TlvString.bound({ maxLength: 8192 }))
});

/**
 * This object defines inputs to a search for content for display or playback.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.3
 */
export const TlvParameterStruct = TlvObject({
    /**
     * This SHALL indicate the entity type.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.3.1
     */
    type: TlvField(0, TlvEnum<TlvParameterEnum>()),

    /**
     * This SHALL indicate the entity value, which is a search string, ex. “Manchester by the Sea”.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.3.2
     */
    value: TlvField(1, TlvString.bound({ maxLength: 1024 })),

    /**
     * This SHALL indicate the list of additional external content identifiers.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.3.3
     */
    externalIdList: TlvOptionalField(2, TlvArray(TlvAdditionalInfoStruct))
});

/**
 * This object defines inputs to a search for content for display or playback.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.2
 */
export const TlvContentSearchStruct = TlvObject({
    /**
     * This SHALL indicate the list of parameters comprising the search. If multiple parameters are provided, the
     * search parameters SHALL be joined with 'AND' logic. e.g. action movies with Tom Cruise will be represented as
     * [{Actor: 'Tom Cruise'}, {Type: 'Movie'}, {Genre: 'Action'}]
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.2.1
     */
    parameterList: TlvField(0, TlvArray(TlvParameterStruct))
});

/**
 * Upon receipt, this SHALL launch the specified content with optional search criteria. This command returns a Launch
 * Response.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1
 */
export const TlvLaunchContentRequest = TlvObject({
    /**
     * This SHALL indicate the content to launch.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1.1
     */
    search: TlvField(0, TlvContentSearchStruct),

    /**
     * This SHALL indicate whether to automatically start playing content, where: * TRUE means best match should start
     * playing automatically. * FALSE means matches should be displayed on screen for user selection.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1.2
     */
    autoPlay: TlvField(1, TlvBoolean),

    /**
     * This SHALL indicate Optional app-specific data.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1.3
     */
    data: TlvOptionalField(2, TlvByteString)
});

/**
 * Standard ContentLauncher cluster properties.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7
 */
export const ContentLauncherMetadata = ClusterMetadata({
    id: 0x50a,
    name: "ContentLauncher",
    revision: 1,

    features: {
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
    }
});

/**
 * A ContentLauncherCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({});

/**
 * A ContentLauncherCluster supports these elements if it supports feature UrlPlayback.
 */
export const UrlPlaybackComponent = ClusterComponent({
    attributes: {
        /**
         * This list provides list of content types supported by the Video Player or Content App in the form of entries
         * in the HTTP "Accept" request header.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.3.1
         */
        acceptHeader: Attribute(0, TlvArray(TlvString), { persistent: true, default: [], readAcl: AccessLevel.View }),

        /**
         * This attribute provides information about supported streaming protocols.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.3.2
         */
        supportedStreamingProtocols: Attribute(1, TlvUInt32, { persistent: true, readAcl: AccessLevel.View })
    },

    commands: {
        /**
         * Upon receipt, this SHALL launch content from the specified URL.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2
         */
        launchUrl: Command(1, TlvLaunchUrlRequest, 2, TlvLauncherResponseRequest)
    }
});

/**
 * A ContentLauncherCluster supports these elements if it supports feature ContentSearch.
 */
export const ContentSearchComponent = ClusterComponent({
    commands: {
        /**
         * Upon receipt, this SHALL launch the specified content with optional search criteria. This command returns a
         * Launch Response.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1
         */
        launchContent: Command(0, TlvLaunchContentRequest, 2, TlvLauncherResponseRequest)
    }
});

/**
 * A ContentLauncherCluster supports these elements if it supports features ContentSearch, or UrlPlayback.
 */
export const ContentSearchOrUrlPlaybackComponent = ClusterComponent({
    commands: {
        /**
         * This command SHALL be generated in response to LaunchContent and LaunchURL commands.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.3
         */
        launcherResponse: Command(2, TlvLauncherResponseRequest, 2, TlvNoResponse)
    }
});

export type ContentLauncherCluster<T extends TypeFromPartialBitSchema<typeof ContentLauncherMetadata.features>> = 
    typeof ContentLauncherMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent
    & (T extends { urlPlayback: true } ? typeof UrlPlaybackComponent : {})
    & (T extends { contentSearch: true } ? typeof ContentSearchComponent : {})
    & (T extends { contentSearch: true } | { urlPlayback: true } ? typeof ContentSearchOrUrlPlaybackComponent : {});

export function ContentLauncherCluster<T extends (keyof typeof ContentLauncherMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...ContentLauncherMetadata,
        supportedFeatures: BitFlags(ContentLauncherMetadata.features, ...features),
        ...BaseComponent
    };
    extendCluster(cluster, UrlPlaybackComponent, { urlPlayback: true });
    extendCluster(cluster, ContentSearchComponent, { contentSearch: true });
    extendCluster(cluster, ContentSearchOrUrlPlaybackComponent, { contentSearch: true }, { urlPlayback: true });
    
    return cluster as unknown as ContentLauncherCluster<BitFlags<typeof ContentLauncherMetadata.features, T>>;
};