/** @format */

import "./WarehouseAddNew.scss";
import "../../Utilities/Footer/Footer.scss";
import backArrow from "../../../assets/icons/arrow_back-24px.svg";
import error from "../../../assets/icons/error-24px.svg";
import React, { Component } from "react";
import axios from "axios";

const API_URL_NEW_WAREHOUSE = `http://localhost:5000/warehouse/add-new`;

export default class WarehouseAddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //VALIDATION STATES
      formValid: false,
      nameValid: true,
      addressValid: true,
      cityValid: true,
      countryValid: true,
      nameValid: true,
      positionValid: true,
      phoneValid: true,
      emailValid: true,
      //FORM STATES
      name: "",
      address: "",
      city: "",
      country: "",
      contact: {
        name: "",
        position: "",
        phone: "",
        email: "",
      },
    };
  }

  goBack = () => {
    this.props.history.goBack();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleContactChange = (e) => {
    this.setState({
      contact: { ...this.state.contact, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      this.createNewWarehouse();
    }
  };

  nameValidation = () => {
    //Warehouse Name
    if (this.state.name.length > 0) {
      this.setState({ nameValid: true });
      // console.log("valid return");
      return true;
    } else {
      this.setState({ nameValid: false });
      return false;
    }
  };

  addressValidation = () => {
    // //Address Name
    if (this.state.address.length > 0) {
      this.setState({ addressValid: true });
      return true;
    } else {
      this.setState({ addressValid: false });
      return false;
    }
  };

  cityValidation = () => {
    // //City
    if (this.state.city.length > 0) {
      this.setState({ cityValid: true });
      return true;
    } else {
      this.setState({ cityValid: false });
      return false;
    }
  };

  countryValidation = () => {
    // //Country
    if (this.state.country.length > 0) {
      this.setState({ countryValid: true });
      return true;
    } else {
      this.setState({ countryValid: false });
      return false;
    }
  };

  nameValidation = () => {
    //Contact Name
    // console.log(this.state.contact.name.length);
    if (this.state.contact.name.length > 0) {
      console.log(this.state.contact.name.length);
      this.setState({ nameValid: true });
      return true;
    } else {
      console.log(this.state.contact.name);
      this.setState({ nameValid: false });
      return false;
    }
  };

  positionValidation = () => {
    //Position
    if (this.state.contact.position.length > 0) {
      this.setState({ positionValid: true });
      return true;
    } else {
      this.setState({ positionValid: false });
      return false;
    }
  };

  phoneValidation = () => {
    //Phone Number
    if (this.state.contact.phone.length > 0) {
      this.setState({ phoneValid: true });
      return true;
    } else {
      this.setState({ phoneValid: false });
      return false;
    }
  };

  emailValidation = () => {
    //Email
    if (
      this.state.contact.email.length > 0 &&
      this.state.contact.email.includes("@")
    ) {
      this.setState({ emailValid: true });
      return true;
    } else {
      this.setState({ emailValid: false });
      return false;
    }
  };

  validate = (e) => {
    //put all the functions in one line.
    if (!this.nameValidation()) {
      return false;
    }

    if (!this.addressValidation()) {
      return false;
    }

    if (!this.cityValidation()) {
      return false;
    }

    if (!this.countryValidation()) {
      return false;
    }
    if (!this.nameValidation()) {
      return false;
    }
    if (!this.positionValidation()) {
      return false;
    }
    if (!this.phoneValidation()) {
      return false;
    }

    if (!this.emailValidation()) {
      return false;
    }
    console.log("Validated");
    return true;
  };

  //******** API Call To Upload A Video ******** */
  //Posts A Comment To The Video
  createNewWarehouse = async (e) => {
    const newWarehouse = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      contact: {
        name: this.state.contact.name,
        position: this.state.contact.position,
        phone: this.state.contact.phone,
        email: this.state.contact.email,
      },
    };
    await axios
      .post(API_URL_NEW_WAREHOUSE, newWarehouse)
      .then((response) => {});
  };

  render() {
    return (
      <section className="footer">
        <div className="warehouse">
          <div className="warehouse__header">
            <img
              className="warehouse__icon"
              src={backArrow}
              alt="back arrow"
              onClick={this.goBack}
            />
            <h1 className="warehouse__title">Add New Warehouse</h1>
          </div>
          <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="form">
              <h2 className="form__heading">Warehouse Details</h2>
              <label className="form__label">Warehouse Name</label>
              <input
                className={`${
                  !this.state.nameValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="name"
                placeholder="Warehouse Name"
                onChange={this.handleChange}
              />
              <p
                className={`${
                  this.state.nameValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
              <label className="form__label">Street Address</label>
              <input
                className={`${
                  !this.state.addressValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="address"
                placeholder="Street Address"
                onChange={this.handleChange}
              />
              <p
                className={`${
                  this.state.addressValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
              <label className="form__label ">City</label>
              <input
                className={`${
                  !this.state.cityValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="city"
                placeholder="City"
                onChange={this.handleChange}
              />
              <p
                className={`${
                  this.state.cityValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
              <label className="form__label">Country</label>
              <input
                className={`${
                  !this.state.countryValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="country"
                placeholder="Country"
                onChange={this.handleChange}
              />
              <p
                className={`${
                  this.state.countryValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
            </div>
            <div className="form">
              <h2 className="form__heading">Contact Details</h2>
              <label className="form__label">Contact Name</label>
              <input
                className={`${
                  !this.state.nameValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="name"
                placeholder="Contact Name"
                onChange={this.handleContactChange}
              />
              <p
                className={`${
                  this.state.nameValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
              <label className="form__label">Position</label>
              <input
                className={`${
                  !this.state.positionValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="position"
                placeholder="Position"
                onChange={this.handleContactChange}
              />
              <p
                className={`${
                  this.state.positionValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
              <label className="form__label">Phone Number</label>
              <input
                className={`${
                  !this.state.phoneValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={this.handleContactChange}
              />
              <p
                className={`${
                  this.state.phoneValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
              <label className="form__label">Email</label>
              <input
                className={`${
                  !this.state.emailValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.handleContactChange}
              />
              <p
                className={`${
                  this.state.emailValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
            </div>
            <div className="button__container">
              <button
                className="form-button form-button__cancel"
                label="Cancel"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="form-button form-button__warehouse"
                label="+ Add Warehouse"
              >
                + Add Warehouse
              </button>
            </div>
          </form>
        </div>
        <div className="footer__text">© InStock Inc. All Rights Reserved.</div>
      </section>
    );
  }
}
