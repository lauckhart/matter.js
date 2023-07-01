/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Attribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

export const TlvLabelStruct = TlvObject({ label: TlvField(0, TlvString), value: TlvField(1, TlvString) });

export namespace FixedLabelCluster {
    export const id = 0x40;
    export const name = "FixedLabel";
    export const revision = 1;

    const Base = {
        attributes: {
            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.8.4
             */
            labelList: Attribute(0, TlvArray(TlvLabelStruct), { persistent: true, readAcl: AccessLevel.View })
        }
    };

    export const Complete = BuildCluster({ id, name, revision, elements: [ Base ] });
};