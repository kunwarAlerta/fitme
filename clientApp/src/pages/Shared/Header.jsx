import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../../context/AppContext";

export const Header = () => {
  const history = useHistory();
  const { setUser, setToken } = useContext(AppContext);
  const logout = () => {
    localStorage.setItem("auth-token", "");
    setToken("");
    setUser({});
    history.push("/signin");
  };
  return (
    <div style={{ textAlign: "center", display: "block", width: "100%" }}>
      <span className="logo text-center">
        <h3>FitMe</h3>
      </span>
      <button className="login100-form-btn" onClick={(e) => logout()}>
        Logout
      </button>
    </div>
  );
};
