import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
export const Verification = () => {
  const [success, setSuccess] = React.useState("");
  const { token } = useParams();
  const history = useHistory();
  useEffect(() => {
    if (token) {
      axios
        .get(`/api/user/confirmation/${token}`)
        .then((res) => {
          setSuccess(res.data.message);
        })
        .catch((err) => {
          history.push("/");
        });
    }
  }, [history, token]);
  return (
    <div className="limiter">
      <div
        className="container-login100"
        style={{ backgroundImage: 'url("images/001.png")' }}
      >
        <div className="wrap-login100">
          {success && (
            <div className="alert alert-success" role="alert">
              {success}
            </div>
          )}
          <div className="container-login100-form-btn ">
            <a className="login100-form-btn white-btn" href="/signin">
              Sign In
            </a>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};
