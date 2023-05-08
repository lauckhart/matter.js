/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "@project-chip/matter.js/util";
import { DerCodec } from "@project-chip/matter.js/codec";
import { CryptoJS } from "./CryptoJS.js";
import {
    CRYPTO_SYMMETRIC_KEY_LENGTH, CryptoDsaEncoding
} from "@project-chip/matter.js/crypto";

// TODO - share w/ CryptoNode?
const EC_PRIVATE_KEY_PKCS8_HEADER = ByteArray.fromHex("308141020100301306072a8648ce3d020106082a8648ce3d030107042730250201010420");
const EC_PUBLIC_KEY_SPKI_HEADER = ByteArray.fromHex("3059301306072a8648ce3d020106082a8648ce3d030107034200");

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

type SignatureAlgorithm = "pkcs8" | "sec1" | "spki";

const SIGNATURE_ALGORITHM = <EcdsaParams> { name: "ECDSA", hash: { name: "SHA-256" }};

async function sign(privateKey: ByteArray, data: ByteArray | ByteArray[], dsaEncoding: CryptoDsaEncoding, algorithm: SignatureAlgorithm): Promise<ByteArray> {
    const buffer = await chunksToBuffer(data)

    const key = await subtle.importKey(
        "raw",
        privateKey,
        algorithm,
        false,
        [ "sign" ]
    );

    let result = new ByteArray(await subtle.sign(
        SIGNATURE_ALGORITHM,
        key,
        buffer
    ));

    if (dsaEncoding == "ieee-p1363") return result;

    let r = result.subarray(0, result.length / 2);
    let s = result.subarray(result.length / 2);
    if (r[0] & 0xf0) r = ByteArray.concat(new ByteArray([0]), r);
    if (s[0] & 0xf0) s = ByteArray.concat(new ByteArray([0]), s);
    return DerCodec.encode({
        _tag: 48,
        _elements: [
            { _tag: 2, _bytes: r },
            { _tag: 2, _bytes: r }
        ]
    });
}

async function verify(publicKey: ByteArray, data: ByteArray, signature: ByteArray, dsaEncoding: CryptoDsaEncoding, algorithm: SignatureAlgorithm) {
    const key = await subtle.importKey(
        "raw",
        publicKey,
        algorithm,
        false,
        [ "verify" ]
    );

    if (dsaEncoding == "der") {
        const decoded = DerCodec.decode(signature);
        let r = decoded?._elements?.[0]?._bytes;
        let s = decoded?._elements?.[1]?._bytes;
        if (decoded._tag != 48 || !r || !s || !r.length || !s.length)
            throw new Error("Invalid DER signature");
        if (r.length % 2 && !r[0]) r = r.subarray(1);
        if (s.length % 2 && !s[0]) s = s.subarray(1);
        signature = ByteArray.concat(r, s);
    }

    const verified = await subtle.verify(
        SIGNATURE_ALGORITHM,
        key,
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
        privateKey = ByteArray.concat(EC_PRIVATE_KEY_PKCS8_HEADER, privateKey);
        return sign(privateKey, data, dsaEncoding, "pkcs8");
    }

    override async signSec1(privateKey: ByteArray, data: ByteArray | ByteArray[], dsaEncoding: CryptoDsaEncoding = "ieee-p1363") {
        return sign(privateKey, data, dsaEncoding, "sec1");
    }

    override async verifySpkiEc(publicKey: ByteArray, data: ByteArray, signature: ByteArray, dsaEncoding: CryptoDsaEncoding = "ieee-p1363") {
        return verify(publicKey, data, signature, dsaEncoding, "spki");
    }

    override async verifySpki(publicKey: ByteArray, data: ByteArray, signature: ByteArray, dsaEncoding: CryptoDsaEncoding = "ieee-p1363") {
        publicKey = ByteArray.concat(EC_PUBLIC_KEY_SPKI_HEADER, publicKey);
        return verify(publicKey, data, signature, dsaEncoding, "spki");
    }

    override async createKeyPair() {
        const { publicKey, ecdh } = await this.ecdhGeneratePublicKey();
        const privateKey = await subtle.exportKey(
            'raw',
            ecdh.publicKey
        );
        return {
            publicKey: publicKey,
            privateKey: privateKey
        };
    }
}
