import { PageButton, PaginationWrapper, ArrowButton } from './styled';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination(props: PaginationProps) {
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
      props.onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (props.totalPages <= 5) {
      for (let i = 1; i <= props.totalPages; i++) {
        pages.push(
          <PageButton
            key={i}
            $active={i === props.currentPage}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </PageButton>
        );
      }
    } else {
      if (props.currentPage > 3) {
        pages.push(
          <PageButton key={1} onClick={() => handlePageClick(1)}>
            1
          </PageButton>
        );
        if (props.currentPage > 4) {
          pages.push(<span key="dots-start">...</span>);
        }
      }
      for (
        let i = Math.max(1, props.currentPage - 2);
        i <= Math.min(props.totalPages, props.currentPage + 2);
        i++
      ) {
        pages.push(
          <PageButton
            key={i}
            $active={i === props.currentPage}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </PageButton>
        );
      }
      if (props.currentPage < props.totalPages - 2) {
        if (props.currentPage < props.totalPages - 3) {
          pages.push(<span key="dots-end">...</span>);
        }
        pages.push(
          <PageButton
            key={props.totalPages}
            onClick={() => handlePageClick(props.totalPages)}
          >
            {props.totalPages}
          </PageButton>
        );
      }
    }
    return pages;
  };

  return (
    <PaginationWrapper role="pagination">
      <ArrowButton
        onClick={() => handlePageClick(props.currentPage - 1)}
        disabled={props.currentPage === 1}
      >
        &lt;
      </ArrowButton>
      {renderPageNumbers()}
      <ArrowButton
        onClick={() => handlePageClick(props.currentPage + 1)}
        disabled={props.currentPage === props.totalPages}
        role="Next"
      >
        &gt;
      </ArrowButton>
    </PaginationWrapper>
  );
}
