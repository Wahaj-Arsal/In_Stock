/** @format */

import backArrow from "../../../assets/icons/arrow_back-24px.svg";
import error from "../../../assets/icons/error-24px.svg";
import React, { Component } from "react";
import axios from "axios";

const API_URL_GET_INVENTORY = (id) => `http://localhost:5000/inventories/${id}`;
const API_URL_EDIT_INVENTORY = (id) =>
	`http://localhost:5000/inventories/${id}/edit`;

export default class AddNewInventoryItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//VALIDATION STATES
			itemNameValid: true,
			descriptionValid: true,
			categoryValid: true,
			statusValid: true,
			quantityValid: true,
			warehouseValid: true,
			//FORM STATES
			inStockValid: true,
			outOfStockValid: true,
			itemName: "",
			description: "",
			category: "",
			status: "",
			quantity: "",
			warehouseName: "",
		};
	}

	goBack = () => {
		this.props.history.goBack();
		// console.log(this.props.history);
	};

	componentDidMount() {
		this.getData();
	}

	getData = async () => {
		const currentId = this.props.match.params.inventoryId;
		console.log(currentId);
		const response = await axios.get(API_URL_GET_INVENTORY(currentId));
		console.log(response);
		const inventoryInfo = response.data;
		console.log(inventoryInfo.status);

		if (this.state.status == "In Stock") {
			console.log("Here");
			this.setState({ status: "1" });
			document.getElementById("inStock").checked = true;
			//   return;
		}
		if (this.state.status !== "In Stock") {
			this.setState({ status: "0" });
			document.getElementById("outOfStock").checked = true;
			console.log("Second Here");
			//   return;
			//   document.getElementById("outOfStock").checked = true;
		}

		this.setState({
			itemName: inventoryInfo.itemName,
			description: inventoryInfo.description,
			category: inventoryInfo.category,
			quantity: inventoryInfo.quantity,
			warehouseName: inventoryInfo.warehouseName,
		});
	};

	handleChange = (e) => {
		this.setState(
			{
				[e.target.name]: e.target.value,
			},
			() => {
				console.log(this.state.status);
				if (this.state.status == "0") {
					this.setState({ inStockValid: true });
					document.getElementById("quantity").classList.add("quantity--hidden");
					document
						.getElementById("quantityTitle")
						.classList.add("quantity--hidden");
					// this.setState({ quantity: e.target.value });
					return true;
				} else if (this.state.status == "1") {
					this.setState({ outOfStockValid: true });
					document
						.getElementById("quantity")
						.classList.remove("quantity--hidden");
					document
						.getElementById("quantityTitle")
						.classList.remove("quantity--hidden");
					// this.setState({ quantity: "0" });
					return true;
				}
			}
		);
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.validate()) {
			this.editInventory();
		}
	};

	itemNameValidation = () => {
		//Warehouse Name
		if (this.state.itemName.length > 4) {
			this.setState({ itemNameValid: true });
			return true;
		} else {
			this.setState({ itemNameValid: false });
			return false;
		}
	};

	descriptionValidation = () => {
		// //Address Name
		if (this.state.description.length > 6) {
			this.setState({ descriptionValid: true });
			return true;
		} else {
			this.setState({ descriptionValid: false });
			return false;
		}
	};

	categoryValidation = () => {
		// //City
		if (this.state.category != "") {
			this.setState({ categoryValid: true });
			return true;
		} else {
			this.setState({ categoryValid: false });
			return false;
		}
	};

	statusValidation = () => {
		if (this.state.status == "1" || this.state.status == "0") {
			this.setState({
				statusValid: true,
			});
			return true;
		} else {
			this.setState({
				statusValid: false,
			});
			return false;
		}
	};

	quantityValidation = () => {
		console.log("Quantity", this.state.status);
		if (this.state.status == "0") {
			this.setState({ quantityValid: true });
			return true;
		}

		if (this.state.quantity > 0) {
			this.setState({ quantityValid: true });
			return true;
		} else this.setState({ quantityValid: false });
		return false;
	};

	warehouseValidation = () => {
		//Phone Number
		if (this.state.warehouseName != "") {
			this.setState({ warehouseValid: true });
			return true;
		} else {
			this.setState({ warehouseValid: false });
			return false;
		}
	};

	validate = (e) => {
		//put all the functions in one line.
		if (!this.itemNameValidation()) {
			return false;
		}

		if (!this.descriptionValidation()) {
			return false;
		}

		if (!this.categoryValidation()) {
			return false;
		}

		if (!this.statusValidation()) {
			return false;
		}
		if (!this.quantityValidation()) {
			return false;
		}
		if (!this.warehouseValidation()) {
			return false;
		}
		console.log("Validated");
		return true;
	};

	//******** API Call To Upload A Video ******** */
	//Posts A Comment To The Video
	editInventory = async (e) => {
		const currentId = this.props.match.params.inventoryId;
		// console.log(currentId);
		const newInventory = {
			itemName: this.state.itemName,
			description: this.state.description,
			category: this.state.category,
			status: this.state.status,
			quantity: this.state.quantity,
			warehouseName: this.state.warehouseName,
		};
		// console.log(newWarehouse);
		await axios
			.put(API_URL_EDIT_INVENTORY(currentId), newInventory)
			.then((response) => {});
	};

	render() {
		return (
			<section>
				<div className="warehouse">
					<div className="warehouse__header">
						<img
							className="warehouse__icon"
							src={backArrow}
							alt="back arrow"
							onClick={this.goBack}
						/>
						<h1 className="warehouse__title">Edit New Inventory Item</h1>
					</div>
					<form className="form-container" onSubmit={this.handleSubmit}>
						<div className="form">
							<h2 className="form__heading">Item Details</h2>
							<label className="form__label">Item Name</label>
							<input
								className={`${
									!this.state.itemNameValid
										? "form__input form__input--error"
										: "form__input form__input--active"
								}`}
								type="text"
								name="itemName"
								// placeholder="Item Name"
								value={this.state.itemName}
								onChange={this.handleChange}
							/>
							<p
								className={`${
									this.state.itemNameValid
										? "form__error form__error--active"
										: "form__error"
								}`}>
								<img className="form__error-icon" src={error} />
								This field is required
							</p>
							<label className="form__label">Description</label>
							<textarea
								className={`${
									!this.state.descriptionValid
										? "form__textarea form__textarea--error"
										: "form__textarea"
								}`}
								type="text"
								name="description"
								// placeholder="Please enter a brief item description..."
								value={this.state.description}
								onChange={this.handleChange}
							/>
							<p
								className={`${
									this.state.descriptionValid
										? "form__error form__error--active"
										: "form__error"
								}`}>
								<img className="form__error-icon" src={error} />
								This field is required
							</p>
							<label className="form__label ">Category</label>
							<select
								className={`${
									!this.state.categoryValid
										? "form__dropdown form__dropdown--error"
										: "form__dropdown"
								}`}
								type="text"
								id="category"
								name="category"
								// placeholder="Please Select"
								// value={this.state.category}
								onChange={this.handleChange}>
								<option value="">{this.state.category}</option>
								<option value="Accessories">Accessories</option>
								<option value="Apparel">Apparel</option>
								<option value="Electronics">Electronics</option>
								<option value="Gear">Gear</option>
								<option value="Health">Health</option>
							</select>
							<p
								className={`${
									this.state.categoryValid
										? "form__error form__error--active"
										: "form__error"
								}`}>
								<img className="form__error-icon" src={error} />
								This field is required
							</p>
						</div>
						<div className="form">
							<h2 className="form__heading">Item Availability</h2>
							<label className="form__label">Status</label>
							<div className="input-container">
								<input
									className={`${
										!this.state.inStockValid
											? "form__radio-input form__radio-input--error"
											: "form__radio-input"
									}`}
									type="radio"
									id="inStock"
									name="status"
									//   checked={true}
									//   checked={this.state.status ? true : false}
									onClick={this.handleChange}
								/>
								<label className="form__label radio-label">In Stock</label>
								<input
									className={`${
										!this.state.inStockValid
											? "form__radio-input form__radio-input--error"
											: "form__radio-input"
									}`}
									type="radio"
									id="outOfStock"
									name="status"
									//   checked={true}
									//   checked={this.state.status ? false : true}
									onClick={this.handleChange}
								/>
								<label className="form__label radio-label">Out of Stock</label>
								<p
									className={`${
										this.state.statusValid
											? "form__error form__error--active"
											: "form__error"
									}`}>
									<img className="form__error-icon" src={error} />
									This field is required
								</p>
							</div>
							<label id="quantityTitle" className="form__label">
								Quantity
							</label>
							<input
								className={`${
									!this.state.quantityValid
										? "form__input form__input--error"
										: "form__input"
								}`}
								type="text"
								id="quantity"
								name="quantity"
								// placeholder="Quantity"
								value={this.state.quantity}
								onChange={this.handleChange}
							/>
							<p
								className={`${
									this.state.quantityValid
										? "form__error form__error--active"
										: "form__error"
								}`}>
								<img className="form__error-icon" src={error} />
								This field is required
							</p>
							<label className="form__label ">Warehouse</label>
							<select
								className={`${
									!this.state.warehouseValid
										? "form__dropdown form__dropdown--error"
										: "form__dropdown"
								}`}
								type="text"
								name="warehouseName"
								// value={this.state.warehouseName}
								onChange={this.handleChange}>
								<option value="">{this.state.warehouseName}</option>
								<option value="Boston">Boston</option>
								<option value="Jersey">Jersey</option>
								<option value="Manhattan">Manhattan</option>
								<option value="Miami">Miami</option>
								<option value="San Fran">San Fran</option>
								<option value="Santa Monica">Santa Monica</option>
								<option value="Seattle">Seattle</option>
								<option value="Washington">Washington</option>
							</select>
							<p
								className={`${
									this.state.warehouseValid
										? "form__error form__error--active"
										: "form__error"
								}`}>
								<img className="form__error-icon" src={error} />
								This field is required
							</p>
						</div>
						<div className="button__container">
							<button
								className="form-button form-button__cancel"
								label="Cancel">
								Cancel
							</button>
							<button
								type="submit"
								className="form-button form-button__warehouse"
								label="Add Inventory Item">
								Save
							</button>
						</div>
					</form>
				</div>
			</section>
		);
	}
}
