import { LOCATION_CHANGE } from 'connected-react-router'

const defaultState = {}

const MAPPED_REDUCERS = {
  [LOCATION_CHANGE]: (state, { payload = {} }) => {
    // eslint-disable-next-line
    const { isFirstRendering, ...rest } = payload;

    return {
      ...rest,
      ...(state.location && {
        from: {
          ...state.location,
          action: state.action,
        },
      }),
    }
  },
}

function routerReducer(state = defaultState, action) {
  const handler = MAPPED_REDUCERS[action.type]

  return handler ? handler(state, action) : state
}

export default routerReducer
