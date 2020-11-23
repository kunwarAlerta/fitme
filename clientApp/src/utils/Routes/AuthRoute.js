import React, { useContext } from "react";
import UserContext from "../../context/AppContext";
import MainRoute from "./MainRoute";
import { Redirect } from "react-router-dom";

export default function AuthRoute({ children, ...rest }) {
  const { token } = useContext(UserContext);
  if (token) return <MainRoute {...rest}>{children}</MainRoute>;

  return <Redirect to="/store" />;
}
