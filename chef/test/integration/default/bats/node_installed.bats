#!/usr/bin/env bats

@test "node binary is found in PATH" {
  run which node
  [ "$status" -eq 0 ]
}
