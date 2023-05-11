/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "@project-chip/matter.js/util";
import { DerCodec } from "@project-chip/matter.js/codec";
import { CryptoJS } from "./CryptoJS.js";
import { Key } from "../util/Key.js";
import {
    CRYPTO_SYMMETRIC_KEY_LENGTH, CryptoDsaEncoding
} from "@project-chip/matter.js/crypto";

const subtle = global.crypto.subtle;

function bytesToBuffer(input: ByteArray) {
    return input.buffer.slice(input.byteOffset, input.byteLength + input.byteOffset);
}

async function chunksToBuffer(data: ByteArray | ByteArray[]) {
    if (Array.isArray(data)) {
        return await new Blob(data).arrayBuffer();
    }
    return bytesToBuffer(data);
}

const SIGNATURE_ALGORITHM = <EcdsaParams> {
    name: "ECDSA",
    namedCurve: "P-256",
    hash: { name: "SHA-256" }
};

async function sign(key: Key, data: ByteArray | ByteArray[], dsaEncoding: CryptoDsaEncoding): Promise<ByteArray> {
    const buffer = await chunksToBuffer(data)
    key.extractable = true;
    key.operations = [ "sign" ];

    const subtleKey = await subtle.importKey(
        "jwk",
        key,
        SIGNATURE_ALGORITHM,
        false,
        [ "sign" ]
    );

    let result = new ByteArray(await subtle.sign(
        SIGNATURE_ALGORITHM,
        subtleKey,
        buffer
    ));

    if (dsaEncoding == "ieee-p1363") return result;

    let r = result.subarray(0, result.length / 2);
    let s = result.subarray(result.length / 2);
    if (r[0] & 0xf0) r = ByteArray.concat(new ByteArray([0]), r);
    if (s[0] & 0xf0) s = ByteArray.concat(new ByteArray([0]), s);
    return DerCodec.encode([ r, s ]);
}

async function verify(key: Key, data: ByteArray, signature: ByteArray, dsaEncoding: CryptoDsaEncoding) {
    const subtleKey = await subtle.importKey(
        "jwk",
        key,
        SIGNATURE_ALGORITHM,
        false,
        [ "verify" ]
    );

    if (dsaEncoding == "der") {
        const decoded = DerCodec.decode(signature);

        let r = decoded?._elements?.[0]?._bytes;
        let s = decoded?._elements?.[1]?._bytes;
        if (!r || !s || !r.length || !s.length) {
            throw new Error("Invalid DER signature");
        }

        if (r.length % 2 && !r[0]) r = r.subarray(1);
        if (s.length % 2 && !s[0]) s = s.subarray(1);

        signature = ByteArray.concat(r, s);
    }

    const verified = await subtle.verify(
        SIGNATURE_ALGORITHM,
        subtleKey,
        signature,
        data
    );

    if (!verified)
        throw new Error("Signature verification failed");
}

/**
 * Crypto implementation that utilizes Web Crypto's "crypto.subtle" interface.
 */
export class CryptoSubtle extends CryptoJS {
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
            true,
            [ 'deriveKey', 'deriveBits' ]
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

    override async ecdhGeneratePublicKeyAndSecret(peerPublicKey: ByteArray) {
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

    override async hash(data: ByteArray | ByteArray[]) {
        const buffer = await chunksToBuffer(data);
        return new ByteArray(await subtle.digest("SHA-256", buffer));
    }

    override async pbkdf2(secret: ByteArray, salt: ByteArray, iteration: number, keyLength: number) {
        const key = await subtle.importKey(
            "raw",
            secret,
            "PBKDF2",
            false,
            [ "deriveBits" ]
        );
        return new ByteArray(await subtle.deriveBits({
            name: "PBKDF2",
            hash: "SHA-256",
            salt: salt,
            iterations: iteration
        }, key, keyLength));
    }

    override async hkdf(secret: ByteArray, salt: ByteArray, info: ByteArray, length: number = CRYPTO_SYMMETRIC_KEY_LENGTH) {
        const key = await subtle.importKey(
            "raw",
            secret,
            "HKDF",
            false,
            [ "deriveBits" ]
        );
        return new ByteArray(await subtle.deriveBits({
            name: "HKDF",
            hash: "SHA-256",
            salt: salt,
            info: info
        }, key, length));
    }

    override async hmac(secret: ByteArray, data: ByteArray) {
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

    override async signPkcs8(privateKey: ByteArray, data: ByteArray | ByteArray[], dsaEncoding: CryptoDsaEncoding = "ieee-p1363") {
        // No actual PKCS-8 involved
        const key = new Key({
            type: "EC",
            curve: "P-256",
            extractable: true,
            privateBits: privateKey
        });
        return sign(key, data, dsaEncoding);
    }

    override async signSec1(privateKey: ByteArray, data: ByteArray | ByteArray[], dsaEncoding: CryptoDsaEncoding = "ieee-p1363") {
        return sign(new Key({ sec1: privateKey }), data, dsaEncoding);
    }

    override async verifySpkiEc(publicKey: ByteArray, data: ByteArray, signature: ByteArray, dsaEncoding: CryptoDsaEncoding = "ieee-p1363") {
        const key = new Key({ spki: publicKey });
        return verify(key, data, signature, dsaEncoding);
    }

    override async verifySpki(publicKey: ByteArray, data: ByteArray, signature: ByteArray, dsaEncoding: CryptoDsaEncoding = "ieee-p1363") {
        // No actual SPKI involved
        const key = new Key({ ecPublic: publicKey });
        return verify(key, data, signature, dsaEncoding);
    }

    override async createKeyPair() {
        const { publicKey, ecdh } = await this.ecdhGeneratePublicKey();
        const privateKey = new Key(await subtle.exportKey("jwk", ecdh.privateKey));
        return {
            publicKey: publicKey,
            privateKey: privateKey.privateBits!
        };
    }
}
