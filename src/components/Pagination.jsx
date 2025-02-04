import PropTypes from "prop-types";

function Pagination({ page, handlePrevClick, handleNextClick, totalPage }) {
  return (
    <div className="flex justify-center items-center my-4">
      <button
        className={` ${
          page !== 1 ? "bg-purple-200 hover:bg-yellow-200" : "bg-gray-400"
        } text-white font-bold py-2 px-4 rounded mr-2 ${
          page === 1 ? "cursor-not-allowed" : ""
        }`}
        onClick={handlePrevClick}
        disabled={page === 1}
      >
        Prev
      </button>
      <h1>{page}/{totalPage}</h1>
      <button
        className={` ${page !== 11 ? "bg-purple-200 hover:bg-yellow-200" : "bg-blue-200"}
         text-green-900 font-bold py-2 px-4 ml-2 rounded ${
          page === 11 ? "cursor-not-allowed" : ""
        }`}
        onClick={handleNextClick}
        disabled={page === totalPage}
      >
        Next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
};

export default Pagination;
