/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0102, name: "WindowCovering",
    description: "Window Covering",
    details: "Provides an interface for controlling and adjusting automatic window coverings.",
    children: [
        AttributeElement({
            id: 0x0000, name: "WcType", base: "Type",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "WcPhysicalClosedLimitLift", base: "PhysicalClosedLimitLift",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0002, name: "WcPhysicalClosedLimitTilt", base: "PhysicalClosedLimitTilt",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0003, name: "WcCurrentPositionLift", base: "CurrentPositionLift",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "WcCurrentPositionTilt", base: "CurrentPositionTilt",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0005, name: "WcNumberOfActuationsLift", base: "NumberOfActuationsLift",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0006, name: "WcNumberOfActuationsTilt", base: "NumberOfActuationsTilt",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0007, name: "WcConfigStatus", base: "ConfigStatus",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0008, name: "WcCurrentPositionLiftPercentage", base: "CurrentPositionLiftPercentage",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0009, name: "WcCurrentPositionTiltPercentage", base: "CurrentPositionTiltPercentage",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x000a, name: "WcOperationalStatus", base: "OperationalStatus",
            access: { rw: "R" }, conformance: [ "M" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x000b, name: "WcTargetPositionLiftPercentThs", base: "TargetPositionLiftPercent100ths",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x000c, name: "WcTargetPositionTiltPercentThs", base: "TargetPositionTiltPercent100ths",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x000d, name: "WcEndProductType", base: "EndProductType",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x000e, name: "WcCurrentPositionLiftPercentThs", base: "CurrentPositionLiftPercent100ths",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x000f, name: "WcCurrentPositionTiltPercentThs", base: "CurrentPositionTiltPercent100ths",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0010, name: "WcInstalledOpenLimitLift", base: "InstalledOpenLimitLift",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0011, name: "WcInstalledClosedLimitLift", base: "InstalledClosedLimitLift",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0012, name: "WcInstalledOpenLimitTilt", base: "InstalledOpenLimitTilt",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0013, name: "WcInstalledClosedLimitTilt", base: "InstalledClosedLimitTilt",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0017, name: "WcMode", base: "Mode",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x001a, name: "WcSafetyStatus", base: "SafetyStatus",
            access: { rw: "R" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        CommandElement({
            id: 0x0000, name: "UpOrOpen", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0001, name: "DownOrClose", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0002, name: "StopMotion", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0004, name: "GoToLiftValue", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "LiftValue", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LiftValue", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "GoToLiftPercentage", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "LiftPercentThsValue", base: "Percent100ths",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LiftPercentThsValue", base: "Percent100ths",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "GoToTiltValue", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "TiltValue", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TiltValue", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "GoToTiltPercentage", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "TiltPercentThsValue", base: "Percent100ths",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TiltPercentThsValue", base: "Percent100ths",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
