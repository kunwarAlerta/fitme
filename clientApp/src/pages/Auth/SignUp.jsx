import React from "react";
import axios from "axios";
export const SignUp = () => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const onSignUpForm = (e) => {
    setLoading(true);
    e.preventDefault();
    if (password !== confirmPassword) {
      setSuccess();
      setError("Password and Confirm Password not match");
      setLoading(false);
    } else {
      axios
        .post(`/api/user/signup`, { username, email, password })
        .then((res) => {
          setSuccess(res.data.message);
          setError("");
          setLoading(false);
        })
        .catch((err) => {
          setSuccess("");
          setError(err.response.data.message);
          setLoading(false);
        });
    }
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
              onSubmit={(e) => onSignUpForm(e)}
            >
              <a href="/" className="logo text-center">
                <h3>FitMe</h3>
                <h5>Find your perfect fit, every time</h5>
              </a>
              <span className="login100-form-title p-b-34 p-t-27">Sign Up</span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter username"
              >
                <input
                  className="input100"
                  type="text"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
                <span className="focus-input100" data-placeholder="" />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Email"
              >
                <input
                  className="input100"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
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
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <span className="focus-input100" data-placeholder="" />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Confirm password"
              >
                <input
                  className="input100"
                  type="password"
                  name="cpassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                />
                <span className="focus-input100" data-placeholder="" />
              </div>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              {success && (
                <div className="alert alert-success" role="alert">
                  {success}
                </div>
              )}
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  {loading ? "Please Wait" : "Sign Up"}
                </button>
              </div>

              <div className="text-center p-t-50">
                <a className="txt1" href="/signin">
                  Sign In Here
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};
