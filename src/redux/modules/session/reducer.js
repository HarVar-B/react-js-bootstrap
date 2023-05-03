import { constants } from "./creator";

const defaultState = {
  profile: { isFetched: false, isLoading: false }
};

const MAPPED_REDUCERS = {
  [constants.SET_USER_PROFILE_DATA]: (state, { payload }) => ({
    ...state,
    profile: {
      ...state.profile,
      isFetched: true,
      isLoading: false,
      data: {
        ...payload
      }
    }
  }),

  [constants.PATCH_USER_PROFILE_DATA]: (state, { payload }) => {
    return {
      ...state,
      profile: {
        ...state.profile,
        data: {
          ...state.profile.data,
          ...payload
        }
      }
    };
  },

  [constants.SET_USER_AUTH_TOKEN]: (state, action) => ({
    ...state,
    authToken: action.payload.authToken,
    isUserAuthorized: true
  })
};

function sessionReducer(state = defaultState, action) {
  const handler = MAPPED_REDUCERS[action.type];

  return handler ? handler(state, action) : state;
}

export default sessionReducer;
