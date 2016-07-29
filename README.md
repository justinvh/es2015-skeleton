This is a dead-simple ES2015 sandbox with enough to get walking.
General philosophy of this repository is that the usage of a package
must be 1-to-1 with a concept required.

Concepts:

* es2015 (Babel)
* Unit testing (Mocha + Chai)
* Code coverage (Istanbul)
* Tree shaking (Rollup)
* code linting (Eslint)
* type checking (Flow)
* uglifier (Uglify)
* build system (npm)

Usage:

* `npm install`: To get your dependencies
* `npm run-script lint`: Eslint + Flow
* `npm run-script eslint`: Eslint only
* `npm run-script flow`: Flow only
* `npm run-script build`: Pretty much a thin wrapper to `rollup -c`
* `npm run-script build-dev`: Includes flow checks in the build
* `npm test`: Pretty much a wrapper to `mocha` and `istanbul`

Some notes:

* `.babelrc` uses environments to exploit rollup plugins

And then add whatever else you need. Seems reasonable to start from as a project.
