/** @format */

//IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";
import "./ListHeader.scss";

//IMPORT COMPONENTS
import Searchbar from "../../Searchbar/Searchbar";

const ListHeader = ({ title, itemType, url }) => {
  console.log(url);
  return (
    <>
      <div className="header-container">
        <div className="list__header">
          <h1 className="list__title">{title}</h1>
          <div className="list__header-actions">
            <Searchbar />
            <Link to={`${url}/add`}>
              <div className="list__add-button">+ Add New {itemType}</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListHeader;
