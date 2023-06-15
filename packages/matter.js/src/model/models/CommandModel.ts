/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Datatype, Mei } from "../definitions/index.js";
import { CommandElement } from "../elements/index.js";
import { ValueModel } from "./ValueModel.js";
import { Model } from "./Model.js";

export class CommandModel extends ValueModel implements CommandElement {
    override type: CommandElement.Type = CommandElement.Type;
    override id!: Mei;
    direction?: CommandElement.Direction;
    response?: string

    override get actualBase() {
        return Datatype.struct;
    }

    constructor(definition: CommandElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[CommandElement.Type] = this;
    }
}
