This is a dead-simple ES2015 sandbox with enough to get walking.

Should give you:

* Unit testing
* Code coverage
* ES2015
* Tree Shaking
* lint
* uglify

Uses:

* Babel - For your es2015 stuff.
* Istanbul - For coverage
* Chai - For unit tests
* Rollup - Does all that tree shaking fun-ness
* Mocha - For testing

You use it sort-of like:

* `npm install`: To get your dependencies
* `npm run-script lint`: Eslint
* `npm run-script build`: Pretty much a thin wrapper to `rollup -c`
* `npm test`: Pretty much a wrapper to `mocha` and `istanbul`

Some notes:

* `.babelrc` uses environments to exploit rollup plugins

And then add whatever else you need. Seems reasonable to start from as a project.
