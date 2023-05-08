/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as crypto from "crypto";
import { ByteArray } from "@project-chip/matter.js/util";
import {
    CRYPTO_AUTH_TAG_LENGTH, CRYPTO_EC_CURVE, CRYPTO_ENCRYPT_ALGORITHM, CRYPTO_HASH_ALGORITHM, CRYPTO_SYMMETRIC_KEY_LENGTH,
    CryptoDsaEncoding, Crypto,
} from "@project-chip/matter.js/crypto";

const EC_PRIVATE_KEY_PKCS8_HEADER = ByteArray.fromHex("308141020100301306072a8648ce3d020106082a8648ce3d030107042730250201010420");
const EC_PUBLIC_KEY_SPKI_HEADER = ByteArray.fromHex("3059301306072a8648ce3d020106082a8648ce3d030107034200");

/**
 * Crypto implementation that utilizes Node's "crypto" interface.
 */
export class CryptoNode extends Crypto {
    override encrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray) {
        const cipher = crypto.createCipheriv(CRYPTO_ENCRYPT_ALGORITHM, key, nonce, { authTagLength: CRYPTO_AUTH_TAG_LENGTH });
        if (aad !== undefined) {
            cipher.setAAD(aad, { plaintextLength: data.length })
        }
        const encrypted = cipher.update(data);
        cipher.final();
        return ByteArray.concat(encrypted, cipher.getAuthTag());
    }

    override decrypt(key: ByteArray, data: ByteArray, nonce: ByteArray, aad?: ByteArray) {
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

    override getRandomData(length: number) {
        return new ByteArray(crypto.randomBytes(length));
    }

    override async ecdhGeneratePublicKey() {
        const ecdh = crypto.createECDH(CRYPTO_EC_CURVE);
        ecdh.generateKeys();
        return { publicKey: new ByteArray(ecdh.getPublicKey()), ecdh: ecdh };
    }

    override async ecdhGeneratePublicKeyAndSecret(peerPublicKey: ByteArray) {
        const ecdh = crypto.createECDH(CRYPTO_EC_CURVE);
        ecdh.generateKeys();
        return { publicKey: new ByteArray(ecdh.getPublicKey()), sharedSecret: new ByteArray(ecdh.computeSecret(peerPublicKey)) };
    }

    override async ecdhGenerateSecret(peerPublicKey: ByteArray, ecdh: crypto.ECDH) {
        return new ByteArray(ecdh.computeSecret(peerPublicKey));
    }

    override async hash(data: ByteArray | ByteArray[]) {
        const hasher = crypto.createHash(CRYPTO_HASH_ALGORITHM);
        if (Array.isArray(data)) {
            data.forEach(chunk => hasher.update(chunk));
        } else {
            hasher.update(data);
        }
        return new ByteArray(hasher.digest());
    }

    override async pbkdf2(secret: ByteArray, salt: ByteArray, iteration: number, keyLength: number) {
        return new Promise<ByteArray>((resolver, rejecter) => {
            crypto.pbkdf2(secret, salt, iteration, keyLength, CRYPTO_HASH_ALGORITHM, (error, key) => {
                if (error !== null) rejecter(error);
                resolver(new ByteArray(key));
            });
        });
    }

    override async hkdf(secret: ByteArray, salt: ByteArray, info: ByteArray, length: number = CRYPTO_SYMMETRIC_KEY_LENGTH) {
        return new Promise<ByteArray>((resolver, rejecter) => {
            crypto.hkdf(CRYPTO_HASH_ALGORITHM, secret, salt, info, length, (error, key) => {
                if (error !== null) rejecter(error);
                resolver(new ByteArray(key));
            });
        });
    }

    override async hmac(key: ByteArray, data: ByteArray) {
        const hmac = crypto.createHmac(CRYPTO_HASH_ALGORITHM, key);
        hmac.update(data);
        return new ByteArray(hmac.digest());
    }

    override async signPkcs8(privateKey: ByteArray, data: ByteArray | ByteArray[], dsaEncoding: CryptoDsaEncoding = "ieee-p1363") {
        const signer = crypto.createSign(CRYPTO_HASH_ALGORITHM);
        if (Array.isArray(data)) {
            data.forEach(chunk => signer.update(chunk));
        } else {
            signer.update(data);
        }
        return new ByteArray(signer.sign({
            key: Buffer.concat([EC_PRIVATE_KEY_PKCS8_HEADER, privateKey]), // key has to be a node.js Buffer object
            format: "der",
            type: "pkcs8",
            dsaEncoding,
        }));
    }

    override async signSec1(privateKey: ByteArray, data: ByteArray | ByteArray[], dsaEncoding: CryptoDsaEncoding = "ieee-p1363") {
        const signer = crypto.createSign(CRYPTO_HASH_ALGORITHM);
        if (Array.isArray(data)) {
            data.forEach(chunk => signer.update(chunk));
        } else {
            signer.update(data);
        }
        return new ByteArray(signer.sign({
            key: Buffer.from(privateKey), // key has to be a node.js Buffer object
            format: "der",
            type: "sec1",
            dsaEncoding,
        }));
    }

    override async verifySpkiEc(publicKey: ByteArray, data: ByteArray, signature: ByteArray, dsaEncoding: CryptoDsaEncoding = "ieee-p1363") {
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

    override async verifySpki(publicKey: ByteArray, data: ByteArray, signature: ByteArray, dsaEncoding: CryptoDsaEncoding = "ieee-p1363") {
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

    override async createKeyPair() {
        const ecdh = crypto.createECDH(CRYPTO_EC_CURVE);
        ecdh.generateKeys();
        return { publicKey: new ByteArray(ecdh.getPublicKey()), privateKey: new ByteArray(ecdh.getPrivateKey()) };
    }
}
