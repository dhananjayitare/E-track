function FloatingInput({ search, setSearch }) {
  return (
    <div>
      
      <form className="max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
        
        <div className="flex gap-2">
          
          {/* Search Input */}
          <input
            type="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4  py-1 border border-gray-300 rounded-md bg-white outline-none focus:ring-2 focus:ring-blue-500 h-10 w-50"
            placeholder="Search..."
          />
          {/* Search Button */}
          {/* <button
            type="submit"
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white border border-blue-600 rounded-md text-sm font-medium hover:bg-blue-700 h-10 w-fit"
          >
            
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
          </button> */}
        </div>
      </form>
    </div>
  );
}
export default FloatingInput;