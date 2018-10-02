import React from "react";

const Modal = ({show, handleClose, children}) => {

  const visibilityClass = show ? "modal display-block" : "modal display-none";

  return(
    <div className={visibilityClass}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  )

}

export default Modal;