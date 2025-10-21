/** @format */

//IMPORT MODULES
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./List.scss";
import "../Footer/Footer.scss";

//IMPORT COMPONENTS
import ListHeader from "./ListHeader/ListHeader";
import SingleItemHeader from "../SingleItemHeader/SingleItemHeader";
import ListCard from "./ListCard/ListCard";
import ListCardWarehouseInventory from "./ListCard/ListCardWarehouseInventory";
import ListWarehouseColumns from "./ListWarehouseColumns/ListWarehouseColumns";
import ListInventoryColumns from "./ListInventoryColumns/ListInventoryColumns";
import WarehouseCard from "./WarehouseCard/WarehouseCard";

const List = ({ title, itemType, apiUrl, url, path }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => setData(res.data))
      .catch(() => {
        console.log("Trouble connecting with the server");
        return (
          <>
            <div className="list-error">
              We apologise. There has been a problem retrieving the data.
            </div>
          </>
        );
      });
  }, [apiUrl]);

  // Error message if the data could not be loaded
  useEffect(() => {
    data.length === 0 && (
      <div className="list__error">
        We apologise. There has been a problem retrieving the data.
      </div>
    );
  }, [data]);

  return (
    <div className="footer">
      <div className="list__container">
        {/* Conditional render depending on type of list */}
        {/* Specifies a title e.g. Warehouses and an item type e.g. warehouse */}
        {path === "/warehouse/:warehouseId" ? (
          <>
            <SingleItemHeader data={data[0]} path={path} url={url} />
            <WarehouseCard data={data[0]} />
          </>
        ) : (
          <ListHeader title={title} itemType={itemType} url={url} />
        )}

        {/* Conditional import of Column Names */}
        {title === "Warehouses" && <ListWarehouseColumns />}
        {title === "Inventory" && <ListInventoryColumns />}

        {/* Creates a card for every item */}
        {data.length > 0 && path === "/warehouse/:warehouseId"
          ? data[1].map((dataItem, cardIndex) => (
              <ListCardWarehouseInventory
                key={data.id}
                cardIndex={cardIndex}
                cardType={title}
                data={dataItem}
                url={url}
              />
            ))
          : data.map((dataItem, cardIndex) => (
              <ListCard
                key={data.id}
                cardIndex={cardIndex}
                cardType={title}
                data={dataItem}
                url={url}
              />
            ))}
      </div>
      <div className="footer__text">© InStock Inc. All Rights Reserved.</div>
    </div>
  );
};

export default List;
