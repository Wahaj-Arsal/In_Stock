/** @format */

import "./WarehouseEdit.scss";
import backArrow from "../../../assets/icons/arrow_back-24px.svg";
import error from "../../../assets/icons/error-24px.svg";
import React, { Component } from "react";
import axios from "axios";

const API_URL_EDIT_WAREHOUSE = (id) =>
  `http://localhost:5000/warehouses/${id}/edit`;
const API_URL_GET_WAREHOUSES = (id) => `http://localhost:5000/${id}`;

export default class WarehouseEdit extends Component {
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

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const currentId = this.props.match.params.warehouseId;
    const response = await axios.get(API_URL_GET_WAREHOUSES(currentId));
    // console.log(warehouseInfo.data);
    const warehouseInfo = response.data;
    this.setState({
      name: warehouseInfo.name,
      address: warehouseInfo.address,
      city: warehouseInfo.city,
      country: warehouseInfo.country,
      contact: {
        name: warehouseInfo.contact.name,
        position: warehouseInfo.contact.position,
        phone: warehouseInfo.contact.phone,
        email: warehouseInfo.contact.email,
      },
    });
  };

  //   componentDidUpdate() {
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
      this.editWarehouse();
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
  editWarehouse = async (e) => {
    const currentId = this.props.match.params.warehouseId;
    // console.log(currentId);
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
    // console.log(newWarehouse);
    await axios
      .put(API_URL_EDIT_WAREHOUSE(currentId), newWarehouse)
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
            <h1 className="warehouse__title">Edit Warehouse</h1>
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
                // placeholder={this.state.name}
                value={this.state.name}
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
                // placeholder="Street Address"
                value={this.state.address}
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
                // placeholder="City"
                value={this.state.city}
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
                // placeholder="Country"
                value={this.state.country}
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
                // placeholder="Contact Name"
                value={this.state.contact.name}
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
                // placeholder="Position"
                value={this.state.contact.position}
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
                // placeholder="Phone Number"
                value={this.state.contact.phone}
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
                // placeholder="Email"
                value={this.state.contact.email}
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
                label="Edit Warehouse"
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="footer__text">© InStock Inc. All Rights Reserved.</div>
      </section>
    );
  }
}
