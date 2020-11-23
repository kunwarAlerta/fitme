import React from "react";
export const Welcome = () => (
  <div>
    <div className="limiter">
      <div
        className="container-login100"
        style={{ backgroundImage: 'url("images/001.png")' }}
      >
        <a href="/" className="logo text-center">
          <h3>FitMe</h3>
        </a>
        <div className="wrap-login100 m-t-50">
          <form className="login100-form validate-form">
            <div className="container-login100-form-btn ">
              <a className="login100-form-btn white-btn" href="/signin">
                Sign In
              </a>
            </div>
            <div className="container-login100-form-btn ">
              <a className="login100-form-btn white-btn" href="/signup">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div id="dropDownSelect1" />
  </div>
);
