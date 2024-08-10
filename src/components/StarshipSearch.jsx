import React, { useState } from "react";

function StarshipSearch({ n }) {
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
        value={query}
        name="search"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a starship..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default StarshipSearch;
