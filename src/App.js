import React, { useEffect }   from "react";
import { Route, Switch }      from "react-router-dom";
import { useKeycloak }        from "@react-keycloak/web";

import "./App.css";
import routes                 from "./routes";
import Loader                 from "./components/Loader";
import DefaultLayout          from "./layouts/default";
import { connect }            from "react-redux";
import { setUserProfileData } from "./redux/modules/session/creator";

function App({ setUserProfileData }) {
  // const { keycloak, initialized } = useKeycloak();
  // console.log({ token: keycloak.token });
  // useEffect(() => {
  //   const func = async () => {
  //     const isAuthenticated = keycloak.authenticated;
  //     console.log({ initialized, isAuthenticated });
  //     if (initialized && !isAuthenticated) {
  //       keycloak.login();
  //     }
  //   };
  //   func();
  // }, [initialized, keycloak.authenticated]);
  //
  // useEffect(() => {
  //   if (keycloak.token) {
  //     document.cookie = `authToken=${keycloak.token}; max-age=${60 * 60 * 1000}; path=/`;
  //   } else {
  //     console.log("Resetting the token");
  //     document.cookie = `authToken=NO-TOKEN; expires=${new Date()}; path=/`;
  //   }
  //   keycloak
  //     .loadUserProfile()
  //     .then((profile) => {
  //       setUserProfileData(profile);
  //     })
  //     .catch(() => {
  //       console.error("Failed to load user profile");
  //     });
  // }, [keycloak.token, keycloak.authenticated, initialized]);

  return (
    <DefaultLayout>
      <React.Suspense fallback={Loader}>
        <Switch>
          {/*<Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />*/}
          {/*<Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />*/}
          {/*<Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />*/}
          {Object.values(routes).map((route, idx) =>
            <Route key={idx}
                   path={route.path()}
                   exact
                   name={route.name}
                   render={(props) => <route.component {...props} />}
            />
          )}
        </Switch>
      </React.Suspense>
    </DefaultLayout>
  );
}

const mapStateToProps = () => {
};
const mapActionsToProps = {
  setUserProfileData
};
export default connect(mapStateToProps, mapActionsToProps)(App);
