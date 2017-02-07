import babel from 'rollup-plugin-babel'
const info = require('./package.json');

const config = {
  entry: 'src/index.js',
  plugins: [
    babel({
      babelrc: false,
      presets: [
        ['es2015', { modules: false }]
      ],
    })
  ],
  targets: [{
    dest: info.main,
    format: 'umd',
    moduleName: 'diggs'
  }, {
    dest: info.module,
    format: 'es'
  }]
}

export default config
