/** @format */

//IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";
import "./ListCard.scss";

//IMPORT COMPONENTS
import ListDataInventory from "../ListDataInventory/ListDataInventory";

//IMPORT ASSETS
import deleteIcon from "../../../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../../../assets/icons/edit-24px.svg";

const ListCardWarehouseInventory = ({ cardType, cardIndex, data, url }) => {
  const id = data.id;

  return (
    <>
      {/* Conditional rendering for the first card
			and smaller inventory cards (for styling)*/}
      <div className="card card__small">
        <ListDataInventory data={data} url={url} />
        <div className="card__actions">
          <Link to={`${url}/${id}/delete`}>
            <img src={deleteIcon} alt="delete" />
          </Link>
          <Link to={`inventory/${id}/edit`}>
            <img src={editIcon} alt="edit" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ListCardWarehouseInventory;
