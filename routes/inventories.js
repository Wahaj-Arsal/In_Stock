/** @format */
const router = require("express").Router();
const inventoriesController = require("../controllers/inventoryController");

// responds with an array of all inventories
router.get("/", inventoriesController.listAllInventories);
router.delete("/:inventoryId", inventoriesController.deleteInventory);
// responds with a single inventory
router.get("/:id", inventoriesController.listSingleInventory);
router.put("/:id/edit", inventoriesController.editInventoryByID);
router.post("/add", inventoriesController.postToInventoriesList);
router.delete("/:id", inventoriesController.deleteInventory);
// responds with the inventory of a warehouse by its warehouseID
router.get(
  "/warehouse/:warehouseId",
  inventoriesController.listInventoryByWarehouseId
);
// Add additional get requests here

module.exports = router;
