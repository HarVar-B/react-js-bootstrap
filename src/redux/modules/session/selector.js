import get from 'lodash.get'
import { getCookie } from '../../../utils'

export const getUserToken = ({ session }) => get(session, 'authToken', getCookie('authToken'))

export const isUserAuthorized = ({ session }) => get(session, 'isUserAuthorized', false)

export const userProfileData = ({ session }) => get(session, 'profile.data', {})

export const userName = ({session})=> get(session,'profile.data.username',"")