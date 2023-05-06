export { Crypto } from "@project-chip/matter.js/crypto";
import { CryptoJS } from "./CryptoJS";
import { CryptoNode } from "./CryptoNode";

let crypto: Crypto;
if (process?.versions?.node) {
    crypto = new CryptoNode();
} else {
    console.warn("USING JAVASCRIPT CRYPTO.  CONSIDER NATIVE IMPLEMENTATION.");
    crypto = new CryptoJS();
}

Crypto.get = () => crypto;