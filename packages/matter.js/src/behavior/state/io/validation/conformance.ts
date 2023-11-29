/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../../../common/MatterError.js";
import { Conformance, FeatureSet, FieldValue, ValueModel } from "../../../../model/index.js";
import { StatusResponseError } from "../../../../protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "../../../../protocol/interaction/InteractionProtocol.js";
import { camelize } from "../../../../util/String.js";
import { Io } from "../Io.js";

export class ConformanceError extends StatusResponseError {
    constructor(schema: Io.Schema, ast: Conformance.Ast, message: string) {
        super(
            `Conformance violated for ${
                schema.path
            } expression "${Conformance.serialize(ast)}": ${
                message
            }`, StatusCode.InvalidDataType);
    }
}

/**
 * Creates a function that validates a field based on its conformance
 * definition.
 */
export function createConformanceValidator(
    schema: ValueModel,
    featureMap: ValueModel,
    supportedFeatures: FeatureSet,
    nextValidator?: Io["validate"]
): Io["validate"] | undefined {
    const validate = astToFunction(schema, featureMap, supportedFeatures);

    if (validate) {
        return (value, options) => {
            validate(value, options);
            nextValidator?.(value, options);
        }
    }

    return nextValidator;
}

/**
 * Normalize the feature map and list of supported feature names into sets of
 * "all" and "supported" features by abbreviation.
 */
function normalizeFeatures(featureMap: ValueModel, supportedFeatures: FeatureSet) {
    const featuresAvailable = new FeatureSet();
    const featuresSupported = new FeatureSet();

    for (const feature of featureMap.children) {
        featuresAvailable.add(feature.name);
        if (feature.description && supportedFeatures.has(camelize(feature.description, false)))
        {
            featuresSupported.add(feature.name);
        }
    }

    return {
        featuresAvailable,
        featuresSupported
    }
}

enum Code {
    // Ignored in logical disjunctions (groups and "|" operator); equivalent to
    // disallowed otherwise
    Nonconformant = "nonconformant",

    // Expression matches; may convert to optional inside [] but mandatory
    // otherwise
    Conformant = "conformant",

    // Expression matches and value is optional
    Optional = "optional",

    // Value must be undefined
    Disallowed = "disallowed",

    // A value; used in an expression or else evaluates to mandatory iff the
    // associated value is defined
    Value = "value",

    // Dynamic node must be evaluated at runtime to produce static node
    Evaluate = "evaluate",
}

interface ValueNode {
    code: Code.Value;
    value: Io.Item;
}

type StaticNode =
    | {
        code:
            | Code.Nonconformant
            | Code.Optional
            | Code.Conformant
            | Code.Disallowed
    }
    | ValueNode;

interface RuntimeNode {
    code: Code.Evaluate;
    evaluate: (value: Io.Item, options?: Io.ValidateOptions) => StaticNode;
}

type DynamicNode =
    | StaticNode
    | RuntimeNode;

/**
 * Convert a static node to a dynamic node at runtime.
 */
function evaluateNode(node: DynamicNode, value: Io.Item, options?: Io.ValidateOptions): StaticNode {
    if (node.code === Code.Evaluate) {
        return node.evaluate(value, options);
    }
    return node;
}

/**
 * Cast value nodes to a conformance.
 * 
 * A value node is conformant if the value is defined
 * 
 * Non-value nodes are returned unchanged.
 */
function asConformance<T extends DynamicNode>(node: T) {
    if (node.code === Code.Value) {
        return {
            code: node.value === undefined
                ? Code.Nonconformant
                : Code.Conformant
        } as const;
    } else {
        return node;
    }
}

/**
 * Throw an error if a node is not a value.
 * 
 * We use this to ensure inputs to binary operators make sense.
 */
function assertValue(node: DynamicNode, where: string): asserts node is ValueNode {
    if (node.code !== Code.Value) {
        throw new InternalError(`Expected a value for ${where} but conformance node is "${node.code}"`);
    }
}

/**
 * Generates JS function equivalent of a conformance expression.
 * 
 * We generate a function for each node in the AST.  In addition to the
 * function, we track whether the function evaluates pure-feature conformance
 * (vs. an expression).
 * 
 * In general the conformance AST jumbles set logic with expression evaluation
 * so we need to track two types of state to implement properly.
 */
function astToFunction(
    schema: ValueModel,
    featureMap: ValueModel,
    supportedFeatures: FeatureSet
): Io["validate"] | undefined {
    const ast = schema.conformance.ast;
    const {
        featuresAvailable,
        featuresSupported
    } = normalizeFeatures(featureMap, supportedFeatures);

    // Compile the AST
    const compiledNode = compile(ast);

    // The compiled AST is DynamicNode describing how to test a field for
    // conformance.  Convert this into a validation function.
    switch (compiledNode.code) {
        case Code.Conformant:
            // Passes validation if the field is present
            return requireValue;

        case Code.Nonconformant:
        case Code.Disallowed:
            // Passes validation if the field is not present
            return disallowValue;

        case Code.Optional:
            // There is no conformance to check -- the value may be present or
            // not.  So do not contribute to validation
            return;

        case Code.Evaluate:
            // We must perform runtime evaluation to determine whether the
            // field is conformant
            const evaluate = compiledNode.evaluate;

            return (value, options) => {
                const staticNode = evaluate(value, options);

                switch (staticNode.code) {
                    case Code.Conformant:
                        requireValue(value);
                        break;

                    case Code.Nonconformant:
                    case Code.Disallowed:
                        disallowValue(value);
                        break;

                    case Code.Optional:
                        break;

                    default:
                        throw new InternalError(
                            `Unknown or unsupported top-level conformance node type ${compiledNode.code}`
                        );
                }
            }
    
        default:
            throw new InternalError(
                `Unknown or unsupported top-level conformance node type ${compiledNode.code}`
            );
    }

    /**
     * Convert an AST node into a DynamicNode.
     * 
     * If the node requires runtime evaluation it will be a RuntimeNode, which
     * is a proxy that creates a StaticNode for a specific record.
     * 
     * Runtime evaluation is required if the conformance expression has a
     * choice or cross-references other properties of the same object.
     * 
     * Otherwise the node is a StaticNode.
     */
    function compile(ast: Conformance.Ast): DynamicNode {
        switch (ast?.type) {
            case Conformance.Special.Empty:
            case Conformance.Special.Desc:
            case Conformance.Flag.Provisional:
            case Conformance.Flag.Deprecated:
            case Conformance.Flag.Optional:
                // Alone these all effectively map to "optional" and thus
                // result in no test as all values are acceptable
                return { code: Code.Optional };

            case Conformance.Special.Choice:
                return createChoice(ast.param);

            case Conformance.Special.Group:
                return createGroup(ast.param);

            case Conformance.Special.Name:
                return createName(ast.param);

            case Conformance.Special.OptionalIf:
                return createOptionalIf(ast.param);

            case Conformance.Special.Value:
                return createValue(ast.param);

            case Conformance.Flag.Disallowed:
                return createDisallowed();

            case Conformance.Flag.Mandatory:
                return createMandatory();

            case Conformance.Operator.AND:
            case Conformance.Operator.EQ:
            case Conformance.Operator.NE:
            case Conformance.Operator.OR:
            case Conformance.Operator.GT:
            case Conformance.Operator.LT:
            case Conformance.Operator.GTE:
            case Conformance.Operator.LTE:
            case Conformance.Operator.XOR:
                return createBinaryOp(ast.type, ast.param);

            case Conformance.Operator.NOT:
                return createNotOp(ast.param);

            default:
                // Fail at compile time if list is not exhaustive
                ast satisfies never;

                // Throw at runtime
                throw new InternalError(`Unsupported conformance AST node type ${(ast as any).type}`)
        }
    }

    /**
     * A "choice" is an AST node such as "O.a".
     * 
     * Choice conformance is only relevant when validating multiple properties
     * on the same cluster or struct.
     * 
     * Compiling a choice always results in a RuntimeNode that updates the
     * count in options.choice.  If a property is validated individually then
     * choice is irrelevant and the node does not affect conformance.
     */
    function createChoice(param: Conformance.Ast.Choice): DynamicNode {
        const compiled = compile(param.expr);

        const name = param.name;
        const template: Io.Choice = {
            count: 1,
            target: param.num,
            orMore: !!param.orMore
        }

        return {
            code: Code.Evaluate,

            evaluate: (value, options) => {
                // Update choice definitions.  This is supplied by the struct
                // validator.  If we're only validating a single field then
                // choices aren't available so the choice is ignored
                if (value !== undefined) {
                    const choices = options?.choices;
                    if (choices) {
                        if (!choices[name]) {
                            // Choice not yet defined, define with count of 1
                            choices[name] = { ...template };
                        } else {
                            // Choice already defined; increment count
                            choices[name].count++;
                        }
                    }
                }

                // A bit difficult to reason about but I don't believe the
                // status of the subexpression is relevant for the choice.
                // Especially not now when the only subexpression is "O".
                return evaluateNode(compiled, value, options);
            }
        }
    }

    /**
     * A "group" node is a list or the entries in an optional ([ ... ]) clause.
     * The resulting node is the value of the first list member that does not
     * report as Code.Nonconformant.
     */
    function createGroup(param: Conformance.Ast.Group): DynamicNode {
        if (!Array.isArray(param)) {
            throw new InternalError("Conformance AST group parameter is not an array");
        }

        // A "group" is a list of conformances; any success passes the entire
        // group and subsequent tests are not evaluated
        const members = param.map(test => compile(test));

        // Reduce tests that must be evaluated at runtime vs. compile time
        const reduced = Array<DynamicNode>();
        for (const member of members) {
            // Nonconformant - ignore
            if (member.code === Code.Nonconformant) {
                continue;
            }

            // Optional & required - no need to evaluate subsequent nodes
            if (member.code === Code.Optional || member.code === Code.Conformant) {
                // Runtime evaluation; this will be the final result
                if (reduced.length) {
                    reduced.push(member);
                    break;
                }

                // No need to runtime evaluation
                return member;
            }

            // Evaluate - remains in list and requires evaluation at runtime
            reduced.push(member);
        }

        // We must further reduce at runtime
        return {
            code: Code.Evaluate,

            evaluate: (value, options) => {
                for (const member of reduced) {
                    const node = evaluateNode(member, value, options);
                    if (node.code !== Code.Nonconformant) {
                        return node;
                    }
                }
                return {
                    code: Code.Nonconformant
                }
            }
        }
    }

    /**
     * A name references a feature or the name of a sibling property on the
     * containing object.  We treat the name as a feature if the name is
     * present in featuresAvailable.
     * 
     * For features, conformance is known at compile time so the resuling node
     * is a StaticNode.
     * 
     * For property names, we need to load the corresponding value at runtime.
     * This results in a RuntimeNode that retrieves the value from
     * options.siblings.
     */
    function createName(param: string): DynamicNode {
        if (featuresAvailable.has(param)) {
            // Name references a feature.  We know whether features are
            // supported by a cluster at compile time so this results in a
            // static node that is conformant iff the feature is supported
            if (featuresSupported.has(param)) {
                return {
                    code: Code.Conformant
                }
            } else {
                return {
                    code: Code.Nonconformant
                }
            }
        } else {
            // Name references a sibling property.  This results in a value
            // node but must be evaluated at runtime against a specific struct
            return {
                code: Code.Evaluate,

                evaluate: (_value, options) => {
                    return {
                        code: Code.Value,
                        value: options?.siblings?.[param]
                    }
                }
            }
        }
    }

    /**
     * Compile an "optional if" node.  This converts conformant nodes into
     * optional nodes and otherwise leaves the node unchanged.
     * 
     * This represents a conformance expression surrounded by brackets
     * such as [ FOO, BAR ].  We first evaluate the internal expression which
     * may happen statically or at runtime.  Then we convert conformant nodes
     * to optional.
     */
    function createOptionalIf(param: Conformance.Ast): DynamicNode {
        let node = compile(param) ?? {};
        node = asConformance(node);

        switch (node.code) {
            case Code.Conformant:
                return { code: Code.Optional };

            case Code.Evaluate:
                const evaluate = node.evaluate;
                return {
                    code: Code.Evaluate,

                    evaluate: (value, options) => {
                        let staticNode = evaluate(value, options);
                        staticNode = asConformance(staticNode);

                        if (staticNode.code === Code.Conformant) {
                            return { code: Code.Optional };
                        }

                        return staticNode;
                    }
                }

            default:
                return node;
        }
    }

    /**
     * A value node represents is static literal value.  This is how we encode
     * numeric literals used in expressions.
     */
    function createValue(param: FieldValue): DynamicNode {
        return {
            code: Code.Value,
            value: param
        }
    }

    /**
     * "Disallowed" represents "X" in a conformance expression which explicitly
     * disallows the property.
     */
    function createDisallowed(): StaticNode {
        return {
            code: Code.Disallowed
        }
    }

    /**
     * "Mandatory" is a conformance "M" and maps explicitly to conformant.
     * 
     * This means that we will convert [ M ] to optional but that's a pretty
     * silly construct that the spec doesn't use.  Otherwise the field will be
     * required.
     */
    function createMandatory(): DynamicNode {
        return {
            code: Code.Conformant
        }
    }

    /**
     * A binary operator is an expression that compares two values using 
     * a binary operator.  So e.g. "FieldName > 4".
     * 
     * If the operator is a boolean operator it operates on conformance or
     * values depending on the type of input.
     * 
     * Otherwise throws an error if the input AST nodes are not values.  We
     * could in theory convert conformance to a binary 0 or 1 but this does not
     * have real-world applicability and would only occur for malformed
     * conformance.
     */
    function createBinaryOp(
        operator: Conformance.Operator,
        {lhs, rhs}: Conformance.Ast.BinaryOperands
    ): DynamicNode {
        const compiledLhs = compile(lhs);
        const compiledRhs = compile(rhs);

        switch (operator) {
            case Conformance.Operator.AND:
            case Conformance.Operator.OR:
            case Conformance.Operator.XOR:
                // TODO
                break;
            
            case Conformance.Operator.EQ:
            case Conformance.Operator.GT:
            case Conformance.Operator.GTE:
            case Conformance.Operator.LT:
            case Conformance.Operator.LTE:
                // TODO
                break;

            default:
                throw new InternalError(`Unknown binary operator ${operator}`);
        }
    }

    /**
     * Inverts the meaning of conformance.  A conformant node becomes
     * non-conformant and vice-versa.
     */
    function createNotOp(param: Conformance.Ast): DynamicNode {
        let operand = compile(param);
        operand = asConformance(operand);

        switch (operand.code) {
            case Code.Nonconformant:
                return { code: Code.Conformant };

            case Code.Evaluate:
                const evaluate = operand.evaluate;
                return {
                    code: Code.Evaluate,

                    evaluate: (value, options) => {
                        let staticOperand = evaluate(value, options);
                        staticOperand = asConformance(staticOperand);

                        if (staticOperand.code === Code.Nonconformant) {
                            return { code: Code.Conformant };
                        }
                        return { code: Code.Nonconformant };
                    }
                }

            default:
                return { code: Code.Nonconformant };
        }
    }

    function requireValue(value: unknown) {
        if (value === undefined) {
            throw new ConformanceError(
                schema, 
                ast,
                "Mandatory field is undefined"
            )
        }
    }
    
    function disallowValue(value: unknown) {
        if (value !== undefined) {
            throw new ConformanceError(
                schema,
                ast,
                "Disallowed field is defined"
            )
        }
    }
}
