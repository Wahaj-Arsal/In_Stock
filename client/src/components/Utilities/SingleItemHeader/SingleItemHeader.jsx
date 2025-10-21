/** @format */

//IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

//IMPORT COMPONENTS
import "../List/ListHeader/ListHeader.scss";
import "./SingleItemHeader.scss";
import "../../Warehouse/warehouseAddNew/WarehouseAddNew.scss";
import backArrow from "../../../assets/icons/arrow_back-24px.svg";
import edit from "../../../assets/icons/edit-24px.svg";

const SingleItemHeader = ({ data, path, url }) => {
  let newPath;
  if (path === "/warehouse/:warehouseId") {
    newPath = "/warehouse";
  } else {
    newPath = "/inventory";
  }

  // console.log(path);

  if (data) {
    const title = data.name || data.itemName;
    return (
      <>
        <div className="header-container list__header item-header">
          <div className="item-header__wrapper">
            <Link to={`${newPath}`}>
              <img src={backArrow} alt="back" className="item-header__icon" />
            </Link>
            <h1 className="list__title item-header__title">{title}</h1>
          </div>

          <Link to={`${newPath}/${data.id}/edit`}>
            <img
              src={edit}
              alt="edit"
              className="item-header__icon item-header__edit-icon"
            />
          </Link>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default SingleItemHeader;
