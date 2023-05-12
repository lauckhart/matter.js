/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "@project-chip/matter.js/util";
import { Crypto, CRYPTO_AUTH_TAG_LENGTH } from "@project-chip/matter.js/crypto";
import { sjcl } from "../sjcl.js";

function bytesToBuf(bytes: ByteArray) {
    return bytes.byteLength == bytes.buffer.byteLength
        ? bytes.buffer
        : bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function bytesToBits(bytes: ByteArray) {
    return sjcl.codec.bytes.toBits(<number[]><unknown>bytes);
}

//function bitsToBytes(bits: sjcl.BitArray) {
//    return new ByteArray(sjcl.codec.arrayBuffer.fromBits(bits));
//}

function aesForKey(key: ByteArray) {
    return new sjcl.cipher.aes(bytesToBits(key));
}

const CCM_BLOCK_SIZE = 16;

// For encrypt, type definition return value is wrong.  Adata type is wrong in
// type definition and documentation.  So cast to correct shape
const ccmEncrypt = <(
        prf: SjclCipher,
        plaintext_buffer: ArrayBuffer,
        iv: BitArray,
        adata?: ArrayBuffer,
        tlen?: number,
        ol?: number,
    ): ArrayBuffer => {}>{};

/**
 * This class implements matter crypto using pure JavaScript.  It may be
 * completed in the future but as of right now just contains portions required
 * by CryptoSubtle to cover gaps in Web Crypto.
 */
export abstract class CryptoJS extends Crypto {
    override encrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray {
        // SJCL requires padding to block size
        const padding = data.length % CCM_BLOCK_SIZE ? CCM_BLOCK_SIZE - (data.length % CCM_BLOCK_SIZE) : 0;

        // Allocate working buffer that includes space for padding and tag
        const workbuf = new ArrayBuffer(data.length + padding + CRYPTO_AUTH_TAG_LENGTH);
        const workbytes = new ByteArray(workbuf);
        workbytes.set(data);
        
        const encryptOut: { ciphertext_buffer: ArrayBuffer, tag: sjcl.BitArray } = <any>sjcl.arrayBuffer.ccm.encrypt(
            aesForKey(key),
            workbuf,
            bytesToBits(nonce),
            aad && bytesToBits(aad),
            CRYPTO_AUTH_TAG_LENGTH * 8,
            data.length
        );

        workbytes.set(encryptOut.tag, data.length);
        return workbytes.slice(0, data.length + CRYPTO_AUTH_TAG_LENGTH);
    }

    override decrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray) {
        const length = data.length - CRYPTO_AUTH_TAG_LENGTH;
        if (data.length < 0) {
            throw new Error("Invalid ciphertext");
        }

        // Extract the tag
        const tag = bytesToBits(new ByteArray(data.slice(0,  CRYPTO_AUTH_TAG_LENGTH)));

        // Extract the cyphertext
        const padding = key.length % CCM_BLOCK_SIZE ? CCM_BLOCK_SIZE - (key.length % CCM_BLOCK_SIZE) : 0;
        const workBuf = new ArrayBuffer(data.length - CRYPTO_AUTH_TAG_LENGTH + padding);
        const workBytes = new ByteArray(workBuf);
        workBytes.set(data.slice(CRYPTO_AUTH_TAG_LENGTH));

        // Decrypt
        sjcl.arrayBuffer.ccm.decrypt(
            aesForKey(key),
            workBuf,
            bytesToBits(nonce),
            tag,
            (aad && bytesToBuf(aad)
        ));

        // Remove padding (resize not supported everywhere)
        return workBytes.slice(0, length);
    }
}
