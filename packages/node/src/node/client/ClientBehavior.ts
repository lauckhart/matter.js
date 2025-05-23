/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterBehavior } from "#behavior/cluster/ClusterBehavior.js";
import { FeatureBitmap } from "#model";
import { AttributeId, ClusterId, CommandId } from "#types";

export function ClientBehavior(shape: ClientBehavior.ClusterShape): ClusterBehavior.Type {
    const fingerprint = Array<number>();
}

export namespace ClientBehavior {
    export interface ClusterShape {
        id: ClusterId;
        revision: number;
        features: FeatureBitmap;
        attributes: AttributeId[];
        commands: CommandId[];
    }
}
