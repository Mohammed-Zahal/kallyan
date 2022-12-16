import React from "react";
const CheckOut = () => {
  return (
    <>
      <div className="row">
        <div className="col-75 py-4">
          <div className="container py-5">
            <form action="">
              <div className="row">
                <div className="col-50">
                  <h3>Shipping Address</h3>
                  <label htmlFor="country">
                    <i className="fa fa-user"></i> Country{" "}
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Enter your country"
                  />
                  <label htmlFor="fname">
                    <i className="fa fa-user"></i> First Name{" "}
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Enter your first name"
                  />
                  <label htmlFor="lname">
                    <i className="fa fa-user"></i> LastName{" "}
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Enter your last name"
                  />
                  <label htmlFor="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o"></i> Address{" "}
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label htmlFor="city">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                  />
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label htmlFor="country">
                    <i className="fa fa-user"></i> Country{" "}
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Enter your country"
                  />
                  <label htmlFor="fname">
                    <i className="fa fa-user"></i> First Name{" "}
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Enter your first name"
                  />
                  <label htmlFor="lname">
                    <i className="fa fa-user"></i> LastName{" "}
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Enter your last name"
                  />
                  <label htmlFor="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o"></i> Address{" "}
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label htmlFor="city">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                  />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>
                <label>
                  <input type="checkbox" name="sameadr" /> Shipping address same
                  as billing
                </label>
                <div>
                  <h4>Shipping Method</h4>
                  <label>
                    <input type="checkbox" name="sameadr" /> Pick up{" "}
                  </label>
                  <label>
                    <input type="checkbox" name="sameadr" /> Free{" "}
                  </label>
                </div>
                <div className="col-50">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                    <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                    <i
                      className="fa fa-cc-mastercard"
                      style={{ color: "red" }}
                    ></i>
                    <i
                      className="fa fa-cc-discover"
                      style={{ color: "orange" }}
                    ></i>
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="Enter yor name"
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />

                   
                  </div>
                </div>
              </div>

              <>
                <button className="btn btn-outline-dark" id="btns">
                  proceed to checkout
                </button>
              </>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
