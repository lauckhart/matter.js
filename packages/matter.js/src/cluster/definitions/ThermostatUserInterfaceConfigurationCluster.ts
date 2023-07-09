/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, WritableAttribute, AccessLevel, OptionalWritableAttribute, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";

/**
 * Thermostat User Interface Configuration
 *
 * An interface for configuring the user interface of a thermostat (which may be remote from the thermostat).
 *
 * This function creates a ThermostatUserInterfaceConfiguration cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.5
 */
export function ThermostatUserInterfaceConfigurationCluster() {
    const cluster = Cluster({
        ...ThermostatUserInterfaceConfigurationCluster.Metadata,
        ...ThermostatUserInterfaceConfigurationCluster.BaseComponent
    });
    return cluster as unknown as ThermostatUserInterfaceConfigurationCluster.Type;
};

/**
 * The TemperatureDisplayMode attribute specifies the units of the temperature displayed on the thermostat screen.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.5.5.1
 */
export const enum TemperatureDisplayMode {
    /**
     * Temperature displayed in °C
     */
    Celsius = 0,

    /**
     * Temperature displayed in °F
     */
    Fahrenheit = 1
};

/**
 * The KeypadLockout attribute specifies the level of functionality that is available to the user via the keypad.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.5.5.2
 */
export const enum KeypadLockout {
    /**
     * All functionality available to the user
     */
    NoLockout = 0,

    /**
     * Level 1 reduced functionality
     */
    Lockout1 = 1,

    /**
     * Level 2 reduced functionality
     */
    Lockout2 = 2,

    /**
     * Level 3 reduced functionality
     */
    Lockout3 = 3,

    /**
     * Level 4 reduced functionality
     */
    Lockout4 = 4,

    /**
     * Least functionality available to the user
     */
    Lockout5 = 5
};

/**
 * The ScheduleProgrammingVisibility attribute is used to hide the weekly schedule programming functionality or menu on
 * a thermostat from a user to prevent local user programming of the weekly schedule. The schedule programming MAY
 * still be performed via a remote interface, and the thermostat MAY operate in schedule programming mode.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.5.5.3
 */
export const enum ScheduleProgrammingVisibility {
    /**
     * Local schedule programming functionality is enabled at the thermostat
     */
    ScheduleProgrammingPermitted = 0,

    /**
     * Local schedule programming functionality is disabled at the thermostat
     */
    ScheduleProgrammingDenied = 1
};

export namespace ThermostatUserInterfaceConfigurationCluster {
    export type Type = 
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * ThermostatUserInterfaceConfiguration cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.5
     */
    export const Metadata = ClusterMetadata({
        id: 0x204,
        name: "ThermostatUserInterfaceConfiguration",
        revision: 1,
        features: {}
    });

    /**
     * A ThermostatUserInterfaceConfigurationCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * The TemperatureDisplayMode attribute specifies the units of the temperature displayed on the thermostat
             * screen.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.5.5.1
             */
            temperatureDisplayMode: WritableAttribute(
                0,
                TlvEnum<TemperatureDisplayMode>(),
                { default: 0, readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }
            ),

            /**
             * The KeypadLockout attribute specifies the level of functionality that is available to the user via the
             * keypad.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.5.5.2
             */
            keypadLockout: WritableAttribute(
                1,
                TlvEnum<KeypadLockout>(),
                { default: 0, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The ScheduleProgrammingVisibility attribute is used to hide the weekly schedule programming
             * functionality or menu on a thermostat from a user to prevent local user programming of the weekly
             * schedule. The schedule programming MAY still be performed via a remote interface, and the thermostat MAY
             * operate in schedule programming mode.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.5.5.3
             */
            scheduleProgrammingVisibility: OptionalWritableAttribute(
                2,
                TlvEnum<ScheduleProgrammingVisibility>(),
                { default: 0, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * This cluster supports all ThermostatUserInterfaceConfiguration features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
};
