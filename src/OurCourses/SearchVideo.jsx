// SearchVideo.jsx
import React, { useState } from 'react';

const SearchVideo = ({ keyword, handleChangeKeyword, keywordSuggestions, setKeywordSuggestions }) => {
  const completeKeyword = (suggestion) => {
    handleChangeKeyword(suggestion);
    clearKeywordSuggestions();
  };

  const clearKeywordSuggestions = () => {
    if (typeof setKeywordSuggestions === 'function') {
      setKeywordSuggestions([]);
    }

    // Anahtar kelimelerin olduğu li elementini seç
    const keywordListItems = document.querySelectorAll('.keyword-suggestions li');

    // Her bir li elementini dolaşarak display özelliğini none yap
    keywordListItems.forEach((item) => {
      item.style.display = 'none';
    });
  };

  return (
    <div>
      {/* Arama alanı */}
      <input
        className="input-inset"
        type="text"
        placeholder="Search"
        value={keyword}
        onChange={(e) => handleChangeKeyword(e.target.value)}
      />
      {/* Anahtar kelime önerileri */}
      {keyword && (
        <div className="keyword-suggestions">
          <ul>
            {keywordSuggestions
              .filter((suggestion) => suggestion.toLowerCase().startsWith(keyword.toLowerCase()))
              .map((suggestion, index) => (
                <li key={index} onClick={() => completeKeyword(suggestion)}>
                  {suggestion} {/* Düzgün capitalization */}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchVideo;
