import React from "react";

const Modal = ({show, handleClose, children}) => {

  const visibilityClass = show ? "modal display-block" : "modal display-none";

  return(
    <div className={visibilityClass}>
      <section className="modal-main">
        <section className="modal-header">
          {children[0]}
        </section>
        <section className="modal-content">
          {children[1]}
        </section>
        <section className="modal-footer">
          <button onClick={handleClose}>Close</button>
        </section>
      </section>
    </div>
  )

}

export default Modal;