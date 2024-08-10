import React from 'react';

function StarshipCard({ starship }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <h3>{starship.name}</h3>
      <p><strong>Class:</strong> {starship.starship_class}</p>
      <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
      <p><strong>Model:</strong> {starship.model}</p>
    </div>
  );
}

export default StarshipCard;
