/** @format */

const warehouse = require("../models/Warehouse");
const inventories = require("../models/Inventory");

const listAllWarehouses = (_req, res) => {
	try {
		res.status(200).json(warehouse.getAllWarehouses());
	} catch {
		res.status(400).json({ error: `Warehouses Not Found` });
	}
};

const listWarehouseAndInventoryById = (_req, res) => {
	try {
		let warehouses = warehouse.getWarehouseById(_req.params.warehouseId);
		let inventory = inventories.getInventoryByWarehouseId(
			_req.params.warehouseId
		);
		let newWarehouse = warehouses.concat(inventory);
		res.status(200).json(newWarehouse);
	} catch {
		res.status(400).json({
			error: `Warehouse with ID ${_req.params.warehouseId} not found`,
		});
	}
};

const editWarehouseByID = (req, res) => {
	try {
		for (const key in req.body) {
			if (req.body[key] == "") {
				res
					.status(401)
					.json(
						`errorMessage: have not posted to warehouse as ${key} doesn't have an input`
					);
			}
		}
		const edit = editWarehouse(req.params.warehouseId, req.body);
		res
			.status(201)
			.json(`warehouse ${edit.name} under ID ${req.params.warehouseId} edited`);
	} catch {
		res
			.status(401)
			.json(
				`errorMessage: was not able to edit ${req.body.itemName} (id is ${req.params.warehouseId}).`
			);
	}
};

module.exports = {
	listAllWarehouses,
	listWarehouseAndInventoryById,
	editWarehouseByID,
};
