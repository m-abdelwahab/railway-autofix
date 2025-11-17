# Use Bun runtime as the base image
ARG BUN_VERSION=1.3.2
FROM oven/bun:${BUN_VERSION}-slim AS base

WORKDIR /app

ENV NODE_ENV="production"
ENV DEBIAN_FRONTEND=noninteractive

# Install essential system tools and utilities
# - curl, wget: for downloading files and making HTTP requests
# - jq: for JSON parsing in scripts
# - bash: enhanced shell for scripting
# - git: version control system
# - ca-certificates, gnupg, lsb-release: required for adding package repositories
# - unzip: for extracting archives
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
# - Add GitHub CLI repository GPG key
# - Add GitHub CLI repository to apt sources
# - Install gh package
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
    && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
    && apt-get update \
    && apt-get install -y gh \
    && rm -rf /var/lib/apt/lists/*

# Install OpenCode CLI globally using Bun
# This makes the 'opencode' command available in PATH
RUN bun add -g opencode-ai

# Set default git configuration
# These can be overridden at runtime via environment variables
RUN git config --global user.email "opencode@agent.local" && \
    git config --global user.name "OpenCode Agent"

# Disable OpenCode auto-update to maintain consistent behavior in containerized environment
ENV OPENCODE_DISABLE_AUTOUPDATE=true

# Build stage: install dependencies and build the application
FROM base AS build

# Install build tools required for native dependencies
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential pkg-config python-is-python3 \
    && rm -rf /var/lib/apt/lists/*

# Copy dependency files and install packages
COPY bun.lock package.json ./
RUN bun install --ci

# Copy application code
COPY . .

# Final stage: create the production image
FROM base

# Copy built application from build stage
COPY --from=build /app /app

# Expose ports
EXPOSE 4096

# Configure runtime environment and start the application
# This script handles:
# 1. GitHub CLI authentication if GITHUB_TOKEN is provided
# 2. Git user configuration if GIT_USER_NAME and GIT_USER_EMAIL are provided
# 3. Verification of GitHub authentication
# 4. Starting the Bun application
CMD ["/bin/bash", "-c", "\
    if [ -n \"$GITHUB_TOKEN\" ]; then \
        echo 'Configuring GitHub CLI authentication...'; \
        echo \"$GITHUB_TOKEN\" | gh auth login --with-token; \
        gh auth setup-git; \
        echo '✓ GitHub CLI authenticated and configured'; \
        echo '✓ Git configured to use GitHub CLI for authentication'; \
    fi && \
    if [ -n \"$GIT_USER_NAME\" ]; then \
        git config --global user.name \"$GIT_USER_NAME\"; \
        echo \"✓ Git user name set to: $GIT_USER_NAME\"; \
    fi && \
    if [ -n \"$GIT_USER_EMAIL\" ]; then \
        git config --global user.email \"$GIT_USER_EMAIL\"; \
        echo \"✓ Git user email set to: $GIT_USER_EMAIL\"; \
    fi && \
    if [ -n \"$GITHUB_TOKEN\" ]; then \
        gh auth status && echo '✓ GitHub authentication verified'; \
    fi && \
    echo '' && \
    echo 'OpenCode agent starting...' && \
    echo '' && \
    exec bun index.ts \
"]
