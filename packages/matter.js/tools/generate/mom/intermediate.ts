/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// An HTML table converted to array of records
export type Table = { [name: string ]: HTMLElement | undefined }[];

// A reference to a specific portion of the specification.  Captures details
// as raw HTML DOM nodes from the Matter specification
export type Reference = {
    section: string,
    spec: "core" | "cluster" | "device",
    name: string,
    path: string,
    table?: Table,
    firstParagraph?: HTMLParagraphElement
}

// A reference with details on sub-elements
export type ElementDom = Reference & {
    details: Reference[]
}

// Intermediate representation of a cluster.  Has all the bits we think we'll
// need but still encoded as ugly HTML
export type ClusterDom = Reference & {
    ids?: ElementDom,
    revisions?: ElementDom,
    classifications?: ElementDom,
    features?: ElementDom,
    attributes?: ElementDom,
    commands?: ElementDom,
    events?: ElementDom,
    datatypes?: ElementDom[]
}
