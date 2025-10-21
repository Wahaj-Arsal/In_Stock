/** @format */
const fs = require("fs");
const path = require("path");
const warehousesJSONPath = path.join(__dirname, "../data/warehouses.json");
let warehouses = require(warehousesJSONPath);

const readData = (path) => {
	return JSON.parse(fs.readFileSync(path));
};

const writeData = (item) => {
	fs.writeFileSync(warehousesJSONPath, JSON.stringify(item), "utf8", (err) => {
		if (err) {
			console.log("there has been an error in writing the data: ", err);
		}
	});
	console.log(`changes ${item} saved to file ${warehousesJSONPath}.`);
};

getAllWarehouses = () => warehouses;

getWarehouseById = (id) => {
	let warehouse = warehouses.find((warehouse) => id === warehouse.id);
	return [warehouse];
};

getWarehouseIDByName = (name) => {
	const currWarehouse = warehouses.find(
		(warehouse) => warehouse.warehouseName === name
	);
	return currWarehouse;
};

editWarehouse = (id, data) => {
	console.log("in the model");
	const readList = readData(warehousesJSONPath);
	const editedWarehouse = getWarehouseById(id);
	for (key in editedWarehouse) {
		if (key == "contact") {
			for (minikey in editedWarehouse[key]) {
				editedWarehouse[key][minikey] = data[key][minikey];
			}
		}
		if (editedWarehouse[key] !== data[key] && key !== "id") {
			editedWarehouse[key] = data[key];
		}
	}
	for (let i = 0; i < readList.length; i++) {
		if (readList[i].id == getWarehouseById(id).id) {
			readList.splice(i, 1);
			readList[i] = editedWarehouse;
		}
	}
	writeData(readList);
	return editedWarehouse;
};

module.exports = {
	getAllWarehouses,
	getWarehouseById,
	editWarehouse,
};
