/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NotImplementedError } from "../../common/MatterError.js";
//import { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { Node } from "../Node.js";
import { InvokeRequestAction } from "../action/InvokeRequestAction.js";
import { InvokeResponseAction } from "../action/InvokeResponseAction.js";
import { ReadRequestAction } from "../action/ReadRequestAction.js";
import { ReportDataAction } from "../action/ReportDataAction.js";
import { SubscribeRequestAction } from "../action/SubscribeRequestAction.js";
import { SubscribeResponseAction } from "../action/SubscribeResponseAction.js";
import { WriteRequestAction } from "../action/WriteRequestAction.js";
import { WriteResponseAction } from "../action/WriteResponseAction.js";
import { ServerContext } from "./ServerContext.js";
import { ServerOptions } from "./ServerOptions.js";

const RootEndpoint = {} as any;

export class ServerNode implements Node {
    #context: ServerContext;
    #root: typeof RootEndpoint;

    constructor(context: ServerContext) {
        this.#context = context;

        // TODO
        this.#root = context.root;
        this.#context;
    }

    async create(options: ServerOptions) {
        return new ServerNode(await ServerContext.create(options));
    }

    get root() {
        return this.#root;
    }

    async [Symbol.asyncDispose]() {
        await this.#context[Symbol.asyncDispose]();
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
