#!/usr/bin/env sh

set -e
npm run docs:build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:st-yandex-maps/st-yandex-maps.github.io.git master

cd -