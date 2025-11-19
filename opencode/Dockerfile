ARG BUN_VERSION=1.3.2
FROM oven/bun:${BUN_VERSION}-slim AS base

WORKDIR /app

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    curl \
    wget \
    jq \
    bash \
    git \
    ca-certificates \
    gnupg \
    lsb-release \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Install GitHub CLI (gh)
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
    && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
    && apt-get update \
    && apt-get install -y gh \
    && rm -rf /var/lib/apt/lists/*

RUN bun add -g opencode-ai

# Set default git configuration
# These can be overridden at runtime via environment variables
RUN git config --global user.email "opencode@agent.local" && \
    git config --global user.name "OpenCode Agent"

EXPOSE 4096

# Configure runtime environment and start the application
# This script handles:
# 1. GitHub CLI authentication if GITHUB_TOKEN is provided
# 2. Git user configuration if GIT_USER_NAME and GIT_USER_EMAIL are provided
# 3. Verification of GitHub authentication
# 4. Starting the OpenCode server
CMD ["/bin/bash", "-c", "\
    if [ -n \"$GITHUB_TOKEN\" ]; then \
        echo 'Configuring GitHub CLI authentication...'; \
        TEMP_TOKEN=\"$GITHUB_TOKEN\"; \
        unset GITHUB_TOKEN; \
        echo \"$TEMP_TOKEN\" | gh auth login --with-token; \
        gh auth setup-git; \
        echo '✓ GitHub CLI authenticated and configured'; \
        echo '✓ Git configured to use GitHub CLI for authentication'; \
        gh auth status && echo '✓ GitHub authentication verified'; \
    fi && \
    if [ -n \"$GIT_USER_NAME\" ]; then \
        git config --global user.name \"$GIT_USER_NAME\"; \
        echo \"✓ Git user name set to: $GIT_USER_NAME\"; \
    fi && \
    if [ -n \"$GIT_USER_EMAIL\" ]; then \
        git config --global user.email \"$GIT_USER_EMAIL\"; \
        echo \"✓ Git user email set to: $GIT_USER_EMAIL\"; \
    fi && \
    echo '' && \
    echo 'OpenCode agent starting...' && \
    echo '' && \
    exec opencode serve --port 4096 --hostname 0.0.0.0 \
"]
