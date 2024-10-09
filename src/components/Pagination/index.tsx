import PaginationProps from 'src/mytypes/PaginationProps';

import { ArrowButton, PageButton, PaginationWrapper } from './styled';

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PageButton
            key={i}
            $active={i === currentPage}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </PageButton>
        );
      }
    } else {
      if (currentPage > 3) {
        pages.push(
          <PageButton key={1} onClick={() => handlePageClick(1)}>
            1
          </PageButton>
        );
        if (currentPage > 4) {
          pages.push(<span key="dots-start">...</span>);
        }
      }
      for (
        let i = Math.max(1, currentPage - 2);
        i <= Math.min(totalPages, currentPage + 2);
        i++
      ) {
        pages.push(
          <PageButton
            key={i}
            $active={i === currentPage}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </PageButton>
        );
      }
      if (currentPage < totalPages - 2) {
        if (currentPage < totalPages - 3) {
          pages.push(<span key="dots-end">...</span>);
        }
        pages.push(
          <PageButton
            key={totalPages}
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </PageButton>
        );
      }
    }
    return pages;
  };

  const beforeArrowButtonClickHandler = () => {
    handlePageClick(currentPage - 1);
  };

  const afterArrowButtonClickHandler = () => {
    handlePageClick(currentPage + 1);
  };

  return (
    <PaginationWrapper role="pagination">
      <ArrowButton
        onClick={beforeArrowButtonClickHandler}
        disabled={currentPage === 1}
      >
        &lt;
      </ArrowButton>
      {renderPageNumbers()}
      <ArrowButton
        onClick={afterArrowButtonClickHandler}
        disabled={currentPage === totalPages}
        role="Next"
      >
        &gt;
      </ArrowButton>
    </PaginationWrapper>
  );
}
