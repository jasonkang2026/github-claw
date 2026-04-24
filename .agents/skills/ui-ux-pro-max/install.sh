#!/usr/bin/env bash
# ui-ux-pro-max — install.sh
# Installs the npm packages required by this skill into the current project.
set -euo pipefail

echo "[ui-ux-pro-max] Installing peer packages…"
npm install --save framer-motion lucide-react --legacy-peer-deps
echo "[ui-ux-pro-max] Done."
