#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cp "$ROOT_DIR/roadmap-data.json" "$ROOT_DIR/visual-roadmap/roadmap-data.json"
echo "Synced roadmap-data.json -> visual-roadmap/roadmap-data.json"
