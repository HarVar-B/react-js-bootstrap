import { connectRouter }                 from "connected-react-router";
import { combineReducers }               from "redux";
import { constants as sessionConstants } from "./session/creator";

const requireModule = require.context(".", true, /\.js$/);

const autoImportedReducers = requireModule.keys().reduce((modules, folderName) => {
  if (folderName === "./reducers.js" || !folderName.includes("/reducer.js")) {
    return modules;
  }

  const importedModule = requireModule(folderName);
  const [moduleName] = folderName.replace(/(\.\/|\.js)/g, "").split("/");

  return {
    ...modules,
    [moduleName]: importedModule.default || importedModule
  };
}, {});

const createRootReducers = (history) => (state, action) => {
  const stateClone = { ...state };
  if (action.type === sessionConstants.USER_LOGOUT) {
    return { router: stateClone.router };
  }
  return combineReducers({
    router: connectRouter(history),
    ...autoImportedReducers
  })(stateClone, action);
};

export default createRootReducers;
