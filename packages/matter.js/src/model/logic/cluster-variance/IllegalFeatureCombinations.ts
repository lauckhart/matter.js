/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../../common/InternalError.js";
import { Conformance } from "../../aspects/index.js";
import { ClusterModel, DatatypeModel } from "../../models/index.js";
import { FeatureBitmap } from "./FeatureBitmap.js";

export type IllegalFeatureCombinations = FeatureBitmap[];

type Choices = {
    [name: string]: {
        exclusive: boolean,
        features: string[];
    }
};

/**
 * Analyzes feature conformance to ascertain feature combinations that are
 * unsupported.  Uses rules to match the conformance AST.
 * 
 * Rule matching is not exhaustive but supports a significant subset of the
 * conformance dialect that is inclusive of all feature conformances used by
 * the 1.1 specifications.
 * 
 * Throws an error if conformance does not adhere to supported rules.
 */
export function IllegalFeatureCombinations(cluster: ClusterModel) {
    const illegal = [] as IllegalFeatureCombinations;
    const choices = {} as Choices;

    for (const f of cluster.features) {
        addFeatureNode(f, f.conformance, illegal, choices);
    }

    for (const choice of Object.values(choices)) {
        const flags = FeatureBitmap();
        for (const f of choice.features) {
            flags[f] = false;
        }
        if (choice.exclusive) {
            for (const f of choice.features) {
                illegal.push({ ...flags, [f]: true })
            }
        } else {
            illegal.push(flags);
        }
    }

    return illegal;
}

function addFeatureNode(feature: DatatypeModel, node: Conformance.Ast, illegal: IllegalFeatureCombinations, choices: Choices) {
    function unsupported() {
        throw new InternalError(`New rule required to support ${feature.path} conformance "${feature.conformance}"`);
    }

    function addDisjunctRequirement(flags: FeatureBitmap, node: Conformance.Ast) {
        switch (node.type) {
            case Conformance.Special.Name:
                flags[node.param as string] = false;
                break;

            case Conformance.OR:
                const operands = node.param as Conformance.Ast.BinaryOperands;
                addDisjunctRequirement(flags, operands.lhs);
                addDisjunctRequirement(flags, operands.rhs);
                break;

            default:
                unsupported();
        }
    }

    function addConjunctRequirement(feature: string, node: Conformance.Ast) {
        switch (node.type) {
            case Conformance.Special.Name:
                illegal.push({ [feature]: true, [node.param as string]: false });
                break;

            case Conformance.AND:
                const operands = node.param as Conformance.Ast.BinaryOperands;
                addConjunctRequirement(feature, operands.lhs);
                addConjunctRequirement(feature, operands.rhs);
                break;
        }
    }

    switch (node.type) {
        case Conformance.Special.Empty:
        case Conformance.Flag.Optional:
        case Conformance.Flag.Provisional:
            break;

        case Conformance.Special.Group:
            (node.param as Conformance.Ast.Group).forEach(ast => addFeatureNode(feature, ast, illegal, choices));
            break;

        case Conformance.Special.Choice:
            const definition = node.param as Conformance.Ast.Choice;
            if (definition.num > 1) {
                unsupported();
            }
            let choice = choices[definition.name];
            if (choice) {
                choice.features.push(feature.name);
            } else {
                choice = choices[definition.name] = {
                    exclusive: !definition.orMore,
                    features: [ feature.name ]
                };
            }
            break;

        case Conformance.Special.Name:
            illegal.push({ [node.param as string]: true, [feature.name]: false } );
            break;

        case Conformance.Special.OptionalIf:
            const param = node.param as Conformance.Ast;
            if (param.type == Conformance.AND) {
                addConjunctRequirement(feature.name, param);
            } else {
                const flags = FeatureBitmap({ [feature.name]: true });
                addDisjunctRequirement(flags, node.param as Conformance.Ast);
                illegal.push(flags);
            }
            break;

        default:
            unsupported();
            break;
    }
}
