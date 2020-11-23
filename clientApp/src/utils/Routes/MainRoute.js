import React from "react";
import { Route } from "react-router-dom";

export default function MainRoute({ children, ...rest }) {
    return <Route {...rest}>{children}</Route>;
}
