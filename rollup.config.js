import { rollup } from 'rollup';

import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';

export default {
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify({}, minify),
    nodeResolve({
      jsnext: true,  // Default: false
      main: true,  // Default: true
      skip: [],  // Default: []
      browser: true,  // Default: false
      extensions: [ '.js', '.json' ],  // Default: ['.js']
      preferBuiltins: false  // Default: true
    }),
    commonjs()
  ],
  sourceMap: true,
  entry: 'src/index.js',
  dest: 'dist/myproject.js',
  moduleName: 'MyProject',
  format: 'umd'
};
