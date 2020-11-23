import React from "react";
import { SignIn } from "../../pages/Auth/SignIn";
import { SignUp } from "../../pages/Auth/SignUp";
import { Categories } from "../../pages/Main/Categories";
import { Verification } from "../../pages/Auth/Verification";
import { Welcome } from "../../pages/Auth/Welcome";
import { Store } from "../../pages/Main/Store";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Welcome />,
    protected: "guest",
  },
  {
    path: "/signup",
    component: () => <SignUp />,
    protected: "guest",
  },
  {
    path: "/signin",
    component: () => <SignIn />,
    protected: "guest",
  },
  {
    path: "/verification/:token",
    component: () => <Verification />,
    protected: "guest",
  },
  {
    path: "/categories",
    component: () => <Categories />,
    protected: "auth",
  },
  {
    path: "/store",
    component: () => <Store />,
    protected: "auth",
  },
];
