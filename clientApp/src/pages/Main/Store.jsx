import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import { Header } from "../Shared/Header";

export const Store = () => {
  const [loading, setLoading] = React.useState(true);
  const [stores, setStores] = React.useState({});
  const [currentstore, setCurentStore] = React.useState();
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`/api/store/get`)
      .then((res) => {
        setStores(res.data.stores);
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
              <div className="select-store">
                <h2>Select your Store</h2>
                {loading ? (
                  <Loader />
                ) : (
                  <ul className="thumbnails">
                    {stores.map((store) => (
                      <li className="col-md-3 pull-left">
                        <div
                          className="caption"
                          onClick={() => setCurentStore(store._id)}
                          style={{
                            border:
                              currentstore === store._id
                                ? "1px solid #000"
                                : "1px solid #DEE",
                          }}
                        >
                          <h4>{store.name}</h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  disabled={currentstore ? false : true}
                  className="login100-form-btn pic-btn"
                  onClick={() => history.push("/categories")}
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
