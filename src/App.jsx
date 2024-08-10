import React, { useState, useEffect } from "react";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import { getStarships, searchStarships } from "./services/starshipService";
import "./App.css"; // Add this line to import the styles

function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStarships() {
      const data = await getStarships();
      setStarships(data);
      setLoading(false);
    }

    fetchStarships();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    const data = await searchStarships(query);
    setStarships(data);
    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>Star Wars API</h1>
      <h2>Serach</h2>
      <StarshipSearch onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <StarshipList starships={starships} />}
    </div>
  );
}

export default App;
