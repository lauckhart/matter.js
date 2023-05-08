#!/bin/bash

# NPM build of SJCL doesn't include AES-CCM so we must build our own.  Build
# file is saved in git to avoid ungainly build process.

set -e

mkdir -p out
cd out

if [ -d sjcl ]; then
    git -C sjcl pull | (grep -v "Already up to date" || true)
else
    git clone --depth 1 git@github.com:bitwiseshiftleft/sjcl.git
fi

print_lib() {
    echo "/*"
    head -33 sjcl/LICENSE.txt
    echo "*/"
    cat sjcl/core/sjcl.js \
        sjcl/core/aes.js \
        sjcl/core/bitArray.js \
        sjcl/core/ccmArrayBuffer.js \
        sjcl/core/codecArrayBuffer.js \
        | grep -v "use strict"
    echo $1
}
print_lib "export default sjcl;" > ../src/sjcl.js
mkdir -p ../dist/es
cp ../src/sjcl.js ../dist/es/sjcl.js
mkdir -p ../dist/cjs
print_lib "exports.sjcl = sjcl;" > ../dist/cjs/sjcl.js

print_defs() {
    echo "/*"
    curl -s https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/LICENSE
    echo
    echo "*/"
    curl -s https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/sjcl/index.d.ts
}
print_defs > ../src/sjcl.d.ts
