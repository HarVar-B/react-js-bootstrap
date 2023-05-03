let env;
try {
  /* eslint-disable import/no-dynamic-require */
  // eslint-disable-next-line no-undef
  env = window["__env"] || __env;
} catch {
  env = {
    // API_BASE_URL: 'https://metrics-platform-api.serving.staging.data.plectrum.dev/api/v1',
    API_BASE_URL: "http://localhost:8080/api/v1",
    DATASET_ONBOARDING_FORM_LINK: "https://forms.gle/86Xe7SuBFbQ7J3NM7",
    KEYCLOAK_SERVER_URL: "https://sso.serving.staging.data.plectrum.dev/auth/",
    KEYCLOAK_SERVER_REALM: "master",
    KEYCLOAK_SERVER_CLIENT_ID: "data-platform-ui-dev-local",
    ADMIN_PANEL_USERS: "harsha.boorla@rapido.bike,phani.kumar@rapido.bike,vinod.sadhu@rapido.bike".split(","),
    METABASE_UI_BASE_URL:"https://metabase.serving.staging.data.plectrum.dev/"
  };
}
console.log({ env });
export const environment = env;
