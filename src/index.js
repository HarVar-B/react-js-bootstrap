import React                     from "react";
import ReactDOM                  from "react-dom";
import { Provider }              from "react-redux";
import { ConnectedRouter }       from "connected-react-router";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import App                       from "./App";
import store, { history }        from "./redux/store";
import Loader                    from "./components/Loader";
import keycloak                  from "./services/keycloak";
import "./index.css";

// import reportWebVitals from './reportWebVitals';
// todo: Handle `onTokenExpired` event from keycloak, logout user
ReactDOM.render(<React.StrictMode>
  {/*<ReactKeycloakProvider*/}
  {/*  authClient={keycloak}*/}
  {/*  initOptions={{ onLoad: "login-required", flow: "implicit" }}*/}
  {/*  LoadingComponent={Loader}*/}
  {/*  onEvent={(eventType, error) => {*/}
  {/*    console.log({ eventType, error });*/}
  {/*    if (eventType === "onTokenExpired") {*/}
  {/*      console.log("Token expired logging user out");*/}
  {/*      keycloak.logout();*/}
  {/*    }*/}
  {/*  }}*/}
  {/*  onTokens={tokens => console.log({ tokens })}*/}
  {/*>*/}
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  {/*</ReactKeycloakProvider>*/}
</React.StrictMode>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
