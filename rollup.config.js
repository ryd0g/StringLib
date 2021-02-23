import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  ],
  output: {
    file: 'umd/strings.js',
    format: 'umd',
    name: 'string-lib',
  },
};
