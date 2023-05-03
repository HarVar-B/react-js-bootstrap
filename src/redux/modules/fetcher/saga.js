import axios                         from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { environment }               from "../../../environments/";
import { getCookie }                 from "../../../utils";
import { userLogout }                from "../session/creator";

import { constants as fetcherConstants } from "./creator";
import store                             from "../../store";

export const getAuthToken = () => {
  const token = getCookie("authToken");
  if (!token) return undefined;
  return token;
};
export const handleError = (error) => {
  if (error.response && error.response.status === 401) {
    return store.dispatch(
      userLogout({
        redirect: {
          pathname: "/"
        }
      })
    );
  }
  return false;
};

const DEFAULT_CONFIG = {
  baseURL: environment.API_BASE_URL
};
const AXIOS_INSTANCE = axios.create(DEFAULT_CONFIG);

AXIOS_INSTANCE.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

AXIOS_INSTANCE.interceptors.response.use(
  ({ data, status, headers }) => ({ data, status, headers }),
  (error) => Promise.reject(error)
);

function* handleAPICall({ payload = {}, meta = {}, shouldHandleError = true }) {
  const { label = {}, fetcherParams, headers, onSuccess, onFailure } = payload;
  const { tokenize } = meta;
  const authToken = getAuthToken();

  try {
    yield put({ type: label.REQUEST });

    const response = yield call(AXIOS_INSTANCE.request, {
      ...fetcherParams,
      headers: {
        ...headers,
        ...(tokenize &&
          authToken && {
            Authorization: `Bearer ${authToken}`
          })
      }
    });
    if (onSuccess) yield call(onSuccess, response);
    yield put({
      type: label.SUCCESS,
      response: response.data,
      reqPayload: payload
    });
  } catch (error) {
    if (onFailure) yield call(onFailure, error);
    yield put({ type: label.FAILURE, error: error, reqPayload: payload });
    if (shouldHandleError) handleError(error);
  } finally {
    yield put({ type: label.FULFIL, reqPayload: payload });
  }
}

export default function* fetcherSagas() {
  yield all([takeEvery(fetcherConstants.API, handleAPICall)]);
}
