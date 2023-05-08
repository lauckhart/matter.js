/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "@project-chip/matter.js/util";
import { Crypto, CRYPTO_AUTH_TAG_LENGTH } from "@project-chip/matter.js/crypto";
import { sjcl } from "./sjcl.js";

function bytesToBuf(bytes: ByteArray) {
    return bytes.byteLength == bytes.buffer.byteLength
        ? bytes.buffer
        : bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function bytesToBits(bytes: ByteArray) {
    return sjcl.codec.arrayBuffer.toBits(bytesToBuf(bytes));
}

function bitsToBytes(bits: sjcl.BitArray) {
    return new ByteArray(sjcl.codec.arrayBuffer.fromBits(bits));
}

function aesForKey(key: ByteArray) {
    return new sjcl.cipher.aes(bytesToBits(key));
}

/**
 * This class implements matter crypto using pure JavaScript.  It may be
 * completed in the future but as of right now just contains portions required
 * by CryptoSubtle to cover gaps in WebCrypto.
 */
export abstract class CryptoJS extends Crypto {
    override encrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray {
        // Allocate working buffer that includes space for tag
        const workbuf = new ArrayBuffer(data.length + CRYPTO_AUTH_TAG_LENGTH);
        const workbytes = new ByteArray(workbuf);
        workbytes.set(data);

        // Note that .d.ts return value is incorrect, so cast to correct value
        const encryptOut: { ciphertext_buffer: ArrayBuffer, tag: sjcl.BitArray } = <any>sjcl.arrayBuffer.ccm.encrypt(
            aesForKey(key),
            workbuf,
            bytesToBits(nonce),
            aad && bytesToBuf(aad),
            CRYPTO_AUTH_TAG_LENGTH,
            data.length
        );
        
        // Must manually append tag
        workbytes.set(bitsToBytes(encryptOut.tag), data.length);

        return workbytes;
    }

    override decrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray {
        if (data.length < CRYPTO_AUTH_TAG_LENGTH) {
            throw new Error("Invalid ciphertext");
        }
        const workbuf = new ArrayBuffer(data.length - CRYPTO_AUTH_TAG_LENGTH);
        const tag = bytesToBits(new ByteArray(data.slice(data.length - CRYPTO_AUTH_TAG_LENGTH)));
        const workbytes = new ByteArray(workbuf);

        sjcl.arrayBuffer.ccm.decrypt(
            aesForKey(key),
            workbuf,
            bytesToBits(nonce),
            tag,
            (aad && bytesToBuf(aad)
        ));

        return workbytes;
    }
}
