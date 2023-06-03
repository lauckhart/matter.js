/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterElement } from "../../../src/model";

// An HTML table converted to array of records
export type Table = { [name: string ]: HTMLElement | undefined }[];

// A reference to a specific portion of the specification.  Captures details
// as raw HTML DOM nodes from the Matter specification
export type HtmlReference = {
    xref: MatterElement.CrossReference,
    name: string,
    path: string,
    table?: Table,
    firstParagraph?: HTMLParagraphElement
}

// A reference with details on sub-elements
export type DetailedReference = HtmlReference & {
    details: HtmlReference[]
}

// Intermediate representation of a cluster.  Has all the bits we think we'll
// need but still encoded as ugly HTML
export type ClusterReference = HtmlReference & {
    ids?: DetailedReference,
    revisions?: DetailedReference,
    classifications?: DetailedReference,
    features?: DetailedReference,
    attributes?: DetailedReference,
    commands?: DetailedReference,
    events?: DetailedReference,
    datatypes?: DetailedReference[]
}
