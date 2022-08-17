const Pagination = (props: PaginationProps) => (
  <div className="container flex justify-between my-4 items-center">
    <button
      onClick={() => {
        props.onPreviousPage();
        window.scrollTo({ top: 0 });
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
    >
      Previous Page
    </button>

    <div className="text-sm text-gray-500">Page {props.currentPage}/40</div>

    <button
      onClick={() => {
        props.onNextPage();
        window.scrollTo({ top: 0 });
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
    >
      Next Page
    </button>
  </div>
);

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export default Pagination;
