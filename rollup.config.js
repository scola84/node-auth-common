import buble from 'rollup-plugin-buble';

export default {
  dest: './dist/auth-common.js',
  entry: 'index.js',
  format: 'cjs',
  external: [
    '@scola/validator'
  ],
  plugins: [
    buble()
  ]
};
