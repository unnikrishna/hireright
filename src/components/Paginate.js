import React, { useState } from "react";

function Paginate({ totalPage, setPage,currentPage }) {
  const handlePageSelect = (page) => {
    setPage((pre) => {
      return { ...pre, currentPage: page };
    });
  };
  return (
    <>
      <div className="flex gap-2 justify-center mt-5">
        {[...Array(totalPage).keys()].map((page) => {
          return (
            <span
              onClick={() => handlePageSelect(page + 1)}
              className={`border-[1px] border-blue-400 p-2 cursor-pointer ${
                currentPage - 1 === page ? " bg-blue-200 text-white" : " "
              }`}
              key={`page_${page}`}
            >
              {page + 1}
            </span>
          );
        })}
      </div>
      <button
        onClick={() => handlePageSelect(currentPage + 1)}
        className="p-2 bg-blue-300 text-white rounded-md mt-4"
      >
        Next Page
      </button>
    </>
  );
}

export default Paginate;
