import { select, take } from "redux-saga/effects";

const isRequired = () => {
  throw new Error("Required Param: An action type is required to create async action object");
};

export function* waitFor(selector) {
  if (yield select(selector)) return false;

  while (true) {
    yield take("*");

    if (yield select(selector)) return false;
  }
}

export const createAsyncActions = (type = isRequired()) => ({
  TRIGGER: `${type}_TRIGGER`,
  REQUEST: `${type}_REQUEST`,
  SUCCESS: `${type}_SUCCESS`,
  FAILURE: `${type}_FAILURE`,
  FULFIL: `${type}_FULFIL`
});

export const createAsyncDataObject = (payload = {}) => {
  const { isObject = false, dataKey = "list" } = payload;

  return {
    isLoading: false,
    isFetched: false,
    [dataKey]: isObject ? {} : [],
    meta: {},
    errors: []
  };
};


export const HTTP_METHODS = {
  GET: "GET", POST: "POST", PATCH: "PATCH", PUT: "PUT"
};