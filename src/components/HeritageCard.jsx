import React from "react";
import "../App.css";

function HeritageCard({ name, location, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{location}</p>
    </div>
  );
}

export default HeritageCard;