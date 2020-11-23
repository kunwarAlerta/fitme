import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Loader from "../../components/Loader";
import { Header } from "../Shared/Header";

export const MySize = () => {
  const [loading, setLoading] = React.useState(true);
  const [size, setSize] = React.useState({});
  const { user } = useContext(AppContext);
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`/api/user/size/${user._id}`)
      .then((res) => {
        setSize(res.data.user.size.name);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: 'url("images/001.png")' }}
        >
          <Header />
          <div className="wrapper">
            <div className="row">
              <div className="ur-size">
                <h1>You’re a size </h1>
                {loading ? (
                  <Loader />
                ) : (
                  <input
                    type="text"
                    name="text"
                    placeholder="twenty eight"
                    value={size}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};
