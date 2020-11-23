import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import AppContext from "../../context/AppContext";
import { Header } from "../Shared/Header";

export const SelectSize = () => {
  const [loading, setLoading] = React.useState(true);
  const [sizes, setSizes] = React.useState({});
  const [currentsize, setCurentSize] = React.useState();
  const { user } = useContext(AppContext);
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`/api/size/get`)
      .then((res) => {
        setSizes(res.data.sizes);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  const setMySize = (currentsize) => {
    axios
      .post(`/api/user/size`, { _id: user._id, size: currentsize })
      .then((res) => {
        history.push("/my-size");
      })
      .catch((err) => {
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
          <Header />
          <div className="wrapper">
            <div className="row">
              <div className="filter">
                {loading ? (
                  <Loader />
                ) : (
                  <ul className="category">
                    {sizes.map((size) => (
                      <li className="col-md-4 pull-left">
                        <div
                          className="caption"
                          onClick={() => setCurentSize(size._id)}
                          style={{
                            border:
                              currentsize === size._id
                                ? "1px solid #000"
                                : "1px solid #DEE",
                          }}
                        >
                          <h4>{size.name}</h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                <button
                  disabled={currentsize ? false : true}
                  className="login100-form-btn pic-btn"
                  onClick={() => setMySize(currentsize)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};
