/** @format */

// const { builtinModules } = require("module");
const path = require("path");
const uniqid = require("uniqid");
const fs = require("fs");
const inventoriesJSONPath = path.join(__dirname, "../data/inventories.json");
let inventories = require(inventoriesJSONPath);
const warehousesJSONPath = path.join(__dirname, "../data/warehouses.json");
let warehouses = require(warehousesJSONPath);

const readData = (path) => {
	return JSON.parse(fs.readFileSync(path));
};

const writeData = (item) => {
	fs.writeFileSync(inventoriesJSONPath, JSON.stringify(item), "utf8", (err) => {
		if (err) {
			console.log("there has been an error in writing the data: ", err);
		}
	});
	console.log(`changes saved to file ${inventoriesJSONPath}.`);
};

const getAllInventories = () => {
	return inventories;
};

const getSingleInventory = (id) => {
	const currInventory = inventories.find((inventory) => inventory.id === id);
	return currInventory;
};

const getInventoryByWarehouseId = (id) => {
	let arr = inventories.filter((item) => item.warehouseID === id);
	return [arr];
};

const postInventory = (data) => {
	const readList = readData(inventoriesJSONPath);
	if (data.status === "0") {
		data.status = "Out of stock";
	} else if (data.status === "1") {
		data.status = "In stock";
	} else {
		return "Error: nothing in status, please fill in.";
	}
	const currWarehouse = warehouses.find(
		(warehouse) => warehouse.name === data.warehouseName
	);
	const newItem = {
		id: uniqid(),
		warehouseID: currWarehouse.id,
		...data,
	};
	readList.push(newItem);
	writeData(readList);
	return newItem;
};

const editInventory = (id, data) => {
	const readList = readData(inventoriesJSONPath);
	if (data.status === "0") {
		data.status = "Out of stock";
	} else if (data.status === "1") {
		data.status = "In stock";
	} else {
		return "Error: nothing in status, please fill in.";
	}
	const editedInventory = getSingleInventory(id);
	for (key in editedInventory) {
		if (
			editedInventory[key] !== data[key] &&
			key !== "id" &&
			key !== "warehouseID"
		) {
			editedInventory[key] = data[key];
		}
	}
	for (let i = 0; i < readList.length; i++) {
		if (readList[i].id == getSingleInventory(id).id) {
			readList.splice(i, 1);
			readList[i] = editedInventory;
		}
	}
	writeData(readList);
	return editedInventory;
};

const deleteInventoryByID = (id) => {
	const readList = readData(inventoriesJSONPath);
	const deletedInventory = getSingleInventory(id);
	for (let i = 0; i < readList.length; i++) {
		if (readList[i].id == getSingleInventory(id).id) {
			readList.splice(i, 1);
		}
	}
	writeData(readList);
	return deletedInventory;
};

module.exports = {
	getAllInventories,
	getSingleInventory,
	getInventoryByWarehouseId,
	postInventory,
	editInventory,
	deleteInventoryByID,
};
