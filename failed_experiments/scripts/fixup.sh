#!/bin/bash
function setup() {
  set -ex
  # -e  exit if wonky
  # -x show stack trace if wonky

  local NPM_ROOT
  NPM_ROOT="$(npm root)"
  local ROOT="${NPM_ROOT%/*}"

  mkdir -p "$ROOT/dist/$1" && touch "$ROOT/dist/$1/package.json"
  ROOT="$ROOT/dist/$1/package.json"
cat > "$ROOT" <<-EOF
  {
      "module": "$2"
  }
EOF

}
setup "cjs" "commonjs";
setup "mjs" "module"



