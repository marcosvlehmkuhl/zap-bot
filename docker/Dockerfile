FROM node:10
RUN apt-get update -y               \
    && apt-get install -y           \
    curl                            \
    git                             \
    gzip                            \
    htop                            \
    nano                            \
    netcat                          \
    rsync                           \
    sudo                            \
    ssh                             \
    tig                             \
    unzip                           \
    vim                             \
    wget                            \
    zip                             \
    --no-install-recommends         \
    && apt-get clean                \
    && rm -rf /var/lib/apt/lists/*  \
    && rm -rf /tmp/*                \
    && rm -rf /var/tmp/*

USER node
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
RUN chown node:node /${HOME}/.bashrc
RUN echo "export NVM_DIR=$HOME/.nvm" >> ${HOME}/.bashrc

WORKDIR /home/node/app

CMD ["/bin/bash"]