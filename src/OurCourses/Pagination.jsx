import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <nav aria-label="Page navigation" className="d-flex justify-content-center mt-4">
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="page-item">
            <span className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
              «
            </span>
          </li>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
            <span className="page-link" onClick={() => handlePageChange(page)}>
              {page}
            </span>
          </li>
        ))}
        {currentPage < totalPages && (
          <li className="page-item">
            <span className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
              »
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
