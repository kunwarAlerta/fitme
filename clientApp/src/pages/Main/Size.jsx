import React from "react";
import { Header } from "../Shared/Header";
export const Size = () => {
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
                <button className="login100-form-btn white-btn">
                  <a href="/find-size">Find your size</a>
                </button>
                <button className="login100-form-btn white-btn">
                  <a href="/store">Shop Stores</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};
