#!/bin/bash
set -e
cd /mnt/g/gabriel-shopping/web
git add -A
git status --short
git commit -m "Melhora layout mobile, footer e cards de produto"
git push origin main
