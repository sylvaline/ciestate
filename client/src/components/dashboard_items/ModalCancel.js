import React from "react";

function ModalCancel({ title, handleCancel, handleDelete }) {


  return (
    <div className="modal_cancel">
      <div className="modal_cancel_inner">
        <h2>{title}</h2>
        <div className="modal_btn">
          <button className="blue" onClick={() => handleCancel()}>Cancel</button>
          <button  className="red" onClick={handleDelete}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default ModalCancel;
