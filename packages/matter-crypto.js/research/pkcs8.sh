#!/bin/bash

binary() {
    cat example.pkcs8.hex | xxd -r -p
}

echo === PKCS8 outer
binary | openssl asn1parse -inform der -i

echo
echo === PKCS8 inner
binary | openssl asn1parse -inform der -i -offset 29

echo
echo === PKCS8 -\> JWK
binary | ./dump_jwk.js pkcs8
