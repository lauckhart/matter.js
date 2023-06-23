/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../../src/log/index.js";
import { Matter, MatterModel, ValidateModel } from "../../../src/model/index.js";

if (globalThis.process?.env.TERM_PROGRAM == "vscode" || globalThis.process?.stdin.isTTY) {
    Logger.format = "ansi";
}

let matterModel: MatterModel;
let validationResult: ValidateModel.Result | undefined;

function instantiate() {
    if (!matterModel) {
        matterModel = new MatterModel(Matter);
    }
    return matterModel;
}

function validate() {
    if (!validationResult) {
        debugger;
        validationResult = ValidateModel(instantiate());
        validationResult.report();
    }
    return validationResult;
}

describe("Matter", () => {
    it("instantiates model", () => {
        expect(() => { instantiate() }).not.toThrow();
    })

    it("validates", () => {
        expect(() => { validate() }).not.toThrow();        
    })

    it("has not increased in errors", () => {
        expect(validate().errors.length).toBeLessThanOrEqual(34);
    })

    it("has not decreased in scope", () => {
        expect(validate().elementCount).toBeGreaterThanOrEqual(3683);
    })
})
