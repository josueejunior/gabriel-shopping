#!/bin/bash
set -e
ROOT=/mnt/g/gabriel-shopping
WEB=$ROOT/web

# Remove repositório na raiz (mantém só web no GitHub)
rm -rf "$ROOT/.git"

cd "$WEB"
git init
git add .
git commit -m "Gabriel Shopping — site Next.js"
git branch -M main

if git remote get-url origin &>/dev/null; then
  git remote set-url origin git@github.com:josueejunior/gabriel-shopping.git
else
  git remote add origin git@github.com:josueejunior/gabriel-shopping.git
fi

# Substitui o histórico anterior (repo tinha arquivos fora de web/)
git push -u origin main --force
