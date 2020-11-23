import React from "react";

const AppContext = React.createContext({
  user: {},
  token: "",
  currentsize: "",
});

export default AppContext;
