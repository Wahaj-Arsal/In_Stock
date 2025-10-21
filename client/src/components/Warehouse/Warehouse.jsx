/** @format */

//IMPORT MODULES
import React from "react";
import { Route, Switch } from "react-router-dom";
import { GET_WAREHOUSES_API_URL } from "../../api/endpoints";

//IMPORT COMPONENTS
// import WarehouseAddNew from "./WarehouseAddNew/WarehouseAddNew";
// import WarehouseDetails from "./WarehouseDetails/WarehouseDetails";
// import WarehouseEdit from "./WarehouseEdit/WarehouseEdit";
// import Header from "../Header/Header";
import List from "../Utilities/List/List";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

const Warehouse = (routerProps) => {
  const url = routerProps.match.url;
  //   const url = urlRouter + "/warehouse";
  console.log(SERVER_URL);
  console.log(SERVER_PORT);
  return (
    <>
      {/* <Switch>
				<Route
					path={`${url}/:warehouseId`}
					exact
					render={(routerProps) => <WarehouseDetails {...routerProps} />}
				/>
				<Route
					path={`${url}/:warehouseId/delete`}
					exact
					render={(routerProps) => <WarehouseDetails {...routerProps} />}
				/>
				<Route
					path={`${url}/:warehouseId/edit`}
					exact
					render={(routerProps) => <WarehouseEdit {...routerProps} />}
				/>
				<Route
					path={`${url}/add-new`}
					exact
					render={(routerProps) => (
						<WarehouseAddNew
							{...routerProps}
							handleSubmit={this.handleSubmit}
						/>
					)}
				/>
			</Switch> */}
      <List
        title="Warehouses"
        itemType="Warehouse"
        apiUrl={GET_WAREHOUSES_API_URL}
        url={url}
        // urlRouter={urlRouter}
      />
    </>
  );
};

export default Warehouse;
