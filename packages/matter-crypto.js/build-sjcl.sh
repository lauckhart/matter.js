#!/bin/bash

# NPM build of SJCL doesn't include AES-CCM so we must build our own.  Build
# file is saved in git to avoid ungainly build process.

set -e

mkdir -p out
cd out

if [ -d sjcl ]; then
    git -C sjcl pull
else
    git clone git@github.com:bitwiseshiftleft/sjcl.git
fi

print_lib() {
    echo "/*"
    head -33 sjcl/LICENSE.txt
    echo "*/"
    cat sjcl/core/sjcl.js sjcl/core/aes.js sjcl/core/bitArray.js sjcl/core/ccm.js
    echo "export { sjcl }"
}
mkdir -p generated
print_lib > generated/sjcl.js

print_defs() {
    echo "/*"
    curl -s https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/LICENSE
    echo
    echo "*/"
    curl -s https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/sjcl/index.d.ts
}
print_defs > generated/sjcl.d.ts
