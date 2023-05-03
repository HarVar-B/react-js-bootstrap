import { all, fork } from 'redux-saga/effects'

const requireModule = require.context('.', true, /\.js$/)

export default function* rootSagas() {
  yield all(
    requireModule.keys().reduce((modules, folderName) => {
      if (folderName === './sagas.js' || !folderName.includes('/saga.js')) {
        return modules
      }

      const importedModule = requireModule(folderName)

      return [...modules, fork(importedModule.default || importedModule)]
    }, []),
  )
}
