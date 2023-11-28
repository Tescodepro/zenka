import React from "react";
import Link from "next/link";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Calculate the range of page numbers to display
  const range = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <ul className="pagination">
      {range.map((page) => (
        <li
          key={page}
          className={`pagination-item ${currentPage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          <Link href={`/blog?page=${page}`}>
             <span>{page}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
