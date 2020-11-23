import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Redirect } from "react-router-dom";
import MainRoute from "./MainRoute";

export default function GuestRoute({ children, ...rest }) {
  const { token } = useContext(AppContext);
  if (!token) return <MainRoute {...rest}>{children}</MainRoute>;

  return <Redirect to="/size" />;
}
