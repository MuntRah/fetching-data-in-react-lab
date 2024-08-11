import React from "react";
import StarshipCard from "./StarshipCard";

function StarshipList({ starships }) {
  return (
    <section>
      <h2>Starships </h2>
      <h2>number of results :{starships.length} </h2>

      <ul>
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
         </ul>
      </section>
   
  );
}

export default StarshipList;
