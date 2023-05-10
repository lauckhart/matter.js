#!/bin/bash

binary() {
    cat example.sec1.hex | xxd -r -p
}

echo === SEC1
binary | openssl asn1parse -inform der -i
