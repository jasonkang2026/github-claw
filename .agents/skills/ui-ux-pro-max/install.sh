#!/usr/bin/env bash
# ui-ux-pro-max v2.0.0 — install.sh
# Ensures framer-motion is present (already in package.json; this is idempotent).
set -euo pipefail

echo "[ui-ux-pro-max v2] Checking framer-motion…"
if ! node -e "require('framer-motion')" 2>/dev/null; then
  echo "[ui-ux-pro-max v2] Installing framer-motion…"
  npm install --save framer-motion --legacy-peer-deps
else
  echo "[ui-ux-pro-max v2] framer-motion already installed."
fi
echo "[ui-ux-pro-max v2] Ready."
