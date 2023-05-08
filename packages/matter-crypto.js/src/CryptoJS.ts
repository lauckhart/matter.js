/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "@project-chip/matter.js/util";
import { Crypto } from "@project-chip/matter.js/crypto";
import { sjcl } from "../out/generated/sjcl";

/**
 * This class implements matter crypto using pure JavaScript.  It may be
 * completed in the future but as of right now just contains porions required
 * by CryptoSubtle to cover gaps in WebCrypto.
 */
export abstract class CryptoJS extends Crypto {
    override encrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray {
        
        // TODO
        throw new Error("Not implemented");
    }

    override decrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray {
        // TODO
        throw new Error("Not implemented");
    }
}
