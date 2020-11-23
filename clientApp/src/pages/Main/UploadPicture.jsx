import React from "react";
import { Header } from "../Shared/Header";
export const FindSize = () => {
  return (
    <div>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: 'url("images/001.png")' }}
        >
          <Header />
          <div className="wrap-login100 m-t-50">
            <form className="login100-form validate-form">
              <div className="container-login100-form-btn">
                <a
                  className="login100-form-btn white-btn"
                  href="/upload-picture"
                >
                  Upload your pictures
                </a>
                <a
                  className="login100-form-btn white-btn "
                  href="/how-to-upload"
                >
                  Show me how?
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
