/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const dataVer = Datatype({
    name: "data-ver", type: "uint32", description: "Data Version", isSeed: true,
    details: "An unsigned number that indicates a Data Version.",
    xref: { document: "core", section: "7.18.2.34" }
});
Matter.children.push(dataVer);
