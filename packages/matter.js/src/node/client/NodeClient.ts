/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import { ImplementationError, NotImplementedError } from "../../common/MatterError.js";
import { Part } from "../../endpoint/Part.js";
import { InvokeRequestAction } from "../action/InvokeRequestAction.js";
import { InvokeResponseAction } from "../action/InvokeResponseAction.js";
import { ReadRequestAction } from "../action/ReadRequestAction.js";
import { ReportDataAction } from "../action/ReportDataAction.js";
import { SubscribeRequestAction } from "../action/SubscribeRequestAction.js";
import { SubscribeResponseAction } from "../action/SubscribeResponseAction.js";
import { WriteRequestAction } from "../action/WriteRequestAction.js";
import { WriteResponseAction } from "../action/WriteResponseAction.js";
import { Node } from "../Node.js";

export class NodeClient implements Node {
    constructor() {
        throw new NotImplementedError("Client nodes are TODO");
    }

    get root(): Part {
        // TODO
        throw new NotImplementedError();
    }

    initializeBehavior(_part: Part, _type: Behavior.Type): BehaviorBacking {
        // TODO
        throw new NotImplementedError();
    }

    getAncestor<T>(type: new (...args: any[]) => T) {
        if (this instanceof type) {
            return this;
        }
        throw new ImplementationError(`Behavior is not owned by ${type.name}`);
    }
}
