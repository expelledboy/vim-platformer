set shell := ["bash", "-euo", "pipefail", "-c"]

[private]
default:
	@just --list --unsorted

test:
	npm test

run:
	simple-http-server -p 8000 -i -o
