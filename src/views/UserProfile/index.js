import React, { useState } from "react";
import AppLayout from "../../layout/AppLayout";
import "./userprofile.css";
import Logo from "../../assets/img/loraxprofiletransparent.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
/*

<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="LastName">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder="Jones"
                        />
                      </div>
                    </div>

  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder=""
                        />
                      </div>
                    </div>

                     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="Street">Street</label>
                        <input
                          type="name"
                          className="form-control"
                          id="Street"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="zIp">Zip Code</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zIp"
                          placeholder="7700"
                        />
                      </div>
                    </div>

*/

const UserProfile = ({ auth: { user } }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    province: "",
    city: "",
  });

  const { name, email, province, city } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const incentives = {};
  if (user.role !== "WastePicker" || "Consumer") {
    const incentives = {
      display: "none",
    };
  }
  const currentEmail = user.email;

  const onSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      name,
      email,
      province,
      city,
      currentEmail,
    });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/update",
        body,
        config
      );
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        console.log(errors);
      }
    }
  };

  return (
    <AppLayout>
      <div>
        <div className=" pt-3 border">
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="account-settings">
                    <div className="user-profile">
                      <div className="user-avatar">
                        <img alt="Lorax Logo" src={Logo} />
                      </div>
                      <h5 className="user-name">{user && user.name}</h5>
                      <h6 className="user-role">{user && user.role}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className=" pt-3 border">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mb-2 text-primary">Personal Details</h6>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="FirstName">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="name"
                            onChange={(e) => onChange(e)}
                            placeholder={user && user.name}
                          />
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="eMail">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="eMail"
                            name="email"
                            onChange={(e) => onChange(e)}
                            placeholder={user && user.email}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mt-3 mb-2 text-primary">Address</h6>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="ciTy">City</label>
                          <input
                            type="name"
                            className="form-control"
                            id="ciTy"
                            name="city"
                            onChange={(e) => onChange(e)}
                            placeholder={user && user.city}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="Province">Province</label>
                          <input
                            type="text"
                            className="form-control"
                            id="province"
                            name="province"
                            onChange={(e) => onChange(e)}
                            placeholder={user && user.province}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-right">
                          <input
                            type="reset"
                            className="btn btn-secondary"
                            name="cancel"
                            value="Cancel"
                          />
                          <input
                            type="submit"
                            className="btn btn-primary"
                            name="submit"
                            value="Update"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className=" pt-3 border" style={{ display: "none" }}>
        <div class="card ">
          <div class="card-body text-center">
            <h6 className="mb-2 text-primary">Number of bottles recycled</h6>
            <p>100</p>
          </div>
        </div>
        <div class="card ">
          <div class="card-body text-center">
            <h6 className="mb-2 text-primary">Lorax Tokens</h6>
            <p>10</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
UserProfile.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(UserProfile);
