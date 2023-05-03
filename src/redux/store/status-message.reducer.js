const initialState = {
  visible: false,
  message: '',
}

export const statusMessage = (state = initialState, { type, payload }) => {
  if (type === 'STATUS_MESSAGE_SHOWN') {
    return { visible: true, message: payload.message, type: payload.type }
  }

  if (type === 'STATUS_MESSAGE_HIDDEN') {
    return { visible: false }
  }

  return state
}
