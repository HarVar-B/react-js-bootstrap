module.exports = function override(config, env) {
  //do stuff with the webpack config...
  // config.module.rules.push({
  //   test: /\.mjs$/,
  //   include: /node_modules/,
  //   type: 'javascript/auto',
  // })
  // config.module.rules.push({
  //   test: /\.tsx$/,
  //   use: [
  //     {
  //       loader: 'ts-loader',
  //       options: {
  //         compilerOptions: { noEmit: false, downlevelIteration: true },
  //       },
  //     },
  //   ],
  //   exclude: /node_modules/,
  // })
  return config
}
