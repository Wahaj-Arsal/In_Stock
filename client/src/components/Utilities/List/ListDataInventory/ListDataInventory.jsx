import React from "react";
import { Link } from "react-router-dom";

import "../ListCard/ListCard.scss";
import cardInfoIcon from "../../../../assets/icons/chevron_right-24px.svg";

const ListDataInventory = ({ data, url }) => {
	const id = data.id;
	return (
		<>
			<div className="card__content-wrapper">
				<div className="card__col-one">
					<div className="card__content-piece inventory-label-1">
						<label className="card__label">Inventory Item</label>
						<Link to={`/inventory/${id}`}>
							<div className="card__info-wrapper">
								<p className="card__info">{data.itemName}</p>
								<img className="card__arrow" src={cardInfoIcon} alt="inventory info" />
							</div>
						</Link>
					</div>
					<div className="card__content-piece inventory-label-2">
						<label className="card__label">Category</label>
						<p className="card__info">{data.category}</p>
					</div>
				</div>
				<div className="card__col-two">
					<div className="card__content-piece inventory-label-3">
						<label className="card__label">Status</label>
						<div className="card__info">
							<p
								className={
									"card__status " +
									(data.status === "In Stock"
										? "card__status--in-stock"
										: "card__status--out-of-stock")
								}>
								{data.status}
							</p>
						</div>
					</div>
					<div className="card__content-piece inventory-label-4">
						<label className="card__label">QTY</label>
						<p className="card__info">{data.quantity}</p>
					</div>
					<div className="card__content-piece inventory-label-5">
						<label className="card__label">Warehouse</label>
						<p className="card__info">{data.warehouseName}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ListDataInventory;
