#!/bin/bash

docker run \
    -it \
    --rm \
    --network host \
    -v "$(dirname -- "${BASH_SOURCE[0]}")/../../..:/matter.js" \
    -v /run/dbus:/run/dbus \
    ghcr.io/matter-js/chip \
    "$@"
