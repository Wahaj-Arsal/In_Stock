import { GET_SINGLE_INVENTORY_API_URL } from "../../../api/endpoints";
import React, { useState, useEffect } from "react";
import axios from "axios";

import SingleItemHeader from "../../Utilities/SingleItemHeader/SingleItemHeader";
import "../../Utilities/SingleItemHeader/SingleItemHeader.scss";
import "../../Utilities/List/ListCard/ListCard.scss";
import "./InventoryItem.scss";

const InventoryItem = (routerProps) => {
	const [data, setData] = useState([]);

	const id = routerProps.match.params.inventoryId;
	console.log(id);

	useEffect(() => {
		axios
			.get(GET_SINGLE_INVENTORY_API_URL(id))
			.then(console.log(id))
			.then((res) => setData(res.data))
			.catch(() => {
				console.log("Trouble connecting with the server");
				return (
					<>
						<div className="list-error">
							We apologise. There has been a problem retrieving the data.
						</div>
					</>
				);
			});
	}, [id]);

	console.log(data);

	return (
		<>
			<SingleItemHeader data={data} />
			<div className="inventory-item">
				<div className="inventory-item__wrapper">
					<div className="inventory-item__container-1">
						<div className="card__content-piece inventory-item__label-1">
							<label className="inventory-item__label">
								item description:{" "}
							</label>
							<p className="card__info">{data.description}</p>
						</div>
						<div className="card__content-piece inventory-item__label-2">
							<label className="inventory-item__label">category:</label>
							<p className="card__info">{data.category}</p>
						</div>
					</div>
					<hr className="inventory-item__divider" />
					<div className="inventory-item__container-2">
						<div className="card__content-piece inventory-item__label-3">
							<label className="inventory-item__label">status:</label>
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
						<div className="card__content-piece inventory-item__label-4">
							<label className="inventory-item__label">quantity:</label>
							<p className="card__info">{data.quantity}</p>
						</div>
						<div className="card__content-piece inventory-item__label-5">
							<label className="inventory-item__label">warehouse</label>
							<p className="card__info">{data.warehouseName}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default InventoryItem;
