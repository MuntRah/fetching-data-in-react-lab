import React from "react";

function StarshipCard({ starship }) {
  return (
    <section>
      <div className="cards">
        <h3>{starship.name}</h3>
        <p>
          <strong>Class:</strong> {starship.starship_class}
        </p>
        <p>
          <strong>Manufacturer:</strong> {starship.manufacturer}
        </p>
        <p>
          <strong>Model:</strong> {starship.model}
        </p>
      </div>
    </section>
  );
}

export default StarshipCard;
