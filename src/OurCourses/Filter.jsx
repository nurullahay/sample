import React, { useState } from 'react';
import { MdFilterList } from "react-icons/md";

const Filter = ({
  ViewModes,
  checkedModes,
  handleViewModeClick,
  categories,
  selectedCategory,
  handleCategoryClick,
  selectedExamType,
  selectedPublisher,
  selectedVideoType,
  selectedKeyword,
  handleExamTypeClick,
  handlePublisherClick,
  handleVideoTypeClick,
  handleKeywordChange,
  selectedKeyword: keyword,
  handleKeywordChange: handleChangeKeyword,
  keywordSuggestions,
  setKeywordSuggestions,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const completeKeyword = (suggestion) => {
    handleChangeKeyword(suggestion);
    clearKeywordSuggestions();
  };

  const clearKeywordSuggestions = () => {
    if (typeof setKeywordSuggestions === 'function') {
      setKeywordSuggestions([]);
    }

    const keywordListItems = document.querySelectorAll('.keyword-suggestions li');
    keywordListItems.forEach((item) => {
      item.style.display = 'none';
    });
  };

  return (
    <div className={`col-lg-3 filter-row ${isFilterOpen ? 'open' : ''}`}>
      <div className="filter-button-container mb-3">
        <button className="filter-button w-100 d-flex align-items-center text-white" onClick={toggleFilters}>
        <span className="ms-3">Filtrele</span>
          <MdFilterList  className="ms-auto me-3 fs-3"/>
        </button>
      </div>
      <div className='ps-3 pe-3'>
        <input
          className="input-inset"
          type="text"
          placeholder="Arama"
          value={keyword}
          onChange={(e) => handleChangeKeyword(e.target.value.toLowerCase())}
        />
        {keyword && (
          <div className="keyword-suggestions">
            <ul>
              {keywordSuggestions
                .filter((suggestion) => suggestion.toLowerCase().startsWith(keyword.toLowerCase()))
                .map((suggestion, index) => (
                  <li key={index} onClick={() => completeKeyword(suggestion)}>
                    {suggestion.charAt(0).toUpperCase() + suggestion.slice(1).toLowerCase()}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <hr />
      <div className="accordion pb-2">
        {/* Categories */}
        <div className="tab">
          <input type="checkbox" name="accordion-1" className='unwanted-checkbox' id="categoryTab"  style={{ position: "absolute" }} defaultChecked/>
          <label htmlFor="categoryTab" className="tab__label">
            Derse Göre
          </label>
          <div className="tab__content">
            <div className="category-filter justify-content-between">
              <ul>
                {categories.map((category) => (
                  <li className='filter-list-item' key={category} onClick={() => handleCategoryClick(category)}>
                    <input
                      type="checkbox"
                      checked={selectedCategory === category}
                      readOnly
                      style={{
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                        border: '1px solid #999',
                        width: '15px',
                        height: '15px',
                        borderRadius: '3px',
                        marginRight: '5px',
                        backgroundColor: selectedCategory === category ? '#6c51c2' : '',
                      }}
                    />
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <hr />
        {/* View Modes */}
        <div className="tab filter-view-item">
          <input type="checkbox" name="accordion-1" id="viewModeTab" className='unwanted-checkbox'/>
          <label htmlFor="viewModeTab" className="tab__label">
            Görünüme Göre
          </label>
          <div className="tab__content">
            <ul className="category-filter justify-content-between">
              {ViewModes.map((mode, index) => (
                <li className='filter-list-item' key={mode} onClick={() => handleViewModeClick(mode)}>
                  <input
                    type="checkbox"
                    readOnly
                    checked={checkedModes[index]}
                    style={{
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      MozAppearance: 'none',
                      border: '1px solid #999',
                      width: '15px',
                      height: '15px',
                      borderRadius: '3px',
                      marginRight: '5px',
                      backgroundColor: checkedModes[index] ? '#6c51c2' : '',
                    }}
                  />

                  {mode}'lü Video Görünümü
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="filter-view-item" />

        {/* Exam Type */}
        <div className="tab">
          <input type="checkbox" name="accordion-1" className='unwanted-checkbox' id="examTypeTab" />
          <label htmlFor="examTypeTab" className="tab__label">
            Sınava Göre Filtreleme
          </label>
          <div className="tab__content">
            <ul className="category-filter justify-content-between">
              {['TYT', 'AYT'].map((examType) => (
                <li key={examType} onClick={() => handleExamTypeClick(examType)}>
                  <input
                    type="checkbox"
                    readOnly
                    checked={selectedExamType === examType}
                    style={{
                      // Styles for the checkbox...
                      appearance: 'none',
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                        border: '1px solid #999',
                        width: '15px',
                        height: '15px',
                        borderRadius: '3px',
                        marginRight: '5px',
                        backgroundColor: selectedExamType === examType ? '#6c51c2' : '',
                    }}
                  />
                  {examType}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr />

        {/* Publisher */}
        <div className="tab">
          <input type="checkbox" name="accordion-1" className='unwanted-checkbox' id="publisherTab" />
          <label htmlFor="publisherTab" className="tab__label">
            Yayınevine Göre Filtreleme
          </label>
          <div className="tab__content">
            <ul className="category-filter justify-content-between">
              {['EİS Yayınları', 'Özdebir Yayınları', 'Töder Yayınları', 'Tandem Yayınları'].map((publisher) => (
                <li key={publisher} onClick={() => handlePublisherClick(publisher)}>
                  <input
                    type="checkbox"
                    readOnly
                    checked={selectedPublisher === publisher}
                    style={{
                        // Styles for the checkbox...
                        appearance: 'none',
                          WebkitAppearance: 'none',
                          MozAppearance: 'none',
                          border: '1px solid #999',
                          width: '15px',
                          height: '15px',
                          borderRadius: '3px',
                          marginRight: '5px',
                          backgroundColor: selectedPublisher === publisher ? '#6c51c2' : '',
                      }}
                  />
                  {publisher}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr />

        {/* Video Type */}
        <div className="tab">
          <input type="checkbox" name="accordion-1" className='unwanted-checkbox' id="videoTypeTab" />
          <label htmlFor="videoTypeTab" className="tab__label">
            Video Türüne Göre
          </label>
          <div className="tab__content">
            <ul className="category-filter justify-content-between">
              {['Soru Çözümü', 'Konu Anlatımı'].map((videoType) => (
                <li key={videoType} onClick={() => handleVideoTypeClick(videoType)}>
                  <input
                    type="checkbox"
                    readOnly
                    checked={selectedVideoType === videoType}
                    style={{
                        // Styles for the checkbox...
                        appearance: 'none',
                          WebkitAppearance: 'none',
                          MozAppearance: 'none',
                          border: '1px solid #999',
                          width: '15px',
                          height: '15px',
                          borderRadius: '3px',
                          marginRight: '5px',
                          backgroundColor: selectedVideoType === videoType ? '#6c51c2' : '',
                      }}
                  />
                  {videoType}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Other Filter Sections... */}
      </div>
    </div>
  );
};

export default Filter;


