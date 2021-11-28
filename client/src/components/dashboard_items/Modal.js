import React from "react";

function Modal({ title, handleCancel, handleDelete }) {


  return (
    <div className="modal">
      <div className="modal_inner">
        <h2>{title}</h2>
        <div>
          <button onClick={() => handleCancel()}>Cancel</button>
          <button onClick={handleDelete}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
