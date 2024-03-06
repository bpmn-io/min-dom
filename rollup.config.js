import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json';

const pkgExport = pkg.exports['.'];

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
      { file: pkgExport.import, format: 'es', sourcemap: true }
    ],
    plugins: pgl()
  }
];