/** @format */

import axios from "axios";
import React from "react";
import CloseIcon from "../../assets/icons/close-24px.svg";
import "./DeleteModal.scss";

export default function DeleteModal({ cardType, data, show, onClose, url }) {
  const handleDeleteWarehouse = () => {
    axios
      .delete(`http://localhost:5000/${data.id}`)
      .then(console.log("delete successfull") && onClose);
  };
  const handleDeleteInventoryItem = () => {
    axios
      .delete(`http://localhost:5000/${data.warehouseID}`)
      .then(console.log("delete successfull") && onClose);
  };
  if (!show) {
    return null;
  }
  return (
    <>
      {cardType === "Warehouses" && (
        <div className="modal">
          <div className="modal__section">
            <div className="modal__container">
              <button className="modal__button--close">
                <img src={CloseIcon} onClick={onClose} />
              </button>
              <div className="modal__content">
                <div className="modal__information">
                  <h1 className="modal__title">
                    Delete {`${data.name}`} warehouse?
                  </h1>
                  <p className="modal__confirmation">
                    Please confirm that you'd like to delete the{" "}
                    {`${data.name}`} from the list of warehouses. You won't be
                    able to undo this action
                  </p>
                </div>
                <div className="modal__buttons">
                  <button className="modal__button" onClick={onClose}>
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteWarehouse}
                    className="modal__button modal__button--delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {cardType === "Inventory" && (
        <div className="modal">
          <div className="modal__section">
            <div className="modal__container">
              <button className="modal__button--close">
                <img src={CloseIcon} onClick={onClose} />
              </button>
              <div className="modal__content">
                <div className="modal__information">
                  <h1 className="modal__title">
                    Delete {`${data.itemName}`} inventory item?
                  </h1>
                  <p className="modal__confirmation">
                    Please confirm that you'd like to delete{" "}
                    {`${data.itemName}`} from the list of warehouse. You won't
                    be able to undo this action
                  </p>
                </div>
                <div className="modal__buttons">
                  <button className="modal__button" onClick={onClose}>
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteInventoryItem}
                    className="modal__button modal__button--delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
