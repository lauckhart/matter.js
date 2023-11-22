/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_1 } from "../spec/Specifications.js";
import { TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Branded } from "../util/Type.js";

/**
 * An "data version" is an unsigned 32-bit integer that identifies a specific
 * version of cluster attribute data.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 7.18.2.26
 */
export type DataVersion = Branded<number, "DataVersion">;

export function DataVersion(id: number): DataVersion {
    return id as DataVersion;
}

/** TLV schema for a data version. */
export const TlvDataVersion = new TlvWrapper<DataVersion, number>(
    TlvUInt32,
    dataVersion => dataVersion,
    value => DataVersion(value),
);
