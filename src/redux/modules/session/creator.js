import { createAsyncActions } from '../utils'

//#region Action constant
export const constants = {
  GET_USER_PROFILE_DATA: createAsyncActions('@@session/GET_USER_PROFILE_DATA'),
  SET_USER_PROFILE_DATA: '@@session/SET_USER_PROFILE_DATA',
  PATCH_USER_PROFILE_DATA: '@@session/PATCH_USER_PROFILE_DATA',

  REDIRECT_HANDLER_POST_LOGIN: '@@session/REDIRECT_HANDLER_POST_LOGIN',
  SET_USER_AUTH_TOKEN: '@@session/SET_USER_AUTH_TOKEN',

  USER_LOGOUT: '@@session/USER_LOGOUT',
  USER_JOB: '@@session/USER_JOB',
}
//#endregion Action constant

//#region Action creators
export const getUserProfileData = (payload = {}, meta = {}) => ({
  type: constants.GET_USER_PROFILE_DATA.TRIGGER,
  payload,
  meta,
})

export const setUserProfileData = (payload = {}) => ({
  type: constants.SET_USER_PROFILE_DATA,
  payload,
})

export const userLogout = (payload = {}) => ({
  type: constants.USER_LOGOUT,
  payload,
})

//#endregion Action creators
