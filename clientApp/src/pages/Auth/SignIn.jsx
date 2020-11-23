import React, { useContext } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import AppContext from "../../context/AppContext";
import axios from "axios";
export const SignIn = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setToken, setUser } = useContext(AppContext);
  const history = useHistory();
  const onSignInForm = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(`/api/user/signin`, { email, password })
      .then((res) => {
        const user = jwt_decode(res.data.token);
        setUser(user);
        setToken(res.data.token);
        localStorage.setItem("auth-token", res.data.token);
        history.push("/store");
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: 'url("images/001.png")' }}
        >
          <div className="wrap-login100">
            <form
              className="login100-form validate-form"
              onSubmit={(e) => onSignInForm(e)}
            >
              <a href="/" className="logo text-center">
                <h3>FitMe</h3>
                <h5>Find your perfect fit, every time</h5>
              </a>
              <span className="login100-form-title p-b-34 p-t-27">Log in</span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter username"
              >
                <input
                  className="input100"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input100" data-placeholder="" />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input100" data-placeholder="" />
              </div>
              <div className="contact100-form-checkbox">
                <input
                  className="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label className="label-checkbox100" htmlFor="ckb1">
                  Remember me
                </label>
              </div>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  {loading ? "Please Wait" : "Sign In"}
                </button>
              </div>
              <div className="text-center p-t-50">
                <a className="txt1" href="/forget-password">
                  Forgot Password? <span />
                </a>
                <a href="/signup">Sign Up Here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};
