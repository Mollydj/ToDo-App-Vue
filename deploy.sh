#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f mollyDeangelisjimenez@gmail.com:Mollydj/ToDo-App-Vue.git master:gh-pages

cd -ssh-keygen -t rsa -b 4096 -C "