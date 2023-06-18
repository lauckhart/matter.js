/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/index.js";
import { Access, Aspect, Conformance, Constraint, Quality } from "../aspects/index.js";
import { Metatype } from "../definitions/index.js";
import { AnyElement, ValueElement, DatatypeElement } from "../elements/index.js";
import { Model } from "./Model.js";

// These are circular dependencies so just to be safe we only import the
// types.  We also need the class, though, at runtime.  So we use the
// references in the Model.constructors factory pool.
import { type ClusterModel } from "./ClusterModel.js";
import { type DatatypeModel } from "./DatatypeModel.js";

const CONSTRAINT: unique symbol = Symbol("constraint");
const CONFORMANCE: unique symbol = Symbol("conformance");
const ACCESS: unique symbol = Symbol("access");
const QUALITY: unique symbol = Symbol("quality");

/**
 * Each ValueElement has a corresponding implementation that derives from
 * this class.
 */
export abstract class ValueModel extends Model implements ValueElement {
    type?: string;
    byteSize?: ValueElement.Size;
    default?: any;
    metatype?: Metatype;

    override get children(): DatatypeModel[] {
        return super.children as any;
    }

    override set children(children: (DatatypeModel | DatatypeElement)[]) {
        super.children = children;
    }

    get constraint(): Constraint {
        return this.getAspect(CONSTRAINT, Constraint);
    }
    set constraint(definition: Constraint | Constraint.Definition) {
        this.setAspect(CONSTRAINT, Constraint, definition);
    }

    get conformance(): Conformance {
        return this.getAspect(CONFORMANCE, Conformance);
    }
    set conformance(definition: Conformance | Conformance.Definition) {
        this.setAspect(CONFORMANCE, Conformance, definition);
    }

    get access(): Access {
        return this.getAspect(ACCESS, Access);
    }
    set access(definition: Access | Access.Definition) {
        this.setAspect(ACCESS, Access, definition);
    }

    get quality(): Quality {
        return this.getAspect(QUALITY, Quality);
    }
    set quality(definition: Quality | Quality.Definition) {
        this.setAspect(QUALITY, Quality, definition);
    }

    /**
     * Access the cluster that owns this element.
     */
    get cluster() {
        const cluster = this.search(
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
        const scope = this.search(
            current => current.parent,
            current => !(current instanceof ValueModel) ? current : undefined,
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
    get actualType() {
        return this.type;
    }

    /**
     * Metatype is only present on global types with specific semantic meaning.
     * This model is significant because it gives us information about how to
     * manipulate the data.  This accessor retrieves this model.
     */
    get metaBase() {
        return this.search(
            current => (current as ValueModel).baseModel,
            current => (current as ValueModel).metatype ? current : undefined,
            true
        ) as ValueModel;
    }

    /**
     * The working metatype for this object.
     */
    get effectiveMetatype() {
        const metaBase = this.metaBase;
        if (metaBase) {
            return metaBase.metatype;
        }
    }

    /**
     * Get a Model for my base type, if any.
     */
    get baseModel() {
        const base = this.actualType;
        if (base) {
            return this.scope.global(ValueModel.constructors.datatype, base);
        }
    }

    /**
     * Collect constraints and conformance for this type and all base types.
     */
    get validationAspects() {
        let aspects = Array<Aspect<any>>();
        this.search(
            current => {
                const next = current instanceof ValueModel ? current.baseModel : undefined;
                if (next instanceof ValueModel) {
                    return next;
                }
            },
            current => {
                if (current instanceof ValueModel) {
                    if (
                        !current.conformance.empty
                        && current.conformance.type != Conformance.Special.Desc
                    ) {
                        aspects.push(current.conformance);
                    }
                    if (!current.constraint.empty && !current.constraint.desc) {
                        aspects.push(current.constraint);
                    }
                    if (current.quality.nullable === false) {
                        aspects.push(current.quality);
                    }
                }
            },
            false
        )
        return aspects;
    }

    /**
     * Search the inheritance chain for a child.
     */
    member(key: string | number): Model | undefined {
        return this.search(
            current => current instanceof ValueModel ? current.baseModel : undefined,
            current => current.local(ValueModel.constructors.datatype, key),
            true
        ) as Model | undefined;
    }

    /**
     * Datatype fields (datatypes parented by other datatypes) can omit their
     * ID.  In this case we use their index within the parent as the ID.
     * 
     * Note that this is only true for fields.  For named datatypes that appear
     * directly under the cluster the name is the canonical key.
     */
    override get effectiveId() {
        if (this.id != undefined) {
            return this.id;
        }
        if (this.parent) {
            const index = this.parent.children.indexOf(this);
            if (index != -1) {
                return index;
            }
        }
    }

    override valueOf() {
        const result = super.valueOf() as any;
        for (const k of [ "conformance", "access", "quality", "constraint" ]) {
            const v = (this as any)[k] as Aspect<any>;
            if (v && !v.empty) {
                result[k] = v.valueOf();
            }
        }
        return result as AnyElement;
    }

    protected constructor(definition: ValueElement.Properties) {
        super(definition);

        const match = this.type?.match(/^list\[(.*)\]$/);
        if (match) {
            this.type = "list";
            this.children.push(new Model.constructors.datatype({ name: "entry", type: match[1] }) as DatatypeModel);
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
