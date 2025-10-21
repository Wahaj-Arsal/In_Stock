import React from "react";

import "../ListCard/ListCard.scss";
import "./ListWarehouseColumns.scss";
import sortIcon from "../../../../assets/icons/sort-24px.svg";

const ListWarehouseColumns = () => {
	return (
		<div className="card__columns-wrapper">
			<div className="card__columns-warehouse">
				<div className="card__col-one">
					<div className="warehouse-label-1 card__col-content">
						<label className="card__col-label">Warehouse</label>
						<img src={sortIcon} alt="sort" className="card__col-sort-arrows" />
					</div>
					<div className="warehouse-label-2 card__col-content">
						<label className="card__col-label">Address</label>
						<img src={sortIcon} alt="sort" className="card__col-sort-arrows" />
					</div>
				</div>
				<div className="card__col-two">
					<div className="warehouse-label-3 card__col-content">
						<label className="card__col-label">Contact Name</label>
						<img src={sortIcon} alt="sort" className="card__col-sort-arrows" />
					</div>
					<div className="warehouse-label-4 card__col-content">
						<label className="card__col-label">Contact Information</label>
						<img src={sortIcon} alt="sort" className="card__col-sort-arrows" />
					</div>
				</div>
			</div>
			<label className="card__col-label card__actions-label">Actions</label>
		</div>
	);
};

export default ListWarehouseColumns;
