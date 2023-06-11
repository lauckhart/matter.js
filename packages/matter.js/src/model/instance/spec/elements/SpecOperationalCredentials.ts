/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x003e, name: "OperationalCredentials",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "NoCs", base: "list[NOCStruct]",
            access: "R A F", conformance: "M", constraint: "max SupportedFabrics", value: "", quality: "N C",
            details: "This attribute contains all NOCs applicable to this Node, encoded as a read-only list of NOCStruct.",
            xref: { section: "11.17.5.1", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "Fabrics", base: "list[FabricDescriptorStruct]",
            access: "R V F", conformance: "M", constraint: "max SupportedFabrics", value: "", quality: "N",
            details: "This attribute describes all fabrics to which this Node is commissioned, encoded as a read-only list of FabricDescriptorStruct. This information MAY be computed directly from the NOCs attribute.",
            xref: { section: "11.17.5.2", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "SupportedFabrics", base: "uint8",
            access: "R V", conformance: "M", constraint: "5 to 254", value: "", quality: "F",
            details: "This attribute contains the number of Fabrics that are supported by the device. This value is fixed for a particular device.",
            xref: { section: "11.17.5.3", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "CommissionedFabrics", base: "uint8",
            access: "R V", conformance: "M", constraint: "max SupportedFabrics", value: "", quality: "N",
            details: "This attribute contains the number of Fabrics to which the device is currently commissioned. This attribute SHALL be equal to the following:",
            xref: { section: "11.17.5.4", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "TrustedRootCertificates", base: "list[octstr]",
            access: "R V", conformance: "M", constraint: "max SupportedFabrics[max 400]", value: "", quality: "N C",
            details: "This attribute SHALL contain a read-only list of Trusted Root CA Certificates installed on the Node, as octet strings containing their Matter Certificate Encoding representation.",
            xref: { section: "11.17.5.5", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "CurrentFabricIndex", base: "uint8",
            access: "R V", conformance: "M", constraint: "", value: "0",
            details: "This attribute SHALL contain accessing fabric index.",
            xref: { section: "11.17.5.6", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "CertificateChainTypeEnum", base: "enum8",
            details: "This data type is derived from enum8.",
            xref: { section: "11.17.4.2", document: "core", version: "1.1" }
        })
    ]
}));
