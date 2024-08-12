
import React, { useState } from "react";

function StarshipSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">search term:</label>
      <input
        type="text"
        value={query.name}
        name="search"
        onChange={(e) => setQuery(e.target.value)}
       
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default StarshipSearch;
