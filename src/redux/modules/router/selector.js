import get from 'lodash.get'

export const getPreviousLocation = ({ router }) => get(router, 'from', {})

export const getCurrentLocation = ({ router }) => get(router, 'location', {})
