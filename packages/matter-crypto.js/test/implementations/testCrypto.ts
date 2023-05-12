/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { Crypto } from "@project-chip/matter.js/crypto";
import { ByteArray } from "@project-chip/matter.js/util";

export function testCrypto(matterCrypto: Crypto) {
    describe("encrypt", () => {
        it("encrypts data", () => {
            const f = Fixture.encrypt;
            const result = matterCrypto.encrypt(f.key, f.plaintext, f.nonce, f.adata);

            assert.equal(result.toHex(), f.ciphertext.toHex());
        });
    });

    describe("decrypt", () => {
        it("decrypts data", () => {
            const f = Fixture.decrypt;
            const result = matterCrypto.decrypt(f.key, f.ciphertext, f.nonce, f.adata);

            assert.equal(result.toHex(), f.plaintext.toHex());
        });
    });

    describe("signPkcs8 / verifySpki", () => {
        it("signs data with known private key", async () => {
            const f = Fixture.raw;
            const result = await matterCrypto.signPkcs8(f.privateKey, Fixture.blob);
            await matterCrypto.verifySpki(f.publicKey, Fixture.blob, result);
        });

        // Also tested with a dynamic key in createKeyPair test
    });

    describe("signSec1 / verifySpki", () => {
        it("signs data with known sec1 key", async () => {
            const f = Fixture.sec1;
            const result = await matterCrypto.signSec1(f.privateKey, Fixture.blob, "der");
            await matterCrypto.verifySpki(f.publicKey, Fixture.blob, result, "der");
        });
    });

    describe("createKeyPair", () => {
        it("generates a working key pair", async () => {
            const { privateKey, publicKey } = await matterCrypto.createKeyPair();

            await matterCrypto.verifySpki(publicKey, Fixture.blob, await matterCrypto.signPkcs8(privateKey, Fixture.blob));
        });
    });
};

module Fixture {
    const b = (s: string) => ByteArray.fromHex(s);

    export const encrypt = {
        key: b("4e4c1353a133397f7a7557c1fbd9ca38"),
        ciphertext: b("cb50871ccd35d430b9d9f9f2a50c07f6b0e68ac78f671de670bc6622c3538b10184ac58e70475301edae3d45dd169bfad3a4367cb8eb821676b162"),
        plaintext: b("0609523c01000fe399001528003601153501370024000024013e24020b1835012400001818181824ff0118"),
        nonce: b("00ec8ceb000000000000000000"),
        adata: b("00c7a200ec8ceb00")
    }

    export const decrypt = {
        key: b("abf227feffea8c38e688ddcbffc459f1"),
        ciphertext: b("c4527bd6965518e8382edbbd28f27f42492d0766124f9961a772"),
        plaintext: b("03104f3c0000e98ceb00"),
        nonce: b("000ce399000000000000000000"),
        adata: b("00456a000ce39900"),
    }

    export const raw = {
        privateKey: b("727F1005CBA47ED7822A9D930943621617CFD3B79D9AF528B801ECF9F1992204"),
        publicKey: b("0462e2b6e1baff8d74a6fd8216c4cb67a3363a31e691492792e61aee610261481396725ef95e142686ba98f339b0ff65bc338bec7b9e8be0bdf3b2774982476220")
    };

    export const sec1 = {
        privateKey: b("30770201010420aef3484116e9481ec57be0472df41bf499064e5024ad869eca5e889802d48075a00a06082a8648ce3d030107a144034200043c398922452b55caf389c25bd1bca4656952ccb90e8869249ad8474653014cbf95d687965e036b521c51037e6b8cedefca1eb44046694fa08882eed6519decba"),
        publicKey: b("043c398922452b55caf389c25bd1bca4656952ccb90e8869249ad8474653014cbf95d687965e036b521c51037e6b8cedefca1eb44046694fa08882eed6519decba")
    };

    export const blob = encrypt.ciphertext;
}
