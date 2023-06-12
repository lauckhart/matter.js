/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/index.js";
import { Aspect } from "../aspects/Aspect.js";
import {
    // These are circular dependencies so just to be safe we only import the
    // types.  We also need the class, though, at runtime.  So we use the
    // references in the Model.constructors factory pool.
    type DatatypeModel,
    type ClusterModel,

    Access,
    BaseDataElement,
    Conformance,
    Constraint,
    DatatypeElement,
    Model,
    Quality,
    Metatype,
    AnyElement
} from "../index.js";

const CONSTRAINT: unique symbol = Symbol("constraint");
const CONFORMANCE: unique symbol = Symbol("conformance");
const ACCESS: unique symbol = Symbol("access");
const QUALITY: unique symbol = Symbol("quality");

/**
 * Each BaseDataElement has a corresponding implementation that derives from
 * this class.
 */
export abstract class DataModel extends Model implements BaseDataElement {
    base?: string;
    byteSize?: BaseDataElement.Size;
    default?: any;
    metatype?: Metatype;

    override get children(): DatatypeModel[] {
        return super.children as any;
    }

    override set children(children: (DatatypeModel | DatatypeElement)[]) {
        super.children = children;
    }

    get constraint() {
        return this.getAspect(CONSTRAINT, Constraint);
    }
    set constraint(definition: Constraint | Constraint.Definition) {
        this.setAspect(CONSTRAINT, Constraint, definition);
    }

    get conformance() {
        return this.getAspect(CONFORMANCE, Conformance);
    }
    set conformance(definition: Conformance | Conformance.Definition) {
        this.setAspect(CONFORMANCE, Conformance, definition);
    }

    get access() {
        return this.getAspect(ACCESS, Access);
    }
    set access(definition: Access | Access.Definition) {
        this.setAspect(ACCESS, Access, definition);
    }

    get quality() {
        return this.getAspect(QUALITY, Quality);
    }
    set quality(definition: Quality | Quality.Definition) {
        this.setAspect(QUALITY, Quality, definition);
    }

    /**
     * Access the cluster that owns this element.
     */
    get cluster() {
        const cluster = this.find(
            current => current.parent,
            current => current instanceof Model.constructors.cluster ? current : undefined,
            true
        );
        if (cluster) {
            return cluster as ClusterModel;
        }
        throw new MatterError("Attempt to access cluster on non-cluster element");
    }

    /**
     * Access the element from which datatype search should commence.  This is
     * the first model that is not a data structure.
     */
    get scope() {
        const scope = this.find(
            current => current.parent,
            current => !(current instanceof DataModel) ? current : undefined,
            true
        )
        if (scope) {
            return scope as Model;
        }
        throw new MatterError("Attempt to access scope on unparented data structure");
    }

    /**
     * In some circumstances the base type can be inferred.  This inference
     * happens here.
     * 
     * Does not recurse so only returns the direct base type.
     */
    get actualBase() {
        return this.base;
    }

    /**
     * Metatype is only present on global types with specific semantic meaning.
     * This model is significant because it gives us information about how to
     * manipulate the data.  This accessor retrieves this model.
     */
    get metaBase() {
        return this.find(
            current => (current as DataModel).baseModel,
            current => (current as DataModel).metatype ? current : undefined,
            true
        ) as DataModel;
    }

    /**
     * Get a Model for my base type, if any.
     */
    get baseModel() {
        const base = this.actualBase;
        if (base) {
            return this.scope.global(DataModel.constructors.datatype, base);
        }
    }

    /**
     * Search the inheritance chain for a child.
     */
    member(key: string | number): Model | undefined {
        return this.find(
            current => current instanceof DataModel ? current.baseModel : undefined,
            current => current.local(DataModel.constructors.datatype, key),
            true
        ) as Model | undefined;
    }

    override valueOf() {
        const result = super.valueOf() as any;
        for (const k of [ "constraint", "conformance", "access", "quality" ]) {
            const v = (this as any)[k] as Aspect<any>;
            if (v && !v.empty) {
                result[k] = v.valueOf();
            }
        }
        return result as AnyElement;
    }

    protected constructor(definition: BaseDataElement.Properties) {
        super(definition);

        const match = this.base?.match(/^list\[(.*)\]$/);
        if (match) {
            this.base = "list";
            this.children.push(new Model.constructors.datatype({ name: "entry", base: match[1] }) as DatatypeModel);
        }
    }

    private getAspect(symbol: symbol, constructor: new(definition: any) => any) {
        return (this as any)[symbol] || ((this as any)[symbol] = new constructor(undefined));
    }

    private setAspect(symbol: symbol, constructor: new(definition: any) => any, value: any) {
        if (value instanceof constructor) {
            (this as any)[symbol] = value;
        } else {
            (this as any)[symbol] = new constructor(value);
        }
    }
}
