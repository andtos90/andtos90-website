#!/bin/bash
set -ev
cd git-resume
yarn build
yarn install
mv build ../__sapper__/export/git-resume