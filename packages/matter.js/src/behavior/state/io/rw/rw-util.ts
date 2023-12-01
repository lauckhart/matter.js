/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError, InternalError } from "../../../../common/MatterError.js";
import { StatusResponseError } from "../../../../protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "../../../../protocol/interaction/InteractionProtocol.js";
import { Io } from "../Io.js";


export function assertStruct(item: Io.Val): asserts item is Io.Struct {
    if (typeof item !== "object" || item === null) {
        throw new ImplementationError(`Expected struct value to be an object but was ${typeof item}`);
    }
}

export function assertArray(item: Io.Val): asserts item is Io.List {
    if (!Array.isArray(item)) {
        throw new ImplementationError(`Expected list value to be an array but was ${typeof item}`);
    }
}

export function getListIndex(path: Io.Path) {
    let index = path?.[0];
    if (index === undefined) {
        throw new InternalError("Expected list index in empty path");
    }

    if (typeof index === "string") {
        index = Number.parseInt(index);
        if (Number.isNaN(index)) {
            throw new StatusResponseError(
                "List index is non-numeric",
                StatusCode.InvalidAction
            )
        }
    }

    if (index < 0) {
        throw new StatusResponseError(
            `List index ${index} is negative`,
            StatusCode.UnsupportedAttribute
        )
    }

    return index;
}
