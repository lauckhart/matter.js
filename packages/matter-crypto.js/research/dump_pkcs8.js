#!/bin/env node
import * as fs from "fs";

const bin = fs.readFileSync("/dev/stdin");
const key = await crypto.subtle.importKey("pkcs8", bin, { name: "ECDSA", namedCurve: "P-256" }, true, []);
const jwk = await crypto.subtle.exportKey("jwk", key);
console.log(jwk);
