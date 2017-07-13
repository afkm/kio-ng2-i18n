#!/usr/bin/env bash

SCRIPT_PATH="$(dirname "${0}")"
SCRIPT_FILE="$(basename "${0}")"
_ROOT="$(cd "$(dirname "${0}")/.."; pwd)"


NGC_BIN="${_ROOT}/node_modules/.bin/ngc"

SRC_ROOT="${_ROOT}/src"
BUILD_ROOT="${_ROOT}/build"
DEPLOY_ROOT="${_ROOT}/release"


function build() {
  cd "${_ROOT}"
  rm -rf ./build || true
  scp -r ./src ./build
  "${NGC_BIN}" -p tsconfig-ngc.json  
}

function list_ts () {
  cd "${1}"
  find . -type file | grep .ts$ | grep -v .d.ts$ 
}

function clean_build() {
  printf 'clean up "%s"\n' "${BUILD_ROOT}"
  cd "${BUILD_ROOT}"
  for ts_file in `list_ts "${BUILD_ROOT}"`; do
    #printf '%s\n' "${ts_file}"
    rm "${ts_file}"
  done
}


function deploy () {
  if [[ ! -d "${BUILD_ROOT}" ]]; then
    printf '%s\n' "No build to deploy."
    exit 1
  fi

  rm -rf "${DEPLOY_ROOT}"
  mv "${BUILD_ROOT}" "${DEPLOY_ROOT}"
}


case ${1} in
  "build" )
    build && deploy
    ;;

  "clean" )
  clean_build
    ;;

  "deploy" )
  deploy
    ;;

  "list" )
  list_ts "${BUILD_ROOT}"
    ;;
esac
