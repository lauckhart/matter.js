#!/bin/bash

docker buildx build . \
    -t ghcr.io/matter-js/chip \
    --label org.opencontainers.image.revision=$(git rev-parse HEAD)
    $*
