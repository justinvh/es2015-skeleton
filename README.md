This is a dead-simple ES2015 sandbox with enough to get walking.

Should give you:

* es2015
* Unit testing
* Code coverage
* Tree shaking
* code linting
* minifier
* type checking

Uses:

* Babel - For your es2015 stuff.
* Istanbul - For coverage
* Chai - For unit tests
* Rollup - Does all that tree shaking fun-ness
* Mocha - For testing
* Flow - Type checking

You use it sort-of like:

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
