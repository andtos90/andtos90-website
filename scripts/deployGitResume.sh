#!/bin/bash
set -ev
cd git-resume
npm install
npm run build
mv build ../__sapper__/export/git-resume