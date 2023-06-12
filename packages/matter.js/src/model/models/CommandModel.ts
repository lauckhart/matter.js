/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommandElement, DataModel, Datatype, Mei, Model } from "../index.js";

export class CommandModel extends DataModel implements CommandElement {
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
