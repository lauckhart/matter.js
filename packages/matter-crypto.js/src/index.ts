import { Crypto } from "@project-chip/matter.js/crypto";
import { CryptoSubtle } from "./implementations/CryptoSubtle.js";
import { CryptoNode } from "./implementations/CryptoNode.js";

let matterCrypto: Crypto;
if (typeof process !== "undefined" && process?.versions?.node) {
    matterCrypto = new CryptoNode();
} else if (typeof crypto !== "undefined" && crypto.subtle) {
    matterCrypto = new CryptoSubtle();
} else {
    throw new Error("matter-crypto.js does not support this environment");
}
Crypto.get = () => matterCrypto;

export { Crypto, CryptoSubtle, CryptoNode };
