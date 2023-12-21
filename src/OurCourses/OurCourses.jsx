import React, { useState, useEffect } from 'react';
import videoData from '../youtubeVideos.json';
import { FaFileDownload, FaPlay } from 'react-icons/fa';
import { MdClose } from "react-icons/md";
import DarkLightMode from './DarkLightMode';
import Filter from './Filter';
import Pagination from './Pagination';

const ViewModes = [1, 2, 3];
const VideosPerPage = 24;

const OurCourses = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Sayfa üzerindeki tüm stil değişiklikleri burada yapılır
    const filterBox = document.querySelector(".filter-row");
const navbarMain = document.querySelector(".navbar-main");
const listInlineItems = document.querySelectorAll(".list-inline-item a");

if (isDarkMode && navbarMain) { // navbarMain null değilse kontrolü eklendi
  document.body.style.color = '#bbbbbb';
  document.body.style.transition = '0.2s';
  document.body.style.backgroundColor = 'rgb(33 33 33)';
  navbarMain.style.backgroundColor = 'rgb(33 33 33)';
  navbarMain.style.transition = '0.2s';
  const filterItems = document.querySelectorAll(".filter-list-item");
  filterBox.style.boxShadow = "rgb(113, 106, 106) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px";

  filterItems.forEach(item => {
    item.style.color = '#bbbbbb';
  });

  listInlineItems.forEach(item => {
    item.style.color = '#bbbbbb';
  });
} else if (!isDarkMode && navbarMain) { // navbarMain null değilse kontrolü eklendi
  document.body.style.color = '';
  document.body.style.backgroundColor = '';
  filterBox.style.boxShadow = '';
  navbarMain.style.backgroundColor = '';

  listInlineItems.forEach(item => {
    item.style.color = '';
  });
    }
  }, [isDarkMode]);

  const categories = [
    'Tüm Dersler',
    'Matematik',
    'Geometri',
    'Fizik',
    'Kimya',
    'Türkçe',
    'Biyoloji',
    'Sosyal Bilimler',
    'Tarih',
  ];

  const [selectedCategory, setSelectedCategory] = useState('Tüm Dersler');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [downloadClicked, setDownloadClicked] = useState(false);
  const [viewMode, setViewMode] = useState(3);
  const [checkedModes, setCheckedModes] = useState([false, false, false]);
  const [selectedExamType, setSelectedExamType] = useState('');
  const [selectedPublisher, setSelectedPublisher] = useState('');
  const [selectedVideoType, setSelectedVideoType] = useState('');
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [keywordSuggestions, setKeywordSuggestions] = useState([]);

  useEffect(() => {
    // Anahtar kelime önerilerini oluştur
    const keywordSet = new Set();
    videoData.forEach((video) => {
      if (video.keyword) {
        const keywords = video.keyword.toLowerCase().split(',').map((keyword) => keyword.trim());
        keywords.forEach((keyword) => keywordSet.add(keyword));
      }
    });
    setKeywordSuggestions(Array.from(keywordSet));
  }, []);

  const handleCategoryClick = (category) => {
    // Eğer tıklanan kategori zaten seçili ise sıfırla, değilse kategoriyi seç
    setSelectedCategory((prevCategory) => (prevCategory === category ? 'Tüm Dersler' : category));
    closeVideo();
  };

  const handleViewModeClick = (mode) => {
    // Eğer tıklanan görünüm modu zaten seçili ise sıfırla, değilse görünüm modunu seç
    setViewMode((prevViewMode) => (prevViewMode === mode ? 3 : mode));

    // Eğer tıklanan görünüm modu zaten seçili ise checkbox rengini sıfırla
    if (viewMode === mode) {
      const newCheckedModes = [false, false, false];
      setCheckedModes(newCheckedModes);
    } else {
      // İlgili görünüm modunu işaretleyerek diğerlerini sıfırla
      const newCheckedModes = [false, false, false];
      newCheckedModes[mode - 1] = true; // Seçilen modu işaretle
      setCheckedModes(newCheckedModes);
    }
  };



  const handleExamTypeClick = (examType) => {
    // Eğer tıklanan sınav tipi zaten seçili ise sıfırla, değilse sınav tipini seç
    setSelectedExamType((prevExamType) => (prevExamType === examType ? '' : examType));
  };

  const handlePublisherClick = (publisher) => {
    // Eğer tıklanan yayınevi zaten seçili ise sıfırla, değilse yayınevini seç
    setSelectedPublisher((prevPublisher) => (prevPublisher === publisher ? '' : publisher));
  };

  const handleVideoTypeClick = (videoType) => {
    // Eğer tıklanan video türü zaten seçili ise sıfırla, değilse video türünü seç
    setSelectedVideoType((prevVideoType) => (prevVideoType === videoType ? '' : videoType));
  };

  const handleKeywordChange = (keyword) => {
    setSelectedKeyword(keyword);
  };

  const handlePdfDownload = async (pdfUrl, videoTitle) => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `${videoTitle}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // İndirme ikonuna tıklandığını işaretle
      setDownloadClicked(true);

      // Videoyu kapat
      closeVideo();
    } catch (error) {
      console.error('PDF indirme hatası:', error);
    }
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    if (downloadClicked) {
      // Eğer indirme ikonuna tıklandıysa video oynatma işlemini başlat
      // Video oynatma işlemi buraya eklenebilir
      // Örneğin: handleVideoClick(selectedVideo);

      // Ardından downloadClicked durumunu sıfırla
      setDownloadClicked(false);
    }
  }, [downloadClicked, selectedVideo]);

  // Video filtreleme işlemi
  const filteredVideos = videoData
    .filter((video) => selectedCategory === 'Tüm Dersler' || video.category === selectedCategory)
    .filter((video) => !selectedExamType || video.examp === selectedExamType)
    .filter((video) => !selectedPublisher || video.publisher === selectedPublisher)
    .filter((video) => !selectedVideoType || video.type === selectedVideoType)
    .filter((video) => !selectedKeyword || (video.keyword && video.keyword.toLowerCase().includes(selectedKeyword)));




  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Set the new page
    setCurrentPage(newPage);
  };

  const paginatedVideos = (() => {
    const startIndex = (currentPage - 1) * VideosPerPage;
    const endIndex = startIndex + VideosPerPage;
    return filteredVideos.slice(startIndex, endIndex);
  })();

  const totalPages = Math.ceil(filteredVideos.length / VideosPerPage);

  const videoUrl = selectedVideo?.url || 'default-url';

  return (
    <>
      <DarkLightMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="mx-5 m-auto">
        <div className="container">
          <div className="row new-filter-row mt-4">
            <Filter
              ViewModes={ViewModes}
              checkedModes={checkedModes}
              handleViewModeClick={handleViewModeClick}
              categories={categories}
              selectedCategory={selectedCategory}
              handleCategoryClick={handleCategoryClick}
              selectedExamType={selectedExamType}
              selectedPublisher={selectedPublisher}
              selectedVideoType={selectedVideoType}
              selectedKeyword={selectedKeyword}
              handleExamTypeClick={handleExamTypeClick}
              handlePublisherClick={handlePublisherClick}
              handleVideoTypeClick={handleVideoTypeClick}
              handleKeywordChange={handleKeywordChange}
              keywordSuggestions={keywordSuggestions}
            />
            <div className="col-lg-9">
              <div className="row">
              {paginatedVideos.map((video, index) => {
  // Video URL'si tanımlı değilse bu videoyu atla ve konsola yaz
  if (!video.url) {
    console.error(`Video URL not defined for video with ID: ${video.id}`);
    return null;
  }

  try {
    // URL'nin doğru bir şekilde bölünebilmesi için kontrol et
    const urlParts = video.url.split('/');
    if (urlParts.length < 5) {
      throw new Error('Invalid URL format');
    }

    // Video ID'sini al ve resim URL'sini oluştur
    const videoId = urlParts[4].split('?')[0];
    const imageUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

    return (
      <div className={`col-lg-${12 / viewMode} mb-4`} key={video.id}>
        <div className="ratio ratio-16x9 overflow-hidden rounded" onClick={() => handleVideoClick(video)}>
          <img
            src={imageUrl}
            alt={video.title}
            className="img-fluid"
            loading="lazy"
          />
          <div className='d-flex justify-content-center align-items-center'>
            <div className=''>
              <span className='fs-2 play-btn'>
                <FaPlay />
              </span>
            </div>
          </div>
        </div>
        {/* Video Altındaki Bilgiler */}
        <div className="video-info mt-3">
          <div className='d-flex justify-content-between video-desc-line'>
            <p className='video-category-name'>{video.category}</p>
            <p className='video-examp-name'>{video.examp}</p>
          </div>
          <div className='d-flex justify-content-between video-desc-line'>
            <p className='video-desc'>{video.desc}</p>
            {video.pdfUrl && (
              <div
                className=""
                onClick={() => handlePdfDownload(video.pdfUrl, video.title)}
              >
                <div>
                  <span className="fs-5 download-btn">
                    <FaFileDownload />
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(`Error processing video with ID ${video.id}: ${error.message}`);
    return null;
  }
})}


              </div>

              <hr className='style13' />

              <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />

            </div>
          </div>

          {selectedVideo && (
            <div
              className="centered-div"
              onClick={closeVideo}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ position: 'relative', width: '80%', height: '70%' }}>
                <iframe
                  title={selectedVideo.title}
                  width="100%"
                  height="100%"

                  src={`https://www.youtube.com/embed/${videoUrl.split('/')[4].split('?')[0]}`}

                  frameBorder="0"
                  allowFullScreen
                ></iframe>

              </div>
              <span className='position-absolute bottom-0 end-0 cursor-pointer m-2 fs-3 close-btn'
                onClick={closeVideo} >
                <MdClose />
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OurCourses;
