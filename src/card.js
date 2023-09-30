import React, { useState } from "react";

const Card = ({ title, description, imageUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        {/* Image */}
        <img src={imageUrl} className="card-img-top" alt={title} />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button className="btn btn-primary" onClick={toggleModal}>
            Show Description
          </button>
        </div>
      </div>
      {/* Modal */}
      <div
        className={`modal ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
      >
        {/* Modal content */}
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Description</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={toggleModal}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{description}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
