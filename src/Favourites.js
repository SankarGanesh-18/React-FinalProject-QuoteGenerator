import React, { useState, useEffect } from 'react';
import './Favourites.css';
import { useParams, useLocation } from 'react-router-dom';

const Favourites = () => {
  const { quote: quoteFromUrl } = useParams();
  const { search } = useLocation();
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    // Load saved quotes from local storage on component mount
    const savedQuotesFromLocalStorage = localStorage.getItem('savedQuotes');
    if (savedQuotesFromLocalStorage) {
      setSavedQuotes(JSON.parse(savedQuotesFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    // Retrieve quote from URL parameter
    const searchParams = new URLSearchParams(search);
    const quoteFromUrlParam = searchParams.get('quote');
    if (quoteFromUrlParam) {
      setQuote(quoteFromUrlParam);
    }
  }, [search]);

  const saveQuote = () => {
    if (quote) {
      // Add quote to savedQuotes array
      const updatedQuotes = [...savedQuotes, quote];
      setSavedQuotes(updatedQuotes);

      // Save updated quotes to local storage
      localStorage.setItem('savedQuotes', JSON.stringify(updatedQuotes));
    }
  };

  const handlePageRefresh = () => {
    // Delete all saved quotes when page is refreshed
    setSavedQuotes([]);
    localStorage.removeItem('savedQuotes');
  };

  useEffect(() => {
    // Add event listener for page refresh
    window.addEventListener('beforeunload', handlePageRefresh);
    return () => {
      // Remove event listener on component unmount
      window.removeEventListener('beforeunload', handlePageRefresh);
    };
  }, []);

  return (
    <div className='result-page'>
  <br></br>
  <br></br>
  <br></br>
  {quote && <button onClick={saveQuote}>Save Quote</button>}
  <br></br>
  <br></br>
  <br></br>
  {savedQuotes.length > 0 && (
    <div className='saved-quotes-list'>
      <ul>
        {savedQuotes.map((savedQuote, index) => (
          <li key={index}>{savedQuote}</li>
        ))}
      </ul>
    </div>
  )}
</div>

  );
};

export default Favourites;
