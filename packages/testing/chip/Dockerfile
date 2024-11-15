# Builds an image capable of running CHIP tests.
#
# Intermediate stages don't focus on optimization but the final image is minimal (relatively speaking).

# STAGE 1 - common base image
FROM ubuntu:24.04 as matter.js-chip-base

SHELL [ "/bin/bash", "-c" ]

# Quality of life
RUN echo 'PS1="\[\033[01;32m\]matter.js-chip\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m# "' >> /root/.bashrc
RUN rm -rf bin.usr-is-merged boot home media mnt opt sbin.usr-is-merged srv 

# Set timezone to UTC
ENV TZ=Etc/UTC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install a few packages required by final image.  Most are also required during build
RUN apt-get -qq update
RUN apt-get -qq -y install python3 python-is-python3 libavahi-client3 libglib2.0-0 iproute2


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
RUN apt-get -qq update
RUN apt-get -qq -y install git gcc g++ pkg-config libssl-dev libdbus-1-dev libglib2.0-dev libavahi-client-dev \
    ninja-build python3-venv python3-dev unzip libgirepository1.0-dev libcairo2-dev libreadline-dev python3-pip

# Pull CHIP source code
RUN git clone --depth=1 https://github.com/project-chip/connectedhomeip.git
WORKDIR /connectedhomeip
RUN ./scripts/checkout_submodules.py --shallow --platform linux


# STAGE 3 - built chip-tool and installed python packages
FROM matter.js-chip-build as matter.js-chip-bins

WORKDIR /connectedhomeip

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

# Installed python packages
COPY --from=matter.js-chip-bins /usr/lib/python3/dist-packages /usr/lib/python3/dist-packages
COPY --from=matter.js-chip-bins /usr/local/lib /usr/local/lib

# chip-tool binary
COPY --from=matter.js-chip-bins /connectedhomeip/out/chip-tool /bin/chip-tool

# YAML test runner
COPY --from=matter.js-chip-bins /connectedhomeip/scripts/tests/chipyaml /chipyaml

# Tests
COPY --from=matter.js-chip-bins /connectedhomeip/src/python_testing /tests/python
COPY --from=matter.js-chip-bins /connectedhomeip/src/app/tests/suites/certification /tests/yaml
