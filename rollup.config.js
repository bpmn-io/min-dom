import { terser } from 'rollup-plugin-terser';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json';

function pgl(plugins = []) {
  return [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
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
      terser()
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