#!/bin/bash

binary() {
    cat example.spki.hex | xxd -r -p
}

echo === SEC1
binary | openssl asn1parse -inform der -i

echo
echo === PKCS8 -\> JWK
binary | ./dump_jwk.js spki
