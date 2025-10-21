/** @format */

//IMPORT MODULES
import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { GET_INVENTORIES_API_URL } from "../../api/endpoints";

//IMPORT COMPONENTS
// import InventoryItem from "./InventoryItem/InventoryItem";
// import InventoryEdit from "./InventoryEdit/InventoryEdit";
// import InventoryAddNew from "./InventoryAddNew/InventoryAddNew";
import List from "../Utilities/List/List";
import ListDataInventory from "../Utilities/List/ListDataInventory/ListDataInventory";

const Inventory = (routerProps) => {
  const url = routerProps.match.url;
  console.log(url);
  return (
    <>
      <List
        title="Inventory"
        itemType="Item"
        apiUrl={GET_INVENTORIES_API_URL}
        url={url}
      />
    </>
  );
};

export default Inventory;
