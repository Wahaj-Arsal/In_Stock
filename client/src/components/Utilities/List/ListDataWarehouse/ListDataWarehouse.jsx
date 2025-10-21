import React from "react";
import { Link } from "react-router-dom";

import "../ListCard/ListCard.scss";
import cardInfoIcon from "../../../../assets/icons/chevron_right-24px.svg";

const ListDataWarehouse = ({ data, url }) => {
	const id = data.id;
	return (
		<>
			<div className="card__content-wrapper">
				<div className="card__col-one">
					<div className="card__content-piece warehouse-label-1">
						<label className="card__label">Warehouse</label>
						<Link to={`warehouse/${id}`}>
							<div className="card__info-wrapper">
								<p className="card__info">{data.name}</p>
								<img className="card__arrow" src={cardInfoIcon} alt="warehouse info" />
							</div>
						</Link>
					</div>
					<div className="card__content-piece warehouse-label-2">
						<label className="card__label">Address</label>
						<p className="card__info">
							{data.address + ", " + data.city + ", " + data.country}
						</p>
					</div>
				</div>
				<div className="card__col-two">
					<div className="card__content-piece warehouse-label-3">
						<label className="card__label">Contact Name</label>
						<p className="card__info">{data.contact.name}</p>
					</div>
					<div className="card__content-piece warehouse-label-4">
						<label className="card__label">Contact Information</label>
						<p className="card__info">
							{data.contact.phone}
							<br />
							{data.contact.email}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ListDataWarehouse;
