//#region Action constant
export const constants = {
  API: '@@fetcher/API',
}
//#endregion Action constant

//#region Action creators
export const fetcherAction = ({
  tokenize,
  label,
  fetcherParams,
  headers = {},
  onSuccess = null,
  onFailure = null,
  shouldHandleError = true,
}) => ({
  type: constants.API,
  payload: {
    label,
    fetcherParams,
    headers,
    onSuccess,
    onFailure,
  },
  meta: { tokenize },
  shouldHandleError,
})
//#endregion Action creators
