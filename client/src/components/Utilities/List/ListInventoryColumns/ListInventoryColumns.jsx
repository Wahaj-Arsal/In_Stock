import React from "react";

import "../ListCard/ListCard.scss";
// import "./ListWarehouseColumns.scss";
import sortIcon from "../../../../assets/icons/sort-24px.svg";

const ListInventoryColumns = () => {
	return (
		<div className="card__columns-wrapper">
			<div className="card__columns-warehouse">
				<div className="card__col-one">
					<div className="inventory-label-1 card__col-content">
						<label className="card__col-label">Inventory Item</label>
						<img src={sortIcon} alt="sort" className="card__col-sort-arrows" />
					</div>
					<div className="inventory-label-2 card__col-content">
						<label className="card__col-label">Category</label>
						<img src={sortIcon} alt="sort" className="card__col-sort-arrows" />
					</div>
				</div>
				<div className="card__col-two">
					<div className="inventory-label-3 card__col-content">
						<label className="card__col-label">Status</label>
						<img src={sortIcon} alt="sort" className="card__col-sort-arrows" />
					</div>
					<div className="inventory-label-4 card__col-content">
						<label className="card__col-label">QTY</label>
						<img src={sortIcon} alt="sort" className="card__col-sort-arrows" />
					</div>
					<div className="inventory-label-5 card__col-content">
						<label className="card__col-label">Warehouse</label>
						<img src={sortIcon} alt="sort" className="card__col-sort-arrows" />
					</div>
				</div>
			</div>
			<label className="card__col-label card__actions-label">Actions</label>
		</div>
	);
};

export default ListInventoryColumns;
