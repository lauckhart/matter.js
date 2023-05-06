/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "@project-chip/matter.js/util";
import {
    CRYPTO_AUTH_TAG_LENGTH, CRYPTO_EC_CURVE, CRYPTO_ENCRYPT_ALGORITHM, CRYPTO_HASH_ALGORITHM, CRYPTO_SYMMETRIC_KEY_LENGTH,
    CryptoDsaEncoding, Crypto,
} from "@project-chip/matter.js/crypto";

const EC_PRIVATE_KEY_PKCS8_HEADER = ByteArray.fromHex("308141020100301306072a8648ce3d020106082a8648ce3d030107042730250201010420");
const EC_PUBLIC_KEY_SPKI_HEADER = ByteArray.fromHex("3059301306072a8648ce3d020106082a8648ce3d030107034200");

const subtle = global.crypto.subtle;;
import * as crypto from "crypto"; // TODO - KILL

function bytesToBuffer(input: ByteArray) {
    return input.buffer.slice(input.byteOffset, input.byteLength + input.byteOffset);
}

async function chunksToBuffer(data: ByteArray | ByteArray[]) {
    if (Array.isArray(data)) {
        return await new Blob(data).arrayBuffer();
    }
    return bytesToBuffer(data);
}

type KeyType = "pkcs8" | "sec1";

async function sign(privateKey: ByteArray, data: ByteArray | ByteArray[], dsaEncoding: CryptoDsaEncoding, keyType: KeyType): Promise<ByteArray> {
    const buffer = await chunksToBuffer(data);

    const key = await subtle.importKey(
        "raw",
        new ByteArray(await new Blob([EC_PRIVATE_KEY_PKCS8_HEADER, privateKey]).arrayBuffer()),
        keyType,
        false,
        [ "sign" ]
    );

    let result = new ByteArray(await subtle.sign({
            name: "ECDSA",
            hash: {
                name: "SHA-256"
            }
        },
        key,
        buffer
    ));

    if (dsaEncoding === "der") {
        // TODO -- convert key from ieee-p1363 to der
    }

    return result;
}

export class CryptoJS extends Crypto {
    encrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray {
        // TODO
        const cipher = crypto.createCipheriv(CRYPTO_ENCRYPT_ALGORITHM, key, nonce, { authTagLength: CRYPTO_AUTH_TAG_LENGTH });
        if (aad !== undefined) {
            cipher.setAAD(aad, { plaintextLength: data.length })
        }
        const encrypted = cipher.update(data);
        cipher.final();
        return ByteArray.concat(encrypted, cipher.getAuthTag());
    }

    decrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray): ByteArray {
        // TODO
        const cipher = crypto.createDecipheriv(CRYPTO_ENCRYPT_ALGORITHM, key, nonce, { authTagLength: CRYPTO_AUTH_TAG_LENGTH });
        const plaintextLength = data.length - CRYPTO_AUTH_TAG_LENGTH;
        if (aad !== undefined) {
            cipher.setAAD(aad, { plaintextLength })
        }
        cipher.setAuthTag(data.slice(plaintextLength));
        const result = cipher.update(data.slice(0, plaintextLength));
        cipher.final();
        return new ByteArray(result);
    }

    getRandomData(length: number): ByteArray {
        const result = new ByteArray(length);
        crypto.getRandomValues(result);
        return result;
    }

    override async ecdhGeneratePublicKey() {
        const ecdh = await subtle.generateKey(
            {
                name: 'ECDH',
                namedCurve: 'P-256'
            },
            false,
            []
        );
        const publicKey = await subtle.exportKey(
            'raw',
            ecdh.publicKey
        );
        return {
            publicKey: new ByteArray(publicKey),
            ecdh: ecdh
        };
    }

    override async ecdhGeneratePublicKeyAndSecret(peerPublicKey: ByteArray): Promise<{ publicKey: ByteArray, sharedSecret: ByteArray }> {
        const { publicKey, ecdh } = await this.ecdhGeneratePublicKey();
        const secret = await this.ecdhGenerateSecret(peerPublicKey, ecdh);
        return {
            publicKey: publicKey,
            sharedSecret: secret
        };
    }

    override async ecdhGenerateSecret(peerPublicKey: ByteArray, ecdh: CryptoKeyPair) {
        const ppk = await subtle.importKey(
            "raw",
            bytesToBuffer(peerPublicKey),
            {
                name: "ECDH",
                namedCurve: "P-256"
            },
            false,
            [ "deriveBits" ]);
        const secret = await subtle.deriveBits(
            {
                name: "ECDH",
                public: ppk
            },
            ecdh.privateKey,
            256
        );
        return new ByteArray(secret);
    }

    override async hash(data: ByteArray | ByteArray[]): Promise<ByteArray> {
        const buffer = await chunksToBuffer(data);
        return new ByteArray(await subtle.digest("SHA-256", buffer));
    }

    override async pbkdf2(secret: ByteArray, salt: ByteArray, iteration: number, keyLength: number): Promise<ByteArray> {
        const key = await subtle.importKey(
            "raw",
            secret,
            "PBKDF2",
            false,
            []
        );
        return new ByteArray(await subtle.deriveBits({
            name: "PBKDF2",
            hash: "SHA-256",
            salt: salt,
            iterations: iteration
        }, key, keyLength));
    }

    override async hkdf(secret: ByteArray, salt: ByteArray, info: ByteArray, length: number = CRYPTO_SYMMETRIC_KEY_LENGTH): Promise<ByteArray> {
        const key = await subtle.importKey(
            "raw",
            secret,
            "HKDF",
            false,
            []
        );
        return new ByteArray(await subtle.deriveBits({
            name: "HKDF",
            hash: "SHA-256",
            salt: salt,
            info: info
        }, key, length));
    }

    override async hmac(secret: ByteArray, data: ByteArray): Promise<ByteArray> {
        const key = await subtle.importKey(
            "raw",
            secret,
            "HMAC",
            false,
            [ "sign" ]
        );
        return new ByteArray(await subtle.sign(
            "HMAC",
            key,
            data
        ));
    }

    override async signPkcs8(privateKey: ByteArray, data: ByteArray | ByteArray[], dsaEncoding: CryptoDsaEncoding = "ieee-p1363"): Promise<ByteArray> {
        privateKey = new ByteArray(await new Blob([EC_PRIVATE_KEY_PKCS8_HEADER, privateKey]).arrayBuffer());
        return await sign(privateKey, data, dsaEncoding, "pkcs8");
   }

    override async signSec1(privateKey: ByteArray, data: ByteArray | ByteArray[], dsaEncoding: CryptoDsaEncoding = "ieee-p1363"): Promise<ByteArray> {
        return await sign(privateKey, data, dsaEncoding, "sec1");
    }

    verifySpkiEc(publicKey: ByteArray, data: ByteArray, signature: ByteArray, dsaEncoding: CryptoDsaEncoding = "ieee-p1363") {
        const verifier = crypto.createVerify(CRYPTO_HASH_ALGORITHM);
        verifier.update(data);
        const success = verifier.verify({
            key: Buffer.from(publicKey), // key has to be a node.js Buffer object
            format: "der",
            type: "spki",
            dsaEncoding,
        }, signature);
        if (!success) throw new Error("Signature verification failed");
    }

    verifySpki(publicKey: ByteArray, data: ByteArray, signature: ByteArray, dsaEncoding: CryptoDsaEncoding = "ieee-p1363") {
        const verifier = crypto.createVerify(CRYPTO_HASH_ALGORITHM);
        verifier.update(data);
        const success = verifier.verify({
            key: Buffer.concat([EC_PUBLIC_KEY_SPKI_HEADER, publicKey]), // key has to be a node.js Buffer object
            format: "der",
            type: "spki",
            dsaEncoding,
        }, signature);
        if (!success) throw new Error("Signature verification failed");
    }

    createKeyPair(): { publicKey: ByteArray, privateKey: ByteArray } {
        const ecdh = crypto.createECDH(CRYPTO_EC_CURVE);
        ecdh.generateKeys();
        return { publicKey: new ByteArray(ecdh.getPublicKey()), privateKey: new ByteArray(ecdh.getPrivateKey()) };
    }
}
