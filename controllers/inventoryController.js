/** @format */

const inventory = require("../models/Inventory");
const warehouse = require("../models/Warehouse");

const listAllInventories = (_req, res) => {
	try {
		res.status(200).json(inventory.getAllInventories());
	} catch {
		res.status(400).json({
			errorMessage: "the list of inventories could not be retrieved.",
		});
	}
};

const listSingleInventory = (req, res) => {
	try {
		inventory.getSingleInventory(req.params.id);
		res.status(200).json(inventory.getSingleInventory(req.params.id));
	} catch {
		res
			.status(400)
			.json({ errorMessage: "the single inventory could not be found." });
	}
};

const postToInventoriesList = (req, res) => {
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
		postInventory(req.body);
		res
			.status(201)
			.json(`new inventory added to warehouse ${req.body.warehouseName}`);
	} catch {
		res
			.status(401)
			.json(`errorMessage: was not able to post to ${req.body.warehouseName}.`);
	}
};

const listInventoryByWarehouseId = (_req, res) => {
	try {
		res
			.status(200)
			.json(inventory.getInventoryByWarehouseId(_req.params.warehouseId));
	} catch {
		res.status(400).json({
			errorMessage: `Inventory with warehouseID: ${_req.params.warehouseId} not found`,
		});
	}
};

const deleteInventory = (req, res) => {
	try {
		const deletedInventories = inventory.deleteInventoryByID(req.params.id);
		res
			.status(201)
			.json(
				`${deletedInventories.itemName} in ${deletedInventories.warehouseName}, under id ${req.params.id}, has been deleted.`
			);
	} catch {
		res
			.status(401)
			.json(`was not able to delete ${req.params.id} from inventories list.`);
	}
};

const editInventoryByID = (req, res) => {
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
		console.log("in controller for editinventorybyID");
		const edit = inventory.editInventory(req.params.id, req.body);
		res
			.status(201)
			.json(`inventory ${edit.itemName} under ID ${req.params.id} edited`);
	} catch {
		res
			.status(401)
			.json(
				`errorMessage: was not able to edit ${req.body.itemName} (id is ${req.params.id}).`
			);
	}
};
module.exports = {
	listAllInventories,
	listSingleInventory,
	postToInventoriesList,
	editInventoryByID,
	listInventoryByWarehouseId,
	deleteInventory,
};
