/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InvokeRequestAction } from "./action/InvokeRequestAction.js";
import { InvokeResponseAction } from "./action/InvokeResponseAction.js";
import { ReadRequestAction } from "./action/ReadRequestAction.js";
import { ReportDataAction } from "./action/ReportDataAction.js";
import { SubscribeRequestAction } from "./action/SubscribeRequestAction.js";
import { SubscribeResponseAction } from "./action/SubscribeResponseAction.js";
import { WriteRequestAction } from "./action/WriteRequestAction.js";
import { WriteResponseAction } from "./action/WriteResponseAction.js";
import { Part } from "../endpoint/Part.js";

/**
 * A "node" is a top-level resource that is addressable directly on a network.
 *
 * NodeInterface offers interaction with a node.
 */
export interface Node {
    /**
     * Access the root endpoint.
     */
    get root(): Part;

    /**
     * Batch invocation.  This optimization allows you to invoke multiple
     * requests in one network payload.
     */
    invoke(action: InvokeRequestAction): Promise<InvokeResponseAction>;

    /**
     * Batch read.  This optimization allows you to read data for multiple
     * attributes and/or events with a single network request.
     */
    read(action: ReadRequestAction): Promise<ReportDataAction>;

    /**
     * Batch write.  This optimization allows you to change multiple attributes
     * with a single network request.
     */
    write(action: WriteRequestAction): Promise<WriteResponseAction>;

    /**
     * Batch subscribe.  This optimization allows you to subscribe to multiple
     * events with a single network request.
     */
    subscribe(action: SubscribeRequestAction): Promise<SubscribeResponseAction>;

    /**
     * Lifetime management.
     */
    [Symbol.asyncDispose](): Promise<void>;
}
