const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// Warehouse APIs
export const GET_WAREHOUSES_API_URL = `${SERVER_URL}/warehouses`;
export const GET_SINGLE_WAREHOUSE_API_URL = (id) =>
  `${SERVER_URL}/warehouses/${id}`;

// Inventory APIs
export const GET_INVENTORIES_API_URL = `${SERVER_URL}/inventories`;
export const GET_SINGLE_INVENTORY_API_URL = (id) =>
  `${SERVER_URL}/inventories/${id}`;
export const GET_INVENTORY_BY_WAREHOUSE_API_URL = (id) =>
  `${SERVER_URL}/inventories/warehouse/${id}`;
