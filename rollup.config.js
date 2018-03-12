import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

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


export default [
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/index.mjs',
      format: 'es'
    },
    plugins: pgl()
  },
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs'
    },
    plugins: pgl()
  },
  {
    input: 'lib/index.js',
    output: {
      name: 'MinDom',
      file: 'dist/min-dom.js',
      format: 'umd'
    },
    plugins: pgl()
  },
  {
    input: 'lib/index.js',
    output: {
      name: 'MinDom',
      file: 'dist/min-dom.min.js',
      format: 'umd'
    },
    plugins: pgl([
      uglify()
    ])
  }
];