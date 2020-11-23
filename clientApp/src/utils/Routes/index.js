import React from "react";
import { SignIn } from "../../pages/Auth/SignIn";
import { SignUp } from "../../pages/Auth/SignUp";
import { Categories } from "../../pages/Main/Categories";
import { Verification } from "../../pages/Auth/Verification";
import { Welcome } from "../../pages/Auth/Welcome";
import { Store } from "../../pages/Main/Store";
import { Size } from "../../pages/Main/Size";
import { HowToUpload } from "../../pages/Main/HowToUpload";
import { FindSize } from "../../pages/Main/UploadPicture";
import { SelectSize } from "../../pages/Main/SelectSize";
import { MySize } from "../../pages/Main/MySize";
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
  {
    path: "/size",
    component: () => <Size />,
    protected: "auth",
  },
  {
    path: "/how-to-upload",
    component: () => <HowToUpload />,
    protected: "auth",
  },
  {
    path: "/find-size",
    component: () => <FindSize />,
    protected: "auth",
  },
  {
    path: "/select-size",
    component: () => <SelectSize />,
    protected: "auth",
  },
  {
    path: "/my-size",
    component: () => <MySize />,
    protected: "auth",
  },
];
