import React from "react";
import StarshipCard from "./StarshipCard";

function StarshipList({ starships }) {
  return (
    <div>
      <h2>Starships </h2>
      <h2>number of results :{starships.length} </h2>
      <div>
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </div>
    </div>
  );
}

export default StarshipList;
