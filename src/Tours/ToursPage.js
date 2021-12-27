import './Tours.css';
import Tour from "./tour"
import React from 'react';

function ToursPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Our Tours</h2>
      </header>
      <Tour />
    </div>
  );
}

export default ToursPage;
