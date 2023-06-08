/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommandElement, DataModel, Mei, Model } from "../index.js";

export class CommandModel extends DataModel implements CommandElement {
    override type: CommandElement.Type = CommandElement.Type;
    override id!: Mei;
    direction!: CommandElement.Direction;
    response?: string

    constructor(definition: CommandElement.Properties, parent?: Model) {
        super(definition, parent);
    }

    static {
        Model.constructors[CommandElement.Type] = this;
    }
}
