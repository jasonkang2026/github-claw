#!/usr/bin/env bash
# nextjs-deploy — install.sh
# No extra packages needed; validates that the required workflow file exists.
set -euo pipefail

WORKFLOW=".github/workflows/deploy.yml"
if [[ ! -f "$WORKFLOW" ]]; then
  echo "[nextjs-deploy] WARNING: $WORKFLOW not found."
  echo "[nextjs-deploy] Copy .agents/skills/nextjs-deploy/deploy.yml.template to $WORKFLOW"
  exit 1
fi
echo "[nextjs-deploy] $WORKFLOW found — ready to deploy."
