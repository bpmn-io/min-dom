import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json';

const pkgExport = pkg.exports['.'];

function pgl(plugins = []) {
  return [
    nodeResolve({
      resolveOnly: [ 'component-event' ]
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