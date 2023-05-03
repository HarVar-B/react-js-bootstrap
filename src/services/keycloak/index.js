import Keycloak from 'keycloak-js'
import { environment } from '../../environments'

const keycloak = new Keycloak({
  url: environment.KEYCLOAK_SERVER_URL,
  realm: environment.KEYCLOAK_SERVER_REALM,
  clientId: environment.KEYCLOAK_SERVER_CLIENT_ID,
})

export default keycloak
