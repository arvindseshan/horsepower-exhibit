#!/usr/bin/env bash
# Copy Next static export (web/out) into the al-folio Jekyll repo.
# Usage (from web/): npm run export:jekyll
# Override destination: JEKYLL_SITE=/path/to/arvindseshan.github.io
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
JEKYLL_DEFAULT="$REPO_ROOT/../GitHub/arvindseshan.github.io"
JEKYLL="${JEKYLL_SITE:-$JEKYLL_DEFAULT}"
OUT="$REPO_ROOT/web/out"
DEST="$JEKYLL/projects/horsepower"

if [[ ! -d "$OUT" ]]; then
  echo "Missing $OUT — from web/ run: npm run export:jekyll (or npm run build:jekyll)" >&2
  exit 1
fi
if [[ ! -d "$JEKYLL" ]]; then
  echo "Jekyll repo not found at $JEKYLL — set JEKYLL_SITE or adjust JEKYLL_DEFAULT in this script." >&2
  exit 1
fi

rm -rf "$DEST"
mkdir -p "$DEST"
cp -a "$OUT"/. "$DEST/"
echo "Synced exhibit to $DEST"
