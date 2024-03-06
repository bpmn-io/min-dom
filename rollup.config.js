import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

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

export default [
  {
    input: 'lib/index.js',
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true }
    ],
    plugins: pgl()
  }
];