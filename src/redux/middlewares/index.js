const requireModule = require.context('.', false, /\.js$/)

export default requireModule.keys().reduce((modules, fileName) => {
  if (fileName === './index.js') return modules

  const importedModule = requireModule(fileName)

  return {
    ...modules,
    [fileName.replace(/(\.\/|\.js)/g, '')]: importedModule.default || importedModule,
  }
}, {})
