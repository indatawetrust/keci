import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

module.exports = {
  input: 'index.js',
  output: {
    format: 'umd',
    file: 'bundle.js'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}
