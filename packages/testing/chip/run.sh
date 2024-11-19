#!/bin/bash

THISDIR=$(dirname -- "${BASH_SOURCE[0]}")
GIT_ROOT=$(realpath "${THISDIR}/../../..")

docker run \
    -it \
    --rm \
    --network host \
    -v "${GIT_ROOT}:/matter.js" \
    -v /var/run/dbus:/run/dbus \
    --security-opt "apparmor:unconfined" \
    ghcr.io/matter-js/chip \
    "$@"
