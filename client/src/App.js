/** @format */

//IMPORT MODULES
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//IMPORT COMPONENTS
import Header from "./components/header/Header.jsx";
import Warehouse from "./components/Warehouse/Warehouse";
import WarehouseDetails from "./components/Warehouse/WarehouseDetails/WarehouseDetails.jsx";
import WarehouseEdit from "./components/Warehouse/WarehouseEdit/WarehouseEdit.jsx";
import WarehouseAddNew from "./components/Warehouse/warehouseAddNew/WarehouseAddNew.jsx";

import Inventory from "./components/Inventory/Inventory";
import InventoryItem from "./components/Inventory/InventoryItem/InventoryItem";
import InventoryEdit from "./components/Inventory/InventoryEdit/InventoryEdit";
import InventoryAddNew from "./components/Inventory/InventoryAddNew/InventoryAddNew";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Redirect from="/" exact to="/warehouse" />
        <Route
          path="/warehouse"
          exact
          render={(routerProps) => <Warehouse {...routerProps} />}
        />
        <Route
          path="/warehouse/add"
          exact
          render={(routerProps) => <WarehouseAddNew {...routerProps} />}
        />
        <Route
          path="/warehouse/:warehouseId"
          exact
          render={(routerProps) => <WarehouseDetails {...routerProps} />}
        />
        <Route
          path="/warehouse/:warehouseId/edit"
          exact
          render={(routerProps) => <WarehouseEdit {...routerProps} />}
        />
        <Route
          path="/inventory"
          exact
          render={(routerProps) => <Inventory {...routerProps} />}
        />
        <Route
          path="/inventory/:inventoryId/edit"
          render={(routerProps) => <InventoryEdit {...routerProps} />}
        />
        <Route
          path="/inventory/add"
          exact
          render={(routerProps) => <InventoryAddNew {...routerProps} />}
        />
        <Route
          path="/inventory/:inventoryId"
          exact
          render={(routerProps) => <InventoryItem {...routerProps} />}
        />
      </Switch>
    </>
  );
}
