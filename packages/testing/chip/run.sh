#!/bin/bash

THISDIR=$(dirname -- "${BASH_SOURCE[0]}")
GIT_ROOT=$(realpath "${THISDIR}/../../..")

docker run \
    -it \
    --rm \
    --network host \
    -v "${GIT_ROOT}:/matter.js" \
    -v /run/dbus:/run/dbus \
    ghcr.io/matter-js/chip \
    "$@"
