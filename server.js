/** @format */
"use strict";

require("dotenv").config();
const uniqid = require("uniqid");
const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

const warehouseRouter = require("./routes/warehouses");
const inventoryRouter = require("./routes/inventories");

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

app.use(cors());

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    `${process.env.REACT_APP_CLIENT_KEY}`
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.use("/warehouses", warehouseRouter);

app.use("/inventories", inventoryRouter);

app.get("/randomId", (req, res) => {
  const newId = uniqid();
  res.send(newId);
});

//******** API To POST/CREATE A Warehouse ******** */
app.post("/warehouse/add-new", (req, res) => {
  const newWarehouse = {
    id: uniqid(),
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    contact: {
      name: req.body.contact.name,
      position: req.body.contact.position,
      phone: req.body.contact.phone,
      email: req.body.contact.email,
    },
  };
  const warehouseContent = JSON.parse(
    fs.readFileSync("./data/warehouses.json")
  );
  warehouseContent.push(newWarehouse);
  fs.writeFileSync("./data/warehouses.json", JSON.stringify(warehouseContent));
  res.status(201).json(newWarehouse);
});

//******** API To POST/CREATE A Warehouse ******** */
app.get("/:warehouseId", (req, res) => {
  const warehouseId = req.params.warehouseId;
  const fileContent = JSON.parse(fs.readFileSync("./data/warehouses.json"));
  for (let i = 0; i < fileContent.length; i++) {
    if (fileContent[i].id == warehouseId) {
      res.status(200).send(fileContent[i]);
    }
  }
});

app.delete("/:warehouseId", (req, res) => {
  const warehouseId = req.params.warehouseId;
  const warehouseContent = JSON.parse(
    fs.readFileSync("./data/warehouses.json")
  );
  const inventoryItems = JSON.parse(fs.readFileSync("./data/inventories.json"));
  const filteredWarehouses = warehouseContent.filter(
    (warehouses) => warehouses.id !== warehouseId
  );
  // console.log(filteredWarehouses);
  const filteredInventory = inventoryItems.filter(
    (inventory) => inventory.warehouseID !== warehouseId
  );
  // console.log(filteredInventory);

  fs.writeFileSync(
    "./data/warehouses.json",
    JSON.stringify(filteredWarehouses),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  res.status(200).json(filteredWarehouses);

  fs.writeFileSync(
    "./data/inventories.json",
    JSON.stringify(filteredInventory),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  res.status(200).json(filteredInventory);
});
