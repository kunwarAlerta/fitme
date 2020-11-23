import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import { Header } from "../Shared/Header";

export const Categories = () => {
  const [loading, setLoading] = React.useState(true);
  const [categories, setCategories] = React.useState({});
  const [currentcategory, setCurentCategory] = React.useState();
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`/api/category/get`)
      .then((res) => {
        setCategories(res.data.categories);
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
              <div className="filter">
                {loading ? (
                  <Loader />
                ) : (
                  <ul className="category">
                    {categories.map((category) => (
                      <li className="col-md-4 pull-left">
                        <div
                          className="caption"
                          onClick={() => setCurentCategory(category._id)}
                          style={{
                            border:
                              currentcategory === category._id
                                ? "1px solid #000"
                                : "1px solid #DEE",
                          }}
                        >
                          <h4>{category.name}</h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                <button
                  disabled={currentcategory ? false : true}
                  className="login100-form-btn pic-btn"
                  onClick={() => history.push("/select-size")}
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
