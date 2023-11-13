/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NotImplementedError } from "../../common/MatterError.js";
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

export class ClientNode implements Node {
    constructor() {
        throw new NotImplementedError("Client nodes are TODO");
    }

    get root(): Part {
        throw new NotImplementedError();
    }

    async [Symbol.asyncDispose]() {
        // Nothing to dispose yet
    }

    invoke(action: InvokeRequestAction): Promise<InvokeResponseAction> {
        action;
        throw new NotImplementedError();
    }

    read(action: ReadRequestAction): Promise<ReportDataAction> {
        action;
        throw new NotImplementedError();
    }

    write(action: WriteRequestAction): Promise<WriteResponseAction> {
        action;
        throw new NotImplementedError();
    }

    subscribe(action: SubscribeRequestAction): Promise<SubscribeResponseAction> {
        action;
        throw new NotImplementedError();
    }
}
