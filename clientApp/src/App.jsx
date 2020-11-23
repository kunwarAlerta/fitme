import React, { useState, useEffect } from "react";
import { BrowserRouter as Routes, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import AppContext from "./context/AppContext";
import Loading from "./components/Loading";
import AuthRoute from "./utils/Routes/AuthRoute";
import GuestRoute from "./utils/Routes/GuestRoute";
import MainRoute from "./utils/Routes/MainRoute";
import routes from "./utils/Routes/index";
function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      console.log(token);
      if (token === "") {
        setToken("");
        setUser({});
        token = "";
      }
      setUser(token ? jwt_decode(token) : null);
      setToken(token);
      setIsLoading(false);
    };
    checkLoggedIn();
  }, [isLoading, setToken]);

  if (isLoading) return <Loading />;
  return (
    <Routes>
      <AppContext.Provider value={{ user, setUser, token, setToken }}>
        <Switch>
          {routes.map((route, index) => {
            if (route.protected === "guest") {
              return (
                <GuestRoute key={index} path={route.path} exact={route.exact}>
                  <route.component />
                </GuestRoute>
              );
            }
            if (route.protected === "auth") {
              return (
                <AuthRoute key={index} path={route.path} exact={route.exact}>
                  <route.component />
                </AuthRoute>
              );
            }
            return (
              <MainRoute key={index} path={route.path} exact={route.exact}>
                <route.component />
              </MainRoute>
            );
          })}
        </Switch>
      </AppContext.Provider>
    </Routes>
  );
}

export default App;
