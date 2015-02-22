build:
	rm -rf src.zip
	zip -r src.zip src

test: node_modules
	@./node_modules/.bin/mocha -R nyan

node_modules:
	npm install

.PHONY: build test
