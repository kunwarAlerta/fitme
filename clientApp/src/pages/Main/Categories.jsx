import React from "react";
export const Categories = () => {
  return (
    <div>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: 'url("images/001.png")' }}
        >
          <span className="logo text-center">
            <h3>FitMe</h3>
          </span>
          <div className="wrapper">
            <div className="row">
              <div className="filter">
                <ul className="category">
                  <li className="col-md-4 pull-left">
                    <div className="caption">
                      <h4>Mens</h4>
                    </div>
                  </li>
                  <li className="col-md-4 pull-left">
                    <div className="caption">
                      <h4>Womens</h4>
                    </div>
                  </li>
                  <li className="col-md-4 pull-left">
                    <div className="caption">
                      <h4>kids</h4>
                    </div>
                  </li>
                </ul>
                <ul className="category">
                  <li className="col-md-3 pull-left">
                    <div className="caption">
                      <h4>T-Shirt</h4>
                    </div>
                  </li>
                  <li className="col-md-3 pull-left">
                    <div className="caption">
                      <h4>Shirts</h4>
                    </div>
                  </li>
                  <li className="col-md-3 pull-left">
                    <div className="caption">
                      <h4>Pants</h4>
                    </div>
                  </li>
                  <li className="col-md-3 pull-left">
                    <div className="caption">
                      <h4>Shorts</h4>
                    </div>
                  </li>
                </ul>
                <ul className="category">
                  <li className="col-md-4 pull-left">
                    <div className="caption">
                      <h4>Loose</h4>
                    </div>
                  </li>
                  <li className="col-md-4 pull-left">
                    <div className="caption">
                      <h4>Tight</h4>
                    </div>
                  </li>
                  <li className="col-md-4 pull-left">
                    <div className="caption">
                      <h4>Perfect</h4>
                    </div>
                  </li>
                </ul>
                <button className="login100-form-btn pic-btn ">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};
