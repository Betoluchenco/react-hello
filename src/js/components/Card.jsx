import React from "react";

const Card = ({ title, text, image }) => {
  return (
    <div className="col-md-3">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary mt-auto">Find out more!</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
