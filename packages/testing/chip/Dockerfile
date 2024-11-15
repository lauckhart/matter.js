FROM ubuntu:24.04 as matter.js-chip-base

SHELL [ "/bin/bash", "-c" ]

ENV TZ=Etc/UTC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get -qq update
RUN apt-get -qq -y install python3 python-is-python3 libavahi-client3 libglib2.0-0 iproute2


FROM matter.js-chip-base as matter.js-chip-build

ARG TARGETPLATFORM

RUN case "${TARGETPLATFORM}" in \
    "linux/amd64"|"linux/arm64") echo "Targeting ${TARGET_PLATFORM}";; \
    "") echo "TARGETPLATFORM not set, please build with buildx";; \
    *) echo "Unsupported platform ${TARGETPLATFORM}";; \
    esac

RUN apt-get -qq update
RUN apt-get -qq -y install git gcc g++ pkg-config libssl-dev libdbus-1-dev libglib2.0-dev libavahi-client-dev \
    ninja-build python3-venv python3-dev unzip libgirepository1.0-dev libcairo2-dev libreadline-dev python3-pip

RUN git clone --depth=1 https://github.com/project-chip/connectedhomeip.git

WORKDIR /connectedhomeip
RUN ./scripts/checkout_submodules.py --shallow --platform linux


FROM matter.js-chip-build as matter.js-chip-bins

WORKDIR /connectedhomeip

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

RUN scripts/build_python.sh

RUN pip install --break-system-packages -r src/python_testing/requirements.txt

RUN pip install --break-system-packages -r scripts/tests/requirements.txt

RUN find out -name \*.whl | xargs pip install --break-system-packages --upgrade


FROM matter.js-chip-base as matter.js-chip

COPY --from=matter.js-chip-bins /usr/local/lib /usr/local/lib
COPY --from=matter.js-chip-bins /connectedhomeip/out/chip-tool /bin/chip-tool
COPY --from=matter.js-chip-bins /connectedhomeip/src/python_testing /python_testing
COPY --from=matter.js-chip-bins /connectedhomeip/scripts/tests/chipyaml /chipyaml
