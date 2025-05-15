/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add(
    {
        name: "PumpConfigurationAndControl", tag: "cluster",
        classification: "application", pics: "PCC",

        details: "The Pump Configuration and Control cluster provides an interface for the setup and control of pump " +
            "devices, and the automatic reporting of pump status information. Note that control of pump speed is " +
            "not included – speed is controlled by the On/Off and Level Control clusters." +
            "\n" +
            "### Pump controller Pump" +
            "\n" +
            "C Pump configuration and control S C Level control S" +
            "\n" +
            "C On/Off S" +
            "\n" +
            "C = Client S = Server" +
            "\n" +
            "Note: Device names are examples for illustration purposes only" +
            "\n" +
            "Figure 14. Typical Usage of Pump Configuration and Control Cluster",

        xref: "cluster§4.2",

        children: [
            {
                name: "FeatureMap", tag: "attribute",
                xref: "cluster§4.2.4",

                children: [
                    { name: "PRSCONST", tag: "field", details: "Supports operating in constant pressure mode" },
                    { name: "PRSCOMP", tag: "field", details: "Supports operating in compensated pressure mode" },
                    { name: "FLW", tag: "field", details: "Supports operating in constant flow mode" },
                    { name: "SPD", tag: "field", details: "Supports operating in constant speed mode" },
                    { name: "TEMP", tag: "field", details: "Supports operating in constant temperature mode" },
                    { name: "AUTO", tag: "field", details: "Supports operating in automatic mode" },
                    { name: "LOCAL", tag: "field", details: "Supports operating using local settings" }
                ]
            },

            {
                name: "MaxPressure", tag: "attribute",
                details: "This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does " +
                    "not apply to any specific control mode or operation mode." +
                    "\n" +
                    "Valid range is -3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). Null if the value is invalid.",
                xref: "cluster§4.2.7.1"
            },

            {
                name: "MaxSpeed", tag: "attribute",
                details: "This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does " +
                    "not apply to any specific control mode or operation mode." +
                    "\n" +
                    "Valid range is 0 to 65,534 RPM (steps of 1 RPM). Null if the value is invalid.",
                xref: "cluster§4.2.7.2"
            },

            {
                name: "MaxFlow", tag: "attribute",
                details: "This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not " +
                    "apply to any specific control mode or operation mode." +
                    "\n" +
                    "Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). Null if the value is invalid.",
                xref: "cluster§4.2.7.3"
            },

            {
                name: "MinConstPressure", tag: "attribute",
                details: "This attribute specifies the minimum pressure the pump can achieve when it is working with the " +
                    "ControlMode attribute set to ConstantPressure." +
                    "\n" +
                    "Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). Null if the value is invalid.",
                xref: "cluster§4.2.7.4"
            },

            {
                name: "MaxConstPressure", tag: "attribute",
                details: "This attribute specifies the maximum pressure the pump can achieve when it is working with the " +
                    "ControlMode attribute set to ConstantPressure." +
                    "\n" +
                    "Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). Null if the value is invalid.",
                xref: "cluster§4.2.7.5"
            },

            {
                name: "MinCompPressure", tag: "attribute",
                details: "This attribute specifies the minimum compensated pressure the pump can achieve when it is working " +
                    "with the ControlMode attribute set to ProportionalPressure." +
                    "\n" +
                    "Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). Null if the value is invalid.",
                xref: "cluster§4.2.7.6"
            },

            {
                name: "MaxCompPressure", tag: "attribute",
                details: "This attribute specifies the maximum compensated pressure the pump can achieve when it is working " +
                    "with the ControlMode attribute set to ProportionalPressure." +
                    "\n" +
                    "Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). Null if the value is invalid.",
                xref: "cluster§4.2.7.7"
            },

            {
                name: "MinConstSpeed", tag: "attribute",
                details: "This attribute specifies the minimum speed the pump can achieve when it is working with the Con" +
                    "\n" +
                    "trolMode attribute set to ConstantSpeed." +
                    "\n" +
                    "Valid range is 0 to 65,534 RPM (steps of 1 RPM). Null if the value is invalid.",
                xref: "cluster§4.2.7.8"
            },

            {
                name: "MaxConstSpeed", tag: "attribute",
                details: "This attribute specifies the maximum speed the pump can achieve when it is working with the " +
                    "ControlMode attribute set to ConstantSpeed." +
                    "\n" +
                    "Valid range is 0 to 65,534 RPM (steps of 1 RPM). Null if the value is invalid.",
                xref: "cluster§4.2.7.9"
            },

            {
                name: "MinConstFlow", tag: "attribute",
                details: "This attribute specifies the minimum flow the pump can achieve when it is working with the " +
                    "ControlMode attribute set to ConstantFlow." +
                    "\n" +
                    "Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). Null if the value is invalid.",
                xref: "cluster§4.2.7.10"
            },

            {
                name: "MaxConstFlow", tag: "attribute",
                details: "This attribute specifies the maximum flow the pump can achieve when it is working with the " +
                    "ControlMode attribute set to ConstantFlow." +
                    "\n" +
                    "Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). Null if the value is invalid.",
                xref: "cluster§4.2.7.11"
            },

            {
                name: "MinConstTemp", tag: "attribute",
                details: "This attribute specifies the minimum temperature the pump can maintain in the system when it is " +
                    "working with the ControlMode attribute set to ConstantTemperature." +
                    "\n" +
                    "Valid range is –273.15 °C to 327.67 °C (steps of 0.01 °C). Null if the value is invalid.",
                xref: "cluster§4.2.7.12"
            },

            {
                name: "MaxConstTemp", tag: "attribute",

                details: "This attribute specifies the maximum temperature the pump can maintain in the system when it is " +
                    "working with the ControlMode attribute set to ConstantTemperature." +
                    "\n" +
                    "MaxConstTemp shall be greater than or equal to MinConstTemp" +
                    "\n" +
                    "Valid range is –273.15 °C to 327.67 °C (steps of 0.01 °C). Null if the value is invalid.",

                xref: "cluster§4.2.7.13"
            },

            {
                name: "PumpStatus", tag: "attribute",
                details: "This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. " +
                    "Where a pump controller function is active, the corresponding bit shall be set to 1. Where a pump" +
                    "\n" +
                    "controller function is not active, the corresponding bit shall be set to 0.",
                xref: "cluster§4.2.7.14"
            },

            {
                name: "EffectiveOperationMode", tag: "attribute",

                details: "This attribute specifies current effective operation mode of the pump as defined in " +
                    "OperationModeEnum." +
                    "\n" +
                    "The value of the EffectiveOperationMode attribute is the same as the OperationMode attribute, unless " +
                    "one of the following points are true:" +
                    "\n" +
                    "  • The pump is physically set to run with the local settings" +
                    "\n" +
                    "  • The LocalOverride bit in the PumpStatus attribute is set," +
                    "\n" +
                    "See OperationMode and ControlMode attributes for a detailed description of the operation and control " +
                    "of the pump.",

                xref: "cluster§4.2.7.15"
            },

            {
                name: "EffectiveControlMode", tag: "attribute",

                details: "This attribute specifies the current effective control mode of the pump as defined in " +
                    "ControlModeEnum." +
                    "\n" +
                    "This attribute contains the control mode that currently applies to the pump. It will have the value " +
                    "of the ControlMode attribute, unless one of the following points are true:" +
                    "\n" +
                    "  • The ControlMode attribute is set to Automatic. In this case, the value of the " +
                    "    EffectiveControlMode shall match the behavior of the pump." +
                    "\n" +
                    "  • A remote sensor is used as the sensor for regulation of the pump. In this case, " +
                    "    EffectiveControlMode will display ConstantPressure, ConstantFlow or ConstantTemperature if the " +
                    "    remote sensor is a pressure sensor, a flow sensor or a temperature sensor respectively, " +
                    "    regardless of the value of the ControlMode attribute." +
                    "\n" +
                    "In case the ControlMode attribute is not included on the device and no remote sensors are connected, " +
                    "the value of the EffectiveControlMode shall match the vendor-specific behavior of the pump." +
                    "\n" +
                    "See OperationMode and ControlMode attributes for detailed a description of the operation and control " +
                    "of the pump.",

                xref: "cluster§4.2.7.16"
            },

            {
                name: "Capacity", tag: "attribute",

                details: "This attribute specifies the actual capacity of the pump as a percentage of the effective maximum " +
                    "setpoint value. It is updated dynamically as the speed of the pump changes." +
                    "\n" +
                    "If the value is not available (the measurement or estimation of the speed is done in the pump), this " +
                    "attribute will indicate the null value." +
                    "\n" +
                    "Valid range is 0 % to 163.835% (0.005 % granularity). Although this attribute is a signed value, " +
                    "values of capacity less than zero have no physical meaning.",

                xref: "cluster§4.2.7.17"
            },

            {
                name: "Speed", tag: "attribute",

                details: "This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as " +
                    "the speed of the pump changes." +
                    "\n" +
                    "If the value is not available (the measurement or estimation of the speed is done in the pump), this " +
                    "attribute will indicate the null value." +
                    "\n" +
                    "Valid range is 0 to 65,534 RPM.",

                xref: "cluster§4.2.7.18"
            },

            {
                name: "LifetimeRunningHours", tag: "attribute",

                details: "This attribute specifies the accumulated number of hours that the pump has been powered and the " +
                    "motor has been running. It is updated dynamically as it increases. It is preserved over power cycles " +
                    "of the pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 " +
                    "(zero)." +
                    "\n" +
                    "This attribute is writeable, in order to allow setting to an appropriate value after maintenance. If " +
                    "the value is not available, this attribute will indicate the null value." +
                    "\n" +
                    "Valid range is 0 to 16,777,214 hrs.",

                xref: "cluster§4.2.7.19"
            },

            {
                name: "Power", tag: "attribute",

                details: "This attribute specifies the actual power consumption of the pump in Watts. The value of this " +
                    "attribute is updated dynamically as the power consumption of the pump changes." +
                    "\n" +
                    "This attribute is read only. If the value is not available (the measurement of power consumption is " +
                    "not done in the pump), this attribute will indicate the null value." +
                    "\n" +
                    "Valid range is 0 to 16,777,214 Watts.",

                xref: "cluster§4.2.7.20"
            },

            {
                name: "LifetimeEnergyConsumed", tag: "attribute",

                details: "This attribute specifies the accumulated energy consumption of the pump through the entire lifetime " +
                    "of the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the " +
                    "energy consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it " +
                    "“rolls over” and starts at 0 (zero)." +
                    "\n" +
                    "This attribute is writeable, in order to allow setting to an appropriate value after maintenance." +
                    "\n" +
                    "Valid range is 0 kWh to 4,294,967,294 kWh." +
                    "\n" +
                    "Null if the value is unknown.",

                xref: "cluster§4.2.7.21"
            },

            {
                name: "OperationMode", tag: "attribute",

                details: "This attribute specifies the operation mode of the pump as defined in OperationModeEnum." +
                    "\n" +
                    "The actual operating mode of the pump is a result of the setting of the attributes OperationMode, " +
                    "ControlMode and the optional connection of a remote sensor. The operation and control is prioritized " +
                    "as shown in the scheme below:" +
                    "\n" +
                    "Priority Scheme of Pump Operation and Control" +
                    "\n" +
                    "If this attribute is Maximum, Minimum or Local, the OperationMode attribute decides how the pump is " +
                    "operated." +
                    "\n" +
                    "If this attribute is Normal and a remote sensor is connected to the pump, the type of the remote " +
                    "sensor decides the control mode of the pump. A connected remote pressure sensor will make the pump " +
                    "run in control mode Constant pressure and vice versa for flow and temperature type sensors. This is " +
                    "regardless of the setting of the ControlMode attribute." +
                    "\n" +
                    "If this attribute is Normal and no remote sensor is connected, the control mode of the pump is " +
                    "decided by the ControlMode attribute." +
                    "\n" +
                    "OperationMode may be changed at any time, even when the pump is running. The behavior of the pump at " +
                    "the point of changing the value of this attribute is vendor-specific." +
                    "\n" +
                    "In the case a device does not support a specific operation mode, the write interaction to this " +
                    "attribute with an unsupported operation mode value shall be ignored and a response containing the " +
                    "status of CONSTRAINT_ERROR shall be returned.",

                xref: "cluster§4.2.7.22"
            },

            {
                name: "ControlMode", tag: "attribute",

                details: "This attribute specifies the control mode of the pump as defined in ControlModeEnum." +
                    "\n" +
                    "See the OperationMode attribute for a detailed description of the operation and control of the pump." +
                    "\n" +
                    "ControlMode may be changed at any time, even when the pump is running. The behavior of the pump at " +
                    "the point of changing is vendor-specific." +
                    "\n" +
                    "In the case a device does not support a specific control mode, the write interaction to this " +
                    "attribute with an unsupported control mode value shall be ignored and a response containing the " +
                    "status of CONSTRAINT_ERROR shall be returned.",

                xref: "cluster§4.2.7.23"
            },

            { name: "AlarmMask", tag: "attribute", xref: "cluster§4.2.7" },
            { name: "SupplyVoltageLow", tag: "event", xref: "cluster§4.2.8" },
            { name: "SupplyVoltageHigh", tag: "event", xref: "cluster§4.2.8" },
            { name: "PowerMissingPhase", tag: "event", xref: "cluster§4.2.8" },
            { name: "SystemPressureLow", tag: "event", xref: "cluster§4.2.8" },
            { name: "SystemPressureHigh", tag: "event", xref: "cluster§4.2.8" },
            { name: "DryRunning", tag: "event", xref: "cluster§4.2.8" },
            { name: "MotorTemperatureHigh", tag: "event", xref: "cluster§4.2.8" },
            { name: "PumpMotorFatalFailure", tag: "event", xref: "cluster§4.2.8" },
            { name: "ElectronicTemperatureHigh", tag: "event", xref: "cluster§4.2.8" },
            { name: "PumpBlocked", tag: "event", xref: "cluster§4.2.8" },
            { name: "SensorFailure", tag: "event", xref: "cluster§4.2.8" },
            { name: "ElectronicNonFatalFailure", tag: "event", xref: "cluster§4.2.8" },
            { name: "ElectronicFatalFailure", tag: "event", xref: "cluster§4.2.8" },
            { name: "GeneralFault", tag: "event", xref: "cluster§4.2.8" },
            { name: "Leakage", tag: "event", xref: "cluster§4.2.8" },
            { name: "AirDetection", tag: "event", xref: "cluster§4.2.8" },
            { name: "TurbineOperation", tag: "event", xref: "cluster§4.2.8" },

            {
                name: "PumpStatusBitmap", tag: "datatype",
                xref: "cluster§4.2.6.1",

                children: [
                    {
                        name: "DeviceFault", tag: "field",
                        description: "A fault related to the system or pump device is detected.",
                        details: "If this bit is set, it may correspond to an event in the range 2-16, see Events.",
                        xref: "cluster§4.2.6.1.1"
                    },

                    {
                        name: "SupplyFault", tag: "field",
                        description: "A fault related to the supply to the pump is detected.",
                        details: "If this bit is set, it may correspond to an event in the range 0-1 or 13, see Events.",
                        xref: "cluster§4.2.6.1.2"
                    },

                    { name: "SpeedLow", tag: "field", description: "Setpoint is too low to achieve." },
                    { name: "SpeedHigh", tag: "field", description: "Setpoint is too high to achieve." },

                    {
                        name: "LocalOverride", tag: "field",
                        description: "Device control is overridden by hardware, such as an external STOP button or via a local HMI.",
                        details: "While this bit is set, the EffectiveOperationMode is adjusted to Local. Any request changing " +
                            "OperationMode shall generate a FAILURE error status until LocalOverride is cleared on the physical " +
                            "device. When LocalOverride is cleared, the device shall return to the operation mode set in " +
                            "OperationMode.",
                        xref: "cluster§4.2.6.1.3"
                    },

                    { name: "Running", tag: "field", description: "Pump is currently running" },

                    {
                        name: "RemotePressure", tag: "field",
                        description: "A remote pressure sensor is used as the sensor for the regulation of the pump.",
                        details: "If this bit is set, EffectiveControlMode is ConstantPressure and the setpoint for the pump is " +
                            "interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – " +
                            "MaxMeasuredValue]).",
                        xref: "cluster§4.2.6.1.4"
                    },

                    {
                        name: "RemoteFlow", tag: "field",
                        description: "A remote flow sensor is used as the sensor for the regulation of the pump.",
                        details: "If this bit is set, EffectiveControlMode is ConstantFlow, and the setpoint for the pump is " +
                            "interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – " +
                            "MaxMeasuredValue]).",
                        xref: "cluster§4.2.6.1.5"
                    },

                    {
                        name: "RemoteTemperature", tag: "field",
                        description: "A remote temperature sensor is used as the sensor for the regulation of the pump.",
                        details: "If this bit is set, EffectiveControlMode is ConstantTemperature, and the setpoint for the pump is " +
                            "interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – " +
                            "MaxMeasuredValue])",
                        xref: "cluster§4.2.6.1.6"
                    }
                ]
            },

            {
                name: "OperationModeEnum", tag: "datatype",
                xref: "cluster§4.2.6.2",

                children: [
                    {
                        name: "Normal", tag: "field",
                        description: "The pump is controlled by a setpoint, as defined by a connected remote sensor or by the ControlMode attribute.",
                        details: "If the pump is running in this operation mode the setpoint is an internal variable which may be " +
                            "controlled between 0% and 100%, e.g., by means of the Level Control cluster",
                        xref: "cluster§4.2.6.2.1"
                    },

                    {
                        name: "Minimum", tag: "field",
                        description: "This value sets the pump to run at the minimum possible speed it can without being stopped."
                    },
                    {
                        name: "Maximum", tag: "field",
                        description: "This value sets the pump to run at its maximum possible speed."
                    },
                    {
                        name: "Local", tag: "field",
                        description: "This value sets the pump to run with the local settings of the pump, regardless of what these are."
                    }
                ]
            },

            {
                name: "ControlModeEnum", tag: "datatype",
                xref: "cluster§4.2.6.3",

                children: [
                    {
                        name: "ConstantSpeed", tag: "field",
                        description: "The pump is running at a constant speed.",
                        details: "The setpoint is interpreted as a percentage of the range derived from the [MinConstSpeed – " +
                            "MaxConstSpeed] attributes.",
                        xref: "cluster§4.2.6.3.1"
                    },

                    {
                        name: "ConstantPressure", tag: "field",
                        description: "The pump will regulate its speed to maintain a constant differential pressure over its flanges.",
                        details: "The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. " +
                            "In case of the internal pressure sensor, this will be the range derived from the [MinConstPressure – " +
                            "MaxConstPressure] attributes. In case of a remote pressure sensor, this will be the range derived " +
                            "from the [MinMeasuredValue – MaxMeasuredValue] attributes of the remote pressure sensor.",
                        xref: "cluster§4.2.6.3.2"
                    },

                    {
                        name: "ProportionalPressure", tag: "field",
                        description: "The pump will regulate its speed to maintain a constant differential pressure over its flanges.",
                        details: "The setpoint is interpreted as a percentage of the range derived of the [MinCompPressure – Max" +
                            "\n" +
                            "CompPressure] attributes. The internal setpoint will be lowered (compensated) dependent on the flow " +
                            "in the pump (lower flow ⇒ lower internal setpoint).",
                        xref: "cluster§4.2.6.3.3"
                    },

                    {
                        name: "ConstantFlow", tag: "field",
                        description: "The pump will regulate its speed to maintain a constant flow through the pump.",
                        details: "The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. " +
                            "In case of the internal flow sensor, this will be the range derived from the [MinConstFlow – " +
                            "MaxConstFlow] attributes. In case of a remote flow sensor, this will be the range derived from the " +
                            "[MinMeasuredValue – MaxMeasuredValue] attributes of the remote flow sensor.",
                        xref: "cluster§4.2.6.3.4"
                    },

                    {
                        name: "ConstantTemperature", tag: "field",
                        description: "The pump will regulate its speed to maintain a constant temperature.",
                        details: "The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. " +
                            "In case of the internal temperature sensor, this will be the range derived from the [MinConstTemp – " +
                            "MaxConstTemp] attributes. In case of a remote temperature sensor, this will be the range derived " +
                            "from the [MinMeasuredValue – MaxMeasuredValue] attributes of the remote temperature sensor.",
                        xref: "cluster§4.2.6.3.5"
                    },

                    {
                        name: "Automatic", tag: "field",
                        description: "The operation of the pump is automatically optimized to provide the most suitable performance with respect to comfort and energy savings.",
                        details: "This behavior is manufacturer defined. The pump can be stopped by setting the setpoint of the level " +
                            "control cluster to 0, or by using the On/Off cluster. If the pump is started (at any setpoint), the " +
                            "speed of the pump is entirely determined by the pump.",
                        xref: "cluster§4.2.6.3.6"
                    }
                ]
            }
        ]
    }
);
