/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DerType, DerCodec, DerNode } from "@project-chip/matter.js/codec";
import { ByteArray } from "@project-chip/matter.js/util";
import { Base64 } from "../codec/Base64Codec.js";
import { ec as EC } from "elliptic";

const JWK_KEYS = [ "crv", "d", "dp", "dq", "e", "ext", "k", "key_ops", "kty", "n",  "oth", "p", "q", "qi", "use", "x", "y" ];

export enum KeyType {
    EC = "EC",
    RSA = "RSA",
    oct = "oct"
};

export enum CurveType {
    p256 = "P-256",
    p384 = "P-384",
    p521 = "P-521"
};

enum Asn1ObjectID {
    ecPublicKey = "2a8648ce3d0201",
    prime256r1 = "2a8648ce3d030107",
    prime384r1 = "0103840022",
    prime521r1 = "0103840023"
};

const CurveLookup = {
    [Asn1ObjectID.prime256r1]: CurveType.p256,
    [Asn1ObjectID.prime384r1]: CurveType.p384,
    [Asn1ObjectID.prime521r1]: CurveType.p521
};

/**
 * Data-only model of key properties.
 */
class KeyProps implements JsonWebKey {
    // Descriptive aliases
    algorithm?: typeof this.alg;
    curve?: typeof this.crv;
    type?: typeof this.kty;
    operations?: typeof this.key_ops;
    private?: typeof this.d;
    extractable?: typeof this.ext;

    // Standard JWK properties (these are the only stored fields)
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
    
    // Base64 encoding and decoding
    privateBits?: ByteArray;
    xBits?: ByteArray;
    yBits?: ByteArray;

    // Key import (write-only)
    sec1?: ByteArray;
    pkcs8?: ByteArray;
    spki?: ByteArray;
    ecPublic?: ByteArray;
};

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
export class Key extends KeyProps {
    public constructor(source: KeyProps = {}) {
        super();

        for(const key of JWK_KEYS)
            if (source?.hasOwnProperty(key))
                (<any>this)[key] = (<any>source)[key];

        implementAliases(this, source);

        if (this.type == KeyType.EC && this.d && (!this.x || !this.y)) {
            this.setEcPublic();
        }
    }

    /** Compute public point from private EC key */
    setEcPublic() {
        if (this.type != KeyType.EC) throw new Error("EC key type required to compute public point");
        if (!this.private) throw new Error("EC private key required to compute public point");

        switch (this.crv) {
            case CurveType.p256:
            case CurveType.p384:
            case CurveType.p521:
                break;

            default:
                throw new Error("Unsupported elliptic curve");
        }

        // Compute
        const ec = new EC(this.curve!.toLowerCase().replace(/-/g, ''));
        const ecKey = ec.keyFromPrivate(this.privateBits!).getPublic();

        // Install
        this.xBits = new ByteArray(ecKey.getX().toArray());
        this.yBits = new ByteArray(ecKey.getY().toArray());
    }
};

function checkDerVersion(type: string, node: DerNode | undefined, version: number) {
    const derVersion = node
        && node._tag == DerType.UnsignedInt
        && node._bytes
        && node._bytes.length == 1
        && node._bytes[0];

    if (derVersion != version) {
        throw new Error(`${type} key version mismatch`);
    }
}

function getDerObjectID(type: string, node?: DerNode) {
    const id = node
        && node._tag == DerType.ObjectIdentifier
        && node._bytes?.length > 1
        && node._bytes;
    
    if (id) return id;

    throw new Error(`Missing object in ${type} key`);
}

function getDerCurve(type: string, node?: DerNode) {
    const oid = getDerObjectID(type, node);
    const curve = (<any>CurveLookup)[oid.toHex()];
    if (curve)
        return curve;
    throw new Error(`Unsupported ${type} EC curve`);
}

function getDerKey(type: string, node?: DerNode, derType: DerType = DerType.OctetString) {
    const key = node
        && node._tag == derType
        && node._bytes?.length > 1
        && node._bytes;
    
    if (key) return key;

    throw new Error(`Missing ${type} key node`);
}

// These are private members of Key, each implementing a key import field
module Importers {
    // Import SEC1 private key
    export function sec1(this: Key, input: ByteArray) {
        const decoded = DerCodec.decode(input);

        // Version
        const versionNode = decoded?._elements?.[0];
        checkDerVersion("SEC 1", versionNode, 1);

        // Curve
        const curveNode = decoded?._elements?.[2]?._elements?.[0];
        const curve = getDerCurve("SEC 1", curveNode);

        // Key
        const keyNode = decoded?._elements?.[1];
        const key = getDerKey("SEC 1", keyNode);

        this.type = KeyType.EC;
        this.curve = curve;
        this.privateBits = key;
    }

    // Import PKCS8 private key
    export function pkcs8(this: Key, input: ByteArray) {
        const outer = DerCodec.decode(input);

        // Version
        const version = outer?._elements?.[0];
        checkDerVersion("PKCS #8", version, 0);

        // Algorithm
        const algorithmElements = outer?._elements?.[1]?._elements;
        const algorithm = getDerObjectID("PKCS #8", algorithmElements?.[0]);
        if (algorithm?.toHex() != Asn1ObjectID.ecPublicKey) {
            throw new Error("Unsupported PKCS #8 decryption algorithm");
        }

        // Curve
        const curve = getDerCurve("PKCS #8", algorithmElements?.[1]);

        // Private key
        const innerBytes = outer?._elements?.[2]._bytes;
        if (innerBytes == undefined) {
            throw new Error("Invalid PKCS #8 key");
        }
        const inner = DerCodec.decode(innerBytes);
        const key = getDerKey("PKCS #8", inner?._elements?.[1]);

        this.type = KeyType.EC;
        this.curve = curve;
        this.privateBits = key;
    }

    // Import SPKI public key
    export function spki(this: Key, input: ByteArray) {
        const decoded = DerCodec.decode(input);

        const algorithmElements = decoded?._elements?.[0]?._elements;

        // Algorithm
        const algorithm = getDerObjectID("SPKI", algorithmElements?.[0]);
        if (algorithm?.toHex() != Asn1ObjectID.ecPublicKey) {
            throw new Error("Unsupported SPKI decryption algorithm");
        }

        // Curve
        const curve = getDerCurve("SPKI", algorithmElements?.[1]);

        // Key
        let key = getDerKey("SPKI", decoded?._elements?.[1], DerType.BitString);

        this.type = KeyType.EC;
        this.curve = curve;
        this.ecPublic = key;
    }

    // Import public key bytes in SEC1/SPKI format
    export function ecPublic(this: Key, input: ByteArray) {
        if (!(input.length % 2)) {
            throw new Error("Invalid public key encoding");
        }

        switch (input[0]) {
            case 2:
            case 3:
                throw new Error("Unsupported public key compression");
            
            case 4:
                break;

            case 5:
                throw new Error("Illegal public key format specifier");
        }

        const coordinateLength = (input.length - 1) / 2;

        if (!this.curve)
            // Guess curve based on key length
            switch (coordinateLength) {
                case 66:
                    this.curve = CurveType.p521;
                    break;

                case 48:
                    this.curve = CurveType.p384;
                    break;

                case 32:
                    this.curve = CurveType.p256;
                    break;

                default:
                    throw new Error("Cannot infer named curve from key length");
            }

        this.type = KeyType.EC;
        this.xBits = input.slice(1, coordinateLength + 1);
        this.yBits = input.slice(coordinateLength + 1);
    }
};

enum Aliases {
    algorithm = "alg",
    curve = "crv",
    type = "kty",
    operations = "key_ops",
    private = "d",
    extractable = "ext"
};

enum Base64Codecs {
    privateBits = "d",
    xBits = "x",
    yBits = "y"
};

// Implement public interface bits with significant redundancy programmatically
function implementAliases(that: any, source: any) {
    function assign(name: string) {
        const d = Object.getOwnPropertyDescriptor(source, name);
        if (d && d.value !== undefined) that[name] = d.value;
    }

    // We implement the following in reverse-priority order

    // Aliases map a readable name to the cryptic JWK equivalent
    Object.entries(Aliases).forEach(([alias, target]) => {
        Object.defineProperty(that, alias, {
            get: () => that[target],
            set: (value) => that[target] = value
        });
        assign(alias);
    });

    // Codecs allow for binary read/write on base-64 fields
    Object.entries(Base64Codecs).forEach(([alias, target]) => {
        Object.defineProperty(that, alias, {
            get: () => that[target] !== undefined && Base64.decode(that[target]),
            set: (value) => that[target] = value === undefined ? undefined : Base64.encode(value, true)
        });
        assign(alias);
    });

    // Importers translate external formats
    Object.entries(Importers).forEach(([name, importer]) => {
        Object.defineProperty(that, name, {
            set: <(value: any) => void>importer
        });
    });

    // Import invocation after all initializations due to dependencies
    Object.keys(Importers).forEach((name) => assign(name));
}
