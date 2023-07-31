/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import chai from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

type Assert = typeof chai.assert;

type AssertingAssert = (value: unknown, message?: string | undefined) => asserts value;
type UntypedEqual = (actual: unknown, expected: unknown, message?: string | undefined) => void;

interface ExtendedAssert extends Assert {
    // Make these assertions assert TS existence
    ok: AssertingAssert;
    isDefined: AssertingAssert;

    // Do not require equal/deepEquals to have the same TS type
    equal: UntypedEqual,
    deepEqual: UntypedEqual
}

export const assert: ExtendedAssert = chai.assert;
export const expect = chai.expect;
