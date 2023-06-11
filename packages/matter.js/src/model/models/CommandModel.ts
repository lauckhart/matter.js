/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommandElement, DataModel, Datatype, DatatypeModel, Mei, Model } from "../index.js";

export class CommandModel extends DataModel implements CommandElement {
    override type: CommandElement.Type = CommandElement.Type;
    override id!: Mei;
    direction?: CommandElement.Direction;
    response?: string

    override get actualBase() {
        return Datatype.struct;
    }

    override validate() {
        this.validateStructure(CommandElement.Type, true, DatatypeModel);
        this.validateProperty({ name: "direction", type: CommandElement.Direction, required: true });
        this.validateProperty({ name: "response", type: "string" });

        if (this.response) {
            const response = this.global(this.response, CommandModel);
            if (!response) {
                this.error("RESPONSE_NOT_FOUND", `response type ${this.response} not found`);
            }
        }

        return super.validate();
    }

    constructor(definition: CommandElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[CommandElement.Type] = this;
    }
}
