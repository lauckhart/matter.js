/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeElement, CommandElement, DatatypeElement, DeviceClusterElement, DeviceTypeElement, EventElement } from "#matter.js/model/index.js";
import { Logger } from "#matter.js/log/Logger.js";
import { DeviceReference } from "./spec-types.js";
import { Identifier, Integer, LowerIdentifier, Str } from "./html-translators.js";
import { Alias, Constant, Optional, translateRecordsToMatter, translateTable } from "./translate-table.js";

const logger = Logger.get("translate-devices");

export function* translateDevice(deviceRef: DeviceReference) {
    const device = createDevice(deviceRef);
    if (!device) {
        return;
    }

    addConditions(device, deviceRef);
    addClusters(device, deviceRef);
}

function createDevice(deviceRef: DeviceReference) {
    const metadata = translateTable("deviceType", deviceRef, {
        id: Integer,
        name: Identifier,
        superset: Optional(Identifier),
        class: LowerIdentifier,
        scope: LowerIdentifier
    })[0];

    if (!metadata) {
        logger.error(`No metadata for device ${deviceRef.name}`);
        return;
    }

    let classification;
    if (metadata.class === "simple") {
        classification = DeviceTypeElement.Classification.Simple;
    } else if (metadata.class === "dynamic utility") {
        classification = DeviceTypeElement.Classification.Dynamic;
    } else if (metadata.class === "node") {
        classification = DeviceTypeElement.Classification.Node;
    } else if (metadata.class === "utility") {
        classification = DeviceTypeElement.Classification.Utility;
    }

    if (!classification) {
        logger.error(`No classification for device ${deviceRef.name}`);
        return;
    }

    const revisions = translateTable("deviceType", deviceRef.revisions, {
        revision: Integer
    });
    let revision = revisions[revisions.length - 1]?.revision;
    if (revision === undefined) {
        logger.error(`No revision for device ${deviceRef.name}, assuming 1`);
        revision = 1;
    }

    const definition = {
        id: metadata.id,
        name: metadata.name,
        category: deviceRef.category,
        classification
    };
    const device = DeviceTypeElement(definition);

    if (metadata.superset) {
        device.type = metadata.superset;
    }

    device.children = [DeviceClusterElement({
        id: 0x1d,
        name: "Descriptor",
        children: [DatatypeElement({
            name: "DeviceTypeStruct",
            children: [
                DatatypeElement({ name: "DeviceType", default: definition.id }),
                DatatypeElement({ name: "Revision", default: revision })
            ]
        })]
    })];

    logger.debug("metadata", Logger.dict({ ...definition, revision, type: metadata.superset }));

    return device;
}

function addConditions(device: DeviceTypeElement, deviceRef: DeviceReference) {
    if (!deviceRef.conditionSets) {
        return;
    }

    const conditions = Array<DatatypeElement>();
    deviceRef.conditionSets.forEach(conditionRef => {
        const definitions = translateTable("condition", conditionRef, {
            tag: Constant("datatype" as const),
            name: Alias(
                Identifier,

                // Spec writers have outdone themselves w/ lack of consistency here
                "condition",
                "feature",
                "tag",
                "certificationprogram",
                "protocoltag",
                "interfacetag",
                "capabilitytag",
                "classtag"
            ),
            description: Optional(Str)
        })

        if (definitions) {
            conditions.push(...definitions);
        }
    });

    const translated = translateRecordsToMatter("conditions", conditions, DatatypeElement);

    if (translated?.length) {
        if (!device.children) {
            device.children = [];
        }
        device.children.push(DatatypeElement({
            name: "conditions",
            children: conditions
        }));
    }
}

function addClusters(device: DeviceTypeElement, deviceRef: DeviceReference) {
    const clusterRecords = translateTable("clusters", deviceRef.clusters, {
        id: Optional(Alias(Integer, "identifier")),
        name: Alias(Identifier, "clustername"),
        client: (el: HTMLElement) => Identifier(el) === "Client",
        quality: Optional(Str),
        conformance: Optional(Str)
    });

    const clusters = translateRecordsToMatter(
        "clusters",
        clusterRecords,
        DeviceClusterElement
    );
    if (!clusters?.length) {
        return;
    }

    if (!device.children) {
        device.children = [];
    }
    device.children.push(...clusters);

    const clusterIndex = new Map<string, DeviceClusterElement>();
    for (const cluster of clusters) {
        clusterIndex.set(cluster.name.toLowerCase(), cluster);
    }
    
    const elementRecords = translateTable("elements", deviceRef.elements, {
        id: Integer,
        cluster: LowerIdentifier,
        element: LowerIdentifier,
        name: Identifier,
        constraint: Optional(Str),
        access: Optional(Str),
        conformance: Optional(Str)
    });

    for (const record of elementRecords) {
        const properties = {
            id: record.id,
            name: record.name,
            constraint: record.constraint,
            access: record.access,
            conformance: record.conformance
        };

        const cluster = clusterIndex.get(record.cluster);
        if (!cluster) {
            logger.error(`no cluster ${record.cluster} for ${record.element} ${record.name}`);
            continue;
        }

        const addElement = <T>(factory: (definition: typeof properties) => T) => {
            if (!cluster.children) {
                cluster.children = [];
            }
            cluster.children.push(factory(properties));
        }

        let features: DatatypeElement | undefined;
        switch (record.element) {
            case "feature":
                if (!features) {
                    features = 
                }
                break;

            case "attribute":
                addElement(AttributeElement);
                break;

            case "command":
                addElement(CommandElement);
                break;
                
            case "event":
                addElement(EventElement);
                break;

            default:
                logger.error(`unsupported type ${record.element} for ${record.cluster} element ${record.name}`)
                break;
        }
    }
}
