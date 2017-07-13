#!/usr/bin/env bash

SCRIPT_PATH="$(dirname "${0}")"
SCRIPT_FILE="$(basename "${0}")"
PROJECT_ROOT="$(cd "$(dirname "${0}")/.."; pwd)"

TEST_APP_ROOT="${PROJECT_ROOT}/test-app"

function sync_module () {
  rsync -avzh \
    --exclude 'node_modules*' \
    --exclude 'test-app*' \
    --exclude 'scripts*' \
    --exclude 'src*' \
    --exclude 'aot*' \
    --exclude 'tsconfig*.json' \
    "${PROJECT_ROOT}" "${TEST_APP_ROOT}/node_modules/."
}

sync_module