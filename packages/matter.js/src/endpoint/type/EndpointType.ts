/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceTypeId } from "../../datatype/DeviceTypeId.js";
import { DeviceClasses } from "../../device/DeviceTypes.js";
import { SupportedBehaviors } from "../part/SupportedBehaviors.js";

/**
 * An EndpointType defines functionality for an endpoint.
 */
export interface EndpointType {
    name: string,
    deviceClass: DeviceClasses,
    deviceType: DeviceTypeId,
    behaviors: SupportedBehaviors,
    requirements: EndpointType.Requirements,
}

/**
 * Define a new type of endpoint.
 */
export function EndpointType<const T extends EndpointType.Options>(options: T) {
    return {
        ...options,
        deviceClass: options.deviceClass ?? DeviceClasses.Simple,
        behaviors: options.behaviors ?? {},
        requirements: options.requirements ?? {}
    } as unknown as EndpointType.For<T>;
}

export namespace EndpointType {
    /**
     * A fully typed {@link EndpointType} defined by {@link EndpointType.Options}.
     */
    export type For<T extends EndpointType.Options> =
        & {
            name: T["name"],
            deviceType: DeviceTypeId,
            deviceClass: DeviceClasses,
            behaviors: T["behaviors"] extends SupportedBehaviors ? T["behaviors"] : {},
            requirements: T["requirements"] extends Requirements ? T["requirements"] : {},
        };

    /**
     * Endpoint configuration.
     */
    export interface Options {
        name: string,
        deviceType: number,
        deviceClass?: DeviceClasses,
        behaviors?: SupportedBehaviors,
        requirements?: Requirements,
    }

    /**
     * Standard dependencies for an endpoint per the Matter specification.
     */
    export interface Requirements {
        server?: {
            mandatory?: SupportedBehaviors;
            optional?: SupportedBehaviors;
        };

        client?: {
            mandatory?: SupportedBehaviors;
            optional?: SupportedBehaviors;
        };
    }
}
