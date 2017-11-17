export FORCE_COLOR = true

.PHONY: precommit commitmsg ci emdaer install lint lint-staged publish commitlint commitlint-ci

precommit: lint-staged emdaer
commitmsg: commitlint

ci: commitlint-ci lint

emdaer:
	./node_modules/.bin/emdaer
	git add *.md
	git add .emdaer/.offline
install:
	yarn
lint:
	./node_modules/.bin/eslint .
lint-staged:
	./node_modules/.bin/lint-staged
commitlint:
	./node_modules/.bin/commitlint -e ${GIT_PARAMS}
commitlint-ci:
	./node_modules/.bin/commitlint --from="${TRAVIS_BRANCH}" --to="${TRAVIS_COMMIT}"
	./node_modules/.bin/commitlint --from=${TRAVIS_COMMIT}
