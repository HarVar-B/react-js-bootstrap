import { all, takeLatest }               from "redux-saga/effects";
import { constants as sessionConstants } from "./creator";
import keycloak                          from "../../../services/keycloak";


function* handleSessionInit({ payload = {} }) {
  const { isFirstRendering = false, location } = payload;
  if (isFirstRendering) {
    console.log(location);
  }
  return yield payload;
}

function* handleUserLogout({ payload = {} }) {
  console.log("handleUserLogout invoked");
  localStorage.clear();
  console.log("Cleared local storage");
  document.cookie = `authToken=; expires=${new Date()};  path=/`;
  console.log("Cleared cookie");
  yield keycloak.logout();
  console.log("Logged out from key cloak");
  return yield true;
}

export default function* sagas() {
  yield all([
    takeLatest("@@router/LOCATION_CHANGE", handleSessionInit),

    takeLatest(sessionConstants.USER_LOGOUT, handleUserLogout)
  ]);
}
