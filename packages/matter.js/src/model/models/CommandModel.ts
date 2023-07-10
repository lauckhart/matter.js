/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../definitions/index.js";
import { CommandElement } from "../elements/index.js";
import { ValueModel } from "./ValueModel.js";
import { Model } from "./Model.js";
import { ModelTraversal } from "../logic/ModelTraversal.js";

export class CommandModel extends ValueModel implements CommandElement {
    override tag: CommandElement.Tag = CommandElement.Tag;
    override id!: Mei;
    direction?: CommandElement.Direction;
    response?: string

    get isRequest() {
        return this.direction === CommandElement.Direction.Request;
    }

    get isResponse() {
        return this.direction === CommandElement.Direction.Response;
    }

    get responseModel() {
        return new ModelTraversal().findResponse(this);
    }

    constructor(definition: CommandElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[CommandElement.Tag] = this;
    }

    static Tag = CommandElement.Tag;
}
