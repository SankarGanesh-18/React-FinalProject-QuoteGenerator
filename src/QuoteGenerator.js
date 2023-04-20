import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import './Quotes.css';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const navigate = useNavigate();

  const generateQuote = () => {
    // Fetch quote from API
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data.content))
      .catch(error => console.error(error));
  };

  const handleGoToFavourites = () => {
    navigate(`/favourites?quote=${encodeURIComponent(quote)}`);
  };

  return (
    <div className="input-page">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <Typewriter
      options={{
        strings: [
          "Hi...",
          "Welcome to Quotopia",
          "Use of Quotes in our life is for inspiration and motivation.",
          "Quotes can also be used for reflection and self-awareness.",
          "Quotes can be used for communication and expression.",
          "Hence, quotes have a major role in a Human's life."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
      }}
    />
      <div className="quote-container">
        <p className="quote-text">{quote}</p>
        <button className="generate-button" onClick={generateQuote}>
          Generate Quote
        </button>
      </div>
      {quote && (
        <div className="favourites-button-container">
          <button className="favourites-button" onClick={handleGoToFavourites}>
            Add to Favourites
          </button>
        </div>
      )}
    </div>
  );
};

export default Quotes;
