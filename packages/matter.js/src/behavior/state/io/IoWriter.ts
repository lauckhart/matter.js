/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../../../cluster/Cluster.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { StatusResponseError } from "../../../protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "../../../protocol/interaction/InteractionProtocol.js";
import { Access, AttributeModel, ClusterModel, FieldValue, Metatype, Model, RecordValidator, ValueModel } from "../../../model/index.js";
import { Io } from "./Io.js";
import { IoFactory } from "./IoFactory.js";

export function IoWriter(schema: ValueModel | ClusterModel, factory: IoFactory): Io["write"] {
    if (schema instanceof ClusterModel) {
        return createStructWriter(factory, factory.attributes);
    }

    const accessLevel = accessLevelFor(schema);

    if (!schema.access.writable || (schema instanceof AttributeModel && schema.fixed)) {
        return () => {
            throw new StatusResponseError("Value is write-only", StatusCode.UnsupportedWrite);
        }
    }

    const metatype = schema.effectiveMetatype;
    if (metatype === undefined) {
        throw new ImplementationError(`Cannot generate writer for ${schema.name} because it is not a type`);
    }

    const requiresTimed = !!schema.access.timed;

    let writer: Io["write"];
    switch (metatype) {
        case Metatype.object:
            writer = createStructWriter(factory, schema.children);

        case Metatype.array:
            writer = createListWriter(factory, schema);

        default:
            writer = createAtomWriter(metatype);
    }

    return (value, input, options) => {
        if (options?.accessLevel !== undefined && options.accessLevel >= accessLevel) {
            throw new StatusResponseError("Access denied", StatusCode.UnsupportedAccess);
        }
        if (requiresTimed && !options?.timed) {
            throw new StatusResponseError(
                "Write rejected without required timed interaction",
                StatusCode.NeedsTimedInteraction
            );
        }

        return writer(value, input, options);
    }
}

function accessLevelFor(schema: ValueModel) {
    return Access.PrivilegePriority[schema.effectiveAccess.writePriv ?? Access.Privilege.Operate] as AccessLevel;
}

function createAtomWriter(metatype: Metatype): Io["write"] {
    return (_value, input) => {
        // We do bare-minimum to set the value here.  RecordValidator handles
        // most validation as constraints and conformance may be affected by
        // the value of other fields
        const newValue = Metatype.cast(metatype, input);
        if (newValue === FieldValue.Invalid) {
            throw new StatusResponseError(
                `Invalid value for ${metatype} field`,
                StatusCode.InvalidDataType,
            )
        }
        return newValue;
    }
}

function createStructWriter(factory: IoFactory, fields: ValueModel[]): Io["write"] {
    return (value, input, options) {
        // TODO
    }
}

function createListWriter(factory: IoFactory, schema: ValueModel): Io["write"] {
    return (value, input, options) {
        // TODO
    }
}
