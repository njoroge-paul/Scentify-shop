function SearchBar() {
  return (
    <div className="flex justify-center mt-4 mb-4 ">
      <form className="flex  items-center ">
        <input
          type="search"
          placeholder="Search..."
          className="search-input p-2 border-[#1F5AE0] border-2 placeholder:text-center rounded w-full  "
        />
        <button type="submit" className="  search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-[#1FE045]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
