# @license
# Copyright 2022-2024 Matter.js Authors
# SPDX-License-Identifier: Apache-2.0

# Builds an image capable of running chip-tool and CHIP tests.
#
# Intermediate stages don't focus on optimization but the final image is minimal (relatively speaking).


# STAGE 1 - common base image
FROM ubuntu:24.04 as matter.js-chip-base

SHELL [ "/bin/bash", "-c" ]

# Quality of life
RUN echo 'PS1="\[\033[01;32m\]matter.js-chip\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m# "' >> /root/.bashrc

# Set timezone to UTC
ENV TZ=Etc/UTC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install a few packages required by final image.  Most are also required during build
RUN --mount=type=cache,target=/var/cache/apt \
    --mount=type=cache,target=/var/lib/apt \
    apt-get -qq update && \
    apt-get -qq -y install python3 python-is-python3 libavahi-client3 libglib2.0-0 iproute2 less


# STAGE 2 - CHIP source code and build tooling
FROM matter.js-chip-base as matter.js-chip-build

ARG TARGETPLATFORM

# Validate platform (must be amd64 or arm64)
RUN case "${TARGETPLATFORM}" in \
    "linux/amd64"|"linux/arm64") echo "Targeting ${TARGET_PLATFORM}";; \
    "") echo "TARGETPLATFORM not set, please build with buildx";; \
    *) echo "Unsupported platform ${TARGETPLATFORM}";; \
    esac

# Install system packages required for build
RUN --mount=type=cache,target=/var/cache/apt \
    --mount=type=cache,target=/var/lib/apt \
    apt-get -qq update && \
    apt-get -qq -y install git gcc g++ pkg-config libssl-dev libdbus-1-dev libglib2.0-dev libavahi-client-dev \
        ninja-build python3-venv python3-dev unzip libgirepository1.0-dev libcairo2-dev libreadline-dev python3-pip

# Pull CHIP source code
RUN git clone --depth=1 https://github.com/project-chip/connectedhomeip.git
WORKDIR /connectedhomeip
RUN ./scripts/checkout_submodules.py --shallow --platform linux


# STAGE 3 - built chip-tool and installed python packages
FROM matter.js-chip-build as matter.js-chip-bins

WORKDIR /connectedhomeip

# Reduce build size, saves about 1/3 of final image
RUN sed -i "s/is_debug = true/is_debug = false/" build/config/BUILDCONFIG.gn && \
    sed -i "s/-O2/-Os/" build/config/compiler/BUILD.gn && \
    sed -i "s/strip_symbols = false/strip_symbols = true/" build/config/compiler/compiler.gni

# Build chip-tool
RUN case ${TARGETPLATFORM} in \
    "linux/amd64") \
        source scripts/activate.sh && \
        scripts/build/build_examples.py --target linux-x64-chip-tool-ipv6only-platform-mdns build \
    ;; \
    "linux/arm64") \
        source scripts/activate.sh && \
        scripts/build/build_examples.py --target linux-arm64-chip-tool-ipv6only-platform-mdns /bins build \
    ;; \
    esac
RUN cp out/*/chip-tool out

# Build python wheels
RUN scripts/build_python.sh

# Install external python dependencies
RUN pip install --break-system-packages -r src/python_testing/requirements.txt
RUN pip install --break-system-packages -r scripts/tests/requirements.txt

# Install CHIP wheels globally
RUN find out -name \*.whl | xargs pip install --break-system-packages --upgrade


# STAGE 4 - extract CHIP subset required for runtime
FROM matter.js-chip-base as matter.js-chip

LABEL org.opencontainers.image.title="matter.js CHIP tooling build"
LABEL org.opencontainers.image.url=https://github.com/matter-js/chip
LABEL org.opencontainers.image.source=https://github.com/project-chip/matter.js/tree/main/packages/testing/chip

RUN rm -rf bin.usr-is-merged boot home media mnt opt sbin.usr-is-merged srv 

# Installed python packages
COPY --from=matter.js-chip-bins /usr/lib/python3/dist-packages /usr/lib/python3/dist-packages
COPY --from=matter.js-chip-bins /usr/local/lib /usr/local/lib

# Other packages CHIP has scattered randomly and adds to path in relative_importer.py
WORKDIR /usr/local/lib/python3.12/dist-packages
COPY --from=matter.js-chip-bins /connectedhomeip/scripts/tests/chiptest chiptest
COPY --from=matter.js-chip-bins /connectedhomeip/scripts/py_matter_idl/matter_idl matter_idl
COPY --from=matter.js-chip-bins /connectedhomeip/scripts/py_matter_yamltests/matter_yamltests matter_yamltests
COPY --from=matter.js-chip-bins /connectedhomeip/examples/chip-tool/py_matter_chip_tool_adapter/matter_chip_tool_adapter matter_chip_tool_adapter
COPY --from=matter.js-chip-bins /connectedhomeip/examples/placeholder/py_matter_placeholder_adapter/matter_placeholder_adapter matter_placeholder_adapter
COPY --from=matter.js-chip-bins /connectedhomeip/src/controller/python/py_matter_yamltest_repl_adapter/matter_yamltest_repl_adapter matter_yamltest_repl_adapter
WORKDIR /

# chip-tool binary
COPY --from=matter.js-chip-bins /connectedhomeip/out/chip-tool /bin/chip-tool

# YAML test runner
COPY --from=matter.js-chip-bins /connectedhomeip/scripts/tests /scripts/tests

# Data model, test runner uses to decode element names
COPY --from=matter.js-chip-bins /connectedhomeip/src/app/zap-templates/zcl/data-model/chip \
    connectedhomeip/src/app/zap-templates/zcl/data-model/chip

# Tests
COPY --from=matter.js-chip-bins /connectedhomeip/src/python_testing /src/python_testing
COPY --from=matter.js-chip-bins /connectedhomeip/src/app/tests/suites /src/app/tests/suites
