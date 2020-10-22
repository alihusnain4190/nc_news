import React from 'react';

const Pagination = (props) => {
  const { page, atStart, atEnd, pages, changePage } = props;
  return (
<section>
          
      <button
        disabled={atStart}
        onClick={() => {
          changePage(page - 1);
        }}
      >
        {'<'}
      </button>
      {pages.map((singlePage) => (
        <button
          key={singlePage}
          onClick={() => {
            changePage(singlePage);
          }}
          className={page === singlePage ? 'button-background' : null}
        >
          {singlePage}
        </button>
      ))}
      <button
        disabled={atEnd}
        onClick={() => {
          changePage(page + 1);
        }}
      >
        {'>'}
          </button>
          
</section>
  );
};

export default Pagination;