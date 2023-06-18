/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../../log/index.js";
import { Conformance } from "../../aspects/index.js";
import { ValueModel } from "../../models/index.js";
import { type ValidatorBuilder } from "./ValidatorBuilder.js";

const logger = Logger.get("conformance-validation");

export function addConformance(builder: ValidatorBuilder, model: ValueModel, conformance: Conformance) {
    builder.addTest(expr(conformance, builder), "CONFORMANCE_VIOLATION", model, "Value disallowed by conformance");

    const BinaryOperatorMap = {
        [Conformance.Operator.AND]: "&&",
        [Conformance.Operator.EQ]: "==",
        [Conformance.Operator.NE]: "!=",
        [Conformance.Operator.OR]: "||"
    }

    // This generates JS expressions that test conformance.  The result of each
    // expression is a tri-state value:
    //
    //    true: test succeeds
    //    false: test fails
    //    null: test fails but in a group subsequent tests may succeed
    //
    // If a null makes it to the top level it is cast to false.
    function expr(ast: Conformance.Ast | undefined, fn: ValidatorBuilder): string {
        if (ast == undefined) {
            logger.error("Undefined conformance AST type");
            return "true";
        }

        switch (ast?.type) {
            case undefined:
                logger.error("Undefined conformance AST type");
                // Fall-through
            case Conformance.Special.Empty:
            case Conformance.Special.Desc:
            case Conformance.Flag.Provisional:
            case Conformance.Flag.Deprecated:
            case Conformance.Flag.Optional:
                return "true";

            case Conformance.Special.Choice:
                fn.hasChoices = true;
                const choice = ast.param as Conformance.Ast.Choice;
                const choiceName = `${model.parent?.path || "?"}.${choice.name}`
                return `this.testChoice(${JSON.stringify(choiceName)}, ${expr(choice.expr, fn)})`;
    
            case Conformance.Special.Group:
                const param = ast.param as Conformance.Ast.Group;
                if (!Array.isArray(param)) {
                    logger.error("Conformance AST group parameter is not an array");
                    return "null";
                }
                return `this.testGroup(${param.map(e => expr(e, fn)).join(", ")})`;
    
            case Conformance.Special.Name:
                return `(this.features.has(${JSON.stringify(ast.param)}) || values[${JSON.stringify(ast.param)}] || null)`;
    
            case Conformance.Special.OptionalIf:
                return `(${expr(ast.param as Conformance.Ast.Option, fn)} || !presence)`;
    
            case Conformance.Special.Value:
                return `values[${JSON.stringify(ast.param)}]`;
    
            case Conformance.Flag.Disallowed:
                return "false";
    
            case Conformance.Flag.Mandatory:
                return "!!presence";
    
            case Conformance.Operator.AND:
            case Conformance.Operator.EQ:
            case Conformance.Operator.NE:
            case Conformance.Operator.OR:
                const binops = ast.param as Conformance.Ast.BinaryOperands;
                return `(${expr(binops.lhs, fn)} ${BinaryOperatorMap[ast.type]} ${expr(binops.rhs, fn)})`;

            case Conformance.Operator.XOR:
                const binops2 = ast.param as Conformance.Ast.BinaryOperands;
                return `(${expr(binops2.lhs, fn)} ? !${expr(binops2.rhs, fn)} : ${expr(binops2.rhs, fn)})`
    
            case Conformance.Operator.NOT:
                return `!${expr(ast.param as Conformance.Ast.UnaryOperand, fn)}`
        }
    }
}
