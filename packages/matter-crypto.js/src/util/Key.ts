/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DerCodec } from "@project-chip/matter.js/codec";
import { ByteArray } from "@project-chip/matter.js/util";
import { Base64 } from "../codec/Base64Codec.js";

/**
 * Represents a cryptographic key.
 * 
 * Models keys as JWK.  Advantages of this format:
 * 
 *   - Standard
 *   - Widely supported
 *   - Fully models relevant key types
 *   - Where not supported, extracting constituent parts for translation is trivial
 */
export class Key implements JsonWebKey {
    public constructor(source: Key = {}) {
        implementAliases(this);
        Object.assign(this, source);
    }

    // These are actually aliases, TS just doesn't let us define them as such
    algorithm?: typeof this.alg;
    curve?: typeof this.crv;
    type?: typeof this.kty;
    operations?: typeof this.key_ops;
    private?: typeof this.d;
    privateBits?: ByteArray;
    xBits?: ByteArray;
    yBits?: ByteArray;

    alg?: string;
    crv?: string;
    d?: string;
    dp?: string;
    dq?: string;
    e?: string;
    ext?: boolean;
    k?: string;
    key_ops?: (KeyUsage | string)[];
    kty?: string;
    n?: string;
    oth?: RsaOtherPrimesInfo[];
    p?: string;
    q?: string;
    qi?: string;
    use?: "sig" | "enc" | string;
    x?: string;
    y?: string;

    static fromPkcs8(input: ByteArray) {
        // Minimal possibly naive private key and curve extraction
        const outer = DerCodec.decode(input);
        const innerBytes = outer?._elements?.[2]._bytes;
        if (innerBytes == undefined) throw new Error("Invalid PKCS8 key");
        const inner = DerCodec.decode(innerBytes);
        const d = inner?._elements?.[1]._bytes;
        if (d == undefined) throw new Error("Invalid PKCS8 key");
        return new Key({
            privateBits: d
        });
    }

    static fromSec1(input: ByteArray) {
        // Minimal possibly naive private key extraction
        const decoded = DerCodec.decode(input);
        const d = decoded?._elements?.[1]?._bytes;
        return new Key({
            privateBits: d
        });
    }
};

// Grr no optional getters/setters in TS but cryptic JWK keys are ugly
function implementAliases(that: any) {
    Object.entries({
        algorithm: "alg",
        curve: "crv",
        type: "kty",
        operations: "ops",
        private: "d"
    }).forEach(([alias, target]) => {
        Object.defineProperty(that, alias, {
            get: () => that[target],
            set: (value) => that[target] = value
        });
    });

    Object.entries({
        privateBits: "d",
        xBits: "x",
        yBits: "y"
    }).forEach(([alias, target]) => {
        Object.defineProperty(that, alias, {
            get: () => that[target] !== undefined && Base64.decode(that[target]),
            set: (value) => that[target] = value === undefined ? undefined : Base64.encode(value, true)
        });
    });
}
