/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Datatype, Mei } from "../definitions/index.js";
import { CommandElement } from "../elements/index.js";
import { ValueModel } from "./ValueModel.js";
import { Model } from "./Model.js";
import { ModelTraversal } from "../logic/ModelTraversal.js";

export class CommandModel extends ValueModel implements CommandElement {
    override tag: CommandElement.Tag = CommandElement.Tag;
    override id!: Mei;
    direction?: CommandElement.Direction;
    response?: string

    override get effectiveType() {
        return Datatype.struct;
    }

    get isRequest() {
        return this.direction = CommandElement.Direction.Request;
    }

    get responseModel() {
        if (this.response && this.response != "status") {
            return new ModelTraversal().findType(this, this.response, [ CommandElement.Tag ])
        }
    }

    constructor(definition: CommandElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[CommandElement.Tag] = this;
    }
}
