import React from "react";

function Item(props) {
  return (
    <li className="justify-content-between align-items-center d-flex p-2 m-2 bg-light shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div className="p-3">{props.txt}</div>
      <button
        className="btn btn-danger p-2 h-50"
        onClick={() => props.delItem(props.id)}
      >
        Supprimer
      </button>
    </li>
  );
}

export default Item;
