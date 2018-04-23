import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';

import pkg from './package.json';

function pgl(plugins=[]) {
  return [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [ 'env', { modules: false } ]
      ]
    }),
    ...plugins
  ];
}

const umdDist = 'dist/min-dom.js';

export default [
  // browser-friendly UMD build
  {
    input: 'lib/index.js',
    output: {
      name: 'MinDom',
      file: umdDist,
      format: 'umd'
    },
    plugins: pgl()
  },
  {
    input: 'lib/index.js',
    output: {
      name: 'MinDom',
      file: umdDist.replace(/\.js$/, '.min.js'),
      format: 'umd'
    },
    plugins: pgl([
      uglify(),
      copy({ 'lib/index.d.ts': pkg.types })
    ])
  },
  {
    input: 'lib/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: pgl()
  }
];